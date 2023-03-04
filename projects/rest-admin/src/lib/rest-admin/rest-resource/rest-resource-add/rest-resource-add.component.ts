import { LocalDataSource } from 'ng2-smart-table';
import { RestField, REST_FIELD_TYPES } from '../models/rest-resource.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ChangeDetectorRef, Component, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import {
  NbDialogService,
  NbMenuService,
  NbTagComponent,
  NbTagInputAddEvent,
} from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';

import { RestResource } from '../models/rest-resource';
import { RestResourceService } from '../service/rest-resource.service';
import { ImageCroppedEvent, base64ToFile } from 'ngx-image-cropper';
import { RestAdminConfigService } from '../service/rest-admin-config.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ALPHABET, RestExportService } from '../service/rest-export.service';
import { UploadFileComponent } from '../components/upload-file/upload-file.component';
import { RestResourceListFieldComponent } from '../components/rest.resource-list-field/rest.resource-list-field.component';
import { RestResourceEditorFieldsComponent } from '../components/rest-resource-editor-fields/rest-resource-editor-fields.component';
import { Validator } from 'ngx-input-validator';
import * as moment from 'moment';
import { NotificationService } from '../service/notification.service';
@Component({
  selector: 'ngx-rest-resource-add',
  templateUrl: './rest-resource-add.component.html',
  styleUrls: ['./rest-resource-add.component.scss'],
})
export class RestResourceAddComponent implements OnInit {
  @Input() resource: RestResource;
  ressourceName: string;
  message = 'Ressource ajoutée avec succès';
  //Icons

  form: FormGroup;
  formState: any = {
    btnLabel: 'Modifier',
    isAdd: false,
    idEntity: null,
    onReady: false,
  };

  entity: any;
  // Loader
  loading = false;

  // Test
  public uploadedFile: BehaviorSubject<any>;
  private subscription: Subscription;
  // End test

  //BELONG_TO FIELD
  options: any = {};
  allFilterContains: any = {};
  belongToValue: any = {};
  belongToMany: any = {};

  //json editor
  jsonEditorOptions = {};

  @ViewChild('belongTo') belongTo: QueryList<any>;
  @ViewChild('autoBelongToMany') inputBelongToMany;

  controls: any;
  multiple = false;

  controlCroper: any = {};

  imageChangedEvent: any = '';
  croppedImage: any = {};
  isCrop: any = {};

  controlsImage: any = {};

  // Color
  colors = [];

  // End test

  //Import
  items = [{ title: 'Download template' }, { title: 'Import' }];
  alphabelt: string[] = ALPHABET;

  //Image
  filesUpload = {};
  urlsImage = {};

  source: LocalDataSource;
  settings: any;

  //Morph_field
  morphFields = {};

  constructor(
    private fb: FormBuilder,
    private serviceRest: RestResourceService,
    private serviceRestAdminConfig: RestAdminConfigService,
    private activatedRoute: ActivatedRoute,
    private nbMenuService: NbMenuService,
    private exportService: RestExportService,
    private dialogService: NbDialogService,
    private router: Router,
    private notificationService: NotificationService,
    private cdref: ChangeDetectorRef
  ) {
    activatedRoute.params.subscribe((params) => {
      this.ressourceName =
        this.activatedRoute.snapshot.url[
          this.activatedRoute.snapshot.url.length - 1
        ].path.split('-')[0];

      this.resource = this.serviceRestAdminConfig.getSpecificResource(
        this.ressourceName
      );

      if (Object.keys(params).length != 0) {
        this.ressourceName =
          this.activatedRoute.snapshot.url[
            this.activatedRoute.snapshot.url.length - 2
          ].path.split('-')[0];

        this.resource = this.serviceRestAdminConfig.getSpecificResource(
          this.ressourceName
        );

        this.serviceRest
          .getOneResource(
            {
              api: this.resource.editConfig.api,
              queryParams: this.resource.editConfig.queryParams,
            },
            params.id
          )
          .subscribe((response: any) => {
            this.initForm(response);
            this.formState = {
              btnLabel: 'Modifier',
              isAdd: false,
              idEntity: response.id,
              onReady: true,
            };
          });
      } else {
        this.initForm(null);
        this.formState = {
          btnLabel: 'Ajouter',
          isAdd: true,
          onReady: true,
        };
      }
    });
  }

