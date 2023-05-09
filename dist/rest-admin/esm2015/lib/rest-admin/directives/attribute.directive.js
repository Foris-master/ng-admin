import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AttributeDirective {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    ngOnChanges(changes) {
        if (changes.attributes) {
            for (let attributeName in this.attributes) {
                const attributeValue = this.attributes[attributeName];
                if (attributeValue) {
                    this.renderer.setAttribute(this.elementRef.nativeElement, attributeName, attributeValue);
                }
                else {
                    this.renderer.removeAttribute(this.elementRef.nativeElement, attributeName);
                }
            }
        }
    }
}
AttributeDirective.ɵfac = function AttributeDirective_Factory(t) { return new (t || AttributeDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
AttributeDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AttributeDirective, selectors: [["", "attributes", ""]], inputs: { attributes: "attributes" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AttributeDirective, [{
        type: Directive,
        args: [{
                selector: '[attributes]'
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { attributes: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL2RpcmVjdGl2ZXMvYXR0cmlidXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLEtBQUssRUFBd0MsTUFBTSxlQUFlLENBQUM7O0FBS2xHLE1BQU0sT0FBTyxrQkFBa0I7SUFLN0IsWUFDVSxRQUFtQixFQUNuQixVQUFzQjtRQUR0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDNUIsQ0FBQztJQUVFLFdBQVcsQ0FBQyxPQUFzQjtRQUN2QyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsS0FBSyxJQUFJLGFBQWEsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUN6QyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLGNBQWMsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2lCQUMxRjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztpQkFDN0U7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7b0ZBckJVLGtCQUFrQjtxRUFBbEIsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FIOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCO3FGQUlRLFVBQVU7a0JBRGhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uQ2hhbmdlcywgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXR0cmlidXRlc10nXG59KVxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogYW55OyB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmF0dHJpYnV0ZXMpIHtcbiAgICAgIGZvciAobGV0IGF0dHJpYnV0ZU5hbWUgaW4gdGhpcy5hdHRyaWJ1dGVzKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdO1xuICAgICAgICBpZiAoYXR0cmlidXRlVmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ==