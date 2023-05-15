import { OnInit } from "@angular/core";
import { FileUploadControl } from "@iplab/ngx-file-upload";
import { NbDialogRef, NbGlobalPhysicalPosition, NbToastrService } from "@nebular/theme";
import * as i0 from "@angular/core";
export declare class UploadFileComponent implements OnInit {
    protected ref: NbDialogRef<UploadFileComponent>;
    private toastrService;
    datas: any;
    title: string;
    dataDoc: any;
    private subscription;
    arrayBuffer: any;
    positions: typeof NbGlobalPhysicalPosition;
    isSubmit: boolean;
    control: FileUploadControl;
    constructor(ref: NbDialogRef<UploadFileComponent>, toastrService: NbToastrService);
    ngOnInit(): void;
    addDatas(): void;
    close(): void;
    showToast(position: any, status: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UploadFileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UploadFileComponent, "ngx-upload-file", never, { "datas": "datas"; "title": "title"; }, {}, never, never>;
}
