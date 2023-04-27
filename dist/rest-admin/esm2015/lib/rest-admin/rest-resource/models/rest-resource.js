import { REST_FIELD_TYPES, TYPE_GROUP, TYPE_METHOD_REQUEST, } from './rest-resource.model';
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
                metaData: ((_a = field.metaData) === null || _a === void 0 ? void 0 : _a.attributes) !== undefined ? field.metaData : Object.assign(Object.assign({}, field === null || field === void 0 ? void 0 : field.metaData), { attributes: {} }),
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
        return this._permissions == null ? [] : this._permissions;
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
    get listConfig() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvbW9kZWxzL3Jlc3QtcmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUdMLGdCQUFnQixFQU9oQixVQUFVLEVBQ1YsbUJBQW1CLEdBQ3BCLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsTUFBTSxPQUFPLFlBQVk7SUFrQnZCLFlBQ0UsVUFBc0IsRUFDdEIsTUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsU0FBb0IsRUFDcEIsVUFBc0IsRUFDdEIsWUFBMEI7UUFsQnBCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFvQnZCLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBRXpDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxVQUFVO0lBRVYsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FB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SUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksWUFBWSxDQUFDLENBQVU7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksVUFBVSxDQUFDLENBQVU7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksV0FBVyxDQUFDLENBQVc7UUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUmVzdEZpZWxkLFxuICBMaXN0Q29uZmlnLFxuICBSRVNUX0ZJRUxEX1RZUEVTLFxuICBBZGRDb25maWcsXG4gIFJFU1RfRklFTERfTUVUQURBVEEsXG4gIE1haW5Db25maWcsXG4gIEVkaXRDb25maWcsXG4gIEN1c3RvbUljb24sXG4gIERldGFpbENvbmZpZyxcbiAgVFlQRV9HUk9VUCxcbiAgVFlQRV9NRVRIT0RfUkVRVUVTVCxcbn0gZnJvbSAnLi9yZXN0LXJlc291cmNlLm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIFJlc3RSZXNvdXJjZSB7XG4gIHByaXZhdGUgX2FwaTogc3RyaW5nO1xuICBwcml2YXRlIF9kZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIF9pY29uOiBzdHJpbmcgfCBDdXN0b21JY29uO1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2F1dGhSZXF1aXJlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaGFzRmlsZSA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93SW5NZW51OiBib29sZWFuO1xuICBwcml2YXRlIF9wZXJtaXNzaW9uczogc3RyaW5nW107XG5cbiAgcHJpdmF0ZSBfZmllbGRzOiBSZXN0RmllbGRbXTtcbiAgcHJpdmF0ZSBfbGlzdENvbmZpZzogTGlzdENvbmZpZztcbiAgcHJpdmF0ZSBfYWRkQ29uZmlnOiBBZGRDb25maWc7XG4gIHByaXZhdGUgX2VkaXRDb25maWc6IEVkaXRDb25maWc7XG4gIHByaXZhdGUgX2RldGFpbENvbmZpZzogRGV0YWlsQ29uZmlnO1xuXG4gIHByaXZhdGUgX3F1ZXJ5UGFyYW1zOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbWFpbkNvbmZpZzogTWFpbkNvbmZpZyxcbiAgICBmaWVsZHM6IFJlc3RGaWVsZFtdLFxuICAgIGxpc3RDb25maWc6IExpc3RDb25maWcsXG4gICAgYWRkQ29uZmlnOiBBZGRDb25maWcsXG4gICAgZWRpdENvbmZpZzogRWRpdENvbmZpZyxcbiAgICBkZXRhaWxDb25maWc6IERldGFpbENvbmZpZ1xuICApIHtcbiAgICB0aGlzLl9uYW1lID0gbWFpbkNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX2ljb24gPSBtYWluQ29uZmlnLmljb247XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBtYWluQ29uZmlnLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2FwaSA9IG1haW5Db25maWcuYXBpO1xuICAgIHRoaXMuX2F1dGhSZXF1aXJlZCA9IG1haW5Db25maWcuYXV0aFJlcXVpcmVkO1xuICAgIHRoaXMuX3Nob3dJbk1lbnUgPSBtYWluQ29uZmlnLnNob3dJbk1lbnU7XG5cbiAgICB0aGlzLl9maWVsZHMgPSBmaWVsZHM7XG4gICAgdGhpcy5fbGlzdENvbmZpZyA9IGxpc3RDb25maWc7XG4gICAgdGhpcy5fYWRkQ29uZmlnID0gYWRkQ29uZmlnO1xuICAgIHRoaXMuX2VkaXRDb25maWcgPSBlZGl0Q29uZmlnO1xuICAgIHRoaXMuX2RldGFpbENvbmZpZyA9IGRldGFpbENvbmZpZztcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgZ2V0IGFwaSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9hcGkgPT0gbnVsbCA/IHRoaXMubmFtZS50b0xvd2VyQ2FzZSgpICsgJ3MnIDogdGhpcy5fYXBpO1xuICB9XG5cbiAgZ2V0IGF1dGhSZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aFJlcXVpcmVkID09IG51bGwgPyBmYWxzZSA6IHRoaXMuX2F1dGhSZXF1aXJlZDtcbiAgfVxuXG4gIGdldCBzaG93SW5NZW51KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93SW5NZW51ID09IG51bGwgPyB0cnVlIDogdGhpcy5fc2hvd0luTWVudTtcbiAgfVxuXG4gIGdldCBpY29uKCk6IHN0cmluZyB8IEN1c3RvbUljb24ge1xuICAgIGlmICh0aGlzLl9pY29uID09IG51bGwpIHJldHVybiAnYnJvd3Nlci1vdXRsaW5lJztcbiAgICBlbHNlIGlmICh0eXBlb2YgdGhpcy5faWNvbiA9PSAnc3RyaW5nJykgcmV0dXJuIHRoaXMuX2ljb247XG4gICAgZWxzZSByZXR1cm4geyBpY29uOiB0aGlzLl9pY29uLmljb24sIHBhY2s6IHRoaXMuX2ljb24ucGFjayB9O1xuICB9XG5cbiAgZ2V0IGZpZWxkcygpOiBSZXN0RmllbGRbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkcy5tYXAoKGZpZWxkKSA9PiAoe1xuICAgICAgbmFtZTogZmllbGQubmFtZSxcbiAgICAgIHR5cGU6IGZpZWxkLnR5cGUgPyBmaWVsZC50eXBlIDogUkVTVF9GSUVMRF9UWVBFUy5TVFJJTkcsXG4gICAgICBub3RlOiBmaWVsZC5ub3RlID8gZmllbGQubm90ZSA6ICcnLFxuICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsID8gZmllbGQubGFiZWwgOiBmaWVsZC5uYW1lLFxuICAgICAgaW5Gb3JtOiBmaWVsZC5pbkZvcm0gIT09IHVuZGVmaW5lZCA/IGZpZWxkLmluRm9ybSA6IHRydWUsXG4gICAgICBtZXRhRGF0YTogZmllbGQubWV0YURhdGE/LmF0dHJpYnV0ZXMgIT09IHVuZGVmaW5lZCA/IGZpZWxkLm1ldGFEYXRhIDogey4uLmZpZWxkPy5tZXRhRGF0YSwgIGF0dHJpYnV0ZXM6IHt9fSxcbiAgICAgIGkxOG46IGZpZWxkLmkxOG4gIT09IHVuZGVmaW5lZCA/IGZpZWxkLmkxOG4gOiBmYWxzZSxcbiAgICB9KSk7XG4gIH1cblxuICBnZXQgaGFzRmlsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5maWVsZHMuZmluZEluZGV4KChmaWVsZCkgPT5cbiAgICAgICAgW1xuICAgICAgICAgIFJFU1RfRklFTERfVFlQRVMuSU1BR0UsXG4gICAgICAgICAgUkVTVF9GSUVMRF9UWVBFUy5QREYsXG4gICAgICAgICAgUkVTVF9GSUVMRF9UWVBFUy5GSUxFLFxuICAgICAgICBdLmluY2x1ZGVzKGZpZWxkLnR5cGUpXG4gICAgICApID49IDBcbiAgICApO1xuICB9XG5cbiAgZ2V0IHBlcm1pc3Npb25zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fcGVybWlzc2lvbnMgPT0gbnVsbCA/IFtdIDogdGhpcy5fcGVybWlzc2lvbnM7XG4gIH1cblxuICAvLyBEZWZpbmkgYWZpbiBkZSB0ZXN0ZXIgbGVzIHZhbGV1cnMgZGVzIG1ldGFkYXRhc1xuICAvLyBnZXQgbWV0YURhdGEoKTogUkVTVF9GSUVMRF9NRVRBREFUQSB7XG4gIC8vICAgY29uc3QgbWV0YURhdGE6IFJFU1RfRklFTERfTUVUQURBVEEgPSB7fTtcblxuICAvLyAgIHRoaXMuX2ZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyAgICAgc3dpdGNoIChtZXRhRGF0YS5hZGRDb25maWcpIHtcbiAgLy8gICAgICAgY2FzZSBtZXRhRGF0YS5hZGRDb25maWc/LmJlbG9uZ1RvT3B0aW9uczpcbiAgLy8gICAgICAgICBtZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zID0ge1xuICAvLyAgICAgICAgICAgLi4ubWV0YURhdGEuYWRkQ29uZmlnPy5iZWxvbmdUb09wdGlvbnMsXG4gIC8vICAgICAgICAgICB2YWx1ZTogZmllbGQ/Lm1ldGFEYXRhPy5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zPy52YWx1ZVxuICAvLyAgICAgICAgICAgICA/IGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnPy5iZWxvbmdUb09wdGlvbnM/LnZhbHVlXG4gIC8vICAgICAgICAgICAgIDogXCJpZFwiLFxuICAvLyAgICAgICAgICAgdGVtcGxhdGU6IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnMudGVtcGxhdGVcbiAgLy8gICAgICAgICAgICAgPyBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLnRlbXBsYXRlXG4gIC8vICAgICAgICAgICAgIDogZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucy5maWx0ZXJLZXlzWzBdLFxuICAvLyAgICAgICAgICAgZmlsdGVyS2V5czogZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucy5maWx0ZXJLZXlzXG4gIC8vICAgICAgICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucy5maWx0ZXJLZXlzXG4gIC8vICAgICAgICAgICAgIDogW1wibmFtZVwiXSxcbiAgLy8gICAgICAgICB9O1xuICAvLyAgICAgICAgIGJyZWFrO1xuXG4gIC8vICAgICAgIGRlZmF1bHQ6XG4gIC8vICAgICAgICAgYnJlYWs7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG5cbiAgLy8gICByZXR1cm4gbWV0YURhdGE7XG4gIC8vIH1cblxuICBnZXQgbGlzdENvbmZpZygpOiBMaXN0Q29uZmlnIHtcbiAgICBjb25zdCByZXN0OiBMaXN0Q29uZmlnID0ge307XG5cbiAgICBpZiAodGhpcy5fbGlzdENvbmZpZy5jb2x1bW5zKSByZXN0LmNvbHVtbnMgPSB0aGlzLl9saXN0Q29uZmlnLmNvbHVtbnM7XG4gICAgZWxzZSB7XG4gICAgICByZXN0LmNvbHVtbnMgPSB0aGlzLmZpZWxkcy5yZWR1Y2U8c3RyaW5nW10+KChjdW11bCwgaXRlbSkgPT4ge1xuICAgICAgICBjdW11bC5wdXNoKGl0ZW0ubmFtZSk7XG4gICAgICAgIHJldHVybiBjdW11bDtcbiAgICAgIH0sIFtdKTtcbiAgICB9XG4gICAgcmVzdC5hcGkgPSB0aGlzLl9saXN0Q29uZmlnLmFwaSA/IHRoaXMuX2xpc3RDb25maWcuYXBpIDogdGhpcy5hcGk7XG4gICAgcmVzdC5ncm91cCA9IHRoaXMuX2xpc3RDb25maWcuZ3JvdXAgPyB0aGlzLl9saXN0Q29uZmlnLmdyb3VwIDogbnVsbDtcblxuICAgIHJlc3QuaGlkZUFkZFN1YkhlYWRlciA9IHRoaXMuX2xpc3RDb25maWcuaGlkZUFkZFN1YkhlYWRlclxuICAgICAgPyB0aGlzLl9saXN0Q29uZmlnLmhpZGVBZGRTdWJIZWFkZXJcbiAgICAgIDogZmFsc2U7XG4gICAgcmVzdC5xdWVyeVBhcmFtcyA9IHRoaXMuX2xpc3RDb25maWcucXVlcnlQYXJhbXNcbiAgICAgID8gdGhpcy5fbGlzdENvbmZpZy5xdWVyeVBhcmFtc1xuICAgICAgOiB0aGlzLnF1ZXJ5UGFyYW1zO1xuICAgIHJlc3QuZGVzY3JpcHRpb24gPSB0aGlzLl9saXN0Q29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICA/IHRoaXMuX2xpc3RDb25maWcuZGVzY3JpcHRpb25cbiAgICAgIDogJ2xpc3Qgb2YgJyArIHRoaXMubmFtZTtcbiAgICByZXN0LnBlclBhZ2UgPSB0aGlzLl9saXN0Q29uZmlnLnBlclBhZ2UgPyB0aGlzLl9saXN0Q29uZmlnLnBlclBhZ2UgOiAyNTtcbiAgICByZXN0LnRpdGxlID0gdGhpcy5fbGlzdENvbmZpZy50aXRsZVxuICAgICAgPyB0aGlzLl9saXN0Q29uZmlnLnRpdGxlXG4gICAgICA6ICdMaXN0IG9mICcgKyB0aGlzLm5hbWU7XG4gICAgcmVzdC5zZWFyY2hGaWx0ZXIgPSB0aGlzLl9saXN0Q29uZmlnLnNlYXJjaEZpbHRlclxuICAgICAgPyB0aGlzLl9saXN0Q29uZmlnLnNlYXJjaEZpbHRlclxuICAgICAgOiB7IGZpbHRlckJ5OiBbXSB9O1xuICAgIGlmIChyZXN0Lmdyb3VwKSB7XG4gICAgICByZXN0Lmdyb3VwID0gdGhpcy5fbGlzdENvbmZpZy5ncm91cDtcbiAgICAgIHJlc3QuZ3JvdXAucHJpb3JpdHkgPSByZXN0Lmdyb3VwLnByaW9yaXR5ID8gcmVzdC5ncm91cC5wcmlvcml0eSA6IDA7XG4gICAgICByZXN0Lmdyb3VwLmljb24gPSByZXN0Lmdyb3VwLmljb24gPyByZXN0Lmdyb3VwLmljb24gOiAnZm9sZGVyLW91dGxpbmUnO1xuICAgIH0gZWxzZVxuICAgICAgcmVzdC5ncm91cCA9IHtcbiAgICAgICAgcHJpb3JpdHk6IDAsXG4gICAgICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICAgICAgdHlwZTogVFlQRV9HUk9VUC5ERUZBVUxULFxuICAgICAgfTtcblxuICAgIHJldHVybiByZXN0O1xuICB9XG5cbiAgZ2V0IGFkZENvbmZpZygpOiBBZGRDb25maWcge1xuICAgIGNvbnN0IHJlc3Q6IEFkZENvbmZpZyA9IHt9O1xuXG4gICAgcmVzdC5hcGkgPSB0aGlzLl9hZGRDb25maWcuYXBpID8gdGhpcy5fYWRkQ29uZmlnLmFwaSA6IHRoaXMuYXBpO1xuICAgIHJlc3QudGl0bGUgPSB0aGlzLl9hZGRDb25maWcudGl0bGVcbiAgICAgID8gdGhpcy5fYWRkQ29uZmlnLnRpdGxlXG4gICAgICA6ICdBZGQgJyArIHRoaXMubmFtZTtcblxuICAgIHJlc3QubWV0aG9kID0gdGhpcy5fYWRkQ29uZmlnLm1ldGhvZFxuICAgICAgPyB0aGlzLl9hZGRDb25maWcubWV0aG9kXG4gICAgICA6IFRZUEVfTUVUSE9EX1JFUVVFU1QuUE9TVDtcblxuICAgIHJlc3QuYm9keSA9IHRoaXMuX2FkZENvbmZpZy5ib2R5ID8gdGhpcy5fYWRkQ29uZmlnLmJvZHkgOiB7fTtcbiAgICByZXN0LmhlYWRlciA9IHRoaXMuX2FkZENvbmZpZy5oZWFkZXIgPyB0aGlzLl9hZGRDb25maWcuaGVhZGVyIDoge307XG4gICAgcmV0dXJuIHJlc3Q7XG4gIH1cblxuICBnZXQgZWRpdENvbmZpZygpOiBFZGl0Q29uZmlnIHtcbiAgICBjb25zdCByZXN0OiBFZGl0Q29uZmlnID0ge307XG4gICAgcmVzdC5hcGkgPSB0aGlzLl9lZGl0Q29uZmlnLmFwaSA/IHRoaXMuX2VkaXRDb25maWcuYXBpIDogdGhpcy5hcGk7XG4gICAgcmVzdC5pc0xhcmF2ZWwgPSB0aGlzLl9lZGl0Q29uZmlnLmlzTGFyYXZlbFxuICAgICAgPyB0aGlzLl9lZGl0Q29uZmlnLmlzTGFyYXZlbFxuICAgICAgOiBmYWxzZTtcbiAgICB0aGlzLl9oYXNGaWxlID0gdGhpcy5oYXNGaWxlO1xuXG4gICAgcmVzdC5tZXRob2QgPSB0aGlzLl9lZGl0Q29uZmlnLm1ldGhvZFxuICAgICAgPyB0aGlzLl9lZGl0Q29uZmlnLm1ldGhvZFxuICAgICAgOiBUWVBFX01FVEhPRF9SRVFVRVNULlBPU1Q7XG5cbiAgICByZXN0LmJvZHkgPSB0aGlzLl9lZGl0Q29uZmlnLmJvZHkgPyB0aGlzLl9lZGl0Q29uZmlnLmJvZHkgOiB7fTtcbiAgICByZXN0LmhlYWRlciA9IHRoaXMuX2VkaXRDb25maWcuaGVhZGVyID8gdGhpcy5fZWRpdENvbmZpZy5oZWFkZXIgOiB7fTtcblxuICAgIHJlc3QudGl0bGUgPSB0aGlzLl9lZGl0Q29uZmlnLnRpdGxlXG4gICAgICA/IHRoaXMuX2VkaXRDb25maWcudGl0bGVcbiAgICAgIDogJ0VkaXQgJyArIHRoaXMubmFtZTtcbiAgICByZXN0LnF1ZXJ5UGFyYW1zID0gdGhpcy5fZWRpdENvbmZpZy5xdWVyeVBhcmFtc1xuICAgICAgPyB0aGlzLl9lZGl0Q29uZmlnLnF1ZXJ5UGFyYW1zXG4gICAgICA6IHRoaXMucXVlcnlQYXJhbXM7XG4gICAgcmV0dXJuIHJlc3Q7XG4gIH1cblxuICBnZXQgZGV0YWlsQ29uZmlnKCk6IERldGFpbENvbmZpZyB7XG4gICAgY29uc3QgcmVzdDogRGV0YWlsQ29uZmlnID0ge307XG4gICAgcmVzdC5hcGkgPSB0aGlzLl9kZXRhaWxDb25maWcuYXBpID8gdGhpcy5fZGV0YWlsQ29uZmlnLmFwaSA6IHRoaXMuYXBpO1xuICAgIHJlc3QudGl0bGUgPSB0aGlzLl9kZXRhaWxDb25maWcudGl0bGUgPyB0aGlzLl9kZXRhaWxDb25maWcudGl0bGUgOiAnJztcbiAgICByZXN0LnRhYnNDb25maWcgPSB0aGlzLl9kZXRhaWxDb25maWcudGFic0NvbmZpZ1xuICAgICAgPyB0aGlzLl9kZXRhaWxDb25maWcudGFic0NvbmZpZ1xuICAgICAgOiBudWxsO1xuICAgIHJlc3QucXVlcnlQYXJhbXMgPSB0aGlzLl9kZXRhaWxDb25maWcucXVlcnlQYXJhbXNcbiAgICAgID8gdGhpcy5fZGV0YWlsQ29uZmlnLnF1ZXJ5UGFyYW1zXG4gICAgICA6IHRoaXMucXVlcnlQYXJhbXM7XG5cbiAgICByZXN0LnByZXBhcmVkU3RhdGVtZW50UXVlcnkgPSB0aGlzLl9kZXRhaWxDb25maWcucHJlcGFyZWRTdGF0ZW1lbnRRdWVyeVxuICAgICAgPyB0aGlzLl9kZXRhaWxDb25maWcucHJlcGFyZWRTdGF0ZW1lbnRRdWVyeVxuICAgICAgOiBudWxsO1xuICAgIHJldHVybiByZXN0O1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uID09IG51bGxcbiAgICAgID8gJ21hbmFnZSAnICsgdGhpcy5uYW1lXG4gICAgICA6IHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IHF1ZXJ5UGFyYW1zKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5UGFyYW1zID09IG51bGwgPyB7fSA6IHRoaXMuX3F1ZXJ5UGFyYW1zO1xuICB9XG5cbiAgLy8gU2V0dGVyc1xuICBzZXQgbmFtZSh2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdjtcbiAgfVxuXG4gIHNldCBmaWVsZHModjogUmVzdEZpZWxkW10pIHtcbiAgICB0aGlzLl9maWVsZHMgPSB2O1xuICB9XG5cbiAgc2V0IGxpc3RDb25maWcodjogTGlzdENvbmZpZykge1xuICAgIHRoaXMuX2xpc3RDb25maWcgPSB2O1xuICB9XG5cbiAgc2V0IGVkaXRDb25maWcodjogRWRpdENvbmZpZykge1xuICAgIHRoaXMuX2VkaXRDb25maWcgPSB2O1xuICB9XG5cbiAgc2V0IGRldGFpbENvbmZpZyh2OiBEZXRhaWxDb25maWcpIHtcbiAgICB0aGlzLl9kZXRhaWxDb25maWcgPSB2O1xuICB9XG5cbiAgc2V0IGFwaSh2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcGkgPSB2O1xuICB9XG5cbiAgc2V0IGljb24odjogc3RyaW5nIHwgQ3VzdG9tSWNvbikge1xuICAgIHRoaXMuX2ljb24gPSB2O1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKHY6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdjtcbiAgfVxuXG4gIHNldCBxdWVyeVBhcmFtcyh2OiBhbnkpIHtcbiAgICB0aGlzLl9xdWVyeVBhcmFtcyA9IHY7XG4gIH1cblxuICBzZXQgYXV0aFJlcXVpcmVkKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRoUmVxdWlyZWQgPSB2O1xuICB9XG5cbiAgc2V0IHNob3dJbk1lbnUodjogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dJbk1lbnUgPSB2O1xuICB9XG5cbiAgc2V0IHBlcm1pc3Npb25zKHY6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcGVybWlzc2lvbnMgPSB2O1xuICB9XG59XG4iXX0=