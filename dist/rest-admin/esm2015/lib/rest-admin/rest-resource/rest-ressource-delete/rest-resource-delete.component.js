import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "../service/rest-resource.service";
import * as i3 from "../service/notification.service";
export class RestResourceDeleteComponent {
    constructor(ref, serviceRestResource, notificationService) {
        this.ref = ref;
        this.serviceRestResource = serviceRestResource;
        this.notificationService = notificationService;
        this.multiSuppress = false;
        this.isSubmit = false;
    }
    dismiss(val = false) {
        this.ref.close(val);
    }
    delete() {
        let msg = {};
        this.isSubmit = true;
        this.serviceRestResource
            .deleteResources(this.listConfig, this.datas.id)
            .subscribe(() => {
            msg = {
                label: `msg-deleting-success`,
                resourceName: this.resourceName,
            };
            this.isSubmit = false;
            this.notificationService.successToast(msg);
            this.dismiss(true);
        }, (err) => {
            msg = {
                label: `msg-deleting-fail`,
                resourceName: this.resourceName,
            };
            this.isSubmit = false;
            this.notificationService.dangerToast(msg);
        });
    }
    deleteAll() {
        let msg = {};
        this.isSubmit = true;
        const proms = [];
        this.datas.map(data => proms.push(this.serviceRestResource.deleteResources(this.listConfig, data.id).toPromise()));
        Promise.all(proms)
            .then(() => {
            msg = {
                label: `msg-deleting-success`,
                resourceName: this.resourceName,
            };
            this.isSubmit = false;
            this.notificationService.successToast(msg);
            this.dismiss(true);
        })
            .catch(() => {
            msg = {
                label: `msg-deleting-fail`,
                resourceName: this.resourceName,
            };
            this.isSubmit = false;
            this.notificationService.dangerToast(msg);
        });
    }
}
RestResourceDeleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceDeleteComponent, deps: [{ token: i1.NbDialogRef }, { token: i2.RestResourceService }, { token: i3.NotificationService }], target: i0.ɵɵFactoryTarget.Component });
RestResourceDeleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestResourceDeleteComponent, selector: "ngx-rest-resource-delete", inputs: { datas: "datas", title: "title", listConfig: "listConfig", multiSuppress: "multiSuppress", resourceName: "resourceName" }, ngImport: i0, template: "<nb-card class=\"text-center\">\n  <nb-card-header>{{ title }}</nb-card-header>\n  <nb-card-body> Voulez vous vraiment le supprimer? </nb-card-body>\n  <nb-card-footer>\n    <button\n      style=\"margin-right: 10px\"\n      nbButton\n      hero\n      status=\"primary\"\n      (click)=\"dismiss()\"\n    >\n      Non\n    </button>\n\n    <button\n      nbButton\n      status=\"danger\"\n      size=\"medium\"\n      (click)=\"multiSuppress ? deleteAll() : delete()\"\n      [nbSpinner]=\"isSubmit\"\n      nbSpinnerStatus=\"danger\"\n      nbSpinnerMessage=\"\"\n    >\n      Oui\n    </button>\n  </nb-card-footer>\n</nb-card>\n", styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host nb-card{max-width:600px;max-height:500px}.nb-theme-dark :host nb-card{max-width:600px;max-height:500px}.nb-theme-cosmic :host nb-card{max-width:600px;max-height:500px}.nb-theme-corporate :host nb-card{max-width:600px;max-height:500px}\n"], components: [{ type: i1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i1.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceDeleteComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-rest-resource-delete',
                    templateUrl: './rest-resource-delete.component.html',
                    styleUrls: ['./rest-resource-delete.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1.NbDialogRef }, { type: i2.RestResourceService }, { type: i3.NotificationService }]; }, propDecorators: { datas: [{
                type: Input
            }], title: [{
                type: Input
            }], listConfig: [{
                type: Input
            }], multiSuppress: [{
                type: Input
            }], resourceName: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1kZWxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc3NvdXJjZS1kZWxldGUvcmVzdC1yZXNvdXJjZS1kZWxldGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc3NvdXJjZS1kZWxldGUvcmVzdC1yZXNvdXJjZS1kZWxldGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBVXpELE1BQU0sT0FBTywyQkFBMkI7SUFTdEMsWUFDWSxHQUE2QyxFQUMvQyxtQkFBd0MsRUFDeEMsbUJBQXdDO1FBRnRDLFFBQUcsR0FBSCxHQUFHLENBQTBDO1FBQy9DLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQVJ6QyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUd4QyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBTWQsQ0FBQztJQUVKLE9BQU8sQ0FBQyxNQUFlLEtBQUs7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsbUJBQW1CO2FBQ3JCLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2FBQy9DLFNBQVMsQ0FDUixHQUFHLEVBQUU7WUFDSCxHQUFHLEdBQUc7Z0JBQ0osS0FBSyxFQUFFLHNCQUFzQjtnQkFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO2FBQ2hDLENBQUM7WUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUNELENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDTixHQUFHLEdBQUc7Z0JBQ0osS0FBSyxFQUFFLG1CQUFtQjtnQkFDMUIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO2FBQ2hDLENBQUM7WUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQUNELFNBQVM7UUFDUCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQzNGLENBQUM7UUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQzthQUNmLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVCxHQUFHLEdBQUc7Z0JBQ0osS0FBSyxFQUFFLHNCQUFzQjtnQkFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO2FBQ2hDLENBQUM7WUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNWLEdBQUcsR0FBRztnQkFDSixLQUFLLEVBQUUsbUJBQW1CO2dCQUMxQixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7YUFDaEMsQ0FBQztZQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzt3SEF0RVUsMkJBQTJCOzRHQUEzQiwyQkFBMkIsb01DWHhDLDJuQkEyQkE7MkZEaEJhLDJCQUEyQjtrQkFMdkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxXQUFXLEVBQUUsdUNBQXVDO29CQUNwRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztpQkFDckQ7c0tBRVUsS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvcmVzdC1yZXNvdXJjZS5tb2RlbCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5iRGlhbG9nUmVmLCBOYkRpYWxvZ1NlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2Uvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtcmVzdC1yZXNvdXJjZS1kZWxldGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzdC1yZXNvdXJjZS1kZWxldGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXN0LXJlc291cmNlLWRlbGV0ZS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhczogYW55O1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBsaXN0Q29uZmlnOiBMaXN0Q29uZmlnO1xuICBASW5wdXQoKSBtdWx0aVN1cHByZXNzOiBCb29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJlc291cmNlTmFtZTogc3RyaW5nO1xuXG4gIGlzU3VibWl0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJlZjogTmJEaWFsb2dSZWY8UmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50PixcbiAgICBwcml2YXRlIHNlcnZpY2VSZXN0UmVzb3VyY2U6IFJlc3RSZXNvdXJjZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBkaXNtaXNzKHZhbDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgdGhpcy5yZWYuY2xvc2UodmFsKTtcbiAgfVxuXG4gIGRlbGV0ZSgpIHtcbiAgICBsZXQgbXNnID0ge307XG4gICAgdGhpcy5pc1N1Ym1pdCA9IHRydWU7XG4gICAgdGhpcy5zZXJ2aWNlUmVzdFJlc291cmNlXG4gICAgICAuZGVsZXRlUmVzb3VyY2VzKHRoaXMubGlzdENvbmZpZywgdGhpcy5kYXRhcy5pZClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBtc2cgPSB7XG4gICAgICAgICAgICBsYWJlbDogYG1zZy1kZWxldGluZy1zdWNjZXNzYCxcbiAgICAgICAgICAgIHJlc291cmNlTmFtZTogdGhpcy5yZXNvdXJjZU5hbWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLmlzU3VibWl0ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLnN1Y2Nlc3NUb2FzdChtc2cpO1xuICAgICAgICAgIHRoaXMuZGlzbWlzcyh0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgIG1zZyA9IHtcbiAgICAgICAgICAgIGxhYmVsOiBgbXNnLWRlbGV0aW5nLWZhaWxgLFxuICAgICAgICAgICAgcmVzb3VyY2VOYW1lOiB0aGlzLnJlc291cmNlTmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuaXNTdWJtaXQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZGFuZ2VyVG9hc3QobXNnKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuICBkZWxldGVBbGwoKSB7XG4gICAgbGV0IG1zZyA9IHt9O1xuICAgIHRoaXMuaXNTdWJtaXQgPSB0cnVlO1xuICAgIGNvbnN0IHByb21zID0gW107XG4gICAgdGhpcy5kYXRhcy5tYXAoZGF0YSA9PlxuICAgICAgcHJvbXMucHVzaCh0aGlzLnNlcnZpY2VSZXN0UmVzb3VyY2UuZGVsZXRlUmVzb3VyY2VzKHRoaXMubGlzdENvbmZpZywgZGF0YS5pZCkudG9Qcm9taXNlKCkpXG4gICAgKTtcbiAgXG4gICAgUHJvbWlzZS5hbGwocHJvbXMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIG1zZyA9IHtcbiAgICAgICAgICBsYWJlbDogYG1zZy1kZWxldGluZy1zdWNjZXNzYCxcbiAgICAgICAgICByZXNvdXJjZU5hbWU6IHRoaXMucmVzb3VyY2VOYW1lLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlzU3VibWl0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zdWNjZXNzVG9hc3QobXNnKTtcbiAgICAgICAgdGhpcy5kaXNtaXNzKHRydWUpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIG1zZyA9IHtcbiAgICAgICAgICBsYWJlbDogYG1zZy1kZWxldGluZy1mYWlsYCxcbiAgICAgICAgICByZXNvdXJjZU5hbWU6IHRoaXMucmVzb3VyY2VOYW1lLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlzU3VibWl0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5kYW5nZXJUb2FzdChtc2cpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIjxuYi1jYXJkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgPG5iLWNhcmQtaGVhZGVyPnt7IHRpdGxlIH19PC9uYi1jYXJkLWhlYWRlcj5cbiAgPG5iLWNhcmQtYm9keT4gVm91bGV6IHZvdXMgdnJhaW1lbnQgbGUgc3VwcHJpbWVyPyA8L25iLWNhcmQtYm9keT5cbiAgPG5iLWNhcmQtZm9vdGVyPlxuICAgIDxidXR0b25cbiAgICAgIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4XCJcbiAgICAgIG5iQnV0dG9uXG4gICAgICBoZXJvXG4gICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgIChjbGljayk9XCJkaXNtaXNzKClcIlxuICAgID5cbiAgICAgIE5vblxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGJ1dHRvblxuICAgICAgbmJCdXR0b25cbiAgICAgIHN0YXR1cz1cImRhbmdlclwiXG4gICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgIChjbGljayk9XCJtdWx0aVN1cHByZXNzID8gZGVsZXRlQWxsKCkgOiBkZWxldGUoKVwiXG4gICAgICBbbmJTcGlubmVyXT1cImlzU3VibWl0XCJcbiAgICAgIG5iU3Bpbm5lclN0YXR1cz1cImRhbmdlclwiXG4gICAgICBuYlNwaW5uZXJNZXNzYWdlPVwiXCJcbiAgICA+XG4gICAgICBPdWlcbiAgICA8L2J1dHRvbj5cbiAgPC9uYi1jYXJkLWZvb3Rlcj5cbjwvbmItY2FyZD5cbiJdfQ==