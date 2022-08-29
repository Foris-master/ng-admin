import { FILTER_OPERATORS } from "./../service/rest-resource.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { LocalDataSource, ServerDataSource } from "ng2-smart-table";
import { RestField, REST_FIELD_TYPES } from "../models/rest-resource.model";
import * as _ from "lodash";
import { NbDialogService, NbMenuService } from "@nebular/theme";
import { ActivatedRoute, Router } from "@angular/router";
import { RestAdminConfigService } from "../service/rest-admin-config.service";
import { RestResourceEditorFieldsComponent } from "../components/rest-resource-editor-fields/rest-resource-editor-fields.component";
import { RestResourceListFieldComponent } from "../components/rest.resource-list-field/rest.resource-list-field.component";
import { RestResourceDeleteComponent } from "../rest-ressource-delete/rest-resource-delete.component";
import { RestResource } from "../models/rest-resource";
import { RestResourceService } from "../service/rest-resource.service";
import { filter, map } from "rxjs/operators";
import { ALPHABET, RestExportService } from "../service/rest-export.service";

@Component({
  selector: "ngx-rest-resource-list",
  templateUrl: "./rest-resource-list.component.html",
  styleUrls: ["./rest-resource-list.component.scss"],
})
export class RestResourceListComponent implements OnInit {
  @Input() resource: RestResource;
  @ViewChild("search") search;

  alphabelt: string[] = ALPHABET;
  data: any;
  settings: any;
  source: ServerDataSource;
  isFetching = true;
  ressourceName = "";
  filterBy = "";
  filterOperator = FILTER_OPERATORS;
  exportAsConfig = {
    type: "png", // the type you want to download
    elementId: "myTableElementId", // the id of html/table element
  };

  items = [
    { title: "All formats" },
    { title: "CSV" },
    { title: "EXCEL" },
    { title: "PDF" },
  ];

  constructor(
    private serviceRestConfig: RestAdminConfigService,
    private serviceRestResources: RestResourceService,
    private http: HttpClient,
    private dialogService: NbDialogService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private nbMenuService: NbMenuService,
    private exportService: RestExportService
  ) {
    this.ressourceName =
      this.activatedRoute.snapshot.url[
        this.activatedRoute.snapshot.url.length - 1
      ].path.split("-")[0];

    this.resource = this.serviceRestConfig.getSpecificResource(
      this.ressourceName
    );
  }

