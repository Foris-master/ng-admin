import { RestResource } from "../rest-admin/rest-resource/models/rest-resource";
import { REST_FIELD_TYPES } from "../rest-admin/rest-resource/models/rest-resource.model";

export const promotion = new RestResource(
  {
    name: "promotion",
    icon: "gift",
    authRequired: true,
  },
  [
    {
      name: "name",
    },
    {
      name: "enterprise_products",
      type: REST_FIELD_TYPES.HAS_MANY,
      metaData: {
        listConfig: {
          restManyResources: {
            label: "description",
            template: "<span> {description}</span>",
            name: "description",
          },
        },
      },
    },
    {
      name: "code",
    },
    {
      name: "total_bonus",
      type: REST_FIELD_TYPES.NUMBER,
    },

    {
      name: "start_at",
      type: REST_FIELD_TYPES.DATE,
    },
    {
      name: "type",
      label: "type",
      type: REST_FIELD_TYPES.ENUM,
      metaData: {
        addConfig: {
          enumOptions: [
            {
              label: "Simple",
              value: "simple",
            },
            {
              label: "Percent",
              value: "percent",
            },
            {
              label: "Bonus",
              value: "bonus",
            },
            {
              label: "Tombola",
              value: "tombola",
            },
          ],
        },
      },
    },

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
    {
      name: "description",
      type: REST_FIELD_TYPES.TEXT,
    },
  ],
  {
    columns: [
      "enterprise_products",
      "name",
      "start_at",
      "total_bonus",
      "description",
    ],
    perPage: 10,
    queryParams: {
      _includes: "enterprise_products",
    },
    searchFilter: {
      filterBy: ["name"],
    },
  },
  {
    api: "promotions",
    title: "Add promotion",
    inList: true,
  },
  {
    title: "edit promotion",
    queryParams: {
      _includes: "enterprise_products",
    },
  },
  {
    title: "detail promotion",
    queryParams: {
      _includes: "enterprise_products",
    },
  }
);
