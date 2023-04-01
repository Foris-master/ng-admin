import { RestResource, REST_FIELD_TYPES, TYPE_GROUP } from "rest-admin";

export const currency = new RestResource(
  {
    name: "currency",
    api: "currencies",
    icon: {
      icon: "coins",
      pack: "fas",
    },
  },
  [
    {
      name: "id",
      type: REST_FIELD_TYPES.NUMBER,
    },
    {
      name: "code",
    },
    {
      name: "symbol",
    },
    {
      name: "is_symbol_back",
      type: REST_FIELD_TYPES.BOOLEAN,
    },
    {
      name: "sub_unit",
      type: REST_FIELD_TYPES.NUMBER,
    },
    {
      name: "rate",
      type: REST_FIELD_TYPES.NUMBER,
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
    columns: [
      "id",
      "code",
      "symbol",
      "is_symbol_back",
      "sub_unit",
      "created_at",
    ],
    searchFilter: {
      filterBy: ["code", "symbol"],
    },
  },
  {},
  {},
  {}
);
