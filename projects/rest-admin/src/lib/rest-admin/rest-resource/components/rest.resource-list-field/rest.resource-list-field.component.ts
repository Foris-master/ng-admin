import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { RestField, REST_FIELD_TYPES } from '../../models/rest-resource.model';
import { RestLangService } from '../../service/rest-lang.service';
import * as _ from 'lodash';
import {
  NbTreeGridDataSource,
  NbSortDirection,
  NbTreeGridDataSourceBuilder,
  NbSortRequest,
} from '@nebular/theme';

@Component({
  selector: 'ngx-rest-resource-list-field',
  templateUrl: './rest.resource-list-field.component.html',
  styleUrls: ['./rest.resource-list-field.component.scss'],
})
export class RestResourceListFieldComponent implements OnInit, ViewCell {
  @Input() value: any;
  @Input() rowData: any;
  val: any;
  restField!: RestField;
  class!: string;
  style!: string;

  customColumn = 'name';
  allColumns = [this.customColumn];
  dataSource!: NbTreeGridDataSource<any>;
  image: any;
  //json options
  _jsonValue: any;

  constructor(
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<any>,
    private langService: RestLangService
  ) {}
  ngOnInit() {
    this.restField = this.value.restField;
    this.val = _.get(this.rowData, this.restField.label);
    switch (this.restField.type) {
      case REST_FIELD_TYPES.HAS_MANY:
        const datas: any = [];

        this.val.forEach((item: any) => {
          datas.push({
            data: {
              name: this.restField?.metaData?.listConfig?.restManyResources
                .label
                ? item[
                    this.restField.metaData.listConfig.restManyResources.label
                  ]
                : item,
              item,
            },
          });
        });

        const rowsT = [
          {
            data: {
              name: this.restField.name,
              place: 'header-place',
            },
            children: datas,
          },
        ];
        this.dataSource = this.dataSourceBuilder.create(rowsT);
        break;

      case REST_FIELD_TYPES.BELONG_TO_MANY:
        const items: any = [];

        this.val.forEach((item: any) => {
          items.push({
            data: {
              name: item[
                this.restField.metaData.listConfig.restBelongToManyResources
                  .label
              ],
              item,
            },
          });
        });

        const rowsBelongToMany = [
          {
            data: {
              name: this.restField.name,
              place: 'header-place',
            },
            children: items,
          },
        ];
        this.dataSource = this.dataSourceBuilder.create(rowsBelongToMany);
        break;

      case REST_FIELD_TYPES.HAS_ONE:
        if (
          this.val &&
          !this.restField?.metaData?.listConfig?.restHasOneResources?.template
        ) {
          this.val =
            this.val[
              this.restField.metaData.listConfig.restHasOneResources.name
            ];
        }
        break;
      case REST_FIELD_TYPES.COLOR:
        if (!this.val) {
          this.val = '#E4E4E4';
        }
        break;
      default:
        break;
    }

    this.class = this.restField.metaData?.listConfig?.class;
    this.style = this.restField.metaData?.listConfig?.style;
  }

  get REST_FIELD_TYPES() {
    return REST_FIELD_TYPES;
  }
  get jsonValue(): any {
    try {
      if (!this.restField || !this.val) {
        throw new Error('Missing required data properties');
      }
  
      if (this.restField.i18n === true && this.restField.metaData && this.restField.metaData.addConfig.jsonConfig) {
        const selectedField = this.restField.metaData.addConfig.jsonConfig.jsonFields.find((field) => field === this.langService.selected);
  
        if (selectedField) {
          if (typeof this.val === 'string' && this.val[0] === '{') {
            const parsedData = JSON.parse(this.val);
            if (parsedData[selectedField]) {
              this._jsonValue = parsedData[selectedField];
            } else {
              throw new Error('Invalid i18n language selected');
            }
          } else if (typeof this.val === 'object' && this.val[selectedField]) {
            this._jsonValue = this.val[selectedField];
          } else if (typeof this.val === 'string') {
            this._jsonValue = this.val;
          } else {
            throw new Error('Invalid data format for i18n field');
          }
        } else {
          throw new Error('Invalid i18n language selected');
        }
      } else {
        this._jsonValue = this.val;
      }
  
      if (typeof this._jsonValue === 'object') {
        this._jsonValue = JSON.stringify(this._jsonValue);
      }
    } catch (err) {
      console.log(`Error occurred in jsonValue: ${err}`);
      this._jsonValue = this.val.toString();
    }
  
    return this._jsonValue;
  }
}