  ngOnInit(): void {
    this.settings = {
      hideSubHeader: this.resource.listConfig.hideAddSubHeader,
      actions: {
        position: "right",
        custom: [
          {
            name: "delete",
            title: "<i  class='nb-trash'></i> ",
          },
          {
            name: "detail",
            title: "<i class='nb-compose'></i>",
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
      // edit: {
      //   editButtonContent: '<i class="nb-edit"></i>',
      //   saveButtonContent: '<i class="nb-checkmark"></i>',
      //   cancelButtonContent: '<i class="nb-close"></i>',
      // },
      // delete: {
      //   deleteButtonContent: '<i  class="nb-trash"></i>',
      //   confirmDelete: true,
      // },
    };

    this.getList();

    this.source.onChanged().subscribe((e) => {
      setTimeout(() => {
        this.isFetching = false;
      });
    });

    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === "my-context"),
        map(({ item: { title } }) => title)
      )
      .subscribe((title) => {
        switch (title) {
          case "EXCEL":
            this.exportToExcel();
            break;
          case "PDF":
            this.exportToPdf();
            break;
          case "CSV":
            this.exportToCsv();
            break;
          default:
            this.exportAll();
            break;
        }
      });
  }

  onDeleteConfirm(event) {
    const dialog = this.dialogService.open(RestResourceDeleteComponent, {
      context: {
        datas: event.data,
        title: "SUPPRESSION",
        listConfig: this.resource.listConfig,
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
    this.router.navigate([
      `/admin/${this.ressourceName}-detail`,
      event.data.id,
    ]);
  }

  private createMatTableColumns() {
    const colunms: any = {};
    this.resource.fields
      .filter((item) => this.resource.listConfig.columns.includes(item.name))
      .forEach((elt) => {
        colunms[elt.name] = {
          title: elt.label,
          type: "custom",
          filter: false,
          addable: true,
          valuePrepareFunction: (cell, row) => ({
            restField: elt,
            cell,
            row,
          }),
          editor: {
            type: "custom",
            component: RestResourceEditorFieldsComponent,
          },
          renderComponent: RestResourceListFieldComponent,
        };
      });
    return colunms;
  }

  getList(page = null, perPage = null) {
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
        "/" +
        this.resource.listConfig.api +
        "?" +
        Object.keys(this.resource.listConfig.queryParams)
          .reduce(
            (cumul, item) =>
              cumul +
              item +
              "=" +
              this.resource.listConfig.queryParams[item] +
              ",",
            ""
          )
          .slice(0, -1),
      dataKey: "data",
      pagerPageKey: "page",
      pagerLimitKey: "per_page",
      totalKey: "total",
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
                [item["saveRelatedIdName"]]: item[item["saveRelatedIdName"]],
                [item["saveResourceIdName"]]: response.id,
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

  onFilter(value: string) {
    if (this.resource.listConfig.searchFilter.filterBy.length > 1) {
      // return this.source.setFilter(
      //   [
      //     {
      //       field: this.filterBy,
      //       search: value.toLowerCase(),
      //     },
      //   ],
      //   false
      // );
      console.log("Filter by", this.filterBy);
      console.log("Filter by", this.filterBy);
    }
  }

  onCustom(event) {
    switch (event.action) {
      case "delete":
        this.onDeleteConfirm(event);
        break;
      case "detail":
        this.detailEntity(event);
        break;
    }
  }

  getFullData() {
    return this.serviceRestResources.getResources({
      api: this.resource.listConfig.api,
      queryParams: {
        should_paginate: false,
      },
    });
  }

  exportToExcel(): void {
    const colunms: any = {};
    const sheetHeader = {};

    this.resource.fields
      .filter((item) => this.resource.listConfig.columns.includes(item.name))
      .forEach((elt) => {
        colunms[elt.name] = {
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
        { A: "Rest Excel export" }, // title
        sheetHeader, // table header
      ],
      skipHeader: true,
    };
    let elt = {};

    this.getFullData().subscribe((response: any) => {
      response.forEach((element, indice) => {
        elt = {};
        Object.entries(colunms).forEach(([key, value], index) => {
          elt[this.alphabelt[index]] = element[sheetHeader[keys[index]]];
        });
        udt.data.push(elt);
      });

      edata.push(udt);
      this.exportService.exportToExcel(edata, "rest_file_excel");
    });
  }

  exportToPdf(): void {
    const colunms = {};
    const customData = [];
    const header = [];
    let elt = [];

    this.resource.fields
      .filter((item) => this.resource.listConfig.columns.includes(item.name))
      .forEach((elt) => {
        header.push(elt.label);
      });

    this.getFullData().subscribe((response: any) => {
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
        "rest_file_pdf",
        fileTitle
      );
    });
  }

  exportToCsv(): void {
    const colunms = {};
    const customData = [];
    const header = [];
    let elt = {};

    this.resource.fields
      .filter((item) => this.resource.listConfig.columns.includes(item.name))
      .forEach((elt) => {
        header.push(elt.label);
      });

    this.getFullData().subscribe((response: any) => {
      response.forEach((element) => {
        elt = {};
        header.forEach((row) => {
          elt[row] = element[row];
        });
        customData.push(elt);
      });
      this.exportService.exportToCsv(header, customData, "rest_file_csv");
    });
  }

  exportAll(): void {
    const colunms = {};
    const pdfAndCsvHeader = [];
    const sheetHeader = {};
    const csvData = [];
    const pdfData = [];
    let eltPDF = [];
    let eltCSV = {};
    let eltEXCEL = {};

    this.resource.fields
      .filter((item) => this.resource.listConfig.columns.includes(item.name))
      .forEach((elt) => {
        pdfAndCsvHeader.push(elt.label);
        colunms[elt.name] = {
          title: elt.label,
        };
      });

    Object.entries(colunms).forEach(([key, value], index) => {
      sheetHeader[this.alphabelt[index]] = key;
    });

    const excelData: any = {
      data: [{ A: "Rest Excel export" }, sheetHeader],
      skipHeader: true,
    };

    const keys = Object.keys(sheetHeader);
    const edata: Array<any> = [];

    this.getFullData().subscribe((response: any) => {
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

  selectFilterBy(value) {
    console.log(value);
  }
}
