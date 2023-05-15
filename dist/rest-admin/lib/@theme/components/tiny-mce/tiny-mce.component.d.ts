import { OnDestroy, AfterViewInit, EventEmitter, ElementRef } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import * as i0 from "@angular/core";
export declare class TinyMCEComponent implements OnDestroy, AfterViewInit {
    private host;
    private locationStrategy;
    editorKeyup: EventEmitter<any>;
    editor: any;
    constructor(host: ElementRef, locationStrategy: LocationStrategy);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TinyMCEComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TinyMCEComponent, "ngx-tiny-mce", never, {}, { "editorKeyup": "editorKeyup"; }, never, never>;
}
