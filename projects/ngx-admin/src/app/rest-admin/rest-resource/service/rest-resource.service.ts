import { RestAdminConfigService } from "./rest-admin-config.service";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  AddConfig,
  EditConfig,
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
      datas,
      { headers: this.getCustomHeaders(addConfig.header) }
    );

  editResources = (editConfig: EditConfig, hasFile: Boolean, datas, id) => {
    if (hasFile)
      return this.http.post(
        `${this.serviceRestConfig.restBaseUrl}/${editConfig.api}/${id}`,
        datas,
        { headers: this.getCustomHeaders(editConfig.header) }
      );

    return this.http.put(
      `${this.serviceRestConfig.restBaseUrl}/${editConfig.api}/${id}`,
      datas,
      { headers: this.getCustomHeaders(editConfig.header) }
    );
  };

  deleteResources = (listConfig: ListConfig, id: number | string) =>
    this.http.delete(
      `${this.serviceRestConfig.restBaseUrl}/${listConfig.api}/${id}`
    );

  getCustomHeaders(headerElement: any): HttpHeaders {
    let headers = new HttpHeaders(); // create header object

    Object.keys(headerElement).map((key) => {
      headers = headers.append(key, headerElement[key]); // add another header
    });
    return headers;
  }
}
