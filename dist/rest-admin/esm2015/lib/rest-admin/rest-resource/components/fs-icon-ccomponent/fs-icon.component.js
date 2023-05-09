import { Component, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@nebular/theme";
function FsIconCComponent_nb_tree_grid_row_toggle_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tree-grid-row-toggle", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("expanded", ctx_r0.expanded);
} }
function FsIconCComponent_ng_template_1_Template(rf, ctx) { }
export class FsIconCComponent {
    isDir() {
        return this.place == "header-place";
    }
}
FsIconCComponent.ɵfac = function FsIconCComponent_Factory(t) { return new (t || FsIconCComponent)(); };
FsIconCComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FsIconCComponent, selectors: [["ngx-fs-icon"]], inputs: { expanded: "expanded", place: "place" }, decls: 3, vars: 2, consts: [[3, "expanded", 4, "ngIf", "ngIfElse"], ["fileIcon", ""], [3, "expanded"]], template: function FsIconCComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FsIconCComponent_nb_tree_grid_row_toggle_0_Template, 1, 1, "nb-tree-grid-row-toggle", 0);
        i0.ɵɵtemplate(1, FsIconCComponent_ng_template_1_Template, 0, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.isDir())("ngIfElse", _r1);
    } }, directives: [i1.NgIf, i2.NbTreeGridRowToggleComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FsIconCComponent, [{
        type: Component,
        args: [{
                selector: "ngx-fs-icon",
                template: `
    <nb-tree-grid-row-toggle
      [expanded]="expanded"
      *ngIf="isDir(); else fileIcon"
    >
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon> </ng-template>
  `,
            }]
    }], null, { expanded: [{
            type: Input
        }], place: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnMtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvZnMtaWNvbi1jY29tcG9uZW50L2ZzLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztJQUs3Qyw2Q0FJMEI7OztJQUh4QiwwQ0FBcUI7OztBQU8zQixNQUFNLE9BQU8sZ0JBQWdCO0lBTTNCLEtBQUs7UUFDSCxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDO0lBQ3RDLENBQUM7O2dGQVJVLGdCQUFnQjttRUFBaEIsZ0JBQWdCO1FBUnpCLHlHQUkwQjtRQUMxQixrSEFBc0M7OztRQUhuQyxrQ0FBZSxpQkFBQTs7dUZBTVQsZ0JBQWdCO2NBWDVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Ozs7O0dBT1Q7YUFDRjtnQkFHQyxRQUFRO2tCQURQLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5neC1mcy1pY29uXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5iLXRyZWUtZ3JpZC1yb3ctdG9nZ2xlXG4gICAgICBbZXhwYW5kZWRdPVwiZXhwYW5kZWRcIlxuICAgICAgKm5nSWY9XCJpc0RpcigpOyBlbHNlIGZpbGVJY29uXCJcbiAgICA+XG4gICAgPC9uYi10cmVlLWdyaWQtcm93LXRvZ2dsZT5cbiAgICA8bmctdGVtcGxhdGUgI2ZpbGVJY29uPiA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBGc0ljb25DQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZXhwYW5kZWQhOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwbGFjZSE6IHN0cmluZztcblxuICBpc0RpcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wbGFjZSA9PSBcImhlYWRlci1wbGFjZVwiO1xuICB9XG59XG4iXX0=