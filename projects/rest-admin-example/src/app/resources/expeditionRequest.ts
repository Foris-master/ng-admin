import { RestResource, REST_FIELD_TYPES, TYPE_GROUP } from "rest-admin";

export const expeditionRequest = new RestResource(
  {
    name: "expeditionRequest",
    api: "expedition_requests",
    icon: {
      icon: "walking",
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
      name: "status",
      type: REST_FIELD_TYPES.ENUM,
      metaData: {
        addConfig: {
          enumOptions: [
            {
              label: "new",
              value: "new",
            },
            {
              label: "pending",
              value: "pending",
            },
            {
              label: "accepted",
              value: "accepted",
            },
            {
              label: "refused",
              value: "refused",
            },
          ],
        },
      },
    },
    {
      name: "expedition_type",
      type: REST_FIELD_TYPES.ENUM,
      metaData: {
        addConfig: {
          enumOptions: [
            {
              label: "container",
              value: "container",
            },
            {
              label: "flight",
              value: "flight",
            },
          ],
        },
      },
    },
    {
      name: "payment_type",
      type: REST_FIELD_TYPES.ENUM,
      metaData: {
        addConfig: {
          enumOptions: [
            {
              label: "slice",
              value: "slice",
            },
            {
              label: "in_beginning",
              value: "in_beginning",
            },
            {
              label: "at_end",
              value: "at_end",
            },
          ],
        },
      },
    },
    {
      name: "total_amount",
      type: REST_FIELD_TYPES.STRING,
    },
    {
      name: "need_pickup",
      type: REST_FIELD_TYPES.BOOLEAN,
    },
    {
      name: "is_assured",
      type: REST_FIELD_TYPES.BOOLEAN,
    },
    {
      name: "package_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        addConfig: {
          belongToOptions: {
            resourceName: "package",
            filterKeys: ["name"],
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
      name: "address_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        addConfig: {
          belongToOptions: {
            resourceName: "address",
            filterKeys: ["name"],
            value: "id",
            queryParams: {
              should_paginate: false,
            },
          },
        },
        listConfig: {
          restHasOneResources: {
            name: "address.name",
          },
        },
      },
    },
    {
      name: "address",
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
      name: "payment_method_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        addConfig: {
          belongToOptions: {
            resourceName: "paymentMethod",
            filterKeys: ["name"],
            value: "id",
            queryParams: {
              should_paginate: false,
            },
          },
        },
        listConfig: {
          restHasOneResources: {
            name: "payment_method.name",
          },
        },
      },
    },
    {
      name: "payment_method",
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
      name: "from_town_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        addConfig: {
          belongToOptions: {
            resourceName: "town",
            filterKeys: ["name"],
            value: "id",
            queryParams: {
              should_paginate: false,
            },
          },
        },
        listConfig: {
          restHasOneResources: {
            name: "from_town.name",
          },
        },
      },
    },
    {
      name: "from_town",
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
      name: "to_town_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        addConfig: {
          belongToOptions: {
            resourceName: "town",
            filterKeys: ["name"],
            value: "id",
            queryParams: {
              should_paginate: false,
            },
          },
        },
        listConfig: {
          restHasOneResources: {
            name: "to_town.name",
          },
        },
      },
    },
    {
      name: "to_town",
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
    // {
    //   name: "all_expedition_types",
    //   type: REST_FIELD_TYPES.HAS_MANY,
    // },
    // {
    //   name: "all_payment_types",
    //   type: REST_FIELD_TYPES.HAS_MANY,
    // },
    // {
    //   name: "all_status",
    //   type: REST_FIELD_TYPES.HAS_MANY,
    // },
    {
      name: "created_at",
      type: REST_FIELD_TYPES.DATE,
      inForm: false,
    },
  ],
  {
    columns: [
      "id",
      "status",
      "expedition_type",
      "payment_type",
      "total_amount",
      "need_pickup",
      "is_assured",
      "package",
      "address",
      "payment_method",
      "from_town",
      "to_town",
      "created_at",
    ],
    group: {
      name: "CLIENT",
      type: TYPE_GROUP.SEPARATOR, // Regroupe les ressources dans un menu deroulant
    },
    queryParams: {
      _includes: "package,address,to_town,from_town,payment_method",
    },
    // searchFilter: {
    //   filterBy: ["status", "expedition_type"],
    // },
  },
  {
    api: "expedition_requests",
    title: "Add expeditionRequest",
    inList: true,
  },
  {},
  {}
);
