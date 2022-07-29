import { resources } from "./resources";
import { REST_CONFIG } from "./rest-admin/rest-resource/models/rest-resource.model";

export const RESOURCES_CONFIG: REST_CONFIG = {
  name: "Dash Admin",
  resources: resources,
  baseUrl: "https://api.mydashs.com/api",
};
