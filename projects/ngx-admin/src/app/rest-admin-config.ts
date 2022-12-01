import { resources } from "./resources";
import { RestResource } from "./rest-admin/rest-resource/models/rest-resource";
import {
  REST_CONFIG,
  REST_FIELD_TYPES,
} from "./rest-admin/rest-resource/models/rest-resource.model";

export const RESOURCES_CONFIG: REST_CONFIG = {
  name: "Marylis",
  resources: resources,
  baseUrl: "https://api.marylis.com/api",
};
