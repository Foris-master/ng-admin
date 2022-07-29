import { RestResource } from "../rest-admin/rest-resource/models/rest-resource";
import { REST_FIELD_TYPES } from "../rest-admin/rest-resource/models/rest-resource.model";

export const user = new RestResource(
  {
    name: "user",
    icon: "people",
  },
  [
    {
      name: "name",
    },
    {
      name: "email",
    },
    {
      name: "phone_number",
      type: REST_FIELD_TYPES.NUMBER,
    },
    {
      name: "gender",
      type: REST_FIELD_TYPES.ENUM,
      metaData: {
        addConfig: {
          enumOptions: [
            {
              label: "Masculin",
              value: "male",
            },
            {
              label: "Féminin",
              value: "female",
            },
          ],
        },
      },
    },
  ],
  {
    columns: ["name", "phone_number", "email", "gender"],
    perPage: 10,
    title: "Users",
  },
  {
    api: "users",
    title: "Add Enterprises",
    inList: true,
  },
  {
    title: "user edit",
  },
  {
    title: "user detail",
  }
);
