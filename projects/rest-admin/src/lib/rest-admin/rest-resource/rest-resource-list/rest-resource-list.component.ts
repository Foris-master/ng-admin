import { FILTER_OPERATORS } from './../service/rest-resource.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import {
  RestField,
  REST_FIELD_TYPES,
  PERMISSION,
} from '../models/rest-resource.model';
import * as _ from 'lodash';
import { NbDialogService, NbMenuService, NbTagComponent } from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { RestAdminConfigService } from '../service/rest-admin-config.service';
import { RestResourceEditorFieldsComponent } from '../components/rest-resource-editor-fields/rest-resource-editor-fields.component';
import { RestResourceListFieldComponent } from '../components/rest.resource-list-field/rest.resource-list-field.component';
import { RestResourceDeleteComponent } from '../rest-ressource-delete/rest-resource-delete.component';
import { RestResource } from '../models/rest-resource';
import { RestResourceService } from '../service/rest-resource.service';
import { filter, map } from 'rxjs/operators';
import { ALPHABET, RestExportService } from '../service/rest-export.service';
import { RestShareService } from '../service/rest-share.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription, of } from 'rxjs';
import { SelectAllCheckboxRenderComponent } from '../components/fs-icon-ccomponent/select.component';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'ngx-rest-resource-list',
  templateUrl: './rest-resource-list.component.html',
  styleUrls: ['./rest-resource-list.component.scss'],
})
export class RestResourceListComponent implements OnInit {
  private subscription: Subscription;
  @Input() resource: RestResource;
  @ViewChild('search') search;
  @ViewChild('autoBelongToMany') inputBelongToMany;
  form: FormGroup;

  alphabelt: string[] = ALPHABET;
  data: any;
  settings: any;
  source: ServerDataSource;
  currentPerPage: number;
  isFetching = true;
  ressourceName = '';
  filterBy = '';
  filterOperator = FILTER_OPERATORS;
  exportAsConfig = {
    type: 'png', // the type you want to download
    elementId: 'myTableElementId', // the id of html/table element
  };
  searchItems = [];
  searchItem = '';

  showCheckbox = false;
  showDetails = false;
  options: any = {};
  allFilterContains: any = {};
  belongToValue: any = {};
  belongToMany: any = {};
  controls: any;
  isChecked: any = {};

  selectedRows: any[] = [];

  items = []
  perPagesOptions = [
    { title: '5', value: 5 },
    { title: '10', value: 10 },
    { title: '20', value: 20 },
    { title: '50', value: 50 },
    { title: '100', value: 100 },
  ];

  permissions = [PERMISSION.CREATE, PERMISSION.READ, PERMISSION.DELETE];

  get PERMISSION() {
    return PERMISSION;
  }
  custom = false;
  constructor(
    private fb: FormBuilder,
    private serviceRestConfig: RestAdminConfigService,
    private serviceRestResources: RestResourceService,
    private http: HttpClient,
    private dialogService: NbDialogService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private nbMenuService: NbMenuService,
    private exportService: RestExportService,
    public restShare: RestShareService,
    private permissionsService: NgxPermissionsService,
    private serviceRest: RestResourceService
  ) {
    this.ressourceName =
      this.activatedRoute.snapshot.url[
        this.activatedRoute.snapshot.url.length - 1
      ].path.split('-')[0];

    this.resource = this.serviceRestConfig.getSpecificResource(
      this.ressourceName
    );

    // this.belongToMany['id'] = new Set();
    if (this.resource.listConfig?.searchFilter?.filterBy) {
      this.controls = this.resource.listConfig?.searchFilter?.filterBy?.reduce(
        (cumul, elt) => {
          switch (elt.type) {
            case REST_FIELD_TYPES.BELONG_TO_MANY:
              this.belongToMany[elt.value] = new Set();
              return {
                ...cumul,
                [elt.name]: [],
              };
            default:
              return {
                ...cumul,
                [elt.name]: [''],
              };
          }
        },
        {}
      );
    }

    this.form = this.fb.group(this.controls);
    this.belongToMany['id'] = new Set();
  }

  initExportItems() {
    if(this.resource.listConfig.exportResource){
      this.items = this.resource.listConfig.exportConfig.formats.map((item) => ({
        title: item,
      }));
    }
   
  }

