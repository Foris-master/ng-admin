import { packageContent } from "./packageContent";
import { RestResource, REST_FIELD_TYPES, TYPE_GROUP, TYPE_METHOD_REQUEST } from "rest-admin";
import { expeditionRequest } from "./expeditionRequest";

export const _package = new RestResource(
  {
    name: "package",
    api: "packages",
    icon: {
      icon: "cube",
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
      name: "name",
      type: REST_FIELD_TYPES.STRING,
      metaData: {
        listConfig: {},
      },
    },
    {
      name: "picture1",
      type: REST_FIELD_TYPES.IMAGE,
      metaData: {
        listConfig: {
          style:
            "max-width: 100px;border-radius: 5px;box-shadow: 5px 3px gray;",
        },
      },
    },
    {
      name: "package_contents",
      type: REST_FIELD_TYPES.HAS_MANY,
      metaData: {
        listConfig: {
          restManyResources: {
            label: "name",
            template: "<span> {{name}} </span>",
            name: "name",
          },
        },
        detailConfig: {
          restManyResources: {
            resourceName: "packageContent",
            resource: packageContent,
          },
        },
      },
      inForm: false,
    },
    {
      name: "expedition_requests",
      type: REST_FIELD_TYPES.HAS_MANY,
      metaData: {
        listConfig: {
          restManyResources: {
            label: "expedition_type",
            template: "<span> {{expedition_type}} </span>",
            name: "expedition_type",
          },
        },
        detailConfig: {
          restManyResources: {
            resourceName: "expeditionRequest",
            resource: expeditionRequest,
          },
        },
      },
      inForm: false,
    },
    {
      name: "status",
      type: REST_FIELD_TYPES.ENUM,
      metaData: {
        addConfig: {
          enumOptions: [
            {
              label: "proposed",
              value: "proposed",
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
      name: "nature",
      type: REST_FIELD_TYPES.STRING,
    },
    {
      name: "code",
      type: REST_FIELD_TYPES.NUMBER,
      inForm: false,
    },
    {
      name: "value",
      type: REST_FIELD_TYPES.NUMBER,
    },
    {
      name: "is_sensitive",
      type: REST_FIELD_TYPES.BOOLEAN,
    },
    {
      name: "should_notify",
      type: REST_FIELD_TYPES.BOOLEAN,
    },
    {
      name: "price",
      type: REST_FIELD_TYPES.NUMBER,
    },
    // {
    //   name: "pdf",
    //   type: REST_FIELD_TYPES.PDF,
    //   inForm: false,
    // },
    {
      name: "concern_id",
      type: REST_FIELD_TYPES.MORPH,
      metaData: {
        addConfig: {
          morphConfig: {
            related: [
              {
                label: "giftRegistry",
                value: "giftRegistry",
              },
              {
                label: "partOrder",
                value: "partOrder",
              },
            ],
            filterKeys: ["description"],
            value: "id",
            queryParams: {
              should_paginate: false,
            },
          },
        },
      },
    },
    {
      name: "concern_type",
      type: REST_FIELD_TYPES.ENUM,
      metaData: {
        addConfig: {
          enumOptions: [
            {
              label: "giftRegistry",
              value: "App\\Models\\GiftRegistry",
            },
            {
              label: "partOrder",
              value: "App\\Models\\PartOrder",
            },
          ],
        },
      },
    },
    {
      name: "picture2",
      type: REST_FIELD_TYPES.IMAGE,
      metaData: {
        listConfig: {
          style:
            "max-width: 100px;border-radius: 5px;box-shadow: 5px 3px gray;",
        },
      },
    },
    {
      name: "picture3",
      type: REST_FIELD_TYPES.IMAGE,
      metaData: {
        listConfig: {
          style:
            "max-width: 100px;border-radius: 5px;box-shadow: 5px 3px gray;",
        },
      },
    },
    {
      name: "picture4",
      type: REST_FIELD_TYPES.IMAGE,
      metaData: {
        listConfig: {
          style:
            "max-width: 100px;border-radius: 5px;box-shadow: 5px 3px gray;",
        },
      },
    },
    {
      name: "currency_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        addConfig: {
          belongToOptions: {
            resourceName: "currency",
            filterKeys: ["symbol"],
            value: "id",
            queryParams: {
              should_paginate: false,
            },
          },
        },
        listConfig: {
          restHasOneResources: {
            name: "symbol",
          },
        },
      },
    },
    {
      name: "currency",
      type: REST_FIELD_TYPES.HAS_ONE,
      metaData: {
        listConfig: {
          restHasOneResources: {
            name: "symbol",
          },
        },
      },
      inForm: false,
    },
    // {
    //   name: "contact_1_id",
    //   type: REST_FIELD_TYPES.BELONG_TO,
    //   metaData: {
    //     addConfig: {
    //       belongToOptions: {
    //         resourceName: "contact",
    //         filterKeys: ["first_name", "last_name"],
    //         value: "id",
    //         queryParams: {
    //           should_paginate: false,
    //         },
    //       },
    //     },
    //     listConfig: {
    //       restHasOneResources: {
    //         name: "contact_1.first_name",
    //       },
    //     },
    //   },
    // },
    // {
    //   name: "contact_1",
    //   type: REST_FIELD_TYPES.HAS_ONE,
    //   metaData: {
    //     listConfig: {
    //       restHasOneResources: {
    //         name: "first_name",
    //       },
    //     },
    //   },
    //   inForm: false,
    // },
    // {
    //   name: "contact_2_id",
    //   type: REST_FIELD_TYPES.BELONG_TO,
    //   metaData: {
    //     addConfig: {
    //       belongToOptions: {
    //         resourceName: "contact",
    //         filterKeys: ["first_name", "last_name"],
    //         value: "id",
    //         queryParams: {
    //           should_paginate: false,
    //         },
    //       },
    //     },
    //     listConfig: {
    //       restHasOneResources: {
    //         name: "contact_2.first_name",
    //       },
    //     },
    //   },
    // },
    // {
    //   name: "contact_2",
    //   type: REST_FIELD_TYPES.HAS_ONE,
    //   metaData: {
    //     listConfig: {
    //       restHasOneResources: {
    //         name: "first_name",
    //       },
    //     },
    //   },
    //   inForm: false,
    // },
    {
      name: "package_type_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        addConfig: {
          belongToOptions: {
            resourceName: "packageType",
            filterKeys: ["name", "description"],
            value: "id",
            queryParams: {
              should_paginate: false,
            },
          },
        },
        listConfig: {
          restHasOneResources: {
            name: "package_type.name",
          },
        },
      },
    },
    {
      name: "package_type",
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
      name: "user_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
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
    {
      name: "metadata",
      type: REST_FIELD_TYPES.JSON,
      metaData: {
        addConfig: {
          jsonConfig: {
            jsonFields: ["volume", "weight"],
          },
        },
      },
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
      "name",
      "picture1",
      "status",
      "code",
      "value",
      "package_contents",
      "expedition_requests",
      "price",
      "is_sensitive",
      "should_notify",
      "metadata",
      "currency",
      // "contact_1",
      // "contact_2",
      "package_type",
      "user",
      "concern_type",
      "created_at",
    ],
    api: "packages",
    queryParams: {
      _includes:
        "package_contents,expedition_requests,currency,contact_1,contact_2,package_type,user",
    },
    group: {
      name: "CLIENT",
      type: TYPE_GROUP.SEPARATOR, // Regroupe les ressources dans un menu deroulant
    },
    searchFilter: {
      filterBy: ["name", "code"],
    },
  },
  {
    api: "packages",
    title: "Add package",
    inList: true,
  },
  {
    api: "packages",
    method: TYPE_METHOD_REQUEST.POST,
    body: {
      "_method": TYPE_METHOD_REQUEST.PUT,
    },
  },
  {
    tabsConfig: [
      {
        name: "Package",
        datas: [
          "name",
          "picture1",
          "status",
          "code",
          "value",
          "package_type",
          "user",
          "concern_type",
          "created_at",
        ],
      },
      {
        name: "Package Contents",
        datas: ["package_contents"],
      },
      {
        name: "Expedition Requests",
        datas: ["expedition_requests"],
      },
    ],
    queryParams: {
      _includes: "package_contents,expedition_requests",
    },
  }
);
