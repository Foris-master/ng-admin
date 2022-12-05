import { REST_CONFIG } from "rest-admin";
import { resources } from "./resources";

export const RESOURCES_CONFIG: REST_CONFIG = {
  name: "Marylis",
  resources: resources,
  baseUrl: "https://api.marylis.com/api",
};
