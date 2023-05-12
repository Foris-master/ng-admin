import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["input"];
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
SearchInputComponent.ɵfac = function SearchInputComponent_Factory(t) { return new (t || SearchInputComponent)(); };
SearchInputComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchInputComponent, selectors: [["ngx-search-input"]], viewQuery: function SearchInputComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, outputs: { search: "search" }, decls: 3, vars: 2, consts: [[1, "control-icon", "ion", "ion-ios-search", 3, "click"], ["placeholder", "Type your search request here...", 3, "blur", "input"], ["input", ""]], template: function SearchInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "i", 0);
        i0.ɵɵlistener("click", function SearchInputComponent_Template_i_click_0_listener() { return ctx.showInput(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "input", 1, 2);
        i0.ɵɵlistener("blur", function SearchInputComponent_Template_input_blur_1_listener() { return ctx.hideInput(); })("input", function SearchInputComponent_Template_input_input_1_listener($event) { return ctx.onInput($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("hidden", !ctx.isInputShown);
    } }, styles: ["[_nghost-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   i.control-icon[_ngcontent-%COMP%]:before{font-size:2.3rem}[_nghost-%COMP%]   i.control-icon[_ngcontent-%COMP%]:hover{cursor:pointer}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{border:none;outline:none;margin-left:1rem;width:15rem;transition:width .2s ease}[_nghost-%COMP%]   input.hidden[_ngcontent-%COMP%]{width:0;margin:0}[_nghost-%COMP%]     search-input input{background:transparent}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchInputComponent, [{
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
    }], null, { input: [{
            type: ViewChild,
            args: ['input', { static: true }]
        }], search: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9AdGhlbWUvY29tcG9uZW50cy9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFldkYsTUFBTSxPQUFPLG9CQUFvQjtJQWJqQztRQWdCWSxXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFFcEUsaUJBQVksR0FBRyxLQUFLLENBQUM7S0FjdEI7SUFaQyxTQUFTO1FBQ1AsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQVE7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDOzt3RkFsQlUsb0JBQW9CO3VFQUFwQixvQkFBb0I7Ozs7OztRQVQ3Qiw0QkFDeUI7UUFBdEIsNEZBQVMsZUFBVyxJQUFDO1FBQUMsaUJBQUk7UUFDN0IsbUNBSWlDO1FBRDFCLDhGQUFRLGVBQVcsSUFBQyx5RkFDWCxtQkFBZSxJQURKO1FBSDNCLGlCQUlpQzs7UUFGMUIsZUFBOEI7UUFBOUIsMkNBQThCOzt1RkFLNUIsb0JBQW9CO2NBYmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztnQkFDNUMsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO2FBQ0Y7Z0JBRXVDLEtBQUs7a0JBQTFDLFNBQVM7bUJBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUUxQixNQUFNO2tCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXNlYXJjaC1pbnB1dCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpIGNsYXNzPVwiY29udHJvbC1pY29uIGlvbiBpb24taW9zLXNlYXJjaFwiXG4gICAgICAgKGNsaWNrKT1cInNob3dJbnB1dCgpXCI+PC9pPlxuICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBzZWFyY2ggcmVxdWVzdCBoZXJlLi4uXCJcbiAgICAgICAgICAgI2lucHV0XG4gICAgICAgICAgIFtjbGFzcy5oaWRkZW5dPVwiIWlzSW5wdXRTaG93blwiXG4gICAgICAgICAgIChibHVyKT1cImhpZGVJbnB1dCgpXCJcbiAgICAgICAgICAgKGlucHV0KT1cIm9uSW5wdXQoJGV2ZW50KVwiPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hJbnB1dENvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBpc0lucHV0U2hvd24gPSBmYWxzZTtcblxuICBzaG93SW5wdXQoKSB7XG4gICAgdGhpcy5pc0lucHV0U2hvd24gPSB0cnVlO1xuICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgaGlkZUlucHV0KCkge1xuICAgIHRoaXMuaXNJbnB1dFNob3duID0gZmFsc2U7XG4gIH1cblxuICBvbklucHV0KHZhbDogYW55KSB7XG4gICAgdGhpcy5zZWFyY2guZW1pdCh2YWwpO1xuICB9XG59XG4iXX0=