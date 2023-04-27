import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-select-all-checkbox-render',
  template: `
    <div class="select-all-checkbox">
      <nb-checkbox
        [checked]="value?.selected"
        (click)="selectAllCheckboxClick($event)"
      ></nb-checkbox>
    </div>
  `,
})
export class SelectAllCheckboxRenderComponent implements ViewCell, OnInit {
  @Input() value: any;
  @Input() rowData: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  selectAllCheckboxClick(event: Event) {
    event.stopPropagation();
    const checkbox = event.target as HTMLInputElement;
    this.value.handleCheckboxClick(checkbox, this.rowData);
    this.cdr.detectChanges();
  }
}
