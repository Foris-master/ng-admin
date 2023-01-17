import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {
  FileUploadControl,
  FileUploadValidators,
} from "@iplab/ngx-file-upload";
import { NbTagComponent, NbTagInputAddEvent } from "@nebular/theme";
import { DefaultEditor } from "ng2-smart-table";
import { BehaviorSubject, Observable, of, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { RestField, REST_FIELD_TYPES } from "../../models/rest-resource.model";
import { RestAdminConfigService } from "../../service/rest-admin-config.service";
import { RestResourceService } from "../../service/rest-resource.service";
import { ImageCroppedEvent, base64ToFile } from "ngx-image-cropper";

import * as _ from "lodash";
@Component({
  selector: "input-editor",
  templateUrl: "./rest-resource-editor-fields.component.html",
  styleUrls: ["./rest-resource-editor-fields.component.scss"],
})
export class RestResourceEditorFieldsComponent extends DefaultEditor {
  infoRows: any;

  field: RestField;
  options: any[];
  filteredOptions$: Observable<string[]>;

  // Test
  public readonly uploadedFile: BehaviorSubject<string> = new BehaviorSubject(
    null
  );
  private subscription: Subscription;
  // End test

  @ViewChild("autoInput") input;
  @ViewChild("autoInputBelongToMany") inputBelongTo;

  constructor(
    private serviceRestAdminConfig: RestAdminConfigService,
    private serviceResResource: RestResourceService
  ) {
    super();
  }

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
  croppedImage: any = "";
  isCrop = false;

  // End test
  ngOnInit() {
    this.subscription = this.control.valueChanges.subscribe(
      (values: Array<File>) => {
        this.getImage(values[0]);
        this.controlCroper = values[0];
      }
    );
    
    this.infoRows = this.cell.getColumn().valuePrepareFunction();
    this.field = this.infoRows.restField;

    switch (this.field.type) {
      case REST_FIELD_TYPES.HAS_MANY:
        this.cell.newValue = new Set([]);
        break;
      case REST_FIELD_TYPES.BELONG_TO:
        const restResource = this.serviceRestAdminConfig.getSpecificResource(
          this.field.metaData.addConfig.belongToOptions.resourceName
        );
        this.serviceResResource
          .getResources({
            api: restResource.api,
            queryParams: this.field.metaData.addConfig.belongToOptions
              .queryParams
              ? this.field.metaData.addConfig.belongToOptions.queryParams
              : restResource.queryParams,
          })
          .subscribe((response: any) => {
            this.options = response;
            this.filteredOptions$ = of(this.options);
          });

        break;

        case REST_FIELD_TYPES.COLOR:
          if (!this.cell.newValue) {
            this.cell.newValue = '#A4A';
          }
          break;
      case REST_FIELD_TYPES.BELONG_TO_MANY:
        this.cell.newValue = new Set([]);

        const resource = this.serviceRestAdminConfig.getSpecificResource(
          this.field.metaData.addConfig.belongToManyOptions.relatedName
        );
        this.serviceResResource
          .getResources({
            api: resource.api,
            queryParams: this.field.metaData.addConfig.belongToManyOptions
              .queryParams
              ? this.field.metaData.addConfig.belongToManyOptions.queryParams
              : resource.queryParams,
          })
          .subscribe((response: any) => {
            this.options = response;
            this.filteredOptions$ = of(this.options);
          });
        break;
      case REST_FIELD_TYPES.IMAGE:
      case REST_FIELD_TYPES.FILE:
        this.cell.newValue = [];
        break;
      case REST_FIELD_TYPES.BOOLEAN:
        this.cell.newValue = false;
        break;
      // case REST_FIELD_TYPES.PDF:
      // this.cell.newValue = [];
      // break;

      default:
        break;
    }
  }

  get REST_FIELD_TYPES() {
    return REST_FIELD_TYPES;
  }

  // Tags
  onTagRemove(tagToRemove: NbTagComponent): void {
    const treesA = new Set(this.cell.newValue);

    treesA.delete(tagToRemove.text);

    this.cell.newValue = Array.from(treesA.values());
  }

  onTagAdd({ value, input }: NbTagInputAddEvent): void {
    if (value) {
      const treesA = new Set(this.cell.newValue);
      treesA.add(value);

      this.cell.newValue = Array.from(treesA.values());
    }
    input.nativeElement.value = "";
  }

  // End tag

  // Autocomplete
  private filter(value: any): string[] {
    if (typeof value == "string") {
      return this.options.filter((optionValue) => {
        return this.field.metaData.addConfig.belongToOptions.filterKeys.some(
          (elt) =>
            `${optionValue[elt].toLowerCase()}`.includes(
              `${value.toLowerCase()}`
            )
        );
      });
    }
  }

  getFilteredOptions(value: any): Observable<string[]> {
    return of(value).pipe(
      map((filterString: string) => this.filter(filterString))
    );
  }

  onChange() {
    this.filteredOptions$ = this.getFilteredOptions(
      this.input.nativeElement.value
    );
  }

  onSelectionChange($event) {
    this.filteredOptions$ = this.getFilteredOptions($event);
  }

  // End Autocomplete

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getImage(file: File): void {
    if (FileReader && file) {
      const fr = new FileReader();
      fr.onload = (e: any) => {
        this.uploadedFile.next(e.target.result);
      };
      fr.readAsDataURL(file);
    } else {
      this.uploadedFile.next(null);
    }
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
    this.cell.setValue(base64ToFile(this.croppedImage));
  }

  //belongToManyOptions
  onChoose(event) {
    const cellData = Array.from(this.cell.newValue.values());
    if (event) {
      const search = cellData.find((elt: any) => elt.id == event.id);
      if (search == undefined) {
        const newElt = {
          id: event.id,
          [this.field.metaData.addConfig.belongToManyOptions.relatedIdName]:
            event.id,
          [this.field.metaData.addConfig.belongToManyOptions.resourceIdName]:
            "",
          [this.field.metaData.addConfig.belongToManyOptions.filterKeys[0]]:
            event[
              this.field.metaData.addConfig.belongToManyOptions.filterKeys[0]
            ],
          saveRelatedIdName:
            this.field.metaData.addConfig.belongToManyOptions.relatedIdName,
          saveResourceIdName:
            this.field.metaData.addConfig.belongToManyOptions.resourceIdName,
        };

        const treesA = new Set(this.cell.newValue);
        treesA.add(newElt);

        this.cell.newValue = Array.from(treesA.values());
      }
    }
    this.inputBelongTo.nativeElement.value = "";
  }

  onTagRemoveBelong(tagToRemove: NbTagComponent): void {
    const cellData = Array.from(this.cell.newValue.values());
    const save = [];

    cellData.forEach((elt) => {
      if (
        elt[
          this.field.metaData.addConfig.belongToManyOptions.template
            ? this.field.metaData.addConfig.belongToManyOptions.template
            : this.field.metaData.addConfig.belongToManyOptions.filterKeys[0]
        ].localeCompare(tagToRemove.text) != 0
      )
        save.push(elt);
    });
    this.cell.newValue = Array.from(save);
  }

  //End BelongToMany

  getField(fields, value) {
    return _.get(fields, value);
  }
}

/**
 * Addconfig: champs par lequel on va filtrer,
 * la valeur a retenir et le template a afficher
 */
