import { RestResource, REST_FIELD_TYPES, TYPE_GROUP } from 'rest-admin';
import { user } from './user';

const consolidator = new RestResource(
  {
    name: "consolidator",
    api: "consolidators",
  },
  [],
  {},
  {
    api: "consolidators",
  },
  {},
  {}
);

export const consolidatorUser = new RestResource(
  {
    name: "consolidatorUser",
    api: "consolidator_users",
    icon: {
      icon: "user-md",
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
      name: "is_banned",
      type: REST_FIELD_TYPES.BOOLEAN,
    },
    {
      name: "status",
      type: REST_FIELD_TYPES.ENUM,
      metaData: {
        addConfig: {
          enumOptions: [
            {
              label: "quit",
              value: "quit",
            },
            {
              label: "banned",
              value: "banned",
            },
            {
              label: "affiliated",
              value: "affiliated",
            },
          ],
        },
      },
    },
    {
      name: "consolidator_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        belongToSecondFieldLabel: "label",
        addConfig: {
          belongToOptions: {
            resourceName: "consolidator",
            filterKeys: ["label"],
            value: "id",
            queryParams: {
              should_paginate: false,
            },
          },
        },
      },
    },
    {
      name: "consolidator",
      type: REST_FIELD_TYPES.HAS_ONE,
      metaData: {
        listConfig: {
          restHasOneResources: {
            name: "label",
          },
        },
      },
      inForm: false,
    },
    {
      name: "user_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        belongToSecondFieldLabel: "full_name",
        addConfig: {
          belongToOptions: {
            resourceName: "user",
            filterKeys: ["full_name", "email"],
            value: "id",
            queryParams: {
              should_paginate: false,
            },
          },
        },
        listConfig: {
          restHasOneResources: {
            name: "user.full_name",
          },
        },
      },
    },
    {
      name: "user",
      type: REST_FIELD_TYPES.HAS_ONE,
      metaData: {
        listConfig: {
          restHasOneResources: {
            name: "full_name",
          },
        },
      },
      inForm: false,
    },
    // {
    //   name: "all_status",
    //   type: REST_FIELD_TYPES.HAS_MANY,
    // },
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
    columns: [
      "id",
      "is_banned",
      "status",
      "consolidator",
      // "consolidator_id",
      "user",
      "created_at",
      "updated_at",
      // "all_status",
    ],
    group: {
      name: "CONSOLIDATOR",
      type: TYPE_GROUP.MENU, // Regroupe les ressources dans un menu deroulant
    },
    queryParams: {
      _includes: "user,consolidator",
    },
    searchFilter: {
      filterBy: [
        { name: "status", value: "status" },
        {
          name: "consolidator",
          value: "id",
          resourceFieldName: "id",
          resource: consolidator,
          ressourceFilterName: "consolidator_id",
          type: REST_FIELD_TYPES.BELONG_TO_MANY,
        },
      ],
    },
  },
  {
    api: "consolidator_users",
    title: "Add container",
    inList: true,
  },
  {},
  {
    queryParams: {
      _includes: "user,consolidator",
    },
  }
);
