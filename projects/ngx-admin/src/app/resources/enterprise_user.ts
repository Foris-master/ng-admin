import { RestResource } from "../rest-admin/rest-resource/models/rest-resource";
import { REST_FIELD_TYPES } from "../rest-admin/rest-resource/models/rest-resource.model";

export const enterprise_user = new RestResource(
  {
    name: "enterprise_user",
    icon: "people",
  },
  [
    {
      name: "role",
      type: REST_FIELD_TYPES.ENUM,
      metaData: {
        addConfig: {
          enumOptions: [
            {
              label: "Owner",
              value: "owner",
            },
            {
              label: "Employee",
              value: "employee",
            },
            {
              label: "Commercial",
              value: "commercial",
            },
            {
              label: "Supervisor",
              value: "supervisor",
            },
            {
              label: "Dash_admin",
              value: "dash_admin",
            },
          ],
        },
      },
    },
    {
      name: "user",
      label: "user.name",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        addConfig: {
          belongToOptions: {
            resourceName: "user",
            filterKeys: ["name"],
            value: "name",
            // template: "name",
            queryParams: {
              should_paginate: false,
            },
          },
        },
      },
    },
    {
      name: "enterprise",
      label: "enterprise.name",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        addConfig: {
          belongToOptions: {
            resourceName: "enterprise",
            filterKeys: ["name"],
            value: "name",
            // template: "name",
            queryParams: {
              should_paginate: false,
            },
          },
        },
      },
    },
    {
      name: "is_active",
      type: REST_FIELD_TYPES.BOOLEAN,
    },
  ],
  {
    columns: ["user", "enterprise", "role", "is_active"],
    perPage: 10,
    title: "Enterprise_user",
    queryParams: {
      _includes: "user,enterprise",
    },
  },
  {
    api: "enterprise_users",
    title: "Add Enterprise_user",
    inList: true,
  },
  {
    queryParams: {
      _includes: "user,enterprise",
    },
  },
  {
    title: "enterprise_user detail",
  }
);
