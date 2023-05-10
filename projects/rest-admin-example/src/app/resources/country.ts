import {
  RestResource,
  REST_FIELD_TYPES,
  TYPE_GROUP,
  TYPE_METHOD_REQUEST,
} from 'rest-admin';

export const country = new RestResource(
  {
    name: 'country',
    api: 'countries',
    icon: {
      icon: 'flag',
      pack: 'fas',
    },
  },
  [
    {
      name: 'id',
      type: REST_FIELD_TYPES.NUMBER,
      inForm: false,
    },
    {
      name: 'flag',
      type: REST_FIELD_TYPES.IMAGE,
      metaData: {
        listConfig: {
          style:
            'max-width: 100px;border-radius: 5px;box-shadow: 5px 3px gray;',
        },
      },
    },
    {
      name: 'name',
      // type: REST_FIELD_TYPES.JSON,
      // i18n: true,
      // metaData: {
      //   addConfig: {
      //     jsonConfig: {
      //       jsonFields: ["fr", "en"],
      //       // isOpen: true,
      //     },
      //   },
      // },
    },
    {
      name: 'full_name',
    },
    {
      name: 'capital',
    },
    {
      name: 'currency',
    },
    {
      name: 'citizenship',
    },
    {
      name: 'currency_code',
    },
    {
      name: 'country_code',
    },
    {
      name: 'currency_sub_unit',
    },
    {
      name: 'currency_symbol',
    },
    {
      name: 'currency_decimals',
      type: REST_FIELD_TYPES.NUMBER,
    },
    {
      name: 'iso_3166_2',
    },
    {
      name: 'iso_3166_3',
    },
    {
      name: 'region_code',
      type: REST_FIELD_TYPES.NUMBER,
    },
    {
      name: 'sub_region_code',
      type: REST_FIELD_TYPES.NUMBER,
    },
    {
      name: 'calling_code',
      type: REST_FIELD_TYPES.NUMBER,
    },

    {
      name: 'is_covered',
      type: REST_FIELD_TYPES.BOOLEAN,
    },
    {
      name: 'created_at',
      type: REST_FIELD_TYPES.DATE,
      inForm: false,
    },
    {
      name: 'updated_at',
      type: REST_FIELD_TYPES.DATE,
      inForm: false,
    },
  ],
  {
    columns: ['id', 'name', 'capital', 'flag', 'calling_code'],
    group: {
      name: 'CLIENT',
      type: TYPE_GROUP.SEPARATOR, // Regroupe les ressources dans un menu deroulant
    },
    // searchFilter: {
    //   filterBy: ['name', 'capital', 'calling_code'],
    // },
  },
  {},
  {
    method: TYPE_METHOD_REQUEST.POST,
    body: {
      _method: TYPE_METHOD_REQUEST.PUT,
    },
  },
  {
    // tabsConfig: [
    //   {
    //     name: "Informations",
    //     datas: ["id", "name"],
    //   },
    //   {
    //     name: "Infos secondaires",
    //     datas: ["flag", "calling_code"],
    //   },
    //   {
    //     name: "Infos monétaires",
    //     datas: ["full_name", "capital"],
    //   },
    // ],
  }
);
