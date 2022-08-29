import { RestResource } from "../rest-admin/rest-resource/models/rest-resource";
import { REST_FIELD_TYPES } from "../rest-admin/rest-resource/models/rest-resource.model";

export const client = new RestResource(
  {
    name: "client",
    icon: "person-outline",
  },
  [
    {
      name: "user",
      label: "user_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        addConfig: {
          belongToOptions: {
            resourceName: "user",
            filterKeys: ["name", "email"],
            value: "name",
            queryParams: {
              should_paginate: false,
            },
          },
        },
      },
    },
    {
      name: "name",
      label: "name",
    },
    {
      name: "status",
      label: "status",
      type: REST_FIELD_TYPES.ENUM,
      metaData: {
        addConfig: {
          enumOptions: [
            {
              label: "Standart",
              value: "standart",
            },
            {
              label: "Vip",
              value: "vip",
            },
          ],
        },
      },
    },

    // {
    //   name: "phone_number",
    //   label: "phone_number",
    //   type: REST_FIELD_TYPES.NUMBER,
    // },
    // {
    //   name: "enterprise_id",
    //   label: "enterprise.name",
    //   type: REST_FIELD_TYPES.BELONG_TO,
    //   metaData: {
    //     addConfig: {
    //       belongToOptions: {
    //         resourceName: "enterprise",
    //         filterKeys: ["name"],
    //         value: "id",
    //         queryParams: {
    //           should_paginate: false,
    //         },
    //       },
    //     },
    //   },
    // },
  ],
  {
    columns: ["name", "phone_number", "user", "enterprise_id", "status"],
    perPage: 10,
    title: "Client",
    // searchFilter: {
    //   filterBy: ["name", "phone_number"],
    // },
    group: {
      name: "ADMIN",
      priority: 2,
    },
  },
  {
    api: "clients",
    title: "Add Client",
    inList: true,
  },
  {
    title: "Edit client",
  },
  {
    title: "client detail",
  }
);
