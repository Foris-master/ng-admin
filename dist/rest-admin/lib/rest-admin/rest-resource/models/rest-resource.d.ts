import { RestField, ListConfig, AddConfig, MainConfig, EditConfig, CustomIcon, DetailConfig } from './rest-resource.model';
export declare class RestResource {
    private _api;
    private _description;
    private _icon;
    private _name;
    private _authRequired;
    private _hasFile;
    private _showInMenu;
    private _permissions;
    private _fields;
    private _listConfig;
    private _addConfig;
    private _editConfig;
    private _detailConfig;
    private _queryParams;
    constructor(mainConfig: MainConfig, fields: RestField[], listConfig: ListConfig, addConfig: AddConfig, editConfig: EditConfig, detailConfig: DetailConfig);
    get name(): string;
    get api(): string;
    get authRequired(): boolean;
    get showInMenu(): boolean;
    get icon(): string | CustomIcon;
    get fields(): RestField[];
    get hasFile(): boolean;
    get permissions(): string[];
    get listConfig(): ListConfig;
    get addConfig(): AddConfig;
    get editConfig(): EditConfig;
    get detailConfig(): DetailConfig;
    get description(): string;
    get queryParams(): any;
    set name(v: string);
    set fields(v: RestField[]);
    set listConfig(v: ListConfig);
    set editConfig(v: EditConfig);
    set detailConfig(v: DetailConfig);
    set api(v: string);
    set icon(v: string | CustomIcon);
    set description(v: string);
    set queryParams(v: any);
    set authRequired(v: boolean);
    set showInMenu(v: boolean);
    set permissions(v: string[]);
}
