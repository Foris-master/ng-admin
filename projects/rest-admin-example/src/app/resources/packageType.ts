import { RestResource, REST_FIELD_TYPES, TYPE_GROUP } from "rest-admin";

export const packageType = new RestResource(
  {
    name: "packageType",
    api: "package_types",
    icon: {
      icon: "people-carry",
      pack: "fas",
    },
  },
  [
    {
      name: "id",
      type: REST_FIELD_TYPES.NUMBER,
      inForm: false,
    },
    {
      name: "name",
      type: REST_FIELD_TYPES.STRING,
    },
    {
      name: "description",
      type: REST_FIELD_TYPES.TEXT,
    },
    {
      name: "created_at",
      type: REST_FIELD_TYPES.DATE,
      inForm: false,
    },
    {
      name: "updated_at",
      type: REST_FIELD_TYPES.DATE,
      inForm: false,
    },
  ],
  {
    columns: ["name", "description", "created_at", "updated_at"],
    group: {
      name: "CLIENT",
      type: TYPE_GROUP.MENU, // Regroupe les ressources dans un menu deroulant
    },
    searchFilter: {
      filterBy: ["name", "description"],
    },
  },
  {
    api: "package_types",
    title: "Add packageType",
    inList: true,
  },
  {},
  {}
);
