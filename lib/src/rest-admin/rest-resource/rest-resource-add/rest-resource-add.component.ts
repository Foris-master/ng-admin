import { LocalDataSource } from "ng2-smart-table";
import { RestField, REST_FIELD_TYPES } from "../models/rest-resource.model";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Component, Input, OnInit, QueryList, ViewChild } from "@angular/core";
import {
  NbDialogService,
  NbMenuService,
  NbTagComponent,
  NbTagInputAddEvent,
} from "@nebular/theme";
import { filter, map } from "rxjs/operators";
import { BehaviorSubject, Observable, of, Subscription } from "rxjs";
import {
  FileUploadControl,
  FileUploadValidators,
} from "@iplab/ngx-file-upload";
import { RestResource } from "../models/rest-resource";
import { RestResourceService } from "../service/rest-resource.service";
import { ImageCroppedEvent, base64ToFile } from "ngx-image-cropper";
import { RestAdminConfigService } from "../service/rest-admin-config.service";
import { ActivatedRoute } from "@angular/router";
import { ALPHABET, RestExportService } from "../service/rest-export.service";
import { UploadFileComponent } from "../components/upload-file/upload-file.component";
import { RestResourceListFieldComponent } from "../components/rest.resource-list-field/rest.resource-list-field.component";
import { RestResourceEditorFieldsComponent } from "../components/rest-resource-editor-fields/rest-resource-editor-fields.component";

@Component({
  selector: "ngx-rest-resource-add",
  templateUrl: "./rest-resource-add.component.html",
  styleUrls: ["./rest-resource-add.component.scss"],
})
export class RestResourceAddComponent implements OnInit {
  @Input() resource: RestResource;

  form: FormGroup;
  formState: any;

  entity: any;

  // Test
  public readonly uploadedFile: BehaviorSubject<string> = new BehaviorSubject(
    null
  );
  private subscription: Subscription;
  // End test

  //BELONG_TO FIELD
  options: any = {};
  allFilterContains: any = {};
  belongToMany: any = {};

  @ViewChild("belongTo") belongTo: QueryList<any>;
  @ViewChild("autoBelongToMany") inputBelongToMany;

  multiple = false;

  // Control sur les fichiers a upload
  public readonly control = new FileUploadControl(
    {
      listVisible: true,
      accept: ["image/*"],
      discardInvalid: true,
      multiple: false,
    },
    [
      FileUploadValidators.accept(["image/*"]),
      FileUploadValidators.filesLimit(1),
    ]
  );

  controlCroper = null;

  imageChangedEvent: any = "";
  croppedImage: any = "";
  isCrop = false;

  controlsImage: any = {};

  // End test

  //FILE , IMAGE , PDF FIELD
  fileUploadControl = new FileUploadControl(
    null,
    FileUploadValidators.filesLimit(2)
  );

  //Import
  items = [{ title: "Download template" }, { title: "Import" }];
  alphabelt: string[] = ALPHABET;

  source: LocalDataSource;
  settings: any;
  constructor(
    private fb: FormBuilder,
    private serviceRest: RestResourceService,
    private serviceRestAdminConfig: RestAdminConfigService,
    private activatedRoute: ActivatedRoute,
    private nbMenuService: NbMenuService,
    private exportService: RestExportService,
    private dialogService: NbDialogService
  ) {
    activatedRoute.params.subscribe((params) => {
      let ressourceName =
        this.activatedRoute.snapshot.url[
          this.activatedRoute.snapshot.url.length - 1
        ].path.split("-")[0];

      this.resource =
        this.serviceRestAdminConfig.getSpecificResource(ressourceName);

      this.formState = {
        btnLabel: "Ajouter",
        isAdd: true,
      };

      if (Object.keys(params).length != 0) {
        ressourceName =
          this.activatedRoute.snapshot.url[
            this.activatedRoute.snapshot.url.length - 2
          ].path.split("-")[0];

        this.resource =
          this.serviceRestAdminConfig.getSpecificResource(ressourceName);

        this.formState = {
          btnLabel: "Modifier",
          isAdd: false,
        };

        this.serviceRest
          .getOneResource(
            {
              api: this.resource.editConfig.api,
              queryParams: this.resource.editConfig.queryParams,
            },
            params.id
          )
          .subscribe((response) => {
            console.log(response);
          });
      }
    });
  }

