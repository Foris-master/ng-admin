import { RestField } from "./../models/rest-resource.model";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RestResource } from "../models/rest-resource";
import { REST_FIELD_TYPES } from "../models/rest-resource.model";
import { RestAdminConfigService } from "../service/rest-admin-config.service";
import { RestResourceService } from "../service/rest-resource.service";
import {
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
} from "@nebular/theme";

@Component({
  selector: "ngx-rest-resource-detail",
  templateUrl: "./rest-resource-detail.component.html",
  styleUrls: ["./rest-resource-detail.component.scss"],
})
export class RestResourceDetailComponent implements OnInit {
  @Input() resource: RestResource;
  datas: any;
  entityId: number;
  ressourceName: string;
  customColumn = "name";
  allColumns = [this.customColumn];
  listDataSource: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceRest: RestResourceService,
    private serviceRestAdminConfig: RestAdminConfigService,
    private router: Router,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<any>
  ) {
    activatedRoute.params.subscribe((params) => {
      if (Object.keys(params).length != 0) {
        this.ressourceName =
          this.activatedRoute.snapshot.url[
            this.activatedRoute.snapshot.url.length - 2
          ].path.split("-")[0];

        this.resource = this.serviceRestAdminConfig.getSpecificResource(
          this.ressourceName
        );

        this.serviceRest
          .getOneResource(
            {
              api: this.resource.detailConfig.api,
              queryParams: this.resource.detailConfig.queryParams,
            },
            params.id
          )
          .subscribe((response: any) => {
            const colunms: any = {};
            this.entityId = response.id;
            this.resource.fields.forEach((elt) => {
              colunms[elt.name] = {
                restField: elt,
                data: response[elt.label],
              };
            });
            this.datas = colunms;
            console.log(response);

            for (const property in this.datas) {
              switch (this.datas[property].restField.type) {
                case REST_FIELD_TYPES.HAS_MANY:
                  const datas = [];

                  this.datas[property].data.forEach((item) => {
                    datas.push({
                      data: {
                        name: item[
                          this.datas[property].restField.metaData.listConfig
                            .restManyResources.label
                        ],
                        item,
                      },
                    });
                  });

                  const rowsT = [
                    {
                      data: {
                        name: this.datas[property].restField.name,
                        place: "header-place",
                      },
                      children: datas,
                    },
                  ];
                  this.listDataSource[this.datas[property].restField.name] =
                    this.dataSourceBuilder.create(rowsT);
                  break;

                case REST_FIELD_TYPES.BELONG_TO_MANY:
                  const items = [];

                  this.datas[property].data.forEach((item) => {
                    items.push({
                      data: {
                        name: item[
                          this.datas[property].restField.metaData.listConfig
                            .restBelongToManyResources.label
                        ],
                        item,
                      },
                    });
                  });

                  const rowsBelongToMany = [
                    {
                      data: {
                        name: this.datas[property].restField.name,
                        place: "header-place",
                      },
                      children: items,
                    },
                  ];
                  this.listDataSource[this.datas[property].restField.name] =
                    this.dataSourceBuilder.create(rowsBelongToMany);
                  break;

                default:
                  break;
              }
            }
          });
      }
    });
  }

  ngOnInit(): void {}

  editEntity() {
    this.router.navigate([`/admin/${this.ressourceName}-edit`, this.entityId]);
  }

  listEntity() {
    this.router.navigateByUrl(`/admin/${this.ressourceName}-list`);
  }

  get REST_FIELD_TYPES() {
    return REST_FIELD_TYPES;
  }

  loadBelongToDetail(data) {
    const resourceName =
      data.restField.metaData.addConfig.belongToOptions.resourceName;

    this.router.navigate([`/admin/${resourceName}-detail`, data.data]);
  }
}
