import { RestResource } from "../rest-admin/rest-resource/models/rest-resource";
import { REST_FIELD_TYPES } from "../rest-admin/rest-resource/models/rest-resource.model";

export const town = new RestResource(
  {
    name: "town",
  },
  [
    // { name: "name" },
    // { name: "district" },
    {
      name: "code",
      type: REST_FIELD_TYPES.JSON,

      metaData: {
        addConfig: {
          jsonConfig: {
            jsonFields: ["code", "name"],
            isOpen: true,
          },
        },
      },
    },
    {
      name: "district",
      type: REST_FIELD_TYPES.JSON,

      metaData: {
        addConfig: {
          jsonConfig: {
            jsonFields: ["code", "name"],
            isOpen: true,
          },
        },
      },
    },
    // { name: "country_id", type: REST_FIELD_TYPES.BELONG_TO },
  ],
  {
    columns: ["code", "name", "district", "country_id"],
    perPage: 10,
    title: "Town",
    group: {
      name: "ADMIN",
      priority: 3,
    },
  },
  {
    api: "towns",
    title: "Add True",

    inList: true,
  },
  {
    title: "edit town",
  },
  {
    title: "town detail",
  }
);
