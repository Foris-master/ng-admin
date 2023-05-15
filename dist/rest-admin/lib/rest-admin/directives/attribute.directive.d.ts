import { OnChanges, Renderer2, ElementRef, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AttributeDirective implements OnChanges {
    private renderer;
    private elementRef;
    attributes: {
        [key: string]: any;
    };
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AttributeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AttributeDirective, "[attributes]", never, { "attributes": "attributes"; }, {}, never>;
}
