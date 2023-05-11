import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestResource } from '../models/rest-resource';
import {
  RestField,
  REST_FIELD_TYPES,
  PERMISSION,
} from '../models/rest-resource.model';
import { RestAdminConfigService } from '../service/rest-admin-config.service';
import { RestResourceService } from '../service/rest-resource.service';
import { NbDialogService, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { RestLangService } from '../service/rest-lang.service';
// import urlToFile from '../../../utils/';
import * as _ from 'lodash';
import urlToFile from '../../../utils/urlToFile';
import { RestResourceDeleteComponent } from '../rest-ressource-delete/rest-resource-delete.component';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'ngx-rest-resource-detail',
  templateUrl: './rest-resource-detail.component.html',
  styleUrls: ['./rest-resource-detail.component.scss'],
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

  customColumn = 'name';
  allColumns = [this.customColumn];
  listDataSource: any = {};
  isTabsMenu = false;
  tabsName = [];
  filesUpload = {};

  permissions = [
    PERMISSION.CREATE,
    PERMISSION.UPDATE,
    PERMISSION.DELETE,
    PERMISSION.READ,
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceRest: RestResourceService,
    private serviceRestAdminConfig: RestAdminConfigService,
    private router: Router,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<any>,
    private dialogService: NbDialogService,
    private langService: RestLangService,
    private sanitizer: DomSanitizer,
    private permissionsService: NgxPermissionsService
  ) {}

  get PERMISSION() {
    return PERMISSION;
  }

  ngOnInit(): void {
    let id;
    if (this.ID) {
      id = this.ID;
    } else {
      id = this.activatedRoute.snapshot.paramMap.get('id');
      this.ressourceName =
        this.activatedRoute.snapshot.url[
          this.activatedRoute.snapshot.url.length - 2
        ].path.split('-')[0];
    }
    this.entityId = parseInt(id);

    this.resource = this.serviceRestAdminConfig.getSpecificResource(
      this.ressourceName
    );
    // console.log('this.resource.detailConfig', this.resource.detailConfig);
    if (this.resource.detailConfig.preparedStatementQuery) {
      // this.resource.detailConfig.queryParams.fieldForNextQuery
      this.serviceRest
        .getResources({
          api: this.resource.detailConfig.preparedStatementQuery.api.substring(
            1
          ),
          queryParams: this.resource.detailConfig.preparedStatementQuery
            .queryParams
            ? this.resource.detailConfig.preparedStatementQuery.queryParams
            : {},
        })
        .subscribe((resp) => {
          const val = {};
          const params = {};
          this.resource.detailConfig.preparedStatementQuery.fieldForNextQuery.forEach(
            (item) => {
              val[item] = _.get(resp, item);
            }
          );

          this.resource.detailConfig.preparedStatementQuery.queryParamsComplete.forEach(
            (element) => {
              if (element.isPreparedStatement) {
                params[element.label] = val[element.value];
              } else {
                params[element.label] = element.value;
              }
            }
          );
          this.serviceRest
            .getOneResource(
              {
                api: this.resource.detailConfig.api,
                queryParams: params,
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
                          // console.log("Xa me concerne");
                          // console.log(temp[search.name]);

                          temp[search.name].data.forEach((item) => {
                            datas.push({
                              data: {
                                name: temp[search.name]?.restField?.metaData
                                  ?.listConfig?.restManyResources.label
                                  ? item[
                                      temp[search.name].restField.metaData
                                        .listConfig.restManyResources.label
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
                                place: 'header-place',
                              },
                              children: datas,
                            },
                          ];

                          this.listDataSource[
                            temp[search.name].restField.name
                          ] = this.dataSourceBuilder.create(rowsT);
                        } else if (
                          temp[search.name].restField?.metaData?.detailConfig
                            ?.restManyResources
                        ) {
                          if (
                            this.isObject(
                              temp[search.name].restField?.metaData
                                ?.detailConfig?.restManyResources
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
                                  place: 'header-place',
                                },
                                children: datas,
                              },
                            ];

                            this.listDataSource[
                              temp[search.name].restField.name
                            ] = this.dataSourceBuilder.create(rowsT);
                          } else {
                            this.listDataSource[
                              temp[search.name].restField.name
                            ] = [];
                            temp[search.name].data.forEach((element) => {
                              this.listDataSource[
                                temp[search.name].restField.name
                              ].push({
                                resource:
                                  temp[search.name].restField?.metaData
                                    ?.detailConfig?.restManyResources.resource,
                                resourceName:
                                  temp[search.name].restField?.metaData
                                    ?.detailConfig?.restManyResources
                                    .resourceName,
                                id: element?.id,
                                style: temp[search.name].restField?.metaData
                                  ?.detailConfig?.restManyResources.style
                                  ? temp[search.name].restField?.metaData
                                      ?.detailConfig.restManyResources.style
                                  : '',
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
                              place: 'header-place',
                            },
                            children: items,
                          },
                        ];
                        this.listDataSource[temp[search.name].restField.name] =
                          this.dataSourceBuilder.create(rowsBelongToMany);
                        break;

                      case REST_FIELD_TYPES.BELONG_TO:
                        let dat = this.getBelongToSecondField(search, response);
                        if (search) {
                          temp[search.name] = {
                            restField: search,
                            data: `${dat} (${response[search.label]})`,
                            navigationId: response[search.label],
                          };
                        }
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
                  if (elt.type === REST_FIELD_TYPES.BELONG_TO) {
                    let dat = this.getBelongToSecondField(elt, response);
                    colunms[elt.name] = {
                      restField: elt,
                      data: `${dat} (${response[elt.label]})`,
                      navigationId: response[elt.label],
                    };
                  } else {
                    colunms[elt.name] = {
                      restField: elt,
                      data: response[elt.label],
                    };
                  }
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
                                    this.datas[property].restField.metaData
                                      .listConfig.restManyResources.label
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
                              place: 'header-place',
                            },
                            children: datas,
                          },
                        ];
                        this.listDataSource[
                          this.datas[property].restField.name
                        ] = this.dataSourceBuilder.create(rowsT);
                      } else if (
                        this.datas[property].restField?.metaData?.detailConfig
                          ?.restManyResources
                      ) {
                        if (
                          this.isObject(
                            this.datas[property].restField?.metaData
                              ?.detailConfig?.restManyResources
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
                                place: 'header-place',
                              },
                              children: datas,
                            },
                          ];

                          this.listDataSource[
                            this.datas[property].restField.name
                          ] = this.dataSourceBuilder.create(rowsT);
                        } else {
                          this.listDataSource[
                            this.datas[property].restField.name
                          ] = [];
                          this.datas[property].data.forEach((element) => {
                            this.listDataSource[
                              this.datas[property].restField.name
                            ].push({
                              resource:
                                this.datas[property].restField?.metaData
                                  ?.detailConfig?.restManyResources.resource,
                              resourceName:
                                this.datas[property].restField?.metaData
                                  ?.detailConfig?.restManyResources
                                  .resourceName,
                              id: element?.id,
                              style: this.datas[property].restField?.metaData
                                ?.detailConfig?.restManyResources.style
                                ? this.datas[property].restField?.metaData
                                    ?.detailConfig.restManyResources.style
                                : '',
                            });
                          });
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
                            place: 'header-place',
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
        });
    } else {
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
                      // console.log("Xa me concerne");
                      // console.log(temp[search.name]);

                      temp[search.name].data.forEach((item) => {
                        datas.push({
                          data: {
                            name: temp[search.name]?.restField?.metaData
                              ?.listConfig?.restManyResources.label
                              ? item[
                                  temp[search.name].restField.metaData
                                    .listConfig.restManyResources.label
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
                            place: 'header-place',
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
                              place: 'header-place',
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
                              temp[search.name].restField?.metaData
                                ?.detailConfig?.restManyResources.resource,
                            resourceName:
                              temp[search.name].restField?.metaData
                                ?.detailConfig?.restManyResources.resourceName,
                            id: element?.id,
                            style: temp[search.name].restField?.metaData
                              ?.detailConfig?.restManyResources.style
                              ? temp[search.name].restField?.metaData
                                  ?.detailConfig.restManyResources.style
                              : '',
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
                          place: 'header-place',
                        },
                        children: items,
                      },
                    ];
                    this.listDataSource[temp[search.name].restField.name] =
                      this.dataSourceBuilder.create(rowsBelongToMany);
                    break;

                  case REST_FIELD_TYPES.BELONG_TO:
                    let dat = this.getBelongToSecondField(search, response);
                    if (search) {
                      temp[search.name] = {
                        restField: search,
                        data: `${dat} (${response[search.label]})`,
                        navigationId: response[search.label],
                      };
                    }
                    break;

                  case REST_FIELD_TYPES.PDF:
                    const file = urlToFile(
                      response[search.label],
                      search.label,
                      'pdf'
                    );
                    this.filesUpload[search.label] = file;
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
              if (elt.type === REST_FIELD_TYPES.BELONG_TO) {
                let dat = this.getBelongToSecondField(elt, response);
                colunms[elt.name] = {
                  restField: elt,
                  data: `${dat} (${response[elt.label]})`,
                  navigationId: response[elt.label],
                };
              } else {
                colunms[elt.name] = {
                  restField: elt,
                  data: response[elt.label],
                };
              }
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
                                this.datas[property].restField.metaData
                                  .listConfig.restManyResources.label
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
                          place: 'header-place',
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
                            place: 'header-place',
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
                            this.datas[property].restField?.metaData
                              ?.detailConfig?.restManyResources.resource,
                          resourceName:
                            this.datas[property].restField?.metaData
                              ?.detailConfig?.restManyResources.resourceName,
                          id: element?.id,
                          style: this.datas[property].restField?.metaData
                            ?.detailConfig?.restManyResources.style
                            ? this.datas[property].restField?.metaData
                                ?.detailConfig.restManyResources.style
                            : '',
                        });
                      });
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
                        place: 'header-place',
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

    if (this.resource.permissions.length > 0) {
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
              }
            });
          });
      });
    }
  }

  editEntity() {
    this.router.navigate([`/admin/${this.ressourceName}-edit`, this.entityId]);
  }

  listEntity() {
    this.router.navigateByUrl(`/admin/${this.ressourceName}-list`);
  }

  deleteEntity() {
    const dialog = this.dialogService.open(RestResourceDeleteComponent, {
      context: {
        datas: { id: this.entityId },
        title: 'SUPPRESSION',
        listConfig: this.resource.listConfig,
        resourceName: this.ressourceName,
      },
    });

    dialog.onClose.subscribe((resp) => {
      if (resp) {
        this.router.navigateByUrl(`/admin/${this.ressourceName}-list`);
      }
    });
  }

  get REST_FIELD_TYPES() {
    return REST_FIELD_TYPES;
  }

  //Image input
  onSelect(event) {}

  onRemove(field) {}

  loadBelongToDetail(data) {
    const resourceName =
      data.restField.metaData.addConfig.belongToOptions.resourceName;

    this.router.navigate([`/admin/${resourceName}-detail`, data.navigationId]);
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

  getBelongToSecondField = (elt, response) => {
    const belongVal =
      `${elt.metaData?.addConfig?.belongToOptions?.resourceName}.${elt.metaData?.belongToSecondFieldLabel}`.split(
        '.'
      );
    let dat = response;
    if (belongVal && belongVal?.length > 0) {
      belongVal.forEach((val) => {
        if (dat[val]) {
          dat = dat[val];
        } else dat = '';
      });
    } else {
      dat = '';
    }
    return dat;
  };

  jsonValue = (val: any): any => {
    let _jsonValue: any;

    try {
      if (!val || !val.restField || !val.data) {
        throw new Error('Missing required data properties');
      }

      if (val.restField.i18n === true) {
        if (typeof val.data === 'string' && val.data[0] === '{') {
          const parsedData = JSON.parse(val.data);
          if (parsedData[this.langService.selected]) {
            _jsonValue = parsedData[this.langService.selected];
          } else {
            throw new Error('Invalid i18n language selected');
          }
        } else if (
          typeof val.data === 'object' &&
          val.data[this.langService.selected]
        ) {
          _jsonValue = val.data[this.langService.selected];
        } else if (typeof val.data === 'string') {
          _jsonValue = val.data;
        } else {
          throw new Error('Invalid data format for i18n field');
        }
      } else {
        _jsonValue = val.data;
      }

      if (typeof _jsonValue === 'object') {
        _jsonValue = JSON.stringify(_jsonValue);
      }
    } catch (err) {
      // console.log(`Error occurred in jsonValue: ${err}`);
      _jsonValue = JSON.stringify(val.data);
    }

    return _jsonValue;
  };

  sanitizerUrl = (link) => this.sanitizer.bypassSecurityTrustResourceUrl(link);
}
