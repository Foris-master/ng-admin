import { resources } from "./resources";
import { REST_CONFIG } from "./rest-admin/rest-resource/models/rest-resource.model";

// export const RESOURCES_CONFIG: REST_CONFIG = {
//   name: "Marylis Admin",
//   resources: resources,
//   baseUrl: "https://api.marylis.com/api",
// };

export const RESOURCES_CONFIG: REST_CONFIG = {
  name: "MyDash", //Your name App
  resources: resources, // Resources of your backend
  baseUrl: "https://api.mydashs.com/api", //Endpoint of your backend
};
