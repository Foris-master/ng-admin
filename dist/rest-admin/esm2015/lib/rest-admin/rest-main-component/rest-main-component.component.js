import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { MenuFilterPipe } from './menu-filter.pipe';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../rest-resource/service/rest-admin-config.service";
import * as i3 from "./../rest-resource/service/rest-lang.service";
import * as i4 from "../../@theme/layouts/one-column/one-column.layout";
import * as i5 from "@nebular/theme";
import * as i6 from "@angular/forms";
import * as i7 from "@angular/common";
import * as i8 from "@ngx-translate/core";
import * as i9 from "./menu-filter.pipe";
export class RestMainComponentComponent {
    constructor(activatedRoute, serviceConfig, restLangService, router // private permissionsService: NgxPermissionsService
    ) {
        this.activatedRoute = activatedRoute;
        this.serviceConfig = serviceConfig;
        this.restLangService = restLangService;
        this.router = router;
        this.searchText = '';
        this.menuItems = [...this.serviceConfig.generateMenus()];
        this.title$ = this.activatedRoute.data.pipe(map((data) => data.title));
    }
    ngOnInit() {
        this.restLangService.setInitialAppLanguage();
        // this.permissionsService.loadPermissions([]);
    }
    transformTitle(title) {
        return title.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, (letter) => letter.toUpperCase());
    }
    onChange(event) {
        this.searchText = event;
    }
}
RestMainComponentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestMainComponentComponent, deps: [{ token: i1.ActivatedRoute }, { token: i2.RestAdminConfigService }, { token: i3.RestLangService }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
RestMainComponentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestMainComponentComponent, selector: "ngx-rest-main-component", providers: [MenuFilterPipe], ngImport: i0, template: `
    <ngx-one-column-layout>
      <input
        type="text"
        [(ngModel)]="searchText"
        (ngModelChange)="onChange($event)"
        [placeholder]="'rest-list.searchPlaceholder' | translate"
        nbInput
        fullWidth
        nbPrefixIcon="search-outline"
      />

      <nb-menu tag="menu" [items]="menuItems | menuFilter: searchText">
        <ng-container *ngFor="let item of menuItems">
          <ng-container *ngIf="!item.children; else subMenu">
            <nb-menu-item [routerLink]="item.link" routerLinkActive="active">
              <ng-container
              >
                <nb-icon [icon]="item.icon"></nb-icon>
                {{ transformTitle(item.title) }}
              </ng-container>
            </nb-menu-item>
          </ng-container>
          <ng-template #subMenu>
            <nb-menu-item [routerLink]="item.link" routerLinkActive="active">
              <ng-container
              >
                <nb-icon [icon]="item.icon"></nb-icon>
                {{ transformTitle(item.title) }}
              </ng-container>
            </nb-menu-item>
            <ng-template let-childItem ngFor [ngForOf]="item.children">
              <nb-menu-item [routerLink]="childItem.link" routerLinkActive="active">
                <ng-container
                >
                  <nb-icon [icon]="item.icon"></nb-icon>
                  {{ transformTitle(childItem.title) }}
                </ng-container>
              </nb-menu-item>
            </ng-template>
          </ng-template>
        </ng-container>
      </nb-menu>

      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `, isInline: true, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}.nb-theme-dark :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}.nb-theme-cosmic :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}.nb-theme-corporate :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}\n"], components: [{ type: i4.OneColumnLayoutComponent, selector: "ngx-one-column-layout" }, { type: i5.NbMenuComponent, selector: "nb-menu", inputs: ["autoCollapse", "tag", "items"] }, { type: i5.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }], directives: [{ type: i5.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "routerLinkActive"], exportAs: ["routerLinkActive"] }, { type: i1.RouterLink, selector: ":not(a):not(area)[routerLink]", inputs: ["routerLink", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }], pipes: { "translate": i8.TranslatePipe, "menuFilter": i9.MenuFilterPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestMainComponentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-rest-main-component',
                    styleUrls: ['./rest-main-component.component.scss'],
                    providers: [MenuFilterPipe],
                    template: `
    <ngx-one-column-layout>
      <input
        type="text"
        [(ngModel)]="searchText"
        (ngModelChange)="onChange($event)"
        [placeholder]="'rest-list.searchPlaceholder' | translate"
        nbInput
        fullWidth
        nbPrefixIcon="search-outline"
      />

      <nb-menu tag="menu" [items]="menuItems | menuFilter: searchText">
        <ng-container *ngFor="let item of menuItems">
          <ng-container *ngIf="!item.children; else subMenu">
            <nb-menu-item [routerLink]="item.link" routerLinkActive="active">
              <ng-container
              >
                <nb-icon [icon]="item.icon"></nb-icon>
                {{ transformTitle(item.title) }}
              </ng-container>
            </nb-menu-item>
          </ng-container>
          <ng-template #subMenu>
            <nb-menu-item [routerLink]="item.link" routerLinkActive="active">
              <ng-container
              >
                <nb-icon [icon]="item.icon"></nb-icon>
                {{ transformTitle(item.title) }}
              </ng-container>
            </nb-menu-item>
            <ng-template let-childItem ngFor [ngForOf]="item.children">
              <nb-menu-item [routerLink]="childItem.link" routerLinkActive="active">
                <ng-container
                >
                  <nb-icon [icon]="item.icon"></nb-icon>
                  {{ transformTitle(childItem.title) }}
                </ng-container>
              </nb-menu-item>
            </ng-template>
          </ng-template>
        </ng-container>
      </nb-menu>

      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i2.RestAdminConfigService }, { type: i3.RestLangService }, { type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1tYWluLWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LW1haW4tY29tcG9uZW50L3Jlc3QtbWFpbi1jb21wb25lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFzRHBELE1BQU0sT0FBTywwQkFBMEI7SUFJckMsWUFDVSxjQUE4QixFQUM5QixhQUFxQyxFQUNyQyxlQUFnQyxFQUNoQyxNQUFjLENBQUMsb0RBQW9EOztRQUhuRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQXdCO1FBQ3JDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUHhCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsY0FBUyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFRbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QywrQ0FBK0M7SUFDakQsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVU7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7dUhBeEJVLDBCQUEwQjsyR0FBMUIsMEJBQTBCLGtEQWpEMUIsQ0FBQyxjQUFjLENBQUMsMEJBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOENUOzJGQUVVLDBCQUEwQjtrQkFwRHRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7b0JBQ25ELFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOENUO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmVzdExhbmdTZXJ2aWNlIH0gZnJvbSAnLi8uLi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1sYW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1lbnVGaWx0ZXJQaXBlIH0gZnJvbSAnLi9tZW51LWZpbHRlci5waXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXJlc3QtbWFpbi1jb21wb25lbnQnLFxuICBzdHlsZVVybHM6IFsnLi9yZXN0LW1haW4tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW01lbnVGaWx0ZXJQaXBlXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmd4LW9uZS1jb2x1bW4tbGF5b3V0PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJzZWFyY2hUZXh0XCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCIncmVzdC1saXN0LnNlYXJjaFBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgIG5iSW5wdXRcbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIG5iUHJlZml4SWNvbj1cInNlYXJjaC1vdXRsaW5lXCJcbiAgICAgIC8+XG5cbiAgICAgIDxuYi1tZW51IHRhZz1cIm1lbnVcIiBbaXRlbXNdPVwibWVudUl0ZW1zIHwgbWVudUZpbHRlcjogc2VhcmNoVGV4dFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIG1lbnVJdGVtc1wiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS5jaGlsZHJlbjsgZWxzZSBzdWJNZW51XCI+XG4gICAgICAgICAgICA8bmItbWVudS1pdGVtIFtyb3V0ZXJMaW5rXT1cIml0ZW0ubGlua1wiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5iLWljb24gW2ljb25dPVwiaXRlbS5pY29uXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgIHt7IHRyYW5zZm9ybVRpdGxlKGl0ZW0udGl0bGUpIH19XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uYi1tZW51LWl0ZW0+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNzdWJNZW51PlxuICAgICAgICAgICAgPG5iLW1lbnUtaXRlbSBbcm91dGVyTGlua109XCJpdGVtLmxpbmtcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIml0ZW0uaWNvblwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICB7eyB0cmFuc2Zvcm1UaXRsZShpdGVtLnRpdGxlKSB9fVxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmItbWVudS1pdGVtPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jaGlsZEl0ZW0gbmdGb3IgW25nRm9yT2ZdPVwiaXRlbS5jaGlsZHJlblwiPlxuICAgICAgICAgICAgICA8bmItbWVudS1pdGVtIFtyb3V0ZXJMaW5rXT1cImNoaWxkSXRlbS5saW5rXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bmItaWNvbiBbaWNvbl09XCJpdGVtLmljb25cIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICB7eyB0cmFuc2Zvcm1UaXRsZShjaGlsZEl0ZW0udGl0bGUpIH19XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvbmItbWVudS1pdGVtPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmItbWVudT5cblxuICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIDwvbmd4LW9uZS1jb2x1bW4tbGF5b3V0PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0TWFpbkNvbXBvbmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHNlYXJjaFRleHQgPSAnJztcbiAgbWVudUl0ZW1zID0gWy4uLnRoaXMuc2VydmljZUNvbmZpZy5nZW5lcmF0ZU1lbnVzKCldO1xuICB0aXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlQ29uZmlnOiBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVzdExhbmdTZXJ2aWNlOiBSZXN0TGFuZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciAvLyBwcml2YXRlIHBlcm1pc3Npb25zU2VydmljZTogTmd4UGVybWlzc2lvbnNTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMudGl0bGUkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnBpcGUobWFwKChkYXRhKSA9PiBkYXRhLnRpdGxlKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc3RMYW5nU2VydmljZS5zZXRJbml0aWFsQXBwTGFuZ3VhZ2UoKTtcbiAgICAvLyB0aGlzLnBlcm1pc3Npb25zU2VydmljZS5sb2FkUGVybWlzc2lvbnMoW10pO1xuICB9XG5cbiAgdHJhbnNmb3JtVGl0bGUodGl0bGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRpdGxlLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMSAkMicpLnJlcGxhY2UoL1xcYlxcdy9nLCAobGV0dGVyKSA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSk7XG4gIH1cblxuICBvbkNoYW5nZShldmVudDogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gZXZlbnQ7XG4gIH1cbn1cbiJdfQ==