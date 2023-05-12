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
TinyMCEComponent.ɵfac = function TinyMCEComponent_Factory(t) { return new (t || TinyMCEComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LocationStrategy)); };
TinyMCEComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TinyMCEComponent, selectors: [["ngx-tiny-mce"]], outputs: { editorKeyup: "editorKeyup" }, decls: 0, vars: 0, template: function TinyMCEComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TinyMCEComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-tiny-mce',
                template: '',
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.LocationStrategy }]; }, { editorKeyup: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlueS1tY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL0B0aGVtZS9jb21wb25lbnRzL3RpbnktbWNlL3RpbnktbWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULE1BQU0sRUFDTixZQUFZLEdBRWIsTUFBTSxlQUFlLENBQUM7OztBQU92QixNQUFNLE9BQU8sZ0JBQWdCO0lBSzNCLFlBQ1UsSUFBZ0IsRUFDaEIsZ0JBQWtDO1FBRGxDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU5sQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFPN0MsQ0FBQztJQUVKLGVBQWU7UUFDYixpQkFBaUI7UUFDakIscUNBQXFDO1FBQ3JDLHlDQUF5QztRQUN6Qyw4RUFBOEU7UUFDOUUseUJBQXlCO1FBQ3pCLDRCQUE0QjtRQUM1QixpQ0FBaUM7UUFDakMsb0RBQW9EO1FBQ3BELFVBQVU7UUFDVixPQUFPO1FBQ1AsbUJBQW1CO1FBQ25CLE1BQU07SUFDUixDQUFDO0lBRUQsV0FBVztRQUNULCtCQUErQjtJQUNqQyxDQUFDOztnRkEzQlUsZ0JBQWdCO21FQUFoQixnQkFBZ0I7dUZBQWhCLGdCQUFnQjtjQUo1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxFQUFFO2FBQ2I7NEZBRVcsV0FBVztrQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBBZnRlclZpZXdJbml0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXRpbnktbWNlJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBUaW55TUNFQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQE91dHB1dCgpIGVkaXRvcktleXVwID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgZWRpdG9yOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgbG9jYXRpb25TdHJhdGVneTogTG9jYXRpb25TdHJhdGVneVxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIHRpbnltY2UuaW5pdCh7XG4gICAgLy8gICB0YXJnZXQ6IHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LFxuICAgIC8vICAgcGx1Z2luczogWydsaW5rJywgJ3Bhc3RlJywgJ3RhYmxlJ10sXG4gICAgLy8gICBza2luX3VybDogYCR7dGhpcy5sb2NhdGlvblN0cmF0ZWd5LmdldEJhc2VIcmVmKCl9YXNzZXRzL3NraW5zL2xpZ2h0Z3JheWAsXG4gICAgLy8gICBzZXR1cDogKGVkaXRvcikgPT4ge1xuICAgIC8vICAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcbiAgICAvLyAgICAgZWRpdG9yLm9uKCdrZXl1cCcsICgpID0+IHtcbiAgICAvLyAgICAgICB0aGlzLmVkaXRvcktleXVwLmVtaXQoZWRpdG9yLmdldENvbnRlbnQoKSk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgfSxcbiAgICAvLyAgIGhlaWdodDogJzMyMCcsXG4gICAgLy8gfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyB0aW55bWNlLnJlbW92ZSh0aGlzLmVkaXRvcik7XG4gIH1cbn1cbiJdfQ==