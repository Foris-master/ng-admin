import { FileUploadControl } from "@iplab/ngx-file-upload";
import { NbTagComponent, NbTagInputAddEvent } from "@nebular/theme";
import { DefaultEditor } from "ng2-smart-table";
import { BehaviorSubject, Observable } from "rxjs";
import { RestField, REST_FIELD_TYPES } from "../../models/rest-resource.model";
import { RestAdminConfigService } from "../../service/rest-admin-config.service";
import { RestResourceService } from "../../service/rest-resource.service";
import { ImageCroppedEvent } from "ngx-image-cropper";
import * as i0 from "@angular/core";
export declare class RestResourceEditorFieldsComponent extends DefaultEditor {
    private serviceRestAdminConfig;
    private serviceResResource;
    infoRows: any;
    field: RestField;
    options: any[];
    filteredOptions$: Observable<string[]>;
    readonly uploadedFile: BehaviorSubject<string>;
    private subscription;
    input: any;
    inputBelongTo: any;
    constructor(serviceRestAdminConfig: RestAdminConfigService, serviceResResource: RestResourceService);
    readonly control: FileUploadControl;
    controlCroper: any;
    croppedImage: any;
    isCrop: boolean;
    ngOnInit(): void;
    get REST_FIELD_TYPES(): typeof REST_FIELD_TYPES;
    onTagRemove(tagToRemove: NbTagComponent): void;
    onTagAdd({ value, input }: NbTagInputAddEvent): void;
    private filter;
    getFilteredOptions(value: any): Observable<string[]>;
    onChange(): void;
    onSelectionChange($event: any): void;
    ngOnDestroy(): void;
    getImage(file: File): void;
    imageCropped(event: ImageCroppedEvent): void;
    activeCroper(): void;
    saveCroper(): void;
    onChoose(event: any): void;
    onTagRemoveBelong(tagToRemove: NbTagComponent): void;
    getField(fields: any, value: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestResourceEditorFieldsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RestResourceEditorFieldsComponent, "input-editor", never, {}, {}, never, never>;
}