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
RestResourceDeleteComponent.ɵfac = function RestResourceDeleteComponent_Factory(t) { return new (t || RestResourceDeleteComponent)(i0.ɵɵdirectiveInject(i1.NbDialogRef), i0.ɵɵdirectiveInject(i2.RestResourceService), i0.ɵɵdirectiveInject(i3.NotificationService)); };
RestResourceDeleteComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceDeleteComponent, selectors: [["ngx-rest-resource-delete"]], inputs: { datas: "datas", title: "title", listConfig: "listConfig", multiSuppress: "multiSuppress", resourceName: "resourceName" }, decls: 10, vars: 2, consts: [[1, "text-center"], ["nbButton", "", "hero", "", "status", "primary", 2, "margin-right", "10px", 3, "click"], ["nbButton", "", "status", "danger", "size", "medium", "nbSpinnerStatus", "danger", "nbSpinnerMessage", "", 3, "nbSpinner", "click"]], template: function RestResourceDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nb-card", 0);
        i0.ɵɵelementStart(1, "nb-card-header");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "nb-card-body");
        i0.ɵɵtext(4, " Voulez vous vraiment le supprimer? ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "nb-card-footer");
        i0.ɵɵelementStart(6, "button", 1);
        i0.ɵɵlistener("click", function RestResourceDeleteComponent_Template_button_click_6_listener() { return ctx.dismiss(); });
        i0.ɵɵtext(7, " Non ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 2);
        i0.ɵɵlistener("click", function RestResourceDeleteComponent_Template_button_click_8_listener() { return ctx.multiSuppress ? ctx.deleteAll() : ctx.delete(); });
        i0.ɵɵtext(9, " Oui ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("nbSpinner", ctx.isSubmit);
    } }, directives: [i1.NbCardComponent, i1.NbCardHeaderComponent, i1.NbCardBodyComponent, i1.NbCardFooterComponent, i1.NbButtonComponent, i1.NbSpinnerDirective], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{max-width:600px;max-height:500px}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{max-width:600px;max-height:500px}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{max-width:600px;max-height:500px}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{max-width:600px;max-height:500px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceDeleteComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-rest-resource-delete',
                templateUrl: './rest-resource-delete.component.html',
                styleUrls: ['./rest-resource-delete.component.scss'],
            }]
    }], function () { return [{ type: i1.NbDialogRef }, { type: i2.RestResourceService }, { type: i3.NotificationService }]; }, { datas: [{
            type: Input
        }], title: [{
            type: Input
        }], listConfig: [{
            type: Input
        }], multiSuppress: [{
            type: Input
        }], resourceName: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1kZWxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc3NvdXJjZS1kZWxldGUvcmVzdC1yZXNvdXJjZS1kZWxldGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc3NvdXJjZS1kZWxldGUvcmVzdC1yZXNvdXJjZS1kZWxldGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBVXpELE1BQU0sT0FBTywyQkFBMkI7SUFTdEMsWUFDWSxHQUE2QyxFQUMvQyxtQkFBd0MsRUFDeEMsbUJBQXdDO1FBRnRDLFFBQUcsR0FBSCxHQUFHLENBQTBDO1FBQy9DLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQVJ6QyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUd4QyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBTWQsQ0FBQztJQUVKLE9BQU8sQ0FBQyxNQUFlLEtBQUs7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsbUJBQW1CO2FBQ3JCLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2FB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a0JBQXBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0Q29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYkRpYWxvZ1JlZiwgTmJEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1yZXNvdXJjZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXJlc3QtcmVzb3VyY2UtZGVsZXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc3QtcmVzb3VyY2UtZGVsZXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzdC1yZXNvdXJjZS1kZWxldGUuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YXM6IGFueTtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgbGlzdENvbmZpZzogTGlzdENvbmZpZztcbiAgQElucHV0KCkgbXVsdGlTdXBwcmVzczogQm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSByZXNvdXJjZU5hbWU6IHN0cmluZztcblxuICBpc1N1Ym1pdCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByZWY6IE5iRGlhbG9nUmVmPFJlc3RSZXNvdXJjZURlbGV0ZUNvbXBvbmVudD4sXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdFJlc291cmNlOiBSZXN0UmVzb3VyY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZVxuICApIHt9XG5cbiAgZGlzbWlzcyh2YWw6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIHRoaXMucmVmLmNsb3NlKHZhbCk7XG4gIH1cblxuICBkZWxldGUoKSB7XG4gICAgbGV0IG1zZyA9IHt9O1xuICAgIHRoaXMuaXNTdWJtaXQgPSB0cnVlO1xuICAgIHRoaXMuc2VydmljZVJlc3RSZXNvdXJjZVxuICAgICAgLmRlbGV0ZVJlc291cmNlcyh0aGlzLmxpc3RDb25maWcsIHRoaXMuZGF0YXMuaWQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbXNnID0ge1xuICAgICAgICAgICAgbGFiZWw6IGBtc2ctZGVsZXRpbmctc3VjY2Vzc2AsXG4gICAgICAgICAgICByZXNvdXJjZU5hbWU6IHRoaXMucmVzb3VyY2VOYW1lLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5pc1N1Ym1pdCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zdWNjZXNzVG9hc3QobXNnKTtcbiAgICAgICAgICB0aGlzLmRpc21pc3ModHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICBtc2cgPSB7XG4gICAgICAgICAgICBsYWJlbDogYG1zZy1kZWxldGluZy1mYWlsYCxcbiAgICAgICAgICAgIHJlc291cmNlTmFtZTogdGhpcy5yZXNvdXJjZU5hbWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLmlzU3VibWl0ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmRhbmdlclRvYXN0KG1zZyk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cbiAgZGVsZXRlQWxsKCkge1xuICAgIGxldCBtc2cgPSB7fTtcbiAgICB0aGlzLmlzU3VibWl0ID0gdHJ1ZTtcbiAgICBjb25zdCBwcm9tcyA9IFtdO1xuICAgIHRoaXMuZGF0YXMubWFwKGRhdGEgPT5cbiAgICAgIHByb21zLnB1c2godGhpcy5zZXJ2aWNlUmVzdFJlc291cmNlLmRlbGV0ZVJlc291cmNlcyh0aGlzLmxpc3RDb25maWcsIGRhdGEuaWQpLnRvUHJvbWlzZSgpKVxuICAgICk7XG4gIFxuICAgIFByb21pc2UuYWxsKHByb21zKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBtc2cgPSB7XG4gICAgICAgICAgbGFiZWw6IGBtc2ctZGVsZXRpbmctc3VjY2Vzc2AsXG4gICAgICAgICAgcmVzb3VyY2VOYW1lOiB0aGlzLnJlc291cmNlTmFtZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pc1N1Ym1pdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uuc3VjY2Vzc1RvYXN0KG1zZyk7XG4gICAgICAgIHRoaXMuZGlzbWlzcyh0cnVlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBtc2cgPSB7XG4gICAgICAgICAgbGFiZWw6IGBtc2ctZGVsZXRpbmctZmFpbGAsXG4gICAgICAgICAgcmVzb3VyY2VOYW1lOiB0aGlzLnJlc291cmNlTmFtZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pc1N1Ym1pdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZGFuZ2VyVG9hc3QobXNnKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCI8bmItY2FyZCBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gIDxuYi1jYXJkLWhlYWRlcj57eyB0aXRsZSB9fTwvbmItY2FyZC1oZWFkZXI+XG4gIDxuYi1jYXJkLWJvZHk+IFZvdWxleiB2b3VzIHZyYWltZW50IGxlIHN1cHByaW1lcj8gPC9uYi1jYXJkLWJvZHk+XG4gIDxuYi1jYXJkLWZvb3Rlcj5cbiAgICA8YnV0dG9uXG4gICAgICBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTBweFwiXG4gICAgICBuYkJ1dHRvblxuICAgICAgaGVyb1xuICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAoY2xpY2spPVwiZGlzbWlzcygpXCJcbiAgICA+XG4gICAgICBOb25cbiAgICA8L2J1dHRvbj5cblxuICAgIDxidXR0b25cbiAgICAgIG5iQnV0dG9uXG4gICAgICBzdGF0dXM9XCJkYW5nZXJcIlxuICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgICAoY2xpY2spPVwibXVsdGlTdXBwcmVzcyA/IGRlbGV0ZUFsbCgpIDogZGVsZXRlKClcIlxuICAgICAgW25iU3Bpbm5lcl09XCJpc1N1Ym1pdFwiXG4gICAgICBuYlNwaW5uZXJTdGF0dXM9XCJkYW5nZXJcIlxuICAgICAgbmJTcGlubmVyTWVzc2FnZT1cIlwiXG4gICAgPlxuICAgICAgT3VpXG4gICAgPC9idXR0b24+XG4gIDwvbmItY2FyZC1mb290ZXI+XG48L25iLWNhcmQ+XG4iXX0=