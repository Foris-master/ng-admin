import { Component, Input } from "@angular/core";

@Component({
  selector: "ngx-fs-icon",
  template: `
    <nb-tree-grid-row-toggle
      [expanded]="expanded"
      *ngIf="isDir(); else fileIcon"
    >
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon> </ng-template>
  `,
})
export class FsIconCComponent {
  @Input()
  expanded!: boolean;
  @Input()
  place!: string;

  isDir(): boolean {
    return this.place == "header-place";
  }
}