  ngOnInit(): void {
    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === "my-context-menu"),
        map(({ item: { title } }) => title)
      )
      .subscribe((title) => {
        switch (title) {
          case "Download template":
            this.downloadTemplate();
            break;
          case "Import":
            this.importData();
            break;
          default:
            console.log("pass");
            break;
        }
      });

    this.subscription = this.control.valueChanges.subscribe(
      (values: Array<File>) => {
        this.getImage(values[0]);
        this.controlCroper = values[0];
      }
    );

    const controls = this.resource.fields.reduce((cumul, elt) => {
      switch (elt.type) {
        case REST_FIELD_TYPES.FILE:
        case REST_FIELD_TYPES.IMAGE:
        case REST_FIELD_TYPES.PDF:
          return {
            ...cumul,
            [elt.name]: [],
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
          const restResource = this.serviceRestAdminConfig.getSpecificResource(
            elt.metaData.addConfig.belongToOptions.resourceName
          );

          this.serviceRest
            .getResources({
              api: restResource.api,
              queryParams: elt.metaData.addConfig.belongToOptions.queryParams
                ? elt.metaData.addConfig.belongToOptions.queryParams
                : restResource.queryParams,
            })
            .subscribe((response: any) => {
              this.options[elt.name] = response;
              this.allFilterContains[elt.name] = of(this.options[elt.name]);
            });

          // this.allFilterContains[elt.name] = this.form.controls[
          //   elt.name
          // ].valueChanges.pipe(
          //   startWith(""),
          //   map((filterString) => this.filter(filterString, elt))
          // );
          return {
            ...cumul,
            [elt.name]: [""],
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
              this.options[elt.name] = response;
              this.allFilterContains[elt.name] = of(this.options[elt.name]);
            });
          this.belongToMany[elt.name] = new Set();

          return {
            ...cumul,
            [elt.name]: [],
          };

        case REST_FIELD_TYPES.IMAGE:
          this.controlsImage[elt.name] = new FileUploadControl(
            {
              listVisible: true,
              accept: ["image/*"],
              discardInvalid: true,
              multiple: false,
            },
            [
              FileUploadValidators.accept(["image/*"]),
              FileUploadValidators.filesLimit(1),
            ]
          );
          return {
            ...cumul,
            [elt.name]: [""],
          };
        default:
          return {
            ...cumul,
            [elt.name]: [""],
          };
      }
    }, {});

    this.form = this.fb.group(controls);

    this.settings = {
      hideSubHeader: true,
      actions: false,
      pager: {
        perPage: this.resource.listConfig.perPage,
      },
      columns: this.createMatTableColumns(),
    };
  }

  trackByFn(index) {
    return index;
  }

  reset() {
    this.form.reset();
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
    input.nativeElement.value = "";
  }

  // Autocomplete
  private filter(value: any, field): string[] {
    if (typeof value == "string") {
      return this.options[field.name].filter((optionValue) => {
        return field.metaData.addConfig.belongToOptions.filterKeys.some((elt) =>
          `${optionValue[elt].toLowerCase()}`.includes(`${value.toLowerCase()}`)
        );
      });
    }
  }

  getFilteredOptions(value: any, field: RestField): Observable<string[]> {
    if (field.type == REST_FIELD_TYPES.BELONG_TO)
      return of(value).pipe(
        map((filterString: string) => this.filter(filterString, field))
      );
    return of(value).pipe(
      map((filterString: string) => this.filterMany(filterString, field))
    );
  }

  onSelectionChange(event, field: RestField) {
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

  getImage(file: any): void {
    // if (FileReader && file) {
    //   const fr = new FileReader();
    //   fr.onload = (e: any) => {
    //     this.uploadedFile.next(e.target.result);
    //   };
    //   fr.readAsDataURL(file);
    // } else {
    //   this.uploadedFile.next(null);
    // }
    // console.log(file);
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  activeCroper() {
    this.isCrop = true;
  }

  saveCroper() {
    this.isCrop = false;
    this.uploadedFile.next(this.croppedImage);
    // this.form.patchValue({
    //   base64ToFile(this.croppedImage)
    // });
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
          [field.metaData.addConfig.belongToManyOptions.resourceIdName]: "",
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
    this.inputBelongToMany.nativeElement.value = "";
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

  private filterMany(value: any, field): string[] {
    if (typeof value == "string") {
      return this.options[field.name].filter((optionValue) => {
        return field.metaData.addConfig.belongToManyOptions.filterKeys.some(
          (elt) =>
            `${optionValue[elt].toLowerCase()}`.includes(
              `${value.toLowerCase()}`
            )
        );
      });
    }
  }

  //End BelongToMany

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

    this.serviceRest
      .addResources(this.resource.addConfig, { ...datas, user_id: 1 })
      .subscribe((response: any) => {
        if (saveBelongTomany.length > 0) {
          saveBelongTomany.forEach((element, index) => {
            const restResource =
              this.serviceRestAdminConfig.getSpecificResource(element.pivot);
            const proms = [];

            for (let index = 0; index < element.resources.length; index++) {
              const item = element.resources[index];
              const data = {
                [item["saveRelatedIdName"]]: item[item["saveRelatedIdName"]],
                [item["saveResourceIdName"]]: response.id,
              };

              proms.push(
                this.serviceRest
                  .addResources(restResource.addConfig, data)
                  .toPromise()
              );
            }

            Promise.all(proms).then((res) => {
              if (index == saveBelongTomany.length - 1) this.form.reset();
            });
          });
        }
      });
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
    this.exportService.exportToExcel(edata, "rest_file_template_data");
  }

  importData() {
    const dialog = this.dialogService.open(UploadFileComponent, {});
    dialog.onClose.subscribe((resp) => {
      if (resp) this.source = new LocalDataSource(resp);
    });
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

  onSumbit() {
    if (this.source) {
      this.source.getAll().then((data) => {
        const request = [];
        data.forEach((element) => {
          request.push(
            this.serviceRest
              .addResources(this.resource.addConfig, element)
              .toPromise()
          );
        });
        Promise.all(request).then((res) => {
          this.source = new LocalDataSource([]);
        });
      });
    } else console.log("RIEN A SIGNALER");
    // this.serviceRest
    //   .addRessources(this.resource.listConfig, {})
    //   .subscribe((res) => console.log(res));
  }
}

// const addTwo = async () => 2;

// const addThree = async (inValue) => new Promise((resolve) => setTimeout(resolve(inValue + 3), 2000));

// const addFour = (inValue) => new Promise((res) => setTimeout(res(inValue + 4), 1000));

// const addFive = async (inValue) => inValue + 5;

// // Function which handles promises from above
// async function sequenceAddition() {
//   let sum = await [addTwo, addThree, addFour, addFive].reduce(
//     (promise, currPromise) => promise.then((val) => currPromise(val)),
//     Promise.
//  Promise.resolve()
//   );
//   console.log('sum:', sum); // 2 + 3 + 4 + 5 =  14
// }
