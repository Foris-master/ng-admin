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
RestResourceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceService, deps: [{ token: i1.HttpClient }, { token: i2.RestAdminConfigService }], target: i0.ɵɵFactoryTarget.Injectable });
RestResourceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.RestAdminConfigService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtcmVzb3VyY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWMsV0FBVyxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU8zQyxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztJQUM5QjtRQUNFLElBQUksRUFBRSx5QkFBeUI7UUFDL0IsS0FBSyxFQUFFLEdBQUc7S0FDWDtJQUNEO1FBQ0UsSUFBSSxFQUFFLDRCQUE0QjtRQUNsQyxLQUFLLEVBQUUsS0FBSztLQUNiO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsNEJBQTRCO1FBQ2xDLEtBQUssRUFBRSxLQUFLO0tBQ2I7SUFDRCxJQUFJO0lBQ0osc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQixLQUFLO0lBQ0wsSUFBSTtJQUNKLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsS0FBSztJQUNMO1FBQ0UsSUFBSSxFQUFFLHdCQUF3QjtRQUM5QixLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YsQ0FBQztBQUtGLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFDVSxJQUFnQixFQUNoQixpQkFBeUM7UUFEekMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXdCO1FBR25ELGlCQUFZLEdBQUcsQ0FBQyxNQUF5QyxFQUFFLEVBQUU7WUFDM0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFDckQ7Z0JBQ0UsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXO2FBQzNCLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQztRQUVGLG1CQUFjLEdBQUcsQ0FBQyxNQUF5QyxFQUFFLEVBQVUsRUFBRSxFQUFFO1lBQ3pFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxFQUMzRDtnQkFDRSxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVc7YUFDM0IsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBRUYsaUJBQVksR0FBRyxDQUFDLFNBQW9CLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFDeEQsS0FBSyxFQUNMLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDckQsQ0FBQztRQUNKLENBQUMsQ0FBQTtRQUVELGtCQUFhLEdBQUcsQ0FBQyxVQUFzQixFQUFFLE9BQWdCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFO1lBQ3RFLElBQUksT0FBTztnQkFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLElBQUksVUFBVSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsRUFDL0QsS0FBSyxFQUNMLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDdEQsQ0FBQztZQUVKLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsSUFBSSxVQUFVLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxFQUMvRCxLQUFLLEVBQ0wsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUN0RCxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBRUYsb0JBQWUsR0FBRyxDQUFDLFVBQXNCLEVBQUUsRUFBbUIsRUFBRSxFQUFFLENBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUNkLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsSUFBSSxVQUFVLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUNoRSxDQUFDO0lBOUNELENBQUM7SUFnREosZ0JBQWdCLENBQUMsYUFBa0I7UUFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFDLHVCQUF1QjtRQUN4RCxJQUFJLGFBQWEsS0FBSyxTQUFTLEVBQUU7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDckMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCO1lBQzFFLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnSEE1RFUsbUJBQW1CO29IQUFuQixtQkFBbUIsY0FGbEIsTUFBTTsyRkFFUCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gXCIuL3Jlc3QtYWRtaW4tY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEFkZENvbmZpZyxcbiAgRWRpdENvbmZpZyxcbiAgTGlzdENvbmZpZyxcbn0gZnJvbSBcIi4uL21vZGVscy9yZXN0LXJlc291cmNlLm1vZGVsXCI7XG5cbmV4cG9ydCBjb25zdCBGSUxURVJfT1BFUkFUT1JTID0gW1xuICB7XG4gICAgbmFtZTogYGZpbHRlci1jb21wYXJlLmVxdWFsaXR5YCxcbiAgICB2YWx1ZTogYD1gLFxuICB9LFxuICB7XG4gICAgbmFtZTogYGZpbHRlci1jb21wYXJlLnN1cGVyaW9yaXR5YCxcbiAgICB2YWx1ZTogYGdldGAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBgZmlsdGVyLWNvbXBhcmUuaW5mZXJpb3JpdHlgLFxuICAgIHZhbHVlOiBgbGV0YCxcbiAgfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6IGBmaWx0ZXItY29tcGFyZS5zdXBPckVnYWxgLFxuICAvLyAgIHZhbHVlOiBgZ3RgLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogYGZpbHRlci1jb21wYXJlLmluZk9yRWdhbGAsXG4gIC8vICAgdmFsdWU6IGBsdGAsXG4gIC8vIH0sXG4gIHtcbiAgICBuYW1lOiBgZmlsdGVyLWNvbXBhcmUuaW5jbHVkZWAsXG4gICAgdmFsdWU6IGBsa2AsXG4gIH0sXG5dO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0UmVzb3VyY2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgc2VydmljZVJlc3RDb25maWc6IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGdldFJlc291cmNlcyA9IChjb25maWc6IHsgYXBpOiBzdHJpbmc7IHF1ZXJ5UGFyYW1zOiBhbnkgfSkgPT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgYCR7dGhpcy5zZXJ2aWNlUmVzdENvbmZpZy5yZXN0QmFzZVVybH0vJHtjb25maWcuYXBpfWAsXG4gICAgICB7XG4gICAgICAgIHBhcmFtczogY29uZmlnLnF1ZXJ5UGFyYW1zLFxuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgZ2V0T25lUmVzb3VyY2UgPSAoY29uZmlnOiB7IGFwaTogc3RyaW5nOyBxdWVyeVBhcmFtczogYW55IH0sIGlkOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgIGAke3RoaXMuc2VydmljZVJlc3RDb25maWcucmVzdEJhc2VVcmx9LyR7Y29uZmlnLmFwaX0vJHtpZH1gLFxuICAgICAge1xuICAgICAgICBwYXJhbXM6IGNvbmZpZy5xdWVyeVBhcmFtcyxcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIGFkZFJlc291cmNlcyA9IChhZGRDb25maWc6IEFkZENvbmZpZywgZGF0YXMpID0+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICBgJHt0aGlzLnNlcnZpY2VSZXN0Q29uZmlnLnJlc3RCYXNlVXJsfS8ke2FkZENvbmZpZy5hcGl9YCxcbiAgICAgIGRhdGFzLFxuICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldEN1c3RvbUhlYWRlcnMoYWRkQ29uZmlnLmhlYWRlcikgfVxuICAgICk7XG4gIH1cblxuICBlZGl0UmVzb3VyY2VzID0gKGVkaXRDb25maWc6IEVkaXRDb25maWcsIGhhc0ZpbGU6IEJvb2xlYW4sIGRhdGFzLCBpZCkgPT4ge1xuICAgIGlmIChoYXNGaWxlKVxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgICBgJHt0aGlzLnNlcnZpY2VSZXN0Q29uZmlnLnJlc3RCYXNlVXJsfS8ke2VkaXRDb25maWcuYXBpfS8ke2lkfWAsXG4gICAgICAgIGRhdGFzLFxuICAgICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q3VzdG9tSGVhZGVycyhlZGl0Q29uZmlnLmhlYWRlcikgfVxuICAgICAgKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KFxuICAgICAgYCR7dGhpcy5zZXJ2aWNlUmVzdENvbmZpZy5yZXN0QmFzZVVybH0vJHtlZGl0Q29uZmlnLmFwaX0vJHtpZH1gLFxuICAgICAgZGF0YXMsXG4gICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q3VzdG9tSGVhZGVycyhlZGl0Q29uZmlnLmhlYWRlcikgfVxuICAgICk7XG4gIH07XG5cbiAgZGVsZXRlUmVzb3VyY2VzID0gKGxpc3RDb25maWc6IExpc3RDb25maWcsIGlkOiBudW1iZXIgfCBzdHJpbmcpID0+XG4gICAgdGhpcy5odHRwLmRlbGV0ZShcbiAgICAgIGAke3RoaXMuc2VydmljZVJlc3RDb25maWcucmVzdEJhc2VVcmx9LyR7bGlzdENvbmZpZy5hcGl9LyR7aWR9YFxuICAgICk7XG5cbiAgZ2V0Q3VzdG9tSGVhZGVycyhoZWFkZXJFbGVtZW50OiBhbnkpOiBIdHRwSGVhZGVycyB7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTsgLy8gY3JlYXRlIGhlYWRlciBvYmplY3RcbiAgICBpZiAoaGVhZGVyRWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBPYmplY3Qua2V5cyhoZWFkZXJFbGVtZW50KS5tYXAoKGtleSkgPT4ge1xuICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5hcHBlbmQoa2V5LCBoZWFkZXJFbGVtZW50W2tleV0pOyAvLyBhZGQgYW5vdGhlciBoZWFkZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxufVxuIl19