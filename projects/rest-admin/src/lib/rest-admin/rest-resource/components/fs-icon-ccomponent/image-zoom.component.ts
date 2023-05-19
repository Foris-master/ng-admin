import { Component, Input } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-image-zoom',
  template: `
    <div
      class="image-zoom-container"
      (click)="openZoomDialog()"
    >
      <img
        [src]="imageUrl"
        alt=""
        [style.transform]="transformStyle"
        style="max-width: 300px; max-height: 200px;cursor: zoom-in;"
      />
    </div>
  `,
})
export class ImageZoomComponent {
  @Input() imageUrl: string = '';
  isZooming: boolean = false;
  startX: number;
  startY: number;
  startScale: number = 1;
  currentScale: number = 1;
  transformStyle: string = '';

  constructor(private dialogService: NbDialogService) {}

  openZoomDialog() {
    this.dialogService.open(ImageZoomDialogComponent, {
      context: {
        imageUrl: this.imageUrl,
      },
    });
  }
}

@Component({
  selector: 'ngx-image-zoom-dialog',
  template: `
    <div class="nb-card">
      <div
        class="nb-card-body"
        (mousedown)="startZoom($event)"
        (mousemove)="zoomImage($event)"
        (mouseup)="endZoom()"
      >
        <img [src]="imageUrl" alt="" [style.transform]="transformStyle" />
      </div>
      <div class="nb-card-footer">
        <button nbButton status="primary" size="small" (click)="closeDialog()">
          Close
        </button>
      </div>
    </div>
  `,
})
export class ImageZoomDialogComponent {
  imageUrl: string = '';
  currentScale: number = 2;
  transformStyle: string = '';

  isZooming: boolean = false;
  startX: number;
  startY: number;
  startScale: number = 1;

  constructor(private dialogRef: NbDialogRef<ImageZoomDialogComponent>) {}

  ngOnInit() {
    this.transformStyle = `scale(${this.currentScale})`;
  }

  closeDialog() {
    this.dialogRef.close();
  }
  startZoom(event: MouseEvent) {
    event.preventDefault();
    this.isZooming = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
  }

  zoomImage(event: MouseEvent) {
    if (!this.isZooming) return;

    const currentX = event.clientX;
    const currentY = event.clientY;

    const deltaX = currentX - this.startX;
    const deltaY = currentY - this.startY;

    const scaleDelta = 0.01;
    const scaleChange =
      Math.sqrt(deltaX * deltaX + deltaY * deltaY) * scaleDelta;

    if (deltaY < 0) {
      this.currentScale = this.startScale + scaleChange;
    } else {
      this.currentScale = this.startScale - scaleChange;
    }

    this.transformStyle = `scale(${this.currentScale})`;
  }

  endZoom() {
    this.isZooming = false;
    this.startScale = this.currentScale;
  }
}
