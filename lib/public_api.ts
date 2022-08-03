/** Rest-admin export*/
// Modules
export * from "./src/rest-admin/rest-admin-module.module";

// Services
export * from "./src/rest-admin/rest-resource/service/rest-admin-config.service";
export * from "./src/rest-admin/rest-resource/service/rest-export.service";
export * from "./src/rest-admin/rest-resource/service/rest-resource.service";
export * from "./src/rest-admin/rest-resource/service/rest-lang.service";

// Components
export * from "./src/rest-admin/rest-main-component/rest-main-component.component";
export * from "./src/rest-admin/rest-resource/rest-resource-add/rest-resource-add.component";
export * from "./src/rest-admin/rest-resource/rest-resource-detail/rest-resource-detail.component";
export * from "./src/rest-admin/rest-resource/rest-resource-list/rest-resource-list.component";
export * from "./src/rest-admin/rest-resource/rest-ressource-delete/rest-resource-delete.component";
export * from "./src/rest-admin/rest-resource/components/rest-resource-editor-fields/rest-resource-editor-fields.component";
export * from "./src/rest-admin/rest-resource/components/rest.resource-list-field/rest.resource-list-field.component";
export * from "./src/rest-admin/rest-resource/components/upload-file/upload-file.component";

/**Theme export */
export * from "./src/@theme/theme.module";
export * from "./src/@theme/components/index";
export * from "./src/@theme/layouts/index";
export * from "./src/@theme/pipes/index";
