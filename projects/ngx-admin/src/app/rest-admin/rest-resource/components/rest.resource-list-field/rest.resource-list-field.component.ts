import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { ViewCell } from "ng2-smart-table";
import { RestField, REST_FIELD_TYPES } from "../../models/rest-resource.model";
import { RestLangService } from "../../service/rest-lang.service";
import * as _ from "lodash";
import {
  NbTreeGridDataSource,
  NbSortDirection,
  NbTreeGridDataSourceBuilder,
  NbSortRequest,
} from "@nebular/theme";

@Component({
  selector: "ngx-rest-resource-list-field",
  templateUrl: "./rest.resource-list-field.component.html",
  styleUrls: ["./rest.resource-list-field.component.scss"],
})
export class RestResourceListFieldComponent implements OnInit, ViewCell {
  @Input() value: any;
  @Input() rowData: any;
  val: any;
  restField: RestField;
  class: string;
  style: string;

  customColumn = "name";
  allColumns = [this.customColumn];
  dataSource: NbTreeGridDataSource<any>;
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
        const datas = [];

        this.val.forEach((item) => {
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
              place: "header-place",
            },
            children: datas,
          },
        ];
        this.dataSource = this.dataSourceBuilder.create(rowsT);
        break;

      case REST_FIELD_TYPES.BELONG_TO_MANY:
        const items = [];

        this.val.forEach((item) => {
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
              place: "header-place",
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
      default:
        break;
    }

    this.class = this.restField.metaData?.listConfig?.class;
    this.style = this.restField.metaData?.listConfig?.style;
  }

  get REST_FIELD_TYPES() {
    return REST_FIELD_TYPES;
  }
  get jsonValue() {
    if (this.restField.i18n == true) {
      this.restField.metaData.addConfig.jsonConfig.jsonFields.map((field) => {
        if (field == this.langService.selected) {
          if (this.val[0] == "{") this._jsonValue = JSON.parse(this.val)[field];
          else if (typeof this.val !== "string")
            this._jsonValue = this.val[field];
          else this._jsonValue = this.val;
        }
      });
    } else {
      this._jsonValue = this.val;
    }

    if (typeof this.val == "object") return JSON.stringify(this._jsonValue);
    else return this._jsonValue;
  }
}

@Component({
  selector: "ngx-fs-icon",
  template: `
    <nb-tree-grid-row-toggle
      [expanded]="expanded"
      *ngIf="isDir(); else fileIcon"
    >
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon> </ng-template>
  `,
})
export class FsIconCComponent {
  @Input() expanded: boolean;
  @Input() place: string;

  isDir(): boolean {
    return this.place == "header-place";
  }
}
