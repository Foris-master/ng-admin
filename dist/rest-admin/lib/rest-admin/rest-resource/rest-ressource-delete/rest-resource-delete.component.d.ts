import { ListConfig } from '../models/rest-resource.model';
import { NbDialogRef } from '@nebular/theme';
import { RestResourceService } from '../service/rest-resource.service';
import { NotificationService } from '../service/notification.service';
import * as i0 from "@angular/core";
export declare class RestResourceDeleteComponent {
    protected ref: NbDialogRef<RestResourceDeleteComponent>;
    private serviceRestResource;
    private notificationService;
    datas: any;
    title: string;
    listConfig: ListConfig;
    resourceName: string;
    isSubmit: boolean;
    constructor(ref: NbDialogRef<RestResourceDeleteComponent>, serviceRestResource: RestResourceService, notificationService: NotificationService);
    dismiss(val?: boolean): void;
    delete(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestResourceDeleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RestResourceDeleteComponent, "ngx-rest-resource-delete", never, { "datas": "datas"; "title": "title"; "listConfig": "listConfig"; "resourceName": "resourceName"; }, {}, never, never>;
}