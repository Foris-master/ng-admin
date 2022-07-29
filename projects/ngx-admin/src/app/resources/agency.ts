import { RestResource } from "../rest-admin/rest-resource/models/rest-resource";
import { REST_FIELD_TYPES } from "../rest-admin/rest-resource/models/rest-resource.model";

export const agency = new RestResource(
  {
    name: "agency",
    api: "agencies",
    icon: {
      icon: "building",
      pack: "fas",
    },
  },
  [
    {
      name: "banner",
      type: REST_FIELD_TYPES.IMAGE,
      metaData: {
        listConfig: {
          class: "rest-list-img",
          style:
            "max-width: 100px;border-radius: 5px;box-shadow: 5px 3px gray;",
        },
      },
    },
    ,
    {
      name: "name",
    },
    {
      name: "email",
    },
    {
      name: "address",
    },
    {
      name: "phone_number",
      type: REST_FIELD_TYPES.NUMBER,
    },
  ],
  {
    columns: ["banner", "name", "email", "address", "phone_number"],
    perPage: 10,
    api: "agencies",
    hideAddSubHeader: true,
    group: {
      name: "ADMIN",
      priority: 1,
    },
  },
  {
    api: "agencies",
    title: "Add Agency",
    inList: true,
  },
  {
    title: "Edit Agency",
  },
  {
    title: "agency detail",
  }
);
