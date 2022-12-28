import { REST_CONFIG } from "rest-admin";
import { resources } from "./resources";

export const RESOURCES_CONFIG: REST_CONFIG = {
  name: "Your App Name",
  resources: resources,
  baseUrl: "https://api.example.com/api",
};