  ngOnInit(): void {
    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-add'),
        map(({ item: { title } }) => title)
      )
      .subscribe((title) => {
        switch (title) {
          case 'Download template':
            this.downloadTemplate();
            break;
          case 'Import':
            this.importData();
            break;
          default:
            console.log('pass');
            break;
        }
      });

    this.settings = {
      hideSubHeader: true,
      actions: false,
      pager: {
        perPage: this.resource.listConfig.perPage,
      },
      columns: this.createMatTableColumns(),
    };
    this.cdref.detectChanges();
  }

  initForm(datas) {
    if (datas != null) {
      this.controls = this.resource.fields.reduce((cumul, elt) => {
        var filterKey = elt.metaData?.addConfig?.belongToOptions?.filterKeys[0] ? elt.metaData?.addConfig?.belongToOptions?.filterKeys[0] : 'name';
        if (elt.inForm) {
          switch (elt.type) {
            case REST_FIELD_TYPES.FILE:
            case REST_FIELD_TYPES.PDF:
            case REST_FIELD_TYPES.IMAGE:
              this.filesUpload[elt.name] = [];
              this.urlsImage[elt.name] = datas[elt.name];

              return {
                ...cumul,
                [elt.name]: datas[elt.name],
              };

            case REST_FIELD_TYPES.HAS_MANY:
              return {
                ...cumul,
                [elt.name]: new Set([datas[elt.name]]),
              };

            case REST_FIELD_TYPES.BOOLEAN:
              return {
                ...cumul,
                [elt.name]: datas[elt.name],
              };
            case REST_FIELD_TYPES.BELONG_TO:
              const restResource =
                this.serviceRestAdminConfig.getSpecificResource(
                  elt.metaData.addConfig.belongToOptions.resourceName
                );

              this.serviceRest
                .getResources({
                  api: restResource.api,
                  queryParams: elt.metaData.addConfig.belongToOptions
                    .queryParams
                    ? elt.metaData.addConfig.belongToOptions.queryParams
                    : restResource.queryParams,
                })
                .subscribe((response: any) => {
                  this.options[elt.name] = [...response].sort((x, y) =>
                    x[filterKey]
                      .toString()
                      .toLowerCase()
                      ?.localeCompare(
                        y[filterKey]
                          .toString()
                          .toLowerCase()
                      )
                  );
                  this.allFilterContains[elt.name] = of(this.options[elt.name]);
                });

              return {
                ...cumul,
                [elt.name]: [datas[elt.name]],
              };

            case REST_FIELD_TYPES.BELONG_TO_MANY:
              const resource = this.serviceRestAdminConfig.getSpecificResource(
                elt.metaData.addConfig.belongToManyOptions.relatedName
              );
              this.serviceRest
                .getResources({
                  api: resource.api,
                  queryParams: elt.metaData.addConfig.belongToManyOptions
                    .queryParams
                    ? elt.metaData.addConfig.belongToManyOptions.queryParams
                    : resource.queryParams,
                })
                .subscribe((response: any) => {
                  this.options[elt.name] = [...response].sort((x, y) =>
                  x[filterKey]
                    .toString()
                    .toLowerCase()
                    ?.localeCompare(
                      y[filterKey]
                        .toString()
                        .toLowerCase()
                    )
                );
                  this.allFilterContains[elt.name] = of(this.options[elt.name]);
                });
              this.belongToMany[elt.name] = new Set(datas[elt.name]);

              return {
                ...cumul,
                [elt.name]: [datas[elt.name]],
              };

            case REST_FIELD_TYPES.LINK:
              return {
                ...cumul,
                [elt.name]: [datas[elt.name], Validator.url],
              };
            case REST_FIELD_TYPES.COLOR:
              return {
                ...cumul,
                [elt.name]: datas[elt.name],
              };
            case REST_FIELD_TYPES.JSON:
              const jsonFiels = [];
              elt.metaData.addConfig.jsonConfig.jsonFields.map((field) => {
                jsonFiels.push({
                  label: field,
                  value:
                    datas[elt.name][0] == '{'
                      ? JSON.parse(datas[elt.name])[field]
                      : typeof datas[elt.name] !== 'string'
                      ? datas[elt.name][field]
                      : datas[elt.name],
                });
              });

              this.jsonEditorOptions[elt.name] = jsonFiels;
              return {
                ...cumul,
                [elt.name]: datas[elt.name],
              };

            case REST_FIELD_TYPES.MORPH_ONE:
              this.morphFields[elt.name] = {
                type: datas[elt.name].type,
                id: datas[elt.name].id,
              };
              return {
                ...cumul,
                [elt.name]: [null],
              };
            default:
              return {
                ...cumul,
                [elt.name]: datas[elt.name],
              };
          }
        } else
          return {
            ...cumul,
          };
      }, {});
    } else {
      this.controls = this.resource.fields.reduce((cumul, elt) => {
        var filterKey = elt.metaData?.addConfig?.belongToOptions?.filterKeys[0] ? elt.metaData?.addConfig?.belongToOptions?.filterKeys[0] : 'name';
        if (elt.inForm) {
          switch (elt.type) {
            case REST_FIELD_TYPES.FILE:
            case REST_FIELD_TYPES.PDF:
            case REST_FIELD_TYPES.IMAGE:
              this.filesUpload[elt.name] = [];
              this.urlsImage[elt.name] = '';

              return {
                ...cumul,
                [elt.name]: [null],
              };

            case REST_FIELD_TYPES.HAS_MANY:
              return {
                ...cumul,
                [elt.name]: new Set([]),
              };

            case REST_FIELD_TYPES.BOOLEAN:
              return {
                ...cumul,
                [elt.name]: false,
              };
            case REST_FIELD_TYPES.BELONG_TO:
              const restResource =
                this.serviceRestAdminConfig.getSpecificResource(
                  elt.metaData.addConfig.belongToOptions.resourceName
                );

              if (restResource) {
                this.serviceRest
                  .getResources({
                    api: restResource.api,
                    queryParams: elt.metaData.addConfig.belongToOptions
                      .queryParams
                      ? elt.metaData.addConfig.belongToOptions.queryParams
                      : restResource.queryParams,
                  })
                  .subscribe((response: any) => {
                    this.options[elt.name] = [...response].sort((x, y) =>
                    x[filterKey]
                      .toString()
                      .toLowerCase()
                      ?.localeCompare(
                        y[filterKey]
                          .toString()
                          .toLowerCase()
                      )
                  );
                    this.allFilterContains[elt.name] = of(
                      this.options[elt.name]
                    );
                  });
              }

              return {
                ...cumul,
                [elt.name]: [''],
              };

            case REST_FIELD_TYPES.BELONG_TO_MANY:
              const resource = this.serviceRestAdminConfig.getSpecificResource(
                elt.metaData.addConfig.belongToManyOptions.relatedName
              );
              this.serviceRest
                .getResources({
                  api: resource.api,
                  queryParams: elt.metaData.addConfig.belongToManyOptions
                    .queryParams
                    ? elt.metaData.addConfig.belongToManyOptions.queryParams
                    : resource.queryParams,
                })
                .subscribe((response: any) => {
                  this.options[elt.name] = [...response].sort((x, y) =>
                  x[filterKey]
                    .toString()
                    .toLowerCase()
                    ?.localeCompare(
                      (y[filterKey])
                        .toString()
                        .toLowerCase()
                    )
                );
                  this.allFilterContains[elt.name] = of(this.options[elt.name]);
                });
              this.belongToMany[elt.name] = new Set();

              return {
                ...cumul,
                [elt.name]: [],
              };

            case REST_FIELD_TYPES.LINK:
              return {
                ...cumul,
                [elt.name]: ['', Validator.url],
              };
            case REST_FIELD_TYPES.JSON:
              const jsonFiels = [];
              elt?.metaData?.addConfig?.jsonConfig.jsonFields.map((field) => {
                jsonFiels.push({ label: field, value: '' });
              });

              this.jsonEditorOptions[elt.name] = jsonFiels;
              return {
                ...cumul,
                [elt.name]: [null],
              };
            default:
              return {
                ...cumul,
                [elt.name]: [''],
              };
          }
        } else
          return {
            ...cumul,
          };
      }, {});
    }

    this.form = this.fb.group(this.controls);
  }

  trackByFn(index) {
    return index;
  }

  reset() {
    this.form = this.fb.group(this.controls);
  }

  get REST_FIELD_TYPES() {
    return REST_FIELD_TYPES;
  }

  //Tags
  onTagRemove(tagToRemove: NbTagComponent, name): void {
    const treesA = new Set(this.form.get([name]).value);

    treesA.delete(tagToRemove.text);

    this.form.patchValue({
      [name]: Array.from(treesA.values()),
    });
  }

  onTagAdd({ value, input }: NbTagInputAddEvent, name): void {
    if (value) {
      const treesA = new Set(this.form.get([name]).value);
      treesA.add(value);
      this.form.patchValue({
        [name]: Array.from(treesA.values()),
      });
    }
    input.nativeElement.value = '';
  }

  // Autocomplete
  private filter(value: any, field): string[] {
    if (typeof value == 'string') {
      if (!this.options[field.name]) {
        return [];
      } else
        return this.options[field.name].filter((optionValue) => {
          return field.metaData.addConfig.belongToOptions.filterKeys.some(
            (elt) =>
              `${optionValue[elt].toLowerCase()}`.includes(
                `${value.toLowerCase()}`
              )
          );
        });
    }
  }

  getFilteredOptions(value: any, field: RestField): Observable<string[]> {
    if (field.type == REST_FIELD_TYPES.BELONG_TO)
      return of(value).pipe(
        map((filterString: string) => this.filter(filterString, field))
      );
    else if (field.type == REST_FIELD_TYPES.MORPH)
      return of(value).pipe(
        map((filterString: string) =>
          this.filterMany(filterString, field, 'morphConfig')
        )
      );
    return of(value).pipe(
      map((filterString: string) => this.filterMany(filterString, field))
    );
  }

  onSelectionChange(event, field: RestField) {
    const bVal = this.options[field.name] ? this.options[field.name].find((elt) => elt?.id === event) : {};
    this.belongToValue[field.name] = bVal
      ? bVal[
          field?.metaData?.belongToSecondFieldLabel
            ? field?.metaData?.belongToSecondFieldLabel
            : 'name'
        ]
      : '';
    this.allFilterContains[field.name] = this.getFilteredOptions(event, field);
  }

  filterInput(event, field: RestField) {
    this.allFilterContains[field.name] = this.getFilteredOptions(
      event.target.value,
      field
    );
  }

  test(event) {
    console.log(event);
  }
  // End Autocomplete

  //Image input
  onSelect(event, field: RestField) {
    this.filesUpload[field.name] = [];
    const addedFiles: File = event.addedFiles;

    this.filesUpload[field.name] = [addedFiles[0]];

    if (field.type == REST_FIELD_TYPES.IMAGE) {
      this.isCrop[field.name] = true;
      this.controlCroper[field.name] = addedFiles[0];
    }

    this.form.patchValue({
      [field.name]: addedFiles[0],
    });
  }

  onRemove(field) {
    this.filesUpload[field.name] = [];
    this.form.patchValue({
      [field.name]: null,
    });
  }

  imageCropped(event: ImageCroppedEvent, field) {
    this.croppedImage[field.name] = event.base64;
  }

  activeCroper(field) {
    this.isCrop[field.name] = true;
  }

  desactiveCrop(field) {
    this.isCrop[field.name] = false;
  }

  saveCroper(field: RestField) {
    this.isCrop[field.name] = false;
    this.filesUpload[field.name] = [
      base64ToFile(this.croppedImage[field.name]),
    ];

    this.form.patchValue({
      [field.name]: new File(
        [base64ToFile(this.croppedImage[field.name])],
        field.name
      ),
    });
  }

  //belongToManyOptions
  onChoose(event, field) {
    const cellData: any[] = Array.from(this.belongToMany[field.name]);
    if (event.id) {
      const search = cellData.find((elt: any) => elt.id == event.id);

      if (search == undefined) {
        const newElt = {
          id: event.id,
          [field.metaData.addConfig.belongToManyOptions.relatedIdName]:
            event.id,
          [field.metaData.addConfig.belongToManyOptions.resourceIdName]: '',
          [field.metaData.addConfig.belongToManyOptions.filterKeys[0]]:
            event[field.metaData.addConfig.belongToManyOptions.filterKeys[0]],
          saveRelatedIdName:
            field.metaData.addConfig.belongToManyOptions.relatedIdName,
          saveResourceIdName:
            field.metaData.addConfig.belongToManyOptions.resourceIdName,
        };

        this.belongToMany[field.name].add(newElt);
        this.form.patchValue({
          [field.name]: Array.from(this.belongToMany[field.name].values()),
        });
      }
    }
    this.inputBelongToMany.nativeElement.value = '';
  }

  onTagRemoveBelong(tagToRemove: NbTagComponent, field): void {
    const cellData = Array.from(this.belongToMany[field.name]);
    const save = [];

    cellData.forEach((elt) => {
      if (
        elt[
          field.metaData.addConfig.belongToManyOptions.template
            ? field.metaData.addConfig.belongToManyOptions.template
            : field.metaData.addConfig.belongToManyOptions.filterKeys[0]
        ] != tagToRemove.text
      )
        save.push(elt);
    });

    this.belongToMany[field.name] = new Set(save);

    this.form.patchValue({
      [field.name]: save,
    });
  }

  private filterMany(
    value: any,
    field,
    options = 'belongToManyOptions'
  ): string[] {
    if (typeof value == 'string') {
      return this.options[field.name].filter((optionValue) => {
        return field.metaData.addConfig[options].filterKeys.some((elt) =>
          `${optionValue[elt].toLowerCase()}`.includes(`${value.toLowerCase()}`)
        );
      });
    }
  }

  //End BelongToMany

  onCreate() {
    let datas;
    const msg = {
      label: `msg-adding-success`,
      resourceName: this.ressourceName,
    };
    this.loading = true;
    const formData = this.form.value;
    const _body = this.resource.addConfig.body;
    if (this.resource.hasFile) {
      datas = new FormData();
      Object.keys(formData).forEach((key, index) => {
        const search: RestField = this.resource.fields.find(
          (elt) => elt.name == key
        );

        if (search && formData[key] !== undefined) {
          switch (search.type) {
            case REST_FIELD_TYPES.DATE:
              datas.append(
                key,
                `${moment(formData[key]).format('YYYY-MM-DD')}`
              );
              break;
            case REST_FIELD_TYPES.JSON:
              let jsonFields = {};
              if (this.jsonEditorOptions[key] !== null) {
                if (typeof this.jsonEditorOptions[key] == 'object') {
                  this.jsonEditorOptions[key].map((elt) => {
                    jsonFields = { ...jsonFields, [elt.label]: elt.value };
                    datas.append(`${key}[${elt.label}]`, elt.value);
                  });
                }
                // datas.append(key, JSON.stringify(jsonFields));
                // datas.append(key, jsonFields);
              }
              break;
            case REST_FIELD_TYPES.BOOLEAN:
              if (search.metaData?.number) {
                if (formData[key]) {
                  datas.append(key, 1);
                } else datas.append(key, 0);
              } else {
                datas.append(key, formData[key]);
              }
              break;
            case REST_FIELD_TYPES.IMAGE:
              if (formData[key] !== null) datas.append(key, formData[key]);
              break;
            default:
              // if (search.type === REST_FIELD_TYPES.STRING || search.type === REST_FIELD_TYPES.NUMBER || search.type === REST_FIELD_TYPES.PASSWORD)
              if (formData[key] !== '') datas.append(key, formData[key]);
              break;
          }
        }
      });
      Object.keys(_body).map((key) => {
        datas.append(key, _body[key]);
      });
    } else {
      const tab = {};
      Object.keys(formData).forEach((key, index) => {
        const search: RestField = this.resource.fields.find(
          (elt) => elt.name == key
        );
        if (
          search &&
          this.jsonEditorOptions[key] !== null &&
          formData[key] !== undefined &&
          formData[key] !== ''
        ) {
          tab[key] = formData[key];
        }
      });
      datas = { ...tab, ..._body };
    }

    const saveBelongTomany = [];

    this.resource.fields.forEach((elt) => {
      if (elt.type == REST_FIELD_TYPES.BELONG_TO_MANY) {
        saveBelongTomany.push({
          resources: datas[elt.name],
          pivot: elt.metaData.addConfig.belongToManyOptions.pivotName,
        });
      }
    });

    this.serviceRest.addResources(this.resource.addConfig, datas).subscribe(
      (response: any) => {
        if (saveBelongTomany.length > 0) {
          saveBelongTomany.forEach((element, index) => {
            const restResource =
              this.serviceRestAdminConfig.getSpecificResource(element.pivot);
            const proms = [];

            for (let index = 0; index < element.resources.length; index++) {
              const item = element.resources[index];
              const data = {
                [item['saveRelatedIdName']]: item[item['saveRelatedIdName']],
                [item['saveResourceIdName']]: response.id,
              };

              proms.push(
                this.serviceRest
                  .addResources(restResource.addConfig, data)
                  .toPromise()
              );
            }

            Promise.all(proms).then((res) => {
              if (index == saveBelongTomany.length - 1) {
                this.notificationService.successToast(msg);
                this.router.navigate([
                  `/admin/${this.ressourceName}-detail`,
                  response.id,
                ]);
                this.reset();
              }
            });
          });
          this.loading = false;
        } else {
          this.notificationService.successToast(msg);
          this.router.navigate([
            `/admin/${this.ressourceName}-detail`,
            response.id,
          ]);
          this.loading = false;
          this.reset();
        }
      },
      (error) => {
        const msgError = {
          label: `msg-adding-error`,
          resourceName: this.ressourceName,
        };
        this.loading = false;
        this.notificationService.dangerToast(msgError);
      }
    );

  }

  onEdit() {
    const msg = {
      label: `msg-updating-success`,
      resourceName: this.ressourceName,
    };
    this.loading = true;
    let datas;
    const formData = this.form.value;
    const _body = this.resource.editConfig.body;
    if (this.resource.hasFile) {
      datas = new FormData();
      Object.keys(formData).forEach((key, index) => {
        const search: RestField = this.resource.fields.find(
          (elt) => elt.name == key
        );

        if (search && formData[key] !== undefined) {
          switch (search.type) {
            case REST_FIELD_TYPES.DATE:
              datas.append(
                key,
                `${moment(formData[key]).format('YYYY-MM-DD')}`
              );
              break;
            case REST_FIELD_TYPES.JSON:
              let jsonFields = {};
              if (this.jsonEditorOptions[key] !== null) {
                if (typeof this.jsonEditorOptions[key] == 'object') {
                  this.jsonEditorOptions[key].map((elt) => {
                    jsonFields = { ...jsonFields, [elt.label]: elt.value };
                  });
                }
                datas.append(key, JSON.stringify(jsonFields));
              }
              break;
            case REST_FIELD_TYPES.BOOLEAN:
              if (search.metaData?.number) {
                if (formData[key]) {
                  datas.append(key, 1);
                } else datas.append(key, 0);
              } else {
                datas.append(key, formData[key]);
              }
              break;
            case REST_FIELD_TYPES.IMAGE:
              if (formData[key] !== null) datas.append(key, formData[key]);
              break;
            default:
              // if (search.type === REST_FIELD_TYPES.STRING || search.type === REST_FIELD_TYPES.NUMBER || search.type === REST_FIELD_TYPES.PASSWORD)
              if (formData[key] !== '') datas.append(key, formData[key]);
              break;
          }
        }
      });
      Object.keys(_body).map((key) => {
        datas.append(key, _body[key]);
      });
    } else {
      const tab = {};
      Object.keys(formData).forEach((key, index) => {
        const search: RestField = this.resource.fields.find(
          (elt) => elt.name == key
        );
        if (
          search &&
          this.jsonEditorOptions[key] !== null &&
          formData[key] !== undefined &&
          formData[key] !== ''
        ) {
          tab[key] = formData[key];
        }
      });
      datas = { ...tab, ..._body };
    }
    const saveBelongTomany = [];

    this.resource.fields.forEach((elt) => {
      if (elt.type == REST_FIELD_TYPES.BELONG_TO_MANY) {
        saveBelongTomany.push({
          resources: datas[elt.name],
          pivot: elt.metaData.addConfig.belongToManyOptions.pivotName,
        });
      }
    });
    this.serviceRest
      .editResources(
        this.resource.editConfig,
        this.resource.hasFile,
        datas,
        this.formState.idEntity
      )
      .subscribe(
        (response: any) => {
          if (saveBelongTomany.length > 0) {
            saveBelongTomany.forEach((element, index) => {
              const restResource =
                this.serviceRestAdminConfig.getSpecificResource(element.pivot);
              const proms = [];

              for (let index = 0; index < element.resources.length; index++) {
                const item = element.resources[index];
                const data = {
                  [item['saveRelatedIdName']]: item[item['saveRelatedIdName']],
                  [item['saveResourceIdName']]: response.id,
                };

                proms.push(
                  this.serviceRest
                    .addResources(restResource.addConfig, data)
                    .toPromise()
                );
              }

              Promise.all(proms).then((res) => {
                if (index == saveBelongTomany.length - 1) {
                  this.notificationService.successToast(msg);
                  this.router.navigate([
                    `/admin/${this.ressourceName}-detail`,
                    this.formState.idEntity,
                  ]);
                  this.reset();
                }
              });
            });
            this.loading = false;
          } else {
            this.notificationService.successToast(msg);
            this.router.navigate([
              `/admin/${this.ressourceName}-detail`,
              this.formState.idEntity,
            ]);
            this.loading = false;
            this.reset();
          }
        },
        (error) => {
          const msgError = {
            label: `msg-updating-fail`,
            resourceName: this.ressourceName,
          };
          this.loading = false;
          this.notificationService.dangerToast(msgError);
        }
      );
  }

  downloadTemplate(): void {
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
    const edata: Array<any> = [];
    const udt: any = {
      data: [
        sheetHeader, // table header
      ],
      skipHeader: true,
    };
    edata.push(udt);
    this.exportService.exportToExcel(edata, 'rest_file_template_data');
  }

  importData() {
    const dialog = this.dialogService.open(UploadFileComponent, {});
    dialog.onClose.subscribe((resp) => {
      if (resp) this.source = new LocalDataSource(resp);
    });
  }

  private createMatTableColumns() {
    const colunms: any = {};
    // console.log(this.resource.fields);

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

  onSumbit() {
    if (this.formState.isAdd) this.onCreate();
    else this.onEdit();
  }

  addJSONField(event) {
    this.jsonEditorOptions[event.name].push({
      label: '',
      value: '',
      add: true,
    });
  }

  removeJSONField(event, index) {
    this.jsonEditorOptions[event.name].splice(index, 1);
  }

  onMorphSelectField(event, field) {
    const ressources = this.serviceRestAdminConfig.getSpecificResource(event);
    const fieldConfig = this.resource.fields.find((elt) => elt.name == field);

    this.serviceRest
      .getResources({
        api: ressources.api,
        queryParams: fieldConfig.metaData.addConfig.morphConfig.queryParams
          ? fieldConfig.metaData.addConfig.morphConfig.queryParams
          : {},
      })
      .subscribe((response: any) => {
        this.options[field] = response;
        this.allFilterContains[field] = of(this.options[field]);
      });
  }
}
