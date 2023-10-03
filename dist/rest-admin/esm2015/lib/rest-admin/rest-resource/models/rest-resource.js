import { REST_FIELD_TYPES, TYPE_GROUP, TYPE_METHOD_REQUEST, EXPORT_FORMAT, } from './rest-resource.model';
export class RestResource {
    constructor(mainConfig, fields, listConfig, addConfig, editConfig, detailConfig) {
        this._hasFile = false;
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
        this._mainConfig = mainConfig;
    }
    // Getters
    get name() {
        return this._name;
    }
    get api() {
        return this._api == null ? this.name.toLowerCase() + 's' : this._api;
    }
    get authRequired() {
        return this._authRequired == null ? false : this._authRequired;
    }
    get showInMenu() {
        return this._showInMenu == null ? true : this._showInMenu;
    }
    get icon() {
        if (this._icon == null)
            return 'browser-outline';
        else if (typeof this._icon == 'string')
            return this._icon;
        else
            return { icon: this._icon.icon, pack: this._icon.pack };
    }
    get fields() {
        return this._fields.map((field) => {
            var _a;
            return ({
                name: field.name,
                type: field.type ? field.type : REST_FIELD_TYPES.STRING,
                note: field.note ? field.note : '',
                label: field.label ? field.label : field.name,
                inForm: field.inForm !== undefined ? field.inForm : true,
                metaData: ((_a = field.metaData) === null || _a === void 0 ? void 0 : _a.attributes) !== undefined
                    ? field.metaData
                    : Object.assign(Object.assign({}, field === null || field === void 0 ? void 0 : field.metaData), { attributes: {} }),
                i18n: field.i18n !== undefined ? field.i18n : false,
            });
        });
    }
    get hasFile() {
        return (this.fields.findIndex((field) => [
            REST_FIELD_TYPES.IMAGE,
            REST_FIELD_TYPES.PDF,
            REST_FIELD_TYPES.FILE,
        ].includes(field.type)) >= 0);
    }
    get permissions() {
        return this._mainConfig.permissions ? this._mainConfig.permissions : [];
    }
    // Defini afin de tester les valeurs des metadatas
    // get metaData(): REST_FIELD_METADATA {
    //   const metaData: REST_FIELD_METADATA = {};
    //   this._fields.forEach((field) => {
    //     if (field.metaData && field.metaData.addConfig) {
    //       if (field.metaData.addConfig.mapConfig) {
    //         metaData.addConfig.mapConfig.lattiudeKeyField = field.metaData
    //           .addConfig.mapConfig.lattiudeKeyField
    //           ? field.metaData.addConfig.mapConfig.lattiudeKeyField
    //           : 'latitude';
    //         metaData.addConfig.mapConfig.longitudeKeyField = field.metaData
    //           .addConfig.mapConfig.longitudeKeyField
    //           ? field.metaData.addConfig.mapConfig.longitudeKeyField
    //           : 'longitude';
    //       }
    //     }
    //     switch (metaData.addConfig) {
    //       // case metaData.addConfig?.belongToOptions:
    //       //   metaData.addConfig.belongToOptions = {
    //       //     ...metaData.addConfig?.belongToOptions,
    //       //     value: field?.metaData?.addConfig.belongToOptions?.value
    //       //       ? field?.metaData?.addConfig?.belongToOptions?.value
    //       //       : "id",
    //       //     template: field.metaData.addConfig.belongToOptions.template
    //       //       ? field.metaData.addConfig.belongToOptions.template
    //       //       : field.metaData.addConfig.belongToOptions.filterKeys[0],
    //       //     filterKeys: field.metaData.addConfig.belongToOptions.filterKeys
    //       //       ? field.metaData.addConfig.belongToOptions.filterKeys
    //       //       : ["name"],
    //       //   };
    //       //   break;
    //       default:
    //         break;
    //     }
    //   });
    //   return metaData;
    // }
    get listConfig() {
        var _a, _b;
        const rest = {};
        if (this._listConfig.columns)
            rest.columns = this._listConfig.columns;
        else {
            rest.columns = this.fields.reduce((cumul, item) => {
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
            : 'list of ' + this.name;
        rest.perPage = this._listConfig.perPage ? this._listConfig.perPage : 25;
        rest.title = this._listConfig.title
            ? this._listConfig.title
            : 'List of ' + this.name;
        rest.searchFilter = this._listConfig.searchFilter
            ? this._listConfig.searchFilter
            : { filterBy: [] };
        rest.exportResource = this._listConfig.exportResource === null || this._listConfig.exportResource === undefined ? true : this._listConfig.exportResource;
        if (rest.exportResource) {
            if (!rest.exportConfig) {
                rest.exportConfig = {};
            }
            rest.exportConfig.formats = ((_a = this._listConfig.exportConfig) === null || _a === void 0 ? void 0 : _a.formats) ? this._listConfig.exportConfig.formats : [EXPORT_FORMAT.CSV, EXPORT_FORMAT.EXCEL, EXPORT_FORMAT.PDF, EXPORT_FORMAT.ALL_ZIP];
            rest.exportConfig.columnFile = ((_b = this._listConfig.exportConfig) === null || _b === void 0 ? void 0 : _b.columnFile) ? this._listConfig.exportConfig.columnFile : this._listConfig.columns.map((field) => ({
                key: field,
                label: field,
            }));
        }
        if (rest.group) {
            rest.group = this._listConfig.group;
            rest.group.priority = rest.group.priority ? rest.group.priority : 0;
            rest.group.icon = rest.group.icon ? rest.group.icon : 'folder-outline';
        }
        else
            rest.group = {
                priority: 0,
                name: 'default',
                type: TYPE_GROUP.DEFAULT,
            };
        return rest;
    }
    get addConfig() {
        const rest = {};
        rest.api = this._addConfig.api ? this._addConfig.api : this.api;
        rest.title = this._addConfig.title
            ? this._addConfig.title
            : 'Add ' + this.name;
        rest.method = this._addConfig.method
            ? this._addConfig.method
            : TYPE_METHOD_REQUEST.POST;
        rest.body = this._addConfig.body ? this._addConfig.body : {};
        rest.header = this._addConfig.header ? this._addConfig.header : {};
        return rest;
    }
    get editConfig() {
        const rest = {};
        rest.api = this._editConfig.api ? this._editConfig.api : this.api;
        rest.isLaravel = this._editConfig.isLaravel
            ? this._editConfig.isLaravel
            : false;
        this._hasFile = this.hasFile;
        rest.method = this._editConfig.method
            ? this._editConfig.method
            : TYPE_METHOD_REQUEST.POST;
        rest.body = this._editConfig.body ? this._editConfig.body : {};
        rest.header = this._editConfig.header ? this._editConfig.header : {};
        rest.title = this._editConfig.title
            ? this._editConfig.title
            : 'Edit ' + this.name;
        rest.queryParams = this._editConfig.queryParams
            ? this._editConfig.queryParams
            : this.queryParams;
        return rest;
    }
    get detailConfig() {
        const rest = {};
        rest.api = this._detailConfig.api ? this._detailConfig.api : this.api;
        rest.title = this._detailConfig.title ? this._detailConfig.title : '';
        rest.tabsConfig = this._detailConfig.tabsConfig
            ? this._detailConfig.tabsConfig
            : null;
        rest.queryParams = this._detailConfig.queryParams
            ? this._detailConfig.queryParams
            : this.queryParams;
        rest.preparedStatementQuery = this._detailConfig.preparedStatementQuery
            ? this._detailConfig.preparedStatementQuery
            : null;
        return rest;
    }
    get description() {
        return this._description == null
            ? 'manage ' + this.name
            : this._description;
    }
    get queryParams() {
        return this._queryParams == null ? {} : this._queryParams;
    }
    // Setters
    set name(v) {
        this._name = v;
    }
    set fields(v) {
        this._fields = v;
    }
    set listConfig(v) {
        this._listConfig = v;
    }
    set editConfig(v) {
        this._editConfig = v;
    }
    set detailConfig(v) {
        this._detailConfig = v;
    }
    set api(v) {
        this._api = v;
    }
    set icon(v) {
        this._icon = v;
    }
    set description(v) {
        this._description = v;
    }
    set queryParams(v) {
        this._queryParams = v;
    }
    set authRequired(v) {
        this._authRequired = v;
    }
    set showInMenu(v) {
        this._showInMenu = v;
    }
    set permissions(v) {
        this._permissions = v;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvbW9kZWxzL3Jlc3QtcmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUdMLGdCQUFnQixFQU9oQixVQUFVLEVBQ1YsbUJBQW1CLEVBRW5CLGFBQWEsR0FDZCxNQUFNLHVCQUF1QixDQUFDO0FBRS9CLE1BQU0sT0FBTyxZQUFZO0lBbUJ2QixZQUNFLFVBQXNCLEVBQ3RCLE1BQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLFNBQW9CLEVBQ3BCLFVBQXNCLEVBQ3RCLFlBQTBCO1FBbkJwQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBcUJ2QixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUV6QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0lB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QixDQUFDO0lBRUQsSUFBSSxXQUFXLENBQUMsQ0FBUztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxXQUFXLENBQUMsQ0FBTTtRQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxZQUFZLENBQUMsQ0FBVTtRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxVQUFVLENBQUMsQ0FBVTtRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxXQUFXLENBQUMsQ0FBcUI7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUmVzdEZpZWxkLFxuICBMaXN0Q29uZmlnLFxuICBSRVNUX0ZJRUxEX1RZUEVTLFxuICBBZGRDb25maWcsXG4gIFJFU1RfRklFTERfTUVUQURBVEEsXG4gIE1haW5Db25maWcsXG4gIEVkaXRDb25maWcsXG4gIEN1c3RvbUljb24sXG4gIERldGFpbENvbmZpZyxcbiAgVFlQRV9HUk9VUCxcbiAgVFlQRV9NRVRIT0RfUkVRVUVTVCxcbiAgUGVybWlzc2lvbkNvbmZpZyxcbiAgRVhQT1JUX0ZPUk1BVCxcbn0gZnJvbSAnLi9yZXN0LXJlc291cmNlLm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIFJlc3RSZXNvdXJjZSB7XG4gIHByaXZhdGUgX2FwaTogc3RyaW5nO1xuICBwcml2YXRlIF9kZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIF9pY29uOiBzdHJpbmcgfCBDdXN0b21JY29uO1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2F1dGhSZXF1aXJlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaGFzRmlsZSA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93SW5NZW51OiBib29sZWFuO1xuICBwcml2YXRlIF9wZXJtaXNzaW9uczogUGVybWlzc2lvbkNvbmZpZ1tdO1xuXG4gIHByaXZhdGUgX2ZpZWxkczogUmVzdEZpZWxkW107XG4gIHByaXZhdGUgX2xpc3RDb25maWc6IExpc3RDb25maWc7XG4gIHByaXZhdGUgX2FkZENvbmZpZzogQWRkQ29uZmlnO1xuICBwcml2YXRlIF9lZGl0Q29uZmlnOiBFZGl0Q29uZmlnO1xuICBwcml2YXRlIF9kZXRhaWxDb25maWc6IERldGFpbENvbmZpZztcbiAgcHJpdmF0ZSBfbWFpbkNvbmZpZzogTWFpbkNvbmZpZztcblxuICBwcml2YXRlIF9xdWVyeVBhcmFtczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1haW5Db25maWc6IE1haW5Db25maWcsXG4gICAgZmllbGRzOiBSZXN0RmllbGRbXSxcbiAgICBsaXN0Q29uZmlnOiBMaXN0Q29uZmlnLFxuICAgIGFkZENvbmZpZzogQWRkQ29uZmlnLFxuICAgIGVkaXRDb25maWc6IEVkaXRDb25maWcsXG4gICAgZGV0YWlsQ29uZmlnOiBEZXRhaWxDb25maWdcbiAgKSB7XG4gICAgdGhpcy5fbmFtZSA9IG1haW5Db25maWcubmFtZTtcbiAgICB0aGlzLl9pY29uID0gbWFpbkNvbmZpZy5pY29uO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gbWFpbkNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9hcGkgPSBtYWluQ29uZmlnLmFwaTtcbiAgICB0aGlzLl9hdXRoUmVxdWlyZWQgPSBtYWluQ29uZmlnLmF1dGhSZXF1aXJlZDtcbiAgICB0aGlzLl9zaG93SW5NZW51ID0gbWFpbkNvbmZpZy5zaG93SW5NZW51O1xuXG4gICAgdGhpcy5fZmllbGRzID0gZmllbGRzO1xuICAgIHRoaXMuX2xpc3RDb25maWcgPSBsaXN0Q29uZmlnO1xuICAgIHRoaXMuX2FkZENvbmZpZyA9IGFkZENvbmZpZztcbiAgICB0aGlzLl9lZGl0Q29uZmlnID0gZWRpdENvbmZpZztcbiAgICB0aGlzLl9kZXRhaWxDb25maWcgPSBkZXRhaWxDb25maWc7XG4gICAgdGhpcy5fbWFpbkNvbmZpZyA9IG1haW5Db25maWc7XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIGdldCBhcGkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpID09IG51bGwgPyB0aGlzLm5hbWUudG9Mb3dlckNhc2UoKSArICdzJyA6IHRoaXMuX2FwaTtcbiAgfVxuXG4gIGdldCBhdXRoUmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhSZXF1aXJlZCA9PSBudWxsID8gZmFsc2UgOiB0aGlzLl9hdXRoUmVxdWlyZWQ7XG4gIH1cblxuICBnZXQgc2hvd0luTWVudSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0luTWVudSA9PSBudWxsID8gdHJ1ZSA6IHRoaXMuX3Nob3dJbk1lbnU7XG4gIH1cblxuICBnZXQgaWNvbigpOiBzdHJpbmcgfCBDdXN0b21JY29uIHtcbiAgICBpZiAodGhpcy5faWNvbiA9PSBudWxsKSByZXR1cm4gJ2Jyb3dzZXItb3V0bGluZSc7XG4gICAgZWxzZSBpZiAodHlwZW9mIHRoaXMuX2ljb24gPT0gJ3N0cmluZycpIHJldHVybiB0aGlzLl9pY29uO1xuICAgIGVsc2UgcmV0dXJuIHsgaWNvbjogdGhpcy5faWNvbi5pY29uLCBwYWNrOiB0aGlzLl9pY29uLnBhY2sgfTtcbiAgfVxuXG4gIGdldCBmaWVsZHMoKTogUmVzdEZpZWxkW10ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZHMubWFwKChmaWVsZCkgPT4gKHtcbiAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXG4gICAgICB0eXBlOiBmaWVsZC50eXBlID8gZmllbGQudHlwZSA6IFJFU1RfRklFTERfVFlQRVMuU1RSSU5HLFxuICAgICAgbm90ZTogZmllbGQubm90ZSA/IGZpZWxkLm5vdGUgOiAnJyxcbiAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCA/IGZpZWxkLmxhYmVsIDogZmllbGQubmFtZSxcbiAgICAgIGluRm9ybTogZmllbGQuaW5Gb3JtICE9PSB1bmRlZmluZWQgPyBmaWVsZC5pbkZvcm0gOiB0cnVlLFxuICAgICAgbWV0YURhdGE6XG4gICAgICAgIGZpZWxkLm1ldGFEYXRhPy5hdHRyaWJ1dGVzICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IGZpZWxkLm1ldGFEYXRhXG4gICAgICAgICAgOiB7IC4uLmZpZWxkPy5tZXRhRGF0YSwgYXR0cmlidXRlczoge30gfSxcbiAgICAgIGkxOG46IGZpZWxkLmkxOG4gIT09IHVuZGVmaW5lZCA/IGZpZWxkLmkxOG4gOiBmYWxzZSxcbiAgICB9KSk7XG4gIH1cblxuICBnZXQgaGFzRmlsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5maWVsZHMuZmluZEluZGV4KChmaWVsZCkgPT5cbiAgICAgICAgW1xuICAgICAgICAgIFJFU1RfRklFTERfVFlQRVMuSU1BR0UsXG4gICAgICAgICAgUkVTVF9GSUVMRF9UWVBFUy5QREYsXG4gICAgICAgICAgUkVTVF9GSUVMRF9UWVBFUy5GSUxFLFxuICAgICAgICBdLmluY2x1ZGVzKGZpZWxkLnR5cGUpXG4gICAgICApID49IDBcbiAgICApO1xuICB9XG5cbiAgZ2V0IHBlcm1pc3Npb25zKCk6IFBlcm1pc3Npb25Db25maWdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX21haW5Db25maWcucGVybWlzc2lvbnMgPyB0aGlzLl9tYWluQ29uZmlnLnBlcm1pc3Npb25zIDogW107XG4gIH1cblxuICAvLyBEZWZpbmkgYWZpbiBkZSB0ZXN0ZXIgbGVzIHZhbGV1cnMgZGVzIG1ldGFkYXRhc1xuICAvLyBnZXQgbWV0YURhdGEoKTogUkVTVF9GSUVMRF9NRVRBREFUQSB7XG4gIC8vICAgY29uc3QgbWV0YURhdGE6IFJFU1RfRklFTERfTUVUQURBVEEgPSB7fTtcblxuICAvLyAgIHRoaXMuX2ZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyAgICAgaWYgKGZpZWxkLm1ldGFEYXRhICYmIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZykge1xuICAvLyAgICAgICBpZiAoZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZykge1xuICAvLyAgICAgICAgIG1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubGF0dGl1ZGVLZXlGaWVsZCA9IGZpZWxkLm1ldGFEYXRhXG4gIC8vICAgICAgICAgICAuYWRkQ29uZmlnLm1hcENvbmZpZy5sYXR0aXVkZUtleUZpZWxkXG4gIC8vICAgICAgICAgICA/IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubGF0dGl1ZGVLZXlGaWVsZFxuICAvLyAgICAgICAgICAgOiAnbGF0aXR1ZGUnO1xuICAvLyAgICAgICAgIG1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubG9uZ2l0dWRlS2V5RmllbGQgPSBmaWVsZC5tZXRhRGF0YVxuICAvLyAgICAgICAgICAgLmFkZENvbmZpZy5tYXBDb25maWcubG9uZ2l0dWRlS2V5RmllbGRcbiAgLy8gICAgICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sb25naXR1ZGVLZXlGaWVsZFxuICAvLyAgICAgICAgICAgOiAnbG9uZ2l0dWRlJztcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgICAgc3dpdGNoIChtZXRhRGF0YS5hZGRDb25maWcpIHtcbiAgLy8gICAgICAgLy8gY2FzZSBtZXRhRGF0YS5hZGRDb25maWc/LmJlbG9uZ1RvT3B0aW9uczpcbiAgLy8gICAgICAgLy8gICBtZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zID0ge1xuICAvLyAgICAgICAvLyAgICAgLi4ubWV0YURhdGEuYWRkQ29uZmlnPy5iZWxvbmdUb09wdGlvbnMsXG4gIC8vICAgICAgIC8vICAgICB2YWx1ZTogZmllbGQ/Lm1ldGFEYXRhPy5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zPy52YWx1ZVxuICAvLyAgICAgICAvLyAgICAgICA/IGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnPy5iZWxvbmdUb09wdGlvbnM/LnZhbHVlXG4gIC8vICAgICAgIC8vICAgICAgIDogXCJpZFwiLFxuICAvLyAgICAgICAvLyAgICAgdGVtcGxhdGU6IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnMudGVtcGxhdGVcbiAgLy8gICAgICAgLy8gICAgICAgPyBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLnRlbXBsYXRlXG4gIC8vICAgICAgIC8vICAgICAgIDogZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucy5maWx0ZXJLZXlzWzBdLFxuICAvLyAgICAgICAvLyAgICAgZmlsdGVyS2V5czogZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucy5maWx0ZXJLZXlzXG4gIC8vICAgICAgIC8vICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucy5maWx0ZXJLZXlzXG4gIC8vICAgICAgIC8vICAgICAgIDogW1wibmFtZVwiXSxcbiAgLy8gICAgICAgLy8gICB9O1xuICAvLyAgICAgICAvLyAgIGJyZWFrO1xuXG4gIC8vICAgICAgIGRlZmF1bHQ6XG4gIC8vICAgICAgICAgYnJlYWs7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG5cbiAgLy8gICByZXR1cm4gbWV0YURhdGE7XG4gIC8vIH1cblxuICBnZXQgbGlzdENvbmZpZygpOiBMaXN0Q29uZmlnIHtcbiAgICBjb25zdCByZXN0OiBMaXN0Q29uZmlnID0ge307XG5cbiAgICBpZiAodGhpcy5fbGlzdENvbmZpZy5jb2x1bW5zKSByZXN0LmNvbHVtbnMgPSB0aGlzLl9saXN0Q29uZmlnLmNvbHVtbnM7XG4gICAgZWxzZSB7XG4gICAgICByZXN0LmNvbHVtbnMgPSB0aGlzLmZpZWxkcy5yZWR1Y2U8c3RyaW5nW10+KChjdW11bCwgaXRlbSkgPT4ge1xuICAgICAgICBjdW11bC5wdXNoKGl0ZW0ubmFtZSk7XG4gICAgICAgIHJldHVybiBjdW11bDtcbiAgICAgIH0sIFtdKTtcbiAgICB9XG4gICAgcmVzdC5hcGkgPSB0aGlzLl9saXN0Q29uZmlnLmFwaSA/IHRoaXMuX2xpc3RDb25maWcuYXBpIDogdGhpcy5hcGk7XG4gICAgcmVzdC5ncm91cCA9IHRoaXMuX2xpc3RDb25maWcuZ3JvdXAgPyB0aGlzLl9saXN0Q29uZmlnLmdyb3VwIDogbnVsbDtcblxuICAgIHJlc3QuaGlkZUFkZFN1YkhlYWRlciA9IHRoaXMuX2xpc3RDb25maWcuaGlkZUFkZFN1YkhlYWRlclxuICAgICAgPyB0aGlzLl9saXN0Q29uZmlnLmhpZGVBZGRTdWJIZWFkZXJcbiAgICAgIDogZmFsc2U7XG4gICAgcmVzdC5xdWVyeVBhcmFtcyA9IHRoaXMuX2xpc3RDb25maWcucXVlcnlQYXJhbXNcbiAgICAgID8gdGhpcy5fbGlzdENvbmZpZy5xdWVyeVBhcmFtc1xuICAgICAgOiB0aGlzLnF1ZXJ5UGFyYW1zO1xuICAgIHJlc3QuZGVzY3JpcHRpb24gPSB0aGlzLl9saXN0Q29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICA/IHRoaXMuX2xpc3RDb25maWcuZGVzY3JpcHRpb25cbiAgICAgIDogJ2xpc3Qgb2YgJyArIHRoaXMubmFtZTtcbiAgICByZXN0LnBlclBhZ2UgPSB0aGlzLl9saXN0Q29uZmlnLnBlclBhZ2UgPyB0aGlzLl9saXN0Q29uZmlnLnBlclBhZ2UgOiAyNTtcbiAgICByZXN0LnRpdGxlID0gdGhpcy5fbGlzdENvbmZpZy50aXRsZVxuICAgICAgPyB0aGlzLl9saXN0Q29uZmlnLnRpdGxlXG4gICAgICA6ICdMaXN0IG9mICcgKyB0aGlzLm5hbWU7XG4gICAgcmVzdC5zZWFyY2hGaWx0ZXIgPSB0aGlzLl9saXN0Q29uZmlnLnNlYXJjaEZpbHRlclxuICAgICAgPyB0aGlzLl9saXN0Q29uZmlnLnNlYXJjaEZpbHRlclxuICAgICAgOiB7IGZpbHRlckJ5OiBbXSB9O1xuXG4gICAgcmVzdC5leHBvcnRSZXNvdXJjZSA9IHRoaXMuX2xpc3RDb25maWcuZXhwb3J0UmVzb3VyY2UgPT09IG51bGwgfHwgdGhpcy5fbGlzdENvbmZpZy5leHBvcnRSZXNvdXJjZSA9PT0gdW5kZWZpbmVkICA/ICB0cnVlOiB0aGlzLl9saXN0Q29uZmlnLmV4cG9ydFJlc291cmNlIDtcbiAgICBpZihyZXN0LmV4cG9ydFJlc291cmNlKXtcbiAgICAgIGlmKCFyZXN0LmV4cG9ydENvbmZpZyl7XG4gICAgICAgIHJlc3QuZXhwb3J0Q29uZmlnID0ge307XG4gICAgICB9XG4gICAgICByZXN0LmV4cG9ydENvbmZpZy5mb3JtYXRzID0gdGhpcy5fbGlzdENvbmZpZy5leHBvcnRDb25maWc/LmZvcm1hdHMgPyB0aGlzLl9saXN0Q29uZmlnLmV4cG9ydENvbmZpZy5mb3JtYXRzIDogW0VYUE9SVF9GT1JNQVQuQ1NWLEVYUE9SVF9GT1JNQVQuRVhDRUwsIEVYUE9SVF9GT1JNQVQuUERGLCBFWFBPUlRfRk9STUFULkFMTF9aSVBdO1xuICAgICAgcmVzdC5leHBvcnRDb25maWcuY29sdW1uRmlsZSA9IHRoaXMuX2xpc3RDb25maWcuZXhwb3J0Q29uZmlnPy5jb2x1bW5GaWxlID8gdGhpcy5fbGlzdENvbmZpZy5leHBvcnRDb25maWcuY29sdW1uRmlsZSA6IHRoaXMuX2xpc3RDb25maWcuY29sdW1ucy5tYXAoKGZpZWxkKSA9PiAoe1xuICAgICAgICBrZXk6IGZpZWxkLFxuICAgICAgICBsYWJlbDogZmllbGQsXG4gICAgICB9KSk7XG5cbiAgICB9XG4gICAgaWYgKHJlc3QuZ3JvdXApIHtcbiAgICAgIHJlc3QuZ3JvdXAgPSB0aGlzLl9saXN0Q29uZmlnLmdyb3VwO1xuICAgICAgcmVzdC5ncm91cC5wcmlvcml0eSA9IHJlc3QuZ3JvdXAucHJpb3JpdHkgPyByZXN0Lmdyb3VwLnByaW9yaXR5IDogMDtcbiAgICAgIHJlc3QuZ3JvdXAuaWNvbiA9IHJlc3QuZ3JvdXAuaWNvbiA/IHJlc3QuZ3JvdXAuaWNvbiA6ICdmb2xkZXItb3V0bGluZSc7XG4gICAgfSBlbHNlXG4gICAgICByZXN0Lmdyb3VwID0ge1xuICAgICAgICBwcmlvcml0eTogMCxcbiAgICAgICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgICAgICB0eXBlOiBUWVBFX0dST1VQLkRFRkFVTFQsXG4gICAgICB9O1xuXG4gICAgcmV0dXJuIHJlc3Q7XG4gIH1cblxuICBnZXQgYWRkQ29uZmlnKCk6IEFkZENvbmZpZyB7XG4gICAgY29uc3QgcmVzdDogQWRkQ29uZmlnID0ge307XG5cbiAgICByZXN0LmFwaSA9IHRoaXMuX2FkZENvbmZpZy5hcGkgPyB0aGlzLl9hZGRDb25maWcuYXBpIDogdGhpcy5hcGk7XG4gICAgcmVzdC50aXRsZSA9IHRoaXMuX2FkZENvbmZpZy50aXRsZVxuICAgICAgPyB0aGlzLl9hZGRDb25maWcudGl0bGVcbiAgICAgIDogJ0FkZCAnICsgdGhpcy5uYW1lO1xuXG4gICAgcmVzdC5tZXRob2QgPSB0aGlzLl9hZGRDb25maWcubWV0aG9kXG4gICAgICA/IHRoaXMuX2FkZENvbmZpZy5tZXRob2RcbiAgICAgIDogVFlQRV9NRVRIT0RfUkVRVUVTVC5QT1NUO1xuXG4gICAgcmVzdC5ib2R5ID0gdGhpcy5fYWRkQ29uZmlnLmJvZHkgPyB0aGlzLl9hZGRDb25maWcuYm9keSA6IHt9O1xuICAgIHJlc3QuaGVhZGVyID0gdGhpcy5fYWRkQ29uZmlnLmhlYWRlciA/IHRoaXMuX2FkZENvbmZpZy5oZWFkZXIgOiB7fTtcbiAgICByZXR1cm4gcmVzdDtcbiAgfVxuXG4gIGdldCBlZGl0Q29uZmlnKCk6IEVkaXRDb25maWcge1xuICAgIGNvbnN0IHJlc3Q6IEVkaXRDb25maWcgPSB7fTtcbiAgICByZXN0LmFwaSA9IHRoaXMuX2VkaXRDb25maWcuYXBpID8gdGhpcy5fZWRpdENvbmZpZy5hcGkgOiB0aGlzLmFwaTtcbiAgICByZXN0LmlzTGFyYXZlbCA9IHRoaXMuX2VkaXRDb25maWcuaXNMYXJhdmVsXG4gICAgICA/IHRoaXMuX2VkaXRDb25maWcuaXNMYXJhdmVsXG4gICAgICA6IGZhbHNlO1xuICAgIHRoaXMuX2hhc0ZpbGUgPSB0aGlzLmhhc0ZpbGU7XG5cbiAgICByZXN0Lm1ldGhvZCA9IHRoaXMuX2VkaXRDb25maWcubWV0aG9kXG4gICAgICA/IHRoaXMuX2VkaXRDb25maWcubWV0aG9kXG4gICAgICA6IFRZUEVfTUVUSE9EX1JFUVVFU1QuUE9TVDtcblxuICAgIHJlc3QuYm9keSA9IHRoaXMuX2VkaXRDb25maWcuYm9keSA/IHRoaXMuX2VkaXRDb25maWcuYm9keSA6IHt9O1xuICAgIHJlc3QuaGVhZGVyID0gdGhpcy5fZWRpdENvbmZpZy5oZWFkZXIgPyB0aGlzLl9lZGl0Q29uZmlnLmhlYWRlciA6IHt9O1xuXG4gICAgcmVzdC50aXRsZSA9IHRoaXMuX2VkaXRDb25maWcudGl0bGVcbiAgICAgID8gdGhpcy5fZWRpdENvbmZpZy50aXRsZVxuICAgICAgOiAnRWRpdCAnICsgdGhpcy5uYW1lO1xuICAgIHJlc3QucXVlcnlQYXJhbXMgPSB0aGlzLl9lZGl0Q29uZmlnLnF1ZXJ5UGFyYW1zXG4gICAgICA/IHRoaXMuX2VkaXRDb25maWcucXVlcnlQYXJhbXNcbiAgICAgIDogdGhpcy5xdWVyeVBhcmFtcztcbiAgICByZXR1cm4gcmVzdDtcbiAgfVxuXG4gIGdldCBkZXRhaWxDb25maWcoKTogRGV0YWlsQ29uZmlnIHtcbiAgICBjb25zdCByZXN0OiBEZXRhaWxDb25maWcgPSB7fTtcbiAgICByZXN0LmFwaSA9IHRoaXMuX2RldGFpbENvbmZpZy5hcGkgPyB0aGlzLl9kZXRhaWxDb25maWcuYXBpIDogdGhpcy5hcGk7XG4gICAgcmVzdC50aXRsZSA9IHRoaXMuX2RldGFpbENvbmZpZy50aXRsZSA/IHRoaXMuX2RldGFpbENvbmZpZy50aXRsZSA6ICcnO1xuICAgIHJlc3QudGFic0NvbmZpZyA9IHRoaXMuX2RldGFpbENvbmZpZy50YWJzQ29uZmlnXG4gICAgICA/IHRoaXMuX2RldGFpbENvbmZpZy50YWJzQ29uZmlnXG4gICAgICA6IG51bGw7XG4gICAgcmVzdC5xdWVyeVBhcmFtcyA9IHRoaXMuX2RldGFpbENvbmZpZy5xdWVyeVBhcmFtc1xuICAgICAgPyB0aGlzLl9kZXRhaWxDb25maWcucXVlcnlQYXJhbXNcbiAgICAgIDogdGhpcy5xdWVyeVBhcmFtcztcblxuICAgIHJlc3QucHJlcGFyZWRTdGF0ZW1lbnRRdWVyeSA9IHRoaXMuX2RldGFpbENvbmZpZy5wcmVwYXJlZFN0YXRlbWVudFF1ZXJ5XG4gICAgICA/IHRoaXMuX2RldGFpbENvbmZpZy5wcmVwYXJlZFN0YXRlbWVudFF1ZXJ5XG4gICAgICA6IG51bGw7XG4gICAgcmV0dXJuIHJlc3Q7XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb24gPT0gbnVsbFxuICAgICAgPyAnbWFuYWdlICcgKyB0aGlzLm5hbWVcbiAgICAgIDogdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgcXVlcnlQYXJhbXMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlQYXJhbXMgPT0gbnVsbCA/IHt9IDogdGhpcy5fcXVlcnlQYXJhbXM7XG4gIH1cblxuICAvLyBTZXR0ZXJzXG4gIHNldCBuYW1lKHY6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2O1xuICB9XG5cbiAgc2V0IGZpZWxkcyh2OiBSZXN0RmllbGRbXSkge1xuICAgIHRoaXMuX2ZpZWxkcyA9IHY7XG4gIH1cblxuICBzZXQgbGlzdENvbmZpZyh2OiBMaXN0Q29uZmlnKSB7XG4gICAgdGhpcy5fbGlzdENvbmZpZyA9IHY7XG4gIH1cblxuICBzZXQgZWRpdENvbmZpZyh2OiBFZGl0Q29uZmlnKSB7XG4gICAgdGhpcy5fZWRpdENvbmZpZyA9IHY7XG4gIH1cblxuICBzZXQgZGV0YWlsQ29uZmlnKHY6IERldGFpbENvbmZpZykge1xuICAgIHRoaXMuX2RldGFpbENvbmZpZyA9IHY7XG4gIH1cblxuICBzZXQgYXBpKHY6IHN0cmluZykge1xuICAgIHRoaXMuX2FwaSA9IHY7XG4gIH1cblxuICBzZXQgaWNvbih2OiBzdHJpbmcgfCBDdXN0b21JY29uKSB7XG4gICAgdGhpcy5faWNvbiA9IHY7XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24odjogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2O1xuICB9XG5cbiAgc2V0IHF1ZXJ5UGFyYW1zKHY6IGFueSkge1xuICAgIHRoaXMuX3F1ZXJ5UGFyYW1zID0gdjtcbiAgfVxuXG4gIHNldCBhdXRoUmVxdWlyZWQodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2F1dGhSZXF1aXJlZCA9IHY7XG4gIH1cblxuICBzZXQgc2hvd0luTWVudSh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0luTWVudSA9IHY7XG4gIH1cblxuICBzZXQgcGVybWlzc2lvbnModjogUGVybWlzc2lvbkNvbmZpZ1tdKSB7XG4gICAgdGhpcy5fcGVybWlzc2lvbnMgPSB2O1xuICB9XG59XG4iXX0=