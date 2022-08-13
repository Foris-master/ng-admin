import { RestAdminConfigService } from "./rest-admin-config.service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  AddConfig,
  ListConfig,
  ResourceConfig,
  REST_FIELD_METADATA,
} from "../models/rest-resource.model";

export const FILTER_OPERATORS = [
  {
    name: `filter-compare.equality`,
    value: `=`,
  },
  {
    name: `filter-compare.superiority`,
    value: `gt`,
  },
  {
    name: `filter-compare.inferiority`,
    value: `lt`,
  },
  {
    name: `filter-compare.supOrEgal`,
    value: `get`,
  },
  {
    name: `filter-compare.infOrEgal`,
    value: `let`,
  },
];

@Injectable({
  providedIn: "root",
})
export class RestResourceService {
  constructor(
    private http: HttpClient,
    private serviceRestConfig: RestAdminConfigService
  ) {}

  getResources = (config: { api: string; queryParams: any }) => {
    return this.http.get(
      `${this.serviceRestConfig.restBaseUrl}/${config.api}`,
      {
        params: config.queryParams,
      }
    );
  };

  getOneResource = (config: { api: string; queryParams: any }, id: string) => {
    return this.http.get(
      `${this.serviceRestConfig.restBaseUrl}/${config.api}/${id}`,
      {
        params: config.queryParams,
      }
    );
  };

  addResources = (addConfig: AddConfig, datas) =>
    this.http.post(
      `${this.serviceRestConfig.restBaseUrl}/${addConfig.api}`,
      datas
    );

  deleteResources = (listConfig: ListConfig, id: number | string) =>
    this.http.delete(
      `${this.serviceRestConfig.restBaseUrl}/${listConfig.api}/${id}`
    );
}
