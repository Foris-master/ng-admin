import { LocalDataSource } from 'ng2-smart-table';
import { RestField, REST_FIELD_TYPES } from '../models/rest-resource.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChangeDetectorRef, OnInit, QueryList } from '@angular/core';
import { NbDialogService, NbMenuService, NbTagComponent, NbTagInputAddEvent } from '@nebular/theme';
import { BehaviorSubject, Observable } from 'rxjs';
import { RestResource } from '../models/rest-resource';
import { RestResourceService } from '../service/rest-resource.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { RestAdminConfigService } from '../service/rest-admin-config.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestExportService } from '../service/rest-export.service';
import { NotificationService } from '../service/notification.service';
import * as i0 from "@angular/core";
export declare class RestResourceAddComponent implements OnInit {
    private fb;
    private serviceRest;
    private serviceRestAdminConfig;
    private activatedRoute;
    private nbMenuService;
    private exportService;
    private dialogService;
    private router;
    private notificationService;
    private cdref;
    resource: RestResource;
    ressourceName: string;
    message: string;
    form: FormGroup;
    formState: any;
    entity: any;
    loading: boolean;
    uploadedFile: BehaviorSubject<any>;
    private subscription;
    options: any;
    allFilterContains: any;
    belongToValue: any;
    belongToMany: any;
    jsonEditorOptions: {};
    belongTo: QueryList<any>;
    inputBelongToMany: any;
    controls: any;
    multiple: boolean;
    controlCroper: any;
    imageChangedEvent: any;
    croppedImage: any;
    isCrop: any;
    controlsImage: any;
    colors: any[];
    items: {
        title: string;
    }[];
    alphabelt: string[];
    filesUpload: {};
    urlsImage: {};
    source: LocalDataSource;
    settings: any;
    morphFields: {};
    constructor(fb: FormBuilder, serviceRest: RestResourceService, serviceRestAdminConfig: RestAdminConfigService, activatedRoute: ActivatedRoute, nbMenuService: NbMenuService, exportService: RestExportService, dialogService: NbDialogService, router: Router, notificationService: NotificationService, cdref: ChangeDetectorRef);
    ngOnInit(): void;
    initForm(datas: any): void;
    trackByFn(index: any): any;
    reset(): void;
    get REST_FIELD_TYPES(): typeof REST_FIELD_TYPES;
    onTagRemove(tagToRemove: NbTagComponent, name: any): void;
    onTagAdd({ value, input }: NbTagInputAddEvent, name: any): void;
    private filter;
    getFilteredOptions(value: any, field: RestField): Observable<string[]>;
    onSelectionChange(event: any, field: RestField): void;
    filterInput(event: any, field: RestField): void;
    test(event: any): void;
    onSelect(event: any, field: RestField): void;
    onRemove(field: any): void;
    imageCropped(event: ImageCroppedEvent, field: any): void;
    activeCroper(field: any): void;
    desactiveCrop(field: any): void;
    saveCroper(field: RestField): void;
    onChoose(event: any, field: any): void;
    onTagRemoveBelong(tagToRemove: NbTagComponent, field: any): void;
    private filterMany;
    onCreate(): void;
    onEdit(): void;
    downloadTemplate(): void;
    importData(): void;
    private createMatTableColumns;
    onSumbit(): void;
    addJSONField(event: any): void;
    removeJSONField(event: any, index: any): void;
    onMorphSelectField(event: any, field: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestResourceAddComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RestResourceAddComponent, "ngx-rest-resource-add", never, { "resource": "resource"; }, {}, never, never>;
}
