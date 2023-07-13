import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./rest-admin-config.service";
export const FILTER_OPERATORS = [
    {
        name: `filter-compare.equality`,
        value: `=`,
    },
    {
        name: `filter-compare.superiority`,
        value: `get`,
    },
    {
        name: `filter-compare.inferiority`,
        value: `let`,
    },
    // {
    //   name: `filter-compare.supOrEgal`,
    //   value: `gt`,
    // },
    // {
    //   name: `filter-compare.infOrEgal`,
    //   value: `lt`,
    // },
    {
        name: `filter-compare.include`,
        value: `lk`,
    },
];
export class RestResourceService {
    constructor(http, serviceRestConfig) {
        this.http = http;
        this.serviceRestConfig = serviceRestConfig;
        this.getResources = (config) => {
            return this.http.get(`${this.serviceRestConfig.restBaseUrl}/${config.api}`, {
                params: config.queryParams,
            });
        };
        this.getOneResource = (config, id) => {
            return this.http.get(`${this.serviceRestConfig.restBaseUrl}/${config.api}/${id}`, {
                params: config.queryParams,
            });
        };
        this.addResources = (addConfig, datas) => {
            return this.http.post(`${this.serviceRestConfig.restBaseUrl}/${addConfig.api}`, datas, { headers: this.getCustomHeaders(addConfig.header) });
        };
        this.editResources = (editConfig, hasFile, datas, id) => {
            if (hasFile)
                return this.http.post(`${this.serviceRestConfig.restBaseUrl}/${editConfig.api}/${id}`, datas, { headers: this.getCustomHeaders(editConfig.header) });
            return this.http.put(`${this.serviceRestConfig.restBaseUrl}/${editConfig.api}/${id}`, datas, { headers: this.getCustomHeaders(editConfig.header) });
        };
        this.deleteResources = (listConfig, id) => this.http.delete(`${this.serviceRestConfig.restBaseUrl}/${listConfig.api}/${id}`);
    }
    getCustomHeaders(headerElement) {
        let headers = new HttpHeaders(); // create header object
        if (headerElement !== undefined) {
            Object.keys(headerElement).map((key) => {
                headers = headers.append(key, headerElement[key]); // add another header
            });
        }
        return headers;
    }
}
RestResourceService.ɵfac = function RestResourceService_Factory(t) { return new (t || RestResourceService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.RestAdminConfigService)); };
RestResourceService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RestResourceService, factory: RestResourceService.ɵfac, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceService, [{
        type: Injectable,
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.RestAdminConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtcmVzb3VyY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWMsV0FBVyxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU8zQyxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztJQUM5QjtRQUNFLElBQUksRUFBRSx5QkFBeUI7UUFDL0IsS0FBSyxFQUFFLEdBQUc7S0FDWDtJQUNEO1FBQ0UsSUFBSSxFQUFFLDRCQUE0QjtRQUNsQyxLQUFLLEVBQUUsS0FBSztLQUNiO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsNEJBQTRCO1FBQ2xDLEtBQUssRUFBRSxLQUFLO0tBQ2I7SUFDRCxJQUFJO0lBQ0osc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQixLQUFLO0lBQ0wsSUFBSTtJQUNKLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsS0FBSztJQUNMO1FBQ0UsSUFBSSxFQUFFLHdCQUF3QjtRQUM5QixLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YsQ0FBQztBQUtGLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFDVSxJQUFnQixFQUNoQixpQkFBeUM7UUFEekMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXdCO1FBR25ELGlCQUFZLEdBQUcsQ0FBQyxNQUF5QyxFQUFFLEVBQUU7WUFDM0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFDckQ7Z0JBQ0UsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXO2FBQzNCLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQztRQUVGLG1CQUFjLEdBQUcsQ0FBQyxNQUF5QyxFQUFFLEVBQVUsRUFBRSxFQUFFO1lBQ3pFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxFQUMzRDtnQkFDRSxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVc7YUFDM0IsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBRUYsaUJBQVksR0FBRyxDQUFDLFNBQW9CLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFDeEQsS0FBSyxFQUNMLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDckQsQ0FBQztRQUNKLENBQUMsQ0FBQTtRQUVELGtCQUFhLEdBQUcsQ0FBQyxVQUFzQixFQUFFLE9BQWdCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFO1lBQ3RFLElBQUksT0FBTztnQkFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLElBQUksVUFBVSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsRUFDL0QsS0FBSyxFQUNMLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDdEQsQ0FBQztZQUVKLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsSUFBSSxVQUFVLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxFQUMvRCxLQUFLLEVBQ0wsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUN0RCxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBRUYsb0JBQWUsR0FBRyxDQUFDLFVBQXNCLEVBQUUsRUFBbUIsRUFBRSxFQUFFLENBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUNkLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsSUFBSSxVQUFVLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUNoRSxDQUFDO0lBOUNELENBQUM7SUFnREosZ0JBQWdCLENBQUMsYUFBa0I7UUFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFDLHVCQUF1QjtRQUN4RCxJQUFJLGFBQWEsS0FBSyxTQUFTLEVBQUU7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDckMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCO1lBQzFFLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztzRkE1RFUsbUJBQW1CO3lFQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZsQixNQUFNO3VGQUVQLG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXN0QWRtaW5Db25maWdTZXJ2aWNlIH0gZnJvbSBcIi4vcmVzdC1hZG1pbi1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgQWRkQ29uZmlnLFxuICBFZGl0Q29uZmlnLFxuICBMaXN0Q29uZmlnLFxufSBmcm9tIFwiLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWxcIjtcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9PUEVSQVRPUlMgPSBbXG4gIHtcbiAgICBuYW1lOiBgZmlsdGVyLWNvbXBhcmUuZXF1YWxpdHlgLFxuICAgIHZhbHVlOiBgPWAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBgZmlsdGVyLWNvbXBhcmUuc3VwZXJpb3JpdHlgLFxuICAgIHZhbHVlOiBgZ2V0YCxcbiAgfSxcbiAge1xuICAgIG5hbWU6IGBmaWx0ZXItY29tcGFyZS5pbmZlcmlvcml0eWAsXG4gICAgdmFsdWU6IGBsZXRgLFxuICB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogYGZpbHRlci1jb21wYXJlLnN1cE9yRWdhbGAsXG4gIC8vICAgdmFsdWU6IGBndGAsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiBgZmlsdGVyLWNvbXBhcmUuaW5mT3JFZ2FsYCxcbiAgLy8gICB2YWx1ZTogYGx0YCxcbiAgLy8gfSxcbiAge1xuICAgIG5hbWU6IGBmaWx0ZXItY29tcGFyZS5pbmNsdWRlYCxcbiAgICB2YWx1ZTogYGxrYCxcbiAgfSxcbl07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RSZXNvdXJjZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdENvbmZpZzogUmVzdEFkbWluQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgZ2V0UmVzb3VyY2VzID0gKGNvbmZpZzogeyBhcGk6IHN0cmluZzsgcXVlcnlQYXJhbXM6IGFueSB9KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXG4gICAgICBgJHt0aGlzLnNlcnZpY2VSZXN0Q29uZmlnLnJlc3RCYXNlVXJsfS8ke2NvbmZpZy5hcGl9YCxcbiAgICAgIHtcbiAgICAgICAgcGFyYW1zOiBjb25maWcucXVlcnlQYXJhbXMsXG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICBnZXRPbmVSZXNvdXJjZSA9IChjb25maWc6IHsgYXBpOiBzdHJpbmc7IHF1ZXJ5UGFyYW1zOiBhbnkgfSwgaWQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgYCR7dGhpcy5zZXJ2aWNlUmVzdENvbmZpZy5yZXN0QmFzZVVybH0vJHtjb25maWcuYXBpfS8ke2lkfWAsXG4gICAgICB7XG4gICAgICAgIHBhcmFtczogY29uZmlnLnF1ZXJ5UGFyYW1zLFxuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgYWRkUmVzb3VyY2VzID0gKGFkZENvbmZpZzogQWRkQ29uZmlnLCBkYXRhcykgPT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgIGAke3RoaXMuc2VydmljZVJlc3RDb25maWcucmVzdEJhc2VVcmx9LyR7YWRkQ29uZmlnLmFwaX1gLFxuICAgICAgZGF0YXMsXG4gICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q3VzdG9tSGVhZGVycyhhZGRDb25maWcuaGVhZGVyKSB9XG4gICAgKTtcbiAgfVxuXG4gIGVkaXRSZXNvdXJjZXMgPSAoZWRpdENvbmZpZzogRWRpdENvbmZpZywgaGFzRmlsZTogQm9vbGVhbiwgZGF0YXMsIGlkKSA9PiB7XG4gICAgaWYgKGhhc0ZpbGUpXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICAgIGAke3RoaXMuc2VydmljZVJlc3RDb25maWcucmVzdEJhc2VVcmx9LyR7ZWRpdENvbmZpZy5hcGl9LyR7aWR9YCxcbiAgICAgICAgZGF0YXMsXG4gICAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDdXN0b21IZWFkZXJzKGVkaXRDb25maWcuaGVhZGVyKSB9XG4gICAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoXG4gICAgICBgJHt0aGlzLnNlcnZpY2VSZXN0Q29uZmlnLnJlc3RCYXNlVXJsfS8ke2VkaXRDb25maWcuYXBpfS8ke2lkfWAsXG4gICAgICBkYXRhcyxcbiAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDdXN0b21IZWFkZXJzKGVkaXRDb25maWcuaGVhZGVyKSB9XG4gICAgKTtcbiAgfTtcblxuICBkZWxldGVSZXNvdXJjZXMgPSAobGlzdENvbmZpZzogTGlzdENvbmZpZywgaWQ6IG51bWJlciB8IHN0cmluZykgPT5cbiAgICB0aGlzLmh0dHAuZGVsZXRlKFxuICAgICAgYCR7dGhpcy5zZXJ2aWNlUmVzdENvbmZpZy5yZXN0QmFzZVVybH0vJHtsaXN0Q29uZmlnLmFwaX0vJHtpZH1gXG4gICAgKTtcblxuICBnZXRDdXN0b21IZWFkZXJzKGhlYWRlckVsZW1lbnQ6IGFueSk6IEh0dHBIZWFkZXJzIHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpOyAvLyBjcmVhdGUgaGVhZGVyIG9iamVjdFxuICAgIGlmIChoZWFkZXJFbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIE9iamVjdC5rZXlzKGhlYWRlckVsZW1lbnQpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLmFwcGVuZChrZXksIGhlYWRlckVsZW1lbnRba2V5XSk7IC8vIGFkZCBhbm90aGVyIGhlYWRlclxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG59XG4iXX0=