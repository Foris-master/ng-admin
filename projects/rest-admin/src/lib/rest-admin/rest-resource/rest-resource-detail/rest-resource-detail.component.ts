import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RestResource } from "../models/rest-resource";
import { RestField, REST_FIELD_TYPES } from "../models/rest-resource.model";
import { RestAdminConfigService } from "../service/rest-admin-config.service";
import { RestResourceService } from "../service/rest-resource.service";
import {
  NbTreeGridDataSourceBuilder,
} from "@nebular/theme";

@Component({
  selector: "ngx-rest-resource-detail",
  templateUrl: "./rest-resource-detail.component.html",
  styleUrls: ["./rest-resource-detail.component.scss"],
})
export class RestResourceDetailComponent implements OnInit {
  @Input() resource: RestResource;
  @Input() ID: string;
  @Input() ressourceName: string;
  @Input() container: Boolean;
  @Input() style: any;
  datas: any[];
  datas1: any[][];
  entityId: number;
  objectKeys = Object.keys;

  customColumn = "name";
  allColumns = [this.customColumn];
  listDataSource: any = {};
  isTabsMenu = false;
  tabsName = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceRest: RestResourceService,
    private serviceRestAdminConfig: RestAdminConfigService,
    private router: Router,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<any>
  ) {}

  ngOnInit(): void {
    let id;
    if (this.ID) {
      console.log("ID", this.ID);
      id = this.ID;
    } else {
      id = this.activatedRoute.snapshot.paramMap.get("id");
      this.ressourceName =
        this.activatedRoute.snapshot.url[
          this.activatedRoute.snapshot.url.length - 2
        ].path.split("-")[0];
    }
    this.entityId = parseInt(id);
    console.log("restNAEM", this.ressourceName);
    this.resource = this.serviceRestAdminConfig.getSpecificResource(
      this.ressourceName
    );

    this.serviceRest
      .getOneResource(
        {
          api: this.resource.detailConfig.api,
          queryParams: this.resource.detailConfig.queryParams,
        },
        id
      )
      .subscribe((response: any) => {
        const colunms: any = {};

        this.entityId = response.id;
        if (
          this.resource.detailConfig.tabsConfig &&
          this.resource.detailConfig.tabsConfig.length > 1
        ) {
          this.isTabsMenu = true;

          this.resource.detailConfig.tabsConfig.forEach((tab) => {
            this.tabsName.push(tab.name);
            const temp = {};

            tab.datas.forEach((elt) => {
              const search = this.resource.fields.find(
                (field) => field.label === elt
              );

              if (search) {
                temp[search.name] = {
                  restField: search,
                  data: response[search.label],
                };
              }

              switch (temp[search.name].restField.type) {
                case REST_FIELD_TYPES.HAS_MANY:
                  /*Premier cas si les configs ont ete definis dans le listConfig et rien dans le detailConfig
                    Premier cas si les configs ont ete definis dans le listConfig et rien dans le detailConfig
                    on considere que les configs sont les memes
                    */
                  if (
                    temp[search.name].restField?.metaData?.listConfig
                      ?.restManyResources &&
                    !temp[search.name].restField?.metaData?.detailConfig
                      ?.restManyResources
                  ) {
                    const datas = [];
                    console.log("Xa me concerne");
                    console.log(temp[search.name]);

                    temp[search.name].data.forEach((item) => {
                      datas.push({
                        data: {
                          name: temp[search.name]?.restField?.metaData
                            ?.listConfig?.restManyResources.label
                            ? item[
                                temp[search.name].restField.metaData.listConfig
                                  .restManyResources.label
                              ]
                            : item,
                          item,
                        },
                      });
                    });

                    const rowsT = [
                      {
                        data: {
                          name: temp[search.name].restField.name,
                          place: "header-place",
                        },
                        children: datas,
                      },
                    ];

                    this.listDataSource[temp[search.name].restField.name] =
                      this.dataSourceBuilder.create(rowsT);
                  } else if (
                    temp[search.name].restField?.metaData?.detailConfig
                      ?.restManyResources
                  ) {
                    if (
                      this.isObject(
                        temp[search.name].restField?.metaData?.detailConfig
                          ?.restManyResources
                      )
                    ) {
                      const datas = [];

                      temp[search.name].data.forEach((item) => {
                        datas.push({
                          data: {
                            name: temp[search.name]?.restField?.metaData
                              ?.detailConfig?.restManyResources.label
                              ? item[
                                  temp[search.name].restField.metaData
                                    .detailConfig.restManyResources.label
                                ]
                              : item,
                            item,
                          },
                        });
                      });

                      const rowsT = [
                        {
                          data: {
                            name: temp[search.name].restField.name,
                            place: "header-place",
                          },
                          children: datas,
                        },
                      ];

                      this.listDataSource[temp[search.name].restField.name] =
                        this.dataSourceBuilder.create(rowsT);
                    } else {
                      this.listDataSource[temp[search.name].restField.name] =
                        [];
                      temp[search.name].data.forEach((element) => {
                        this.listDataSource[
                          temp[search.name].restField.name
                        ].push({
                          resource:
                            temp[search.name].restField?.metaData?.detailConfig
                              ?.restManyResources.resource,
                          resourceName:
                            temp[search.name].restField?.metaData?.detailConfig
                              ?.restManyResources.resourceName,
                          id: element?.id,
                          style: temp[search.name].restField?.metaData
                            ?.detailConfig?.restManyResources.style
                            ? temp[search.name].restField?.metaData
                                ?.detailConfig.restManyResources.style
                            : "",
                        });
                      });
                    }
                  }

                  break;

                case REST_FIELD_TYPES.BELONG_TO_MANY:
                  const items = [];

                  temp[search.name].data.forEach((item) => {
                    items.push({
                      data: {
                        name: item[
                          temp[search.name].restField.metaData.listConfig
                            .restBelongToManyResources.label
                        ],
                        item,
                      },
                    });
                  });

                  const rowsBelongToMany = [
                    {
                      data: {
                        name: temp[search.name].restField.name,
                        place: "header-place",
                      },
                      children: items,
                    },
                  ];
                  this.listDataSource[temp[search.name].restField.name] =
                    this.dataSourceBuilder.create(rowsBelongToMany);
                  break;

                default:
                  break;
              }
              colunms[tab.name] = temp;
            });
          });
          this.datas = colunms;
          this.datas1 = colunms;
        } else {
          this.resource.fields.forEach((elt) => {
            colunms[elt.name] = {
              restField: elt,
              data: response[elt.label],
            };
          });
          this.datas = colunms;
          for (const property in this.datas) {
            switch (this.datas[property].restField.type) {
              case REST_FIELD_TYPES.HAS_MANY:
                if (
                  this.datas[property].restField?.metaData?.listConfig
                    ?.restManyResources &&
                  !this.datas[property].restField?.metaData?.detailConfig
                    ?.restManyResources
                ) {
                  const datas = [];

                  this.datas[property].data.forEach((item) => {
                    datas.push({
                      data: {
                        name: this.datas[property]?.restField?.metaData
                          ?.listConfig?.restManyResources.label
                          ? item[
                              this.datas[property].restField.metaData.listConfig
                                .restManyResources.label
                            ]
                          : item,
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
                } else if (
                  this.datas[property].restField?.metaData?.detailConfig
                    ?.restManyResources
                ) {
                  if (
                    this.isObject(
                      this.datas[property].restField?.metaData?.detailConfig
                        ?.restManyResources
                    )
                  ) {
                    const datas = [];

                    this.datas[property].data.forEach((item) => {
                      datas.push({
                        data: {
                          name: this.datas[property]?.restField?.metaData
                            ?.detailConfig?.restManyResources.label
                            ? item[
                                this.datas[property].restField.metaData
                                  .detailConfig.restManyResources.label
                              ]
                            : item,
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
                  } else {
                    this.listDataSource[this.datas[property].restField.name] =
                      [];
                    this.datas[property].data.forEach((element) => {
                      this.listDataSource[
                        this.datas[property].restField.name
                      ].push({
                        resource:
                          this.datas[property].restField?.metaData?.detailConfig
                            ?.restManyResources.resource,
                        resourceName:
                          this.datas[property].restField?.metaData?.detailConfig
                            ?.restManyResources.resourceName,
                        id: element?.id,
                        style: this.datas[property].restField?.metaData
                          ?.detailConfig?.restManyResources.style
                          ? this.datas[property].restField?.metaData
                              ?.detailConfig.restManyResources.style
                          : "",
                      });
                    });
                    console.log(this.datas[property]);
                    console.log(this.listDataSource);
                  }
                }

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
        }
      });
  }

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

  isObject = (a) => {
    let isObject = false;
    if (a.metaData) isObject = true;
    if (a.type) isObject = true;
    if (a.template) isObject = true;
    if (a.inForm) isObject = true;

    return isObject;
  };

  isArray = (a) => {
    return !!a && a.constructor === Array;
  };
}
