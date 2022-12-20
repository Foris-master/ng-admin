import { ListConfig } from "../models/rest-resource.model";
import { NbDialogRef } from "@nebular/theme";
import { RestResourceService } from "../service/rest-resource.service";
import * as i0 from "@angular/core";
export declare class RestResourceDeleteComponent {
    protected ref: NbDialogRef<RestResourceDeleteComponent>;
    private serviceRestResource;
    datas: any;
    title: string;
    listConfig: ListConfig;
    isSubmit: boolean;
    constructor(ref: NbDialogRef<RestResourceDeleteComponent>, serviceRestResource: RestResourceService);
    dismiss(val?: boolean): void;
    delete(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestResourceDeleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RestResourceDeleteComponent, "ngx-rest-resource-delete", never, { "datas": "datas"; "title": "title"; "listConfig": "listConfig"; }, {}, never, never>;
}