  ngOnInit(): void {
    this.initExportItems()
    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'export-context'),
        map(({ item: { title } }) => title)
      )
      .subscribe((title) => {
        switch (title) {
          case 'EXCEL':
            this.exportToExcel();
            break;
          case 'PDF':
            this.exportToPdf();
            break;
          case 'CSV':
            this.exportToCsv();
            break;
          default:
            this.exportAll();
            break;
        }
      });

    if (this.resource.listConfig.searchFilter) {
      this.searchItems.push({
        field: '',
        operator: '',
        terms: '',
      });
    }

    this.currentPerPage = this.resource.listConfig.perPage;

    this.getList();

    this.source.onChanged().subscribe((e) => {
      setTimeout(() => {
        this.restShare.setLoader(false);
      });
    });

    this.isChecked = {
      title: 'check',
      type: 'custom',
      filter: false,
      addable: true,
      valuePrepareFunction: (cell, row) => ({
        handleCheckboxClick: (event, rowData) =>
          this.onCheckboxClick(event, rowData),
        selected:
          this.selectedRows.find((elt) => elt?.id == row?.id) !== undefined,
        cell,
        row,
      }),
      editor: {
        type: 'checkbox',
      },
      renderComponent: SelectAllCheckboxRenderComponent,
      editable: true,
    };

    if (this.resource.permissions.length > 0) {
      const custom = [];
      this.resource.permissions.forEach((permission) => {
        this.serviceRest
          .getResources({
            api: permission.fieldKey.api.substring(1),
            queryParams: permission.fieldKey.queryParams
              ? permission.fieldKey.queryParams
              : {},
          })
          .subscribe((resp) => {
            const val = {};

            permission.fieldKey.fieldForNextQuery.forEach((item) => {
              val[item] = _.get(resp, item);
              if (val[item]) {
                this.permissionsService.addPermission(permission.type);
                if (permission.type === PERMISSION.READ) {
                  custom.push({
                    name: 'detail',
                    title: "<i class='nb-compose'></i>",
                  });
                }
                if (permission.type === PERMISSION.DELETE) {
                  custom.push({
                    name: 'delete',
                    title: "<i class='nb-trash text-danger'></i>",
                  });
                }
              }

              this.custom = true;
              this.settings = {
                hideSubHeader: this.resource.listConfig.hideAddSubHeader,
                actions: {
                  position: 'right',
                  custom: custom,
                  edit: false,
                  delete: false,
                },
                pager: {
                  perPage: this.resource.listConfig.perPage,
                },

                columns: this.createMatTableColumns(),

                add: {
                  addButtonContent: '<i class="nb-plus" ></i>',
                  createButtonContent: '<i class="nb-checkmark"></i>',
                  cancelButtonContent: '<i class="nb-close"></i>',
                  confirmCreate: true,
                },
              };
            });
          });
      });
    } else {
      this.settings = {
        hideSubHeader: this.resource.listConfig.hideAddSubHeader,
        actions: {
          position: 'right',
          custom: [
            {
              name: 'detail',
              title: "<i class='nb-compose'></i>",
            },
            {
              name: 'delete',
              title: "<i class='nb-trash text-danger'></i>",
            },
          ],
          edit: false,
          delete: false,
        },
        pager: {
          perPage: this.resource.listConfig.perPage,
        },

        columns: this.createMatTableColumns(),

        add: {
          addButtonContent: '<i class="nb-plus" ></i>',
          createButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
          confirmCreate: true,
        },
      };
    }
  }

  toggleShowCheckbox() {
    this.showCheckbox = !this.showCheckbox;
    this.source.refresh();
  }

  onDeleteConfirm(event) {
    const dialog = this.dialogService.open(RestResourceDeleteComponent, {
      context: {
        datas: event.data,
        title: 'SUPPRESSION',
        multiSuppress: false,
        listConfig: this.resource.listConfig,
        resourceName: this.ressourceName,
      },
    });

    dialog.onClose.subscribe((resp) => {
      if (resp) {
        this.getList(
          this.source.getPaging().page,
          this.source.getPaging().perPage
        );
      }
    });
  }

  onDeleteAllConfirm() {
    const dialog = this.dialogService.open(RestResourceDeleteComponent, {
      context: {
        datas: this.selectedRows,
        multiSuppress: true,
        title: 'TOUT SUPPRIMER',
        listConfig: this.resource.listConfig,
        resourceName: this.ressourceName,
      },
    });

    dialog.onClose.subscribe((resp) => {
      if (resp) {
        this.getList(
          this.source.getPaging().page,
          this.source.getPaging().perPage
        );
      }
    });
  }

  addNewEntity() {
    this.router.navigateByUrl(`/admin/${this.ressourceName}-add`);
  }

  detailEntity(event) {
    if (this.resource.permissions.length > 0) {
      if (this.permissionsService.hasPermission(PERMISSION.READ)) {
        this.router.navigate([
          `/admin/${this.ressourceName}-detail`,
          event.data.id,
        ]);
      }
    } else {
      this.router.navigate([
        `/admin/${this.ressourceName}-detail`,
        event.data.id,
      ]);
    }
  }

  onCheckboxClick(event: any, row: any) {
    if (this.selectedRows.indexOf(row) === -1) {
      this.selectedRows.push(row);
    } else {
      this.selectedRows.splice(this.selectedRows.indexOf(row), 1);
    }
  }

  selectAllRows() {
    this.source.getAll().then((rows) => {
      if (this.selectedRows?.length !== rows?.length) {
        this.selectedRows = [];
        rows.forEach((row) => {
          this.selectedRows.push(row);
        });
      } else {
        this.selectedRows = [];
      }
      this.source.refresh();
    });
  }

  private createMatTableColumns() {
    const colunms: any = {};
    if (!this.showCheckbox) {
      colunms['isChecked'] = this.isChecked;
    }
    this.resource.fields
      .filter((item) => this.resource.listConfig.columns.includes(item.name))
      .forEach((elt) => {
        colunms[elt.name] = {
          title: elt.label,
          type: 'custom',
          filter: false,
          addable: true,
          valuePrepareFunction: (cell, row) => ({
            restField: elt,
            cell,
            row,
          }),
          editor: {
            type: 'custom',
            component: RestResourceEditorFieldsComponent,
          },
          renderComponent: RestResourceListFieldComponent,
        };
      });
    return colunms;
  }

  getList(page = null, perPage = null) {
    this.restShare.setLoader(true);
    if (page) {
      this.resource.queryParams = { ...this.resource.queryParams, page };
    }
    if (perPage) {
      this.resource.queryParams = {
        ...this.resource.queryParams,
        per_page: perPage,
      };
    }
    this.source = new ServerDataSource(this.http, {
      endPoint:
        this.serviceRestConfig.restBaseUrl +
        '/' +
        this.resource.listConfig.api +
        '?' +
        Object.keys(this.resource.listConfig.queryParams)
          .reduce(
            (cumul, item) =>
              cumul +
              item +
              '=' +
              this.resource.listConfig.queryParams[item] +
              '&',
            ''
          )
          .slice(0, -1),
      dataKey: 'data',
      pagerPageKey: 'page',
      pagerLimitKey: 'per_page',
      totalKey: 'total',
      filterFieldKey: `#_include#`,
    });
  }

  onCreateConfirm(event) {
    const datas = event.newData;
    const saveBelongTomany = [];

    this.resource.fields.forEach((elt) => {
      if (elt.type == REST_FIELD_TYPES.BELONG_TO_MANY) {
        saveBelongTomany.push({
          resources: datas[elt.name],
          pivot: elt.metaData.addConfig.belongToManyOptions.pivotName,
        });
        delete datas[elt.name];
      }
    });

    this.serviceRestResources
      .addResources(this.resource.addConfig, { ...datas, user_id: 1 })
      .subscribe((response: any) => {
        if (saveBelongTomany.length > 0) {
          saveBelongTomany.forEach((element, index) => {
            const restResource = this.serviceRestConfig.getSpecificResource(
              element.pivot
            );
            const proms = [];

            for (let index = 0; index < element.resources.length; index++) {
              const item = element.resources[index];
              const data = {
                [item['saveRelatedIdName']]: item[item['saveRelatedIdName']],
                [item['saveResourceIdName']]: response.id,
              };

              proms.push(
                this.serviceRestResources
                  .addResources(restResource.addConfig, data)
                  .toPromise()
              );
            }

            Promise.all(proms).then((res) => {
              this.getList(
                this.source.getPaging().page,
                this.source.getPaging().perPage
              );
            });
          });
        } else
          this.getList(
            this.source.getPaging().page,
            this.source.getPaging().perPage
          );
      });
  }

  onCustom(event) {
    switch (event.action) {
      case 'delete':
        this.onDeleteConfirm(event);
        break;
      case 'detail':
        this.detailEntity(event);
        break;
    }
  }



   remplacerKey(tableau, correspondances) {
    tableau.forEach(objet => {
      correspondances.forEach(({ key, label }) => {
        const valeur = _.get(objet, key);
        if (valeur !== undefined) {
          _.set(objet, label, valeur);
          _.unset(objet, key);
        }
      });
    });
    return tableau;
  }

  getFullData() {
    return this.serviceRestResources.getResources({
      api: this.resource.listConfig.api,

      queryParams: {
        should_paginate: false,
        ...this.resource.listConfig.queryParams
      },
    });
  }

  exportToExcel(): void {
    const colunms: any = {};
    const sheetHeader = {};

    this.resource.listConfig.exportConfig.columnFile
      .forEach((elt) => {
        colunms[elt.label] = {
          title: elt.label,
        };
      });

    Object.entries(colunms).forEach(([key, value], index) => {
      sheetHeader[this.alphabelt[index]] = key;
    });

    const keys = Object.keys(sheetHeader);
    const edata: Array<any> = [];
    const udt: any = {
      data: [
        { A: 'Rest Excel export' }, // title
        sheetHeader, // table header
      ],
      skipHeader: true,
    };
    let elt = {};

    this.getFullData().subscribe((resp: any) => {

      const response = this.remplacerKey(resp, this.resource.listConfig.exportConfig.columnFile);

      response.forEach((element, indice) => {
        elt = {};
        Object.entries(colunms).forEach(([key, value], index) => {
          elt[this.alphabelt[index]] = element[sheetHeader[keys[index]]];
        });
        udt.data.push(elt);
      });

      edata.push(udt);
      this.exportService.exportToExcel(edata, 'rest_file_excel');
    });
  }

  exportToPdf(): void {
    const colunms = {};
    const customData = [];
    let elt = [];

   
    const header = this.resource.listConfig.exportConfig.columnFile.map((item) => item.label);

    this.getFullData().subscribe((resp: any) => {

      const response = this.remplacerKey(resp, this.resource.listConfig.exportConfig.columnFile);

      response.forEach((element) => {
        elt = [];
        header.forEach((row) => {
          elt.push(element[row]);
        });
        customData.push(elt);
      });
      const fileTitle: string = this.resource.name;
      this.exportService.exportToPdf(
        header,
        customData,
        'rest_file_pdf',
        fileTitle
      );
    });
  }

  exportToCsv(): void {
    const colunms = {};
    const customData = [];
    let elt = {};

   const header = this.resource.listConfig.exportConfig.columnFile.map((item) => item.label);
   
    this.getFullData().subscribe((resp: any) => {
     
      const response = this.remplacerKey(resp, this.resource.listConfig.exportConfig.columnFile);
 
      response.forEach((element) => {
        elt = {};
        header.forEach((row) => {
          elt[row] = element[row];
        });
        customData.push(elt);
      });
      this.exportService.exportToCsv(header, customData, 'rest_file_csv');
    });
  }

  exportAll(): void {
    const colunms = {};
    const sheetHeader = {};
    const csvData = [];
    const pdfData = [];
    let eltPDF = [];
    let eltCSV = {};
    let eltEXCEL = {};


   this.resource.listConfig.exportConfig.columnFile.forEach((elt) => {
    colunms[elt.label] = {
      title: elt.label,
    };
  });
   const pdfAndCsvHeader = this.resource.listConfig.exportConfig.columnFile.map((item) => item.label);


    Object.entries(colunms).forEach(([key, value], index) => {
      sheetHeader[this.alphabelt[index]] = key;
    });

    const excelData: any = {
      data: [{ A: 'Rest Excel export' }, sheetHeader],
      skipHeader: true,
    };

    const keys = Object.keys(sheetHeader);
    const edata: Array<any> = [];

    this.getFullData().subscribe((resp: any) => {
      const response = this.remplacerKey(resp, this.resource.listConfig.exportConfig.columnFile);
      response.forEach((element) => {
        //CSV
        eltCSV = {};
        pdfAndCsvHeader.forEach((row) => {
          eltCSV[row] = element[row];
        });
        csvData.push(eltCSV);
        //PDF
        eltPDF = [];
        pdfAndCsvHeader.forEach((row) => {
          eltPDF.push(element[row]);
        });
        pdfData.push(eltPDF);
        //EXCEL
        eltEXCEL = {};
        Object.entries(colunms).forEach(([key, value], index) => {
          eltEXCEL[this.alphabelt[index]] = element[sheetHeader[keys[index]]];
        });
        excelData.data.push(eltEXCEL);
        edata.push(excelData);
      });
      this.exportService.generateZip(pdfAndCsvHeader, pdfData, csvData, edata);
    });
  }

  //Filter

  setPager(setPager) {
    this.source.setPaging(1, setPager, true);
    this.settings = Object.assign({}, this.settings);
  }

  selectFilterBy(data, index) {
    this.searchItems[index].field = data['value'];
    this.searchItems[index].fieldName = data['resourceFieldName'];
    this.searchItems[index].resource = data['resource'];
    this.searchItems[index].ressourceFilterName = data['ressourceFilterName'];
    if (data['value'] === 'id') {
      const resource = data?.resource?.addConfig;
      this.serviceRestResources
        .getResources({
          api: resource.api,
          queryParams: {
            should_paginate: false,
          },
        })
        .subscribe((response: any) => {
          this.options[data['value']] = [...response].sort((x, y) =>
            x['id']
              .toString()
              .toLowerCase()
              ?.localeCompare(y['id'].toString().toLowerCase())
          );
          this.allFilterContains[data['value']] = of(
            this.options[data['value']]
          );
        });
    }
  }

  selectOperator(value, index) {
    this.searchItems[index].operator = value;
  }

  onFilter(val, index) {
    if (index != undefined && index != null) {
      this.searchItems[index].terms = val?.value;
    } else {
      this.searchItem = val?.value;
    }
  }

  addFieldSearch() {
    this.searchItems.push({ field: '', operator: '', terms: '' });
  }

  removeFieldSearch(index) {
    this.searchItems.splice(index, 1);
  }

  private filterMany(
    value: any,
    index: number,
    options = 'belongToManyOptions'
  ): string[] {
    if (typeof value == 'string' && this.options['id']?.length > 0) {
      return this.options['id'].filter((optionValue) => {
        return [
          this.searchItems[index].fieldName
            ? this.searchItems[index].fieldName
            : 'id',
        ].some((elt) => {
          return `${optionValue[elt]?.toLowerCase()}`.includes(
            `${value.toLowerCase()}`
          );
        });
      });
    }
  }

  getFilteredOptions(value: any, index: number): Observable<string[]> {
    return of(value).pipe(
      map((filterString: string) => this.filterMany(filterString, index))
    );
  }

  filterInput(event, index: number) {
    this.allFilterContains['id'] = this.getFilteredOptions(
      event.target.value,
      index
    );
  }

  onTagRemoveBelong(tagToRemove: NbTagComponent): void {
    const cellData = Array.from(this.belongToMany['id']);
    const save = [];
    cellData.forEach((elt) => {
      if (elt['name'] != tagToRemove.text) save.push(elt);
    });

    this.belongToMany['id'] = new Set(save);

    this.form.patchValue({
      ['id']: save,
    });
  }
  //belongToManyOptions
  onChoose(event, index: number) {
    const cellData: any[] = Array.from(this.belongToMany['id']);
    if (event.id) {
      const search = cellData.find((elt: any) => elt.id == event.id);
      if (search == undefined) {
        const newElt = {
          id: event.id,
          saveRelatedIdName: event.id,
          saveResourceIdName: event.id,
          name: event[
            this.searchItems[index].fieldName
              ? this.searchItems[index].fieldName
              : 'id'
          ],
        };
        this.belongToMany['id'].add(newElt);
        this.form.patchValue({
          ['id']: Array.from(this.belongToMany['id'].values()),
        });
      }
    }
    this.inputBelongToMany.nativeElement.value = '';
  }

  startSearch() {
    const params = {};
    let search = '';
    this.searchItems.forEach((element, ind) => {
      if (element?.field === 'id') {
        let tab = [];
        for (const item of this.belongToMany['id']) {
          if (item) {
            tab.push(item);
          }
        }
        if (tab.length > 0) {
          let listId = tab.map((elt: any) => elt?.id).join(',');
          params[`${element?.ressourceFilterName}-in`] = `${listId}`;
        }
      } else {
        if (element?.field != '' && element?.terms != '') {
          if (element?.operator != '=') {
            params[
              element?.field + '-' + element?.operator
            ] = `${element?.terms}`;
          } else {
            params[element?.field] = `${element?.terms}`;
          }
        }
      }
    });
    search = Object.keys(this.resource.listConfig.queryParams)
      .reduce(
        (cumul, item) =>
          cumul + item + '=' + this.resource.listConfig.queryParams[item] + '&',
        ''
      )
      .slice(0, -1);

    if (search != '') {
      search += '&';
    }
    search += Object.keys(params)
      .reduce((cumul, item) => cumul + item + '=' + params[item] + '&', '')
      .slice(0, -1);

    this.source = new ServerDataSource(this.http, {
      endPoint:
        this.serviceRestConfig.restBaseUrl +
        '/' +
        this.resource.listConfig.api +
        '?' +
        search,
      dataKey: 'data',
      pagerPageKey: 'page',
      pagerLimitKey: 'per_page',
      totalKey: 'total',
      filterFieldKey: `#_include#`,
    });
  }
}
