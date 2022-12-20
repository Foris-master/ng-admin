import { Component, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "@angular/common";
export class FsIconCComponent {
    isDir() {
        return this.place == "header-place";
    }
}
FsIconCComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FsIconCComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FsIconCComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: FsIconCComponent, selector: "ngx-fs-icon", inputs: { expanded: "expanded", place: "place" }, ngImport: i0, template: `
    <nb-tree-grid-row-toggle
      [expanded]="expanded"
      *ngIf="isDir(); else fileIcon"
    >
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon> </ng-template>
  `, isInline: true, components: [{ type: i1.NbTreeGridRowToggleComponent, selector: "nb-tree-grid-row-toggle", inputs: ["expanded"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FsIconCComponent, decorators: [{
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
        }], propDecorators: { expanded: [{
                type: Input
            }], place: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnMtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvZnMtaWNvbi1jY29tcG9uZW50L2ZzLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBYWpELE1BQU0sT0FBTyxnQkFBZ0I7SUFNM0IsS0FBSztRQUNILE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUM7SUFDdEMsQ0FBQzs7NkdBUlUsZ0JBQWdCO2lHQUFoQixnQkFBZ0IscUdBVGpCOzs7Ozs7O0dBT1Q7MkZBRVUsZ0JBQWdCO2tCQVg1QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUU7Ozs7Ozs7R0FPVDtpQkFDRjs4QkFHQyxRQUFRO3NCQURQLEtBQUs7Z0JBR04sS0FBSztzQkFESixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJuZ3gtZnMtaWNvblwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYi10cmVlLWdyaWQtcm93LXRvZ2dsZVxuICAgICAgW2V4cGFuZGVkXT1cImV4cGFuZGVkXCJcbiAgICAgICpuZ0lmPVwiaXNEaXIoKTsgZWxzZSBmaWxlSWNvblwiXG4gICAgPlxuICAgIDwvbmItdHJlZS1ncmlkLXJvdy10b2dnbGU+XG4gICAgPG5nLXRlbXBsYXRlICNmaWxlSWNvbj4gPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRnNJY29uQ0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGV4cGFuZGVkITogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcGxhY2UhOiBzdHJpbmc7XG5cbiAgaXNEaXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGxhY2UgPT0gXCJoZWFkZXItcGxhY2VcIjtcbiAgfVxufVxuIl19