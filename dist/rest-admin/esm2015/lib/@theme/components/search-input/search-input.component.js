import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
export class SearchInputComponent {
    constructor() {
        this.search = new EventEmitter();
        this.isInputShown = false;
    }
    showInput() {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    }
    hideInput() {
        this.isInputShown = false;
    }
    onInput(val) {
        this.search.emit(val);
    }
}
SearchInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SearchInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SearchInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: SearchInputComponent, selector: "ngx-search-input", outputs: { search: "search" }, viewQueries: [{ propertyName: "input", first: true, predicate: ["input"], descendants: true, static: true }], ngImport: i0, template: `
    <i class="control-icon ion ion-ios-search"
       (click)="showInput()"></i>
    <input placeholder="Type your search request here..."
           #input
           [class.hidden]="!isInputShown"
           (blur)="hideInput()"
           (input)="onInput($event)">
  `, isInline: true, styles: [":host{display:flex;align-items:center}:host i.control-icon:before{font-size:2.3rem}:host i.control-icon:hover{cursor:pointer}:host input{border:none;outline:none;margin-left:1rem;width:15rem;transition:width .2s ease}:host input.hidden{width:0;margin:0}:host ::ng-deep search-input input{background:transparent}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SearchInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-search-input',
                    styleUrls: ['./search-input.component.scss'],
                    template: `
    <i class="control-icon ion ion-ios-search"
       (click)="showInput()"></i>
    <input placeholder="Type your search request here..."
           #input
           [class.hidden]="!isInputShown"
           (blur)="hideInput()"
           (input)="onInput($event)">
  `,
                }]
        }], propDecorators: { input: [{
                type: ViewChild,
                args: ['input', { static: true }]
            }], search: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9AdGhlbWUvY29tcG9uZW50cy9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWV2RixNQUFNLE9BQU8sb0JBQW9CO0lBYmpDO1FBZ0JZLFdBQU0sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVwRSxpQkFBWSxHQUFHLEtBQUssQ0FBQztLQWN0QjtJQVpDLFNBQVM7UUFDUCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBUTtRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7O2lIQWxCVSxvQkFBb0I7cUdBQXBCLG9CQUFvQixxTUFWckI7Ozs7Ozs7O0dBUVQ7MkZBRVUsb0JBQW9CO2tCQWJoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO29CQUM1QyxRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7aUJBQ0Y7OEJBRXVDLEtBQUs7c0JBQTFDLFNBQVM7dUJBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFFMUIsTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1zZWFyY2gtaW5wdXQnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aSBjbGFzcz1cImNvbnRyb2wtaWNvbiBpb24gaW9uLWlvcy1zZWFyY2hcIlxuICAgICAgIChjbGljayk9XCJzaG93SW5wdXQoKVwiPjwvaT5cbiAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgc2VhcmNoIHJlcXVlc3QgaGVyZS4uLlwiXG4gICAgICAgICAgICNpbnB1dFxuICAgICAgICAgICBbY2xhc3MuaGlkZGVuXT1cIiFpc0lucHV0U2hvd25cIlxuICAgICAgICAgICAoYmx1cik9XCJoaWRlSW5wdXQoKVwiXG4gICAgICAgICAgIChpbnB1dCk9XCJvbklucHV0KCRldmVudClcIj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoSW5wdXRDb21wb25lbnQge1xuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0OiBFbGVtZW50UmVmO1xuXG4gIEBPdXRwdXQoKSBzZWFyY2g6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgaXNJbnB1dFNob3duID0gZmFsc2U7XG5cbiAgc2hvd0lucHV0KCkge1xuICAgIHRoaXMuaXNJbnB1dFNob3duID0gdHJ1ZTtcbiAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGhpZGVJbnB1dCgpIHtcbiAgICB0aGlzLmlzSW5wdXRTaG93biA9IGZhbHNlO1xuICB9XG5cbiAgb25JbnB1dCh2YWw6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoLmVtaXQodmFsKTtcbiAgfVxufVxuIl19