import {
  RestField,
  ListConfig,
  REST_FIELD_TYPES,
  AddConfig,
  REST_FIELD_METADATA,
  MainConfig,
  EditConfig,
  CustomIcon,
  DetailConfig,
} from "./rest-resource.model";

export class RestResource {
  private _api: string;
  private _description: string;
  private _icon: string | CustomIcon;
  private _name: string;
  private _authRequired: boolean;
  private _showInMenu: boolean;

  private _fields: RestField[];
  private _listConfig: ListConfig;
  private _addConfig: AddConfig;
  private _editConfig: EditConfig;
  private _detailConfig: DetailConfig;

  private _queryParams: any;

  constructor(
    mainConfig: MainConfig,
    fields: RestField[],
    listConfig: ListConfig,
    addConfig: AddConfig,
    editConfig: EditConfig,
    detailConfig: DetailConfig
  ) {
    this._name = mainConfig.name;
    this._icon = mainConfig.icon;
    this._description = mainConfig.description;
    this._api = mainConfig.api;
    this._authRequired = mainConfig.authRequired;
    this._showInMenu = mainConfig.showInMenu;

    this._fields = fields;
    this._listConfig = listConfig;
    this._addConfig = addConfig;
    this._editConfig = editConfig;
    this._detailConfig = detailConfig;
  }

  // Getters

  get name(): string {
    return this._name;
  }

  get api(): string {
    return this._api == null ? this.name.toLowerCase() + "s" : this._api;
  }

  get authRequired(): boolean {
    return this._authRequired == null ? false : this._authRequired;
  }

  get showInMenu(): boolean {
    return this._showInMenu == null ? true : this._showInMenu;
  }

  get icon(): string | CustomIcon {
    if (this._icon == null) return "browser-outline";
    else if (typeof this._icon == "string") return this._icon;
    else return { icon: this._icon.icon, pack: this._icon.pack };
  }

  get fields(): RestField[] {
    return this._fields.map((field) => ({
      name: field.name,
      type: field.type ? field.type : REST_FIELD_TYPES.STRING,
      label: field.label ? field.label : field.name,
      metaData: field.metaData,
    }));
  }

  // Defini afin de tester les valeurs des metadatas
  // get metaData(): REST_FIELD_METADATA {
  //   const metaData: REST_FIELD_METADATA = {};

  //   this._fields.forEach((field) => {
  //     switch (metaData.addConfig) {
  //       case metaData.addConfig?.belongToOptions:
  //         metaData.addConfig.belongToOptions = {
  //           ...metaData.addConfig?.belongToOptions,
  //           value: field?.metaData?.addConfig.belongToOptions?.value
  //             ? field?.metaData?.addConfig?.belongToOptions?.value
  //             : "id",
  //           template: field.metaData.addConfig.belongToOptions.template
  //             ? field.metaData.addConfig.belongToOptions.template
  //             : field.metaData.addConfig.belongToOptions.filterKeys[0],
  //           filterKeys: field.metaData.addConfig.belongToOptions.filterKeys
  //             ? field.metaData.addConfig.belongToOptions.filterKeys
  //             : ["name"],
  //         };
  //         break;

  //       default:
  //         break;
  //     }
  //   });

  //   return metaData;
  // }

  get listConfig(): ListConfig {
    const rest: ListConfig = {};

    if (this._listConfig.columns) rest.columns = this._listConfig.columns;
    else {
      rest.columns = this.fields.reduce<string[]>((cumul, item) => {
        cumul.push(item.name);
        return cumul;
      }, []);
    }
    rest.api = this._listConfig.api ? this._listConfig.api : this.api;
    rest.group = this._listConfig.group ? this._listConfig.group : null;

    rest.hideAddSubHeader = this._listConfig.hideAddSubHeader
      ? this._listConfig.hideAddSubHeader
      : false;
    rest.queryParams = this._listConfig.queryParams
      ? this._listConfig.queryParams
      : this.queryParams;
    rest.description = this._listConfig.description
      ? this._listConfig.description
      : "list of " + this.name;
    rest.perPage = this._listConfig.perPage ? this._listConfig.perPage : 25;
    rest.title = this._listConfig.title ? this._listConfig.title : "";
    rest.searchFilter = this._listConfig.searchFilter
      ? this._listConfig.searchFilter
      : null;
    // rest.orderBy= this._listConfig.orderBy? this._listConfig.description : 'list of '+ this.getName();
    return rest;
  }

  get addConfig(): ListConfig {
    const rest: AddConfig = {};

    rest.api = this._addConfig.api ? this._addConfig.api : this.api;
    rest.title = this._addConfig.title ? this._addConfig.title : "";
    return rest;
  }

  get editConfig(): EditConfig {
    const rest: EditConfig = {};
    rest.api = this._editConfig.api ? this._editConfig.api : this.api;
    rest.title = this._editConfig.title ? this._editConfig.title : "";
    rest.queryParams = this._editConfig.queryParams
      ? this._editConfig.queryParams
      : this.queryParams;
    return rest;
  }

  get detailConfig(): DetailConfig {
    const rest: DetailConfig = {};
    rest.api = this._detailConfig.api ? this._detailConfig.api : this.api;
    rest.title = this._detailConfig.title ? this._detailConfig.title : "";
    rest.queryParams = this._detailConfig.queryParams
      ? this._detailConfig.queryParams
      : this.queryParams;
    return rest;
  }

  get description(): string {
    return this._description == null
      ? "manage " + this.name
      : this._description;
  }

  get queryParams(): any {
    return this._queryParams == null ? {} : this._queryParams;
  }

  // Setters
  set name(v: string) {
    this._name = v;
  }

  set fields(v: RestField[]) {
    this._fields = v;
  }

  set listConfig(v: ListConfig) {
    this._listConfig = v;
  }

  set editConfig(v: EditConfig) {
    this._editConfig = v;
  }

  set detailConfig(v: DetailConfig) {
    this._detailConfig = v;
  }

  set api(v: string) {
    this._api = v;
  }

  set icon(v: string | CustomIcon) {
    this._icon = v;
  }

  set description(v: string) {
    this._description = v;
  }

  set queryParams(v: any) {
    this._queryParams = v;
  }

  set authRequired(v: boolean) {
    this._authRequired = v;
  }

  set showInMenu(v: boolean) {
    this._showInMenu = v;
  }
}
