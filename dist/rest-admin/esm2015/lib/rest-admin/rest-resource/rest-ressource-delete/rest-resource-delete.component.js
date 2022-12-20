import { Component, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "../service/rest-resource.service";
export class RestResourceDeleteComponent {
    constructor(ref, serviceRestResource) {
        this.ref = ref;
        this.serviceRestResource = serviceRestResource;
        this.isSubmit = false;
    }
    dismiss(val = false) {
        this.ref.close(val);
    }
    delete() {
        this.isSubmit = true;
        this.serviceRestResource
            .deleteResources(this.listConfig, this.datas.id)
            .subscribe(() => {
            this.isSubmit = false;
            this.dismiss(true);
        }, (err) => {
            this.isSubmit = false;
            console.log(err);
        });
    }
}
RestResourceDeleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceDeleteComponent, deps: [{ token: i1.NbDialogRef }, { token: i2.RestResourceService }], target: i0.ɵɵFactoryTarget.Component });
RestResourceDeleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestResourceDeleteComponent, selector: "ngx-rest-resource-delete", inputs: { datas: "datas", title: "title", listConfig: "listConfig" }, ngImport: i0, template: "<nb-card>\n  <nb-card-header>{{ title }}</nb-card-header>\n  <nb-card-body> Voulez vous vraiment le supprimer? </nb-card-body>\n  <nb-card-footer>\n    <button\n      style=\"margin-right: 10px\"\n      nbButton\n      hero\n      status=\"primary\"\n      (click)=\"dismiss()\"\n    >\n      Non\n    </button>\n\n    <button\n      nbButton\n      status=\"danger\"\n      size=\"medium\"\n      (click)=\"delete()\"\n      [nbSpinner]=\"isSubmit\"\n      nbSpinnerStatus=\"danger\"\n      nbSpinnerMessage=\"\"\n    >\n      Oui\n    </button>\n  </nb-card-footer>\n</nb-card>\n", styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host nb-card{max-width:600px;max-height:500px}.nb-theme-dark :host nb-card{max-width:600px;max-height:500px}.nb-theme-cosmic :host nb-card{max-width:600px;max-height:500px}.nb-theme-corporate :host nb-card{max-width:600px;max-height:500px}\n"], components: [{ type: i1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i1.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceDeleteComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ngx-rest-resource-delete",
                    templateUrl: "./rest-resource-delete.component.html",
                    styleUrls: ["./rest-resource-delete.component.scss"],
                }]
        }], ctorParameters: function () { return [{ type: i1.NbDialogRef }, { type: i2.RestResourceService }]; }, propDecorators: { datas: [{
                type: Input
            }], title: [{
                type: Input
            }], listConfig: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1kZWxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc3NvdXJjZS1kZWxldGUvcmVzdC1yZXNvdXJjZS1kZWxldGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc3NvdXJjZS1kZWxldGUvcmVzdC1yZXNvdXJjZS1kZWxldGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTekQsTUFBTSxPQUFPLDJCQUEyQjtJQU90QyxZQUNZLEdBQTZDLEVBQy9DLG1CQUF3QztRQUR0QyxRQUFHLEdBQUgsR0FBRyxDQUEwQztRQUMvQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBSmxELGFBQVEsR0FBRyxLQUFLLENBQUM7SUFLZCxDQUFDO0lBRUosT0FBTyxDQUFDLE1BQWUsS0FBSztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxtQkFBbUI7YUFDckIsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7YUFDL0MsU0FBUyxDQUNSLEdBQUcsRUFBRTtZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUNELENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQzs7d0hBOUJVLDJCQUEyQjs0R0FBM0IsMkJBQTJCLHNJQ1Z4Qyx1a0JBMkJBOzJGRGpCYSwyQkFBMkI7a0JBTHZDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsV0FBVyxFQUFFLHVDQUF1QztvQkFDcEQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7aUJBQ3JEO29JQUVVLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RDb25maWcgfSBmcm9tIFwiLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWxcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYkRpYWxvZ1JlZiwgTmJEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIkBuZWJ1bGFyL3RoZW1lXCI7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2UvcmVzdC1yZXNvdXJjZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJuZ3gtcmVzdC1yZXNvdXJjZS1kZWxldGVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9yZXN0LXJlc291cmNlLWRlbGV0ZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcmVzdC1yZXNvdXJjZS1kZWxldGUuY29tcG9uZW50LnNjc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RSZXNvdXJjZURlbGV0ZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGFzOiBhbnk7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxpc3RDb25maWc6IExpc3RDb25maWc7XG5cbiAgaXNTdWJtaXQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcmVmOiBOYkRpYWxvZ1JlZjxSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQ+LFxuICAgIHByaXZhdGUgc2VydmljZVJlc3RSZXNvdXJjZTogUmVzdFJlc291cmNlU2VydmljZVxuICApIHt9XG5cbiAgZGlzbWlzcyh2YWw6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIHRoaXMucmVmLmNsb3NlKHZhbCk7XG4gIH1cblxuICBkZWxldGUoKSB7XG4gICAgdGhpcy5pc1N1Ym1pdCA9IHRydWU7XG4gICAgdGhpcy5zZXJ2aWNlUmVzdFJlc291cmNlXG4gICAgICAuZGVsZXRlUmVzb3VyY2VzKHRoaXMubGlzdENvbmZpZywgdGhpcy5kYXRhcy5pZClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzU3VibWl0ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kaXNtaXNzKHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc1N1Ym1pdCA9IGZhbHNlO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cbn1cbiIsIjxuYi1jYXJkPlxuICA8bmItY2FyZC1oZWFkZXI+e3sgdGl0bGUgfX08L25iLWNhcmQtaGVhZGVyPlxuICA8bmItY2FyZC1ib2R5PiBWb3VsZXogdm91cyB2cmFpbWVudCBsZSBzdXBwcmltZXI/IDwvbmItY2FyZC1ib2R5PlxuICA8bmItY2FyZC1mb290ZXI+XG4gICAgPGJ1dHRvblxuICAgICAgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHhcIlxuICAgICAgbmJCdXR0b25cbiAgICAgIGhlcm9cbiAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgKGNsaWNrKT1cImRpc21pc3MoKVwiXG4gICAgPlxuICAgICAgTm9uXG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uXG4gICAgICBuYkJ1dHRvblxuICAgICAgc3RhdHVzPVwiZGFuZ2VyXCJcbiAgICAgIHNpemU9XCJtZWRpdW1cIlxuICAgICAgKGNsaWNrKT1cImRlbGV0ZSgpXCJcbiAgICAgIFtuYlNwaW5uZXJdPVwiaXNTdWJtaXRcIlxuICAgICAgbmJTcGlubmVyU3RhdHVzPVwiZGFuZ2VyXCJcbiAgICAgIG5iU3Bpbm5lck1lc3NhZ2U9XCJcIlxuICAgID5cbiAgICAgIE91aVxuICAgIDwvYnV0dG9uPlxuICA8L25iLWNhcmQtZm9vdGVyPlxuPC9uYi1jYXJkPlxuIl19