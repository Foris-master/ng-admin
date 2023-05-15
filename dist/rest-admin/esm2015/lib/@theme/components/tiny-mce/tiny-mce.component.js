import { Component, Output, EventEmitter, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TinyMCEComponent {
    constructor(host, locationStrategy) {
        this.host = host;
        this.locationStrategy = locationStrategy;
        this.editorKeyup = new EventEmitter();
    }
    ngAfterViewInit() {
        // tinymce.init({
        //   target: this.host.nativeElement,
        //   plugins: ['link', 'paste', 'table'],
        //   skin_url: `${this.locationStrategy.getBaseHref()}assets/skins/lightgray`,
        //   setup: (editor) => {
        //     this.editor = editor;
        //     editor.on('keyup', () => {
        //       this.editorKeyup.emit(editor.getContent());
        //     });
        //   },
        //   height: '320',
        // });
    }
    ngOnDestroy() {
        // tinymce.remove(this.editor);
    }
}
TinyMCEComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TinyMCEComponent, deps: [{ token: i0.ElementRef }, { token: i1.LocationStrategy }], target: i0.ɵɵFactoryTarget.Component });
TinyMCEComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: TinyMCEComponent, selector: "ngx-tiny-mce", outputs: { editorKeyup: "editorKeyup" }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TinyMCEComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-tiny-mce',
                    template: '',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.LocationStrategy }]; }, propDecorators: { editorKeyup: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlueS1tY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL0B0aGVtZS9jb21wb25lbnRzL3RpbnktbWNlL3RpbnktbWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULE1BQU0sRUFDTixZQUFZLEdBRWIsTUFBTSxlQUFlLENBQUM7OztBQU92QixNQUFNLE9BQU8sZ0JBQWdCO0lBSzNCLFlBQ1UsSUFBZ0IsRUFDaEIsZ0JBQWtDO1FBRGxDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU5sQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFPN0MsQ0FBQztJQUVKLGVBQWU7UUFDYixpQkFBaUI7UUFDakIscUNBQXFDO1FBQ3JDLHlDQUF5QztRQUN6Qyw4RUFBOEU7UUFDOUUseUJBQXlCO1FBQ3pCLDRCQUE0QjtRQUM1QixpQ0FBaUM7UUFDakMsb0RBQW9EO1FBQ3BELFVBQVU7UUFDVixPQUFPO1FBQ1AsbUJBQW1CO1FBQ25CLE1BQU07SUFDUixDQUFDO0lBRUQsV0FBVztRQUNULCtCQUErQjtJQUNqQyxDQUFDOzs2R0EzQlUsZ0JBQWdCO2lHQUFoQixnQkFBZ0IsNkZBRmpCLEVBQUU7MkZBRUQsZ0JBQWdCO2tCQUo1QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsRUFBRTtpQkFDYjtnSUFFVyxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIEFmdGVyVmlld0luaXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtdGlueS1tY2UnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIFRpbnlNQ0VDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBAT3V0cHV0KCkgZWRpdG9yS2V5dXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBlZGl0b3I6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBsb2NhdGlvblN0cmF0ZWd5OiBMb2NhdGlvblN0cmF0ZWd5XG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gdGlueW1jZS5pbml0KHtcbiAgICAvLyAgIHRhcmdldDogdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsXG4gICAgLy8gICBwbHVnaW5zOiBbJ2xpbmsnLCAncGFzdGUnLCAndGFibGUnXSxcbiAgICAvLyAgIHNraW5fdXJsOiBgJHt0aGlzLmxvY2F0aW9uU3RyYXRlZ3kuZ2V0QmFzZUhyZWYoKX1hc3NldHMvc2tpbnMvbGlnaHRncmF5YCxcbiAgICAvLyAgIHNldHVwOiAoZWRpdG9yKSA9PiB7XG4gICAgLy8gICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yO1xuICAgIC8vICAgICBlZGl0b3Iub24oJ2tleXVwJywgKCkgPT4ge1xuICAgIC8vICAgICAgIHRoaXMuZWRpdG9yS2V5dXAuZW1pdChlZGl0b3IuZ2V0Q29udGVudCgpKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9LFxuICAgIC8vICAgaGVpZ2h0OiAnMzIwJyxcbiAgICAvLyB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIHRpbnltY2UucmVtb3ZlKHRoaXMuZWRpdG9yKTtcbiAgfVxufVxuIl19