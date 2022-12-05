import { RestResource, REST_FIELD_TYPES, TYPE_GROUP, TYPE_METHOD_REQUEST } from "rest-admin";

export const packageContent = new RestResource(
  {
    name: "packageContent",
    api: "package_contents",
    icon: {
      icon: "cubes",
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
      name: "picture",
      type: REST_FIELD_TYPES.IMAGE,
      metaData: {
        listConfig: {
          style:
            "max-width: 100px;border-radius: 5px;box-shadow: 5px 3px gray;",
        },
      },
    },
    {
      name: "name",
      type: REST_FIELD_TYPES.STRING,
    },
    {
      name: "quantity",
      type: REST_FIELD_TYPES.NUMBER,
    },
    {
      name: "package_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        addConfig: {
          belongToOptions: {
            resourceName: "package",
            filterKeys: ["name", "description"],
            value: "id",
            queryParams: {
              should_paginate: false,
            },
          },
        },
        listConfig: {
          restHasOneResources: {
            name: "package.name",
          },
        },
      },
    },
    {
      name: "package",
      type: REST_FIELD_TYPES.HAS_ONE,
      metaData: {
        listConfig: {
          restHasOneResources: {
            name: "name",
          },
        },
      },
      inForm: false,
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
    columns: ["id", "picture", "name", "quantity", "package", "created_at"],
    group: {
      name: "CLIENT",
      type: TYPE_GROUP.SEPARATOR, // Regroupe les ressources dans un menu deroulant
    },
    queryParams: {
      _includes: "package",
    },
    searchFilter: {
      filterBy: ["name"],
    },
  },
  {
    api: "package_contents",
    title: "Add packageContent",
    inList: true,
  },
  {
    method: TYPE_METHOD_REQUEST.POST,
    body: {
      "_method": TYPE_METHOD_REQUEST.PUT,
    },
  },
  {}
);
