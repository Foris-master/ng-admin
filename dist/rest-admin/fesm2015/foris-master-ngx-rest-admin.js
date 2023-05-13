import * as i1$3 from '@ngx-translate/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import * as i1$4 from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as i1$2 from '@angular/common/http';
import { HttpHeaders, HttpResponse, HttpErrorResponse, HTTP_INTERCEPTORS, HttpClientModule, HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import * as i0 from '@angular/core';
import { Injectable, PLATFORM_ID, Inject, Component, Input, ViewChild, Directive, EventEmitter, Output, Pipe, NgModule, Optional, SkipSelf } from '@angular/core';
import * as i8 from '@angular/common';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import * as i1$1 from '@nebular/theme';
import { NbLayoutDirection, NB_DOCUMENT, NbGlobalPhysicalPosition, DEFAULT_THEME as DEFAULT_THEME$1, COSMIC_THEME as COSMIC_THEME$1, CORPORATE_THEME as CORPORATE_THEME$1, DARK_THEME as DARK_THEME$1, NbLayoutModule, NbMenuModule, NbUserModule, NbActionsModule, NbSearchModule, NbSidebarModule, NbContextMenuModule, NbButtonModule, NbSelectModule, NbIconModule, NbToggleModule, NbThemeModule, NbSidebarService, NbCardModule, NbCheckboxModule, NbInputModule, NbTagModule, NbRadioModule, NbTreeGridModule, NbAlertModule, NbAutocompleteModule, NbSpinnerModule, NbTabsetModule, NbPopoverModule, NbListModule, NbTooltipModule, NbDatepickerModule, NbDialogModule, NbWindowModule, NbToastrModule, NbTimepickerModule } from '@nebular/theme';
import * as i10 from 'ng2-smart-table';
import { DefaultEditor, LocalDataSource, ServerDataSource, Ng2SmartTableModule } from 'ng2-smart-table';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import * as i9 from '@nebular/security';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { Subject, BehaviorSubject, of } from 'rxjs';
import { shareReplay, delay, debounceTime, filter, takeWhile, takeUntil, map, catchError, tap } from 'rxjs/operators';
import * as i1 from '@angular/router';
import { NavigationEnd, RouterModule } from '@angular/router';
import * as i7 from 'ngx-image-cropper';
import { base64ToFile, ImageCropperModule } from 'ngx-image-cropper';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as JSZip from 'jszip';
import * as i2 from '@iplab/ngx-file-upload';
import { FileUploadControl, FileUploadValidators, FileUploadModule } from '@iplab/ngx-file-upload';
import * as _ from 'lodash';
import * as i4 from '@codehint-ng/html-compiler';
import { CngHtmlCompilerModule } from '@codehint-ng/html-compiler';
import { Validator } from 'ngx-input-validator';
import * as moment from 'moment';
import * as i8$1 from 'ngx-permissions';
import { NgxPermissionsModule } from 'ngx-permissions';
import * as i12 from 'ngx-dropzone';
import { NgxDropzoneModule } from 'ngx-dropzone';
import * as i4$1 from '@angular/google-maps';
import { GoogleMapsModule } from '@angular/google-maps';
import { __awaiter } from 'tslib';
import * as i6 from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import * as i1$5 from '@nebular/auth';
import { NbAuthModule, NbDummyAuthStrategy, NbLoginComponent, NbAuthComponent, NbPasswordAuthStrategy, NbAuthSimpleToken } from '@nebular/auth';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const APP_NAME = "REST-ADMIN";
const GLOBALS = {
    LANG: APP_NAME + "_LANG",
    LNG_KEY: APP_NAME + "_SELECT_LANGUAGE",
    DEFAULT_LANG: "en",
    AUTH_APP_TOKEN: "auth_app_token",
};

class LayoutService {
    constructor() {
        this.layoutSize$ = new Subject();
        this.layoutSizeChange$ = this.layoutSize$.pipe(shareReplay({ refCount: true }));
    }
    changeLayoutSize() {
        this.layoutSize$.next();
    }
    onChangeLayoutSize() {
        return this.layoutSizeChange$.pipe(delay(1));
    }
    onSafeChangeLayoutSize() {
        return this.layoutSizeChange$.pipe(debounceTime(350));
    }
}
LayoutService.ɵfac = function LayoutService_Factory(t) { return new (t || LayoutService)(); };
LayoutService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LayoutService, factory: LayoutService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutService, [{
        type: Injectable
    }], null, null); })();

class AnalyticsService {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    trackPageViews() {
        if (this.enabled) {
            this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
                .subscribe(() => {
                ga('send', { hitType: 'pageview', page: this.location.path() });
            });
        }
    }
    trackEvent(eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    }
}
AnalyticsService.ɵfac = function AnalyticsService_Factory(t) { return new (t || AnalyticsService)(i0.ɵɵinject(i8.Location), i0.ɵɵinject(i1.Router)); };
AnalyticsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AnalyticsService, factory: AnalyticsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnalyticsService, [{
        type: Injectable
    }], function () { return [{ type: i8.Location }, { type: i1.Router }]; }, null); })();

class Track {
}
class PlayerService {
    constructor() {
        this.playlist = [
            {
                name: 'Don\'t Wanna Fight',
                artist: 'Alabama Shakes',
                url: 'https://p.scdn.co/mp3-preview/6156cdbca425a894972c02fca9d76c0b70e001af',
                cover: 'assets/images/cover1.jpg',
            },
            {
                name: 'Harder',
                artist: 'Daft Punk',
                url: 'https://p.scdn.co/mp3-preview/92a04c7c0e96bf93a1b1b1cae7dfff1921969a7b',
                cover: 'assets/images/cover2.jpg',
            },
            {
                name: 'Come Together',
                artist: 'Beatles',
                url: 'https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9',
                cover: 'assets/images/cover3.jpg',
            },
        ];
    }
    random() {
        this.current = Math.floor(Math.random() * this.playlist.length);
        return this.playlist[this.current];
    }
    next() {
        return this.getNextTrack();
    }
    prev() {
        return this.getPrevTrack();
    }
    getNextTrack() {
        if (this.current === this.playlist.length - 1) {
            this.current = 0;
        }
        else {
            this.current++;
        }
        return this.playlist[this.current];
    }
    getPrevTrack() {
        if (this.current === 0) {
            this.current = this.playlist.length - 1;
        }
        else {
            this.current--;
        }
        return this.playlist[this.current];
    }
}
PlayerService.ɵfac = function PlayerService_Factory(t) { return new (t || PlayerService)(); };
PlayerService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PlayerService, factory: PlayerService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlayerService, [{
        type: Injectable
    }], null, null); })();

class StateService {
    constructor(directionService) {
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Sidebar at layout start',
                icon: 'nb-layout-sidebar-left',
                id: 'start',
                selected: true,
            },
            {
                name: 'Sidebar at layout end',
                icon: 'nb-layout-sidebar-right',
                id: 'end',
            },
        ];
        this.layoutState$ = new BehaviorSubject(this.layouts[0]);
        this.sidebarState$ = new BehaviorSubject(this.sidebars[0]);
        this.alive = true;
        directionService.onDirectionChange()
            .pipe(takeWhile(() => this.alive))
            .subscribe(direction => this.updateSidebarIcons(direction));
        this.updateSidebarIcons(directionService.getDirection());
    }
    ngOnDestroy() {
        this.alive = false;
    }
    updateSidebarIcons(direction) {
        const [startSidebar, endSidebar] = this.sidebars;
        const isLtr = direction === NbLayoutDirection.LTR;
        const startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        const endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    }
    setLayoutState(state) {
        this.layoutState$.next(state);
    }
    getLayoutStates() {
        return of(this.layouts);
    }
    onLayoutState() {
        return this.layoutState$.asObservable();
    }
    setSidebarState(state) {
        this.sidebarState$.next(state);
    }
    getSidebarStates() {
        return of(this.sidebars);
    }
    onSidebarState() {
        return this.sidebarState$.asObservable();
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(i0.ɵɵinject(i1$1.NbLayoutDirectionService)); };
StateService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StateService, factory: StateService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StateService, [{
        type: Injectable
    }], function () { return [{ type: i1$1.NbLayoutDirectionService }]; }, null); })();

class SeoService {
    constructor(router, document, platformId) {
        this.router = router;
        this.destroy$ = new Subject();
        this.isBrowser = isPlatformBrowser(platformId);
        this.dom = document;
        if (this.isBrowser) {
            this.createCanonicalTag();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    createCanonicalTag() {
        this.linkCanonical = this.dom.createElement('link');
        this.linkCanonical.setAttribute('rel', 'canonical');
        this.dom.head.appendChild(this.linkCanonical);
        this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
    }
    trackCanonicalChanges() {
        if (!this.isBrowser) {
            return;
        }
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this.destroy$))
            .subscribe(() => {
            this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
        });
    }
    getCanonicalUrl() {
        return this.dom.location.origin + this.dom.location.pathname;
    }
}
SeoService.ɵfac = function SeoService_Factory(t) { return new (t || SeoService)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(NB_DOCUMENT), i0.ɵɵinject(PLATFORM_ID)); };
SeoService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SeoService, factory: SeoService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SeoService, [{
        type: Injectable
    }], function () { return [{ type: i1.Router }, { type: undefined, decorators: [{
                type: Inject,
                args: [NB_DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();

// export interface QUERY_PARAMS {
//   type:
//   params:
// }
var QUERY_PARAMS_TYPE;
(function (QUERY_PARAMS_TYPE) {
})(QUERY_PARAMS_TYPE || (QUERY_PARAMS_TYPE = {}));
var TYPE_GROUP;
(function (TYPE_GROUP) {
    TYPE_GROUP["SEPARATOR"] = "separator";
    TYPE_GROUP["MENU"] = "menu";
    TYPE_GROUP["DEFAULT"] = "default";
})(TYPE_GROUP || (TYPE_GROUP = {}));
var TYPE_METHOD_REQUEST;
(function (TYPE_METHOD_REQUEST) {
    TYPE_METHOD_REQUEST["POST"] = "POST";
    TYPE_METHOD_REQUEST["PUT"] = "PUT";
    TYPE_METHOD_REQUEST["GET"] = "GET";
    TYPE_METHOD_REQUEST["DELETE"] = "DELETE";
    TYPE_METHOD_REQUEST["PATCH"] = "PATCH";
})(TYPE_METHOD_REQUEST || (TYPE_METHOD_REQUEST = {}));
var DIRECTION;
(function (DIRECTION) {
    DIRECTION["ASC"] = "ASCENDING";
    DIRECTION["DESC"] = "DESCENDING";
})(DIRECTION || (DIRECTION = {}));
var REST_FIELD_TYPES;
(function (REST_FIELD_TYPES) {
    REST_FIELD_TYPES[REST_FIELD_TYPES["STRING"] = 0] = "STRING";
    REST_FIELD_TYPES[REST_FIELD_TYPES["TEXT"] = 1] = "TEXT";
    REST_FIELD_TYPES[REST_FIELD_TYPES["NUMBER"] = 2] = "NUMBER";
    REST_FIELD_TYPES[REST_FIELD_TYPES["COLOR"] = 3] = "COLOR";
    REST_FIELD_TYPES[REST_FIELD_TYPES["BOOLEAN"] = 4] = "BOOLEAN";
    REST_FIELD_TYPES[REST_FIELD_TYPES["DATE"] = 5] = "DATE";
    REST_FIELD_TYPES[REST_FIELD_TYPES["DATETIME"] = 6] = "DATETIME";
    REST_FIELD_TYPES[REST_FIELD_TYPES["TIME"] = 7] = "TIME";
    REST_FIELD_TYPES[REST_FIELD_TYPES["IMAGE"] = 8] = "IMAGE";
    REST_FIELD_TYPES[REST_FIELD_TYPES["PDF"] = 9] = "PDF";
    REST_FIELD_TYPES[REST_FIELD_TYPES["FILE"] = 10] = "FILE";
    REST_FIELD_TYPES[REST_FIELD_TYPES["BELONG_TO"] = 11] = "BELONG_TO";
    REST_FIELD_TYPES[REST_FIELD_TYPES["HAS_ONE"] = 12] = "HAS_ONE";
    REST_FIELD_TYPES[REST_FIELD_TYPES["HAS_MANY"] = 13] = "HAS_MANY";
    REST_FIELD_TYPES[REST_FIELD_TYPES["BELONG_TO_MANY"] = 14] = "BELONG_TO_MANY";
    REST_FIELD_TYPES[REST_FIELD_TYPES["MORPH_MANY"] = 15] = "MORPH_MANY";
    REST_FIELD_TYPES[REST_FIELD_TYPES["MORPH_ONE"] = 16] = "MORPH_ONE";
    REST_FIELD_TYPES[REST_FIELD_TYPES["MORPH"] = 17] = "MORPH";
    REST_FIELD_TYPES[REST_FIELD_TYPES["JSON"] = 18] = "JSON";
    REST_FIELD_TYPES[REST_FIELD_TYPES["MAP"] = 19] = "MAP";
    REST_FIELD_TYPES[REST_FIELD_TYPES["ENUM"] = 20] = "ENUM";
    REST_FIELD_TYPES[REST_FIELD_TYPES["LINK"] = 21] = "LINK";
    REST_FIELD_TYPES[REST_FIELD_TYPES["PASSWORD"] = 22] = "PASSWORD";
})(REST_FIELD_TYPES || (REST_FIELD_TYPES = {}));
var STRATEGY_AUTH;
(function (STRATEGY_AUTH) {
    STRATEGY_AUTH["EMAIL"] = "email";
})(STRATEGY_AUTH || (STRATEGY_AUTH = {}));
var PERMISSION;
(function (PERMISSION) {
    PERMISSION["CREATE"] = "create";
    PERMISSION["READ"] = "read";
    PERMISSION["UPDATE"] = "update";
    PERMISSION["DELETE"] = "delete";
    PERMISSION["CANLOGIN"] = "CANLOGIN";
})(PERMISSION || (PERMISSION = {}));

class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        const authJson = localStorage.getItem(GLOBALS.AUTH_APP_TOKEN);
        const authApp = authJson ? JSON.parse(authJson) : {};
        if (authApp && (authApp === null || authApp === void 0 ? void 0 : authApp.value))
            return true;
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(i0.ɵɵinject(i1.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthGuard, [{
        type: Injectable
    }], function () { return [{ type: i1.Router }]; }, null); })();

const EXCEL_EXTENSION = ".xlsx";
const CSV_EXTENSION = ".csv";
const CSV_TYPE = "text/csv;charset=utf-8;";
const EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8;";
const ALPHABET = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
class RestExportService {
    constructor(http) {
        this.http = http;
    }
    exportToExcel(data, fileName, param = false) {
        // inserting first blank row
        const worksheet = XLSX.utils.json_to_sheet(data[0].data, this.getOptions(data[0]));
        for (let i = 1, length = data.length; i < length; i++) {
            // adding a dummy row for separation
            XLSX.utils.sheet_add_json(worksheet, [{}], this.getOptions({
                data: [],
                skipHeader: true,
            }, -1));
            XLSX.utils.sheet_add_json(worksheet, data[i].data, this.getOptions(data[i], -1));
        }
        const workbook = {
            Sheets: { Sheet1: worksheet },
            SheetNames: ["Sheet1"],
        };
        const excelBuffer = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "buffer",
        });
        const blob = new Blob([excelBuffer], {
            type: EXCEL_TYPE,
        });
        if (param) {
            return blob;
        }
        else {
            FileSaver.saveAs(blob, fileName + EXCEL_EXTENSION);
            return null;
        }
        // save to file
    }
    exportToCsv(header, data, fileName, param = false) {
        let csvData = this.ConvertToCSV(data, header);
        let blob = new Blob(["\ufeff" + csvData], {
            type: CSV_TYPE,
        });
        if (param)
            return blob;
        else {
            FileSaver.saveAs(blob, `${fileName}${CSV_EXTENSION}`);
        }
    }
    exportToPdf(header, data, fileName, fileTitle, param = false) {
        var doc = new jsPDF("l", "mm", [305, 250]);
        var col = header;
        var rows = [];
        var rowCountModNew = data;
        rowCountModNew.forEach((element) => {
            rows.push(element);
        });
        doc.autoTable(col, rows);
        doc.setProperties({
            title: fileName,
            subject: "List of " + fileName,
            author: "rest_admin",
            keywords: "generated, javascript, web 2.0, ajax",
            creator: "rest_admin",
        });
        if (param)
            return new Blob([doc.output("blob")], { type: "application/pdf" });
        else
            doc.save(`${fileName}.pdf`);
    }
    getOptions(json, origin) {
        // adding actual data
        const options = {
            skipHeader: true,
            origin: -1,
            header: [],
        };
        options.skipHeader = json.skipHeader ? json.skipHeader : false;
        if (!options.skipHeader && json.header && json.header.length) {
            options.header = json.header;
        }
        if (origin) {
            options.origin = origin ? origin : -1;
        }
        return options;
    }
    ConvertToCSV(objArray, headerList) {
        let array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
        let str = "";
        let row = "";
        for (let index in headerList) {
            row += headerList[index] + ",";
        }
        row = row.slice(0, -1);
        str += row + "\r\n";
        for (let i = 0; i < array.length; i++) {
            let line = "";
            headerList.forEach((element, index) => {
                let head = headerList[index];
                if (index == 0)
                    line += array[i][head];
                else
                    line += "," + array[i][head];
            });
            str += line + "\r\n";
        }
        return str;
    }
    generateZip(header, pdfData, csvData, excelData) {
        const conserved = true;
        const pdf = this.exportToPdf(header, pdfData, "rest_file_pdf", "", conserved);
        const csv = this.exportToCsv(header, csvData, "rest_file_csv", conserved);
        const excel = this.exportToExcel(excelData, "rest_file_excel", conserved);
        var zip = new JSZip();
        var document = zip.folder("rest_document");
        document.file("rest_file_pdf.pdf", pdf, { base64: true });
        document.file("rest_file_csv.csv", csv, { base64: true });
        document.file("rest_file_excel.xlsx", excel, { base64: true });
        zip.generateAsync({ type: "blob" }).then(function (content) {
            FileSaver.saveAs(content, "rest_document.zip");
        });
    }
    s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i)
            view[i] = s.charCodeAt(i) & 0xff;
        return buf;
    }
}
RestExportService.ɵfac = function RestExportService_Factory(t) { return new (t || RestExportService)(i0.ɵɵinject(i1$2.HttpClient)); };
RestExportService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RestExportService, factory: RestExportService.ɵfac, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestExportService, [{
        type: Injectable,
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: i1$2.HttpClient }]; }, null); })();

class UploadFileComponent {
    constructor(ref, toastrService) {
        this.ref = ref;
        this.toastrService = toastrService;
        this.positions = NbGlobalPhysicalPosition;
        this.isSubmit = false;
        this.control = new FileUploadControl({
            listVisible: true,
            discardInvalid: true,
            multiple: false,
        }, [FileUploadValidators.filesLimit(1)]);
    }
    ngOnInit() {
        this.subscription = this.control.valueChanges.subscribe((values) => {
            if (values != undefined && values.length > 0) {
                const file = values[0];
                const name = file.name.split(".");
                const ext = name[name.length - 1];
                if (ext == "xlsx" || ext == "xls") {
                    const reader = new FileReader();
                    reader.readAsBinaryString(file);
                    reader.onload = (e) => {
                        /* create workbook */
                        const binarystr = e.target.result;
                        const wb = XLSX.read(binarystr, {
                            type: "binary",
                            cellDates: true,
                        });
                        /* selected the first sheet */
                        const wsname = wb.SheetNames[0];
                        const ws = wb.Sheets[wsname];
                        /* save data */
                        const data = XLSX.utils.sheet_to_json(ws);
                        this.dataDoc = data;
                    };
                }
                else {
                    this.showToast(this.positions.BOTTOM_LEFT, "danger");
                    this.control.clear();
                }
            }
        });
    }
    addDatas() {
        this.ref.close(this.dataDoc);
    }
    close() {
        this.ref.close();
    }
    showToast(position, status) {
        this.toastrService.show(status || "Echec", `Fichier non pris en charge`, {
            position,
            status,
        });
    }
}
UploadFileComponent.ɵfac = function UploadFileComponent_Factory(t) { return new (t || UploadFileComponent)(i0.ɵɵdirectiveInject(i1$1.NbDialogRef), i0.ɵɵdirectiveInject(i1$1.NbToastrService)); };
UploadFileComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UploadFileComponent, selectors: [["ngx-upload-file"]], inputs: { datas: "datas", title: "title" }, decls: 11, vars: 2, consts: [["accent", "danger", 2, "width", "370px"], [3, "control"], [2, "display", "flex", "justify-content", "end"], [1, "buttons-row"], ["nbButton", "", "status", "danger", 2, "margin-right", "10px", 3, "click"], ["nbButton", "", "status", "success", 3, "click"]], template: function UploadFileComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nb-card", 0);
        i0.ɵɵelementStart(1, "nb-card-header");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "nb-card-body");
        i0.ɵɵelement(4, "file-upload", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "nb-card-footer", 2);
        i0.ɵɵelementStart(6, "div", 3);
        i0.ɵɵelementStart(7, "button", 4);
        i0.ɵɵlistener("click", function UploadFileComponent_Template_button_click_7_listener() { return ctx.close(); });
        i0.ɵɵtext(8, " Annuler ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 5);
        i0.ɵɵlistener("click", function UploadFileComponent_Template_button_click_9_listener() { return ctx.addDatas(); });
        i0.ɵɵtext(10, " Charger le fichier ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("control", ctx.control);
    } }, directives: [i1$1.NbCardComponent, i1$1.NbCardHeaderComponent, i1$1.NbCardBodyComponent, i2.FileUploadComponent, i1$1.NbCardFooterComponent, i1$1.NbButtonComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UploadFileComponent, [{
        type: Component,
        args: [{
                selector: "ngx-upload-file",
                templateUrl: "./upload-file.component.html",
                styleUrls: ["./upload-file.component.scss"],
            }]
    }], function () { return [{ type: i1$1.NbDialogRef }, { type: i1$1.NbToastrService }]; }, { datas: [{
            type: Input
        }], title: [{
            type: Input
        }] }); })();

class RestLangService {
    constructor(translate, restConfigService) {
        this.translate = translate;
        this.restConfigService = restConfigService;
        this.selected = "";
        this.translateInstant = (word) => this.translate.instant(word);
    }
    setInitialAppLanguage() {
        let lang = this.translate.getBrowserLang();
        this.translate.setDefaultLang(lang);
        if (localStorage.getItem(GLOBALS.LNG_KEY) !== null) {
            let lng = JSON.parse(localStorage.getItem(GLOBALS.LNG_KEY));
            this.setLanguage(lng);
            this.selected = lng;
        }
        else {
            this.setLanguage(GLOBALS.DEFAULT_LANG);
        }
    }
    setLanguage(lang) {
        this.translate.use(lang);
        this.selected = lang;
        localStorage.setItem(GLOBALS.LNG_KEY, JSON.stringify(lang));
    }
    getLanguages() {
        return this.restConfigService.restLanguage;
    }
}
RestLangService.ɵfac = function RestLangService_Factory(t) { return new (t || RestLangService)(i0.ɵɵinject(i1$3.TranslateService), i0.ɵɵinject(RestAdminConfigService)); };
RestLangService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RestLangService, factory: RestLangService.ɵfac, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestLangService, [{
        type: Injectable,
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: i1$3.TranslateService }, { type: RestAdminConfigService }]; }, null); })();

function FsIconCComponent_nb_tree_grid_row_toggle_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tree-grid-row-toggle", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("expanded", ctx_r0.expanded);
} }
function FsIconCComponent_ng_template_1_Template(rf, ctx) { }
class FsIconCComponent {
    isDir() {
        return this.place == "header-place";
    }
}
FsIconCComponent.ɵfac = function FsIconCComponent_Factory(t) { return new (t || FsIconCComponent)(); };
FsIconCComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FsIconCComponent, selectors: [["ngx-fs-icon"]], inputs: { expanded: "expanded", place: "place" }, decls: 3, vars: 2, consts: [[3, "expanded", 4, "ngIf", "ngIfElse"], ["fileIcon", ""], [3, "expanded"]], template: function FsIconCComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FsIconCComponent_nb_tree_grid_row_toggle_0_Template, 1, 1, "nb-tree-grid-row-toggle", 0);
        i0.ɵɵtemplate(1, FsIconCComponent_ng_template_1_Template, 0, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.isDir())("ngIfElse", _r1);
    } }, directives: [i8.NgIf, i1$1.NbTreeGridRowToggleComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FsIconCComponent, [{
        type: Component,
        args: [{
                selector: "ngx-fs-icon",
                template: `
    <nb-tree-grid-row-toggle
      [expanded]="expanded"
      *ngIf="isDir(); else fileIcon"
    >
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon> </ng-template>
  `,
            }]
    }], null, { expanded: [{
            type: Input
        }], place: [{
            type: Input
        }] }); })();

function RestResourceListFieldComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r12.val, "");
} }
function RestResourceListFieldComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r13.restField.template)("componentClass", ctx_r13.val);
} }
function RestResourceListFieldComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_0_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.restField.template);
} }
function RestResourceListFieldComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "nb-checkbox", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r14.val)("disabled", true);
} }
function RestResourceListFieldComponent_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r15.restField.template)("componentClass", ctx_r15.val);
} }
function RestResourceListFieldComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_1_ng_container_1_Template, 2, 2, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_1_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.restField.template);
} }
function RestResourceListFieldComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementContainerStart(1, 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelement(3, "input", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.val);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", ctx_r2.val)("value", ctx_r2.val);
} }
function RestResourceListFieldComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(ctx_r16.style);
    i0.ɵɵproperty("src", ctx_r16.val, i0.ɵɵsanitizeUrl);
} }
function RestResourceListFieldComponent_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r17.restField.template)("componentClass", ctx_r17.val);
} }
function RestResourceListFieldComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_3_ng_container_1_Template, 2, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.restField.template);
} }
function RestResourceListFieldComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r18.val, "");
} }
function RestResourceListFieldComponent_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r19.restField.template)("componentClass", ctx_r19.val);
} }
function RestResourceListFieldComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_4_ng_container_1_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_4_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r4.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.restField.template);
} }
function RestResourceListFieldComponent_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r20.val, "");
} }
function RestResourceListFieldComponent_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r21.restField.template)("componentClass", ctx_r21.val);
} }
function RestResourceListFieldComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_5_ng_container_1_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_5_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.restField.template);
} }
function RestResourceListFieldComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.val, "");
} }
function RestResourceListFieldComponent_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r23.restField.template)("componentClass", ctx_r23.val);
} }
function RestResourceListFieldComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_6_ng_container_1_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_6_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r6.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.restField.template);
} }
function RestResourceListFieldComponent_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r24.jsonValue, "");
} }
function RestResourceListFieldComponent_div_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r25.restField.template)("componentClass", ctx_r25.jsonValue);
} }
function RestResourceListFieldComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_7_ng_container_1_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_7_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r7.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.restField.template);
} }
function RestResourceListFieldComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r26.val, "");
} }
function RestResourceListFieldComponent_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r27.restField.template)("componentClass", ctx_r27.val);
} }
function RestResourceListFieldComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_8_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r8.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.restField.template);
} }
function RestResourceListFieldComponent_div_9_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
function RestResourceListFieldComponent_div_9_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r31 = i0.ɵɵnextContext().$implicit;
    const ctx_r32 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r31.data[ctx_r32.customColumn], " ");
} }
function RestResourceListFieldComponent_div_9_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r35.restField.name);
} }
function RestResourceListFieldComponent_div_9_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r31 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r36 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r36.restField.metaData.listConfig.restManyResources.template)("componentClass", row_r31.data.item);
} }
function RestResourceListFieldComponent_div_9_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_9_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_9_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r31 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r31.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r31.data.place);
} }
function RestResourceListFieldComponent_div_9_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 15);
    i0.ɵɵelement(1, "ngx-fs-icon", 16);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_9_td_4_ng_container_2_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceListFieldComponent_div_9_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r31 = ctx.$implicit;
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r31.expanded)("place", row_r31.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(ctx_r29.restField == null ? null : ctx_r29.restField.metaData == null ? null : ctx_r29.restField.metaData.listConfig == null ? null : ctx_r29.restField.metaData.listConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r29.restField == null ? null : ctx_r29.restField.metaData == null ? null : ctx_r29.restField.metaData.listConfig == null ? null : ctx_r29.restField.metaData.listConfig.restManyResources.template);
} }
function RestResourceListFieldComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "table", 10);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_9_tr_2_Template, 1, 0, "tr", 11);
    i0.ɵɵelementContainerStart(3, 12);
    i0.ɵɵtemplate(4, RestResourceListFieldComponent_div_9_td_4_Template, 4, 4, "td", 13);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r9.dataSource);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r9.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r9.customColumn);
} }
function RestResourceListFieldComponent_div_10_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
function RestResourceListFieldComponent_div_10_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r42 = i0.ɵɵnextContext().$implicit;
    const ctx_r43 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r42.data[ctx_r43.customColumn], " ");
} }
function RestResourceListFieldComponent_div_10_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r46 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r46.restField.name);
} }
function RestResourceListFieldComponent_div_10_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r42 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r47 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r47.restField.metaData.listConfig.restBelongToManyResources.template)("componentClass", row_r42.data.item);
} }
function RestResourceListFieldComponent_div_10_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_10_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_10_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r42 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r42.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r42.data.place);
} }
function RestResourceListFieldComponent_div_10_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 15);
    i0.ɵɵelement(1, "ngx-fs-icon", 16);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_10_td_4_ng_container_2_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceListFieldComponent_div_10_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r42 = ctx.$implicit;
    const ctx_r40 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r42.expanded)("place", row_r42.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r40.restField.metaData.listConfig.restBelongToManyResources.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r40.restField.metaData.listConfig.restBelongToManyResources.template);
} }
function RestResourceListFieldComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "table", 10);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_10_tr_2_Template, 1, 0, "tr", 11);
    i0.ɵɵelementContainerStart(3, 12);
    i0.ɵɵtemplate(4, RestResourceListFieldComponent_div_10_td_4_Template, 4, 4, "td", 13);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r10.dataSource);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r10.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r10.customColumn);
} }
function RestResourceListFieldComponent_div_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r50 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("href", ctx_r50.val, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r50.val);
} }
function RestResourceListFieldComponent_div_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r51 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r51.restField.template)("componentClass", ctx_r51.val);
} }
function RestResourceListFieldComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_11_ng_container_1_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_11_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r11.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r11.restField.template);
} }
class RestResourceListFieldComponent {
    constructor(dataSourceBuilder, langService) {
        this.dataSourceBuilder = dataSourceBuilder;
        this.langService = langService;
        this.customColumn = 'name';
        this.allColumns = [this.customColumn];
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.restField = this.value.restField;
        this.val = _.get(this.rowData, this.restField.label);
        switch (this.restField.type) {
            case REST_FIELD_TYPES.HAS_MANY:
                const datas = [];
                this.val.forEach((item) => {
                    var _a, _b, _c;
                    datas.push({
                        data: {
                            name: ((_c = (_b = (_a = this.restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.listConfig) === null || _c === void 0 ? void 0 : _c.restManyResources.label)
                                ? item[this.restField.metaData.listConfig.restManyResources.label]
                                : item,
                            item,
                        },
                    });
                });
                const rowsT = [
                    {
                        data: {
                            name: this.restField.name,
                            place: 'header-place',
                        },
                        children: datas,
                    },
                ];
                this.dataSource = this.dataSourceBuilder.create(rowsT);
                break;
            case REST_FIELD_TYPES.BELONG_TO_MANY:
                const items = [];
                this.val.forEach((item) => {
                    items.push({
                        data: {
                            name: item[this.restField.metaData.listConfig.restBelongToManyResources
                                .label],
                            item,
                        },
                    });
                });
                const rowsBelongToMany = [
                    {
                        data: {
                            name: this.restField.name,
                            place: 'header-place',
                        },
                        children: items,
                    },
                ];
                this.dataSource = this.dataSourceBuilder.create(rowsBelongToMany);
                break;
            case REST_FIELD_TYPES.HAS_ONE:
                if (this.val &&
                    !((_d = (_c = (_b = (_a = this.restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.listConfig) === null || _c === void 0 ? void 0 : _c.restHasOneResources) === null || _d === void 0 ? void 0 : _d.template)) {
                    this.val =
                        this.val[this.restField.metaData.listConfig.restHasOneResources.name];
                }
                break;
            case REST_FIELD_TYPES.COLOR:
                if (!this.val) {
                    this.val = '#E4E4E4';
                }
                break;
            default:
                break;
        }
        this.class = (_f = (_e = this.restField.metaData) === null || _e === void 0 ? void 0 : _e.listConfig) === null || _f === void 0 ? void 0 : _f.class;
        this.style = (_h = (_g = this.restField.metaData) === null || _g === void 0 ? void 0 : _g.listConfig) === null || _h === void 0 ? void 0 : _h.style;
    }
    get REST_FIELD_TYPES() {
        return REST_FIELD_TYPES;
    }
    get jsonValue() {
        try {
            if (!this.restField || !this.val) {
                throw new Error('Missing required data properties');
            }
            if (this.restField.i18n === true && this.restField.metaData && this.restField.metaData.addConfig.jsonConfig) {
                const selectedField = this.restField.metaData.addConfig.jsonConfig.jsonFields.find((field) => field === this.langService.selected);
                if (selectedField) {
                    if (typeof this.val === 'string' && this.val[0] === '{') {
                        const parsedData = JSON.parse(this.val);
                        if (parsedData[selectedField]) {
                            this._jsonValue = parsedData[selectedField];
                        }
                        else {
                            throw new Error('Invalid i18n language selected');
                        }
                    }
                    else if (typeof this.val === 'object' && this.val[selectedField]) {
                        this._jsonValue = this.val[selectedField];
                    }
                    else if (typeof this.val === 'string') {
                        this._jsonValue = this.val;
                    }
                    else {
                        throw new Error('Invalid data format for i18n field');
                    }
                }
                else {
                    throw new Error('Invalid i18n language selected');
                }
            }
            else {
                this._jsonValue = this.val;
            }
            if (typeof this._jsonValue === 'object') {
                this._jsonValue = JSON.stringify(this._jsonValue);
            }
        }
        catch (err) {
            // console.log(`Error occurred in jsonValue: ${err}`);
            this._jsonValue = JSON.stringify(this.val);
        }
        return this._jsonValue;
    }
}
RestResourceListFieldComponent.ɵfac = function RestResourceListFieldComponent_Factory(t) { return new (t || RestResourceListFieldComponent)(i0.ɵɵdirectiveInject(i1$1.NbTreeGridDataSourceBuilder), i0.ɵɵdirectiveInject(RestLangService)); };
RestResourceListFieldComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceListFieldComponent, selectors: [["ngx-rest-resource-list-field"]], inputs: { value: "value", rowData: "rowData" }, decls: 12, vars: 12, consts: [[4, "ngIf"], ["class", "text-center", 4, "ngIf"], ["style", "height: 50px; display: flex", 4, "ngIf"], [3, "template", "componentClass"], [1, "text-center"], [3, "checked", "disabled"], [2, "height", "50px", "display", "flex"], [2, "align-self", "center"], ["disabled", "true", "type", "color", 2, "height", "45px", "width", "80px", "margin-left", "5px", 3, "placeholder", "value"], ["alt", "", 1, "rest-img", 3, "src"], [3, "nbTreeGrid"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], [3, "nbTreeGridColumnDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], ["nbTreeGridRow", ""], ["nbTreeGridCell", ""], [3, "expanded", "place"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"]], template: function RestResourceListFieldComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, RestResourceListFieldComponent_div_0_Template, 3, 2, "div", 0);
        i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_1_Template, 3, 2, "div", 1);
        i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_2_Template, 4, 3, "div", 2);
        i0.ɵɵtemplate(3, RestResourceListFieldComponent_div_3_Template, 3, 2, "div", 1);
        i0.ɵɵtemplate(4, RestResourceListFieldComponent_div_4_Template, 3, 2, "div", 0);
        i0.ɵɵtemplate(5, RestResourceListFieldComponent_div_5_Template, 3, 2, "div", 0);
        i0.ɵɵtemplate(6, RestResourceListFieldComponent_div_6_Template, 3, 2, "div", 0);
        i0.ɵɵtemplate(7, RestResourceListFieldComponent_div_7_Template, 3, 2, "div", 0);
        i0.ɵɵtemplate(8, RestResourceListFieldComponent_div_8_Template, 3, 2, "div", 0);
        i0.ɵɵtemplate(9, RestResourceListFieldComponent_div_9_Template, 5, 3, "div", 0);
        i0.ɵɵtemplate(10, RestResourceListFieldComponent_div_10_Template, 5, 3, "div", 0);
        i0.ɵɵtemplate(11, RestResourceListFieldComponent_div_11_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.TEXT || ctx.restField.type == ctx.REST_FIELD_TYPES.STRING || ctx.restField.type == ctx.REST_FIELD_TYPES.NUMBER || ctx.restField.type == ctx.REST_FIELD_TYPES.ENUM);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.BOOLEAN);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.COLOR);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.IMAGE);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.HAS_ONE);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.BELONG_TO);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.MORPH);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.JSON);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.DATE);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.HAS_MANY);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.BELONG_TO_MANY);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.LINK);
    } }, directives: [i8.NgIf, i4.CngHtmlCompilerComponent, i1$1.NbCheckboxComponent, i1$1.NbTreeGridComponent, i1$1.NbTreeGridRowDefDirective, i1$1.NbTreeGridColumnDefDirective, i1$1.NbTreeGridCellDefDirective, i1$1.NbTreeGridRowComponent, i1$1.NbTreeGridCellDirective, FsIconCComponent], styles: ["@use \"@nebular/theme/styles/themes/default\";.rest-img[_ngcontent-%COMP%]{max-width:100px}.nb-theme-default   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-default   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-default   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-default   [_nghost-%COMP%]     .row-toggle-button{color:#222b45}.nb-theme-default   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width: 400px){.nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width: 500px){.nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width: 600px){.nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-default   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%]{width:23%}}.nb-theme-dark   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-dark   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-dark   [_nghost-%COMP%]     .row-toggle-button{color:#fff}.nb-theme-dark   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width: 400px){.nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width: 500px){.nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width: 600px){.nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-dark   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%]{width:23%}}.nb-theme-cosmic   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-cosmic   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-cosmic   [_nghost-%COMP%]     .row-toggle-button{color:#fff}.nb-theme-cosmic   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width: 400px){.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width: 500px){.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width: 600px){.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%]{width:23%}}.nb-theme-corporate   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-corporate   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-corporate   [_nghost-%COMP%]     .row-toggle-button{color:#222b45}.nb-theme-corporate   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width: 400px){.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width: 500px){.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width: 600px){.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%]{width:23%}}*[_ngcontent-%COMP%]{cursor:pointer}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceListFieldComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-rest-resource-list-field',
                templateUrl: './rest.resource-list-field.component.html',
                styleUrls: ['./rest.resource-list-field.component.scss'],
            }]
    }], function () { return [{ type: i1$1.NbTreeGridDataSourceBuilder }, { type: RestLangService }]; }, { value: [{
            type: Input
        }], rowData: [{
            type: Input
        }] }); })();

const FILTER_OPERATORS = [
    {
        name: `filter-compare.equality`,
        value: `=`,
    },
    {
        name: `filter-compare.superiority`,
        value: `get`,
    },
    {
        name: `filter-compare.inferiority`,
        value: `let`,
    },
    // {
    //   name: `filter-compare.supOrEgal`,
    //   value: `gt`,
    // },
    // {
    //   name: `filter-compare.infOrEgal`,
    //   value: `lt`,
    // },
    {
        name: `filter-compare.include`,
        value: `lk`,
    },
];
class RestResourceService {
    constructor(http, serviceRestConfig) {
        this.http = http;
        this.serviceRestConfig = serviceRestConfig;
        this.getResources = (config) => {
            return this.http.get(`${this.serviceRestConfig.restBaseUrl}/${config.api}`, {
                params: config.queryParams,
            });
        };
        this.getOneResource = (config, id) => {
            return this.http.get(`${this.serviceRestConfig.restBaseUrl}/${config.api}/${id}`, {
                params: config.queryParams,
            });
        };
        this.addResources = (addConfig, datas) => {
            return this.http.post(`${this.serviceRestConfig.restBaseUrl}/${addConfig.api}`, datas, { headers: this.getCustomHeaders(addConfig.header) });
        };
        this.editResources = (editConfig, hasFile, datas, id) => {
            if (hasFile)
                return this.http.post(`${this.serviceRestConfig.restBaseUrl}/${editConfig.api}/${id}`, datas, { headers: this.getCustomHeaders(editConfig.header) });
            return this.http.put(`${this.serviceRestConfig.restBaseUrl}/${editConfig.api}/${id}`, datas, { headers: this.getCustomHeaders(editConfig.header) });
        };
        this.deleteResources = (listConfig, id) => this.http.delete(`${this.serviceRestConfig.restBaseUrl}/${listConfig.api}/${id}`);
    }
    getCustomHeaders(headerElement) {
        let headers = new HttpHeaders(); // create header object
        if (headerElement !== undefined) {
            Object.keys(headerElement).map((key) => {
                headers = headers.append(key, headerElement[key]); // add another header
            });
        }
        return headers;
    }
}
RestResourceService.ɵfac = function RestResourceService_Factory(t) { return new (t || RestResourceService)(i0.ɵɵinject(i1$2.HttpClient), i0.ɵɵinject(RestAdminConfigService)); };
RestResourceService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RestResourceService, factory: RestResourceService.ɵfac, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceService, [{
        type: Injectable,
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: i1$2.HttpClient }, { type: RestAdminConfigService }]; }, null); })();

const _c0$8 = ["autoInput"];
const _c1$5 = ["autoInputBelongToMany"];
function RestResourceEditorFieldsComponent_ng_container_0_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 10);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_input_1_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_input_1_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_input_1_Template_input_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_input_1_Template_input_keydown_esc_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r1.cell.newValue)("name", ctx_r1.cell.getId())("placeholder", ctx_r1.cell.getTitle())("disabled", !ctx_r1.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 10);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_input_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_input_2_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_input_2_Template_input_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_input_2_Template_input_keydown_esc_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r28 = i0.ɵɵnextContext(2); return ctx_r28.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r2.cell.newValue)("name", ctx_r2.cell.getId())("placeholder", ctx_r2.cell.getTitle())("disabled", !ctx_r2.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_textarea_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 11);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_textarea_3_Template_textarea_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(2); return ctx_r29.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_textarea_3_Template_textarea_click_0_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_textarea_3_Template_textarea_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_textarea_3_Template_textarea_keydown_esc_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r3.cell.newValue)("name", ctx_r3.cell.getId())("placeholder", ctx_r3.cell.getTitle())("disabled", !ctx_r3.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 12);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_input_4_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_input_4_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_input_4_Template_input_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r37 = i0.ɵɵnextContext(2); return ctx_r37.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_input_4_Template_input_keydown_esc_0_listener() { i0.ɵɵrestoreView(_r35); const ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r4.cell.newValue)("name", ctx_r4.cell.getId())("placeholder", ctx_r4.cell.getTitle())("disabled", !ctx_r4.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 13);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_input_5_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(2); return ctx_r39.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_input_5_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r41 = i0.ɵɵnextContext(2); return ctx_r41.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_input_5_Template_input_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r42 = i0.ɵɵnextContext(2); return ctx_r42.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_input_5_Template_input_keydown_esc_0_listener() { i0.ɵɵrestoreView(_r40); const ctx_r43 = i0.ɵɵnextContext(2); return ctx_r43.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r5.cell.newValue)("name", ctx_r5.cell.getId())("placeholder", ctx_r5.cell.getTitle())("disabled", !ctx_r5.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("background-color", ctx_r6.cell.newValue);
} }
function RestResourceEditorFieldsComponent_ng_container_0_input_7_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 15);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_input_7_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(2); return ctx_r44.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_input_7_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r46 = i0.ɵɵnextContext(2); return ctx_r46.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_input_7_Template_input_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r47 = i0.ɵɵnextContext(2); return ctx_r47.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_input_7_Template_input_keydown_esc_0_listener() { i0.ɵɵrestoreView(_r45); const ctx_r48 = i0.ɵɵnextContext(2); return ctx_r48.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r8 = i0.ɵɵreference(9);
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nbDatepicker", _r8)("ngModel", ctx_r7.cell.newValue)("name", ctx_r7.cell.getId())("placeholder", ctx_r7.cell.getTitle())("disabled", !ctx_r7.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 16);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_10_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(2); return ctx_r50.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_10_Template_input_click_1_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r52 = i0.ɵɵnextContext(2); return ctx_r52.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_10_Template_input_keydown_enter_1_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r53 = i0.ɵɵnextContext(2); return ctx_r53.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_10_Template_input_keydown_esc_1_listener() { i0.ɵɵrestoreView(_r51); const ctx_r54 = i0.ɵɵnextContext(2); return ctx_r54.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "nb-date-timepicker", 17, 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r49 = i0.ɵɵreference(3);
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbDatepicker", _r49)("ngModel", ctx_r9.cell.newValue)("name", ctx_r9.cell.getId())("placeholder", ctx_r9.cell.getTitle())("disabled", !ctx_r9.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 19);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_11_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r56 = i0.ɵɵnextContext(2); return ctx_r56.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_11_Template_input_click_1_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r58 = i0.ɵɵnextContext(2); return ctx_r58.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_11_Template_input_keydown_enter_1_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r59 = i0.ɵɵnextContext(2); return ctx_r59.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_11_Template_input_keydown_esc_1_listener() { i0.ɵɵrestoreView(_r57); const ctx_r60 = i0.ɵɵnextContext(2); return ctx_r60.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "nb-timepicker", null, 20);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r55 = i0.ɵɵreference(3);
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTimepicker", _r55)("ngModel", ctx_r10.cell.newValue)("name", ctx_r10.cell.getId())("placeholder", ctx_r10.cell.getTitle())("disabled", !ctx_r10.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_nb_select_12_nb_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r62 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r62.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r62.label);
} }
function RestResourceEditorFieldsComponent_ng_container_0_nb_select_12_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-select", 21);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_nb_select_12_Template_nb_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r64); const ctx_r63 = i0.ɵɵnextContext(2); return ctx_r63.cell.newValue = $event; })("change", function RestResourceEditorFieldsComponent_ng_container_0_nb_select_12_Template_nb_select_change_0_listener($event) { i0.ɵɵrestoreView(_r64); const ctx_r65 = i0.ɵɵnextContext(2); return ctx_r65.onClick.emit($event); });
    i0.ɵɵtemplate(1, RestResourceEditorFieldsComponent_ng_container_0_nb_select_12_nb_option_1_Template, 2, 2, "nb-option", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r11.cell.newValue)("name", ctx_r11.cell.getId());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r11.field.metaData.addConfig.enumOptions);
} }
function RestResourceEditorFieldsComponent_ng_container_0_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵelementStart(1, "nb-toggle", 25);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_div_13_Template_nb_toggle_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r67); const ctx_r66 = i0.ɵɵnextContext(2); return ctx_r66.cell.newValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", ctx_r12.cell.getId())("ngModel", ctx_r12.cell.newValue);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "file-upload", 26);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_14_Template_file_upload_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r68 = i0.ɵɵnextContext(2); return ctx_r68.cell.newValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r13.cell.newValue)("name", ctx_r13.field.label);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r71 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "file-upload", 26);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_Template_file_upload_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r71); const ctx_r70 = i0.ɵɵnextContext(2); return ctx_r70.cell.newValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "object", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r14.cell.newValue)("name", ctx_r14.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("data", ctx_r14.cell.newValue[0], i0.ɵɵsanitizeResourceUrl);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_2_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2, "Drag and drop");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " files");
    i0.ɵɵelement(4, "br");
    i0.ɵɵtext(5, " or click here ");
    i0.ɵɵelementContainerEnd();
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_2_div_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "b");
    i0.ɵɵtext(1, "Click here");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, " to");
    i0.ɵɵelement(3, "br");
    i0.ɵɵtext(4, " choose a files ");
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 32);
    i0.ɵɵelement(2, "path", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "div", 34);
    i0.ɵɵtemplate(4, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_2_div_0_ng_container_4_Template, 6, 0, "ng-container", 35);
    i0.ɵɵtemplate(5, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_2_div_0_ng_template_5_Template, 5, 0, "ng-template", null, 36, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r81 = i0.ɵɵreference(6);
    const isFileDragDropAvailable_r78 = i0.ɵɵnextContext().isFileDragDropAvailable;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", isFileDragDropAvailable_r78)("ngIfElse", _r81);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_2_div_0_Template, 7, 2, "div", 0);
} if (rf & 2) {
    const ctx_r73 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", ctx_r73.control.size === 0);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_4_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(0, "img", 41);
    i0.ɵɵpipe(1, "async");
} if (rf & 2) {
    const ctx_r87 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("src", i0.ɵɵpipeBind1(1, 1, ctx_r87.uploadedFile), i0.ɵɵsanitizeUrl);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 38);
    i0.ɵɵlistener("click", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_4_Template__svg_svg_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r89); const file_r85 = restoredCtx.file; const control_r86 = restoredCtx.control; return control_r86.removeFile(file_r85); });
    i0.ɵɵelement(2, "path", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_4_img_3_Template, 2, 3, "img", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r86 = ctx.control;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", control_r86.valid);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r91 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r91); const ctx_r90 = i0.ɵɵnextContext(3); return ctx_r90.activeCroper(); });
    i0.ɵɵtext(1, " CROP ");
    i0.ɵɵelementEnd();
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r93 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "image-cropper", 43);
    i0.ɵɵlistener("imageCropped", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_container_7_Template_image_cropper_imageCropped_1_listener($event) { i0.ɵɵrestoreView(_r93); const ctx_r92 = i0.ɵɵnextContext(3); return ctx_r92.imageCropped($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 42);
    i0.ɵɵlistener("click", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_container_7_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r93); const ctx_r94 = i0.ɵɵnextContext(3); return ctx_r94.saveCroper(); });
    i0.ɵɵtext(3, " SAVE CHANGE ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r77 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("imageFile", ctx_r77.controlCroper)("maintainAspectRatio", true)("aspectRatio", 4 / 3);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "file-upload", 28);
    i0.ɵɵtemplate(2, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_2_Template, 1, 1, "ng-template", null, 29, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_4_Template, 4, 1, "ng-template", null, 30, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_button_6_Template, 2, 0, "button", 31);
    i0.ɵɵtemplate(7, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_container_7_Template, 4, 3, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("control", ctx_r15.control);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", !ctx_r15.isCrop && ctx_r15.controlCroper != null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.isCrop);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_nb_tag_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 47);
} if (rf & 2) {
    const tree_r96 = ctx.$implicit;
    i0.ɵɵproperty("text", tree_r96);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r98 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nb-tag-list", 44);
    i0.ɵɵlistener("tagRemove", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_Template_nb_tag_list_tagRemove_1_listener($event) { i0.ɵɵrestoreView(_r98); const ctx_r97 = i0.ɵɵnextContext(2); return ctx_r97.onTagRemove($event); });
    i0.ɵɵtemplate(2, RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_nb_tag_2_Template, 1, 1, "nb-tag", 45);
    i0.ɵɵelementStart(3, "input", 46);
    i0.ɵɵlistener("tagAdd", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_Template_input_tagAdd_3_listener($event) { i0.ɵɵrestoreView(_r98); const ctx_r99 = i0.ɵɵnextContext(2); return ctx_r99.onTagAdd($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r16.cell.newValue);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_nb_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r103 = ctx.$implicit;
    const ctx_r102 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", option_r103[(ctx_r102.field == null ? null : ctx_r102.field.metaData == null ? null : ctx_r102.field.metaData.addConfig.belongToOptions == null ? null : ctx_r102.field.metaData.addConfig.belongToOptions.value) ? ctx_r102.field == null ? null : ctx_r102.field.metaData == null ? null : ctx_r102.field.metaData.addConfig == null ? null : ctx_r102.field.metaData.addConfig.belongToOptions == null ? null : ctx_r102.field.metaData.addConfig.belongToOptions.value : "id"]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r103[ctx_r102.field.metaData.addConfig.belongToOptions.template ? ctx_r102.field.metaData.addConfig.belongToOptions.template : ctx_r102.field.metaData.addConfig.belongToOptions.filterKeys[0]], " ");
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r105 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 48, 49);
    i0.ɵɵlistener("input", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_Template_input_input_1_listener() { i0.ɵɵrestoreView(_r105); const ctx_r104 = i0.ɵɵnextContext(2); return ctx_r104.onChange(); })("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r105); const ctx_r106 = i0.ɵɵnextContext(2); return ctx_r106.cell.newValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nb-autocomplete", 50, 51);
    i0.ɵɵlistener("selectedChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_Template_nb_autocomplete_selectedChange_3_listener($event) { i0.ɵɵrestoreView(_r105); const ctx_r107 = i0.ɵɵnextContext(2); return ctx_r107.onSelectionChange($event); });
    i0.ɵɵtemplate(5, RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_nb_option_5_Template, 2, 2, "nb-option", 22);
    i0.ɵɵpipe(6, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r101 = i0.ɵɵreference(4);
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbAutocomplete", _r101)("ngModel", ctx_r17.cell.newValue);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 3, ctx_r17.filteredOptions$));
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_19_nb_tag_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 47);
} if (rf & 2) {
    const tree_r112 = ctx.$implicit;
    const ctx_r108 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("text", tree_r112[ctx_r108.field.metaData.addConfig.belongToManyOptions.template ? ctx_r108.field.metaData.addConfig.belongToManyOptions.template : ctx_r108.field.metaData.addConfig.belongToManyOptions.filterKeys[0]]);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_19_nb_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r113 = ctx.$implicit;
    const ctx_r111 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", option_r113);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r113[ctx_r111.field.metaData.addConfig.belongToManyOptions.template ? ctx_r111.field.metaData.addConfig.belongToManyOptions.template : ctx_r111.field.metaData.addConfig.belongToManyOptions.filterKeys[0]], " ");
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r115 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelementStart(2, "nb-tag-list", 44);
    i0.ɵɵlistener("tagRemove", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_19_Template_nb_tag_list_tagRemove_2_listener($event) { i0.ɵɵrestoreView(_r115); const ctx_r114 = i0.ɵɵnextContext(2); return ctx_r114.onTagRemoveBelong($event); });
    i0.ɵɵtemplate(3, RestResourceEditorFieldsComponent_ng_container_0_ng_container_19_nb_tag_3_Template, 1, 1, "nb-tag", 45);
    i0.ɵɵelementStart(4, "input", 52, 53);
    i0.ɵɵlistener("tagAdd", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_19_Template_input_tagAdd_4_listener($event) { i0.ɵɵrestoreView(_r115); const ctx_r116 = i0.ɵɵnextContext(2); return ctx_r116.onTagAdd($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "nb-autocomplete", 50, 54);
    i0.ɵɵlistener("selectedChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_19_Template_nb_autocomplete_selectedChange_6_listener($event) { i0.ɵɵrestoreView(_r115); const ctx_r117 = i0.ɵɵnextContext(2); return ctx_r117.onChoose($event); });
    i0.ɵɵtemplate(8, RestResourceEditorFieldsComponent_ng_container_0_ng_container_19_nb_option_8_Template, 2, 2, "nb-option", 22);
    i0.ɵɵpipe(9, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r110 = i0.ɵɵreference(7);
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r18.cell.newValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbAutocomplete", _r110);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(9, 3, ctx_r18.filteredOptions$));
} }
function RestResourceEditorFieldsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceEditorFieldsComponent_ng_container_0_input_1_Template, 1, 4, "input", 1);
    i0.ɵɵtemplate(2, RestResourceEditorFieldsComponent_ng_container_0_input_2_Template, 1, 4, "input", 1);
    i0.ɵɵtemplate(3, RestResourceEditorFieldsComponent_ng_container_0_textarea_3_Template, 1, 4, "textarea", 2);
    i0.ɵɵtemplate(4, RestResourceEditorFieldsComponent_ng_container_0_input_4_Template, 1, 4, "input", 3);
    i0.ɵɵtemplate(5, RestResourceEditorFieldsComponent_ng_container_0_input_5_Template, 1, 4, "input", 4);
    i0.ɵɵtemplate(6, RestResourceEditorFieldsComponent_ng_container_0_div_6_Template, 1, 2, "div", 5);
    i0.ɵɵtemplate(7, RestResourceEditorFieldsComponent_ng_container_0_input_7_Template, 1, 5, "input", 6);
    i0.ɵɵelement(8, "nb-datepicker", null, 7);
    i0.ɵɵtemplate(10, RestResourceEditorFieldsComponent_ng_container_0_ng_container_10_Template, 4, 5, "ng-container", 0);
    i0.ɵɵtemplate(11, RestResourceEditorFieldsComponent_ng_container_0_ng_container_11_Template, 4, 5, "ng-container", 0);
    i0.ɵɵtemplate(12, RestResourceEditorFieldsComponent_ng_container_0_nb_select_12_Template, 2, 3, "nb-select", 8);
    i0.ɵɵtemplate(13, RestResourceEditorFieldsComponent_ng_container_0_div_13_Template, 2, 2, "div", 9);
    i0.ɵɵtemplate(14, RestResourceEditorFieldsComponent_ng_container_0_ng_container_14_Template, 2, 2, "ng-container", 0);
    i0.ɵɵtemplate(15, RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_Template, 3, 3, "ng-container", 0);
    i0.ɵɵtemplate(16, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_Template, 8, 3, "ng-container", 0);
    i0.ɵɵtemplate(17, RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_Template, 4, 1, "ng-container", 0);
    i0.ɵɵtemplate(18, RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_Template, 7, 5, "ng-container", 0);
    i0.ɵɵtemplate(19, RestResourceEditorFieldsComponent_ng_container_0_ng_container_19_Template, 10, 5, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.STRING);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.TEXT);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.NUMBER);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.DATETIME);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.TIME);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.FILE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.PDF);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.BELONG_TO_MANY);
} }
class RestResourceEditorFieldsComponent extends DefaultEditor {
    constructor(serviceRestAdminConfig, serviceResResource) {
        super();
        this.serviceRestAdminConfig = serviceRestAdminConfig;
        this.serviceResResource = serviceResResource;
        // Test
        this.uploadedFile = new BehaviorSubject(null);
        // Control sur les fichiers a upload
        this.control = new FileUploadControl({
            listVisible: true,
            accept: ["image/*"],
            discardInvalid: true,
            multiple: false,
        }, [
            FileUploadValidators.accept(["image/*"]),
            FileUploadValidators.filesLimit(1),
        ]);
        this.controlCroper = null;
        this.croppedImage = "";
        this.isCrop = false;
    }
    // End test
    ngOnInit() {
        this.subscription = this.control.valueChanges.subscribe((values) => {
            this.getImage(values[0]);
            this.controlCroper = values[0];
        });
        this.infoRows = this.cell.getColumn().valuePrepareFunction();
        this.field = this.infoRows.restField;
        switch (this.field.type) {
            case REST_FIELD_TYPES.HAS_MANY:
                this.cell.newValue = new Set([]);
                break;
            case REST_FIELD_TYPES.BELONG_TO:
                const restResource = this.serviceRestAdminConfig.getSpecificResource(this.field.metaData.addConfig.belongToOptions.resourceName);
                this.serviceResResource
                    .getResources({
                    api: restResource.api,
                    queryParams: this.field.metaData.addConfig.belongToOptions
                        .queryParams
                        ? this.field.metaData.addConfig.belongToOptions.queryParams
                        : restResource.queryParams,
                })
                    .subscribe((response) => {
                    this.options = response;
                    this.filteredOptions$ = of(this.options);
                });
                break;
            case REST_FIELD_TYPES.COLOR:
                if (!this.cell.newValue) {
                    this.cell.newValue = '#A4A';
                }
                break;
            case REST_FIELD_TYPES.BELONG_TO_MANY:
                this.cell.newValue = new Set([]);
                const resource = this.serviceRestAdminConfig.getSpecificResource(this.field.metaData.addConfig.belongToManyOptions.relatedName);
                this.serviceResResource
                    .getResources({
                    api: resource.api,
                    queryParams: this.field.metaData.addConfig.belongToManyOptions
                        .queryParams
                        ? this.field.metaData.addConfig.belongToManyOptions.queryParams
                        : resource.queryParams,
                })
                    .subscribe((response) => {
                    this.options = response;
                    this.filteredOptions$ = of(this.options);
                });
                break;
            case REST_FIELD_TYPES.IMAGE:
            case REST_FIELD_TYPES.FILE:
                this.cell.newValue = [];
                break;
            case REST_FIELD_TYPES.BOOLEAN:
                this.cell.newValue = false;
                break;
            // case REST_FIELD_TYPES.PDF:
            // this.cell.newValue = [];
            // break;
            default:
                break;
        }
    }
    get REST_FIELD_TYPES() {
        return REST_FIELD_TYPES;
    }
    // Tags
    onTagRemove(tagToRemove) {
        const treesA = new Set(this.cell.newValue);
        treesA.delete(tagToRemove.text);
        this.cell.newValue = Array.from(treesA.values());
    }
    onTagAdd({ value, input }) {
        if (value) {
            const treesA = new Set(this.cell.newValue);
            treesA.add(value);
            this.cell.newValue = Array.from(treesA.values());
        }
        input.nativeElement.value = "";
    }
    // End tag
    // Autocomplete
    filter(value) {
        if (typeof value == "string") {
            return this.options.filter((optionValue) => {
                return this.field.metaData.addConfig.belongToOptions.filterKeys.some((elt) => `${optionValue[elt].toLowerCase()}`.includes(`${value.toLowerCase()}`));
            });
        }
    }
    getFilteredOptions(value) {
        return of(value).pipe(map((filterString) => this.filter(filterString)));
    }
    onChange() {
        this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
    }
    onSelectionChange($event) {
        this.filteredOptions$ = this.getFilteredOptions($event);
    }
    // End Autocomplete
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getImage(file) {
        if (FileReader && file) {
            const fr = new FileReader();
            fr.onload = (e) => {
                this.uploadedFile.next(e.target.result);
            };
            fr.readAsDataURL(file);
        }
        else {
            this.uploadedFile.next(null);
        }
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    activeCroper() {
        this.isCrop = true;
    }
    saveCroper() {
        this.isCrop = false;
        this.uploadedFile.next(this.croppedImage);
        this.cell.setValue(base64ToFile(this.croppedImage));
    }
    //belongToManyOptions
    onChoose(event) {
        const cellData = Array.from(this.cell.newValue.values());
        if (event) {
            const search = cellData.find((elt) => elt.id == event.id);
            if (search == undefined) {
                const newElt = {
                    id: event.id,
                    [this.field.metaData.addConfig.belongToManyOptions.relatedIdName]: event.id,
                    [this.field.metaData.addConfig.belongToManyOptions.resourceIdName]: "",
                    [this.field.metaData.addConfig.belongToManyOptions.filterKeys[0]]: event[this.field.metaData.addConfig.belongToManyOptions.filterKeys[0]],
                    saveRelatedIdName: this.field.metaData.addConfig.belongToManyOptions.relatedIdName,
                    saveResourceIdName: this.field.metaData.addConfig.belongToManyOptions.resourceIdName,
                };
                const treesA = new Set(this.cell.newValue);
                treesA.add(newElt);
                this.cell.newValue = Array.from(treesA.values());
            }
        }
        this.inputBelongTo.nativeElement.value = "";
    }
    onTagRemoveBelong(tagToRemove) {
        const cellData = Array.from(this.cell.newValue.values());
        const save = [];
        cellData.forEach((elt) => {
            if (elt[this.field.metaData.addConfig.belongToManyOptions.template
                ? this.field.metaData.addConfig.belongToManyOptions.template
                : this.field.metaData.addConfig.belongToManyOptions.filterKeys[0]].localeCompare(tagToRemove.text) != 0)
                save.push(elt);
        });
        this.cell.newValue = Array.from(save);
    }
    //End BelongToMany
    getField(fields, value) {
        return _.get(fields, value);
    }
}
RestResourceEditorFieldsComponent.ɵfac = function RestResourceEditorFieldsComponent_Factory(t) { return new (t || RestResourceEditorFieldsComponent)(i0.ɵɵdirectiveInject(RestAdminConfigService), i0.ɵɵdirectiveInject(RestResourceService)); };
RestResourceEditorFieldsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceEditorFieldsComponent, selectors: [["input-editor"]], viewQuery: function RestResourceEditorFieldsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$8, 5);
        i0.ɵɵviewQuery(_c1$5, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.input = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputBelongTo = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], ["type", "text", "class", "form-control ng-valid ng-touched ng-dirty", "fullWidth", "", 3, "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc", 4, "ngIf"], ["class", "form-control ng-valid ng-touched ng-dirty", "fullWidth", "", 3, "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc", 4, "ngIf"], ["class", "form-control ng-valid ng-touched ng-dirty", "type", "number", "fullWidth", "", 3, "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc", 4, "ngIf"], ["type", "text", "class", "form-control ng-valid ng-touched ng-dirty", 3, "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc", 4, "ngIf"], ["class", "text-center", "style", "width: 80px; height: 30px", 3, "background-color", 4, "ngIf"], ["class", "form-control ng-valid ng-touched ng-dirty", "fullWidth", "", 3, "nbDatepicker", "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc", 4, "ngIf"], ["formpicker", ""], ["class", "input-space", "nbInput", "", 3, "ngModel", "name", "ngModelChange", "change", 4, "ngIf"], ["style", "text-align: center", 4, "ngIf"], ["type", "text", "fullWidth", "", 1, "form-control", "ng-valid", "ng-touched", "ng-dirty", 3, "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], ["fullWidth", "", 1, "form-control", "ng-valid", "ng-touched", "ng-dirty", 3, "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], ["type", "number", "fullWidth", "", 1, "form-control", "ng-valid", "ng-touched", "ng-dirty", 3, "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], ["type", "text", 1, "form-control", "ng-valid", "ng-touched", "ng-dirty", 3, "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], [1, "text-center", 2, "width", "80px", "height", "30px"], ["fullWidth", "", 1, "form-control", "ng-valid", "ng-touched", "ng-dirty", 3, "nbDatepicker", "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], ["nbInput", "", "fullWidth", "", 1, "form-control", "ng-valid", "ng-touched", "ng-dirty", 3, "nbDatepicker", "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], ["withSeconds", ""], ["dateTimePicker", ""], ["twelveHoursFormat]", "", "nbInput", "", "fullWidth", "", 1, "form-control", "ng-valid", "ng-touched", "ng-dirty", 3, "nbTimepicker", "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], ["timepicker", ""], ["nbInput", "", 1, "input-space", 3, "ngModel", "name", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "text-align", "center"], [3, "name", "ngModel", "ngModelChange"], [1, "input-space", 2, "min-width", "300px", "max-width", "300px", 3, "ngModel", "name", "ngModelChange"], ["width", "300px", "height", "300px", 3, "data"], [3, "control"], ["placeholder", ""], ["item", ""], ["nbButton", "", "status", "primary", 3, "click", 4, "ngIf"], ["viewBox", "0 0 512 512", 1, "icon"], ["d", "M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"], [1, "upload-text"], [4, "ngIf", "ngIfElse"], ["isNotDragDropAvailable", ""], [1, "overlay"], ["viewBox", "0 0 448 512", 1, "delete-button", 3, "click"], ["d", "M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"], [3, "src", 4, "ngIf"], [3, "src"], ["nbButton", "", "status", "primary", 3, "click"], ["format", "png", 3, "imageFile", "maintainAspectRatio", "aspectRatio", "imageCropped"], [1, "input-space", 3, "tagRemove"], ["removable", "", 3, "text", 4, "ngFor", "ngForOf"], ["type", "text", "nbTagInput", "", "fullWidth", "", 3, "tagAdd"], ["removable", "", 3, "text"], ["nbInput", "", "type", "text", "placeholder", "Enter value", 3, "nbAutocomplete", "ngModel", "input", "ngModelChange"], ["autoInput", ""], [3, "selectedChange"], ["auto", ""], ["type", "text", "nbTagInput", "", "fullWidth", "", 3, "nbAutocomplete", "tagAdd"], ["autoInputBelongToMany", ""], ["autoBelonToMany", ""]], template: function RestResourceEditorFieldsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, RestResourceEditorFieldsComponent_ng_container_0_Template, 20, 17, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.field.inForm == true);
    } }, directives: [i8.NgIf, i1$1.NbDatepickerComponent, i1$4.DefaultValueAccessor, i1$4.NgControlStatus, i1$4.NgModel, i1$4.NumberValueAccessor, i1$1.NbDatepickerDirective, i1$1.NbInputDirective, i1$1.NbDateTimePickerComponent, i1$1.NbTimePickerDirective, i1$1.NbTimePickerComponent, i1$1.NbSelectComponent, i8.NgForOf, i1$1.NbOptionComponent, i1$1.NbToggleComponent, i2.FileUploadComponent, i1$1.NbButtonComponent, i7.ImageCropperComponent, i1$1.NbTagListComponent, i1$1.NbTagInputDirective, i1$1.NbTagComponent, i1$1.NbAutocompleteDirective, i1$1.NbAutocompleteComponent], pipes: [i8.AsyncPipe], styles: [".icon[_ngcontent-%COMP%]{height:35px;width:35px;line-height:30px;text-align:center;border:1px solid #eaeaea;border-radius:4px;float:left;margin-right:20px}.upload-text[_ngcontent-%COMP%]{overflow:hidden;width:auto;font-size:14px}svg[_ngcontent-%COMP%]{fill:#909293;height:20px}.overlay[_ngcontent-%COMP%]{position:relative}.delete-button[_ngcontent-%COMP%]{background-color:#fafafa;position:absolute;top:-6px;right:-6px;cursor:pointer;z-index:10;width:40px;height:40px;text-align:center;font-size:20px;line-height:40px}.file-image[_ngcontent-%COMP%]{min-width:300px;max-width:300px}.file-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}nb-toggle[_ngcontent-%COMP%]{text-align:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceEditorFieldsComponent, [{
        type: Component,
        args: [{
                selector: "input-editor",
                templateUrl: "./rest-resource-editor-fields.component.html",
                styleUrls: ["./rest-resource-editor-fields.component.scss"],
            }]
    }], function () { return [{ type: RestAdminConfigService }, { type: RestResourceService }]; }, { input: [{
            type: ViewChild,
            args: ["autoInput"]
        }], inputBelongTo: [{
            type: ViewChild,
            args: ["autoInputBelongToMany"]
        }] }); })();

class NotificationService {
    constructor(toastrService, translate) {
        this.toastrService = toastrService;
        this.translate = translate;
        this.positions = NbGlobalPhysicalPosition;
    }
    showToast(position, status, msg) {
        this.toastrService.show(status || 'Success', msg, {
            position,
            status,
        });
    }
    //Toastr
    successToast(msg) {
        let msgInfo;
        if (typeof msg === 'string') {
            msgInfo = this.translate.instant(msg);
        }
        else {
            msgInfo = this.translate.instant(`${msg.label}`, {
                resourceName: msg.resourceName,
            });
        }
        this.showToast(this.positions.TOP_RIGHT, 'success', msgInfo);
    }
    warningToast(msg) {
        let msgInfo;
        if (typeof msg === 'string') {
            msgInfo = this.translate.instant(msg);
        }
        else {
            msgInfo = this.translate.instant(`${msg.label}`, {
                resourceName: msg.resourceName,
            });
        }
        this.showToast(this.positions.TOP_RIGHT, 'warning', msgInfo);
    }
    dangerToast(msg) {
        let msgInfo;
        if (typeof msg === 'string') {
            msgInfo = this.translate.instant(msg);
        }
        else {
            msgInfo = this.translate.instant(`${msg.label}`, {
                resourceName: msg.resourceName,
            });
        }
        this.showToast(this.positions.TOP_RIGHT, 'danger', msgInfo);
    }
    infoToast(msg) {
        let msgInfo;
        if (typeof msg === 'string') {
            msgInfo = this.translate.instant(msg);
        }
        else {
            msgInfo = this.translate.instant(`${msg.label}`, {
                resourceName: msg.resourceName,
            });
        }
        this.showToast(this.positions.TOP_RIGHT, 'info', msgInfo);
    }
    primaryToast(msg) {
        let msgInfo;
        if (typeof msg === 'string') {
            msgInfo = this.translate.instant(msg);
        }
        else {
            msgInfo = this.translate.instant(`${msg.label}`, {
                resourceName: msg.resourceName,
            });
        }
        this.showToast(this.positions.TOP_RIGHT, 'primary', msgInfo);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(i0.ɵɵinject(i1$1.NbToastrService), i0.ɵɵinject(i1$3.TranslateService)); };
NotificationService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotificationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1$1.NbToastrService }, { type: i1$3.TranslateService }]; }, null); })();

class AttributeDirective {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    ngOnChanges(changes) {
        if (changes.attributes) {
            for (let attributeName in this.attributes) {
                const attributeValue = this.attributes[attributeName];
                if (attributeValue) {
                    this.renderer.setAttribute(this.elementRef.nativeElement, attributeName, attributeValue);
                }
                else {
                    this.renderer.removeAttribute(this.elementRef.nativeElement, attributeName);
                }
            }
        }
    }
}
AttributeDirective.ɵfac = function AttributeDirective_Factory(t) { return new (t || AttributeDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
AttributeDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AttributeDirective, selectors: [["", "attributes", ""]], inputs: { attributes: "attributes" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AttributeDirective, [{
        type: Directive,
        args: [{
                selector: '[attributes]'
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { attributes: [{
            type: Input
        }] }); })();

const _c0$7 = function (a0, a1) { return { lat: a0, lng: a1 }; };
function GmapsComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "google-map", 1);
    i0.ɵɵelementStart(2, "map-marker", 2);
    i0.ɵɵlistener("mapDragend", function GmapsComponent_ng_container_2_Template_map_marker_mapDragend_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.onPositionChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("options", ctx_r0.mapOptions)("zoom", 8);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("position", i0.ɵɵpureFunction2(4, _c0$7, ctx_r0.lat, ctx_r0.lng))("options", ctx_r0.markerOptions);
} }
class GmapsComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.googleMapKey = '';
        this.latChange = new EventEmitter();
        this.lngChange = new EventEmitter();
        this.markerOptions = { draggable: true };
    }
    ngOnInit() {
        console.log(this.googleMapKey, 'googleMapKey');
        this.apiLoaded = this.httpClient
            .jsonp(`https://maps.googleapis.com/maps/api/js?key=${this.googleMapKey}&libraries=places`, 'callback')
            .pipe(map(() => true), catchError((err) => of(false)));
        this.mapOptions = {
            center: { lat: this.lat, lng: this.lng },
            zoom: 8,
        };
    }
    onPositionChange(event) {
        if (event) {
            this.lat = event.latLng.lat();
            this.lng = event.latLng.lng();
            this.latChange.emit(this.lat);
            this.lngChange.emit(this.lng);
        }
    }
}
GmapsComponent.ɵfac = function GmapsComponent_Factory(t) { return new (t || GmapsComponent)(i0.ɵɵdirectiveInject(i1$2.HttpClient)); };
GmapsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GmapsComponent, selectors: [["ngx-gmaps"]], inputs: { lat: "lat", lng: "lng", googleMapKey: "googleMapKey" }, outputs: { latChange: "latChange", lngChange: "lngChange" }, decls: 4, vars: 3, consts: [[4, "ngIf"], ["width", "100%", "height", "36.5625rem", 3, "options", "zoom"], [3, "position", "options", "mapDragend"]], template: function GmapsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nb-card");
        i0.ɵɵelementStart(1, "nb-card-body");
        i0.ɵɵtemplate(2, GmapsComponent_ng_container_2_Template, 3, 7, "ng-container", 0);
        i0.ɵɵpipe(3, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 1, ctx.apiLoaded));
    } }, directives: [i1$1.NbCardComponent, i1$1.NbCardBodyComponent, i8.NgIf, i4$1.GoogleMap, i4$1.MapMarker], pipes: [i8.AsyncPipe], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-default   [_nghost-%COMP%]     agm-map{width:100%;height:36.5625rem}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-dark   [_nghost-%COMP%]     agm-map{width:100%;height:36.5625rem}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-cosmic   [_nghost-%COMP%]     agm-map{width:100%;height:36.5625rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-corporate   [_nghost-%COMP%]     agm-map{width:100%;height:36.5625rem}agm-map[_ngcontent-%COMP%]{height:300px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GmapsComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-gmaps',
                styleUrls: ['./gmaps.component.scss'],
                templateUrl: './gmaps.component.html',
            }]
    }], function () { return [{ type: i1$2.HttpClient }]; }, { lat: [{
            type: Input
        }], lng: [{
            type: Input
        }], googleMapKey: [{
            type: Input
        }], latChange: [{
            type: Output
        }], lngChange: [{
            type: Output
        }] }); })();

const _c0$6 = ["belongTo"];
const _c1$4 = ["autoBelongToMany"];
function RestResourceAddComponent_ng_container_0_nb_card_header_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-card-header");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r2.resource.editConfig.title, " ");
} }
function RestResourceAddComponent_ng_container_0_nb_card_header_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-card-header");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r3.resource.addConfig.title, " ");
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(2);
    const field_r7 = ctx_r30.$implicit;
    const i_r8 = ctx_r30.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r8)("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label)("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "textarea", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(2);
    const field_r7 = ctx_r31.$implicit;
    const i_r8 = ctx_r31.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r8)("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label)("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "label", 19);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(3);
    const field_r7 = ctx_r33.$implicit;
    const i_r8 = ctx_r33.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((field_r7 == null ? null : field_r7.metaData == null ? null : field_r7.metaData.addConfig == null ? null : field_r7.metaData.addConfig.passwordOptions == null ? null : field_r7.metaData.addConfig.passwordOptions.confirmLabel) ? field_r7 == null ? null : field_r7.metaData == null ? null : field_r7.metaData.addConfig == null ? null : field_r7.metaData.addConfig.passwordOptions == null ? null : field_r7.metaData.addConfig.passwordOptions.confirmLabel : i0.ɵɵpipeBind1(4, 5, field_r7.label + "_confirmation"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r8)("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label + "_confirmation")("formControlName", (field_r7.metaData == null ? null : field_r7.metaData.addConfig == null ? null : field_r7.metaData.addConfig.passwordOptions == null ? null : field_r7.metaData.addConfig.passwordOptions.confirmField) ? field_r7.metaData.addConfig.passwordOptions.confirmField : field_r7.name + "_confirmation");
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "label", 19);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_3_ng_container_6_Template, 6, 7, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(2);
    const field_r7 = ctx_r34.$implicit;
    const i_r8 = ctx_r34.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 6, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r8)("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label)("formControlName", field_r7.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7 == null ? null : field_r7.metaData == null ? null : field_r7.metaData.addConfig == null ? null : field_r7.metaData.addConfig.passwordOptions == null ? null : field_r7.metaData.addConfig.passwordOptions.isNeedConfirm);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = i0.ɵɵnextContext(2);
    const field_r7 = ctx_r35.$implicit;
    const i_r8 = ctx_r35.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r8)("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label)("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 24);
    i0.ɵɵelement(5, "nb-datepicker", null, 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r36 = i0.ɵɵreference(6);
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", field_r7.label)("nbDatepicker", _r36)("attributes", field_r7.metaData.attributes)("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 26);
    i0.ɵɵelement(5, "nb-date-timepicker", 27, 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r38 = i0.ɵɵreference(6);
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label)("nbDatepicker", _r38)("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 29);
    i0.ɵɵelement(5, "nb-timepicker", null, 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r40 = i0.ɵɵreference(6);
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nbTimepicker", _r40)("attributes", field_r7.metaData.attributes)("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_8_nb_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r43 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r43.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r43.label);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-select", 31);
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_8_nb_option_5_Template, 2, 2, "nb-option", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControlName", field_r7.name)("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", field_r7.metaData.addConfig.enumOptions);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵelementStart(2, "label", 35);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "nb-toggle", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 2, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 40);
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r46 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("src", ctx_r46.urlsImage[field_r7.name], i0.ɵɵsanitizeUrl);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_ngx_dropzone_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-dropzone-label");
    i0.ɵɵelement(1, "nb-icon", 41);
    i0.ɵɵtext(2, " Drag and drop files here or click to upload ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-dropzone-preview", 42);
    i0.ɵɵlistener("removed", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template_ngx_dropzone_preview_removed_0_listener() { i0.ɵɵrestoreView(_r53); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r51 = i0.ɵɵnextContext(3); return ctx_r51.onRemove(field_r7); });
    i0.ɵɵelementStart(1, "ngx-dropzone-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r50 = ctx.$implicit;
    i0.ɵɵproperty("file", f_r50)("removable", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", f_r50.name, " (", f_r50.type, ")");
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 37);
    i0.ɵɵlistener("change", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_Template_div_change_4_listener($event) { i0.ɵɵrestoreView(_r56); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r54 = i0.ɵɵnextContext(3); return ctx_r54.onSelect($event, field_r7); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_img_5_Template, 1, 2, "img", 38);
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_ngx_dropzone_label_6_Template, 3, 0, "ngx-dropzone-label", 0);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template, 3, 4, "ngx-dropzone-preview", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r20 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, field_r7.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r20.urlsImage[field_r7.name] != "" && ctx_r20.filesUpload[field_r7.name].length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.filesUpload[field_r7.name].length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r20.filesUpload[field_r7.name]);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 40);
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r58 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("src", ctx_r58.urlsImage[field_r7.name], i0.ɵɵsanitizeUrl);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ngx_dropzone_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-dropzone-label");
    i0.ɵɵelement(1, "nb-icon", 41);
    i0.ɵɵtext(2, " Drag and drop files here or click to upload ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-dropzone-image-preview", 42);
    i0.ɵɵlistener("removed", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template_ngx_dropzone_image_preview_removed_0_listener() { i0.ɵɵrestoreView(_r67); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r65 = i0.ɵɵnextContext(3); return ctx_r65.onRemove(field_r7); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r64 = ctx.$implicit;
    i0.ɵɵproperty("file", f_r64)("removable", true);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r70); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r68 = i0.ɵɵnextContext(3); return ctx_r68.activeCroper(field_r7); });
    i0.ɵɵtext(1, " CROP ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "image-cropper", 45);
    i0.ɵɵlistener("imageCropped", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ng_container_9_Template_image_cropper_imageCropped_1_listener($event) { i0.ɵɵrestoreView(_r73); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r71 = i0.ɵɵnextContext(3); return ctx_r71.imageCropped($event, field_r7); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 44);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ng_container_9_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r73); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r74 = i0.ɵɵnextContext(3); return ctx_r74.saveCroper(field_r7); });
    i0.ɵɵtext(3, " SAVE CHANGE ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 46);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ng_container_9_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r73); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r76 = i0.ɵɵnextContext(3); return ctx_r76.desactiveCrop(field_r7); });
    i0.ɵɵtext(5, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r62 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("imageFile", ctx_r62.controlCroper[field_r7.name])("maintainAspectRatio", true)("aspectRatio", 4 / 3);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r81 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 37);
    i0.ɵɵlistener("change", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_Template_div_change_4_listener($event) { i0.ɵɵrestoreView(_r81); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r79 = i0.ɵɵnextContext(3); return ctx_r79.onSelect($event, field_r7); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_img_5_Template, 1, 2, "img", 38);
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ngx_dropzone_label_6_Template, 3, 0, "ngx-dropzone-label", 0);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template, 1, 2, "ngx-dropzone-image-preview", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_button_8_Template, 2, 0, "button", 43);
    i0.ɵɵtemplate(9, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ng_container_9_Template, 6, 3, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r21 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 6, field_r7.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r21.urlsImage[field_r7.name] != "" && ctx_r21.filesUpload[field_r7.name].length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r21.filesUpload[field_r7.name].length <= 0 && ctx_r21.urlsImage[field_r7.name] == "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r21.filesUpload[field_r7.name]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r21.isCrop[field_r7.name] && ctx_r21.controlCroper[field_r7.name] != null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r21.isCrop[field_r7.name]);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_12_nb_tag_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 50);
} if (rf & 2) {
    const tree_r84 = ctx.$implicit;
    i0.ɵɵproperty("text", tree_r84);
} }
const _c2$1 = function (a0) { return [a0]; };
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-tag-list", 47);
    i0.ɵɵlistener("tagRemove", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_12_Template_nb_tag_list_tagRemove_4_listener($event) { i0.ɵɵrestoreView(_r87); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r85 = i0.ɵɵnextContext(3); return ctx_r85.onTagRemove($event, field_r7.name); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_12_nb_tag_5_Template, 1, 1, "nb-tag", 48);
    i0.ɵɵelementStart(6, "input", 49);
    i0.ɵɵlistener("tagAdd", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_12_Template_input_tagAdd_6_listener($event) { i0.ɵɵrestoreView(_r87); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r88 = i0.ɵɵnextContext(3); return ctx_r88.onTagAdd($event, field_r7.name); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r22 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, field_r7.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r22.form.get(i0.ɵɵpureFunction1(6, _c2$1, field_r7.name)).value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "input", 57);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r95 = i0.ɵɵnextContext(3);
    const field_r7 = ctx_r95.$implicit;
    const i_r8 = ctx_r95.index;
    const ctx_r92 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("value", ctx_r92.belongToValue[field_r7.name] ? ctx_r92.belongToValue[field_r7.name] : "")("id", i_r8 + 100);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_nb_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r96 = ctx.$implicit;
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", option_r96[(field_r7 == null ? null : field_r7.metaData == null ? null : field_r7.metaData.addConfig.belongToOptions == null ? null : field_r7.metaData.addConfig.belongToOptions.value) ? field_r7 == null ? null : field_r7.metaData == null ? null : field_r7.metaData.addConfig == null ? null : field_r7.metaData.addConfig.belongToOptions == null ? null : field_r7.metaData.addConfig.belongToOptions.value : "id"])("attributes", field_r7.metaData.attributes);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r96[field_r7.metaData.addConfig.belongToOptions.template ? field_r7.metaData.addConfig.belongToOptions.template : field_r7.metaData.addConfig.belongToOptions.filterKeys[0]], " ");
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r100 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelementStart(6, "input", 51, 52);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r100); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r98 = i0.ɵɵnextContext(3); return ctx_r98.filterInput($event, field_r7); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_div_8_Template, 2, 3, "div", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "nb-autocomplete", 54, 55);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_Template_nb_autocomplete_selectedChange_9_listener($event) { i0.ɵɵrestoreView(_r100); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r101 = i0.ɵɵnextContext(3); return ctx_r101.onSelectionChange($event, field_r7); });
    i0.ɵɵtemplate(11, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_nb_option_11_Template, 2, 3, "nb-option", 56);
    i0.ɵɵpipe(12, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r93 = i0.ɵɵreference(10);
    const ctx_r103 = i0.ɵɵnextContext(2);
    const field_r7 = ctx_r103.$implicit;
    const i_r8 = ctx_r103.index;
    const ctx_r23 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 7, field_r7.label));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("formControlName", field_r7.name)("nbAutocomplete", _r93)("id", i_r8);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !(field_r7.metaData == null ? null : field_r7.metaData.addConfig == null ? null : field_r7.metaData.addConfig.belongToOptions == null ? null : field_r7.metaData.addConfig.belongToOptions.secondField));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(12, 9, ctx_r23.allFilterContains[field_r7.name]));
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_nb_tag_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 64);
} if (rf & 2) {
    const tree_r108 = ctx.$implicit;
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("text", tree_r108[field_r7.metaData.addConfig.belongToManyOptions.template ? field_r7.metaData.addConfig.belongToManyOptions.template : field_r7.metaData.addConfig.belongToManyOptions.filterKeys[0]])("attributes", field_r7.metaData.attributes);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_nb_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r110 = ctx.$implicit;
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", option_r110)("attributes", field_r7.metaData.attributes);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r110[field_r7.metaData.addConfig.belongToManyOptions.template ? field_r7.metaData.addConfig.belongToManyOptions.template : field_r7.metaData.addConfig.belongToManyOptions.filterKeys[0]], " ");
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r114 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-tag-list", 59);
    i0.ɵɵlistener("tagRemove", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_Template_nb_tag_list_tagRemove_4_listener($event) { i0.ɵɵrestoreView(_r114); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r112 = i0.ɵɵnextContext(3); return ctx_r112.onTagRemoveBelong($event, field_r7); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_nb_tag_5_Template, 1, 2, "nb-tag", 60);
    i0.ɵɵelementStart(6, "input", 61, 62);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r114); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r115 = i0.ɵɵnextContext(3); return ctx_r115.filterInput($event, field_r7); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "nb-autocomplete", 54, 63);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_Template_nb_autocomplete_selectedChange_8_listener($event) { i0.ɵɵrestoreView(_r114); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r117 = i0.ɵɵnextContext(3); return ctx_r117.onChoose($event, field_r7); });
    i0.ɵɵtemplate(10, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_nb_option_10_Template, 2, 3, "nb-option", 56);
    i0.ɵɵpipe(11, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r106 = i0.ɵɵreference(9);
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r24 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 7, field_r7.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r24.belongToMany[field_r7.name]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("nbAutocomplete", _r106)("placeholder", field_r7.label)("formControlName", field_r7.name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 9, ctx_r24.allFilterContains[field_r7.name]));
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 65);
    i0.ɵɵelement(5, "input", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r120 = i0.ɵɵnextContext(2);
    const field_r7 = ctx_r120.$implicit;
    const i_r8 = ctx_r120.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r7.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("id", i_r8)("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label)("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r121 = i0.ɵɵnextContext(2);
    const field_r7 = ctx_r121.$implicit;
    const i_r8 = ctx_r121.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r8)("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label)("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r126 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 69);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r126); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r124 = i0.ɵɵnextContext(3); return ctx_r124.addJSONField(field_r7); });
    i0.ɵɵelement(1, "nb-icon", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes);
} }
const _c3 = function () { return { standalone: true }; };
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r136 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 78);
    i0.ɵɵlistener("ngModelChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_input_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r136); const item_r128 = i0.ɵɵnextContext().$implicit; return item_r128.label = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r128 = i0.ɵɵnextContext().$implicit;
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngModel", item_r128.label)("attributes", field_r7.metaData.attributes)("ngModelOptions", i0.ɵɵpureFunction0(3, _c3));
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 79);
} if (rf & 2) {
    const item_r128 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", item_r128.label);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r142 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 75);
    i0.ɵɵelementStart(1, "button", 80);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_div_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r142); const index_r129 = i0.ɵɵnextContext().index; const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r140 = i0.ɵɵnextContext(3); return ctx_r140.removeJSONField(field_r7, index_r129); });
    i0.ɵɵelement(2, "nb-icon", 81);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r145 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 71);
    i0.ɵɵelementStart(1, "div", 72);
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_input_2_Template, 1, 4, "input", 73);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_ng_template_3_Template, 1, 1, "ng-template", null, 74, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 75);
    i0.ɵɵelementStart(6, "input", 76);
    i0.ɵɵlistener("ngModelChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_Template_input_ngModelChange_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r145); const item_r128 = restoredCtx.$implicit; return item_r128.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_div_7_Template, 3, 0, "div", 77);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r128 = ctx.$implicit;
    const index_r129 = ctx.index;
    const _r131 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", index_r129);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r128.add)("ngIfElse", _r131);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", item_r128.value)("ngModelOptions", i0.ɵɵpureFunction0(6, _c3));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r128.add);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelementStart(2, "label", 19);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_button_5_Template, 2, 1, "button", 67);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_Template, 8, 7, "div", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r27 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 3, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r7.metaData.addConfig.jsonConfig.isOpen);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r27.jsonEditorOptions[field_r7.name]);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_nb_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 85);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r151 = ctx.$implicit;
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("value", option_r151.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r151.label);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_nb_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r153 = ctx.$implicit;
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", option_r153[(field_r7 == null ? null : field_r7.metaData == null ? null : field_r7.metaData.addConfig.morphConfig == null ? null : field_r7.metaData.addConfig.morphConfig.value) ? field_r7 == null ? null : field_r7.metaData == null ? null : field_r7.metaData.addConfig.morphConfig == null ? null : field_r7.metaData.addConfig.morphConfig.value : "id"])("attributes", field_r7.metaData.attributes);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r153[field_r7.metaData.addConfig.morphConfig.template ? field_r7.metaData.addConfig.morphConfig.template : field_r7.metaData.addConfig.morphConfig.filterKeys[0]], " ");
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r157 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 7);
    i0.ɵɵelementStart(3, "label", 19);
    i0.ɵɵtext(4, "Ressources");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "nb-select", 82);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_Template_nb_select_selectedChange_5_listener($event) { i0.ɵɵrestoreView(_r157); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r155 = i0.ɵɵnextContext(3); return ctx_r155.onMorphSelectField($event, field_r7.name); });
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_nb_option_6_Template, 2, 3, "nb-option", 83);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 6);
    i0.ɵɵelementStart(8, "label", 19);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 84, 52);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_Template_input_keyup_11_listener($event) { i0.ɵɵrestoreView(_r157); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r158 = i0.ɵɵnextContext(3); return ctx_r158.filterInput($event, field_r7); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "nb-autocomplete", 54, 55);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_Template_nb_autocomplete_selectedChange_13_listener($event) { i0.ɵɵrestoreView(_r157); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r160 = i0.ɵɵnextContext(3); return ctx_r160.onSelectionChange($event, field_r7); });
    i0.ɵɵtemplate(15, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_nb_option_15_Template, 2, 3, "nb-option", 56);
    i0.ɵɵpipe(16, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r149 = i0.ɵɵreference(14);
    const ctx_r162 = i0.ɵɵnextContext(2);
    const field_r7 = ctx_r162.$implicit;
    const i_r8 = ctx_r162.index;
    const ctx_r28 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", field_r7.metaData.addConfig.morphConfig.related);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 8, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("formControlName", field_r7.name)("nbAutocomplete", _r149)("id", i_r8)("disabled", !ctx_r28.allFilterContains[field_r7.name]);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(16, 10, ctx_r28.allFilterContains[field_r7.name]));
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r165 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ngx-gmaps", 86);
    i0.ɵɵlistener("latChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_19_Template_ngx_gmaps_latChange_4_listener($event) { i0.ɵɵrestoreView(_r165); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r163 = i0.ɵɵnextContext(3); return ctx_r163.onLatChange($event, field_r7.name); })("lngChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_19_Template_ngx_gmaps_lngChange_4_listener($event) { i0.ɵɵrestoreView(_r165); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r166 = i0.ɵɵnextContext(3); return ctx_r166.onLngChange($event, field_r7.name); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r29 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("googleMapKey", ctx_r29.googleMapKeys);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_1_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_2_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_3_Template, 7, 8, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_4_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_5_Template, 7, 7, "div", 17);
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_6_Template, 7, 7, "div", 17);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_7_Template, 7, 6, "div", 17);
    i0.ɵɵtemplate(8, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_8_Template, 6, 7, "ng-container", 17);
    i0.ɵɵtemplate(9, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_9_Template, 6, 4, "div", 17);
    i0.ɵɵtemplate(10, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_Template, 8, 6, "div", 17);
    i0.ɵɵtemplate(11, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_Template, 10, 8, "div", 17);
    i0.ɵɵtemplate(12, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_12_Template, 7, 8, "div", 17);
    i0.ɵɵtemplate(13, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_Template, 13, 11, "div", 17);
    i0.ɵɵtemplate(14, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_Template, 12, 11, "div", 17);
    i0.ɵɵtemplate(15, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_15_Template, 6, 7, "div", 17);
    i0.ɵɵtemplate(16, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_16_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(17, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_Template, 7, 5, "div", 17);
    i0.ɵɵtemplate(18, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_Template, 17, 12, "div", 17);
    i0.ɵɵtemplate(19, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_19_Template, 5, 4, "div", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.STRING || field_r7.type == ctx_r9.REST_FIELD_TYPES.HAS_ONE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.TEXT);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.PASSWORD);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.NUMBER);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.DATETIME);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.TIME);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.FILE || field_r7.type == ctx_r9.REST_FIELD_TYPES.PDF);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.BELONG_TO_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.JSON);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.MORPH);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.MAP);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 87);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r7.note);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_Template, 20, 19, "ng-container", 0);
    i0.ɵɵelementStart(2, "div", 16);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_3_Template, 3, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.inForm);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r7.note != "");
} }
function RestResourceAddComponent_ng_container_0_form_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 13);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_0_form_7_div_1_Template, 4, 2, "div", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("formGroup", ctx_r4.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.resource.fields)("ngForTrackBy", ctx_r4.trackByFn);
} }
function RestResourceAddComponent_ng_container_0_span_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 88);
} }
function RestResourceAddComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r172 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nb-card");
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_0_nb_card_header_2_Template, 2, 1, "nb-card-header", 0);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_0_nb_card_header_3_Template, 2, 1, "nb-card-header", 0);
    i0.ɵɵelementStart(4, "nb-card-body");
    i0.ɵɵelementStart(5, "nb-tabset", 1);
    i0.ɵɵelementStart(6, "nb-tab", 2);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_0_form_7_Template, 2, 3, "form", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "nb-tab", 4);
    i0.ɵɵelementStart(9, "div", 5);
    i0.ɵɵelement(10, "div", 6);
    i0.ɵɵelementStart(11, "div", 7);
    i0.ɵɵelementStart(12, "button", 8);
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div");
    i0.ɵɵelement(16, "ng2-smart-table", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "nb-card-footer");
    i0.ɵɵelementStart(18, "div", 10);
    i0.ɵɵelementStart(19, "button", 11);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_0_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r172); const ctx_r171 = i0.ɵɵnextContext(); return ctx_r171.onSumbit(); });
    i0.ɵɵtext(20, " > ");
    i0.ɵɵtemplate(21, RestResourceAddComponent_ng_container_0_span_21_Template, 1, 0, "span", 12);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.formState.onReady && !ctx_r0.formState.isAdd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.formState.onReady && ctx_r0.formState.isAdd);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.formState.onReady);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("nbContextMenu", ctx_r0.items);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(14, 10, "rest-add.import"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("settings", ctx_r0.settings)("source", ctx_r0.source);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r0.loading);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formState.btnLabel, " ");
} }
function RestResourceAddComponent_ng_container_1_div_1_nb_card_header_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-card-header");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r174 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r174.resource.editConfig.title, " ");
} }
function RestResourceAddComponent_ng_container_1_div_1_nb_card_header_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-card-header");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r175 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r175.resource.addConfig.title, " ");
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r203 = i0.ɵɵnextContext(2);
    const field_r180 = ctx_r203.$implicit;
    const i_r181 = ctx_r203.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r181)("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label)("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "textarea", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r204 = i0.ɵɵnextContext(2);
    const field_r180 = ctx_r204.$implicit;
    const i_r181 = ctx_r204.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r181)("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label)("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "label", 19);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r206 = i0.ɵɵnextContext(3);
    const field_r180 = ctx_r206.$implicit;
    const i_r181 = ctx_r206.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((field_r180 == null ? null : field_r180.metaData == null ? null : field_r180.metaData.addConfig == null ? null : field_r180.metaData.addConfig.passwordOptions == null ? null : field_r180.metaData.addConfig.passwordOptions.confirmLabel) ? field_r180 == null ? null : field_r180.metaData == null ? null : field_r180.metaData.addConfig == null ? null : field_r180.metaData.addConfig.passwordOptions == null ? null : field_r180.metaData.addConfig.passwordOptions.confirmLabel : i0.ɵɵpipeBind1(4, 5, field_r180.label + "_confirmation"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r181)("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label + "_confirmation")("formControlName", (field_r180.metaData == null ? null : field_r180.metaData.addConfig == null ? null : field_r180.metaData.addConfig.passwordOptions == null ? null : field_r180.metaData.addConfig.passwordOptions.confirmField) ? field_r180.metaData.addConfig.passwordOptions.confirmField : field_r180.name + "_confirmation");
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "label", 19);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_3_ng_container_6_Template, 6, 7, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r207 = i0.ɵɵnextContext(2);
    const field_r180 = ctx_r207.$implicit;
    const i_r181 = ctx_r207.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 6, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r181)("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label)("formControlName", field_r180.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180 == null ? null : field_r180.metaData == null ? null : field_r180.metaData.addConfig == null ? null : field_r180.metaData.addConfig.passwordOptions == null ? null : field_r180.metaData.addConfig.passwordOptions.isNeedConfirm);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r208 = i0.ɵɵnextContext(2);
    const field_r180 = ctx_r208.$implicit;
    const i_r181 = ctx_r208.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r181)("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label)("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 24);
    i0.ɵɵelement(5, "nb-datepicker", null, 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r209 = i0.ɵɵreference(6);
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", field_r180.label)("nbDatepicker", _r209)("attributes", field_r180.metaData.attributes)("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 26);
    i0.ɵɵelement(5, "nb-date-timepicker", 27, 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r211 = i0.ɵɵreference(6);
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label)("nbDatepicker", _r211)("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 29);
    i0.ɵɵelement(5, "nb-timepicker", null, 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r213 = i0.ɵɵreference(6);
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nbTimepicker", _r213)("attributes", field_r180.metaData.attributes)("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_8_nb_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r216 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r216.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r216.label);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-select", 31);
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_8_nb_option_5_Template, 2, 2, "nb-option", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControlName", field_r180.name)("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", field_r180.metaData.addConfig.enumOptions);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵelementStart(2, "label", 35);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "nb-toggle", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 2, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 40);
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r219 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("src", ctx_r219.urlsImage[field_r180.name], i0.ɵɵsanitizeUrl);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_ngx_dropzone_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-dropzone-label");
    i0.ɵɵelement(1, "nb-icon", 41);
    i0.ɵɵtext(2, " Drag and drop files here or click to upload ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template(rf, ctx) { if (rf & 1) {
    const _r226 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-dropzone-preview", 42);
    i0.ɵɵlistener("removed", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template_ngx_dropzone_preview_removed_0_listener() { i0.ɵɵrestoreView(_r226); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r224 = i0.ɵɵnextContext(4); return ctx_r224.onRemove(field_r180); });
    i0.ɵɵelementStart(1, "ngx-dropzone-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r223 = ctx.$implicit;
    i0.ɵɵproperty("file", f_r223)("removable", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", f_r223.name, " (", f_r223.type, ")");
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r229 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 37);
    i0.ɵɵlistener("change", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_Template_div_change_4_listener($event) { i0.ɵɵrestoreView(_r229); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r227 = i0.ɵɵnextContext(4); return ctx_r227.onSelect($event, field_r180); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_img_5_Template, 1, 2, "img", 38);
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_ngx_dropzone_label_6_Template, 3, 0, "ngx-dropzone-label", 0);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template, 3, 4, "ngx-dropzone-preview", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r193 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, field_r180.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r193.urlsImage[field_r180.name] != "" && ctx_r193.filesUpload[field_r180.name].length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r193.filesUpload[field_r180.name].length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r193.filesUpload[field_r180.name]);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 40);
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r231 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("src", ctx_r231.urlsImage[field_r180.name], i0.ɵɵsanitizeUrl);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ngx_dropzone_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-dropzone-label");
    i0.ɵɵelement(1, "nb-icon", 41);
    i0.ɵɵtext(2, " Drag and drop files here or click to upload ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template(rf, ctx) { if (rf & 1) {
    const _r240 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-dropzone-image-preview", 42);
    i0.ɵɵlistener("removed", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template_ngx_dropzone_image_preview_removed_0_listener() { i0.ɵɵrestoreView(_r240); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r238 = i0.ɵɵnextContext(4); return ctx_r238.onRemove(field_r180); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r237 = ctx.$implicit;
    i0.ɵɵproperty("file", f_r237)("removable", true);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r243 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r243); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r241 = i0.ɵɵnextContext(4); return ctx_r241.activeCroper(field_r180); });
    i0.ɵɵtext(1, " CROP ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r246 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "image-cropper", 45);
    i0.ɵɵlistener("imageCropped", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ng_container_9_Template_image_cropper_imageCropped_1_listener($event) { i0.ɵɵrestoreView(_r246); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r244 = i0.ɵɵnextContext(4); return ctx_r244.imageCropped($event, field_r180); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 44);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ng_container_9_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r246); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r247 = i0.ɵɵnextContext(4); return ctx_r247.saveCroper(field_r180); });
    i0.ɵɵtext(3, " SAVE CHANGE ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 46);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ng_container_9_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r246); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r249 = i0.ɵɵnextContext(4); return ctx_r249.desactiveCrop(field_r180); });
    i0.ɵɵtext(5, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r235 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("imageFile", ctx_r235.controlCroper[field_r180.name])("maintainAspectRatio", true)("aspectRatio", 4 / 3);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r254 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 37);
    i0.ɵɵlistener("change", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_Template_div_change_4_listener($event) { i0.ɵɵrestoreView(_r254); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r252 = i0.ɵɵnextContext(4); return ctx_r252.onSelect($event, field_r180); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_img_5_Template, 1, 2, "img", 38);
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ngx_dropzone_label_6_Template, 3, 0, "ngx-dropzone-label", 0);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template, 1, 2, "ngx-dropzone-image-preview", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_button_8_Template, 2, 0, "button", 43);
    i0.ɵɵtemplate(9, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ng_container_9_Template, 6, 3, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r194 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 6, field_r180.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r194.urlsImage[field_r180.name] != "" && ctx_r194.filesUpload[field_r180.name].length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r194.filesUpload[field_r180.name].length <= 0 && ctx_r194.urlsImage[field_r180.name] == "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r194.filesUpload[field_r180.name]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r194.isCrop[field_r180.name] && ctx_r194.controlCroper[field_r180.name] != null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r194.isCrop[field_r180.name]);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_12_nb_tag_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 50);
} if (rf & 2) {
    const tree_r257 = ctx.$implicit;
    i0.ɵɵproperty("text", tree_r257);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r260 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-tag-list", 47);
    i0.ɵɵlistener("tagRemove", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_12_Template_nb_tag_list_tagRemove_4_listener($event) { i0.ɵɵrestoreView(_r260); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r258 = i0.ɵɵnextContext(4); return ctx_r258.onTagRemove($event, field_r180.name); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_12_nb_tag_5_Template, 1, 1, "nb-tag", 48);
    i0.ɵɵelementStart(6, "input", 49);
    i0.ɵɵlistener("tagAdd", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_12_Template_input_tagAdd_6_listener($event) { i0.ɵɵrestoreView(_r260); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r261 = i0.ɵɵnextContext(4); return ctx_r261.onTagAdd($event, field_r180.name); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r195 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, field_r180.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r195.form.get(i0.ɵɵpureFunction1(6, _c2$1, field_r180.name)).value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "input", 57);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r268 = i0.ɵɵnextContext(3);
    const field_r180 = ctx_r268.$implicit;
    const i_r181 = ctx_r268.index;
    const ctx_r265 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("value", ctx_r265.belongToValue[field_r180.name] ? ctx_r265.belongToValue[field_r180.name] : "")("id", i_r181 + 100);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_nb_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r269 = ctx.$implicit;
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", option_r269[(field_r180 == null ? null : field_r180.metaData == null ? null : field_r180.metaData.addConfig.belongToOptions == null ? null : field_r180.metaData.addConfig.belongToOptions.value) ? field_r180 == null ? null : field_r180.metaData == null ? null : field_r180.metaData.addConfig == null ? null : field_r180.metaData.addConfig.belongToOptions == null ? null : field_r180.metaData.addConfig.belongToOptions.value : "id"])("attributes", field_r180.metaData.attributes);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r269[field_r180.metaData.addConfig.belongToOptions.template ? field_r180.metaData.addConfig.belongToOptions.template : field_r180.metaData.addConfig.belongToOptions.filterKeys[0]], " ");
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r273 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelementStart(6, "input", 51, 52);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r273); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r271 = i0.ɵɵnextContext(4); return ctx_r271.filterInput($event, field_r180); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_div_8_Template, 2, 3, "div", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "nb-autocomplete", 54, 55);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_Template_nb_autocomplete_selectedChange_9_listener($event) { i0.ɵɵrestoreView(_r273); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r274 = i0.ɵɵnextContext(4); return ctx_r274.onSelectionChange($event, field_r180); });
    i0.ɵɵtemplate(11, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_nb_option_11_Template, 2, 3, "nb-option", 56);
    i0.ɵɵpipe(12, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r266 = i0.ɵɵreference(10);
    const ctx_r276 = i0.ɵɵnextContext(2);
    const field_r180 = ctx_r276.$implicit;
    const i_r181 = ctx_r276.index;
    const ctx_r196 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 7, field_r180.label));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("formControlName", field_r180.name)("nbAutocomplete", _r266)("id", i_r181);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !(field_r180.metaData == null ? null : field_r180.metaData.addConfig == null ? null : field_r180.metaData.addConfig.belongToOptions == null ? null : field_r180.metaData.addConfig.belongToOptions.secondField));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(12, 9, ctx_r196.allFilterContains[field_r180.name]));
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_nb_tag_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 64);
} if (rf & 2) {
    const tree_r281 = ctx.$implicit;
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("text", tree_r281[field_r180.metaData.addConfig.belongToManyOptions.template ? field_r180.metaData.addConfig.belongToManyOptions.template : field_r180.metaData.addConfig.belongToManyOptions.filterKeys[0]])("attributes", field_r180.metaData.attributes);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_nb_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r283 = ctx.$implicit;
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", option_r283)("attributes", field_r180.metaData.attributes);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r283[field_r180.metaData.addConfig.belongToManyOptions.template ? field_r180.metaData.addConfig.belongToManyOptions.template : field_r180.metaData.addConfig.belongToManyOptions.filterKeys[0]], " ");
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r287 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-tag-list", 59);
    i0.ɵɵlistener("tagRemove", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_Template_nb_tag_list_tagRemove_4_listener($event) { i0.ɵɵrestoreView(_r287); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r285 = i0.ɵɵnextContext(4); return ctx_r285.onTagRemoveBelong($event, field_r180); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_nb_tag_5_Template, 1, 2, "nb-tag", 60);
    i0.ɵɵelementStart(6, "input", 61, 62);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r287); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r288 = i0.ɵɵnextContext(4); return ctx_r288.filterInput($event, field_r180); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "nb-autocomplete", 54, 63);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_Template_nb_autocomplete_selectedChange_8_listener($event) { i0.ɵɵrestoreView(_r287); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r290 = i0.ɵɵnextContext(4); return ctx_r290.onChoose($event, field_r180); });
    i0.ɵɵtemplate(10, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_nb_option_10_Template, 2, 3, "nb-option", 56);
    i0.ɵɵpipe(11, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r279 = i0.ɵɵreference(9);
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r197 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 7, field_r180.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r197.belongToMany[field_r180.name]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("nbAutocomplete", _r279)("placeholder", field_r180.label)("formControlName", field_r180.name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 9, ctx_r197.allFilterContains[field_r180.name]));
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 65);
    i0.ɵɵelement(5, "input", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r293 = i0.ɵɵnextContext(2);
    const field_r180 = ctx_r293.$implicit;
    const i_r181 = ctx_r293.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r180.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("id", i_r181)("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label)("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r294 = i0.ɵɵnextContext(2);
    const field_r180 = ctx_r294.$implicit;
    const i_r181 = ctx_r294.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r181)("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label)("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r299 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 69);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r299); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r297 = i0.ɵɵnextContext(4); return ctx_r297.addJSONField(field_r180); });
    i0.ɵɵelement(1, "nb-icon", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r309 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 78);
    i0.ɵɵlistener("ngModelChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_input_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r309); const item_r301 = i0.ɵɵnextContext().$implicit; return item_r301.label = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r301 = i0.ɵɵnextContext().$implicit;
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngModel", item_r301.label)("attributes", field_r180.metaData.attributes)("ngModelOptions", i0.ɵɵpureFunction0(3, _c3));
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 79);
} if (rf & 2) {
    const item_r301 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", item_r301.label);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r315 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 75);
    i0.ɵɵelementStart(1, "button", 80);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_div_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r315); const index_r302 = i0.ɵɵnextContext().index; const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r313 = i0.ɵɵnextContext(4); return ctx_r313.removeJSONField(field_r180, index_r302); });
    i0.ɵɵelement(2, "nb-icon", 81);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r318 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 71);
    i0.ɵɵelementStart(1, "div", 72);
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_input_2_Template, 1, 4, "input", 73);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_ng_template_3_Template, 1, 1, "ng-template", null, 74, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 75);
    i0.ɵɵelementStart(6, "input", 76);
    i0.ɵɵlistener("ngModelChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_Template_input_ngModelChange_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r318); const item_r301 = restoredCtx.$implicit; return item_r301.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_div_7_Template, 3, 0, "div", 77);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r301 = ctx.$implicit;
    const index_r302 = ctx.index;
    const _r304 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", index_r302);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r301.add)("ngIfElse", _r304);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", item_r301.value)("ngModelOptions", i0.ɵɵpureFunction0(6, _c3));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r301.add);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelementStart(2, "label", 19);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_button_5_Template, 2, 1, "button", 67);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_Template, 8, 7, "div", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r200 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 3, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r180.metaData.addConfig.jsonConfig.isOpen);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r200.jsonEditorOptions[field_r180.name]);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_nb_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 85);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r324 = ctx.$implicit;
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("value", option_r324.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r324.label);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_nb_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r326 = ctx.$implicit;
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", option_r326[(field_r180 == null ? null : field_r180.metaData == null ? null : field_r180.metaData.addConfig.morphConfig == null ? null : field_r180.metaData.addConfig.morphConfig.value) ? field_r180 == null ? null : field_r180.metaData == null ? null : field_r180.metaData.addConfig.morphConfig == null ? null : field_r180.metaData.addConfig.morphConfig.value : "id"])("attributes", field_r180.metaData.attributes);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r326[field_r180.metaData.addConfig.morphConfig.template ? field_r180.metaData.addConfig.morphConfig.template : field_r180.metaData.addConfig.morphConfig.filterKeys[0]], " ");
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r330 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 7);
    i0.ɵɵelementStart(3, "label", 19);
    i0.ɵɵtext(4, "Ressources");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "nb-select", 82);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_Template_nb_select_selectedChange_5_listener($event) { i0.ɵɵrestoreView(_r330); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r328 = i0.ɵɵnextContext(4); return ctx_r328.onMorphSelectField($event, field_r180.name); });
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_nb_option_6_Template, 2, 3, "nb-option", 83);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 6);
    i0.ɵɵelementStart(8, "label", 19);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 84, 52);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_Template_input_keyup_11_listener($event) { i0.ɵɵrestoreView(_r330); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r331 = i0.ɵɵnextContext(4); return ctx_r331.filterInput($event, field_r180); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "nb-autocomplete", 54, 55);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_Template_nb_autocomplete_selectedChange_13_listener($event) { i0.ɵɵrestoreView(_r330); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r333 = i0.ɵɵnextContext(4); return ctx_r333.onSelectionChange($event, field_r180); });
    i0.ɵɵtemplate(15, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_nb_option_15_Template, 2, 3, "nb-option", 56);
    i0.ɵɵpipe(16, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r322 = i0.ɵɵreference(14);
    const ctx_r335 = i0.ɵɵnextContext(2);
    const field_r180 = ctx_r335.$implicit;
    const i_r181 = ctx_r335.index;
    const ctx_r201 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", field_r180.metaData.addConfig.morphConfig.related);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 8, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("formControlName", field_r180.name)("nbAutocomplete", _r322)("id", i_r181)("disabled", !ctx_r201.allFilterContains[field_r180.name]);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(16, 10, ctx_r201.allFilterContains[field_r180.name]));
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r338 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ngx-gmaps", 86);
    i0.ɵɵlistener("latChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_19_Template_ngx_gmaps_latChange_4_listener($event) { i0.ɵɵrestoreView(_r338); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r336 = i0.ɵɵnextContext(4); return ctx_r336.onLatChange($event, field_r180.name); })("lngChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_19_Template_ngx_gmaps_lngChange_4_listener($event) { i0.ɵɵrestoreView(_r338); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r339 = i0.ɵɵnextContext(4); return ctx_r339.onLngChange($event, field_r180.name); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r202 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("googleMapKey", ctx_r202.googleMapKeys);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_1_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_2_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_3_Template, 7, 8, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_4_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_5_Template, 7, 7, "div", 17);
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_6_Template, 7, 7, "div", 17);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_7_Template, 7, 6, "div", 17);
    i0.ɵɵtemplate(8, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_8_Template, 6, 7, "ng-container", 17);
    i0.ɵɵtemplate(9, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_9_Template, 6, 4, "div", 17);
    i0.ɵɵtemplate(10, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_Template, 8, 6, "div", 17);
    i0.ɵɵtemplate(11, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_Template, 10, 8, "div", 17);
    i0.ɵɵtemplate(12, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_12_Template, 7, 8, "div", 17);
    i0.ɵɵtemplate(13, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_Template, 13, 11, "div", 17);
    i0.ɵɵtemplate(14, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_Template, 12, 11, "div", 17);
    i0.ɵɵtemplate(15, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_15_Template, 6, 7, "div", 17);
    i0.ɵɵtemplate(16, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_16_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(17, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_Template, 7, 5, "div", 17);
    i0.ɵɵtemplate(18, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_Template, 17, 12, "div", 17);
    i0.ɵɵtemplate(19, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_19_Template, 5, 4, "div", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext().$implicit;
    const ctx_r182 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.STRING || field_r180.type == ctx_r182.REST_FIELD_TYPES.HAS_ONE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.TEXT);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.PASSWORD);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.NUMBER);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.DATETIME);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.TIME);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.FILE || field_r180.type == ctx_r182.REST_FIELD_TYPES.PDF);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.BELONG_TO_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.JSON);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.MORPH);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.MAP);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 87);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r180.note);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_Template, 20, 19, "ng-container", 0);
    i0.ɵɵelementStart(2, "div", 16);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_3_Template, 3, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r180 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.inForm);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r180.note != "");
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 13);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_Template, 4, 2, "div", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r176 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("formGroup", ctx_r176.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r176.resource.fields)("ngForTrackBy", ctx_r176.trackByFn);
} }
function RestResourceAddComponent_ng_container_1_div_1_div_18_button_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 88);
} }
function RestResourceAddComponent_ng_container_1_div_1_div_18_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r347 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_div_18_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r347); const ctx_r346 = i0.ɵɵnextContext(4); return ctx_r346.onEdit(); });
    i0.ɵɵtext(1, " > ");
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_1_div_1_div_18_button_1_span_2_Template, 1, 0, "span", 12);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r344 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r344.loading);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r344.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r344.formState.btnLabel, " ");
} }
function RestResourceAddComponent_ng_container_1_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_div_1_div_18_button_1_Template, 4, 3, "button", 91);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r177 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r177.PERMISSION.UPDATE);
} }
function RestResourceAddComponent_ng_container_1_div_1_div_19_button_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 88);
} }
function RestResourceAddComponent_ng_container_1_div_1_div_19_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r351 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_div_19_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r351); const ctx_r350 = i0.ɵɵnextContext(4); return ctx_r350.onCreate(); });
    i0.ɵɵtext(1, " > ");
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_1_div_1_div_19_button_1_span_2_Template, 1, 0, "span", 12);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r348 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r348.loading);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r348.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r348.formState.btnLabel, " ");
} }
function RestResourceAddComponent_ng_container_1_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_div_1_div_19_button_1_Template, 4, 3, "button", 91);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r178 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r178.PERMISSION.CREATE);
} }
function RestResourceAddComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "nb-card");
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_1_div_1_nb_card_header_2_Template, 2, 1, "nb-card-header", 0);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_1_div_1_nb_card_header_3_Template, 2, 1, "nb-card-header", 0);
    i0.ɵɵelementStart(4, "nb-card-body");
    i0.ɵɵelementStart(5, "nb-tabset", 1);
    i0.ɵɵelementStart(6, "nb-tab", 2);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_1_div_1_form_7_Template, 2, 3, "form", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "nb-tab", 4);
    i0.ɵɵelementStart(9, "div", 5);
    i0.ɵɵelement(10, "div", 6);
    i0.ɵɵelementStart(11, "div", 7);
    i0.ɵɵelementStart(12, "button", 8);
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div");
    i0.ɵɵelement(16, "ng2-smart-table", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "nb-card-footer");
    i0.ɵɵtemplate(18, RestResourceAddComponent_ng_container_1_div_1_div_18_Template, 2, 1, "div", 90);
    i0.ɵɵtemplate(19, RestResourceAddComponent_ng_container_1_div_1_div_19_Template, 2, 1, "div", 90);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r173 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r173.formState.onReady && !ctx_r173.formState.isAdd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r173.formState.onReady && ctx_r173.formState.isAdd);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r173.formState.onReady);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("nbContextMenu", ctx_r173.items);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(14, 9, "rest-add.import"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("settings", ctx_r173.settings)("source", ctx_r173.source);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r173.formState.isAdd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r173.formState.isAdd);
} }
function RestResourceAddComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_div_1_Template, 20, 11, "div", 89);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r1.permissions);
} }
class RestResourceAddComponent {
    constructor(fb, serviceRest, serviceRestAdminConfig, activatedRoute, nbMenuService, exportService, dialogService, router, notificationService, cdref, permissionsService) {
        this.fb = fb;
        this.serviceRest = serviceRest;
        this.serviceRestAdminConfig = serviceRestAdminConfig;
        this.activatedRoute = activatedRoute;
        this.nbMenuService = nbMenuService;
        this.exportService = exportService;
        this.dialogService = dialogService;
        this.router = router;
        this.notificationService = notificationService;
        this.cdref = cdref;
        this.permissionsService = permissionsService;
        this.message = 'Ressource ajoutée avec succès';
        this.formState = {
            btnLabel: 'Modifier',
            isAdd: false,
            idEntity: null,
            onReady: false,
        };
        // Loader
        this.loading = false;
        // End test
        //BELONG_TO FIELD
        this.options = {};
        this.allFilterContains = {};
        this.belongToValue = {};
        this.belongToMany = {};
        //json editor
        this.jsonEditorOptions = {};
        this.multiple = false;
        this.controlCroper = {};
        this.imageChangedEvent = '';
        this.croppedImage = {};
        this.isCrop = {};
        this.controlsImage = {};
        // Color
        this.colors = [];
        // End test
        //Import
        this.items = [{ title: 'Download template' }, { title: 'Import' }];
        this.alphabelt = ALPHABET;
        //Image
        this.filesUpload = {};
        this.urlsImage = {};
        //Morph_field
        this.morphFields = {};
        this.permissions = [PERMISSION.CREATE, PERMISSION.UPDATE];
        activatedRoute.params.subscribe((params) => {
            this.ressourceName =
                this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path.split('-')[0];
            this.resource = this.serviceRestAdminConfig.getSpecificResource(this.ressourceName);
            if (Object.keys(params).length != 0) {
                this.ressourceName =
                    this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 2].path.split('-')[0];
                this.resource = this.serviceRestAdminConfig.getSpecificResource(this.ressourceName);
                this.serviceRest
                    .getOneResource({
                    api: this.resource.editConfig.api,
                    queryParams: this.resource.editConfig.queryParams,
                }, params.id)
                    .subscribe((response) => {
                    this.initForm(response);
                    this.formState = {
                        btnLabel: 'Modifier',
                        isAdd: false,
                        idEntity: response.id,
                        onReady: true,
                    };
                });
            }
            else {
                this.initForm(null);
                this.formState = {
                    btnLabel: 'Ajouter',
                    isAdd: true,
                    onReady: true,
                };
            }
        });
    }
    ngOnInit() {
        this.googleMapKeys = this.serviceRestAdminConfig.googleMapApiKey;
        this.nbMenuService
            .onItemClick()
            .pipe(filter(({ tag }) => tag === 'my-context-add'), map(({ item: { title } }) => title))
            .subscribe((title) => {
            switch (title) {
                case 'Download template':
                    this.downloadTemplate();
                    break;
                case 'Import':
                    this.importData();
                    break;
                default:
                    console.log('pass');
                    break;
            }
        });
        this.settings = {
            hideSubHeader: true,
            actions: false,
            pager: {
                perPage: this.resource.listConfig.perPage,
            },
            columns: this.createMatTableColumns(),
        };
        this.cdref.detectChanges();
        if (this.resource.permissions.length > 0) {
            this.resource.permissions.forEach((permission) => {
                this.serviceRest
                    .getResources({
                    api: permission.fieldKey.api.substring(1),
                    queryParams: permission.fieldKey.queryParams
                        ? permission.fieldKey.queryParams
                        : {},
                })
                    .subscribe((resp) => {
                    const val = {};
                    permission.fieldKey.fieldForNextQuery.forEach((item) => {
                        val[item] = _.get(resp, item);
                        if (val[item]) {
                            this.permissionsService.addPermission(permission.type);
                        }
                    });
                });
            });
        }
    }
    initForm(datas) {
        if (datas != null) {
            this.controls = this.resource.fields.reduce((cumul, elt) => {
                var _a, _b, _c, _d, _e, _f;
                var filterKey = ((_c = (_b = (_a = elt.metaData) === null || _a === void 0 ? void 0 : _a.addConfig) === null || _b === void 0 ? void 0 : _b.belongToOptions) === null || _c === void 0 ? void 0 : _c.filterKeys[0])
                    ? (_f = (_e = (_d = elt.metaData) === null || _d === void 0 ? void 0 : _d.addConfig) === null || _e === void 0 ? void 0 : _e.belongToOptions) === null || _f === void 0 ? void 0 : _f.filterKeys[0]
                    : 'name';
                if (elt.inForm) {
                    switch (elt.type) {
                        case REST_FIELD_TYPES.FILE:
                        case REST_FIELD_TYPES.PDF:
                        case REST_FIELD_TYPES.IMAGE:
                            this.filesUpload[elt.name] = [];
                            this.urlsImage[elt.name] = datas[elt.name];
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: datas[elt.name] });
                        case REST_FIELD_TYPES.HAS_MANY:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: new Set([datas[elt.name]]) });
                        case REST_FIELD_TYPES.BOOLEAN:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: datas[elt.name] });
                        case REST_FIELD_TYPES.BELONG_TO:
                            const restResource = this.serviceRestAdminConfig.getSpecificResource(elt.metaData.addConfig.belongToOptions.resourceName);
                            this.serviceRest
                                .getResources({
                                api: restResource.api,
                                queryParams: elt.metaData.addConfig.belongToOptions
                                    .queryParams
                                    ? elt.metaData.addConfig.belongToOptions.queryParams
                                    : restResource.queryParams,
                            })
                                .subscribe((response) => {
                                this.options[elt.name] = [...response].sort((x, y) => {
                                    var _a;
                                    return (_a = x[filterKey]
                                        .toString()
                                        .toLowerCase()) === null || _a === void 0 ? void 0 : _a.localeCompare(y[filterKey].toString().toLowerCase());
                                });
                                this.allFilterContains[elt.name] = of(this.options[elt.name]);
                            });
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [datas[elt.name]] });
                        case REST_FIELD_TYPES.BELONG_TO_MANY:
                            const resource = this.serviceRestAdminConfig.getSpecificResource(elt.metaData.addConfig.belongToManyOptions.relatedName);
                            this.serviceRest
                                .getResources({
                                api: resource.api,
                                queryParams: elt.metaData.addConfig.belongToManyOptions
                                    .queryParams
                                    ? elt.metaData.addConfig.belongToManyOptions.queryParams
                                    : resource.queryParams,
                            })
                                .subscribe((response) => {
                                this.options[elt.name] = [...response].sort((x, y) => {
                                    var _a;
                                    return (_a = x[filterKey]
                                        .toString()
                                        .toLowerCase()) === null || _a === void 0 ? void 0 : _a.localeCompare(y[filterKey].toString().toLowerCase());
                                });
                                this.allFilterContains[elt.name] = of(this.options[elt.name]);
                            });
                            this.belongToMany[elt.name] = new Set(datas[elt.name]);
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [datas[elt.name]] });
                        case REST_FIELD_TYPES.LINK:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [datas[elt.name], Validator.url] });
                        case REST_FIELD_TYPES.COLOR:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: datas[elt.name] });
                        case REST_FIELD_TYPES.JSON:
                            const jsonFields = [];
                            if (elt.metaData &&
                                elt.metaData.addConfig &&
                                elt.metaData.addConfig.jsonConfig &&
                                elt.metaData.addConfig.jsonConfig.jsonFields) {
                                elt.metaData.addConfig.jsonConfig.jsonFields.map((field) => {
                                    if (datas[elt.name]) {
                                        if (datas[elt.name][0] == '{') {
                                            try {
                                                jsonFields.push({
                                                    label: field,
                                                    value: JSON.parse(datas[elt.name])[field],
                                                });
                                            }
                                            catch (error) {
                                                console.error(`Error parsing JSON for ${field} in ${elt.name}: ${error}`);
                                            }
                                        }
                                        else if (typeof datas[elt.name] !== 'string') {
                                            try {
                                                jsonFields.push({
                                                    label: field,
                                                    value: datas[elt.name][field],
                                                });
                                            }
                                            catch (error) {
                                                console.error(`Error accessing field ${field} in ${elt.name}: ${error}`);
                                            }
                                        }
                                        else {
                                            jsonFields.push({
                                                label: field,
                                                value: datas[elt.name],
                                            });
                                        }
                                    }
                                    else {
                                        jsonFields.push({ label: field, value: '' });
                                    }
                                });
                            }
                            this.jsonEditorOptions[elt.name] = jsonFields;
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: datas[elt.name] });
                        case REST_FIELD_TYPES.MORPH_ONE:
                            this.morphFields[elt.name] = {
                                type: datas[elt.name].type,
                                id: datas[elt.name].id,
                            };
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [null] });
                        case REST_FIELD_TYPES.MAP:
                            const lat = elt.metaData.addConfig.mapConfig.lattiudeKeyField;
                            const long = elt.metaData.addConfig.mapConfig.longitudeKeyField;
                            return Object.assign(Object.assign({}, cumul), { [lat]: datas[lat], [long]: datas[long] });
                        default:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: datas[elt.name] });
                    }
                }
                else
                    return Object.assign({}, cumul);
            }, {});
        }
        else {
            this.controls = this.resource.fields.reduce((cumul, elt) => {
                var _a, _b, _c, _d, _e, _f;
                var filterKey = ((_c = (_b = (_a = elt.metaData) === null || _a === void 0 ? void 0 : _a.addConfig) === null || _b === void 0 ? void 0 : _b.belongToOptions) === null || _c === void 0 ? void 0 : _c.filterKeys[0])
                    ? (_f = (_e = (_d = elt.metaData) === null || _d === void 0 ? void 0 : _d.addConfig) === null || _e === void 0 ? void 0 : _e.belongToOptions) === null || _f === void 0 ? void 0 : _f.filterKeys[0]
                    : 'name';
                if (elt.inForm) {
                    switch (elt.type) {
                        case REST_FIELD_TYPES.FILE:
                        case REST_FIELD_TYPES.PDF:
                        case REST_FIELD_TYPES.IMAGE:
                            this.filesUpload[elt.name] = [];
                            this.urlsImage[elt.name] = '';
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [null] });
                        case REST_FIELD_TYPES.HAS_MANY:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: new Set([]) });
                        case REST_FIELD_TYPES.BOOLEAN:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: false });
                        case REST_FIELD_TYPES.BELONG_TO:
                            const restResource = this.serviceRestAdminConfig.getSpecificResource(elt.metaData.addConfig.belongToOptions.resourceName);
                            if (restResource) {
                                this.serviceRest
                                    .getResources({
                                    api: restResource.api,
                                    queryParams: elt.metaData.addConfig.belongToOptions
                                        .queryParams
                                        ? elt.metaData.addConfig.belongToOptions.queryParams
                                        : restResource.queryParams,
                                })
                                    .subscribe((response) => {
                                    this.options[elt.name] = [...response].sort((x, y) => {
                                        var _a;
                                        return (_a = x[filterKey]
                                            .toString()
                                            .toLowerCase()) === null || _a === void 0 ? void 0 : _a.localeCompare(y[filterKey].toString().toLowerCase());
                                    });
                                    this.allFilterContains[elt.name] = of(this.options[elt.name]);
                                });
                            }
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [''] });
                        case REST_FIELD_TYPES.BELONG_TO_MANY:
                            const resource = this.serviceRestAdminConfig.getSpecificResource(elt.metaData.addConfig.belongToManyOptions.relatedName);
                            this.serviceRest
                                .getResources({
                                api: resource.api,
                                queryParams: elt.metaData.addConfig.belongToManyOptions
                                    .queryParams
                                    ? elt.metaData.addConfig.belongToManyOptions.queryParams
                                    : resource.queryParams,
                            })
                                .subscribe((response) => {
                                this.options[elt.name] = [...response].sort((x, y) => {
                                    var _a;
                                    return (_a = x[filterKey]
                                        .toString()
                                        .toLowerCase()) === null || _a === void 0 ? void 0 : _a.localeCompare(y[filterKey].toString().toLowerCase());
                                });
                                this.allFilterContains[elt.name] = of(this.options[elt.name]);
                            });
                            this.belongToMany[elt.name] = new Set();
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [] });
                        case REST_FIELD_TYPES.LINK:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: ['', Validator.url] });
                        case REST_FIELD_TYPES.JSON:
                            if (elt &&
                                elt.metaData &&
                                elt.metaData.addConfig &&
                                elt.metaData.addConfig.jsonConfig &&
                                elt.metaData.addConfig.jsonConfig.jsonFields) {
                                const jsonFields = [];
                                elt.metaData.addConfig.jsonConfig.jsonFields.forEach((field) => {
                                    jsonFields.push({ label: field, value: '' });
                                });
                                this.jsonEditorOptions[elt.name] = jsonFields;
                            }
                            else {
                                // Si une propriété requise n'est pas présente, renvoyer une erreur
                                throw new Error("Une erreur s'est produite lors du traitement de l'élément.");
                            }
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [null] });
                        case REST_FIELD_TYPES.MAP:
                            const lat = elt.metaData.addConfig.mapConfig.lattiudeKeyField;
                            const long = elt.metaData.addConfig.mapConfig.longitudeKeyField;
                            return Object.assign(Object.assign({}, cumul), { [lat]: [null], [long]: [null] });
                        default:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [''] });
                    }
                }
                else
                    return Object.assign({}, cumul);
            }, {});
        }
        this.form = this.fb.group(this.controls);
    }
    trackByFn(index) {
        return index;
    }
    reset() {
        this.form = this.fb.group(this.controls);
    }
    get REST_FIELD_TYPES() {
        return REST_FIELD_TYPES;
    }
    get PERMISSION() {
        return PERMISSION;
    }
    //Tags
    onTagRemove(tagToRemove, name) {
        const treesA = new Set(this.form.get([name]).value);
        treesA.delete(tagToRemove.text);
        this.form.patchValue({
            [name]: Array.from(treesA.values()),
        });
    }
    onTagAdd({ value, input }, name) {
        if (value) {
            const treesA = new Set(this.form.get([name]).value);
            treesA.add(value);
            this.form.patchValue({
                [name]: Array.from(treesA.values()),
            });
        }
        input.nativeElement.value = '';
    }
    // Autocomplete
    filter(value, field) {
        if (typeof value == 'string') {
            if (!this.options[field.name]) {
                return [];
            }
            else
                return this.options[field.name].filter((optionValue) => {
                    return field.metaData.addConfig.belongToOptions.filterKeys.some((elt) => {
                        var _a;
                        return `${(_a = optionValue[elt]) === null || _a === void 0 ? void 0 : _a.toLowerCase()}`.includes(`${value.toLowerCase()}`);
                    });
                });
        }
    }
    getFilteredOptions(value, field) {
        if (field.type == REST_FIELD_TYPES.BELONG_TO)
            return of(value).pipe(map((filterString) => this.filter(filterString, field)));
        else if (field.type == REST_FIELD_TYPES.MORPH)
            return of(value).pipe(map((filterString) => this.filterMany(filterString, field, 'morphConfig')));
        return of(value).pipe(map((filterString) => this.filterMany(filterString, field)));
    }
    onSelectionChange(event, field) {
        var _a, _b;
        const bVal = this.options[field.name]
            ? this.options[field.name].find((elt) => (elt === null || elt === void 0 ? void 0 : elt.id) === event)
            : {};
        this.belongToValue[field.name] = bVal
            ? bVal[((_a = field === null || field === void 0 ? void 0 : field.metaData) === null || _a === void 0 ? void 0 : _a.belongToSecondFieldLabel)
                ? (_b = field === null || field === void 0 ? void 0 : field.metaData) === null || _b === void 0 ? void 0 : _b.belongToSecondFieldLabel
                : 'name']
            : '';
        this.allFilterContains[field.name] = this.getFilteredOptions(event, field);
    }
    filterInput(event, field) {
        this.allFilterContains[field.name] = this.getFilteredOptions(event.target.value, field);
    }
    test(event) {
        console.log(event);
    }
    // End Autocomplete
    //Image input
    onSelect(event, field) {
        this.filesUpload[field.name] = [];
        const addedFiles = event.addedFiles;
        this.filesUpload[field.name] = [addedFiles[0]];
        if (field.type == REST_FIELD_TYPES.IMAGE) {
            this.isCrop[field.name] = true;
            this.controlCroper[field.name] = addedFiles[0];
        }
        this.form.patchValue({
            [field.name]: addedFiles[0],
        });
    }
    onRemove(field) {
        this.filesUpload[field.name] = [];
        this.form.patchValue({
            [field.name]: null,
        });
    }
    imageCropped(event, field) {
        this.croppedImage[field.name] = event.base64;
    }
    activeCroper(field) {
        this.isCrop[field.name] = true;
    }
    desactiveCrop(field) {
        this.isCrop[field.name] = false;
    }
    saveCroper(field) {
        this.isCrop[field.name] = false;
        this.filesUpload[field.name] = [
            base64ToFile(this.croppedImage[field.name]),
        ];
        this.form.patchValue({
            [field.name]: new File([base64ToFile(this.croppedImage[field.name])], field.name),
        });
    }
    //belongToManyOptions
    onChoose(event, field) {
        const cellData = Array.from(this.belongToMany[field.name]);
        if (event.id) {
            const search = cellData.find((elt) => elt.id == event.id);
            if (search == undefined) {
                const newElt = {
                    id: event.id,
                    [field.metaData.addConfig.belongToManyOptions.relatedIdName]: event.id,
                    [field.metaData.addConfig.belongToManyOptions.resourceIdName]: '',
                    [field.metaData.addConfig.belongToManyOptions.filterKeys[0]]: event[field.metaData.addConfig.belongToManyOptions.filterKeys[0]],
                    saveRelatedIdName: field.metaData.addConfig.belongToManyOptions.relatedIdName,
                    saveResourceIdName: field.metaData.addConfig.belongToManyOptions.resourceIdName,
                };
                this.belongToMany[field.name].add(newElt);
                this.form.patchValue({
                    [field.name]: Array.from(this.belongToMany[field.name].values()),
                });
            }
        }
        this.inputBelongToMany.nativeElement.value = '';
    }
    onTagRemoveBelong(tagToRemove, field) {
        const cellData = Array.from(this.belongToMany[field.name]);
        const save = [];
        cellData.forEach((elt) => {
            if (elt[field.metaData.addConfig.belongToManyOptions.template
                ? field.metaData.addConfig.belongToManyOptions.template
                : field.metaData.addConfig.belongToManyOptions.filterKeys[0]] != tagToRemove.text)
                save.push(elt);
        });
        this.belongToMany[field.name] = new Set(save);
        this.form.patchValue({
            [field.name]: save,
        });
    }
    filterMany(value, field, options = 'belongToManyOptions') {
        if (value == null || value == undefined) {
            return [];
        }
        if (typeof value == 'string') {
            return this.options[field === null || field === void 0 ? void 0 : field.name].filter((optionValue) => {
                return field.metaData.addConfig[options].filterKeys.some((elt) => `${optionValue[elt].toLowerCase()}`.includes(`${value.toLowerCase()}`));
            });
        }
    }
    //End BelongToMany
    onCreate() {
        let datas;
        const msg = {
            label: `msg-adding-success`,
            resourceName: this.ressourceName,
        };
        this.loading = true;
        const formData = this.form.value;
        console.log('this.form', this.form.value);
        const _body = this.resource.addConfig.body;
        if (this.resource.hasFile) {
            datas = new FormData();
            Object.keys(formData).forEach((key, index) => {
                var _a;
                const search = this.resource.fields.find((elt) => elt.name == key);
                if (search && formData[key] !== undefined) {
                    switch (search.type) {
                        case REST_FIELD_TYPES.DATE:
                            datas.append(key, `${moment(formData[key]).format('YYYY-MM-DD')}`);
                            break;
                        case REST_FIELD_TYPES.JSON:
                            let jsonFields = {};
                            if (this.jsonEditorOptions[key] !== null) {
                                if (typeof this.jsonEditorOptions[key] === 'object' &&
                                    Array.isArray(this.jsonEditorOptions[key])) {
                                    this.jsonEditorOptions[key].map((elt) => {
                                        if (typeof elt === 'object' &&
                                            elt !== null &&
                                            elt.label &&
                                            elt.value) {
                                            jsonFields = Object.assign(Object.assign({}, jsonFields), { [elt.label]: elt.value });
                                            datas.append(`${key}[${elt.label}]`, elt.value);
                                        }
                                        else {
                                            console.error(`Error: Invalid element in jsonEditorOptions[${key}]: ${JSON.stringify(elt)}`);
                                        }
                                    });
                                }
                                else {
                                    console.error(`Error: Invalid type of jsonEditorOptions[${key}]: ${typeof this
                                        .jsonEditorOptions[key]}`);
                                }
                            }
                            else {
                                console.error(`Error: Missing jsonEditorOptions[${key}]`);
                            }
                            break;
                        case REST_FIELD_TYPES.BOOLEAN:
                            if ((_a = search.metaData) === null || _a === void 0 ? void 0 : _a.number) {
                                if (formData[key]) {
                                    datas.append(key, 1);
                                }
                                else
                                    datas.append(key, 0);
                            }
                            else {
                                datas.append(key, formData[key]);
                            }
                            break;
                        case REST_FIELD_TYPES.IMAGE:
                            if (formData[key] !== null)
                                datas.append(key, formData[key]);
                            break;
                        case REST_FIELD_TYPES.PDF:
                            if (formData[key] !== null)
                                datas.append(key, formData[key]);
                            break;
                        case REST_FIELD_TYPES.FILE:
                            if (formData[key] !== null)
                                datas.append(key, formData[key]);
                            break;
                        default:
                            // if (search.type === REST_FIELD_TYPES.STRING || search.type === REST_FIELD_TYPES.NUMBER || search.type === REST_FIELD_TYPES.PASSWORD)
                            if (formData[key] !== '' && formData[key] !== null)
                                datas.append(key, formData[key]);
                            break;
                    }
                }
            });
            Object.keys(_body).map((key) => {
                datas.append(key, _body[key]);
            });
            // Add map type;
            const mapField = this.resource.fields.filter((item) => item.type === REST_FIELD_TYPES.MAP);
            mapField.forEach((elt) => {
                datas.append([elt.metaData.addConfig.mapConfig.lattiudeKeyField], formData[elt.metaData.addConfig.mapConfig.lattiudeKeyField]);
                datas.append([elt.metaData.addConfig.mapConfig.longitudeKeyField], formData[elt.metaData.addConfig.mapConfig.longitudeKeyField]);
            });
        }
        else {
            const tab = {};
            Object.keys(formData).forEach((key, index) => {
                const search = this.resource.fields.find((elt) => elt.name == key);
                if (search) {
                    if (this.jsonEditorOptions[key] !== null &&
                        formData[key] !== undefined &&
                        formData[key] !== '') {
                        tab[key] = formData[key];
                    }
                }
            });
            // Add map type;
            const mapField = this.resource.fields.filter((item) => item.type === REST_FIELD_TYPES.MAP);
            mapField.forEach((elt) => {
                tab[elt.metaData.addConfig.mapConfig.lattiudeKeyField] =
                    formData[elt.metaData.addConfig.mapConfig.lattiudeKeyField];
                tab[elt.metaData.addConfig.mapConfig.longitudeKeyField] =
                    formData[elt.metaData.addConfig.mapConfig.longitudeKeyField];
            });
            datas = Object.assign(Object.assign({}, tab), _body);
        }
        const saveBelongTomany = [];
        this.resource.fields.forEach((elt) => {
            if (elt.type == REST_FIELD_TYPES.BELONG_TO_MANY) {
                saveBelongTomany.push({
                    resources: datas[elt.name],
                    pivot: elt.metaData.addConfig.belongToManyOptions.pivotName,
                });
            }
        });
        this.serviceRest.addResources(this.resource.addConfig, datas).subscribe((response) => {
            if (saveBelongTomany.length > 0) {
                saveBelongTomany.forEach((element, index) => {
                    const restResource = this.serviceRestAdminConfig.getSpecificResource(element.pivot);
                    const proms = [];
                    for (let index = 0; index < element.resources.length; index++) {
                        const item = element.resources[index];
                        const data = {
                            [item['saveRelatedIdName']]: item[item['saveRelatedIdName']],
                            [item['saveResourceIdName']]: response.id,
                        };
                        proms.push(this.serviceRest
                            .addResources(restResource.addConfig, data)
                            .toPromise());
                    }
                    Promise.all(proms).then((res) => {
                        if (index == saveBelongTomany.length - 1) {
                            this.notificationService.successToast(msg);
                            this.router.navigate([
                                `/admin/${this.ressourceName}-detail`,
                                response.id,
                            ]);
                            this.reset();
                        }
                    });
                });
                this.loading = false;
            }
            else {
                this.notificationService.successToast(msg);
                this.router.navigate([
                    `/admin/${this.ressourceName}-detail`,
                    response.id,
                ]);
                this.loading = false;
                this.reset();
            }
        }, (error) => {
            const msgError = {
                label: `msg-adding-error`,
                resourceName: this.ressourceName,
            };
            this.loading = false;
            this.notificationService.dangerToast(msgError);
        });
    }
    onEdit() {
        const msg = {
            label: `msg-updating-success`,
            resourceName: this.ressourceName,
        };
        this.loading = true;
        let datas;
        const formData = this.form.value;
        const _body = this.resource.editConfig.body;
        if (this.resource.hasFile) {
            datas = new FormData();
            Object.keys(formData).forEach((key, index) => {
                var _a;
                const search = this.resource.fields.find((elt) => elt.name == key);
                if (search && formData[key] !== undefined) {
                    switch (search.type) {
                        case REST_FIELD_TYPES.DATE:
                            datas.append(key, `${moment(formData[key]).format('YYYY-MM-DD')}`);
                            break;
                        case REST_FIELD_TYPES.JSON:
                            let jsonFields = {};
                            if (this.jsonEditorOptions[key] !== null) {
                                if (typeof this.jsonEditorOptions[key] === 'object') {
                                    this.jsonEditorOptions[key].map((elt) => {
                                        if (typeof elt === 'object' &&
                                            elt !== null &&
                                            elt.label &&
                                            elt.value) {
                                            jsonFields = Object.assign(Object.assign({}, jsonFields), { [elt.label]: elt.value });
                                            datas.append(`${key}[${elt.label}]`, elt.value);
                                        }
                                        else {
                                            if (elt.label) {
                                                datas.append(`${key}[${elt.label}]`, '');
                                            }
                                            console.error(`Error: Invalid element in jsonEditorOptions[${key}]: ${JSON.stringify(elt)}`);
                                        }
                                    });
                                }
                                else {
                                    console.error(`Error: Invalid type of jsonEditorOptions[${key}]: ${typeof this
                                        .jsonEditorOptions[key]}`);
                                }
                            }
                            else {
                                console.error(`Error: Missing jsonEditorOptions[${key}]`);
                            }
                            break;
                        case REST_FIELD_TYPES.BOOLEAN:
                            if ((_a = search.metaData) === null || _a === void 0 ? void 0 : _a.number) {
                                if (formData[key]) {
                                    datas.append(key, 1);
                                }
                                else
                                    datas.append(key, 0);
                            }
                            else {
                                datas.append(key, formData[key]);
                            }
                            break;
                        case REST_FIELD_TYPES.IMAGE:
                            if (formData[key] !== null && this.isFile(formData[key]))
                                datas.append(key, formData[key]);
                            break;
                        case REST_FIELD_TYPES.PDF:
                            if (formData[key] !== null && this.isFile(formData[key]))
                                datas.append(key, formData[key]);
                            break;
                        case REST_FIELD_TYPES.FILE:
                            if (formData[key] !== null && this.isFile(formData[key]))
                                datas.append(key, formData[key]);
                            break;
                        default:
                            // if (search.type === REST_FIELD_TYPES.STRING || search.type === REST_FIELD_TYPES.NUMBER || search.type === REST_FIELD_TYPES.PASSWORD)
                            if (formData[key] !== '')
                                datas.append(key, formData[key]);
                            break;
                    }
                }
            });
            Object.keys(_body).map((key) => {
                datas.append(key, _body[key]);
            });
            // Add map type;
            const mapField = this.resource.fields.filter((item) => item.type === REST_FIELD_TYPES.MAP);
            mapField.forEach((elt) => {
                datas.append([elt.metaData.addConfig.mapConfig.lattiudeKeyField], formData[elt.metaData.addConfig.mapConfig.lattiudeKeyField]);
                datas.append([elt.metaData.addConfig.mapConfig.longitudeKeyField], formData[elt.metaData.addConfig.mapConfig.longitudeKeyField]);
            });
        }
        else {
            const tab = {};
            Object.keys(formData).forEach((key, index) => {
                const search = this.resource.fields.find((elt) => elt.name == key);
                if (search &&
                    this.jsonEditorOptions[key] !== null &&
                    formData[key] !== undefined &&
                    formData[key] !== '') {
                    tab[key] = formData[key];
                }
            });
            // Add map type;
            const mapField = this.resource.fields.filter((item) => item.type === REST_FIELD_TYPES.MAP);
            mapField.forEach((elt) => {
                tab[elt.metaData.addConfig.mapConfig.lattiudeKeyField] =
                    formData[elt.metaData.addConfig.mapConfig.lattiudeKeyField];
                tab[elt.metaData.addConfig.mapConfig.longitudeKeyField] =
                    formData[elt.metaData.addConfig.mapConfig.longitudeKeyField];
            });
            datas = Object.assign(Object.assign({}, tab), _body);
        }
        const saveBelongTomany = [];
        this.resource.fields.forEach((elt) => {
            if (elt.type == REST_FIELD_TYPES.BELONG_TO_MANY) {
                saveBelongTomany.push({
                    resources: datas[elt.name],
                    pivot: elt.metaData.addConfig.belongToManyOptions.pivotName,
                });
            }
        });
        this.serviceRest
            .editResources(this.resource.editConfig, this.resource.hasFile, datas, this.formState.idEntity)
            .subscribe((response) => {
            if (saveBelongTomany.length > 0) {
                saveBelongTomany.forEach((element, index) => {
                    const restResource = this.serviceRestAdminConfig.getSpecificResource(element.pivot);
                    const proms = [];
                    for (let index = 0; index < element.resources.length; index++) {
                        const item = element.resources[index];
                        const data = {
                            [item['saveRelatedIdName']]: item[item['saveRelatedIdName']],
                            [item['saveResourceIdName']]: response.id,
                        };
                        proms.push(this.serviceRest
                            .addResources(restResource.addConfig, data)
                            .toPromise());
                    }
                    Promise.all(proms).then((res) => {
                        if (index == saveBelongTomany.length - 1) {
                            this.notificationService.successToast(msg);
                            this.router.navigate([
                                `/admin/${this.ressourceName}-detail`,
                                this.formState.idEntity,
                            ]);
                            this.reset();
                        }
                    });
                });
                this.loading = false;
            }
            else {
                this.notificationService.successToast(msg);
                this.router.navigate([
                    `/admin/${this.ressourceName}-detail`,
                    this.formState.idEntity,
                ]);
                this.loading = false;
                this.reset();
            }
        }, (error) => {
            const msgError = {
                label: `msg-updating-fail`,
                resourceName: this.ressourceName,
            };
            this.loading = false;
            this.notificationService.dangerToast(msgError);
        });
    }
    isFile(variable) {
        return typeof variable === 'object' && variable instanceof File;
    }
    downloadTemplate() {
        const colunms = {};
        const sheetHeader = {};
        this.resource.fields
            .filter((item) => this.resource.listConfig.columns.includes(item.name))
            .forEach((elt) => {
            colunms[elt.name] = {
                title: elt.label,
            };
        });
        Object.entries(colunms).forEach(([key, value], index) => {
            sheetHeader[this.alphabelt[index]] = key;
        });
        const edata = [];
        const udt = {
            data: [
                sheetHeader, // table header
            ],
            skipHeader: true,
        };
        edata.push(udt);
        this.exportService.exportToExcel(edata, 'rest_file_template_data');
    }
    importData() {
        const dialog = this.dialogService.open(UploadFileComponent, {});
        dialog.onClose.subscribe((resp) => {
            if (resp)
                this.source = new LocalDataSource(resp);
        });
    }
    createMatTableColumns() {
        const colunms = {};
        // console.log(this.resource.fields);
        this.resource.fields
            .filter((item) => this.resource.listConfig.columns.includes(item.name))
            .forEach((elt) => {
            colunms[elt.name] = {
                title: elt.label,
                type: 'custom',
                filter: false,
                addable: true,
                valuePrepareFunction: (cell, row) => ({
                    restField: elt,
                    cell,
                    row,
                }),
                editor: {
                    type: 'custom',
                    component: RestResourceEditorFieldsComponent,
                },
                renderComponent: RestResourceListFieldComponent,
            };
        });
        return colunms;
    }
    onSumbit() {
        if (this.formState.isAdd)
            this.onCreate();
        else
            this.onEdit();
    }
    addJSONField(event) {
        this.jsonEditorOptions[event.name].push({
            label: '',
            value: '',
            add: true,
        });
    }
    removeJSONField(event, index) {
        this.jsonEditorOptions[event.name].splice(index, 1);
    }
    onMorphSelectField(event, field) {
        const ressources = this.serviceRestAdminConfig.getSpecificResource(event);
        const fieldConfig = this.resource.fields.find((elt) => elt.name == field);
        this.serviceRest
            .getResources({
            api: ressources.api,
            queryParams: fieldConfig.metaData.addConfig.morphConfig.queryParams
                ? fieldConfig.metaData.addConfig.morphConfig.queryParams
                : {},
        })
            .subscribe((response) => {
            this.options[field] = response;
            this.allFilterContains[field] = of(this.options[field]);
        });
    }
    onLatChange(value, fieldName) {
        const fieldLat = this.resource.fields.find((elt) => elt.name == fieldName);
        const name = fieldLat.metaData.addConfig.mapConfig.lattiudeKeyField;
        this.form.patchValue({
            [name]: value,
        });
    }
    onLngChange(value, fieldName) {
        const fieldLat = this.resource.fields.find((elt) => elt.name == fieldName);
        const name = fieldLat.metaData.addConfig.mapConfig.longitudeKeyField;
        this.form.patchValue({
            [name]: value,
        });
    }
}
RestResourceAddComponent.ɵfac = function RestResourceAddComponent_Factory(t) { return new (t || RestResourceAddComponent)(i0.ɵɵdirectiveInject(i1$4.FormBuilder), i0.ɵɵdirectiveInject(RestResourceService), i0.ɵɵdirectiveInject(RestAdminConfigService), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1$1.NbMenuService), i0.ɵɵdirectiveInject(RestExportService), i0.ɵɵdirectiveInject(i1$1.NbDialogService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(NotificationService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i8$1.NgxPermissionsService)); };
RestResourceAddComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceAddComponent, selectors: [["ngx-rest-resource-add"]], viewQuery: function RestResourceAddComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$6, 5);
        i0.ɵɵviewQuery(_c1$4, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.belongTo = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputBelongToMany = _t.first);
    } }, inputs: { resource: "resource" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["fullWidth", ""], ["tabTitle", "Ajout simple"], ["class", "row", 3, "formGroup", 4, "ngIf"], ["tabTitle", "Importation"], [1, "row"], [1, "col-9"], [1, "col-3"], ["nbButton", "", "status", "primary", "nbContextMenuTag", "my-context-add", 3, "nbContextMenu"], [3, "settings", "source"], [1, "buttons-row"], ["nbButton", "", "status", "primary", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm mr-2", 4, "ngIf"], [1, "row", 3, "formGroup"], ["class", "col-12", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-12"], [1, ""], ["class", "input-space", 4, "ngIf"], [1, "input-space"], [1, "label"], ["nbInput", "", "fullWidth", "", "type", "text", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", "type", "password", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", "type", "number", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", 3, "placeholder", "nbDatepicker", "attributes", "formControlName"], ["formpicker", ""], ["nbInput", "", "fullWidth", "", 3, "attributes", "placeholder", "nbDatepicker", "formControlName"], ["withSeconds", ""], ["dateTimePicker", ""], ["fullWidth", "", "twelveHoursFormat", "", "nbInput", "", 3, "nbTimepicker", "attributes", "formControlName"], ["timepicker", ""], ["fullWidth", "", 3, "formControlName", "attributes", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "display", "flex", "align-items", "center"], [2, "margin-right", "0.5em"], [3, "formControlName"], ["ngx-dropzone", "", 1, "custom-dropzone", "form-control-custom", "rounded", "m-2", 2, "border", "dashed", "display", "flex", 3, "change"], ["class", "custom-img-dropzone", 3, "attributes", "src", 4, "ngIf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngFor", "ngForOf"], [1, "custom-img-dropzone", 3, "attributes", "src"], ["icon", "cloud-upload-outline", 2, "font-size", "2em", "color", "#ccc"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed"], ["nbButton", "", "status", "primary", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "primary", 3, "click"], ["format", "png", 3, "imageFile", "maintainAspectRatio", "aspectRatio", "imageCropped"], ["nbButton", "", "status", "danger", 3, "click"], ["fullWidth", "", 3, "tagRemove"], ["removable", "", 3, "text", 4, "ngFor", "ngForOf"], ["type", "text", "fullWidth", "", "nbTagInput", "", 3, "attributes", "placeholder", "tagAdd"], ["removable", "", 3, "text"], ["nbInput", "", "fullWidth", "", "type", "text", "placeholder", "Enter value", 3, "attributes", "formControlName", "nbAutocomplete", "id", "keyup"], ["autoInput", ""], ["class", "col-3", 4, "ngIf"], [3, "selectedChange"], ["autoComplete", ""], [3, "value", "attributes", 4, "ngFor", "ngForOf"], ["nbInput", "", "fullWidth", "", "disabled", "true", "type", "text", "placeholder", "Value", 3, "attributes", "value", "id"], [3, "value", "attributes"], [3, "tagRemove"], ["removable", "", 3, "text", "attributes", 4, "ngFor", "ngForOf"], ["type", "text", "nbTagInput", "", "fullWidth", "", 3, "attributes", "nbAutocomplete", "placeholder", "formControlName", "keyup"], ["autoBelongToMany", ""], ["belongToField", ""], ["removable", "", 3, "text", "attributes"], [1, "color-row"], ["nbInput", "", "fullWidth", "", "type", "color", 2, "height", "45px", 3, "id", "attributes", "placeholder", "formControlName"], ["nbButton", "", "status", "primary", "shape", "round", "size", "small", "outline", "", "ghost", "", 3, "attributes", "click", 4, "ngIf"], ["class", "row mb-2", 4, "ngFor", "ngForOf"], ["nbButton", "", "status", "primary", "shape", "round", "size", "small", "outline", "", "ghost", "", 3, "attributes", "click"], ["icon", "plus", "pack", "fas"], [1, "row", "mb-2"], [1, "col", 3, "id"], ["fullWidth", "", "nbInput", "", 3, "ngModel", "attributes", "ngModelOptions", "ngModelChange", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "col"], ["fullWidth", "", "nbInput", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "col", 4, "ngIf"], ["fullWidth", "", "nbInput", "", 3, "ngModel", "attributes", "ngModelOptions", "ngModelChange"], ["fullWidth", "", "nbInput", "", "disabled", "", 3, "value"], ["nbButton", "", "status", "primary", "shape", "round", "size", "small", "outline", "", "ghost", "", 3, "click"], ["icon", "trash-alt", "pack", "fas"], ["fullWidth", "", 3, "selectedChange"], [3, "attributes", "value", 4, "ngFor", "ngForOf"], ["nbInput", "", "fullWidth", "", "type", "text", "placeholder", "Enter value", 3, "attributes", "formControlName", "nbAutocomplete", "id", "disabled", "keyup"], [3, "attributes", "value"], [3, "googleMapKey", "latChange", "lngChange"], [1, "text-muted", "ml-20", "mt-3"], [1, "spinner-border", "spinner-border-sm", "mr-2"], [4, "ngxPermissionsOnly"], ["class", "buttons-row", 4, "ngIf"], ["nbButton", "", "status", "primary", 3, "disabled", "click", 4, "ngxPermissionsOnly"]], template: function RestResourceAddComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, RestResourceAddComponent_ng_container_0_Template, 23, 12, "ng-container", 0);
        i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length <= 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length > 0);
    } }, directives: [i8.NgIf, i1$1.NbCardComponent, i1$1.NbCardBodyComponent, i1$1.NbTabsetComponent, i1$1.NbTabComponent, i1$1.NbButtonComponent, i1$1.NbContextMenuDirective, i10.Ng2SmartTableComponent, i1$1.NbCardFooterComponent, i1$1.NbCardHeaderComponent, i1$4.ɵNgNoValidate, i1$4.NgControlStatusGroup, i1$4.FormGroupDirective, i8.NgForOf, i1$1.NbInputDirective, i1$4.DefaultValueAccessor, AttributeDirective, i1$4.NgControlStatus, i1$4.FormControlName, i1$4.NumberValueAccessor, i1$1.NbDatepickerDirective, i1$1.NbDatepickerComponent, i1$1.NbDateTimePickerComponent, i1$1.NbTimePickerDirective, i1$1.NbTimePickerComponent, i1$1.NbSelectComponent, i1$1.NbOptionComponent, i1$1.NbToggleComponent, i12.NgxDropzoneComponent, i12.NgxDropzoneLabelDirective, i1$1.NbIconComponent, i12.NgxDropzonePreviewComponent, i12.NgxDropzoneImagePreviewComponent, i7.ImageCropperComponent, i1$1.NbTagListComponent, i1$1.NbTagInputDirective, i1$1.NbTagComponent, i1$1.NbAutocompleteDirective, i1$1.NbAutocompleteComponent, i1$4.NgModel, GmapsComponent, i8$1.NgxPermissionsDirective], pipes: [i1$3.TranslatePipe, i8.TitleCasePipe, i8.AsyncPipe], styles: ["nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}.input-space[_ngcontent-%COMP%]{margin-top:1rem}.color-row[_ngcontent-%COMP%]{justify-content:space-between;height:45px}.color-card[_ngcontent-%COMP%]{width:80px;height:30px;border-radius:2px;border-width:2px;border-color:#909293;margin-left:5px;justify-content:center;align-items:center}@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-default   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-default   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-dark   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-dark   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-dark   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-cosmic   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-corporate   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-corporate   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-corporate   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.icon[_ngcontent-%COMP%]{height:35px;width:35px;line-height:30px;text-align:center;border:1px solid #eaeaea;border-radius:4px;float:left;margin-right:20px}.upload-text[_ngcontent-%COMP%]{overflow:hidden;width:auto;font-size:14px}svg[_ngcontent-%COMP%]{fill:#909293;height:20px}.overlay[_ngcontent-%COMP%]{position:relative}.delete-button[_ngcontent-%COMP%]{background-color:#fafafa;position:absolute;top:-6px;right:-6px;cursor:pointer;z-index:10;width:40px;height:40px;text-align:center;font-size:20px;line-height:40px}.file-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}nb-toggle[_ngcontent-%COMP%]{text-align:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceAddComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-rest-resource-add',
                templateUrl: './rest-resource-add.component.html',
                styleUrls: ['./rest-resource-add.component.scss'],
            }]
    }], function () { return [{ type: i1$4.FormBuilder }, { type: RestResourceService }, { type: RestAdminConfigService }, { type: i1.ActivatedRoute }, { type: i1$1.NbMenuService }, { type: RestExportService }, { type: i1$1.NbDialogService }, { type: i1.Router }, { type: NotificationService }, { type: i0.ChangeDetectorRef }, { type: i8$1.NgxPermissionsService }]; }, { resource: [{
            type: Input
        }], belongTo: [{
            type: ViewChild,
            args: ['belongTo']
        }], inputBelongToMany: [{
            type: ViewChild,
            args: ['autoBelongToMany']
        }] }); })();

const urlToFile = (url, filename, mimeType) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(url);
        const buf = yield res.arrayBuffer();
        return new File([buf], filename, { type: mimeType });
    }
    catch (error) {
        throw error;
    }
});

class RestResourceDeleteComponent {
    constructor(ref, serviceRestResource, notificationService) {
        this.ref = ref;
        this.serviceRestResource = serviceRestResource;
        this.notificationService = notificationService;
        this.multiSuppress = false;
        this.isSubmit = false;
    }
    dismiss(val = false) {
        this.ref.close(val);
    }
    delete() {
        let msg = {};
        this.isSubmit = true;
        this.serviceRestResource
            .deleteResources(this.listConfig, this.datas.id)
            .subscribe(() => {
            msg = {
                label: `msg-deleting-success`,
                resourceName: this.resourceName,
            };
            this.isSubmit = false;
            this.notificationService.successToast(msg);
            this.dismiss(true);
        }, (err) => {
            msg = {
                label: `msg-deleting-fail`,
                resourceName: this.resourceName,
            };
            this.isSubmit = false;
            this.notificationService.dangerToast(msg);
        });
    }
    deleteAll() {
        let msg = {};
        this.isSubmit = true;
        const proms = [];
        this.datas.map(data => proms.push(this.serviceRestResource.deleteResources(this.listConfig, data.id).toPromise()));
        Promise.all(proms)
            .then(() => {
            msg = {
                label: `msg-deleting-success`,
                resourceName: this.resourceName,
            };
            this.isSubmit = false;
            this.notificationService.successToast(msg);
            this.dismiss(true);
        })
            .catch(() => {
            msg = {
                label: `msg-deleting-fail`,
                resourceName: this.resourceName,
            };
            this.isSubmit = false;
            this.notificationService.dangerToast(msg);
        });
    }
}
RestResourceDeleteComponent.ɵfac = function RestResourceDeleteComponent_Factory(t) { return new (t || RestResourceDeleteComponent)(i0.ɵɵdirectiveInject(i1$1.NbDialogRef), i0.ɵɵdirectiveInject(RestResourceService), i0.ɵɵdirectiveInject(NotificationService)); };
RestResourceDeleteComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceDeleteComponent, selectors: [["ngx-rest-resource-delete"]], inputs: { datas: "datas", title: "title", listConfig: "listConfig", multiSuppress: "multiSuppress", resourceName: "resourceName" }, decls: 10, vars: 2, consts: [[1, "text-center"], ["nbButton", "", "hero", "", "status", "primary", 2, "margin-right", "10px", 3, "click"], ["nbButton", "", "status", "danger", "size", "medium", "nbSpinnerStatus", "danger", "nbSpinnerMessage", "", 3, "nbSpinner", "click"]], template: function RestResourceDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nb-card", 0);
        i0.ɵɵelementStart(1, "nb-card-header");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "nb-card-body");
        i0.ɵɵtext(4, " Voulez vous vraiment le supprimer? ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "nb-card-footer");
        i0.ɵɵelementStart(6, "button", 1);
        i0.ɵɵlistener("click", function RestResourceDeleteComponent_Template_button_click_6_listener() { return ctx.dismiss(); });
        i0.ɵɵtext(7, " Non ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 2);
        i0.ɵɵlistener("click", function RestResourceDeleteComponent_Template_button_click_8_listener() { return ctx.multiSuppress ? ctx.deleteAll() : ctx.delete(); });
        i0.ɵɵtext(9, " Oui ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("nbSpinner", ctx.isSubmit);
    } }, directives: [i1$1.NbCardComponent, i1$1.NbCardHeaderComponent, i1$1.NbCardBodyComponent, i1$1.NbCardFooterComponent, i1$1.NbButtonComponent, i1$1.NbSpinnerDirective], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{max-width:600px;max-height:500px}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{max-width:600px;max-height:500px}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{max-width:600px;max-height:500px}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{max-width:600px;max-height:500px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceDeleteComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-rest-resource-delete',
                templateUrl: './rest-resource-delete.component.html',
                styleUrls: ['./rest-resource-delete.component.scss'],
            }]
    }], function () { return [{ type: i1$1.NbDialogRef }, { type: RestResourceService }, { type: NotificationService }]; }, { datas: [{
            type: Input
        }], title: [{
            type: Input
        }], listConfig: [{
            type: Input
        }], multiSuppress: [{
            type: Input
        }], resourceName: [{
            type: Input
        }] }); })();

function RestResourceDetailComponent_ng_container_0_nb_card_header_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-card-header");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r2.resource.detailConfig == null ? null : ctx_r2.resource.detailConfig.title), " ");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r8.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r8.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.template)("componentClass", item_r8.value.data);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_3_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_3_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵelementStart(8, "ngx-dropzone", 10);
    i0.ɵɵlistener("change", function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template_ngx_dropzone_change_8_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(6); return ctx_r29.onSelect($event); });
    i0.ɵɵelementStart(9, "ngx-dropzone-preview", 11);
    i0.ɵɵlistener("removed", function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template_ngx_dropzone_preview_removed_9_listener() { i0.ɵɵrestoreView(_r30); const item_r8 = i0.ɵɵnextContext(3).$implicit; const ctx_r31 = i0.ɵɵnextContext(3); return ctx_r31.onRemove(ctx_r31.filesUpload[item_r8.key]); });
    i0.ɵɵelementStart(10, "ngx-dropzone-label");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 5, item_r8.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r8.value.data, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("removable", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r8 == null ? null : item_r8.value == null ? null : item_r8.value.data, " (", "pdf", ")");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template, 12, 7, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r8.key), ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r27 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.template)("componentClass", ctx_r27.jsonValue(item_r8.value));
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_Template, 6, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 12);
    i0.ɵɵelementContainerStart(8);
    i0.ɵɵtext(9);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 5, item_r8.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r8.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", item_r8.value.data);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r8.value.data);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.template)("componentClass", item_r8.value.data);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_5_ng_container_1_Template, 10, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_5_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r42 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r8.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r42.jsonValue(item_r8.value), " ");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r43 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.template)("componentClass", ctx_r43.jsonValue(item_r8.value));
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_6_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_6_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelement(6, "nb-checkbox", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r8.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", item_r8.value.data)("disabled", true);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.template)("componentClass", item_r8.value.data);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_7_ng_container_1_Template, 7, 5, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_7_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelement(6, "img", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r52 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r8.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleMap(ctx_r52.style);
    i0.ɵɵproperty("src", item_r8.value.data, i0.ɵɵsanitizeUrl);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.template)("componentClass", item_r8.value.data);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_8_ng_container_1_Template, 7, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_8_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r8.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, item_r8.value.data), " ");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.template)("componentClass", item_r8.value.data);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_9_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_9_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 15);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_10_ng_container_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r66); const item_r8 = i0.ɵɵnextContext(2).$implicit; const ctx_r64 = i0.ɵɵnextContext(3); return ctx_r64.loadBelongToDetail(item_r8.value); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r8.value.restField.label), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(7, 5, "rest-detail.belongToRef"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r8.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.template)("componentClass", item_r8.value.data);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_10_ng_container_1_Template, 9, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_10_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r75 = i0.ɵɵnextContext().$implicit;
    const ctx_r76 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r75.data[ctx_r76.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r8.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r75 = i0.ɵɵnextContext(2).$implicit;
    const item_r8 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.metaData.listConfig.restManyResources.template)("componentClass", row_r75.data.item);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r75 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r75.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r75.data.place);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r75 = ctx.$implicit;
    const item_r8 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r75.expanded)("place", row_r75.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r8.value.restField == null ? null : item_r8.value.restField.metaData == null ? null : item_r8.value.restField.metaData.listConfig == null ? null : item_r8.value.restField.metaData.listConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField == null ? null : item_r8.value.restField.metaData == null ? null : item_r8.value.restField.metaData.listConfig == null ? null : item_r8.value.restField.metaData.listConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r70 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r70.listDataSource[item_r8.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r70.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r70.customColumn);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r93 = i0.ɵɵnextContext().$implicit;
    const ctx_r94 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r93.data[ctx_r94.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(6).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r8.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r93 = i0.ɵɵnextContext(2).$implicit;
    const item_r8 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.metaData.detailConfig.restManyResources.template)("componentClass", row_r93.data.item);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r93 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r93.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r93.data.place);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r93 = ctx.$implicit;
    const item_r8 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r93.expanded)("place", row_r93.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r8.value.restField.metaData.detailConfig.restManyResources == null ? null : item_r8.value.restField.metaData.detailConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.metaData.detailConfig.restManyResources == null ? null : item_r8.value.restField.metaData.detailConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r87 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r87.listDataSource[item_r8.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r87.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r87.customColumn);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "ngx-rest-resource-detail", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r106 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(res_r106.style);
    i0.ɵɵproperty("resource", res_r106.resource)("ID", res_r106.id)("ressourceName", res_r106.resourceName)("container", true);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_div_0_Template, 2, 6, "div", 25);
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r89 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngForOf", ctx_r89.listDataSource[item_r8.value.restField.name]);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_Template, 5, 3, "div", 23);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r88 = i0.ɵɵreference(3);
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r71 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r71.isObject(item_r8.value.restField.metaData.detailConfig.restManyResources))("ngIfElse", _r88);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_Template, 4, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r8.value.restField == null ? null : item_r8.value.restField.metaData == null ? null : item_r8.value.restField.metaData.listConfig == null ? null : item_r8.value.restField.metaData.listConfig.restManyResources) && !(item_r8.value.restField == null ? null : item_r8.value.restField.metaData == null ? null : item_r8.value.restField.metaData.detailConfig == null ? null : item_r8.value.restField.metaData.detailConfig.restManyResources));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField == null ? null : item_r8.value.restField.metaData == null ? null : item_r8.value.restField.metaData.detailConfig == null ? null : item_r8.value.restField.metaData.detailConfig.restManyResources);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r113 = i0.ɵɵnextContext().$implicit;
    const ctx_r114 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r113.data[ctx_r114.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r8.value.restField.name);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r113 = i0.ɵɵnextContext(2).$implicit;
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.metaData.listConfig.restBelongToManyResources.template)("componentClass", row_r113.data.item);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r113 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r113.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r113.data.place);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r113 = ctx.$implicit;
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r113.expanded)("place", row_r113.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.metaData.listConfig.restBelongToManyResources.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.metaData.listConfig.restBelongToManyResources.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r18 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r18.listDataSource[item_r8.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r18.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r18.customColumn);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_iframe_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 29);
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r127 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r127.sanitizerUrl(item_r8.value.data), i0.ɵɵsanitizeResourceUrl);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 27);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_iframe_8_Template, 1, 1, "iframe", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r8.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("href", item_r8.value.data, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r8.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r8.value.restField == null ? null : item_r8.value.restField.metaData == null ? null : item_r8.value.restField.metaData.detailConfig == null ? null : item_r8.value.restField.metaData.detailConfig.linkConfig) ? !(item_r8.value.restField == null ? null : item_r8.value.restField.metaData == null ? null : item_r8.value.restField.metaData.detailConfig == null ? null : item_r8.value.restField.metaData.detailConfig.linkConfig.disabledIframePreview) : true);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.template)("componentClass", item_r8.value.data);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_Template, 9, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r8.value.restField.note);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list-item");
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_5_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(6, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_6_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(7, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_7_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_8_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(9, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_9_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(10, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_10_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(11, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(12, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(13, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 7);
    i0.ɵɵtemplate(15, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_15_Template, 3, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.TEXT || item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.STRING || item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.NUMBER || item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.PDF);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.JSON);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.BELONG_TO_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.note != "");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list", 3);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_Template, 16, 12, "nb-list-item", 4);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r3.datas));
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r136.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r136.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.template)("componentClass", item_r136.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r136.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "input", 34);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r136.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r136.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", item_r136.value.data)("value", item_r136.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.template)("componentClass", item_r136.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r136.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelement(6, "nb-checkbox", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r136.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", item_r136.value.data)("disabled", true);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.template)("componentClass", item_r136.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_1_Template, 7, 5, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r136.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelement(6, "img", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r163 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r136.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleMap(ctx_r163.style);
    i0.ɵɵproperty("src", item_r136.value.data, i0.ɵɵsanitizeUrl);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵtext(2, "http://localhost:4200/admin/agency-list ");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.template)("componentClass", item_r136.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_1_Template, 7, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_2_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r136.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r168 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r136.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r168.jsonValue(item_r136.value), " ");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r169 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.template)("componentClass", ctx_r169.jsonValue(item_r136.value));
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r136.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r136.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, item_r136.value.data), " ");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.template)("componentClass", item_r136.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r136.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r182 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 15);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r182); const item_r136 = i0.ɵɵnextContext(2).$implicit; const ctx_r180 = i0.ɵɵnextContext(4); return ctx_r180.loadBelongToDetail(item_r136.value); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r136.value.restField.label), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(7, 5, "rest-detail.belongToRef"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r136.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.template)("componentClass", item_r136.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template, 9, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r136.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r191 = i0.ɵɵnextContext().$implicit;
    const ctx_r192 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r191.data[ctx_r192.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r136.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r191 = i0.ɵɵnextContext(2).$implicit;
    const item_r136 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.metaData.listConfig.restManyResources.template)("componentClass", row_r191.data.item);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r191 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r191.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r191.data.place);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r191 = ctx.$implicit;
    const item_r136 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r191.expanded)("place", row_r191.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.listConfig == null ? null : item_r136.value.restField.metaData.listConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.listConfig == null ? null : item_r136.value.restField.metaData.listConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r186 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r186.listDataSource[item_r136.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r186.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r186.customColumn);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r209 = i0.ɵɵnextContext().$implicit;
    const ctx_r210 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r209.data[ctx_r210.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(6).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r136.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r209 = i0.ɵɵnextContext(2).$implicit;
    const item_r136 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.metaData.detailConfig.restManyResources.template)("componentClass", row_r209.data.item);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r209 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r209.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r209.data.place);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r209 = ctx.$implicit;
    const item_r136 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r209.expanded)("place", row_r209.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.detailConfig == null ? null : item_r136.value.restField.metaData.detailConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.detailConfig == null ? null : item_r136.value.restField.metaData.detailConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r203 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r203.listDataSource[item_r136.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r203.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r203.customColumn);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "ngx-rest-resource-detail", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r222 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(res_r222.style);
    i0.ɵɵproperty("resource", res_r222.resource)("ID", res_r222.id)("ressourceName", res_r222.resourceName)("container", true);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_div_0_Template, 2, 6, "div", 25);
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r205 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngForOf", ctx_r205.listDataSource[item_r136.value.restField.name]);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_Template, 5, 3, "ng-container", 23);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 35, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r204 = i0.ɵɵreference(3);
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r187 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r187.isObject(item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.detailConfig == null ? null : item_r136.value.restField.metaData.detailConfig.restManyResources))("ngIfElse", _r204);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_Template, 4, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.listConfig == null ? null : item_r136.value.restField.metaData.listConfig.restManyResources) && !(item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.detailConfig == null ? null : item_r136.value.restField.metaData.detailConfig.restManyResources));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.detailConfig == null ? null : item_r136.value.restField.metaData.detailConfig.restManyResources);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r229 = i0.ɵɵnextContext().$implicit;
    const ctx_r230 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r229.data[ctx_r230.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r136.value.restField.name);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r229 = i0.ɵɵnextContext(2).$implicit;
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.metaData.listConfig.restBelongToManyResources.template)("componentClass", row_r229.data.item);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r229 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r229.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r229.data.place);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r229 = ctx.$implicit;
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r229.expanded)("place", row_r229.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r136.value.restField.metaData.listConfig.restBelongToManyResources.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.metaData.listConfig.restBelongToManyResources.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    const ctx_r145 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r145.listDataSource[item_r136.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r145.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r145.customColumn);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_iframe_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 29);
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r243 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("src", ctx_r243.sanitizerUrl(item_r136.value.data), i0.ɵɵsanitizeResourceUrl);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 27);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_iframe_8_Template, 1, 1, "iframe", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r136.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("href", item_r136.value.data, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r136.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.detailConfig == null ? null : item_r136.value.restField.metaData.detailConfig.linkConfig) ? !(item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.detailConfig == null ? null : item_r136.value.restField.metaData.detailConfig.linkConfig.disabledIframePreview) : true);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.template)("componentClass", item_r136.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_Template, 9, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r136.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r136.value.restField.note);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list-item");
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(6, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(7, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(9, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(10, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(11, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(12, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 7);
    i0.ɵɵtemplate(14, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_14_Template, 3, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r136 = ctx.$implicit;
    const ctx_r135 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.TEXT || item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.STRING || item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.NUMBER || item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.JSON);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.BELONG_TO_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.note != "");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-tab", 33);
    i0.ɵɵelementStart(1, "nb-list", 3);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_Template, 15, 11, "nb-list-item", 4);
    i0.ɵɵpipe(3, "keyvalue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tabs_r134 = ctx.$implicit;
    const ctx_r133 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("tabTitle", tabs_r134);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, ctx_r133.datas1[tabs_r134]));
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-tabset", 31);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_Template, 4, 4, "nb-tab", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.tabsName);
} }
function RestResourceDetailComponent_ng_container_0_nb_card_footer_7_Template(rf, ctx) { if (rf & 1) {
    const _r250 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-card-footer");
    i0.ɵɵelementStart(1, "div", 36);
    i0.ɵɵelementStart(2, "button", 37);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_0_nb_card_footer_7_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r250); const ctx_r249 = i0.ɵɵnextContext(2); return ctx_r249.listEntity(); });
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 38);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_0_nb_card_footer_7_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r250); const ctx_r251 = i0.ɵɵnextContext(2); return ctx_r251.editEntity(); });
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 39);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_0_nb_card_footer_7_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r250); const ctx_r252 = i0.ɵɵnextContext(2); return ctx_r252.deleteEntity(); });
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 3, "rest-detail.btnCancel"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 5, "rest-detail.btnEdit"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(10, 7, "rest-detail.btnDelete"), " ");
} }
function RestResourceDetailComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nb-card");
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_card_header_2_Template, 3, 3, "nb-card-header", 0);
    i0.ɵɵelementStart(3, "nb-card-body");
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_0_nb_list_4_Template, 3, 3, "nb-list", 1);
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_0_ng_template_5_Template, 2, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, RestResourceDetailComponent_ng_container_0_nb_card_footer_7_Template, 11, 9, "nb-card-footer", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r4 = i0.ɵɵreference(6);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(ctx_r0.style ? ctx_r0.style : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.container);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isTabsMenu)("ngIfElse", _r4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.datas && !ctx_r0.container);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_card_header_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-card-header");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r254 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r254.resource.detailConfig == null ? null : ctx_r254.resource.detailConfig.title), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r260.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r260.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.template)("componentClass", item_r260.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_3_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_3_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r282 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵelementStart(8, "ngx-dropzone", 10);
    i0.ɵɵlistener("change", function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template_ngx_dropzone_change_8_listener($event) { i0.ɵɵrestoreView(_r282); const ctx_r281 = i0.ɵɵnextContext(7); return ctx_r281.onSelect($event); });
    i0.ɵɵelementStart(9, "ngx-dropzone-preview", 11);
    i0.ɵɵlistener("removed", function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template_ngx_dropzone_preview_removed_9_listener() { i0.ɵɵrestoreView(_r282); const item_r260 = i0.ɵɵnextContext(3).$implicit; const ctx_r283 = i0.ɵɵnextContext(4); return ctx_r283.onRemove(ctx_r283.filesUpload[item_r260.key]); });
    i0.ɵɵelementStart(10, "ngx-dropzone-label");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 5, item_r260.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r260.value.data, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("removable", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r260 == null ? null : item_r260.value == null ? null : item_r260.value.data, " (", "pdf", ")");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template, 12, 7, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r260.key), ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r279 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.template)("componentClass", ctx_r279.jsonValue(item_r260.value));
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_Template, 6, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 12);
    i0.ɵɵelementContainerStart(8);
    i0.ɵɵtext(9);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 5, item_r260.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r260.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", item_r260.value.data);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r260.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.template)("componentClass", item_r260.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_5_ng_container_1_Template, 10, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_5_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r294 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r260.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r294.jsonValue(item_r260.value), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r295 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.template)("componentClass", ctx_r295.jsonValue(item_r260.value));
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_6_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_6_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelement(6, "nb-checkbox", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r260.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", item_r260.value.data)("disabled", true);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.template)("componentClass", item_r260.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_7_ng_container_1_Template, 7, 5, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_7_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelement(6, "img", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r304 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r260.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleMap(ctx_r304.style);
    i0.ɵɵproperty("src", item_r260.value.data, i0.ɵɵsanitizeUrl);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.template)("componentClass", item_r260.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_8_ng_container_1_Template, 7, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_8_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r260.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, item_r260.value.data), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.template)("componentClass", item_r260.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_9_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_9_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r318 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 15);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_ng_container_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r318); const item_r260 = i0.ɵɵnextContext(2).$implicit; const ctx_r316 = i0.ɵɵnextContext(4); return ctx_r316.loadBelongToDetail(item_r260.value); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r260.value.restField.label), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(7, 5, "rest-detail.belongToRef"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r260.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.template)("componentClass", item_r260.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_ng_container_1_Template, 9, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r327 = i0.ɵɵnextContext().$implicit;
    const ctx_r328 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r327.data[ctx_r328.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r260.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r327 = i0.ɵɵnextContext(2).$implicit;
    const item_r260 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.metaData.listConfig.restManyResources.template)("componentClass", row_r327.data.item);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r327 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r327.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r327.data.place);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r327 = ctx.$implicit;
    const item_r260 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r327.expanded)("place", row_r327.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r260.value.restField == null ? null : item_r260.value.restField.metaData == null ? null : item_r260.value.restField.metaData.listConfig == null ? null : item_r260.value.restField.metaData.listConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField == null ? null : item_r260.value.restField.metaData == null ? null : item_r260.value.restField.metaData.listConfig == null ? null : item_r260.value.restField.metaData.listConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r322 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r322.listDataSource[item_r260.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r322.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r322.customColumn);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r345 = i0.ɵɵnextContext().$implicit;
    const ctx_r346 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r345.data[ctx_r346.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(6).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r260.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r345 = i0.ɵɵnextContext(2).$implicit;
    const item_r260 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.metaData.detailConfig.restManyResources.template)("componentClass", row_r345.data.item);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r345 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r345.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r345.data.place);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r345 = ctx.$implicit;
    const item_r260 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r345.expanded)("place", row_r345.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r260.value.restField.metaData.detailConfig.restManyResources == null ? null : item_r260.value.restField.metaData.detailConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.metaData.detailConfig.restManyResources == null ? null : item_r260.value.restField.metaData.detailConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r339 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r339.listDataSource[item_r260.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r339.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r339.customColumn);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "ngx-rest-resource-detail", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r358 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(res_r358.style);
    i0.ɵɵproperty("resource", res_r358.resource)("ID", res_r358.id)("ressourceName", res_r358.resourceName)("container", true);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_div_0_Template, 2, 6, "div", 25);
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r341 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngForOf", ctx_r341.listDataSource[item_r260.value.restField.name]);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_Template, 5, 3, "div", 23);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r340 = i0.ɵɵreference(3);
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r323 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r323.isObject(item_r260.value.restField.metaData.detailConfig.restManyResources))("ngIfElse", _r340);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_Template, 4, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r260.value.restField == null ? null : item_r260.value.restField.metaData == null ? null : item_r260.value.restField.metaData.listConfig == null ? null : item_r260.value.restField.metaData.listConfig.restManyResources) && !(item_r260.value.restField == null ? null : item_r260.value.restField.metaData == null ? null : item_r260.value.restField.metaData.detailConfig == null ? null : item_r260.value.restField.metaData.detailConfig.restManyResources));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField == null ? null : item_r260.value.restField.metaData == null ? null : item_r260.value.restField.metaData.detailConfig == null ? null : item_r260.value.restField.metaData.detailConfig.restManyResources);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r365 = i0.ɵɵnextContext().$implicit;
    const ctx_r366 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r365.data[ctx_r366.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r260.value.restField.name);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r365 = i0.ɵɵnextContext(2).$implicit;
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.metaData.listConfig.restBelongToManyResources.template)("componentClass", row_r365.data.item);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r365 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r365.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r365.data.place);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r365 = ctx.$implicit;
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r365.expanded)("place", row_r365.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.metaData.listConfig.restBelongToManyResources.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.metaData.listConfig.restBelongToManyResources.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    const ctx_r270 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r270.listDataSource[item_r260.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r270.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r270.customColumn);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_iframe_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 29);
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r379 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("src", ctx_r379.sanitizerUrl(item_r260.value.data), i0.ɵɵsanitizeResourceUrl);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 27);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_iframe_8_Template, 1, 1, "iframe", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r260.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("href", item_r260.value.data, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r260.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r260.value.restField == null ? null : item_r260.value.restField.metaData == null ? null : item_r260.value.restField.metaData.detailConfig == null ? null : item_r260.value.restField.metaData.detailConfig.linkConfig) ? !(item_r260.value.restField == null ? null : item_r260.value.restField.metaData == null ? null : item_r260.value.restField.metaData.detailConfig == null ? null : item_r260.value.restField.metaData.detailConfig.linkConfig.disabledIframePreview) : true);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.template)("componentClass", item_r260.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_Template, 9, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r260.value.restField.note);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list-item");
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_5_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(6, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_6_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(7, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_7_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_8_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(9, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_9_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(10, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(11, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(12, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(13, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 7);
    i0.ɵɵtemplate(15, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_15_Template, 3, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r260 = ctx.$implicit;
    const ctx_r259 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.TEXT || item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.STRING || item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.NUMBER || item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.PDF);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.JSON);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.BELONG_TO_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.note != "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list", 3);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_Template, 16, 12, "nb-list-item", 4);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r255 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r255.datas));
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r388.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r388.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.template)("componentClass", item_r388.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r388.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "input", 34);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r388.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r388.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", item_r388.value.data)("value", item_r388.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.template)("componentClass", item_r388.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r388.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelement(6, "nb-checkbox", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r388.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", item_r388.value.data)("disabled", true);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.template)("componentClass", item_r388.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_1_Template, 7, 5, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r388.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelement(6, "img", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r415 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r388.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleMap(ctx_r415.style);
    i0.ɵɵproperty("src", item_r388.value.data, i0.ɵɵsanitizeUrl);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.template)("componentClass", item_r388.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_1_Template, 7, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r388.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r420 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r388.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r420.jsonValue(item_r388.value), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r421 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.template)("componentClass", ctx_r421.jsonValue(item_r388.value));
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r388.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r388.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, item_r388.value.data), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.template)("componentClass", item_r388.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r388.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r434 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 15);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r434); const item_r388 = i0.ɵɵnextContext(2).$implicit; const ctx_r432 = i0.ɵɵnextContext(5); return ctx_r432.loadBelongToDetail(item_r388.value); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r388.value.restField.label), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(7, 5, "rest-detail.belongToRef"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r388.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.template)("componentClass", item_r388.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template, 9, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r388.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r443 = i0.ɵɵnextContext().$implicit;
    const ctx_r444 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r443.data[ctx_r444.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r388.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r443 = i0.ɵɵnextContext(2).$implicit;
    const item_r388 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.metaData.listConfig.restManyResources.template)("componentClass", row_r443.data.item);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r443 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r443.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r443.data.place);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r443 = ctx.$implicit;
    const item_r388 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r443.expanded)("place", row_r443.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.listConfig == null ? null : item_r388.value.restField.metaData.listConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.listConfig == null ? null : item_r388.value.restField.metaData.listConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r438 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r438.listDataSource[item_r388.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r438.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r438.customColumn);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r461 = i0.ɵɵnextContext().$implicit;
    const ctx_r462 = i0.ɵɵnextContext(9);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r461.data[ctx_r462.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(6).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r388.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r461 = i0.ɵɵnextContext(2).$implicit;
    const item_r388 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.metaData.detailConfig.restManyResources.template)("componentClass", row_r461.data.item);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r461 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r461.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r461.data.place);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r461 = ctx.$implicit;
    const item_r388 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r461.expanded)("place", row_r461.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.detailConfig == null ? null : item_r388.value.restField.metaData.detailConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.detailConfig == null ? null : item_r388.value.restField.metaData.detailConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r455 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r455.listDataSource[item_r388.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r455.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r455.customColumn);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "ngx-rest-resource-detail", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r474 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(res_r474.style);
    i0.ɵɵproperty("resource", res_r474.resource)("ID", res_r474.id)("ressourceName", res_r474.resourceName)("container", true);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_div_0_Template, 2, 6, "div", 25);
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r457 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngForOf", ctx_r457.listDataSource[item_r388.value.restField.name]);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_Template, 5, 3, "ng-container", 23);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 35, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r456 = i0.ɵɵreference(3);
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r439 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r439.isObject(item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.detailConfig == null ? null : item_r388.value.restField.metaData.detailConfig.restManyResources))("ngIfElse", _r456);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_Template, 4, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.listConfig == null ? null : item_r388.value.restField.metaData.listConfig.restManyResources) && !(item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.detailConfig == null ? null : item_r388.value.restField.metaData.detailConfig.restManyResources));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.detailConfig == null ? null : item_r388.value.restField.metaData.detailConfig.restManyResources);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r481 = i0.ɵɵnextContext().$implicit;
    const ctx_r482 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r481.data[ctx_r482.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r388.value.restField.name);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r481 = i0.ɵɵnextContext(2).$implicit;
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.metaData.listConfig.restBelongToManyResources.template)("componentClass", row_r481.data.item);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r481 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r481.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r481.data.place);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r481 = ctx.$implicit;
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r481.expanded)("place", row_r481.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r388.value.restField.metaData.listConfig.restBelongToManyResources.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.metaData.listConfig.restBelongToManyResources.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    const ctx_r397 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r397.listDataSource[item_r388.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r397.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r397.customColumn);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_iframe_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 29);
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r495 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("src", ctx_r495.sanitizerUrl(item_r388.value.data), i0.ɵɵsanitizeResourceUrl);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 27);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_iframe_8_Template, 1, 1, "iframe", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r388.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("href", item_r388.value.data, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r388.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.detailConfig == null ? null : item_r388.value.restField.metaData.detailConfig.linkConfig) ? !(item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.detailConfig == null ? null : item_r388.value.restField.metaData.detailConfig.linkConfig.disabledIframePreview) : true);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.template)("componentClass", item_r388.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_Template, 9, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r388.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r388.value.restField.note);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list-item");
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(6, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(7, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(9, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(10, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(11, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(12, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 7);
    i0.ɵɵtemplate(14, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_14_Template, 3, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r388 = ctx.$implicit;
    const ctx_r387 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.TEXT || item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.STRING || item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.NUMBER || item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.JSON);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.BELONG_TO_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.note != "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-tab", 33);
    i0.ɵɵelementStart(1, "nb-list", 3);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_Template, 15, 11, "nb-list-item", 4);
    i0.ɵɵpipe(3, "keyvalue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tabs_r386 = ctx.$implicit;
    const ctx_r385 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("tabTitle", tabs_r386);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, ctx_r385.datas1[tabs_r386]));
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-tabset", 31);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_Template, 4, 4, "nb-tab", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r257 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r257.tabsName);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r504 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 38);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r504); const ctx_r503 = i0.ɵɵnextContext(4); return ctx_r503.editEntity(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "rest-detail.btnEdit"), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r506 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r506); const ctx_r505 = i0.ɵɵnextContext(4); return ctx_r505.deleteEntity(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "rest-detail.btnDelete"), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_Template(rf, ctx) { if (rf & 1) {
    const _r508 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-card-footer");
    i0.ɵɵelementStart(1, "div", 36);
    i0.ɵɵelementStart(2, "button", 37);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r508); const ctx_r507 = i0.ɵɵnextContext(3); return ctx_r507.listEntity(); });
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_button_5_Template, 3, 3, "button", 41);
    i0.ɵɵtemplate(6, RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_button_6_Template, 3, 3, "button", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r258 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 3, "rest-detail.btnCancel"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r258.PERMISSION.UPDATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r258.PERMISSION.DELETE);
} }
function RestResourceDetailComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "nb-card");
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_card_header_2_Template, 3, 3, "nb-card-header", 0);
    i0.ɵɵelementStart(3, "nb-card-body");
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_Template, 3, 3, "nb-list", 1);
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_Template, 2, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_Template, 7, 5, "nb-card-footer", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r256 = i0.ɵɵreference(6);
    const ctx_r253 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(ctx_r253.style ? ctx_r253.style : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r253.container);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r253.isTabsMenu)("ngIfElse", _r256);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r253.datas && !ctx_r253.container);
} }
function RestResourceDetailComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_Template, 8, 6, "div", 40);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r1.PERMISSION.READ);
} }
class RestResourceDetailComponent {
    constructor(activatedRoute, serviceRest, serviceRestAdminConfig, router, dataSourceBuilder, dialogService, langService, sanitizer, permissionsService) {
        this.activatedRoute = activatedRoute;
        this.serviceRest = serviceRest;
        this.serviceRestAdminConfig = serviceRestAdminConfig;
        this.router = router;
        this.dataSourceBuilder = dataSourceBuilder;
        this.dialogService = dialogService;
        this.langService = langService;
        this.sanitizer = sanitizer;
        this.permissionsService = permissionsService;
        this.objectKeys = Object.keys;
        this.customColumn = 'name';
        this.allColumns = [this.customColumn];
        this.listDataSource = {};
        this.isTabsMenu = false;
        this.tabsName = [];
        this.filesUpload = {};
        this.permissions = [
            PERMISSION.CREATE,
            PERMISSION.UPDATE,
            PERMISSION.DELETE,
            PERMISSION.READ,
        ];
        this.isObject = (a) => {
            let isObject = false;
            if (a.metaData)
                isObject = true;
            if (a.type)
                isObject = true;
            if (a.template)
                isObject = true;
            if (a.inForm)
                isObject = true;
            return isObject;
        };
        this.isArray = (a) => {
            return !!a && a.constructor === Array;
        };
        this.getBelongToSecondField = (elt, response) => {
            var _a, _b, _c, _d;
            const belongVal = `${(_c = (_b = (_a = elt.metaData) === null || _a === void 0 ? void 0 : _a.addConfig) === null || _b === void 0 ? void 0 : _b.belongToOptions) === null || _c === void 0 ? void 0 : _c.resourceName}.${(_d = elt.metaData) === null || _d === void 0 ? void 0 : _d.belongToSecondFieldLabel}`.split('.');
            let dat = response;
            if (belongVal && (belongVal === null || belongVal === void 0 ? void 0 : belongVal.length) > 0) {
                belongVal.forEach((val) => {
                    if (dat[val]) {
                        dat = dat[val];
                    }
                    else
                        dat = '';
                });
            }
            else {
                dat = '';
            }
            return dat;
        };
        this.jsonValue = (val) => {
            let _jsonValue;
            try {
                if (!val || !val.restField || !val.data) {
                    throw new Error('Missing required data properties');
                }
                if (val.restField.i18n === true) {
                    if (typeof val.data === 'string' && val.data[0] === '{') {
                        const parsedData = JSON.parse(val.data);
                        if (parsedData[this.langService.selected]) {
                            _jsonValue = parsedData[this.langService.selected];
                        }
                        else {
                            throw new Error('Invalid i18n language selected');
                        }
                    }
                    else if (typeof val.data === 'object' &&
                        val.data[this.langService.selected]) {
                        _jsonValue = val.data[this.langService.selected];
                    }
                    else if (typeof val.data === 'string') {
                        _jsonValue = val.data;
                    }
                    else {
                        throw new Error('Invalid data format for i18n field');
                    }
                }
                else {
                    _jsonValue = val.data;
                }
                if (typeof _jsonValue === 'object') {
                    _jsonValue = JSON.stringify(_jsonValue);
                }
            }
            catch (err) {
                // console.log(`Error occurred in jsonValue: ${err}`);
                _jsonValue = JSON.stringify(val.data);
            }
            return _jsonValue;
        };
        this.sanitizerUrl = (link) => this.sanitizer.bypassSecurityTrustResourceUrl(link);
    }
    get PERMISSION() {
        return PERMISSION;
    }
    ngOnInit() {
        let id;
        if (this.ID) {
            id = this.ID;
        }
        else {
            id = this.activatedRoute.snapshot.paramMap.get('id');
            this.ressourceName =
                this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 2].path.split('-')[0];
        }
        this.entityId = parseInt(id);
        this.resource = this.serviceRestAdminConfig.getSpecificResource(this.ressourceName);
        // console.log('this.resource.detailConfig', this.resource.detailConfig);
        if (this.resource.detailConfig.preparedStatementQuery) {
            // this.resource.detailConfig.queryParams.fieldForNextQuery
            this.serviceRest
                .getResources({
                api: this.resource.detailConfig.preparedStatementQuery.api.substring(1),
                queryParams: this.resource.detailConfig.preparedStatementQuery
                    .queryParams
                    ? this.resource.detailConfig.preparedStatementQuery.queryParams
                    : {},
            })
                .subscribe((resp) => {
                const val = {};
                const params = {};
                this.resource.detailConfig.preparedStatementQuery.fieldForNextQuery.forEach((item) => {
                    val[item] = _.get(resp, item);
                });
                this.resource.detailConfig.preparedStatementQuery.queryParamsComplete.forEach((element) => {
                    if (element.isPreparedStatement) {
                        params[element.label] = val[element.value];
                    }
                    else {
                        params[element.label] = element.value;
                    }
                });
                this.serviceRest
                    .getOneResource({
                    api: this.resource.detailConfig.api,
                    queryParams: params,
                }, id)
                    .subscribe((response) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                    const colunms = {};
                    this.entityId = response.id;
                    if (this.resource.detailConfig.tabsConfig &&
                        this.resource.detailConfig.tabsConfig.length > 1) {
                        this.isTabsMenu = true;
                        this.resource.detailConfig.tabsConfig.forEach((tab) => {
                            this.tabsName.push(tab.name);
                            const temp = {};
                            tab.datas.forEach((elt) => {
                                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                                const search = this.resource.fields.find((field) => field.label === elt);
                                if (search) {
                                    temp[search.name] = {
                                        restField: search,
                                        data: response[search.label],
                                    };
                                }
                                switch (temp[search.name].restField.type) {
                                    case REST_FIELD_TYPES.HAS_MANY:
                                        /*Premier cas si les configs ont ete definis dans le listConfig et rien dans le detailConfig
                                      Premier cas si les configs ont ete definis dans le listConfig et rien dans le detailConfig
                                      on considere que les configs sont les memes
                                      */
                                        if (((_c = (_b = (_a = temp[search.name].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.listConfig) === null || _c === void 0 ? void 0 : _c.restManyResources) &&
                                            !((_f = (_e = (_d = temp[search.name].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources)) {
                                            const datas = [];
                                            // console.log("Xa me concerne");
                                            // console.log(temp[search.name]);
                                            temp[search.name].data.forEach((item) => {
                                                var _a, _b, _c, _d;
                                                datas.push({
                                                    data: {
                                                        name: ((_d = (_c = (_b = (_a = temp[search.name]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.listConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                            ? item[temp[search.name].restField.metaData
                                                                .listConfig.restManyResources.label]
                                                            : item,
                                                        item,
                                                    },
                                                });
                                            });
                                            const rowsT = [
                                                {
                                                    data: {
                                                        name: temp[search.name].restField.name,
                                                        place: 'header-place',
                                                    },
                                                    children: datas,
                                                },
                                            ];
                                            this.listDataSource[temp[search.name].restField.name] = this.dataSourceBuilder.create(rowsT);
                                        }
                                        else if ((_j = (_h = (_g = temp[search.name].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources) {
                                            if (this.isObject((_m = (_l = (_k = temp[search.name].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig) === null || _m === void 0 ? void 0 : _m.restManyResources)) {
                                                const datas = [];
                                                temp[search.name].data.forEach((item) => {
                                                    var _a, _b, _c, _d;
                                                    datas.push({
                                                        data: {
                                                            name: ((_d = (_c = (_b = (_a = temp[search.name]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.detailConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                                ? item[temp[search.name].restField.metaData
                                                                    .detailConfig.restManyResources.label]
                                                                : item,
                                                            item,
                                                        },
                                                    });
                                                });
                                                const rowsT = [
                                                    {
                                                        data: {
                                                            name: temp[search.name].restField.name,
                                                            place: 'header-place',
                                                        },
                                                        children: datas,
                                                    },
                                                ];
                                                this.listDataSource[temp[search.name].restField.name] = this.dataSourceBuilder.create(rowsT);
                                            }
                                            else {
                                                this.listDataSource[temp[search.name].restField.name] = [];
                                                temp[search.name].data.forEach((element) => {
                                                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                                                    this.listDataSource[temp[search.name].restField.name].push({
                                                        resource: (_c = (_b = (_a = temp[search.name].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.detailConfig) === null || _c === void 0 ? void 0 : _c.restManyResources.resource,
                                                        resourceName: (_f = (_e = (_d = temp[search.name].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources.resourceName,
                                                        id: element === null || element === void 0 ? void 0 : element.id,
                                                        style: ((_j = (_h = (_g = temp[search.name].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources.style)
                                                            ? (_l = (_k = temp[search.name].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig.restManyResources.style
                                                            : '',
                                                    });
                                                });
                                            }
                                        }
                                        break;
                                    case REST_FIELD_TYPES.BELONG_TO_MANY:
                                        const items = [];
                                        temp[search.name].data.forEach((item) => {
                                            items.push({
                                                data: {
                                                    name: item[temp[search.name].restField.metaData.listConfig
                                                        .restBelongToManyResources.label],
                                                    item,
                                                },
                                            });
                                        });
                                        const rowsBelongToMany = [
                                            {
                                                data: {
                                                    name: temp[search.name].restField.name,
                                                    place: 'header-place',
                                                },
                                                children: items,
                                            },
                                        ];
                                        this.listDataSource[temp[search.name].restField.name] =
                                            this.dataSourceBuilder.create(rowsBelongToMany);
                                        break;
                                    case REST_FIELD_TYPES.BELONG_TO:
                                        let dat = this.getBelongToSecondField(search, response);
                                        if (search) {
                                            temp[search.name] = {
                                                restField: search,
                                                data: `${dat} (${response[search.label]})`,
                                                navigationId: response[search.label],
                                            };
                                        }
                                        break;
                                    default:
                                        break;
                                }
                                colunms[tab.name] = temp;
                            });
                        });
                        this.datas = colunms;
                        this.datas1 = colunms;
                    }
                    else {
                        this.resource.fields.forEach((elt) => {
                            if (elt.type === REST_FIELD_TYPES.BELONG_TO) {
                                let dat = this.getBelongToSecondField(elt, response);
                                colunms[elt.name] = {
                                    restField: elt,
                                    data: `${dat} (${response[elt.label]})`,
                                    navigationId: response[elt.label],
                                };
                            }
                            else {
                                colunms[elt.name] = {
                                    restField: elt,
                                    data: response[elt.label],
                                };
                            }
                        });
                        this.datas = colunms;
                        for (const property in this.datas) {
                            switch (this.datas[property].restField.type) {
                                case REST_FIELD_TYPES.HAS_MANY:
                                    if (((_c = (_b = (_a = this.datas[property].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.listConfig) === null || _c === void 0 ? void 0 : _c.restManyResources) &&
                                        !((_f = (_e = (_d = this.datas[property].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources)) {
                                        const datas = [];
                                        this.datas[property].data.forEach((item) => {
                                            var _a, _b, _c, _d;
                                            datas.push({
                                                data: {
                                                    name: ((_d = (_c = (_b = (_a = this.datas[property]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.listConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                        ? item[this.datas[property].restField.metaData
                                                            .listConfig.restManyResources.label]
                                                        : item,
                                                    item,
                                                },
                                            });
                                        });
                                        const rowsT = [
                                            {
                                                data: {
                                                    name: this.datas[property].restField.name,
                                                    place: 'header-place',
                                                },
                                                children: datas,
                                            },
                                        ];
                                        this.listDataSource[this.datas[property].restField.name] = this.dataSourceBuilder.create(rowsT);
                                    }
                                    else if ((_j = (_h = (_g = this.datas[property].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources) {
                                        if (this.isObject((_m = (_l = (_k = this.datas[property].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig) === null || _m === void 0 ? void 0 : _m.restManyResources)) {
                                            const datas = [];
                                            this.datas[property].data.forEach((item) => {
                                                var _a, _b, _c, _d;
                                                datas.push({
                                                    data: {
                                                        name: ((_d = (_c = (_b = (_a = this.datas[property]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.detailConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                            ? item[this.datas[property].restField.metaData
                                                                .detailConfig.restManyResources.label]
                                                            : item,
                                                        item,
                                                    },
                                                });
                                            });
                                            const rowsT = [
                                                {
                                                    data: {
                                                        name: this.datas[property].restField.name,
                                                        place: 'header-place',
                                                    },
                                                    children: datas,
                                                },
                                            ];
                                            this.listDataSource[this.datas[property].restField.name] = this.dataSourceBuilder.create(rowsT);
                                        }
                                        else {
                                            this.listDataSource[this.datas[property].restField.name] = [];
                                            this.datas[property].data.forEach((element) => {
                                                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                                                this.listDataSource[this.datas[property].restField.name].push({
                                                    resource: (_c = (_b = (_a = this.datas[property].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.detailConfig) === null || _c === void 0 ? void 0 : _c.restManyResources.resource,
                                                    resourceName: (_f = (_e = (_d = this.datas[property].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources.resourceName,
                                                    id: element === null || element === void 0 ? void 0 : element.id,
                                                    style: ((_j = (_h = (_g = this.datas[property].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources.style)
                                                        ? (_l = (_k = this.datas[property].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig.restManyResources.style
                                                        : '',
                                                });
                                            });
                                        }
                                    }
                                    break;
                                case REST_FIELD_TYPES.BELONG_TO_MANY:
                                    const items = [];
                                    this.datas[property].data.forEach((item) => {
                                        items.push({
                                            data: {
                                                name: item[this.datas[property].restField.metaData.listConfig
                                                    .restBelongToManyResources.label],
                                                item,
                                            },
                                        });
                                    });
                                    const rowsBelongToMany = [
                                        {
                                            data: {
                                                name: this.datas[property].restField.name,
                                                place: 'header-place',
                                            },
                                            children: items,
                                        },
                                    ];
                                    this.listDataSource[this.datas[property].restField.name] =
                                        this.dataSourceBuilder.create(rowsBelongToMany);
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                });
            });
        }
        else {
            this.serviceRest
                .getOneResource({
                api: this.resource.detailConfig.api,
                queryParams: this.resource.detailConfig.queryParams,
            }, id)
                .subscribe((response) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                const colunms = {};
                this.entityId = response.id;
                if (this.resource.detailConfig.tabsConfig &&
                    this.resource.detailConfig.tabsConfig.length > 1) {
                    this.isTabsMenu = true;
                    this.resource.detailConfig.tabsConfig.forEach((tab) => {
                        this.tabsName.push(tab.name);
                        const temp = {};
                        tab.datas.forEach((elt) => {
                            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                            const search = this.resource.fields.find((field) => field.label === elt);
                            if (search) {
                                temp[search.name] = {
                                    restField: search,
                                    data: response[search.label],
                                };
                            }
                            switch (temp[search.name].restField.type) {
                                case REST_FIELD_TYPES.HAS_MANY:
                                    /*Premier cas si les configs ont ete definis dans le listConfig et rien dans le detailConfig
                                    Premier cas si les configs ont ete definis dans le listConfig et rien dans le detailConfig
                                    on considere que les configs sont les memes
                                    */
                                    if (((_c = (_b = (_a = temp[search.name].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.listConfig) === null || _c === void 0 ? void 0 : _c.restManyResources) &&
                                        !((_f = (_e = (_d = temp[search.name].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources)) {
                                        const datas = [];
                                        // console.log("Xa me concerne");
                                        // console.log(temp[search.name]);
                                        temp[search.name].data.forEach((item) => {
                                            var _a, _b, _c, _d;
                                            datas.push({
                                                data: {
                                                    name: ((_d = (_c = (_b = (_a = temp[search.name]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.listConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                        ? item[temp[search.name].restField.metaData
                                                            .listConfig.restManyResources.label]
                                                        : item,
                                                    item,
                                                },
                                            });
                                        });
                                        const rowsT = [
                                            {
                                                data: {
                                                    name: temp[search.name].restField.name,
                                                    place: 'header-place',
                                                },
                                                children: datas,
                                            },
                                        ];
                                        this.listDataSource[temp[search.name].restField.name] =
                                            this.dataSourceBuilder.create(rowsT);
                                    }
                                    else if ((_j = (_h = (_g = temp[search.name].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources) {
                                        if (this.isObject((_m = (_l = (_k = temp[search.name].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig) === null || _m === void 0 ? void 0 : _m.restManyResources)) {
                                            const datas = [];
                                            temp[search.name].data.forEach((item) => {
                                                var _a, _b, _c, _d;
                                                datas.push({
                                                    data: {
                                                        name: ((_d = (_c = (_b = (_a = temp[search.name]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.detailConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                            ? item[temp[search.name].restField.metaData
                                                                .detailConfig.restManyResources.label]
                                                            : item,
                                                        item,
                                                    },
                                                });
                                            });
                                            const rowsT = [
                                                {
                                                    data: {
                                                        name: temp[search.name].restField.name,
                                                        place: 'header-place',
                                                    },
                                                    children: datas,
                                                },
                                            ];
                                            this.listDataSource[temp[search.name].restField.name] =
                                                this.dataSourceBuilder.create(rowsT);
                                        }
                                        else {
                                            this.listDataSource[temp[search.name].restField.name] =
                                                [];
                                            temp[search.name].data.forEach((element) => {
                                                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                                                this.listDataSource[temp[search.name].restField.name].push({
                                                    resource: (_c = (_b = (_a = temp[search.name].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.detailConfig) === null || _c === void 0 ? void 0 : _c.restManyResources.resource,
                                                    resourceName: (_f = (_e = (_d = temp[search.name].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources.resourceName,
                                                    id: element === null || element === void 0 ? void 0 : element.id,
                                                    style: ((_j = (_h = (_g = temp[search.name].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources.style)
                                                        ? (_l = (_k = temp[search.name].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig.restManyResources.style
                                                        : '',
                                                });
                                            });
                                        }
                                    }
                                    break;
                                case REST_FIELD_TYPES.BELONG_TO_MANY:
                                    const items = [];
                                    temp[search.name].data.forEach((item) => {
                                        items.push({
                                            data: {
                                                name: item[temp[search.name].restField.metaData.listConfig
                                                    .restBelongToManyResources.label],
                                                item,
                                            },
                                        });
                                    });
                                    const rowsBelongToMany = [
                                        {
                                            data: {
                                                name: temp[search.name].restField.name,
                                                place: 'header-place',
                                            },
                                            children: items,
                                        },
                                    ];
                                    this.listDataSource[temp[search.name].restField.name] =
                                        this.dataSourceBuilder.create(rowsBelongToMany);
                                    break;
                                case REST_FIELD_TYPES.BELONG_TO:
                                    let dat = this.getBelongToSecondField(search, response);
                                    if (search) {
                                        temp[search.name] = {
                                            restField: search,
                                            data: `${dat} (${response[search.label]})`,
                                            navigationId: response[search.label],
                                        };
                                    }
                                    break;
                                case REST_FIELD_TYPES.PDF:
                                    const file = urlToFile(response[search.label], search.label, 'pdf');
                                    this.filesUpload[search.label] = file;
                                    break;
                                default:
                                    break;
                            }
                            colunms[tab.name] = temp;
                        });
                    });
                    this.datas = colunms;
                    this.datas1 = colunms;
                }
                else {
                    this.resource.fields.forEach((elt) => {
                        if (elt.type === REST_FIELD_TYPES.BELONG_TO) {
                            let dat = this.getBelongToSecondField(elt, response);
                            colunms[elt.name] = {
                                restField: elt,
                                data: `${dat} (${response[elt.label]})`,
                                navigationId: response[elt.label],
                            };
                        }
                        else {
                            colunms[elt.name] = {
                                restField: elt,
                                data: response[elt.label],
                            };
                        }
                    });
                    this.datas = colunms;
                    for (const property in this.datas) {
                        switch (this.datas[property].restField.type) {
                            case REST_FIELD_TYPES.HAS_MANY:
                                if (((_c = (_b = (_a = this.datas[property].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.listConfig) === null || _c === void 0 ? void 0 : _c.restManyResources) &&
                                    !((_f = (_e = (_d = this.datas[property].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources)) {
                                    const datas = [];
                                    this.datas[property].data.forEach((item) => {
                                        var _a, _b, _c, _d;
                                        datas.push({
                                            data: {
                                                name: ((_d = (_c = (_b = (_a = this.datas[property]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.listConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                    ? item[this.datas[property].restField.metaData
                                                        .listConfig.restManyResources.label]
                                                    : item,
                                                item,
                                            },
                                        });
                                    });
                                    const rowsT = [
                                        {
                                            data: {
                                                name: this.datas[property].restField.name,
                                                place: 'header-place',
                                            },
                                            children: datas,
                                        },
                                    ];
                                    this.listDataSource[this.datas[property].restField.name] =
                                        this.dataSourceBuilder.create(rowsT);
                                }
                                else if ((_j = (_h = (_g = this.datas[property].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources) {
                                    if (this.isObject((_m = (_l = (_k = this.datas[property].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig) === null || _m === void 0 ? void 0 : _m.restManyResources)) {
                                        const datas = [];
                                        this.datas[property].data.forEach((item) => {
                                            var _a, _b, _c, _d;
                                            datas.push({
                                                data: {
                                                    name: ((_d = (_c = (_b = (_a = this.datas[property]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.detailConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                        ? item[this.datas[property].restField.metaData
                                                            .detailConfig.restManyResources.label]
                                                        : item,
                                                    item,
                                                },
                                            });
                                        });
                                        const rowsT = [
                                            {
                                                data: {
                                                    name: this.datas[property].restField.name,
                                                    place: 'header-place',
                                                },
                                                children: datas,
                                            },
                                        ];
                                        this.listDataSource[this.datas[property].restField.name] =
                                            this.dataSourceBuilder.create(rowsT);
                                    }
                                    else {
                                        this.listDataSource[this.datas[property].restField.name] =
                                            [];
                                        this.datas[property].data.forEach((element) => {
                                            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                                            this.listDataSource[this.datas[property].restField.name].push({
                                                resource: (_c = (_b = (_a = this.datas[property].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.detailConfig) === null || _c === void 0 ? void 0 : _c.restManyResources.resource,
                                                resourceName: (_f = (_e = (_d = this.datas[property].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources.resourceName,
                                                id: element === null || element === void 0 ? void 0 : element.id,
                                                style: ((_j = (_h = (_g = this.datas[property].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources.style)
                                                    ? (_l = (_k = this.datas[property].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig.restManyResources.style
                                                    : '',
                                            });
                                        });
                                    }
                                }
                                break;
                            case REST_FIELD_TYPES.BELONG_TO_MANY:
                                const items = [];
                                this.datas[property].data.forEach((item) => {
                                    items.push({
                                        data: {
                                            name: item[this.datas[property].restField.metaData.listConfig
                                                .restBelongToManyResources.label],
                                            item,
                                        },
                                    });
                                });
                                const rowsBelongToMany = [
                                    {
                                        data: {
                                            name: this.datas[property].restField.name,
                                            place: 'header-place',
                                        },
                                        children: items,
                                    },
                                ];
                                this.listDataSource[this.datas[property].restField.name] =
                                    this.dataSourceBuilder.create(rowsBelongToMany);
                                break;
                            default:
                                break;
                        }
                    }
                }
            });
        }
        if (this.resource.permissions.length > 0) {
            this.resource.permissions.forEach((permission) => {
                this.serviceRest
                    .getResources({
                    api: permission.fieldKey.api.substring(1),
                    queryParams: permission.fieldKey.queryParams
                        ? permission.fieldKey.queryParams
                        : {},
                })
                    .subscribe((resp) => {
                    const val = {};
                    permission.fieldKey.fieldForNextQuery.forEach((item) => {
                        val[item] = _.get(resp, item);
                        if (val[item]) {
                            this.permissionsService.addPermission(permission.type);
                        }
                    });
                });
            });
        }
    }
    editEntity() {
        this.router.navigate([`/admin/${this.ressourceName}-edit`, this.entityId]);
    }
    listEntity() {
        this.router.navigateByUrl(`/admin/${this.ressourceName}-list`);
    }
    deleteEntity() {
        const dialog = this.dialogService.open(RestResourceDeleteComponent, {
            context: {
                datas: { id: this.entityId },
                title: 'SUPPRESSION',
                listConfig: this.resource.listConfig,
                resourceName: this.ressourceName,
            },
        });
        dialog.onClose.subscribe((resp) => {
            if (resp) {
                this.router.navigateByUrl(`/admin/${this.ressourceName}-list`);
            }
        });
    }
    get REST_FIELD_TYPES() {
        return REST_FIELD_TYPES;
    }
    //Image input
    onSelect(event) { }
    onRemove(field) { }
    loadBelongToDetail(data) {
        const resourceName = data.restField.metaData.addConfig.belongToOptions.resourceName;
        this.router.navigate([`/admin/${resourceName}-detail`, data.navigationId]);
    }
}
RestResourceDetailComponent.ɵfac = function RestResourceDetailComponent_Factory(t) { return new (t || RestResourceDetailComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(RestResourceService), i0.ɵɵdirectiveInject(RestAdminConfigService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1$1.NbTreeGridDataSourceBuilder), i0.ɵɵdirectiveInject(i1$1.NbDialogService), i0.ɵɵdirectiveInject(RestLangService), i0.ɵɵdirectiveInject(i6.DomSanitizer), i0.ɵɵdirectiveInject(i8$1.NgxPermissionsService)); };
RestResourceDetailComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceDetailComponent, selectors: [["ngx-rest-resource-detail"]], inputs: { resource: "resource", ID: "ID", ressourceName: "ressourceName", container: "container", style: "style" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "list-group", 4, "ngIf", "ngIfElse"], ["tabsContent", ""], [1, "list-group"], [4, "ngFor", "ngForOf"], [1, "d-block", 2, "margin-left", "15px"], [1, "row"], [1, ""], [1, "marg"], [3, "template", "componentClass"], [3, "change"], [3, "removable", "removed"], [1, "text-center", "color-card"], [3, "checked", "disabled"], ["alt", "", 1, "rest-img", 3, "src"], ["nbTooltipPlacement", "top", 1, "belongTo-link", 3, "nbTooltip", "click"], [3, "nbTreeGrid"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], [3, "nbTreeGridColumnDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], ["nbTreeGridRow", ""], ["nbTreeGridCell", ""], [3, "expanded", "place"], [4, "ngIf", "ngIfElse"], ["cas21", ""], ["class", "row", 4, "ngFor", "ngForOf"], [3, "resource", "ID", "ressourceName", "container"], ["target", "_blank", 3, "href"], ["height", "400px", "width", "100%", "class", "mt-2", 3, "src", 4, "ngIf"], ["height", "400px", "width", "100%", 1, "mt-2", 3, "src"], [1, "text-muted", "ml-20", "mt-3"], ["fullWidth", ""], [3, "tabTitle", 4, "ngFor", "ngForOf"], [3, "tabTitle"], ["disabled", "true", "type", "color", 2, "height", "45px", "width", "80px", "margin-left", "5px", 3, "placeholder", "value"], ["displayRes", ""], ["fullWidth", "", 1, "buttons-row", "text-center"], ["nbButton", "", "status", "secondary", 2, "margin-right", "10px", 3, "click"], ["nbButton", "", "status", "primary", 3, "click"], ["nbButton", "", "status", "danger", 2, "margin-left", "10px", 3, "click"], [4, "ngxPermissionsOnly"], ["nbButton", "", "status", "primary", 3, "click", 4, "ngxPermissionsOnly"], ["nbButton", "", "status", "danger", "style", "margin-left: 10px", 3, "click", 4, "ngxPermissionsOnly"]], template: function RestResourceDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, RestResourceDetailComponent_ng_container_0_Template, 8, 6, "ng-container", 0);
        i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length <= 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length > 0);
    } }, directives: [i8.NgIf, i1$1.NbCardComponent, i1$1.NbCardBodyComponent, i1$1.NbCardHeaderComponent, i1$1.NbListComponent, i8.NgForOf, i1$1.NbListItemComponent, i4.CngHtmlCompilerComponent, i12.NgxDropzoneComponent, i12.NgxDropzonePreviewComponent, i12.NgxDropzoneLabelDirective, i1$1.NbCheckboxComponent, i1$1.NbTooltipDirective, i1$1.NbTreeGridComponent, i1$1.NbTreeGridRowDefDirective, i1$1.NbTreeGridColumnDefDirective, i1$1.NbTreeGridCellDefDirective, i1$1.NbTreeGridRowComponent, i1$1.NbTreeGridCellDirective, FsIconCComponent, RestResourceDetailComponent, i1$1.NbTabsetComponent, i1$1.NbTabComponent, i1$1.NbCardFooterComponent, i1$1.NbButtonComponent, i8$1.NgxPermissionsDirective], pipes: [i8.TitleCasePipe, i8.KeyValuePipe, i8.DatePipe, i1$3.TranslatePipe], styles: [".belongTo-link[_ngcontent-%COMP%]:hover{text-decoration:underline!important;cursor:pointer}img[_ngcontent-%COMP%]{max-width:300px;max-height:200px}.color-card[_ngcontent-%COMP%]{width:80px;height:30px;border-radius:2px;border-width:2px;margin-left:5px;justify-content:center;align-items:center}[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{padding:1.25rem}.rest-item-align[_ngcontent-%COMP%]{padding-block:3}.marg[_ngcontent-%COMP%]{margin-right:25px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceDetailComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-rest-resource-detail',
                templateUrl: './rest-resource-detail.component.html',
                styleUrls: ['./rest-resource-detail.component.scss'],
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: RestResourceService }, { type: RestAdminConfigService }, { type: i1.Router }, { type: i1$1.NbTreeGridDataSourceBuilder }, { type: i1$1.NbDialogService }, { type: RestLangService }, { type: i6.DomSanitizer }, { type: i8$1.NgxPermissionsService }]; }, { resource: [{
            type: Input
        }], ID: [{
            type: Input
        }], ressourceName: [{
            type: Input
        }], container: [{
            type: Input
        }], style: [{
            type: Input
        }] }); })();

class SelectAllCheckboxRenderComponent {
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngOnInit() { }
    selectAllCheckboxClick(event) {
        event.stopPropagation();
        const checkbox = event.target;
        this.value.handleCheckboxClick(checkbox, this.rowData);
        this.cdr.detectChanges();
    }
}
SelectAllCheckboxRenderComponent.ɵfac = function SelectAllCheckboxRenderComponent_Factory(t) { return new (t || SelectAllCheckboxRenderComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
SelectAllCheckboxRenderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectAllCheckboxRenderComponent, selectors: [["app-select-all-checkbox-render"]], inputs: { value: "value", rowData: "rowData" }, decls: 2, vars: 1, consts: [[1, "select-all-checkbox"], [3, "checked", "click"]], template: function SelectAllCheckboxRenderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "nb-checkbox", 1);
        i0.ɵɵlistener("click", function SelectAllCheckboxRenderComponent_Template_nb_checkbox_click_1_listener($event) { return ctx.selectAllCheckboxClick($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("checked", ctx.value == null ? null : ctx.value.selected);
    } }, directives: [i1$1.NbCheckboxComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectAllCheckboxRenderComponent, [{
        type: Component,
        args: [{
                selector: 'app-select-all-checkbox-render',
                template: `
    <div class="select-all-checkbox">
      <nb-checkbox
        [checked]="value?.selected"
        (click)="selectAllCheckboxClick($event)"
      ></nb-checkbox>
    </div>
  `,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { value: [{
            type: Input
        }], rowData: [{
            type: Input
        }] }); })();

class RestShareService {
    constructor() {
        this.listLoader = false;
    }
    setLoader(value) {
        this.listLoader = value;
    }
}
RestShareService.ɵfac = function RestShareService_Factory(t) { return new (t || RestShareService)(); };
RestShareService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RestShareService, factory: RestShareService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestShareService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();

const _c0$5 = ["search"];
const _c1$3 = ["autoBelongToMany"];
function RestResourceListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "button", 18);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_6_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.selectAllRows(); });
    i0.ɵɵelement(2, "input", 19);
    i0.ɵɵtext(3, "Selectionner ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", (ctx_r0.selectedRows == null ? null : ctx_r0.selectedRows.length) == ctx_r0.source.count());
} }
function RestResourceListComponent_ng_container_12_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function RestResourceListComponent_ng_container_12_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onDeleteAllConfirm(); });
    i0.ɵɵelement(1, "nb-icon", 22);
    i0.ɵɵelementEnd();
} }
function RestResourceListComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 18);
    i0.ɵɵlistener("click", function RestResourceListComponent_ng_container_12_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.addNewEntity(); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "nb-icon", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceListComponent_ng_container_12_button_6_Template, 2, 0, "button", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 2, "add"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", (ctx_r1.selectedRows == null ? null : ctx_r1.selectedRows.length) > 0);
} }
function RestResourceListComponent_ng_container_13_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 18);
    i0.ɵɵlistener("click", function RestResourceListComponent_ng_container_13_ng_container_1_ng_container_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.addNewEntity(); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "nb-icon", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 1, "add"));
} }
function RestResourceListComponent_ng_container_13_ng_container_1_ng_container_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function RestResourceListComponent_ng_container_13_ng_container_1_ng_container_2_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(4); return ctx_r20.onDeleteAllConfirm(); });
    i0.ɵɵelement(1, "nb-icon", 22);
    i0.ɵɵelementEnd();
} }
function RestResourceListComponent_ng_container_13_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_ng_container_13_ng_container_1_ng_container_2_button_1_Template, 2, 0, "button", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r16.selectedRows == null ? null : ctx_r16.selectedRows.length) > 0);
} }
function RestResourceListComponent_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_ng_container_13_ng_container_1_ng_container_1_Template, 6, 3, "ng-container", 23);
    i0.ɵɵtemplate(2, RestResourceListComponent_ng_container_13_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 23);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r14.PERMISSION.CREATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r14.PERMISSION.DELETE);
} }
function RestResourceListComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_ng_container_13_ng_container_1_Template, 3, 2, "ng-container", 23);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r2.permissions);
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_nb_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 34);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const filter_r34 = ctx.$implicit;
    i0.ɵɵproperty("value", filter_r34);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, filter_r34["name"]));
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_5_nb_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 34);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const operator_r36 = ctx.$implicit;
    i0.ɵɵproperty("value", operator_r36.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, operator_r36.name), " ");
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵelementStart(2, "nb-select", 27);
    i0.ɵɵlistener("selectedChange", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_5_Template_nb_select_selectedChange_2_listener($event) { i0.ɵɵrestoreView(_r39); const index_r25 = i0.ɵɵnextContext().index; const ctx_r37 = i0.ɵɵnextContext(3); return ctx_r37.selectOperator($event, index_r25); });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_5_nb_option_4_Template, 3, 4, "nb-option", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 2, "rest-list.operator"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r27.filterOperator);
} }
const _c2 = function (a0) { return { "col-12": a0 }; };
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelementStart(1, "input", 36);
    i0.ɵɵlistener("input", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_6_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r42); const index_r25 = i0.ɵɵnextContext().index; const ctx_r40 = i0.ɵɵnextContext(3); return ctx_r40.onFilter($event.target, index_r25); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c2, ctx_r28.resource.listConfig.searchFilter == null));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(2, 2, "rest-list.searchPlaceholder"));
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_nb_tag_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 44);
} if (rf & 2) {
    const tree_r47 = ctx.$implicit;
    i0.ɵɵproperty("text", tree_r47["name"]);
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_nb_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 34);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r48 = ctx.$implicit;
    const index_r25 = i0.ɵɵnextContext(2).index;
    const ctx_r46 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", option_r48);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r48[ctx_r46.searchItems[index_r25].fieldName ? ctx_r46.searchItems[index_r25].fieldName : "id"], " ");
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 37);
    i0.ɵɵelementStart(2, "nb-tag-list", 38);
    i0.ɵɵlistener("tagRemove", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_Template_nb_tag_list_tagRemove_2_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(4); return ctx_r50.onTagRemoveBelong($event); });
    i0.ɵɵtemplate(3, RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_nb_tag_3_Template, 1, 1, "nb-tag", 39);
    i0.ɵɵelementStart(4, "input", 40, 41);
    i0.ɵɵlistener("keyup", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_Template_input_keyup_4_listener($event) { i0.ɵɵrestoreView(_r51); const index_r25 = i0.ɵɵnextContext().index; const ctx_r52 = i0.ɵɵnextContext(3); return ctx_r52.filterInput($event, index_r25); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "nb-autocomplete", 42, 43);
    i0.ɵɵlistener("selectedChange", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_Template_nb_autocomplete_selectedChange_6_listener($event) { i0.ɵɵrestoreView(_r51); const index_r25 = i0.ɵɵnextContext().index; const ctx_r54 = i0.ɵɵnextContext(3); return ctx_r54.onChoose($event, index_r25); });
    i0.ɵɵtemplate(8, RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_nb_option_8_Template, 2, 2, "nb-option", 28);
    i0.ɵɵpipe(9, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r45 = i0.ɵɵreference(7);
    const index_r25 = i0.ɵɵnextContext().index;
    const ctx_r29 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r29.belongToMany["id"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbAutocomplete", _r45)("placeholder", ctx_r29.searchItems[index_r25].fieldName ? ctx_r29.searchItems[index_r25].fieldName : "id")("formControlName", "id");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(9, 5, ctx_r29.allFilterContains["id"]));
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵelementStart(1, "button", 46);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_9_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r58); const ctx_r57 = i0.ɵɵnextContext(4); return ctx_r57.startSearch(); });
    i0.ɵɵelement(2, "nb-icon", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵelementStart(1, "button", 46);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_10_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r60); const ctx_r59 = i0.ɵɵnextContext(4); return ctx_r59.addFieldSearch(); });
    i0.ɵɵelement(2, "nb-icon", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵelementStart(1, "button", 51);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_template_11_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r63); const index_r25 = i0.ɵɵnextContext().index; const ctx_r61 = i0.ɵɵnextContext(3); return ctx_r61.removeFieldSearch(index_r25); });
    i0.ɵɵelement(2, "nb-icon", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵelementStart(2, "nb-select", 27);
    i0.ɵɵlistener("selectedChange", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_Template_nb_select_selectedChange_2_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r65); const index_r25 = restoredCtx.index; const ctx_r64 = i0.ɵɵnextContext(3); return ctx_r64.selectFilterBy($event, index_r25); });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, RestResourceListComponent_div_15_ng_container_1_ng_container_1_nb_option_4_Template, 3, 4, "nb-option", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_5_Template, 5, 4, "ng-container", 10);
    i0.ɵɵtemplate(6, RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_6_Template, 3, 6, "div", 29);
    i0.ɵɵelementStart(7, "div", 30);
    i0.ɵɵtemplate(8, RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_Template, 10, 7, "ng-container", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_9_Template, 3, 0, "div", 31);
    i0.ɵɵtemplate(10, RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_10_Template, 3, 0, "div", 32);
    i0.ɵɵtemplate(11, RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_template_11_Template, 3, 0, "ng-template", null, 33, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const index_r25 = ctx.index;
    const _r32 = i0.ɵɵreference(12);
    const ctx_r23 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 9, "rest-list.filterPlaceholder"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r23.resource.listConfig.searchFilter.filterBy);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r23.searchItems[index_r25].field !== "id");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r23.searchItems[index_r25].field !== "id");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r23.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r23.searchItems[index_r25].field === "id");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", index_r25 == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", index_r25 == 0)("ngIfElse", _r32);
} }
function RestResourceListComponent_div_15_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_div_15_ng_container_1_ng_container_1_Template, 13, 11, "ng-container", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r22.searchItems);
} }
function RestResourceListComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtemplate(1, RestResourceListComponent_div_15_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.resource.listConfig.searchFilter.filterBy.length > 0);
} }
function RestResourceListComponent_ng_container_16_ng2_smart_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r68 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ng2-smart-table", 54);
    i0.ɵɵlistener("deleteConfirm", function RestResourceListComponent_ng_container_16_ng2_smart_table_1_Template_ng2_smart_table_deleteConfirm_0_listener($event) { i0.ɵɵrestoreView(_r68); const ctx_r67 = i0.ɵɵnextContext(2); return ctx_r67.onDeleteConfirm($event); })("createConfirm", function RestResourceListComponent_ng_container_16_ng2_smart_table_1_Template_ng2_smart_table_createConfirm_0_listener($event) { i0.ɵɵrestoreView(_r68); const ctx_r69 = i0.ɵɵnextContext(2); return ctx_r69.onCreateConfirm($event); })("custom", function RestResourceListComponent_ng_container_16_ng2_smart_table_1_Template_ng2_smart_table_custom_0_listener($event) { i0.ɵɵrestoreView(_r68); const ctx_r70 = i0.ɵɵnextContext(2); return ctx_r70.onCustom($event); })("userRowSelect", function RestResourceListComponent_ng_container_16_ng2_smart_table_1_Template_ng2_smart_table_userRowSelect_0_listener($event) { i0.ɵɵrestoreView(_r68); const ctx_r71 = i0.ɵɵnextContext(2); return ctx_r71.detailEntity($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r66 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("settings", ctx_r66.settings)("source", ctx_r66.source);
} }
function RestResourceListComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_ng_container_16_ng2_smart_table_1_Template, 1, 2, "ng2-smart-table", 53);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.custom);
} }
function RestResourceListComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ng2-smart-table", 54);
    i0.ɵɵlistener("deleteConfirm", function RestResourceListComponent_ng_container_17_Template_ng2_smart_table_deleteConfirm_1_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r72 = i0.ɵɵnextContext(); return ctx_r72.onDeleteConfirm($event); })("createConfirm", function RestResourceListComponent_ng_container_17_Template_ng2_smart_table_createConfirm_1_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r74 = i0.ɵɵnextContext(); return ctx_r74.onCreateConfirm($event); })("custom", function RestResourceListComponent_ng_container_17_Template_ng2_smart_table_custom_1_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r75 = i0.ɵɵnextContext(); return ctx_r75.onCustom($event); })("userRowSelect", function RestResourceListComponent_ng_container_17_Template_ng2_smart_table_userRowSelect_1_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r76 = i0.ɵɵnextContext(); return ctx_r76.detailEntity($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("settings", ctx_r5.settings)("source", ctx_r5.source);
} }
function RestResourceListComponent_nb_option_23_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-option", 55);
    i0.ɵɵlistener("click", function RestResourceListComponent_nb_option_23_Template_nb_option_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r79); const perPage_r77 = restoredCtx.$implicit; const ctx_r78 = i0.ɵɵnextContext(); return ctx_r78.setPager(perPage_r77.value); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const perPage_r77 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(perPage_r77.title);
} }
class RestResourceListComponent {
    constructor(fb, serviceRestConfig, serviceRestResources, http, dialogService, activatedRoute, router, nbMenuService, exportService, restShare, permissionsService, serviceRest) {
        var _a, _b, _c, _d, _e;
        this.fb = fb;
        this.serviceRestConfig = serviceRestConfig;
        this.serviceRestResources = serviceRestResources;
        this.http = http;
        this.dialogService = dialogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.nbMenuService = nbMenuService;
        this.exportService = exportService;
        this.restShare = restShare;
        this.permissionsService = permissionsService;
        this.serviceRest = serviceRest;
        this.alphabelt = ALPHABET;
        this.isFetching = true;
        this.ressourceName = '';
        this.filterBy = '';
        this.filterOperator = FILTER_OPERATORS;
        this.exportAsConfig = {
            type: 'png',
            elementId: 'myTableElementId', // the id of html/table element
        };
        this.searchItems = [];
        this.searchItem = '';
        this.showCheckbox = false;
        this.showDetails = false;
        this.options = {};
        this.allFilterContains = {};
        this.belongToValue = {};
        this.belongToMany = {};
        this.isChecked = {};
        this.selectedRows = [];
        this.items = [
            { title: 'All formats' },
            { title: 'CSV' },
            { title: 'EXCEL' },
            { title: 'PDF' },
        ];
        this.perPagesOptions = [
            { title: '5', value: 5 },
            { title: '10', value: 10 },
            { title: '20', value: 20 },
            { title: '50', value: 50 },
            { title: '100', value: 100 },
        ];
        this.permissions = [PERMISSION.CREATE, PERMISSION.READ, PERMISSION.DELETE];
        this.custom = false;
        this.ressourceName =
            this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path.split('-')[0];
        this.resource = this.serviceRestConfig.getSpecificResource(this.ressourceName);
        // this.belongToMany['id'] = new Set();
        if ((_b = (_a = this.resource.listConfig) === null || _a === void 0 ? void 0 : _a.searchFilter) === null || _b === void 0 ? void 0 : _b.filterBy) {
            this.controls = (_e = (_d = (_c = this.resource.listConfig) === null || _c === void 0 ? void 0 : _c.searchFilter) === null || _d === void 0 ? void 0 : _d.filterBy) === null || _e === void 0 ? void 0 : _e.reduce((cumul, elt) => {
                switch (elt.type) {
                    case REST_FIELD_TYPES.BELONG_TO_MANY:
                        this.belongToMany[elt.value] = new Set();
                        return Object.assign(Object.assign({}, cumul), { [elt.name]: [] });
                    default:
                        return Object.assign(Object.assign({}, cumul), { [elt.name]: [''] });
                }
            }, {});
        }
        this.form = this.fb.group(this.controls);
        this.belongToMany['id'] = new Set();
    }
    get PERMISSION() {
        return PERMISSION;
    }
    ngOnInit() {
        if (this.resource.listConfig.searchFilter) {
            this.searchItems.push({
                field: '',
                operator: '',
                terms: '',
            });
        }
        this.currentPerPage = this.resource.listConfig.perPage;
        this.getList();
        this.source.onChanged().subscribe((e) => {
            setTimeout(() => {
                this.restShare.setLoader(false);
            });
        });
        this.isChecked = {
            title: 'check',
            type: 'custom',
            filter: false,
            addable: true,
            valuePrepareFunction: (cell, row) => ({
                handleCheckboxClick: (event, rowData) => this.onCheckboxClick(event, rowData),
                selected: this.selectedRows.find((elt) => (elt === null || elt === void 0 ? void 0 : elt.id) == (row === null || row === void 0 ? void 0 : row.id)) !== undefined,
                cell,
                row,
            }),
            editor: {
                type: 'checkbox',
            },
            renderComponent: SelectAllCheckboxRenderComponent,
            editable: true,
        };
        this.nbMenuService
            .onItemClick()
            .pipe(filter(({ tag }) => tag === 'my-context'), map(({ item: { title } }) => title))
            .subscribe((title) => {
            switch (title) {
                case 'EXCEL':
                    this.exportToExcel();
                    break;
                case 'PDF':
                    this.exportToPdf();
                    break;
                case 'CSV':
                    this.exportToCsv();
                    break;
                default:
                    this.exportAll();
                    break;
            }
        });
        if (this.resource.permissions.length > 0) {
            const custom = [];
            this.resource.permissions.forEach((permission) => {
                this.serviceRest
                    .getResources({
                    api: permission.fieldKey.api.substring(1),
                    queryParams: permission.fieldKey.queryParams
                        ? permission.fieldKey.queryParams
                        : {},
                })
                    .subscribe((resp) => {
                    const val = {};
                    permission.fieldKey.fieldForNextQuery.forEach((item) => {
                        val[item] = _.get(resp, item);
                        if (val[item]) {
                            this.permissionsService.addPermission(permission.type);
                            if (permission.type === PERMISSION.READ) {
                                custom.push({
                                    name: 'detail',
                                    title: "<i class='nb-compose'></i>",
                                });
                            }
                            if (permission.type === PERMISSION.DELETE) {
                                custom.push({
                                    name: 'delete',
                                    title: "<i class='nb-trash text-danger'></i>",
                                });
                            }
                        }
                        console.log('custom', custom);
                        this.custom = true;
                        this.settings = {
                            hideSubHeader: this.resource.listConfig.hideAddSubHeader,
                            actions: {
                                position: 'right',
                                custom: custom,
                                edit: false,
                                delete: false,
                            },
                            pager: {
                                perPage: this.resource.listConfig.perPage,
                            },
                            columns: this.createMatTableColumns(),
                            add: {
                                addButtonContent: '<i class="nb-plus" ></i>',
                                createButtonContent: '<i class="nb-checkmark"></i>',
                                cancelButtonContent: '<i class="nb-close"></i>',
                                confirmCreate: true,
                            },
                        };
                    });
                });
            });
        }
        else {
            this.settings = {
                hideSubHeader: this.resource.listConfig.hideAddSubHeader,
                actions: {
                    position: 'right',
                    custom: [
                        {
                            name: 'detail',
                            title: "<i class='nb-compose'></i>",
                        },
                        {
                            name: 'delete',
                            title: "<i class='nb-trash text-danger'></i>",
                        },
                    ],
                    edit: false,
                    delete: false,
                },
                pager: {
                    perPage: this.resource.listConfig.perPage,
                },
                columns: this.createMatTableColumns(),
                add: {
                    addButtonContent: '<i class="nb-plus" ></i>',
                    createButtonContent: '<i class="nb-checkmark"></i>',
                    cancelButtonContent: '<i class="nb-close"></i>',
                    confirmCreate: true,
                },
            };
        }
    }
    toggleShowCheckbox() {
        this.showCheckbox = !this.showCheckbox;
        this.source.refresh();
    }
    onDeleteConfirm(event) {
        const dialog = this.dialogService.open(RestResourceDeleteComponent, {
            context: {
                datas: event.data,
                title: 'SUPPRESSION',
                multiSuppress: false,
                listConfig: this.resource.listConfig,
                resourceName: this.ressourceName,
            },
        });
        dialog.onClose.subscribe((resp) => {
            if (resp) {
                this.getList(this.source.getPaging().page, this.source.getPaging().perPage);
            }
        });
    }
    onDeleteAllConfirm() {
        const dialog = this.dialogService.open(RestResourceDeleteComponent, {
            context: {
                datas: this.selectedRows,
                multiSuppress: true,
                title: 'TOUT SUPPRIMER',
                listConfig: this.resource.listConfig,
                resourceName: this.ressourceName,
            },
        });
        dialog.onClose.subscribe((resp) => {
            if (resp) {
                this.getList(this.source.getPaging().page, this.source.getPaging().perPage);
            }
        });
    }
    addNewEntity() {
        this.router.navigateByUrl(`/admin/${this.ressourceName}-add`);
    }
    detailEntity(event) {
        if (this.resource.permissions.length > 0) {
            if (this.permissionsService.hasPermission(PERMISSION.READ)) {
                this.router.navigate([
                    `/admin/${this.ressourceName}-detail`,
                    event.data.id,
                ]);
            }
        }
        else {
            this.router.navigate([
                `/admin/${this.ressourceName}-detail`,
                event.data.id,
            ]);
        }
    }
    onCheckboxClick(event, row) {
        if (this.selectedRows.indexOf(row) === -1) {
            this.selectedRows.push(row);
        }
        else {
            this.selectedRows.splice(this.selectedRows.indexOf(row), 1);
        }
    }
    selectAllRows() {
        this.source.getAll().then((rows) => {
            var _a;
            if (((_a = this.selectedRows) === null || _a === void 0 ? void 0 : _a.length) !== (rows === null || rows === void 0 ? void 0 : rows.length)) {
                this.selectedRows = [];
                rows.forEach((row) => {
                    this.selectedRows.push(row);
                });
            }
            else {
                this.selectedRows = [];
            }
            this.source.refresh();
        });
    }
    createMatTableColumns() {
        const colunms = {};
        if (!this.showCheckbox) {
            colunms['isChecked'] = this.isChecked;
        }
        this.resource.fields
            .filter((item) => this.resource.listConfig.columns.includes(item.name))
            .forEach((elt) => {
            colunms[elt.name] = {
                title: elt.label,
                type: 'custom',
                filter: false,
                addable: true,
                valuePrepareFunction: (cell, row) => ({
                    restField: elt,
                    cell,
                    row,
                }),
                editor: {
                    type: 'custom',
                    component: RestResourceEditorFieldsComponent,
                },
                renderComponent: RestResourceListFieldComponent,
            };
        });
        return colunms;
    }
    getList(page = null, perPage = null) {
        this.restShare.setLoader(true);
        if (page) {
            this.resource.queryParams = Object.assign(Object.assign({}, this.resource.queryParams), { page });
        }
        if (perPage) {
            this.resource.queryParams = Object.assign(Object.assign({}, this.resource.queryParams), { per_page: perPage });
        }
        this.source = new ServerDataSource(this.http, {
            endPoint: this.serviceRestConfig.restBaseUrl +
                '/' +
                this.resource.listConfig.api +
                '?' +
                Object.keys(this.resource.listConfig.queryParams)
                    .reduce((cumul, item) => cumul +
                    item +
                    '=' +
                    this.resource.listConfig.queryParams[item] +
                    ',', '')
                    .slice(0, -1),
            dataKey: 'data',
            pagerPageKey: 'page',
            pagerLimitKey: 'per_page',
            totalKey: 'total',
            filterFieldKey: `#_include#`,
        });
    }
    onCreateConfirm(event) {
        const datas = event.newData;
        const saveBelongTomany = [];
        this.resource.fields.forEach((elt) => {
            if (elt.type == REST_FIELD_TYPES.BELONG_TO_MANY) {
                saveBelongTomany.push({
                    resources: datas[elt.name],
                    pivot: elt.metaData.addConfig.belongToManyOptions.pivotName,
                });
                delete datas[elt.name];
            }
        });
        this.serviceRestResources
            .addResources(this.resource.addConfig, Object.assign(Object.assign({}, datas), { user_id: 1 }))
            .subscribe((response) => {
            if (saveBelongTomany.length > 0) {
                saveBelongTomany.forEach((element, index) => {
                    const restResource = this.serviceRestConfig.getSpecificResource(element.pivot);
                    const proms = [];
                    for (let index = 0; index < element.resources.length; index++) {
                        const item = element.resources[index];
                        const data = {
                            [item['saveRelatedIdName']]: item[item['saveRelatedIdName']],
                            [item['saveResourceIdName']]: response.id,
                        };
                        proms.push(this.serviceRestResources
                            .addResources(restResource.addConfig, data)
                            .toPromise());
                    }
                    Promise.all(proms).then((res) => {
                        this.getList(this.source.getPaging().page, this.source.getPaging().perPage);
                    });
                });
            }
            else
                this.getList(this.source.getPaging().page, this.source.getPaging().perPage);
        });
    }
    onCustom(event) {
        switch (event.action) {
            case 'delete':
                this.onDeleteConfirm(event);
                break;
            case 'detail':
                this.detailEntity(event);
                break;
        }
    }
    getFullData() {
        return this.serviceRestResources.getResources({
            api: this.resource.listConfig.api,
            queryParams: {
                should_paginate: false,
            },
        });
    }
    exportToExcel() {
        const colunms = {};
        const sheetHeader = {};
        this.resource.fields
            .filter((item) => this.resource.listConfig.columns.includes(item.name))
            .forEach((elt) => {
            colunms[elt.name] = {
                title: elt.label,
            };
        });
        Object.entries(colunms).forEach(([key, value], index) => {
            sheetHeader[this.alphabelt[index]] = key;
        });
        const keys = Object.keys(sheetHeader);
        const edata = [];
        const udt = {
            data: [
                { A: 'Rest Excel export' },
                sheetHeader, // table header
            ],
            skipHeader: true,
        };
        let elt = {};
        this.getFullData().subscribe((response) => {
            response.forEach((element, indice) => {
                elt = {};
                Object.entries(colunms).forEach(([key, value], index) => {
                    elt[this.alphabelt[index]] = element[sheetHeader[keys[index]]];
                });
                udt.data.push(elt);
            });
            edata.push(udt);
            this.exportService.exportToExcel(edata, 'rest_file_excel');
        });
    }
    exportToPdf() {
        const colunms = {};
        const customData = [];
        const header = [];
        let elt = [];
        this.resource.fields
            .filter((item) => this.resource.listConfig.columns.includes(item.name))
            .forEach((elt) => {
            header.push(elt.label);
        });
        this.getFullData().subscribe((response) => {
            response.forEach((element) => {
                elt = [];
                header.forEach((row) => {
                    elt.push(element[row]);
                });
                customData.push(elt);
            });
            const fileTitle = this.resource.name;
            this.exportService.exportToPdf(header, customData, 'rest_file_pdf', fileTitle);
        });
    }
    exportToCsv() {
        const colunms = {};
        const customData = [];
        const header = [];
        let elt = {};
        this.resource.fields
            .filter((item) => this.resource.listConfig.columns.includes(item.name))
            .forEach((elt) => {
            header.push(elt.label);
        });
        this.getFullData().subscribe((response) => {
            response.forEach((element) => {
                elt = {};
                header.forEach((row) => {
                    elt[row] = element[row];
                });
                customData.push(elt);
            });
            this.exportService.exportToCsv(header, customData, 'rest_file_csv');
        });
    }
    exportAll() {
        const colunms = {};
        const pdfAndCsvHeader = [];
        const sheetHeader = {};
        const csvData = [];
        const pdfData = [];
        let eltPDF = [];
        let eltCSV = {};
        let eltEXCEL = {};
        this.resource.fields
            .filter((item) => this.resource.listConfig.columns.includes(item.name))
            .forEach((elt) => {
            pdfAndCsvHeader.push(elt.label);
            colunms[elt.name] = {
                title: elt.label,
            };
        });
        Object.entries(colunms).forEach(([key, value], index) => {
            sheetHeader[this.alphabelt[index]] = key;
        });
        const excelData = {
            data: [{ A: 'Rest Excel export' }, sheetHeader],
            skipHeader: true,
        };
        const keys = Object.keys(sheetHeader);
        const edata = [];
        this.getFullData().subscribe((response) => {
            response.forEach((element) => {
                //CSV
                eltCSV = {};
                pdfAndCsvHeader.forEach((row) => {
                    eltCSV[row] = element[row];
                });
                csvData.push(eltCSV);
                //PDF
                eltPDF = [];
                pdfAndCsvHeader.forEach((row) => {
                    eltPDF.push(element[row]);
                });
                pdfData.push(eltPDF);
                //EXCEL
                eltEXCEL = {};
                Object.entries(colunms).forEach(([key, value], index) => {
                    eltEXCEL[this.alphabelt[index]] = element[sheetHeader[keys[index]]];
                });
                excelData.data.push(eltEXCEL);
                edata.push(excelData);
            });
            this.exportService.generateZip(pdfAndCsvHeader, pdfData, csvData, edata);
        });
    }
    //Filter
    setPager(setPager) {
        this.source.setPaging(1, setPager, true);
        this.settings = Object.assign({}, this.settings);
    }
    selectFilterBy(data, index) {
        var _a;
        this.searchItems[index].field = data['value'];
        this.searchItems[index].fieldName = data['resourceFieldName'];
        this.searchItems[index].resource = data['resource'];
        this.searchItems[index].ressourceFilterName = data['ressourceFilterName'];
        if (data['value'] === 'id') {
            const resource = (_a = data === null || data === void 0 ? void 0 : data.resource) === null || _a === void 0 ? void 0 : _a.addConfig;
            this.serviceRestResources
                .getResources({
                api: resource.api,
                queryParams: {
                    should_paginate: false,
                },
            })
                .subscribe((response) => {
                this.options[data['value']] = [...response].sort((x, y) => {
                    var _a;
                    return (_a = x['id']
                        .toString()
                        .toLowerCase()) === null || _a === void 0 ? void 0 : _a.localeCompare(y['id'].toString().toLowerCase());
                });
                this.allFilterContains[data['value']] = of(this.options[data['value']]);
            });
        }
    }
    selectOperator(value, index) {
        this.searchItems[index].operator = value;
    }
    onFilter(val, index) {
        if (index != undefined && index != null) {
            this.searchItems[index].terms = val === null || val === void 0 ? void 0 : val.value;
        }
        else {
            this.searchItem = val === null || val === void 0 ? void 0 : val.value;
        }
    }
    addFieldSearch() {
        this.searchItems.push({ field: '', operator: '', terms: '' });
    }
    removeFieldSearch(index) {
        this.searchItems.splice(index, 1);
    }
    filterMany(value, index, options = 'belongToManyOptions') {
        var _a;
        if (typeof value == 'string' && ((_a = this.options['id']) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return this.options['id'].filter((optionValue) => {
                return [
                    this.searchItems[index].fieldName
                        ? this.searchItems[index].fieldName
                        : 'id',
                ].some((elt) => {
                    var _a;
                    return `${(_a = optionValue[elt]) === null || _a === void 0 ? void 0 : _a.toLowerCase()}`.includes(`${value.toLowerCase()}`);
                });
            });
        }
    }
    getFilteredOptions(value, index) {
        return of(value).pipe(map((filterString) => this.filterMany(filterString, index)));
    }
    filterInput(event, index) {
        this.allFilterContains['id'] = this.getFilteredOptions(event.target.value, index);
    }
    onTagRemoveBelong(tagToRemove) {
        const cellData = Array.from(this.belongToMany['id']);
        const save = [];
        cellData.forEach((elt) => {
            if (elt['name'] != tagToRemove.text)
                save.push(elt);
        });
        this.belongToMany['id'] = new Set(save);
        this.form.patchValue({
            ['id']: save,
        });
    }
    //belongToManyOptions
    onChoose(event, index) {
        const cellData = Array.from(this.belongToMany['id']);
        if (event.id) {
            const search = cellData.find((elt) => elt.id == event.id);
            if (search == undefined) {
                const newElt = {
                    id: event.id,
                    saveRelatedIdName: event.id,
                    saveResourceIdName: event.id,
                    name: event[this.searchItems[index].fieldName
                        ? this.searchItems[index].fieldName
                        : 'id'],
                };
                this.belongToMany['id'].add(newElt);
                this.form.patchValue({
                    ['id']: Array.from(this.belongToMany['id'].values()),
                });
            }
        }
        this.inputBelongToMany.nativeElement.value = '';
    }
    startSearch() {
        const params = {};
        let search = '';
        this.searchItems.forEach((element, ind) => {
            if ((element === null || element === void 0 ? void 0 : element.field) === 'id') {
                let tab = [];
                for (const item of this.belongToMany['id']) {
                    if (item) {
                        tab.push(item);
                    }
                }
                if (tab.length > 0) {
                    let listId = tab.map((elt) => elt === null || elt === void 0 ? void 0 : elt.id).join(',');
                    params[`${element === null || element === void 0 ? void 0 : element.ressourceFilterName}-in`] = `${listId}`;
                }
            }
            else {
                if ((element === null || element === void 0 ? void 0 : element.field) != '' && (element === null || element === void 0 ? void 0 : element.terms) != '') {
                    if ((element === null || element === void 0 ? void 0 : element.operator) != '=') {
                        params[(element === null || element === void 0 ? void 0 : element.field) + '-' + (element === null || element === void 0 ? void 0 : element.operator)] = `${element === null || element === void 0 ? void 0 : element.terms}`;
                    }
                    else {
                        params[element === null || element === void 0 ? void 0 : element.field] = `${element === null || element === void 0 ? void 0 : element.terms}`;
                    }
                }
            }
        });
        search = Object.keys(this.resource.listConfig.queryParams)
            .reduce((cumul, item) => cumul + item + '=' + this.resource.listConfig.queryParams[item] + ',', '')
            .slice(0, -1);
        if (search != '') {
            search += '&';
        }
        search += Object.keys(params)
            .reduce((cumul, item) => cumul + item + '=' + params[item] + '&', '')
            .slice(0, -1);
        console.log(search);
        this.source = new ServerDataSource(this.http, {
            endPoint: this.serviceRestConfig.restBaseUrl +
                '/' +
                this.resource.listConfig.api +
                '?' +
                search,
            dataKey: 'data',
            pagerPageKey: 'page',
            pagerLimitKey: 'per_page',
            totalKey: 'total',
            filterFieldKey: `#_include#`,
        });
    }
}
RestResourceListComponent.ɵfac = function RestResourceListComponent_Factory(t) { return new (t || RestResourceListComponent)(i0.ɵɵdirectiveInject(i1$4.FormBuilder), i0.ɵɵdirectiveInject(RestAdminConfigService), i0.ɵɵdirectiveInject(RestResourceService), i0.ɵɵdirectiveInject(i1$2.HttpClient), i0.ɵɵdirectiveInject(i1$1.NbDialogService), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1$1.NbMenuService), i0.ɵɵdirectiveInject(RestExportService), i0.ɵɵdirectiveInject(RestShareService), i0.ɵɵdirectiveInject(i8$1.NgxPermissionsService), i0.ɵɵdirectiveInject(RestResourceService)); };
RestResourceListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceListComponent, selectors: [["ngx-rest-resource-list"]], viewQuery: function RestResourceListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$5, 5);
        i0.ɵɵviewQuery(_c1$3, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.search = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputBelongToMany = _t.first);
    } }, inputs: { resource: "resource" }, decls: 24, vars: 16, consts: [["status", "primary"], [1, "row", "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "text-white"], ["class", "", 4, "ngIf"], [1, "", 2, "height", "40px"], ["nbButton", "", "ghost", "", 3, "click"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["nbButton", "", "nbContextMenuTag", "my-context", "ghost", "", "status", "control", 3, "nbContextMenu"], ["icon", "download-outline"], [4, "ngIf"], ["nbSpinnerSize", "large", "nbSpinnerStatus", "primary", 3, "nbSpinner"], ["class", "row mb-5", 4, "ngIf"], [1, "row", "align-items-center", "justify-content-end", 2, "margin-top", "1rem"], [1, "label", "mx-2"], [3, "placeholder", "selected", "selectedChange"], ["value", "perPage.value", 3, "click", 4, "ngFor", "ngForOf"], [1, ""], ["nbButton", "", "ghost", "", "status", "control", 3, "click"], ["type", "checkbox", 1, "mr-2", 3, "checked"], ["icon", "plus-circle"], ["nbButton", "", "ghost", "", "status", "control", 3, "click", 4, "ngIf"], ["icon", "trash", "color", "danger", 2, "color", "rgb(238, 130, 157)"], [4, "ngxPermissionsOnly"], [1, "row", "mb-5"], [4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", "col-xs-12", "input-space"], ["fullWidth", "", 3, "placeholder", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-lg-4 col-md-12 col-xs-12 input-space", 3, "ngClass", 4, "ngIf"], [3, "formGroup"], ["class", "col-lg-1 col-md-2 col-xs-4 input-space row", 4, "ngIf"], ["class", "col-lg-1 col-md-2 col-xs-4 input-space", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "value"], [1, "col-lg-4", "col-md-12", "col-xs-12", "input-space", 3, "ngClass"], ["nbInput", "", "fullWidth", "", "type", "text", 3, "placeholder", "input"], [1, "input-space"], [3, "tagRemove"], ["removable", "", 3, "text", 4, "ngFor", "ngForOf"], ["type", "text", "nbTagInput", "", "fullWidth", "", 3, "nbAutocomplete", "placeholder", "formControlName", "keyup"], ["autoBelongToMany", ""], [3, "selectedChange"], ["belongToField", ""], ["removable", "", 3, "text"], [1, "col-lg-1", "col-md-2", "col-xs-4", "input-space", "row"], ["nbButton", "", "fullWidth", "", "status", "primary", 3, "click"], ["icon", "search-outline"], [1, "col-lg-1", "col-md-2", "col-xs-4", "input-space"], ["icon", "plus-outline"], [1, "col-lg-1", "input-space"], ["nbButton", "", "fullWidth", "", "status", "danger", 3, "click"], ["icon", "minus-outline"], [3, "settings", "source", "deleteConfirm", "createConfirm", "custom", "userRowSelect", 4, "ngIf"], [3, "settings", "source", "deleteConfirm", "createConfirm", "custom", "userRowSelect"], ["value", "perPage.value", 3, "click"]], template: function RestResourceListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nb-card", 0);
        i0.ɵɵelementStart(1, "nb-card-header");
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "h6", 3);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, RestResourceListComponent_div_6_Template, 4, 1, "div", 4);
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵelementStart(8, "button", 6);
        i0.ɵɵlistener("click", function RestResourceListComponent_Template_button_click_8_listener() { return ctx.toggleShowCheckbox(); });
        i0.ɵɵelementStart(9, "input", 7);
        i0.ɵɵlistener("ngModelChange", function RestResourceListComponent_Template_input_ngModelChange_9_listener($event) { return ctx.showCheckbox = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 8);
        i0.ɵɵelement(11, "nb-icon", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, RestResourceListComponent_ng_container_12_Template, 7, 4, "ng-container", 10);
        i0.ɵɵtemplate(13, RestResourceListComponent_ng_container_13_Template, 2, 1, "ng-container", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "nb-card-body", 11);
        i0.ɵɵtemplate(15, RestResourceListComponent_div_15_Template, 2, 1, "div", 12);
        i0.ɵɵtemplate(16, RestResourceListComponent_ng_container_16_Template, 2, 1, "ng-container", 10);
        i0.ɵɵtemplate(17, RestResourceListComponent_ng_container_17_Template, 2, 2, "ng-container", 10);
        i0.ɵɵelementStart(18, "div", 13);
        i0.ɵɵelementStart(19, "label", 14);
        i0.ɵɵtext(20);
        i0.ɵɵpipe(21, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "nb-select", 15);
        i0.ɵɵlistener("selectedChange", function RestResourceListComponent_Template_nb_select_selectedChange_22_listener($event) { return ctx.currentPerPage = $event; });
        i0.ɵɵtemplate(23, RestResourceListComponent_nb_option_23_Template, 2, 1, "nb-option", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", ctx.resource.listConfig.title, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showCheckbox);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.showCheckbox);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nbContextMenu", ctx.items);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length === 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nbSpinner", ctx.restShare.listLoader);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resource.listConfig.searchFilter);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length === 0);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(21, 14, "options.per_page"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("placeholder", ctx.resource.listConfig.perPage.toString())("selected", ctx.currentPerPage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.perPagesOptions);
    } }, directives: [i1$1.NbCardComponent, i1$1.NbCardHeaderComponent, i8.NgIf, i1$1.NbButtonComponent, i1$4.CheckboxControlValueAccessor, i1$4.NgControlStatus, i1$4.NgModel, i1$1.NbContextMenuDirective, i1$1.NbIconComponent, i1$1.NbCardBodyComponent, i1$1.NbSpinnerDirective, i1$1.NbSelectComponent, i8.NgForOf, i8$1.NgxPermissionsDirective, i1$4.NgControlStatusGroup, i1$4.FormGroupDirective, i1$1.NbOptionComponent, i8.NgClass, i1$1.NbInputDirective, i1$1.NbTagListComponent, i1$1.NbTagInputDirective, i1$1.NbAutocompleteDirective, i1$4.DefaultValueAccessor, i1$4.FormControlName, i1$1.NbAutocompleteComponent, i1$1.NbTagComponent, i10.Ng2SmartTableComponent], pipes: [i1$3.TranslatePipe, i8.TitleCasePipe, i8.AsyncPipe], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-default   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-default   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-dark   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-dark   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-cosmic   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-cosmic   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-corporate   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-corporate   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}  ng2-st-tbody-edit-delete{display:none;height:0!important}  ng2-st-tbody-custom{display:flex;text-align:center}.input-space[_ngcontent-%COMP%]{margin-top:1rem}.nb-theme-default[_ngcontent-%COMP%]   ng2-smart-table[_ngcontent-%COMP%]   th.ng2-smart-actions-title-add[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#00d68f!important;border-bottom-width:0;border-bottom-color:#00d68f!important;color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceListComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-rest-resource-list',
                templateUrl: './rest-resource-list.component.html',
                styleUrls: ['./rest-resource-list.component.scss'],
            }]
    }], function () { return [{ type: i1$4.FormBuilder }, { type: RestAdminConfigService }, { type: RestResourceService }, { type: i1$2.HttpClient }, { type: i1$1.NbDialogService }, { type: i1.ActivatedRoute }, { type: i1.Router }, { type: i1$1.NbMenuService }, { type: RestExportService }, { type: RestShareService }, { type: i8$1.NgxPermissionsService }, { type: RestResourceService }]; }, { resource: [{
            type: Input
        }], search: [{
            type: ViewChild,
            args: ['search']
        }], inputBelongToMany: [{
            type: ViewChild,
            args: ['autoBelongToMany']
        }] }); })();

class RestAdminConfigService {
    constructor(restConfig) {
        this.restConfig = restConfig;
        this.components = [];
        this._restAuthParams = {
            strategy: STRATEGY_AUTH.EMAIL,
            baseEndpoint: '',
            logoutEndPoint: '',
            loginEndPoint: '',
            userInfoEndPoint: '',
        };
        this.defaultLanguage = [
            { text: 'Anglais', value: 'en' },
            { text: 'Français', value: 'fr' },
        ];
        this._restResources = restConfig.resources;
        this._restAuthParams = this.checkValueRestAuth(restConfig.authConfig ? restConfig.authConfig : {});
        this._permissions = restConfig.permissions ? restConfig.permissions : [];
    }
    get restResources() {
        return this._restResources;
    }
    set restResources(v) {
        this._restResources = v;
    }
    get siteName() {
        return this.restConfig.name;
    }
    get restBaseUrl() {
        return this.restConfig.baseUrl;
    }
    get googleMapApiKey() {
        return this.restConfig.googleMapApiKey
            ? this.restConfig.googleMapApiKey
            : '';
    }
    get restPathFileTranslate() {
        return this.restConfig.translate
            ? this.restConfig.translate.filePath
            : 'assets/i18n/';
    }
    get restLanguage() {
        return this.restConfig.translate
            ? this.restConfig.translate.languages
            : this.defaultLanguage;
    }
    getSpecificResource(nameResource) {
        return this._restResources.find((rest) => rest.name.toLowerCase() == nameResource.toLowerCase());
    }
    generateMenus() {
        let groupsName = [];
        this._restResources.map((rest) => {
            if (rest.listConfig.group)
                groupsName.push(rest.listConfig.group);
        });
        const menus_group = {};
        this._restResources.forEach((item) => {
            if (item.listConfig.group) {
                switch (item.listConfig.group.type) {
                    case TYPE_GROUP.SEPARATOR:
                        if (Array.isArray(menus_group[item.listConfig.group.name]))
                            menus_group[item.listConfig.group.name].push({
                                title: item.name,
                                icon: item.icon,
                                link: '/admin/' + item.name.toLowerCase() + '-list',
                            });
                        else {
                            menus_group[item.listConfig.group.name] = [
                                {
                                    title: item.listConfig.group.name,
                                    group: true,
                                },
                            ];
                            menus_group[item.listConfig.group.name].push({
                                title: item.name,
                                icon: item.icon,
                                link: '/admin/' + item.name.toLowerCase() + '-list',
                            });
                        }
                        break;
                    case TYPE_GROUP.MENU:
                        if (Array.isArray(menus_group[item.listConfig.group.name])) {
                            if (Array.isArray(menus_group[item.listConfig.group.name][0]['children'])) {
                                menus_group[item.listConfig.group.name][0].children.push({
                                    title: item.name,
                                    link: '/admin/' + item.name.toLowerCase() + '-list',
                                    icon: item.icon,
                                });
                            }
                            else {
                                menus_group[item.listConfig.group.name][0]['children'] = [
                                    {
                                        title: item.name,
                                        link: '/admin/' + item.name.toLowerCase() + '-list',
                                        icon: item.icon,
                                    },
                                ];
                            }
                        }
                        else {
                            menus_group[item.listConfig.group.name] = [
                                {
                                    title: item.listConfig.group.name,
                                    icon: item.listConfig.group.icon,
                                    expanded: true,
                                    children: [
                                        {
                                            title: item.name,
                                            link: '/admin/' + item.name.toLowerCase() + '-list',
                                            icon: item.icon,
                                        },
                                    ],
                                },
                            ];
                        }
                        break;
                    default:
                        if (Array.isArray(menus_group[TYPE_GROUP.DEFAULT]))
                            menus_group[TYPE_GROUP.DEFAULT].push({
                                title: item.name,
                                icon: item.icon,
                                link: item.name.toLowerCase() + '-list',
                            });
                        else {
                            menus_group[TYPE_GROUP.DEFAULT] = [];
                            menus_group[TYPE_GROUP.DEFAULT].push({
                                title: item.name,
                                link: item.name.toLowerCase() + '-list',
                                icon: item.icon,
                            });
                        }
                        break;
                }
            }
            else {
                if (Array.isArray(menus_group[TYPE_GROUP.DEFAULT]))
                    menus_group[TYPE_GROUP.DEFAULT].push({
                        title: item.name,
                        icon: item.icon,
                        link: '/admin/' + item.name.toLowerCase() + '-list',
                    });
                else {
                    menus_group[TYPE_GROUP.DEFAULT] = [];
                    menus_group[TYPE_GROUP.DEFAULT].push({
                        title: item.name,
                        link: '/admin/' + item.name.toLowerCase() + '-list',
                        icon: item.icon,
                    });
                }
            }
        });
        let menus_test = [];
        let priorities = groupsName
            .sort((a, b) => a.priority - b.priority)
            .reverse();
        priorities = _.uniqBy(priorities, 'name');
        priorities.forEach((item) => {
            menus_test.push(...menus_group[item.name]);
        });
        return menus_test;
    }
    generateRoutes() {
        return this._restResources.reduce((cumul, rest) => {
            if (rest.authRequired) {
                return [
                    ...cumul,
                    {
                        path: rest.name.toLowerCase() + '-list',
                        component: RestResourceListComponent,
                        // data: {
                        //   ngxPermissions: {
                        //     only: rest.permissions,
                        //   },
                        // },
                        canActivate: [AuthGuard],
                    },
                    {
                        path: rest.name.toLowerCase() + '-add',
                        component: RestResourceAddComponent,
                        // data: {
                        //   ngxPermissions: {
                        //     only: rest.permissions,
                        //   },
                        // },
                        canActivate: [AuthGuard],
                    },
                    {
                        path: rest.name.toLowerCase() + '-edit/:id',
                        component: RestResourceAddComponent,
                        // data: {
                        //   ngxPermissions: {
                        //     only: rest.permissions,
                        //   },
                        // },
                        canActivate: [AuthGuard],
                    },
                    {
                        path: rest.name.toLowerCase() + '-detail/:id',
                        component: RestResourceDetailComponent,
                        // data: {
                        //   ngxPermissions: {
                        //     only: rest.permissions,
                        //   },
                        // },
                        canActivate: [AuthGuard],
                    },
                ];
            }
            return [
                ...cumul,
                {
                    path: rest.name.toLowerCase() + '-list',
                    // data: {
                    //   ngxPermissions: {
                    //     only: rest.permissions,
                    //   },
                    // },
                    component: RestResourceListComponent,
                },
                {
                    path: rest.name.toLowerCase() + '-add',
                    // data: {
                    //   ngxPermissions: {
                    //     only: rest.permissions,
                    //   },
                    // },
                    component: RestResourceAddComponent,
                },
                {
                    path: rest.name.toLowerCase() + '-edit/:id',
                    // data: {
                    //   ngxPermissions: {
                    //     only: rest.permissions,
                    //   },
                    // },
                    component: RestResourceAddComponent,
                },
                {
                    path: rest.name.toLowerCase() + '-detail/:id',
                    // data: {
                    //   ngxPermissions: {
                    //     only: rest.permissions,
                    //   },
                    // },
                    component: RestResourceDetailComponent,
                },
            ];
        }, []);
    }
    get restAuthParams() {
        return this._restAuthParams;
    }
    checkValueRestAuth(params) {
        const rest = {
            strategy: STRATEGY_AUTH.EMAIL,
            baseEndpoint: '',
            logoutEndPoint: '',
            loginEndPoint: '',
            profileNameEndPoint: '',
            profilePictureEndPoint: '',
            userInfoEndPoint: '',
        };
        rest.strategy = params.strategy ? params.strategy : STRATEGY_AUTH.EMAIL;
        rest.baseEndpoint = params.baseEndpoint
            ? params.baseEndpoint
            : this.restBaseUrl;
        rest.loginEndPoint = params.loginEndPoint
            ? params.loginEndPoint
            : '/auth/login';
        rest.logoutEndPoint = params.logoutEndPoint
            ? params.logoutEndPoint
            : '/auth/logout';
        rest.userInfoEndPoint = params.userInfoEndPoint
            ? params.userInfoEndPoint
            : '/users/me';
        rest.profileNameEndPoint = params.profileNameEndPoint
            ? params.profileNameEndPoint
            : 'original.full_name';
        rest.profilePictureEndPoint = params.profilePictureEndPoint
            ? params.profilePictureEndPoint
            : 'original.infos.logo';
        rest.redirectRouteAfterLogin = params.redirectRouteAfterLogin
            ? this.checkIfRouteExist(params.redirectRouteAfterLogin.substring(1) + '-list')
                ? '/admin' + params.redirectRouteAfterLogin + '-list'
                : '/admin'
            : '/admin';
        rest.tokenLocationInResponse = params.tokenLocationInResponse
            ? params.tokenLocationInResponse
            : 'data.token';
        return rest;
    }
    checkIfRouteExist(route) {
        return this.generateRoutes().find((item) => item.path === route)
            ? true
            : false;
    }
    get permission() {
        return this._permissions;
    }
}
RestAdminConfigService.ɵfac = function RestAdminConfigService_Factory(t) { return new (t || RestAdminConfigService)(i0.ɵɵinject('restConfig')); };
RestAdminConfigService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RestAdminConfigService, factory: RestAdminConfigService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestAdminConfigService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['restConfig']
            }] }]; }, null); })();

function HeaderComponent_nb_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const theme_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", theme_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", theme_r3.name, "");
} }
function HeaderComponent_nb_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const lang_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", lang_r4.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, lang_r4.value), "");
} }
function HeaderComponent_nb_action_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-action", 10);
    i0.ɵɵelement(1, "nb-user", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbContextMenu", ctx_r2.userMenu)("name", ctx_r2.user == null ? null : ctx_r2.user.name)("picture", (ctx_r2.user == null ? null : ctx_r2.user.picture) ? ctx_r2.user == null ? null : ctx_r2.user.picture : ctx_r2.user == null ? null : ctx_r2.user.defaultPicture);
} }
const _c0$4 = function () { return ["view", "user"]; };
class HeaderComponent {
    constructor(sidebarService, menuService, themeService, layoutService, breakpointService, serviceRestAdmin, authService, router, langService, httpClient) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.layoutService = layoutService;
        this.breakpointService = breakpointService;
        this.serviceRestAdmin = serviceRestAdmin;
        this.authService = authService;
        this.router = router;
        this.langService = langService;
        this.httpClient = httpClient;
        this.destroy$ = new Subject();
        this.userPictureOnly = false;
        this.isAuth = false;
        this.themes = [
            {
                value: 'default',
                name: 'Light',
            },
            {
                value: 'dark',
                name: 'Dark',
            },
            {
                value: 'cosmic',
                name: 'Cosmic',
            },
            {
                value: 'corporate',
                name: 'Corporate',
            },
        ];
        this.currentTheme = 'default';
        this.appLanguage = [];
        this.currentLang = '';
        this.userMenu = [{ title: 'Déconnexion' }];
    }
    ngOnInit() {
        this.currentTheme = this.themeService.currentTheme;
        this.appLanguage = this.langService.getLanguages();
        this.currentLang = this.langService.selected;
        const authApp = JSON.parse(localStorage.getItem(GLOBALS.AUTH_APP_TOKEN));
        if (authApp && authApp.value) {
            this.httpClient
                .get(`${this.serviceRestAdmin.restBaseUrl}${this.serviceRestAdmin.restAuthParams.userInfoEndPoint}`)
                .subscribe((resp) => {
                var data = resp;
                var user = {
                    name: resp[this.serviceRestAdmin.restAuthParams.profileNameEndPoint],
                    picture: resp[this.serviceRestAdmin.restAuthParams.profilePictureEndPoint],
                    defaultPicture: 'M',
                };
                var namePath = this.serviceRestAdmin.restAuthParams.profileNameEndPoint.split('.');
                namePath.map((val) => {
                    user['name'] = data[val];
                    data = data[val];
                });
                data = resp;
                var picturePath = this.serviceRestAdmin.restAuthParams.profilePictureEndPoint.split('.');
                picturePath.map((val) => {
                    user['picture'] = data[val];
                    data = data[val];
                });
                if (user['name'])
                    user['defaultPicture'] = `https://ui-avatars.com/api/?name=${user['name'].toString()}&rounded=true`;
                this.user = user;
                this.isAuth = true;
            });
        }
        const { xl } = this.breakpointService.getBreakpointsMap();
        this.themeService
            .onMediaQueryChange()
            .pipe(map(([, currentBreakpoint]) => currentBreakpoint.width < xl), takeUntil(this.destroy$))
            .subscribe((isLessThanXl) => (this.userPictureOnly = isLessThanXl));
        this.themeService
            .onThemeChange()
            .pipe(map(({ name }) => name), takeUntil(this.destroy$))
            .subscribe((themeName) => (this.currentTheme = themeName));
        this.menuService
            .onItemClick()
            .pipe(filter(({ tag }) => tag === 'my-context-menu'), map(({ item: { title } }) => title))
            .subscribe((title) => {
            switch (title) {
                case 'Déconnexion':
                    this.httpClient
                        .post(`${this.serviceRestAdmin.restBaseUrl}${this.serviceRestAdmin.restAuthParams.logoutEndPoint}`, {})
                        .subscribe((resp) => {
                        localStorage.removeItem(GLOBALS.AUTH_APP_TOKEN);
                        this.router.navigateByUrl('/login');
                        this.isAuth = false;
                    }, (err) => {
                        localStorage.removeItem(GLOBALS.AUTH_APP_TOKEN);
                        this.router.navigateByUrl('/login');
                        this.isAuth = false;
                    });
                    break;
                default:
                    console.log('Non pris en charge');
                    break;
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    changeTheme(themeName) {
        this.themeService.changeTheme(themeName);
    }
    toggleSidebar() {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();
        return false;
    }
    navigateHome() {
        this.menuService.navigateHome();
        return false;
    }
    signin() {
        this.router.navigateByUrl('/auth/login');
    }
    sigout() {
        this.authService.logout('email');
    }
    changeLang(event) {
        this.langService.setLanguage(event);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(i0.ɵɵdirectiveInject(i1$1.NbSidebarService), i0.ɵɵdirectiveInject(i1$1.NbMenuService), i0.ɵɵdirectiveInject(i1$1.NbThemeService), i0.ɵɵdirectiveInject(LayoutService), i0.ɵɵdirectiveInject(i1$1.NbMediaBreakpointsService), i0.ɵɵdirectiveInject(RestAdminConfigService), i0.ɵɵdirectiveInject(i1$5.NbAuthService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(RestLangService), i0.ɵɵdirectiveInject(i1$2.HttpClient)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["ngx-header"]], decls: 14, vars: 7, consts: [[1, "header-container"], [1, "logo-container"], ["href", "#", 1, "sidebar-toggle", 3, "click"], ["icon", "menu-2-outline"], ["href", "#", 1, "logo", 3, "click"], ["status", "primary", 3, "selected", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], ["size", "small"], ["class", "user-action", 4, "nbIsGranted"], [3, "value"], [1, "user-action"], ["nbContextMenuTag", "my-context-menu", 3, "nbContextMenu", "name", "picture"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "a", 2);
        i0.ɵɵlistener("click", function HeaderComponent_Template_a_click_2_listener() { return ctx.toggleSidebar(); });
        i0.ɵɵelement(3, "nb-icon", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "a", 4);
        i0.ɵɵlistener("click", function HeaderComponent_Template_a_click_4_listener() { return ctx.navigateHome(); });
        i0.ɵɵelementStart(5, "span");
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "nb-select", 5);
        i0.ɵɵlistener("selectedChange", function HeaderComponent_Template_nb_select_selectedChange_7_listener($event) { return ctx.changeTheme($event); });
        i0.ɵɵtemplate(8, HeaderComponent_nb_option_8_Template, 2, 2, "nb-option", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 0);
        i0.ɵɵelementStart(10, "nb-select", 5);
        i0.ɵɵlistener("selectedChange", function HeaderComponent_Template_nb_select_selectedChange_10_listener($event) { return ctx.changeLang($event); });
        i0.ɵɵtemplate(11, HeaderComponent_nb_option_11_Template, 3, 4, "nb-option", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "nb-actions", 7);
        i0.ɵɵtemplate(13, HeaderComponent_nb_action_13_Template, 2, 3, "nb-action", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate(ctx.serviceRestAdmin.siteName);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("selected", ctx.currentTheme);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.themes);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("selected", ctx.currentLang);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.appLanguage);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("nbIsGranted", i0.ɵɵpureFunction0(6, _c0$4));
    } }, directives: [i1$1.NbIconComponent, i1$1.NbSelectComponent, i8.NgForOf, i1$1.NbActionsComponent, i9.NbIsGrantedDirective, i1$1.NbOptionComponent, i1$1.NbActionComponent, i1$1.NbUserComponent, i1$1.NbContextMenuDirective], pipes: [i8.UpperCasePipe], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-default   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-default   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-default   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]{cursor:pointer}.nb-theme-default   [_nghost-%COMP%]     nb-search button{padding:0!important}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{text-decoration:none;color:#8f9bb3}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.75rem}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #edf1f7}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #edf1f7}@media (max-width: 767.98px){.nb-theme-default   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-default   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%]{border:none;padding:0}}@media (max-width: 575.98px){.nb-theme-default   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%]{display:none}}.nb-theme-dark   [_nghost-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-dark   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-dark   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-dark   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]{cursor:pointer}.nb-theme-dark   [_nghost-%COMP%]     nb-search button{padding:0!important}.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{text-decoration:none;color:#8f9bb3}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.75rem}.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #151a30}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #151a30}@media (max-width: 767.98px){.nb-theme-dark   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-dark   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%]{border:none;padding:0}}@media (max-width: 575.98px){.nb-theme-dark   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%]{display:none}}.nb-theme-cosmic   [_nghost-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-cosmic   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-cosmic   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]{cursor:pointer}.nb-theme-cosmic   [_nghost-%COMP%]     nb-search button{padding:0!important}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{text-decoration:none;color:#b4b4db}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.75rem}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #1b1b38}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #1b1b38}@media (max-width: 767.98px){.nb-theme-cosmic   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-cosmic   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%]{border:none;padding:0}}@media (max-width: 575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%]{display:none}}.nb-theme-corporate   [_nghost-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-corporate   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-corporate   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-corporate   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]{cursor:pointer}.nb-theme-corporate   [_nghost-%COMP%]     nb-search button{padding:0!important}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{text-decoration:none;color:#8f9bb3}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.75rem}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #edf1f7}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #edf1f7}@media (max-width: 767.98px){.nb-theme-corporate   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-corporate   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%]{border:none;padding:0}}@media (max-width: 575.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%]{display:none}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeaderComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-header',
                styleUrls: ['./header.component.scss'],
                templateUrl: './header.component.html',
            }]
    }], function () { return [{ type: i1$1.NbSidebarService }, { type: i1$1.NbMenuService }, { type: i1$1.NbThemeService }, { type: LayoutService }, { type: i1$1.NbMediaBreakpointsService }, { type: RestAdminConfigService }, { type: i1$5.NbAuthService }, { type: i1.Router }, { type: RestLangService }, { type: i1$2.HttpClient }]; }, null); })();

class FooterComponent {
    constructor(serviceRestAdmin) {
        this.serviceRestAdmin = serviceRestAdmin;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(i0.ɵɵdirectiveInject(RestAdminConfigService)); };
FooterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["ngx-footer"]], decls: 6, vars: 1, consts: [[1, "created-by"], [1, "socials"], ["href", "https://github.com/Foris-master/ngx-admin", "target", "_blank", 1, "ion", "ion-social-github"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵelementStart(1, "b");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(3, " copyright ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 1);
        i0.ɵɵelement(5, "a", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.serviceRestAdmin.siteName);
    } }, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:2rem}.nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.4rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#222b45}@media (max-width: 575.98px){.nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}.nb-theme-dark   [_nghost-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-dark   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:2rem}.nb-theme-dark   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.4rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-dark   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}@media (max-width: 575.98px){.nb-theme-dark   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}.nb-theme-cosmic   [_nghost-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:2rem}.nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.4rem;color:#b4b4db;transition:color ease-out .1s}.nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}@media (max-width: 575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}.nb-theme-corporate   [_nghost-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:2rem}.nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.4rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#222b45}@media (max-width: 575.98px){.nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FooterComponent, [{
        type: Component,
        args: [{
                selector: "ngx-footer",
                styleUrls: ["./footer.component.scss"],
                template: `
    <span class="created-by"> <b>{{ serviceRestAdmin.siteName }}</b> copyright </span>
    <div class="socials">
      <a
        href="https://github.com/Foris-master/ngx-admin"
        target="_blank"
        class="ion ion-social-github"
      ></a>
    </div>
  `,
            }]
    }], function () { return [{ type: RestAdminConfigService }]; }, null); })();

const _c0$3 = ["input"];
class SearchInputComponent {
    constructor() {
        this.search = new EventEmitter();
        this.isInputShown = false;
    }
    showInput() {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    }
    hideInput() {
        this.isInputShown = false;
    }
    onInput(val) {
        this.search.emit(val);
    }
}
SearchInputComponent.ɵfac = function SearchInputComponent_Factory(t) { return new (t || SearchInputComponent)(); };
SearchInputComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchInputComponent, selectors: [["ngx-search-input"]], viewQuery: function SearchInputComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$3, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, outputs: { search: "search" }, decls: 3, vars: 2, consts: [[1, "control-icon", "ion", "ion-ios-search", 3, "click"], ["placeholder", "Type your search request here...", 3, "blur", "input"], ["input", ""]], template: function SearchInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "i", 0);
        i0.ɵɵlistener("click", function SearchInputComponent_Template_i_click_0_listener() { return ctx.showInput(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "input", 1, 2);
        i0.ɵɵlistener("blur", function SearchInputComponent_Template_input_blur_1_listener() { return ctx.hideInput(); })("input", function SearchInputComponent_Template_input_input_1_listener($event) { return ctx.onInput($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("hidden", !ctx.isInputShown);
    } }, styles: ["[_nghost-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   i.control-icon[_ngcontent-%COMP%]:before{font-size:2.3rem}[_nghost-%COMP%]   i.control-icon[_ngcontent-%COMP%]:hover{cursor:pointer}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{border:none;outline:none;margin-left:1rem;width:15rem;transition:width .2s ease}[_nghost-%COMP%]   input.hidden[_ngcontent-%COMP%]{width:0;margin:0}[_nghost-%COMP%]     search-input input{background:transparent}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchInputComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-search-input',
                styleUrls: ['./search-input.component.scss'],
                template: `
    <i class="control-icon ion ion-ios-search"
       (click)="showInput()"></i>
    <input placeholder="Type your search request here..."
           #input
           [class.hidden]="!isInputShown"
           (blur)="hideInput()"
           (input)="onInput($event)">
  `,
            }]
    }], null, { input: [{
            type: ViewChild,
            args: ['input', { static: true }]
        }], search: [{
            type: Output
        }] }); })();

class TinyMCEComponent {
    constructor(host, locationStrategy) {
        this.host = host;
        this.locationStrategy = locationStrategy;
        this.editorKeyup = new EventEmitter();
    }
    ngAfterViewInit() {
        // tinymce.init({
        //   target: this.host.nativeElement,
        //   plugins: ['link', 'paste', 'table'],
        //   skin_url: `${this.locationStrategy.getBaseHref()}assets/skins/lightgray`,
        //   setup: (editor) => {
        //     this.editor = editor;
        //     editor.on('keyup', () => {
        //       this.editorKeyup.emit(editor.getContent());
        //     });
        //   },
        //   height: '320',
        // });
    }
    ngOnDestroy() {
        // tinymce.remove(this.editor);
    }
}
TinyMCEComponent.ɵfac = function TinyMCEComponent_Factory(t) { return new (t || TinyMCEComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i8.LocationStrategy)); };
TinyMCEComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TinyMCEComponent, selectors: [["ngx-tiny-mce"]], outputs: { editorKeyup: "editorKeyup" }, decls: 0, vars: 0, template: function TinyMCEComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TinyMCEComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-tiny-mce',
                template: '',
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i8.LocationStrategy }]; }, { editorKeyup: [{
            type: Output
        }] }); })();

class CapitalizePipe {
    transform(input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    }
}
CapitalizePipe.ɵfac = function CapitalizePipe_Factory(t) { return new (t || CapitalizePipe)(); };
CapitalizePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "ngxCapitalize", type: CapitalizePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CapitalizePipe, [{
        type: Pipe,
        args: [{ name: 'ngxCapitalize' }]
    }], null, null); })();

class PluralPipe {
    transform(input, label, pluralLabel = '') {
        input = input || 0;
        return input === 1
            ? `${input} ${label}`
            : pluralLabel
                ? `${input} ${pluralLabel}`
                : `${input} ${label}s`;
    }
}
PluralPipe.ɵfac = function PluralPipe_Factory(t) { return new (t || PluralPipe)(); };
PluralPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "ngxPlural", type: PluralPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PluralPipe, [{
        type: Pipe,
        args: [{ name: 'ngxPlural' }]
    }], null, null); })();

class RoundPipe {
    transform(input) {
        return Math.round(input);
    }
}
RoundPipe.ɵfac = function RoundPipe_Factory(t) { return new (t || RoundPipe)(); };
RoundPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "ngxRound", type: RoundPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RoundPipe, [{
        type: Pipe,
        args: [{ name: 'ngxRound' }]
    }], null, null); })();

class TimingPipe {
    transform(time) {
        if (time) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${this.initZero(minutes)}${minutes}:${this.initZero(seconds)}${seconds}`;
        }
        return '00:00';
    }
    initZero(time) {
        return time < 10 ? '0' : '';
    }
}
TimingPipe.ɵfac = function TimingPipe_Factory(t) { return new (t || TimingPipe)(); };
TimingPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "timing", type: TimingPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimingPipe, [{
        type: Pipe,
        args: [{ name: 'timing' }]
    }], null, null); })();

class NumberWithCommasPipe {
    transform(input) {
        return new Intl.NumberFormat().format(input);
    }
}
NumberWithCommasPipe.ɵfac = function NumberWithCommasPipe_Factory(t) { return new (t || NumberWithCommasPipe)(); };
NumberWithCommasPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "ngxNumberWithCommas", type: NumberWithCommasPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumberWithCommasPipe, [{
        type: Pipe,
        args: [{ name: 'ngxNumberWithCommas' }]
    }], null, null); })();

const _c0$2 = [[["input"]], [["nb-menu"]], [["router-outlet"]]];
const _c1$2 = ["input", "nb-menu", "router-outlet"];
class OneColumnLayoutComponent {
}
OneColumnLayoutComponent.ɵfac = function OneColumnLayoutComponent_Factory(t) { return new (t || OneColumnLayoutComponent)(); };
OneColumnLayoutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OneColumnLayoutComponent, selectors: [["ngx-one-column-layout"]], ngContentSelectors: _c1$2, decls: 10, vars: 0, consts: [["windowMode", ""], ["tag", "menu-sidebar", "responsive", "", 1, "menu-sidebar"], ["fixed", ""]], template: function OneColumnLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0$2);
        i0.ɵɵelementStart(0, "nb-layout", 0);
        i0.ɵɵelementStart(1, "nb-layout-header");
        i0.ɵɵelement(2, "ngx-header");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "nb-sidebar", 1);
        i0.ɵɵprojection(4);
        i0.ɵɵprojection(5, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "nb-layout-column");
        i0.ɵɵprojection(7, 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "nb-layout-footer", 2);
        i0.ɵɵelement(9, "ngx-footer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1$1.NbLayoutComponent, i1$1.NbLayoutHeaderComponent, HeaderComponent, i1$1.NbSidebarComponent, i1$1.NbLayoutColumnComponent, i1$1.NbLayoutFooterComponent, FooterComponent], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}.nb-theme-dark   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}.nb-theme-corporate   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OneColumnLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-one-column-layout',
                styleUrls: ['./one-column.layout.scss'],
                template: `
    <nb-layout windowMode>
      <nb-layout-header >
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="input"></ng-content>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
            }]
    }], null, null); })();

const _c0$1 = [[["nb-menu"]], [["router-outlet"]]];
const _c1$1 = ["nb-menu", "router-outlet"];
class TwoColumnsLayoutComponent {
}
TwoColumnsLayoutComponent.ɵfac = function TwoColumnsLayoutComponent_Factory(t) { return new (t || TwoColumnsLayoutComponent)(); };
TwoColumnsLayoutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TwoColumnsLayoutComponent, selectors: [["ngx-two-columns-layout"]], ngContentSelectors: _c1$1, decls: 10, vars: 0, consts: [["windowMode", ""], ["fixed", ""], ["tag", "menu-sidebar", "responsive", "", 1, "menu-sidebar"], [1, "small"]], template: function TwoColumnsLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0$1);
        i0.ɵɵelementStart(0, "nb-layout", 0);
        i0.ɵɵelementStart(1, "nb-layout-header", 1);
        i0.ɵɵelement(2, "ngx-header");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "nb-sidebar", 2);
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "nb-layout-column", 3);
        i0.ɵɵelementStart(6, "nb-layout-column");
        i0.ɵɵprojection(7, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "nb-layout-footer", 1);
        i0.ɵɵelement(9, "ngx-footer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1$1.NbLayoutComponent, i1$1.NbLayoutHeaderComponent, HeaderComponent, i1$1.NbSidebarComponent, i1$1.NbLayoutColumnComponent, i1$1.NbLayoutFooterComponent, FooterComponent], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}.nb-theme-dark   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}.nb-theme-corporate   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TwoColumnsLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-two-columns-layout',
                styleUrls: ['./two-columns.layout.scss'],
                template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>

    </nb-layout>
  `,
            }]
    }], null, null); })();

const _c0 = [[["nb-menu"]], [["router-outlet"]]];
const _c1 = ["nb-menu", "router-outlet"];
class ThreeColumnsLayoutComponent {
}
ThreeColumnsLayoutComponent.ɵfac = function ThreeColumnsLayoutComponent_Factory(t) { return new (t || ThreeColumnsLayoutComponent)(); };
ThreeColumnsLayoutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ThreeColumnsLayoutComponent, selectors: [["ngx-three-columns-layout"]], ngContentSelectors: _c1, decls: 11, vars: 0, consts: [["windowMode", ""], ["fixed", ""], ["tag", "menu-sidebar", "responsive", "", 1, "menu-sidebar"], [1, "small"]], template: function ThreeColumnsLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵelementStart(0, "nb-layout", 0);
        i0.ɵɵelementStart(1, "nb-layout-header", 1);
        i0.ɵɵelement(2, "ngx-header");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "nb-sidebar", 2);
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "nb-layout-column", 3);
        i0.ɵɵelementStart(6, "nb-layout-column");
        i0.ɵɵprojection(7, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "nb-layout-column", 3);
        i0.ɵɵelementStart(9, "nb-layout-footer", 1);
        i0.ɵɵelement(10, "ngx-footer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1$1.NbLayoutComponent, i1$1.NbLayoutHeaderComponent, HeaderComponent, i1$1.NbSidebarComponent, i1$1.NbLayoutColumnComponent, i1$1.NbLayoutFooterComponent, FooterComponent], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}.nb-theme-dark   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}.nb-theme-corporate   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThreeColumnsLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-three-columns-layout',
                styleUrls: ['./three-columns.layout.scss'],
                template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
            }]
    }], null, null); })();

const baseThemeVariables$3 = DEFAULT_THEME$1.variables;
const DEFAULT_THEME = {
    name: 'default',
    base: 'default',
    variables: {
        temperature: {
            arcFill: [
                baseThemeVariables$3.primary,
                baseThemeVariables$3.primary,
                baseThemeVariables$3.primary,
                baseThemeVariables$3.primary,
                baseThemeVariables$3.primary,
            ],
            arcEmpty: baseThemeVariables$3.bg2,
            thumbBg: baseThemeVariables$3.bg2,
            thumbBorder: baseThemeVariables$3.primary,
        },
        solar: {
            gradientLeft: baseThemeVariables$3.primary,
            gradientRight: baseThemeVariables$3.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables$3.bg2,
            radius: ['80%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables$3.bg,
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables$3.separator,
            lineBg: baseThemeVariables$3.border4,
            lineShadowBlur: '1',
            itemColor: baseThemeVariables$3.border4,
            itemBorderColor: baseThemeVariables$3.border4,
            itemEmphasisBorderColor: baseThemeVariables$3.primary,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables$3.bg2,
            gradTo: baseThemeVariables$3.bg2,
        },
        electricity: {
            tooltipBg: baseThemeVariables$3.bg,
            tooltipLineColor: baseThemeVariables$3.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables$3.border3,
            xAxisTextColor: baseThemeVariables$3.fg,
            yAxisSplitLine: baseThemeVariables$3.separator,
            itemBorderColor: baseThemeVariables$3.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables$3.primary,
            lineGradTo: baseThemeVariables$3.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables$3.bg2,
            areaGradTo: baseThemeVariables$3.bg2,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: baseThemeVariables$3.fgText,
            areaColor: baseThemeVariables$3.bg4,
            areaHoverColor: baseThemeVariables$3.fgHighlight,
            areaBorderColor: baseThemeVariables$3.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables$3.fgText,
            firstAnimationBarColor: baseThemeVariables$3.primary,
            secondAnimationBarColor: baseThemeVariables$3.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables$3.separator,
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables$3.bg,
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables$3.warningLight,
            gradientTo: baseThemeVariables$3.warning,
            shadow: baseThemeVariables$3.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables$3.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables$3.bg,
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables$3.border4,
            countryFillColor: baseThemeVariables$3.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables$3.primary,
            hoveredCountryFillColor: baseThemeVariables$3.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables$3.border4,
            chartAxisTextColor: baseThemeVariables$3.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables$3.primary,
            chartGradientFrom: baseThemeVariables$3.primaryLight,
            chartAxisSplitLine: baseThemeVariables$3.separator,
            chartShadowLineColor: baseThemeVariables$3.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables$3.primary,
            chartInnerLineColor: baseThemeVariables$3.bg2,
        },
        echarts: {
            bg: baseThemeVariables$3.bg,
            textColor: baseThemeVariables$3.fgText,
            axisLineColor: baseThemeVariables$3.fgText,
            splitLineColor: baseThemeVariables$3.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables$3.primary,
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: baseThemeVariables$3.separator,
            textColor: baseThemeVariables$3.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables$3.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables$3.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$3.fg,
            yAxisSplitLine: baseThemeVariables$3.separator,
            itemBorderColor: baseThemeVariables$3.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables$3.bg3,
            firstAreaGradTo: baseThemeVariables$3.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables$3.primary,
            secondLineGradTo: baseThemeVariables$3.primary,
            secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
            secondAreaGradTo: 'rgba(51, 102, 255, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables$3.success,
            thirdLineGradTo: baseThemeVariables$3.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        profit: {
            bg: baseThemeVariables$3.bg,
            textColor: baseThemeVariables$3.fgText,
            axisLineColor: baseThemeVariables$3.border4,
            splitLineColor: baseThemeVariables$3.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$3.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables$3.bg3,
            firstLineGradTo: baseThemeVariables$3.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables$3.primary,
            secondLineGradTo: baseThemeVariables$3.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables$3.success,
            thirdLineGradTo: baseThemeVariables$3.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables$3.success,
            secondItem: baseThemeVariables$3.primary,
            thirdItem: baseThemeVariables$3.bg3,
        },
        visitors: {
            tooltipBg: baseThemeVariables$3.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables$3.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$3.fg,
            yAxisSplitLine: baseThemeVariables$3.separator,
            itemBorderColor: baseThemeVariables$3.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables$3.primary,
            areaGradTo: baseThemeVariables$3.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables$3.success,
            innerAreaGradTo: baseThemeVariables$3.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables$3.success,
            secondIcon: baseThemeVariables$3.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables$3.success,
            firstPieGradientRight: baseThemeVariables$3.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables$3.warning,
            secondPieGradientRight: baseThemeVariables$3.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '97%'],
            shadowOffsetX: '0',
            shadowOffsetY: '0',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables$3.warning,
            secondSection: baseThemeVariables$3.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables$3.success,
            firstPieGradientRight: baseThemeVariables$3.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables$3.primary,
            secondPieGradientRight: baseThemeVariables$3.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables$3.warning,
            thirdPieGradientRight: baseThemeVariables$3.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables$3.primary,
            gradTo: baseThemeVariables$3.primary,
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables$3.bg,
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};

const baseThemeVariables$2 = COSMIC_THEME$1.variables;
const COSMIC_THEME = {
    name: 'cosmic',
    base: 'cosmic',
    variables: {
        temperature: {
            arcFill: ['#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59'],
            arcEmpty: baseThemeVariables$2.bg2,
            thumbBg: '#ffffff',
            thumbBorder: '#ffffff',
        },
        solar: {
            gradientLeft: baseThemeVariables$2.primary,
            gradientRight: baseThemeVariables$2.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables$2.bg2,
            radius: ['70%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables$2.bg,
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables$2.separator,
            lineBg: baseThemeVariables$2.border2,
            lineShadowBlur: '14',
            itemColor: baseThemeVariables$2.border2,
            itemBorderColor: baseThemeVariables$2.border2,
            itemEmphasisBorderColor: baseThemeVariables$2.primary,
            shadowLineDarkBg: baseThemeVariables$2.border3,
            shadowLineShadow: baseThemeVariables$2.border3,
            gradFrom: baseThemeVariables$2.bg,
            gradTo: baseThemeVariables$2.bg2,
        },
        electricity: {
            tooltipBg: baseThemeVariables$2.bg,
            tooltipLineColor: baseThemeVariables$2.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables$2.border3,
            xAxisTextColor: baseThemeVariables$2.fg,
            yAxisSplitLine: baseThemeVariables$2.separator,
            itemBorderColor: baseThemeVariables$2.border2,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: baseThemeVariables$2.success,
            lineGradTo: baseThemeVariables$2.warning,
            lineShadow: baseThemeVariables$2.bg4,
            areaGradFrom: baseThemeVariables$2.bg2,
            areaGradTo: baseThemeVariables$2.bg3,
            shadowLineDarkBg: baseThemeVariables$2.bg3,
        },
        bubbleMap: {
            titleColor: baseThemeVariables$2.fgText,
            areaColor: baseThemeVariables$2.bg4,
            areaHoverColor: baseThemeVariables$2.fgHighlight,
            areaBorderColor: baseThemeVariables$2.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables$2.fgText,
            firstAnimationBarColor: baseThemeVariables$2.primary,
            secondAnimationBarColor: baseThemeVariables$2.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables$2.border2,
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables$2.bg,
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables$2.warningLight,
            gradientTo: baseThemeVariables$2.warning,
            shadow: baseThemeVariables$2.warningLight,
            shadowBlur: '5',
            axisTextColor: baseThemeVariables$2.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables$2.bg,
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables$2.border4,
            countryFillColor: baseThemeVariables$2.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables$2.primary,
            hoveredCountryFillColor: baseThemeVariables$2.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables$2.border4,
            chartAxisTextColor: baseThemeVariables$2.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables$2.primary,
            chartGradientFrom: baseThemeVariables$2.primaryLight,
            chartAxisSplitLine: baseThemeVariables$2.separator,
            chartShadowLineColor: baseThemeVariables$2.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables$2.primary,
            chartInnerLineColor: baseThemeVariables$2.bg2,
        },
        echarts: {
            bg: baseThemeVariables$2.bg,
            textColor: baseThemeVariables$2.fgText,
            axisLineColor: baseThemeVariables$2.fgText,
            splitLineColor: baseThemeVariables$2.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables$2.primary,
            areaOpacity: '1',
        },
        chartjs: {
            axisLineColor: baseThemeVariables$2.separator,
            textColor: baseThemeVariables$2.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables$2.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables$2.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$2.fg,
            yAxisSplitLine: baseThemeVariables$2.separator,
            itemBorderColor: baseThemeVariables$2.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables$2.bg2,
            firstAreaGradTo: baseThemeVariables$2.bg2,
            firstShadowLineDarkBg: baseThemeVariables$2.bg2,
            // second line
            secondLineGradFrom: baseThemeVariables$2.primary,
            secondLineGradTo: baseThemeVariables$2.primary,
            secondAreaGradFrom: 'rgba(161, 110, 255, 0.8)',
            secondAreaGradTo: 'rgba(161, 110, 255, 0.5)',
            secondShadowLineDarkBg: baseThemeVariables$2.primary,
            // third line
            thirdLineGradFrom: baseThemeVariables$2.success,
            thirdLineGradTo: baseThemeVariables$2.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.7)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0.4)',
            thirdShadowLineDarkBg: baseThemeVariables$2.success,
        },
        profit: {
            bg: baseThemeVariables$2.bg,
            textColor: baseThemeVariables$2.fgText,
            axisLineColor: baseThemeVariables$2.border4,
            splitLineColor: baseThemeVariables$2.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$2.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables$2.bg2,
            firstLineGradTo: baseThemeVariables$2.bg2,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables$2.primary,
            secondLineGradTo: baseThemeVariables$2.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables$2.success,
            thirdLineGradTo: baseThemeVariables$2.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables$2.success,
            secondItem: baseThemeVariables$2.primary,
            thirdItem: baseThemeVariables$2.bg2,
        },
        visitors: {
            tooltipBg: baseThemeVariables$2.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables$2.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$2.fg,
            yAxisSplitLine: baseThemeVariables$2.separator,
            itemBorderColor: baseThemeVariables$2.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables$2.primary,
            areaGradTo: baseThemeVariables$2.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables$2.success,
            innerAreaGradTo: baseThemeVariables$2.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables$2.success,
            secondIcon: baseThemeVariables$2.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables$2.success,
            firstPieGradientRight: baseThemeVariables$2.successLight,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables$2.warning,
            secondPieGradientRight: baseThemeVariables$2.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '95%'],
            shadowOffsetX: '0',
            shadowOffsetY: '3',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables$2.warning,
            secondSection: baseThemeVariables$2.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables$2.success,
            firstPieGradientRight: baseThemeVariables$2.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables$2.primary,
            secondPieGradientRight: baseThemeVariables$2.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables$2.warning,
            thirdPieGradientRight: baseThemeVariables$2.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables$2.primary,
            gradTo: baseThemeVariables$2.primary,
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables$2.bg,
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};

const baseThemeVariables$1 = CORPORATE_THEME$1.variables;
const CORPORATE_THEME = {
    name: 'corporate',
    base: 'corporate',
    variables: {
        temperature: {
            arcFill: ['#ffa36b', '#ffa36b', '#ff9e7a', '#ff9888', '#ff8ea0'],
            arcEmpty: baseThemeVariables$1.bg2,
            thumbBg: baseThemeVariables$1.bg2,
            thumbBorder: '#ffa36b',
        },
        solar: {
            gradientLeft: baseThemeVariables$1.primary,
            gradientRight: baseThemeVariables$1.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables$1.bg2,
            radius: ['80%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables$1.bg,
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: 'rgba(0, 0, 0, 0)',
            lineBg: baseThemeVariables$1.primary,
            lineShadowBlur: '0',
            itemColor: baseThemeVariables$1.border4,
            itemBorderColor: baseThemeVariables$1.border4,
            itemEmphasisBorderColor: baseThemeVariables$1.primaryLight,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables$1.bg,
            gradTo: baseThemeVariables$1.bg,
        },
        electricity: {
            tooltipBg: baseThemeVariables$1.bg,
            tooltipLineColor: baseThemeVariables$1.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables$1.border3,
            xAxisTextColor: baseThemeVariables$1.fg,
            yAxisSplitLine: baseThemeVariables$1.separator,
            itemBorderColor: baseThemeVariables$1.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables$1.primary,
            lineGradTo: baseThemeVariables$1.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(0, 0, 0, 0)',
            areaGradTo: 'rgba(0, 0, 0, 0)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: baseThemeVariables$1.fgText,
            areaColor: baseThemeVariables$1.bg4,
            areaHoverColor: baseThemeVariables$1.fgHighlight,
            areaBorderColor: baseThemeVariables$1.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables$1.fgText,
            firstAnimationBarColor: baseThemeVariables$1.primary,
            secondAnimationBarColor: baseThemeVariables$1.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables$1.separator,
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables$1.bg,
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables$1.warningLight,
            gradientTo: baseThemeVariables$1.warning,
            shadow: baseThemeVariables$1.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables$1.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables$1.bg,
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables$1.border4,
            countryFillColor: baseThemeVariables$1.bg4,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables$1.primary,
            hoveredCountryFillColor: baseThemeVariables$1.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables$1.border4,
            chartAxisTextColor: baseThemeVariables$1.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables$1.primary,
            chartGradientFrom: baseThemeVariables$1.primaryLight,
            chartAxisSplitLine: baseThemeVariables$1.separator,
            chartShadowLineColor: baseThemeVariables$1.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables$1.primary,
            chartInnerLineColor: baseThemeVariables$1.bg2,
        },
        echarts: {
            bg: baseThemeVariables$1.bg,
            textColor: baseThemeVariables$1.fgText,
            axisLineColor: baseThemeVariables$1.fgText,
            splitLineColor: baseThemeVariables$1.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables$1.primary,
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: baseThemeVariables$1.separator,
            textColor: baseThemeVariables$1.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables$1.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables$1.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$1.fg,
            yAxisSplitLine: baseThemeVariables$1.separator,
            itemBorderColor: baseThemeVariables$1.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables$1.bg3,
            firstAreaGradTo: baseThemeVariables$1.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables$1.primary,
            secondLineGradTo: baseThemeVariables$1.primary,
            secondAreaGradFrom: 'rgba(0, 0, 0, 0)',
            secondAreaGradTo: 'rgba(0, 0, 0, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables$1.success,
            thirdLineGradTo: baseThemeVariables$1.successLight,
            thirdAreaGradFrom: 'rgba(0, 0, 0, 0)',
            thirdAreaGradTo: 'rgba(0, 0, 0, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        profit: {
            bg: baseThemeVariables$1.bg,
            textColor: baseThemeVariables$1.fgText,
            axisLineColor: baseThemeVariables$1.border4,
            splitLineColor: baseThemeVariables$1.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$1.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables$1.bg3,
            firstLineGradTo: baseThemeVariables$1.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables$1.primary,
            secondLineGradTo: baseThemeVariables$1.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables$1.success,
            thirdLineGradTo: baseThemeVariables$1.success,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables$1.success,
            secondItem: baseThemeVariables$1.primary,
            thirdItem: baseThemeVariables$1.bg3,
        },
        visitors: {
            tooltipBg: baseThemeVariables$1.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables$1.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$1.fg,
            yAxisSplitLine: baseThemeVariables$1.separator,
            itemBorderColor: baseThemeVariables$1.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables$1.primary,
            areaGradTo: baseThemeVariables$1.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables$1.success,
            innerAreaGradTo: baseThemeVariables$1.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables$1.success,
            secondIcon: baseThemeVariables$1.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables$1.success,
            firstPieGradientRight: baseThemeVariables$1.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['65%', '90%'],
            secondPieGradientLeft: baseThemeVariables$1.warning,
            secondPieGradientRight: baseThemeVariables$1.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['63%', '92%'],
            shadowOffsetX: '-4',
            shadowOffsetY: '-4',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables$1.warning,
            secondSection: baseThemeVariables$1.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables$1.success,
            firstPieGradientRight: baseThemeVariables$1.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables$1.primary,
            secondPieGradientRight: baseThemeVariables$1.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables$1.warning,
            thirdPieGradientRight: baseThemeVariables$1.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables$1.primary,
            gradTo: baseThemeVariables$1.primary,
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables$1.bg,
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};

const baseThemeVariables = DARK_THEME$1.variables;
const DARK_THEME = {
    name: 'dark',
    base: 'dark',
    variables: {
        temperature: {
            arcFill: [
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
            ],
            arcEmpty: baseThemeVariables.bg2,
            thumbBg: baseThemeVariables.bg2,
            thumbBorder: baseThemeVariables.primary,
        },
        solar: {
            gradientLeft: baseThemeVariables.primary,
            gradientRight: baseThemeVariables.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables.bg2,
            radius: ['80%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables.separator,
            lineBg: baseThemeVariables.border4,
            lineShadowBlur: '1',
            itemColor: baseThemeVariables.border4,
            itemBorderColor: baseThemeVariables.border4,
            itemEmphasisBorderColor: baseThemeVariables.primary,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables.bg2,
            gradTo: baseThemeVariables.bg2,
        },
        electricity: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: baseThemeVariables.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables.border3,
            xAxisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables.primary,
            lineGradTo: baseThemeVariables.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.bg2,
            areaGradTo: baseThemeVariables.bg2,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: baseThemeVariables.fgText,
            areaColor: baseThemeVariables.bg4,
            areaHoverColor: baseThemeVariables.fgHighlight,
            areaBorderColor: baseThemeVariables.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables.fgText,
            firstAnimationBarColor: baseThemeVariables.primary,
            secondAnimationBarColor: baseThemeVariables.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables.separator,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables.warningLight,
            gradientTo: baseThemeVariables.warning,
            shadow: baseThemeVariables.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables.border4,
            countryFillColor: baseThemeVariables.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables.primary,
            hoveredCountryFillColor: baseThemeVariables.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables.border4,
            chartAxisTextColor: baseThemeVariables.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables.primary,
            chartGradientFrom: baseThemeVariables.primaryLight,
            chartAxisSplitLine: baseThemeVariables.separator,
            chartShadowLineColor: baseThemeVariables.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables.primary,
            chartInnerLineColor: baseThemeVariables.bg2,
        },
        echarts: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.fgText,
            splitLineColor: baseThemeVariables.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables.primary,
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: baseThemeVariables.separator,
            textColor: baseThemeVariables.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables.bg3,
            firstAreaGradTo: baseThemeVariables.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
            secondAreaGradTo: 'rgba(51, 102, 255, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        profit: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.border4,
            splitLineColor: baseThemeVariables.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables.bg3,
            firstLineGradTo: baseThemeVariables.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables.success,
            secondItem: baseThemeVariables.primary,
            thirdItem: baseThemeVariables.bg3,
        },
        visitors: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.primary,
            areaGradTo: baseThemeVariables.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables.success,
            innerAreaGradTo: baseThemeVariables.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables.success,
            secondIcon: baseThemeVariables.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables.warning,
            secondPieGradientRight: baseThemeVariables.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '97%'],
            shadowOffsetX: '0',
            shadowOffsetY: '0',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables.warning,
            secondSection: baseThemeVariables.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables.primary,
            secondPieGradientRight: baseThemeVariables.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables.warning,
            thirdPieGradientRight: baseThemeVariables.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables.primary,
            gradTo: baseThemeVariables.primary,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};

const NB_MODULES = [
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbSecurityModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
    NbToggleModule,
];
const COMPONENTS = [
    HeaderComponent,
    FooterComponent,
    SearchInputComponent,
    TinyMCEComponent,
    OneColumnLayoutComponent,
    ThreeColumnsLayoutComponent,
    TwoColumnsLayoutComponent,
];
const PIPES = [
    CapitalizePipe,
    PluralPipe,
    RoundPipe,
    TimingPipe,
    NumberWithCommasPipe,
];
class ThemeModule {
    static forRoot() {
        return {
            ngModule: ThemeModule,
            providers: [
                ...NbThemeModule.forRoot({
                    name: 'default',
                }, [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]).providers,
                NbSidebarService,
            ],
        };
    }
}
ThemeModule.ɵfac = function ThemeModule_Factory(t) { return new (t || ThemeModule)(); };
ThemeModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ThemeModule });
ThemeModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, ...NB_MODULES], CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ...NB_MODULES],
                exports: [CommonModule, ...PIPES, ...COMPONENTS],
                declarations: [...COMPONENTS, ...PIPES],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ThemeModule, { declarations: [HeaderComponent,
        FooterComponent,
        SearchInputComponent,
        TinyMCEComponent,
        OneColumnLayoutComponent,
        ThreeColumnsLayoutComponent,
        TwoColumnsLayoutComponent, CapitalizePipe,
        PluralPipe,
        RoundPipe,
        TimingPipe,
        NumberWithCommasPipe], imports: [CommonModule, NbLayoutModule,
        NbMenuModule,
        NbUserModule,
        NbActionsModule,
        NbSearchModule,
        NbSidebarModule,
        NbContextMenuModule,
        NbSecurityModule,
        NbButtonModule,
        NbSelectModule,
        NbIconModule,
        NbEvaIconsModule,
        NbToggleModule], exports: [CommonModule, CapitalizePipe,
        PluralPipe,
        RoundPipe,
        TimingPipe,
        NumberWithCommasPipe, HeaderComponent,
        FooterComponent,
        SearchInputComponent,
        TinyMCEComponent,
        OneColumnLayoutComponent,
        ThreeColumnsLayoutComponent,
        TwoColumnsLayoutComponent] }); })();

// import { MenuItem } from './menu-item';
class MenuFilterPipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter((item) => {
            return (item.title.toLowerCase().includes(searchText) ||
                (item.children &&
                    item.children.filter((child) => child.title.toLowerCase().includes(searchText)).length > 0));
        });
    }
}
MenuFilterPipe.ɵfac = function MenuFilterPipe_Factory(t) { return new (t || MenuFilterPipe)(); };
MenuFilterPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "menuFilter", type: MenuFilterPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuFilterPipe, [{
        type: Pipe,
        args: [{
                name: 'menuFilter'
            }]
    }], null, null); })();

function RestMainComponentComponent_ngx_one_column_layout_0_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nb-menu-item", 6);
    i0.ɵɵelementContainerStart(2);
    i0.ɵɵelement(3, "nb-icon", 7);
    i0.ɵɵtext(4);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", item_r4.link);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", item_r4.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.transformTitle(item_r4.title), " ");
} }
function RestMainComponentComponent_ngx_one_column_layout_0_ng_container_5_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-menu-item", 6);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵelement(2, "nb-icon", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childItem_r10 = ctx.$implicit;
    const item_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", childItem_r10.link);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", item_r4.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.transformTitle(childItem_r10.title), " ");
} }
function RestMainComponentComponent_ngx_one_column_layout_0_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-menu-item", 6);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵelement(2, "nb-icon", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, RestMainComponentComponent_ngx_one_column_layout_0_ng_container_5_ng_template_2_ng_template_4_Template, 4, 3, "ng-template", 8);
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", item_r4.link);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", item_r4.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.transformTitle(item_r4.title), " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", item_r4.children);
} }
function RestMainComponentComponent_ngx_one_column_layout_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestMainComponentComponent_ngx_one_column_layout_0_ng_container_5_ng_container_1_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestMainComponentComponent_ngx_one_column_layout_0_ng_container_5_ng_template_2_Template, 5, 4, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const _r6 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r4.children)("ngIfElse", _r6);
} }
function RestMainComponentComponent_ngx_one_column_layout_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-one-column-layout");
    i0.ɵɵelementStart(1, "input", 2);
    i0.ɵɵlistener("ngModelChange", function RestMainComponentComponent_ngx_one_column_layout_0_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.searchText = $event; })("ngModelChange", function RestMainComponentComponent_ngx_one_column_layout_0_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onChange($event); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nb-menu", 3);
    i0.ɵɵpipe(4, "menuFilter");
    i0.ɵɵtemplate(5, RestMainComponentComponent_ngx_one_column_layout_0_ng_container_5_Template, 4, 2, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "router-outlet");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.searchText)("placeholder", i0.ɵɵpipeBind1(2, 4, "rest-list.searchPlaceholder"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", i0.ɵɵpipeBind2(4, 6, ctx_r0.menuItems, ctx_r0.searchText));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.menuItems);
} }
function RestMainComponentComponent_ng_template_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "h3", 12);
    i0.ɵɵtext(2, " Vous n'etes pas autoris\u00E9 \u00E0 vous connecter ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 13);
    i0.ɵɵlistener("click", function RestMainComponentComponent_ng_template_1_div_5_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.login(); });
    i0.ɵɵtext(4, " Retour ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestMainComponentComponent_ng_template_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "h5", 12);
    i0.ɵɵtext(2, "Veuillez patienter");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestMainComponentComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-layout");
    i0.ɵɵelementStart(1, "nb-layout-column");
    i0.ɵɵelementStart(2, "nb-card", 9);
    i0.ɵɵelement(3, "nb-card-header");
    i0.ɵɵelementStart(4, "nb-card-body");
    i0.ɵɵtemplate(5, RestMainComponentComponent_ng_template_1_div_5_Template, 5, 0, "div", 10);
    i0.ɵɵtemplate(6, RestMainComponentComponent_ng_template_1_div_6_Template, 3, 0, "div", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nbSpinner", ctx_r2.isPending);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r2.isPending);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.isPending);
} }
class RestMainComponentComponent {
    constructor(activatedRoute, serviceConfig, restLangService, router, serviceRest) {
        this.activatedRoute = activatedRoute;
        this.serviceConfig = serviceConfig;
        this.restLangService = restLangService;
        this.router = router;
        this.serviceRest = serviceRest;
        this.searchText = '';
        this.menuItems = [...this.serviceConfig.generateMenus()];
        this.pageLoad = false;
        this.isPending = true;
        this.title$ = this.activatedRoute.data.pipe(map((data) => data.title));
    }
    ngOnInit() {
        this.restLangService.setInitialAppLanguage();
        this.tcheckPermissions();
    }
    transformTitle(title) {
        return title
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(/\b\w/g, (letter) => letter.toUpperCase());
    }
    onChange(event) {
        this.searchText = event;
    }
    login() {
        this.router.navigateByUrl('/login');
    }
    tcheckPermissions() {
        const permissions = this.serviceConfig.permission;
        if (permissions.length > 0) {
            permissions.forEach((permission) => {
                switch (permission.type) {
                    case PERMISSION.CANLOGIN:
                        this.serviceRest
                            .getResources({
                            api: permission.fieldKey.api.substring(1),
                            queryParams: permission.fieldKey.queryParams
                                ? permission.fieldKey.queryParams
                                : {},
                        })
                            .subscribe((resp) => {
                            const val = {};
                            let isOk = true;
                            permission.fieldKey.fieldForNextQuery.forEach((item) => {
                                val[item] = _.get(resp, item);
                                if (!val[item]) {
                                    isOk = false;
                                }
                            });
                            if (!isOk) {
                                localStorage.removeItem(GLOBALS.AUTH_APP_TOKEN);
                                this.isPending = false;
                            }
                            else {
                                this.pageLoad = true;
                                this.isPending = false;
                            }
                        }, (err) => {
                            localStorage.removeItem(GLOBALS.AUTH_APP_TOKEN);
                            this.isPending = false;
                        });
                        break;
                    default:
                        break;
                }
            });
        }
    }
}
RestMainComponentComponent.ɵfac = function RestMainComponentComponent_Factory(t) { return new (t || RestMainComponentComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(RestAdminConfigService), i0.ɵɵdirectiveInject(RestLangService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(RestResourceService)); };
RestMainComponentComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestMainComponentComponent, selectors: [["ngx-rest-main-component"]], features: [i0.ɵɵProvidersFeature([MenuFilterPipe])], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["errorTryAgain", ""], ["type", "text", "nbInput", "", "fullWidth", "", "nbPrefixIcon", "search-outline", 3, "ngModel", "placeholder", "ngModelChange"], ["tag", "menu", 3, "items"], [4, "ngFor", "ngForOf"], ["subMenu", ""], ["routerLinkActive", "active", 3, "routerLink"], [3, "icon"], ["ngFor", "", 3, "ngForOf"], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "card-no-authorize", 3, "nbSpinner"], ["class", "p-2", 4, "ngIf"], [1, "p-2"], [1, "text-center"], ["nbButton", "", "type", "primary", 2, "display", "flex", "margin", "0 auto", 3, "click"]], template: function RestMainComponentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, RestMainComponentComponent_ngx_one_column_layout_0_Template, 7, 9, "ngx-one-column-layout", 0);
        i0.ɵɵtemplate(1, RestMainComponentComponent_ng_template_1_Template, 7, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", !ctx.isPending && ctx.pageLoad)("ngIfElse", _r1);
    } }, directives: [i8.NgIf, OneColumnLayoutComponent, i1$1.NbInputDirective, i1$4.DefaultValueAccessor, i1$4.NgControlStatus, i1$4.NgModel, i1$1.NbMenuComponent, i8.NgForOf, i1.RouterOutlet, i1.RouterLinkActive, i1.RouterLink, i1$1.NbIconComponent, i1$1.NbLayoutComponent, i1$1.NbLayoutColumnComponent, i1$1.NbCardComponent, i1$1.NbSpinnerDirective, i1$1.NbCardHeaderComponent, i1$1.NbCardBodyComponent, i1$1.NbButtonComponent], pipes: [i1$3.TranslatePipe, MenuFilterPipe], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;animation:fade 1s}.nb-theme-dark   [_nghost-%COMP%]     router-outlet+*{display:block;animation:fade 1s}.nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*{display:block;animation:fade 1s}.nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*{display:block;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}.card-no-authorize[_ngcontent-%COMP%]{display:block;width:100%;max-width:35rem;min-height:15rem;margin:0 auto}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestMainComponentComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-rest-main-component',
                styleUrls: ['./rest-main-component.component.scss'],
                providers: [MenuFilterPipe],
                template: `
    <ngx-one-column-layout *ngIf="!isPending && pageLoad; else errorTryAgain">
      <input
        type="text"
        [(ngModel)]="searchText"
        (ngModelChange)="onChange($event)"
        [placeholder]="'rest-list.searchPlaceholder' | translate"
        nbInput
        fullWidth
        nbPrefixIcon="search-outline"
      />

      <nb-menu tag="menu" [items]="menuItems | menuFilter : searchText">
        <ng-container *ngFor="let item of menuItems">
          <ng-container *ngIf="!item.children; else subMenu">
            <nb-menu-item [routerLink]="item.link" routerLinkActive="active">
              <ng-container>
                <nb-icon [icon]="item.icon"></nb-icon>
                {{ transformTitle(item.title) }}
              </ng-container>
            </nb-menu-item>
          </ng-container>
          <ng-template #subMenu>
            <nb-menu-item [routerLink]="item.link" routerLinkActive="active">
              <ng-container>
                <nb-icon [icon]="item.icon"></nb-icon>
                {{ transformTitle(item.title) }}
              </ng-container>
            </nb-menu-item>
            <ng-template let-childItem ngFor [ngForOf]="item.children">
              <nb-menu-item
                [routerLink]="childItem.link"
                routerLinkActive="active"
              >
                <ng-container>
                  <nb-icon [icon]="item.icon"></nb-icon>
                  {{ transformTitle(childItem.title) }}
                </ng-container>
              </nb-menu-item>
            </ng-template>
          </ng-template>
        </ng-container>
      </nb-menu>

      <router-outlet></router-outlet>
    </ngx-one-column-layout>

    <ng-template #errorTryAgain>
      <nb-layout>
        <nb-layout-column>
          <nb-card
            class="card-no-authorize"
            [nbSpinner]="isPending"
            nbSpinnerStatus="primary"
            nbSpinnerSize="large"
          >
            <nb-card-header></nb-card-header>
            <nb-card-body>
              <div class="p-2" *ngIf="!isPending">
                <h3 class="text-center">
                  Vous n'etes pas autorisé à vous connecter
                </h3>

                <!-- <nb-alert outline="info" role="alert">
                  <p class="alert-title">
                    <b>Vous serez redirigé vers la page de con</b>
                  </p>
                </nb-alert> -->
                <button
                  nbButton
                  type="primary"
                  (click)="login()"
                  style="display: flex; margin:0 auto"
                >
                  Retour
                </button>
              </div>
              <div *ngIf="isPending" class="p-2">
                <h5 class="text-center">Veuillez patienter</h5>
              </div>
            </nb-card-body>
          </nb-card>
        </nb-layout-column>
      </nb-layout>
    </ng-template>
  `,
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: RestAdminConfigService }, { type: RestLangService }, { type: i1.Router }, { type: RestResourceService }]; }, null); })();

// import { LocalStorageService } from '../local-storage/local-storage.service';
// import { AUTH_TOKEN } from '../auth/auth.models';
class HttpAuthInterceptor {
    constructor(authService, serviceToken) {
        this.authService = authService;
        this.serviceToken = serviceToken;
    }
    intercept(request, next) {
        const token = this.serviceToken.get();
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
        return next.handle(request);
    }
}
HttpAuthInterceptor.ɵfac = function HttpAuthInterceptor_Factory(t) { return new (t || HttpAuthInterceptor)(i0.ɵɵinject(i1$5.NbAuthService), i0.ɵɵinject(i1$5.NbTokenStorage)); };
HttpAuthInterceptor.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HttpAuthInterceptor, factory: HttpAuthInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HttpAuthInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1$5.NbAuthService }, { type: i1$5.NbTokenStorage }]; }, null); })();

class PaginationInterceptor {
    constructor() { }
    intercept(request, next) {
        return next.handle(request).pipe(map((event) => {
            if (event instanceof HttpResponse) {
                // console.log(event, "one");
                if (event.body.total) {
                    // console.log(event, "two");
                    let newHeaders = new HttpHeaders({
                        "X-Total-Count": String(event.body.total),
                    });
                    let newEvent = event.clone({ headers: newHeaders });
                    newEvent.headers.set("X-Total-Count", String(event.body.total));
                    // console.log(newEvent);
                    return newEvent;
                }
                return event;
            }
            return event;
        }));
    }
}
PaginationInterceptor.ɵfac = function PaginationInterceptor_Factory(t) { return new (t || PaginationInterceptor)(); };
PaginationInterceptor.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PaginationInterceptor, factory: PaginationInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationInterceptor, [{
        type: Injectable
    }], function () { return []; }, null); })();

/** Passes HttpErrorResponse to application-wide error handler */
class HttpErrorInterceptor {
    constructor(serviceNotification, router, restShare) {
        this.serviceNotification = serviceNotification;
        this.router = router;
        this.restShare = restShare;
        this.positions = NbGlobalPhysicalPosition;
    }
    intercept(request, next) {
        return next.handle(request).pipe(tap({
            error: (err) => {
                if (err instanceof HttpErrorResponse) {
                    switch (err.status) {
                        case 401:
                            localStorage.removeItem(GLOBALS.AUTH_APP_TOKEN);
                            setTimeout(() => {
                                this.router.navigate(['/login']);
                                this.restShare.setLoader(false);
                            }, 500);
                            break;
                        case 403:
                            this.serviceNotification.dangerToast(`msg-not-authorized`);
                            this.restShare.setLoader(false);
                            break;
                        case 404:
                            this.serviceNotification.dangerToast(`msg-not-found`);
                            this.restShare.setLoader(false);
                            break;
                        case 500:
                            this.serviceNotification.dangerToast(`msg-internal-error`);
                            this.restShare.setLoader(false);
                            break;
                        default:
                            this.restShare.setLoader(false);
                            break;
                    }
                }
            },
        }));
    }
}
HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) { return new (t || HttpErrorInterceptor)(i0.ɵɵinject(NotificationService), i0.ɵɵinject(i1.Router), i0.ɵɵinject(RestShareService)); };
HttpErrorInterceptor.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HttpErrorInterceptor, factory: HttpErrorInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HttpErrorInterceptor, [{
        type: Injectable
    }], function () { return [{ type: NotificationService }, { type: i1.Router }, { type: RestShareService }]; }, null); })();

function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}

const socialLinks = [
    {
        url: 'https://github.com/akveo/nebular',
        target: '_blank',
        icon: 'github',
    },
    {
        url: 'https://www.facebook.com/akveo/',
        target: '_blank',
        icon: 'facebook',
    },
    {
        url: 'https://twitter.com/akveo_inc',
        target: '_blank',
        icon: 'twitter',
    },
];
class NbSimpleRoleProvider extends NbRoleProvider {
    getRole() {
        // here you could provide any role based on any auth flow
        return of('guest');
    }
}
const NB_CORE_PROVIDERS = [
    ...NbAuthModule.forRoot({
        strategies: [
            NbDummyAuthStrategy.setup({
                name: 'email',
                delay: 3000,
            }),
        ],
        forms: {
            login: {
                socialLinks: socialLinks,
            },
            register: {
                socialLinks: socialLinks,
            },
        },
    }).providers,
    NbSecurityModule.forRoot({
        accessControl: {
            guest: {
                view: '*',
            },
            user: {
                parent: 'guest',
                create: '*',
                edit: '*',
                remove: '*',
            },
        },
    }).providers,
    {
        provide: NbRoleProvider,
        useClass: NbSimpleRoleProvider,
    },
    AnalyticsService,
    LayoutService,
    PlayerService,
    SeoService,
    StateService,
];
class CoreModule {
    constructor(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [...NB_CORE_PROVIDERS],
        };
    }
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(i0.ɵɵinject(CoreModule, 12)); };
CoreModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule], NbAuthModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoreModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [NbAuthModule],
                declarations: [],
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreModule, { imports: [CommonModule], exports: [NbAuthModule] }); })();

function LoginComponent_nb_alert_6_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(error_r9);
} }
function LoginComponent_nb_alert_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-alert", 19);
    i0.ɵɵelementStart(1, "p", 20);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3, "Oh snap!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ul", 21);
    i0.ɵɵtemplate(5, LoginComponent_nb_alert_6_li_5_Template, 2, 1, "li", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r0.errors);
} }
function LoginComponent_nb_alert_7_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", message_r11, " ");
} }
function LoginComponent_nb_alert_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-alert", 24);
    i0.ɵɵelementStart(1, "p", 20);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3, "Hooray!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ul", 21);
    i0.ɵɵtemplate(5, LoginComponent_nb_alert_7_li_5_Template, 2, 1, "li", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function LoginComponent_ng_container_16_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1, " Email is required! ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_ng_container_16_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1, " Email should be the real one! ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LoginComponent_ng_container_16_p_1_Template, 2, 0, "p", 25);
    i0.ɵɵtemplate(2, LoginComponent_ng_container_16_p_2_Template, 2, 0, "p", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(15);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r3.errors == null ? null : _r3.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r3.errors == null ? null : _r3.errors.pattern);
} }
function LoginComponent_ng_container_27_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1, " Password is required! ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_ng_container_27_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" Password should contain from ", ctx_r15.getConfigValue("forms.validation.password.minLength"), " to ", ctx_r15.getConfigValue("forms.validation.password.maxLength"), " characters ");
} }
function LoginComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LoginComponent_ng_container_27_p_1_Template, 2, 0, "p", 25);
    i0.ɵɵtemplate(2, LoginComponent_ng_container_27_p_2_Template, 2, 2, "p", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(26);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r5.errors == null ? null : _r5.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (_r5.errors == null ? null : _r5.errors.minlength) || (_r5.errors == null ? null : _r5.errors.maxlength));
} }
function LoginComponent_nb_checkbox_29_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-checkbox", 27);
    i0.ɵɵlistener("ngModelChange", function LoginComponent_nb_checkbox_29_Template_nb_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.user.rememberMe = $event; });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r7.user.rememberMe);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, "login.rememberMe"));
} }
class LoginComponent extends NbLoginComponent {
}
LoginComponent.ɵfac = /*@__PURE__*/ function () { let ɵLoginComponent_BaseFactory; return function LoginComponent_Factory(t) { return (ɵLoginComponent_BaseFactory || (ɵLoginComponent_BaseFactory = i0.ɵɵgetInheritedFactory(LoginComponent)))(t || LoginComponent); }; }();
LoginComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["ngx-login"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 33, vars: 36, consts: [["id", "title", 1, "title"], [1, "sub-title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["nbInput", "", "fullWidth", "", "name", "login", "id", "input-email", "pattern", ".+@.+\\..+", "placeholder", "Email address", "fieldSize", "large", "autofocus", "", 3, "ngModel", "status", "required", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], [1, "label-with-link"], ["for", "input-password", 1, "label"], ["routerLink", "../request-password", 1, "forgot-password", "caption-2"], ["nbInput", "", "fullWidth", "", "name", "password", "type", "password", "id", "input-password", "placeholder", "Password", "fieldSize", "large", 3, "ngModel", "status", "required", "minlength", "maxlength", "ngModelChange"], ["password", "ngModel"], [1, "form-control-group", "accept-group"], ["name", "rememberMe", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nbButton", "", "fullWidth", "", "status", "primary", "size", "large", 3, "disabled"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], ["name", "rememberMe", 3, "ngModel", "ngModelChange"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p", 1);
        i0.ɵɵtext(4);
        i0.ɵɵpipe(5, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, LoginComponent_nb_alert_6_Template, 6, 1, "nb-alert", 2);
        i0.ɵɵtemplate(7, LoginComponent_nb_alert_7_Template, 6, 1, "nb-alert", 3);
        i0.ɵɵelementStart(8, "form", 4, 5);
        i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() { return ctx.login(); });
        i0.ɵɵelementStart(10, "div", 6);
        i0.ɵɵelementStart(11, "label", 7);
        i0.ɵɵtext(12);
        i0.ɵɵpipe(13, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "input", 8, 9);
        i0.ɵɵlistener("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.user.login = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(16, LoginComponent_ng_container_16_Template, 3, 2, "ng-container", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 6);
        i0.ɵɵelementStart(18, "span", 11);
        i0.ɵɵelementStart(19, "label", 12);
        i0.ɵɵtext(20);
        i0.ɵɵpipe(21, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "a", 13);
        i0.ɵɵtext(23);
        i0.ɵɵpipe(24, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "input", 14, 15);
        i0.ɵɵlistener("ngModelChange", function LoginComponent_Template_input_ngModelChange_25_listener($event) { return ctx.user.password = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(27, LoginComponent_ng_container_27_Template, 3, 2, "ng-container", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "div", 16);
        i0.ɵɵtemplate(29, LoginComponent_nb_checkbox_29_Template, 3, 4, "nb-checkbox", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "button", 18);
        i0.ɵɵtext(31);
        i0.ɵɵpipe(32, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(9);
        const _r3 = i0.ɵɵreference(15);
        const _r5 = i0.ɵɵreference(26);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 24, "login.main"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(5, 26, "login.labelMessage"), ".");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(13, 28, "login.email"), ":");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.user.login)("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.email.required"));
        i0.ɵɵattribute("aria-invalid", _r3.invalid && _r3.touched ? true : null);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", _r3.invalid && _r3.touched);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(21, 30, "login.password"), ":");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(24, 32, "login.forgetPassword"), "?");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.user.password)("status", _r5.dirty ? _r5.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"));
        i0.ɵɵattribute("aria-invalid", _r5.invalid && _r5.touched ? true : null);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", _r5.invalid && _r5.touched);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.rememberMe);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("btn-pulse", ctx.submitted);
        i0.ɵɵproperty("disabled", ctx.submitted || !_r2.valid);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(32, 34, "login.logIn"), " ");
    } }, directives: [i8.NgIf, i1$4.ɵNgNoValidate, i1$4.NgControlStatusGroup, i1$4.NgForm, i1$1.NbInputDirective, i1$4.DefaultValueAccessor, i1$4.PatternValidator, i1$4.NgControlStatus, i1$4.NgModel, i1$4.RequiredValidator, i1.RouterLinkWithHref, i1$4.MinLengthValidator, i1$4.MaxLengthValidator, i1$1.NbButtonComponent, i1$1.NbAlertComponent, i8.NgForOf, i1$1.NbCheckboxComponent], pipes: [i1$3.TranslatePipe], styles: [".navigation .link nb-icon{display:none!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
            }]
    }], null, null); })();

class isAuthGuard {
    constructor(restAdminConfig, router) {
        this.restAdminConfig = restAdminConfig;
        this.router = router;
    }
    canActivate() {
        const authJson = localStorage.getItem(GLOBALS.AUTH_APP_TOKEN);
        if (!authJson)
            return true;
        else {
            this.router.navigateByUrl(this.restAdminConfig.restAuthParams.redirectRouteAfterLogin);
            return false;
        }
    }
}
isAuthGuard.ɵfac = function isAuthGuard_Factory(t) { return new (t || isAuthGuard)(i0.ɵɵinject(RestAdminConfigService), i0.ɵɵinject(i1.Router)); };
isAuthGuard.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: isAuthGuard, factory: isAuthGuard.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(isAuthGuard, [{
        type: Injectable
    }], function () { return [{ type: RestAdminConfigService }, { type: i1.Router }]; }, null); })();

// serviceRestConfig.restPathFileTranslate
function createTranslateHttpLoader(http) {
    // return new MultiTranslateHttpLoader(http, [
    //   { prefix: './assets/i18n/', suffix: '.json' },//host app i18n assets
    //   { prefix: './lib/assets/i18n/', suffix: '.json' }, //your lib assets
    //   { prefix: './rest/lib/assets/i18n/', suffix: '.json' }, //your lib assets
    // ])
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class RestAdminModule {
    constructor(router, compiler, serviceRestAdmin, iconLibraries, restLangService) {
        this.router = router;
        this.compiler = compiler;
        this.serviceRestAdmin = serviceRestAdmin;
        this.iconLibraries = iconLibraries;
        this.restLangService = restLangService;
        this.iconLibraries.registerFontPack('fas', {
            packClass: 'fas',
            iconClassPrefix: 'fa',
        });
        this.iconLibraries.registerFontPack('far', {
            packClass: 'far',
            iconClassPrefix: 'fa',
        });
        this.iconLibraries.registerFontPack('fab', {
            packClass: 'fab',
            iconClassPrefix: 'fa',
        });
        this.iconLibraries.registerFontPack('fad', {
            packClass: 'fa-duotone',
            iconClassPrefix: 'fa',
        });
        this.restLangService.setInitialAppLanguage();
        const tempModule = NgModule({
            imports: [
                RouterModule.forChild([
                    {
                        path: 'login',
                        component: NbAuthComponent,
                        canActivate: [isAuthGuard],
                        children: [
                            {
                                path: '',
                                component: LoginComponent,
                            },
                        ],
                    },
                    {
                        path: 'admin',
                        component: RestMainComponentComponent,
                        canActivate: [AuthGuard],
                        children: [...this.serviceRestAdmin.generateRoutes()],
                    },
                    { path: '', redirectTo: '/login', pathMatch: 'full' },
                    // { path: '**', redirectTo: '/' },
                ]),
                NbAuthModule.forRoot({
                    strategies: [
                        NbPasswordAuthStrategy.setup({
                            name: this.serviceRestAdmin.restAuthParams.strategy,
                            baseEndpoint: this.serviceRestAdmin.restAuthParams.baseEndpoint,
                            login: {
                                method: 'post',
                                endpoint: this.serviceRestAdmin.restAuthParams.loginEndPoint,
                                redirect: {
                                    success: this.serviceRestAdmin.restAuthParams
                                        .redirectRouteAfterLogin,
                                    failure: null,
                                },
                            },
                            token: {
                                class: NbAuthSimpleToken,
                                key: this.serviceRestAdmin.restAuthParams
                                    .tokenLocationInResponse,
                            },
                        }),
                    ],
                    forms: {
                        login: {
                            redirectDelay: 500,
                            strategy: this.serviceRestAdmin.restAuthParams.strategy,
                            showMessages: {
                                success: true,
                                error: true,
                            },
                        },
                    },
                }),
            ],
        })(class {
        });
        this.compiler.compileModuleAsync(tempModule).then((module) => {
            const routes = {
                path: '',
                loadChildren() {
                    return module;
                },
            };
            this.router.resetConfig([routes, ...this.router.config]);
        });
    }
    static forRoot(restConfig) {
        return {
            ngModule: RestAdminModule,
            providers: [
                RestAdminConfigService,
                { provide: 'restConfig', useValue: restConfig },
            ],
        };
    }
}
RestAdminModule.ɵfac = function RestAdminModule_Factory(t) { return new (t || RestAdminModule)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i0.Compiler), i0.ɵɵinject(RestAdminConfigService), i0.ɵɵinject(i1$1.NbIconLibraries), i0.ɵɵinject(RestLangService)); };
RestAdminModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RestAdminModule });
RestAdminModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: PaginationInterceptor,
            multi: true,
        },
        AuthGuard,
        isAuthGuard,
        RestResourceService,
        RestAdminConfigService,
        RestExportService,
        RestLangService,
        NotificationService,
        RestShareService,
    ], imports: [[
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            RouterModule,
            ReactiveFormsModule,
            FormsModule,
            HttpClientModule,
            HttpClientJsonpModule,
            NbActionsModule,
            NbButtonModule,
            NbCardModule,
            NbCheckboxModule,
            NbInputModule,
            NbTagModule,
            NbRadioModule,
            NbUserModule,
            NbTreeGridModule,
            NbAlertModule,
            NbAutocompleteModule,
            Ng2SmartTableModule,
            FileUploadModule,
            CngHtmlCompilerModule,
            NbSpinnerModule,
            NbTabsetModule,
            NbPopoverModule,
            ImageCropperModule,
            NbToggleModule,
            NbListModule,
            NbTooltipModule,
            NbContextMenuModule,
            TranslateModule,
            NgxDropzoneModule,
            NgxPermissionsModule.forRoot(),
            NbLayoutModule,
            NbSelectModule,
            NbSidebarModule,
            NbMenuModule.forRoot(),
            NbDatepickerModule.forRoot(),
            NbDialogModule.forRoot(),
            NbWindowModule.forRoot(),
            NbToastrModule.forRoot(),
            NbTimepickerModule.forRoot(),
            CoreModule.forRoot(),
            ThemeModule.forRoot(),
            NbIconModule,
            GoogleMapsModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: createTranslateHttpLoader,
                    deps: [HttpClient],
                },
            }),
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestAdminModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    RestResourceListComponent,
                    RestResourceAddComponent,
                    RestResourceDeleteComponent,
                    RestMainComponentComponent,
                    RestResourceEditorFieldsComponent,
                    RestResourceListFieldComponent,
                    RestResourceDetailComponent,
                    UploadFileComponent,
                    SelectAllCheckboxRenderComponent,
                    FsIconCComponent,
                    LoginComponent,
                    AttributeDirective,
                    MenuFilterPipe,
                    GmapsComponent,
                ],
                exports: [
                    RestResourceListComponent,
                    RestResourceAddComponent,
                    RestResourceDeleteComponent,
                    RestMainComponentComponent,
                    RestResourceEditorFieldsComponent,
                    RestResourceListFieldComponent,
                    RestResourceDetailComponent,
                    UploadFileComponent,
                    LoginComponent,
                    GmapsComponent,
                ],
                entryComponents: [
                    RestResourceListComponent,
                    RestResourceListFieldComponent,
                    RestResourceAddComponent,
                    FsIconCComponent,
                    SelectAllCheckboxRenderComponent,
                    RestResourceDeleteComponent,
                    RestMainComponentComponent,
                    RestResourceEditorFieldsComponent,
                    RestResourceDetailComponent,
                    UploadFileComponent,
                    LoginComponent,
                    GmapsComponent,
                ],
                imports: [
                    CommonModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    RouterModule,
                    ReactiveFormsModule,
                    FormsModule,
                    HttpClientModule,
                    HttpClientJsonpModule,
                    NbActionsModule,
                    NbButtonModule,
                    NbCardModule,
                    NbCheckboxModule,
                    NbInputModule,
                    NbTagModule,
                    NbRadioModule,
                    NbUserModule,
                    NbTreeGridModule,
                    NbAlertModule,
                    NbAutocompleteModule,
                    Ng2SmartTableModule,
                    FileUploadModule,
                    CngHtmlCompilerModule,
                    NbSpinnerModule,
                    NbTabsetModule,
                    NbPopoverModule,
                    ImageCropperModule,
                    NbToggleModule,
                    NbListModule,
                    NbTooltipModule,
                    NbContextMenuModule,
                    TranslateModule,
                    NgxDropzoneModule,
                    NgxPermissionsModule.forRoot(),
                    NbLayoutModule,
                    NbSelectModule,
                    NbSidebarModule,
                    NbMenuModule.forRoot(),
                    NbDatepickerModule.forRoot(),
                    NbDialogModule.forRoot(),
                    NbWindowModule.forRoot(),
                    NbToastrModule.forRoot(),
                    NbTimepickerModule.forRoot(),
                    CoreModule.forRoot(),
                    ThemeModule.forRoot(),
                    NbIconModule,
                    GoogleMapsModule,
                    TranslateModule.forRoot({
                        loader: {
                            provide: TranslateLoader,
                            useFactory: createTranslateHttpLoader,
                            deps: [HttpClient],
                        },
                    }),
                ],
                providers: [
                    { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true },
                    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: PaginationInterceptor,
                        multi: true,
                    },
                    AuthGuard,
                    isAuthGuard,
                    RestResourceService,
                    RestAdminConfigService,
                    RestExportService,
                    RestLangService,
                    NotificationService,
                    RestShareService,
                ],
            }]
    }], function () { return [{ type: i1.Router }, { type: i0.Compiler }, { type: RestAdminConfigService }, { type: i1$1.NbIconLibraries }, { type: RestLangService }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RestAdminModule, { declarations: [RestResourceListComponent,
        RestResourceAddComponent,
        RestResourceDeleteComponent,
        RestMainComponentComponent,
        RestResourceEditorFieldsComponent,
        RestResourceListFieldComponent,
        RestResourceDetailComponent,
        UploadFileComponent,
        SelectAllCheckboxRenderComponent,
        FsIconCComponent,
        LoginComponent,
        AttributeDirective,
        MenuFilterPipe,
        GmapsComponent], imports: [CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        NbActionsModule,
        NbButtonModule,
        NbCardModule,
        NbCheckboxModule,
        NbInputModule,
        NbTagModule,
        NbRadioModule,
        NbUserModule,
        NbTreeGridModule,
        NbAlertModule,
        NbAutocompleteModule,
        Ng2SmartTableModule,
        FileUploadModule,
        CngHtmlCompilerModule,
        NbSpinnerModule,
        NbTabsetModule,
        NbPopoverModule,
        ImageCropperModule,
        NbToggleModule,
        NbListModule,
        NbTooltipModule,
        NbContextMenuModule,
        TranslateModule,
        NgxDropzoneModule, i8$1.NgxPermissionsModule, NbLayoutModule,
        NbSelectModule,
        NbSidebarModule, i1$1.NbMenuModule, i1$1.NbDatepickerModule, i1$1.NbDialogModule, i1$1.NbWindowModule, i1$1.NbToastrModule, i1$1.NbTimepickerModule, CoreModule, ThemeModule, NbIconModule,
        GoogleMapsModule, i1$3.TranslateModule], exports: [RestResourceListComponent,
        RestResourceAddComponent,
        RestResourceDeleteComponent,
        RestMainComponentComponent,
        RestResourceEditorFieldsComponent,
        RestResourceListFieldComponent,
        RestResourceDetailComponent,
        UploadFileComponent,
        LoginComponent,
        GmapsComponent] }); })();

class RestResource {
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

/*
 * Public API Surface of rest-admin
 */
// export * from './lib/assets/i18n/*';
// export * from './lib/auth/auth-routing.module';

/**
 * Generated bundle index. Do not edit.
 */

export { ALPHABET, AnalyticsService, AuthGuard, CapitalizePipe, CoreModule, DIRECTION, FILTER_OPERATORS, FooterComponent, FsIconCComponent, GmapsComponent, HeaderComponent, LayoutService, LoginComponent, NB_CORE_PROVIDERS, NbSimpleRoleProvider, NumberWithCommasPipe, OneColumnLayoutComponent, PERMISSION, PlayerService, PluralPipe, QUERY_PARAMS_TYPE, REST_FIELD_TYPES, RestAdminConfigService, RestAdminModule, RestExportService, RestLangService, RestMainComponentComponent, RestResource, RestResourceAddComponent, RestResourceDeleteComponent, RestResourceDetailComponent, RestResourceEditorFieldsComponent, RestResourceListComponent, RestResourceListFieldComponent, RestResourceService, RoundPipe, STRATEGY_AUTH, SearchInputComponent, SeoService, StateService, TYPE_GROUP, TYPE_METHOD_REQUEST, ThemeModule, ThreeColumnsLayoutComponent, TimingPipe, TinyMCEComponent, TwoColumnsLayoutComponent, UploadFileComponent, createTranslateHttpLoader };
//# sourceMappingURL=foris-master-ngx-rest-admin.js.map
