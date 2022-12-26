import * as i1$4 from '@ngx-translate/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import * as i1$5 from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as i1$3 from '@angular/common/http';
import { HttpHeaders, HttpResponse, HttpErrorResponse, HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import * as i0 from '@angular/core';
import { Injectable, PLATFORM_ID, Inject, Component, Input, ViewChild, EventEmitter, Output, Pipe, NgModule, Optional, SkipSelf } from '@angular/core';
import * as i8 from '@angular/common';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import * as i1$1 from '@nebular/theme';
import { NbLayoutDirection, NB_DOCUMENT, NbGlobalPhysicalPosition, DEFAULT_THEME as DEFAULT_THEME$1, COSMIC_THEME as COSMIC_THEME$1, CORPORATE_THEME as CORPORATE_THEME$1, DARK_THEME as DARK_THEME$1, NbLayoutModule, NbMenuModule, NbUserModule, NbActionsModule, NbSearchModule, NbSidebarModule, NbContextMenuModule, NbButtonModule, NbSelectModule, NbIconModule, NbToggleModule, NbThemeModule, NbSidebarService, NbCardModule, NbCheckboxModule, NbInputModule, NbTagModule, NbRadioModule, NbTreeGridModule, NbAutocompleteModule, NbSpinnerModule, NbTabsetModule, NbPopoverModule, NbListModule, NbTooltipModule, NbDatepickerModule, NbDialogModule, NbWindowModule, NbToastrModule, NbTimepickerModule, NbAlertModule } from '@nebular/theme';
import * as i9 from 'ng2-smart-table';
import { DefaultEditor, LocalDataSource, ServerDataSource, Ng2SmartTableModule } from 'ng2-smart-table';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import * as i9$1 from '@nebular/security';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { Subject, BehaviorSubject, of } from 'rxjs';
import { shareReplay, delay, debounceTime, filter, takeWhile, takeUntil, map, tap } from 'rxjs/operators';
import * as i1 from '@angular/router';
import { NavigationEnd, RouterModule } from '@angular/router';
import * as i1$2 from '@nebular/auth';
import { NbAuthModule, NbDummyAuthStrategy, NbLoginComponent, NbAuthComponent, NbPasswordAuthStrategy, NbAuthSimpleToken } from '@nebular/auth';
import * as i5 from 'ngx-image-cropper';
import { base64ToFile, ImageCropperModule } from 'ngx-image-cropper';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as JSZip from 'jszip';
import * as i2 from '@iplab/ngx-file-upload';
import { FileUploadControl, FileUploadValidators, FileUploadModule } from '@iplab/ngx-file-upload';
import * as _ from 'lodash';
import * as i3 from '@codehint-ng/html-compiler';
import { CngHtmlCompilerModule } from '@codehint-ng/html-compiler';
import { Validator } from 'ngx-input-validator';
import * as moment from 'moment';
import * as i7 from 'ngx-dropzone';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import * as i5$1 from 'ngx-permissions';
import { NgxPermissionsModule } from 'ngx-permissions';

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
LayoutService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: LayoutService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LayoutService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: LayoutService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: LayoutService, decorators: [{
            type: Injectable
        }] });

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
AnalyticsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AnalyticsService, deps: [{ token: i8.Location }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
AnalyticsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AnalyticsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AnalyticsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i8.Location }, { type: i1.Router }]; } });

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
PlayerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PlayerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PlayerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PlayerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PlayerService, decorators: [{
            type: Injectable
        }] });

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
StateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StateService, deps: [{ token: i1$1.NbLayoutDirectionService }], target: i0.ɵɵFactoryTarget.Injectable });
StateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StateService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StateService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1$1.NbLayoutDirectionService }]; } });

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
SeoService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SeoService, deps: [{ token: i1.Router }, { token: NB_DOCUMENT }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
SeoService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SeoService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SeoService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });

class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        const authJson = localStorage.getItem(GLOBALS.AUTH_APP_TOKEN);
        const authApp = authJson ? JSON.parse(authJson) : {};
        if (authApp && (authApp === null || authApp === void 0 ? void 0 : authApp.value))
            return true;
        else {
            this.router.navigateByUrl("/auth/login");
            return false;
        }
    }
}
AuthGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AuthGuard, deps: [{ token: i1$2.NbAuthService }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
AuthGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AuthGuard });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1$2.NbAuthService }, { type: i1.Router }]; } });

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
    REST_FIELD_TYPES[REST_FIELD_TYPES["BOOLEAN"] = 3] = "BOOLEAN";
    REST_FIELD_TYPES[REST_FIELD_TYPES["DATE"] = 4] = "DATE";
    REST_FIELD_TYPES[REST_FIELD_TYPES["DATETIME"] = 5] = "DATETIME";
    REST_FIELD_TYPES[REST_FIELD_TYPES["TIME"] = 6] = "TIME";
    REST_FIELD_TYPES[REST_FIELD_TYPES["IMAGE"] = 7] = "IMAGE";
    REST_FIELD_TYPES[REST_FIELD_TYPES["PDF"] = 8] = "PDF";
    REST_FIELD_TYPES[REST_FIELD_TYPES["FILE"] = 9] = "FILE";
    REST_FIELD_TYPES[REST_FIELD_TYPES["BELONG_TO"] = 10] = "BELONG_TO";
    REST_FIELD_TYPES[REST_FIELD_TYPES["HAS_ONE"] = 11] = "HAS_ONE";
    REST_FIELD_TYPES[REST_FIELD_TYPES["HAS_MANY"] = 12] = "HAS_MANY";
    REST_FIELD_TYPES[REST_FIELD_TYPES["BELONG_TO_MANY"] = 13] = "BELONG_TO_MANY";
    REST_FIELD_TYPES[REST_FIELD_TYPES["MORPH_MANY"] = 14] = "MORPH_MANY";
    REST_FIELD_TYPES[REST_FIELD_TYPES["MORPH_ONE"] = 15] = "MORPH_ONE";
    REST_FIELD_TYPES[REST_FIELD_TYPES["MORPH"] = 16] = "MORPH";
    REST_FIELD_TYPES[REST_FIELD_TYPES["JSON"] = 17] = "JSON";
    REST_FIELD_TYPES[REST_FIELD_TYPES["MAP"] = 18] = "MAP";
    REST_FIELD_TYPES[REST_FIELD_TYPES["ENUM"] = 19] = "ENUM";
    REST_FIELD_TYPES[REST_FIELD_TYPES["LINK"] = 20] = "LINK";
})(REST_FIELD_TYPES || (REST_FIELD_TYPES = {}));
var PERMISSION;
(function (PERMISSION) {
    PERMISSION["C"] = "create";
    PERMISSION["R"] = "read";
    PERMISSION["U"] = "update";
    PERMISSION["D"] = "delete";
    PERMISSION["A"] = "all";
})(PERMISSION || (PERMISSION = {}));

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
RestExportService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestExportService, deps: [{ token: i1$3.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
RestExportService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestExportService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestExportService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: i1$3.HttpClient }]; } });

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
UploadFileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: UploadFileComponent, deps: [{ token: i1$1.NbDialogRef }, { token: i1$1.NbToastrService }], target: i0.ɵɵFactoryTarget.Component });
UploadFileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: UploadFileComponent, selector: "ngx-upload-file", inputs: { datas: "datas", title: "title" }, ngImport: i0, template: "<nb-card accent=\"danger\" style=\"width: 370px\">\n  <nb-card-header>{{ title }}</nb-card-header>\n\n  <nb-card-body>\n    <file-upload [control]=\"control\"></file-upload>\n  </nb-card-body>\n\n  <nb-card-footer style=\"display: flex; justify-content: end\">\n    <div class=\"buttons-row\">\n      <button\n        nbButton\n        (click)=\"close()\"\n        status=\"danger\"\n        style=\"margin-right: 10px\"\n      >\n        Annuler\n      </button>\n\n      <button nbButton (click)=\"addDatas()\" status=\"success\">\n        Charger le fichier\n      </button>\n    </div>\n  </nb-card-footer>\n</nb-card>\n", styles: [""], components: [{ type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i2.FileUploadComponent, selector: "file-upload:not([simple])", inputs: ["control", "animation", "multiple"] }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i1$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: UploadFileComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ngx-upload-file",
                    templateUrl: "./upload-file.component.html",
                    styleUrls: ["./upload-file.component.scss"],
                }]
        }], ctorParameters: function () { return [{ type: i1$1.NbDialogRef }, { type: i1$1.NbToastrService }]; }, propDecorators: { datas: [{
                type: Input
            }], title: [{
                type: Input
            }] } });

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
RestLangService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestLangService, deps: [{ token: i1$4.TranslateService }, { token: RestAdminConfigService }], target: i0.ɵɵFactoryTarget.Injectable });
RestLangService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestLangService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestLangService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: i1$4.TranslateService }, { type: RestAdminConfigService }]; } });

class FsIconCComponent {
    isDir() {
        return this.place == "header-place";
    }
}
FsIconCComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FsIconCComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FsIconCComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: FsIconCComponent, selector: "ngx-fs-icon", inputs: { expanded: "expanded", place: "place" }, ngImport: i0, template: `
    <nb-tree-grid-row-toggle
      [expanded]="expanded"
      *ngIf="isDir(); else fileIcon"
    >
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon> </ng-template>
  `, isInline: true, components: [{ type: i1$1.NbTreeGridRowToggleComponent, selector: "nb-tree-grid-row-toggle", inputs: ["expanded"] }], directives: [{ type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FsIconCComponent, decorators: [{
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
        }], propDecorators: { expanded: [{
                type: Input
            }], place: [{
                type: Input
            }] } });

class RestResourceListFieldComponent {
    constructor(dataSourceBuilder, langService) {
        this.dataSourceBuilder = dataSourceBuilder;
        this.langService = langService;
        this.customColumn = "name";
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
                            place: "header-place",
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
                            place: "header-place",
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
        if (this.restField.i18n == true) {
            this.restField.metaData.addConfig.jsonConfig.jsonFields.map((field) => {
                if (field == this.langService.selected) {
                    if (this.val[0] == "{")
                        this._jsonValue = JSON.parse(this.val)[field];
                    else if (typeof this.val !== "string")
                        this._jsonValue = this.val[field];
                    else
                        this._jsonValue = this.val;
                }
            });
        }
        else {
            this._jsonValue = this.val;
        }
        if (typeof this.val == "object")
            return JSON.stringify(this._jsonValue);
        else
            return this._jsonValue;
    }
}
RestResourceListFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceListFieldComponent, deps: [{ token: i1$1.NbTreeGridDataSourceBuilder }, { token: RestLangService }], target: i0.ɵɵFactoryTarget.Component });
RestResourceListFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestResourceListFieldComponent, selector: "ngx-rest-resource-list-field", inputs: { value: "value", rowData: "rowData" }, ngImport: i0, template: "<div\n  *ngIf=\"\n    restField.type == REST_FIELD_TYPES.TEXT ||\n    restField.type == REST_FIELD_TYPES.STRING ||\n    restField.type == REST_FIELD_TYPES.NUMBER ||\n    restField.type == REST_FIELD_TYPES.ENUM\n  \"\n>\n  <ng-container *ngIf=\"!restField.template\"> {{ val }}</ng-container>\n\n  <ng-container *ngIf=\"restField.template\">\n    <cng-html-compiler [template]=\"restField.template\" [componentClass]=\"val\">\n    </cng-html-compiler>\n  </ng-container>\n</div>\n\n<div *ngIf=\"restField.type == REST_FIELD_TYPES.BOOLEAN\" class=\"text-center\">\n  <ng-container *ngIf=\"!restField.template\">\n    <nb-checkbox [checked]=\"val\" [disabled]=\"true\"></nb-checkbox>\n  </ng-container>\n\n  <ng-container *ngIf=\"restField.template\">\n    <cng-html-compiler [template]=\"restField.template\" [componentClass]=\"val\">\n    </cng-html-compiler>\n  </ng-container>\n</div>\n\n<div *ngIf=\"restField.type == REST_FIELD_TYPES.IMAGE\" class=\"text-center\">\n  <ng-container *ngIf=\"!restField.template\">\n    <img class=\"rest-img\" [src]=\"val\" alt=\"\" [style]=\"style\"\n  /></ng-container>\n  <ng-container *ngIf=\"restField.template\">\n    <cng-html-compiler [template]=\"restField.template\" [componentClass]=\"val\">\n    </cng-html-compiler>\n  </ng-container>\n</div>\n\n<div *ngIf=\"restField.type == REST_FIELD_TYPES.HAS_ONE\">\n  <ng-container *ngIf=\"!restField.template\"> {{ val }}</ng-container>\n  <ng-container *ngIf=\"restField.template\">\n    <cng-html-compiler [template]=\"restField.template\" [componentClass]=\"val\">\n    </cng-html-compiler>\n  </ng-container>\n</div>\n\n<div *ngIf=\"restField.type == REST_FIELD_TYPES.BELONG_TO\">\n  <ng-container *ngIf=\"!restField.template\"> {{ val }}</ng-container>\n  <ng-container *ngIf=\"restField.template\">\n    <cng-html-compiler [template]=\"restField.template\" [componentClass]=\"val\">\n    </cng-html-compiler>\n  </ng-container>\n</div>\n\n<div *ngIf=\"restField.type == REST_FIELD_TYPES.MORPH\">\n  <ng-container *ngIf=\"!restField.template\"> {{ val }}</ng-container>\n  <ng-container *ngIf=\"restField.template\">\n    <cng-html-compiler [template]=\"restField.template\" [componentClass]=\"val\">\n    </cng-html-compiler>\n  </ng-container>\n</div>\n\n<div *ngIf=\"restField.type == REST_FIELD_TYPES.JSON\">\n  <ng-container *ngIf=\"!restField.template\"> {{ jsonValue }}</ng-container>\n  <ng-container *ngIf=\"restField.template\">\n    <cng-html-compiler [template]=\"restField.template\" [componentClass]=\"jsonValue\">\n    </cng-html-compiler>\n  </ng-container>\n</div>\n\n<div *ngIf=\"restField.type == REST_FIELD_TYPES.DATE\">\n  <ng-container *ngIf=\"!restField.template\"> {{ val }}</ng-container>\n  <ng-container *ngIf=\"restField.template\">\n    <cng-html-compiler [template]=\"restField.template\" [componentClass]=\"val\">\n    </cng-html-compiler>\n  </ng-container>\n</div>\n\n<div *ngIf=\"restField.type == REST_FIELD_TYPES.HAS_MANY\">\n  <table [nbTreeGrid]=\"dataSource\">\n    <tr nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"></tr>\n\n    <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n      <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n        <ngx-fs-icon\n          [expanded]=\"row.expanded\"\n          [place]=\"row.data.place\"\n        ></ngx-fs-icon>\n        <ng-container\n          *ngIf=\"!restField?.metaData?.listConfig?.restManyResources.template\"\n        >\n          {{ row.data[customColumn] }}\n        </ng-container>\n\n        <ng-container\n          *ngIf=\"restField?.metaData?.listConfig?.restManyResources.template\"\n        >\n          <span *ngIf=\"row.data.place\">{{ restField.name }}</span>\n          <ng-container *ngIf=\"!row.data.place\">\n            <cng-html-compiler\n              [template]=\"\n                restField.metaData.listConfig.restManyResources.template\n              \"\n              [componentClass]=\"row.data.item\"\n            >\n            </cng-html-compiler>\n          </ng-container>\n        </ng-container>\n      </td>\n    </ng-container>\n  </table>\n</div>\n\n<div *ngIf=\"restField.type == REST_FIELD_TYPES.BELONG_TO_MANY\">\n  <table [nbTreeGrid]=\"dataSource\">\n    <tr nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"></tr>\n\n    <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n      <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n        <ngx-fs-icon\n          [expanded]=\"row.expanded\"\n          [place]=\"row.data.place\"\n        ></ngx-fs-icon>\n        <ng-container\n          *ngIf=\"\n            !restField.metaData.listConfig.restBelongToManyResources.template\n          \"\n        >\n          {{ row.data[customColumn] }}\n        </ng-container>\n\n        <ng-container\n          *ngIf=\"\n            restField.metaData.listConfig.restBelongToManyResources.template\n          \"\n        >\n          <span *ngIf=\"row.data.place\">{{ restField.name }}</span>\n          <ng-container *ngIf=\"!row.data.place\">\n            <cng-html-compiler\n              [template]=\"\n                restField.metaData.listConfig.restBelongToManyResources.template\n              \"\n              [componentClass]=\"row.data.item\"\n            >\n            </cng-html-compiler>\n          </ng-container>\n        </ng-container>\n      </td>\n    </ng-container>\n  </table>\n</div>\n", styles: ["@use \"@nebular/theme/styles/themes/default\";.rest-img{max-width:100px}.nb-theme-default :host button[nbTreeGridRowToggle]{background:transparent;border:none;padding:0}.nb-theme-default :host .search-label{display:block}.nb-theme-default :host .search-input{margin-bottom:1rem}.nb-theme-default :host .nb-column-name{width:100%}.nb-theme-default :host ::ng-deep .row-toggle-button{color:#222b45}.nb-theme-default :host .nb-tree-grid-header-cell,.nb-theme-default :host .nb-tree-grid-header-cell button{text-transform:capitalize}@media screen and (min-width: 400px){.nb-theme-default :host .nb-column-name,.nb-theme-default :host .nb-column-size{width:50%}}@media screen and (min-width: 500px){.nb-theme-default :host .nb-column-name,.nb-theme-default :host .nb-column-size,.nb-theme-default :host .nb-column-kind{width:33.333%}}@media screen and (min-width: 600px){.nb-theme-default :host .nb-column-name{width:31%}.nb-theme-default :host .nb-column-size,.nb-theme-default :host .nb-column-kind,.nb-theme-default :host .nb-column-items{width:23%}}.nb-theme-dark :host button[nbTreeGridRowToggle]{background:transparent;border:none;padding:0}.nb-theme-dark :host .search-label{display:block}.nb-theme-dark :host .search-input{margin-bottom:1rem}.nb-theme-dark :host .nb-column-name{width:100%}.nb-theme-dark :host ::ng-deep .row-toggle-button{color:#fff}.nb-theme-dark :host .nb-tree-grid-header-cell,.nb-theme-dark :host .nb-tree-grid-header-cell button{text-transform:capitalize}@media screen and (min-width: 400px){.nb-theme-dark :host .nb-column-name,.nb-theme-dark :host .nb-column-size{width:50%}}@media screen and (min-width: 500px){.nb-theme-dark :host .nb-column-name,.nb-theme-dark :host .nb-column-size,.nb-theme-dark :host .nb-column-kind{width:33.333%}}@media screen and (min-width: 600px){.nb-theme-dark :host .nb-column-name{width:31%}.nb-theme-dark :host .nb-column-size,.nb-theme-dark :host .nb-column-kind,.nb-theme-dark :host .nb-column-items{width:23%}}.nb-theme-cosmic :host button[nbTreeGridRowToggle]{background:transparent;border:none;padding:0}.nb-theme-cosmic :host .search-label{display:block}.nb-theme-cosmic :host .search-input{margin-bottom:1rem}.nb-theme-cosmic :host .nb-column-name{width:100%}.nb-theme-cosmic :host ::ng-deep .row-toggle-button{color:#fff}.nb-theme-cosmic :host .nb-tree-grid-header-cell,.nb-theme-cosmic :host .nb-tree-grid-header-cell button{text-transform:capitalize}@media screen and (min-width: 400px){.nb-theme-cosmic :host .nb-column-name,.nb-theme-cosmic :host .nb-column-size{width:50%}}@media screen and (min-width: 500px){.nb-theme-cosmic :host .nb-column-name,.nb-theme-cosmic :host .nb-column-size,.nb-theme-cosmic :host .nb-column-kind{width:33.333%}}@media screen and (min-width: 600px){.nb-theme-cosmic :host .nb-column-name{width:31%}.nb-theme-cosmic :host .nb-column-size,.nb-theme-cosmic :host .nb-column-kind,.nb-theme-cosmic :host .nb-column-items{width:23%}}.nb-theme-corporate :host button[nbTreeGridRowToggle]{background:transparent;border:none;padding:0}.nb-theme-corporate :host .search-label{display:block}.nb-theme-corporate :host .search-input{margin-bottom:1rem}.nb-theme-corporate :host .nb-column-name{width:100%}.nb-theme-corporate :host ::ng-deep .row-toggle-button{color:#222b45}.nb-theme-corporate :host .nb-tree-grid-header-cell,.nb-theme-corporate :host .nb-tree-grid-header-cell button{text-transform:capitalize}@media screen and (min-width: 400px){.nb-theme-corporate :host .nb-column-name,.nb-theme-corporate :host .nb-column-size{width:50%}}@media screen and (min-width: 500px){.nb-theme-corporate :host .nb-column-name,.nb-theme-corporate :host .nb-column-size,.nb-theme-corporate :host .nb-column-kind{width:33.333%}}@media screen and (min-width: 600px){.nb-theme-corporate :host .nb-column-name{width:31%}.nb-theme-corporate :host .nb-column-size,.nb-theme-corporate :host .nb-column-kind,.nb-theme-corporate :host .nb-column-items{width:23%}}\n"], components: [{ type: i3.CngHtmlCompilerComponent, selector: "cng-html-compiler", inputs: ["template", "componentClass", "imports"] }, { type: i1$1.NbCheckboxComponent, selector: "nb-checkbox", inputs: ["status", "checked", "disabled", "indeterminate"], outputs: ["checkedChange"] }, { type: i1$1.NbTreeGridComponent, selector: "table[nbTreeGrid]", inputs: ["levelPadding", "nbTreeGrid", "equalColumnsWidth"] }, { type: i1$1.NbTreeGridRowComponent, selector: "tr[nbTreeGridRow]", inputs: ["doubleClickDelay", "clickToToggle"] }, { type: FsIconCComponent, selector: "ngx-fs-icon", inputs: ["expanded", "place"] }], directives: [{ type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1$1.NbTreeGridRowDefDirective, selector: "[nbTreeGridRowDef]", inputs: ["nbTreeGridRowDefColumns"] }, { type: i1$1.NbTreeGridColumnDefDirective, selector: "[nbTreeGridColumnDef]", inputs: ["nbTreeGridColumnDef", "hideOn", "showOn"] }, { type: i1$1.NbTreeGridCellDefDirective, selector: "[nbTreeGridCellDef]" }, { type: i1$1.NbTreeGridCellDirective, selector: "td[nbTreeGridCell]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceListFieldComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ngx-rest-resource-list-field",
                    templateUrl: "./rest.resource-list-field.component.html",
                    styleUrls: ["./rest.resource-list-field.component.scss"],
                }]
        }], ctorParameters: function () { return [{ type: i1$1.NbTreeGridDataSourceBuilder }, { type: RestLangService }]; }, propDecorators: { value: [{
                type: Input
            }], rowData: [{
                type: Input
            }] } });

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
RestResourceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceService, deps: [{ token: i1$3.HttpClient }, { token: RestAdminConfigService }], target: i0.ɵɵFactoryTarget.Injectable });
RestResourceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: i1$3.HttpClient }, { type: RestAdminConfigService }]; } });

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
RestResourceEditorFieldsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceEditorFieldsComponent, deps: [{ token: RestAdminConfigService }, { token: RestResourceService }], target: i0.ɵɵFactoryTarget.Component });
RestResourceEditorFieldsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestResourceEditorFieldsComponent, selector: "input-editor", viewQueries: [{ propertyName: "input", first: true, predicate: ["autoInput"], descendants: true }, { propertyName: "inputBelongTo", first: true, predicate: ["autoInputBelongToMany"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"field.inForm == true\">\n  <!-- Input type string -->\n  <input\n    type=\"text\"\n    *ngIf=\"field.type == REST_FIELD_TYPES.STRING\"\n    [(ngModel)]=\"cell.newValue\"\n    [name]=\"cell.getId()\"\n    [placeholder]=\"cell.getTitle()\"\n    [disabled]=\"!cell.isEditable()\"\n    (click)=\"onClick.emit($event)\"\n    (keydown.enter)=\"onEdited.emit($event)\"\n    (keydown.esc)=\"onStopEditing.emit()\"\n    class=\"form-control ng-valid ng-touched ng-dirty\"\n    fullWidth\n  />\n\n  <!-- Input type text -->\n  <textarea\n    [(ngModel)]=\"cell.newValue\"\n    [name]=\"cell.getId()\"\n    [placeholder]=\"cell.getTitle()\"\n    [disabled]=\"!cell.isEditable()\"\n    (click)=\"onClick.emit($event)\"\n    (keydown.enter)=\"onEdited.emit($event)\"\n    (keydown.esc)=\"onStopEditing.emit()\"\n    class=\"form-control ng-valid ng-touched ng-dirty\"\n    *ngIf=\"field.type == REST_FIELD_TYPES.TEXT\"\n    fullWidth\n  ></textarea>\n\n  <!-- Input type number  -->\n  <input\n    [(ngModel)]=\"cell.newValue\"\n    [name]=\"cell.getId()\"\n    [placeholder]=\"cell.getTitle()\"\n    [disabled]=\"!cell.isEditable()\"\n    (click)=\"onClick.emit($event)\"\n    (keydown.enter)=\"onEdited.emit($event)\"\n    (keydown.esc)=\"onStopEditing.emit()\"\n    class=\"form-control ng-valid ng-touched ng-dirty\"\n    type=\"number\"\n    fullWidth\n    *ngIf=\"field.type == REST_FIELD_TYPES.NUMBER\"\n  />\n\n  <!-- Input type date -->\n  <input\n    *ngIf=\"field.type == REST_FIELD_TYPES.DATE\"\n    [nbDatepicker]=\"formpicker\"\n    [(ngModel)]=\"cell.newValue\"\n    [name]=\"cell.getId()\"\n    [placeholder]=\"cell.getTitle()\"\n    [disabled]=\"!cell.isEditable()\"\n    (click)=\"onClick.emit($event)\"\n    (keydown.enter)=\"onEdited.emit($event)\"\n    (keydown.esc)=\"onStopEditing.emit()\"\n    class=\"form-control ng-valid ng-touched ng-dirty\"\n    fullWidth\n  />\n  <nb-datepicker #formpicker></nb-datepicker>\n\n  <!-- Input type dateTime -->\n  <ng-container *ngIf=\"field.type == REST_FIELD_TYPES.DATETIME\">\n    <input\n      nbInput\n      [nbDatepicker]=\"dateTimePicker\"\n      [(ngModel)]=\"cell.newValue\"\n      [name]=\"cell.getId()\"\n      [placeholder]=\"cell.getTitle()\"\n      [disabled]=\"!cell.isEditable()\"\n      (click)=\"onClick.emit($event)\"\n      (keydown.enter)=\"onEdited.emit($event)\"\n      (keydown.esc)=\"onStopEditing.emit()\"\n      class=\"form-control ng-valid ng-touched ng-dirty\"\n      fullWidth\n    />\n    <nb-date-timepicker withSeconds #dateTimePicker></nb-date-timepicker>\n  </ng-container>\n\n  <!-- Input type time -->\n  <ng-container *ngIf=\"field.type == REST_FIELD_TYPES.TIME\">\n    <input\n      [nbTimepicker]=\"timepicker\"\n      twelveHoursFormat]\n      nbInput\n      [(ngModel)]=\"cell.newValue\"\n      [name]=\"cell.getId()\"\n      [placeholder]=\"cell.getTitle()\"\n      [disabled]=\"!cell.isEditable()\"\n      (click)=\"onClick.emit($event)\"\n      (keydown.enter)=\"onEdited.emit($event)\"\n      (keydown.esc)=\"onStopEditing.emit()\"\n      class=\"form-control ng-valid ng-touched ng-dirty\"\n      fullWidth\n    />\n    <nb-timepicker #timepicker></nb-timepicker>\n  </ng-container>\n\n  <!-- Input type enum -->\n  <nb-select\n    [(ngModel)]=\"cell.newValue\"\n    [name]=\"cell.getId()\"\n    (change)=\"onClick.emit($event)\"\n    class=\"input-space\"\n    *ngIf=\"field.type == REST_FIELD_TYPES.ENUM\"\n    nbInput\n  >\n    <nb-option\n      *ngFor=\"let option of field.metaData.addConfig.enumOptions\"\n      [value]=\"option.value\"\n      >{{ option.label }}</nb-option\n    >\n  </nb-select>\n\n  <!-- Input type Boolean -->\n  <div\n    style=\"text-align: center\"\n    *ngIf=\"field.type == REST_FIELD_TYPES.BOOLEAN\"\n  >\n    <nb-toggle [name]=\"cell.getId()\" [(ngModel)]=\"cell.newValue\"></nb-toggle>\n  </div>\n\n  <ng-container *ngIf=\"field.type == REST_FIELD_TYPES.FILE\">\n    <file-upload\n      [(ngModel)]=\"cell.newValue\"\n      class=\"input-space\"\n      [name]=\"field.label\"\n      style=\"min-width: 300px; max-width: 300px\"\n    ></file-upload>\n  </ng-container>\n\n  <ng-container *ngIf=\"field.type == REST_FIELD_TYPES.PDF\">\n    <file-upload\n      [(ngModel)]=\"cell.newValue\"\n      class=\"input-space\"\n      [name]=\"field.label\"\n      style=\"min-width: 300px; max-width: 300px\"\n    ></file-upload>\n    <object width=\"300px\" height=\"300px\" [data]=\"cell.newValue[0]\"></object>\n  </ng-container>\n\n  <ng-container *ngIf=\"field.type == REST_FIELD_TYPES.IMAGE\">\n    <!-- [(ngModel)]=\"cell.newValue\"\n    class=\"file-image\"\n    [name]=\"field.label\" -->\n    <file-upload\n      [control]=\"control\"\n    >\n      <ng-template\n        let-isFileDragDropAvailable=\"isFileDragDropAvailable\"\n        #placeholder\n      >\n        <div *ngIf=\"control.size === 0\">\n          <svg viewBox=\"0 0 512 512\" class=\"icon\">\n            <path\n              d=\"M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z\"\n            ></path>\n          </svg>\n\n          <div class=\"upload-text\">\n            <ng-container\n              *ngIf=\"isFileDragDropAvailable; else isNotDragDropAvailable\"\n            >\n              <b>Drag and drop</b> files<br />\n              or click here\n            </ng-container>\n            <ng-template #isNotDragDropAvailable>\n              <b>Click here</b> to<br />\n              choose a files\n            </ng-template>\n          </div>\n        </div>\n      </ng-template>\n\n      <ng-template let-i=\"index\" let-file=\"file\" let-control=\"control\" #item>\n        <div class=\"overlay\">\n          <svg\n            viewBox=\"0 0 448 512\"\n            class=\"delete-button\"\n            (click)=\"control.removeFile(file)\"\n          >\n            <path\n              d=\"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z\"\n            ></path>\n          </svg>\n          <img *ngIf=\"control.valid\" [src]=\"uploadedFile | async\" />\n        </div>\n      </ng-template>\n    </file-upload>\n\n    <button\n      nbButton\n      status=\"primary\"\n      *ngIf=\"!isCrop && controlCroper != null\"\n      (click)=\"activeCroper()\"\n    >\n      CROP\n    </button>\n\n    <ng-container *ngIf=\"isCrop\">\n      <image-cropper\n        [imageFile]=\"controlCroper\"\n        [maintainAspectRatio]=\"true\"\n        [aspectRatio]=\"4 / 3\"\n        format=\"png\"\n        (imageCropped)=\"imageCropped($event)\"\n      ></image-cropper>\n\n      <button nbButton status=\"primary\" (click)=\"saveCroper()\">\n        SAVE CHANGE\n      </button>\n    </ng-container>\n\n    <!-- <img [src]=\"croppedImage\" /> -->\n  </ng-container>\n\n  <!-- Input type  -->\n  <ng-container *ngIf=\"field.type == REST_FIELD_TYPES.HAS_MANY\">\n    <nb-tag-list (tagRemove)=\"onTagRemove($event)\" class=\"input-space\">\n      <nb-tag\n        *ngFor=\"let tree of cell.newValue\"\n        [text]=\"tree\"\n        removable\n      ></nb-tag>\n      <input type=\"text\" nbTagInput (tagAdd)=\"onTagAdd($event)\" fullWidth />\n    </nb-tag-list>\n  </ng-container>\n\n  <ng-container *ngIf=\"field.type == REST_FIELD_TYPES.BELONG_TO\">\n    <input\n      #autoInput\n      nbInput\n      type=\"text\"\n      (input)=\"onChange()\"\n      placeholder=\"Enter value\"\n      [nbAutocomplete]=\"auto\"\n      [(ngModel)]=\"cell.newValue\"\n    />\n\n    <nb-autocomplete #auto (selectedChange)=\"onSelectionChange($event)\">\n      <nb-option\n        *ngFor=\"let option of filteredOptions$ | async\"\n        [value]=\"\n          option[\n            field?.metaData?.addConfig.belongToOptions?.value\n              ? field?.metaData?.addConfig?.belongToOptions?.value\n              : 'id'\n          ]\n        \"\n      >\n        {{\n          option[\n            field.metaData.addConfig.belongToOptions.template\n              ? field.metaData.addConfig.belongToOptions.template\n              : field.metaData.addConfig.belongToOptions.filterKeys[0]\n          ]\n        }}\n      </nb-option>\n    </nb-autocomplete>\n  </ng-container>\n\n  <ng-container *ngIf=\"field.type == REST_FIELD_TYPES.BELONG_TO_MANY\">\n    <div>\n      <nb-tag-list (tagRemove)=\"onTagRemoveBelong($event)\" class=\"input-space\">\n        <nb-tag\n          *ngFor=\"let tree of cell.newValue\"\n          [text]=\"\n            tree[\n              field.metaData.addConfig.belongToManyOptions.template\n                ? field.metaData.addConfig.belongToManyOptions.template\n                : field.metaData.addConfig.belongToManyOptions.filterKeys[0]\n            ]\n          \"\n          removable\n        ></nb-tag>\n        <input\n          type=\"text\"\n          nbTagInput\n          #autoInputBelongToMany\n          [nbAutocomplete]=\"autoBelonToMany\"\n          (tagAdd)=\"onTagAdd($event)\"\n          fullWidth\n        />\n\n        <nb-autocomplete #autoBelonToMany (selectedChange)=\"onChoose($event)\">\n          <nb-option\n            *ngFor=\"let option of filteredOptions$ | async\"\n            [value]=\"option\"\n          >\n            {{\n              option[\n                field.metaData.addConfig.belongToManyOptions.template\n                  ? field.metaData.addConfig.belongToManyOptions.template\n                  : field.metaData.addConfig.belongToManyOptions.filterKeys[0]\n              ]\n            }}\n          </nb-option>\n        </nb-autocomplete>\n      </nb-tag-list>\n    </div>\n  </ng-container>\n</ng-container>\n", styles: [".icon{height:35px;width:35px;line-height:30px;text-align:center;border:1px solid #eaeaea;border-radius:4px;float:left;margin-right:20px}.upload-text{overflow:hidden;width:auto;font-size:14px}svg{fill:#909293;height:20px}.overlay{position:relative}.delete-button{background-color:#fafafa;position:absolute;top:-6px;right:-6px;cursor:pointer;z-index:10;width:40px;height:40px;text-align:center;font-size:20px;line-height:40px}.file-image{min-width:300px;max-width:300px}.file-image img{width:100%}nb-toggle{text-align:center}\n"], components: [{ type: i1$1.NbDatepickerComponent, selector: "nb-datepicker", inputs: ["date"], outputs: ["dateChange"] }, { type: i1$1.NbDateTimePickerComponent, selector: "nb-date-timepicker", inputs: ["twelveHoursFormat", "withSeconds", "singleColumn", "step", "title", "applyButtonText", "currentTimeButtonText"] }, { type: i1$1.NbTimePickerComponent, selector: "nb-timepicker", inputs: ["showFooter", "timeFormat", "twelveHoursFormat", "withSeconds", "singleColumn", "step", "date", "hoursText", "minutesText", "secondsText", "ampmText", "applyButtonText", "currentTimeButtonText"], outputs: ["onSelectTime"], exportAs: ["nbTimepicker"] }, { type: i1$1.NbSelectComponent, selector: "nb-select", inputs: ["size", "status", "shape", "appearance", "placeholder", "optionsOverlayOffset", "scrollStrategy", "outline", "filled", "hero", "disabled", "fullWidth", "compareWith", "selected", "multiple", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }, { type: i1$1.NbOptionComponent, selector: "nb-option", inputs: ["disabled", "value"], outputs: ["selectionChange"] }, { type: i1$1.NbToggleComponent, selector: "nb-toggle", inputs: ["status", "labelPosition", "checked", "disabled"], outputs: ["checkedChange"] }, { type: i2.FileUploadComponent, selector: "file-upload:not([simple])", inputs: ["control", "animation", "multiple"] }, { type: i1$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }, { type: i5.ImageCropperComponent, selector: "image-cropper", inputs: ["imageChangedEvent", "imageURL", "imageBase64", "imageFile", "format", "transform", "maintainAspectRatio", "aspectRatio", "resetCropOnAspectRatioChange", "resizeToWidth", "resizeToHeight", "cropperMinWidth", "cropperMinHeight", "cropperMaxHeight", "cropperMaxWidth", "cropperStaticWidth", "cropperStaticHeight", "canvasRotation", "initialStepSize", "roundCropper", "onlyScaleDown", "imageQuality", "autoCrop", "backgroundColor", "containWithinAspectRatio", "hideResizeSquares", "allowMoveImage", "cropper", "alignImage", "disabled", "hidden"], outputs: ["imageCropped", "startCropImage", "imageLoaded", "cropperReady", "loadImageFailed", "transformChange"] }, { type: i1$1.NbTagListComponent, selector: "nb-tag-list", inputs: ["size", "tabIndex", "role", "multiple"], outputs: ["tagRemove"], exportAs: ["nbTagList"] }, { type: i1$1.NbTagComponent, selector: "nb-tag", inputs: ["appearance", "status", "size", "role", "selected", "removable", "text"], outputs: ["remove", "selectedChange"], exportAs: ["nbTag"] }, { type: i1$1.NbAutocompleteComponent, selector: "nb-autocomplete", inputs: ["size", "activeFirst", "handleDisplayFn", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }], directives: [{ type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1$5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1$5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$5.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i1$5.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { type: i1$1.NbDatepickerDirective, selector: "input[nbDatepicker]", inputs: ["nbDatepicker"] }, { type: i1$1.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1$1.NbTimePickerDirective, selector: "input[nbTimepicker]", inputs: ["overlayOffset", "nbTimepicker"] }, { type: i8.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1$1.NbTagInputDirective, selector: "input[nbTagInput]", inputs: ["separatorKeys"], outputs: ["tagAdd"], exportAs: ["nbTagInput"] }, { type: i1$1.NbAutocompleteDirective, selector: "input[nbAutocomplete]", inputs: ["overlayOffset", "scrollStrategy", "nbAutocomplete", "focusInputOnValueChange", "customOverlayHost"] }], pipes: { "async": i8.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceEditorFieldsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "input-editor",
                    templateUrl: "./rest-resource-editor-fields.component.html",
                    styleUrls: ["./rest-resource-editor-fields.component.scss"],
                }]
        }], ctorParameters: function () { return [{ type: RestAdminConfigService }, { type: RestResourceService }]; }, propDecorators: { input: [{
                type: ViewChild,
                args: ["autoInput"]
            }], inputBelongTo: [{
                type: ViewChild,
                args: ["autoInputBelongToMany"]
            }] } });

class RestResourceAddComponent {
    constructor(fb, serviceRest, serviceRestAdminConfig, activatedRoute, nbMenuService, exportService, dialogService, router) {
        this.fb = fb;
        this.serviceRest = serviceRest;
        this.serviceRestAdminConfig = serviceRestAdminConfig;
        this.activatedRoute = activatedRoute;
        this.nbMenuService = nbMenuService;
        this.exportService = exportService;
        this.dialogService = dialogService;
        this.router = router;
        this.formState = {
            btnLabel: "Modifier",
            isAdd: false,
            idEntity: null,
            onReady: false,
        };
        // End test
        //BELONG_TO FIELD
        this.options = {};
        this.allFilterContains = {};
        this.belongToMany = {};
        //json editor
        this.jsonEditorOptions = {};
        this.multiple = false;
        this.controlCroper = {};
        this.imageChangedEvent = "";
        this.croppedImage = {};
        this.isCrop = {};
        this.controlsImage = {};
        // End test
        //Import
        this.items = [{ title: "Download template" }, { title: "Import" }];
        this.alphabelt = ALPHABET;
        //Image
        this.filesUpload = {};
        this.urlsImage = {};
        //Morph_field
        this.morphFields = {};
        activatedRoute.params.subscribe((params) => {
            this.ressourceName =
                this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path.split("-")[0];
            this.resource = this.serviceRestAdminConfig.getSpecificResource(this.ressourceName);
            if (Object.keys(params).length != 0) {
                this.ressourceName =
                    this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 2].path.split("-")[0];
                this.resource = this.serviceRestAdminConfig.getSpecificResource(this.ressourceName);
                this.serviceRest
                    .getOneResource({
                    api: this.resource.editConfig.api,
                    queryParams: this.resource.editConfig.queryParams,
                }, params.id)
                    .subscribe((response) => {
                    this.initForm(response);
                    this.formState = {
                        btnLabel: "Modifier",
                        isAdd: false,
                        idEntity: response.id,
                        onReady: true,
                    };
                });
            }
            else {
                this.initForm(null);
                this.formState = {
                    btnLabel: "Ajouter",
                    isAdd: true,
                    onReady: true,
                };
            }
        });
    }
    ngOnInit() {
        this.nbMenuService
            .onItemClick()
            .pipe(filter(({ tag }) => tag === "my-context-add"), map(({ item: { title } }) => title))
            .subscribe((title) => {
            switch (title) {
                case "Download template":
                    this.downloadTemplate();
                    break;
                case "Import":
                    this.importData();
                    break;
                default:
                    console.log("pass");
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
    }
    initForm(datas) {
        if (datas != null) {
            this.controls = this.resource.fields.reduce((cumul, elt) => {
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
                                this.options[elt.name] = response;
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
                                this.options[elt.name] = response;
                                this.allFilterContains[elt.name] = of(this.options[elt.name]);
                            });
                            this.belongToMany[elt.name] = new Set(datas[elt.name]);
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [datas[elt.name]] });
                        case REST_FIELD_TYPES.LINK:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [datas[elt.name], Validator.url] });
                        case REST_FIELD_TYPES.JSON:
                            const jsonFiels = [];
                            elt.metaData.addConfig.jsonConfig.jsonFields.map((field) => {
                                jsonFiels.push({
                                    label: field,
                                    value: datas[elt.name][0] == "{"
                                        ? JSON.parse(datas[elt.name])[field]
                                        : typeof datas[elt.name] !== "string"
                                            ? datas[elt.name][field]
                                            : datas[elt.name],
                                });
                            });
                            this.jsonEditorOptions[elt.name] = jsonFiels;
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: datas[elt.name] });
                        case REST_FIELD_TYPES.MORPH_ONE:
                            this.morphFields[elt.name] = {
                                type: datas[elt.name].type,
                                id: datas[elt.name].id,
                            };
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [null] });
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
                var _a, _b;
                if (elt.inForm) {
                    switch (elt.type) {
                        case REST_FIELD_TYPES.FILE:
                        case REST_FIELD_TYPES.PDF:
                        case REST_FIELD_TYPES.IMAGE:
                            this.filesUpload[elt.name] = [];
                            this.urlsImage[elt.name] = "";
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
                                    this.options[elt.name] = response;
                                    this.allFilterContains[elt.name] = of(this.options[elt.name]);
                                });
                            }
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [""] });
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
                                this.options[elt.name] = response;
                                this.allFilterContains[elt.name] = of(this.options[elt.name]);
                            });
                            this.belongToMany[elt.name] = new Set();
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [] });
                        case REST_FIELD_TYPES.LINK:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: ["", Validator.url] });
                        case REST_FIELD_TYPES.JSON:
                            const jsonFiels = [];
                            (_b = (_a = elt === null || elt === void 0 ? void 0 : elt.metaData) === null || _a === void 0 ? void 0 : _a.addConfig) === null || _b === void 0 ? void 0 : _b.jsonConfig.jsonFields.map((field) => {
                                jsonFiels.push({ label: field, value: "" });
                            });
                            this.jsonEditorOptions[elt.name] = jsonFiels;
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [null] });
                        default:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [""] });
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
        input.nativeElement.value = "";
    }
    // Autocomplete
    filter(value, field) {
        if (typeof value == "string") {
            if (!this.options[field.name]) {
                return [];
            }
            else
                return this.options[field.name].filter((optionValue) => {
                    return field.metaData.addConfig.belongToOptions.filterKeys.some((elt) => `${optionValue[elt].toLowerCase()}`.includes(`${"value".toLowerCase()}`));
                });
        }
    }
    getFilteredOptions(value, field) {
        if (field.type == REST_FIELD_TYPES.BELONG_TO)
            return of(value).pipe(map((filterString) => this.filter(filterString, field)));
        else if (field.type == REST_FIELD_TYPES.MORPH)
            return of(value).pipe(map((filterString) => this.filterMany(filterString, field, "morphConfig")));
        return of(value).pipe(map((filterString) => this.filterMany(filterString, field)));
    }
    onSelectionChange(event, field) {
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
                    [field.metaData.addConfig.belongToManyOptions.resourceIdName]: "",
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
        this.inputBelongToMany.nativeElement.value = "";
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
    filterMany(value, field, options = "belongToManyOptions") {
        if (typeof value == "string") {
            return this.options[field.name].filter((optionValue) => {
                return field.metaData.addConfig[options].filterKeys.some((elt) => `${optionValue[elt].toLowerCase()}`.includes(`${value.toLowerCase()}`));
            });
        }
    }
    //End BelongToMany
    onCreate() {
        let datas;
        const formData = this.form.value;
        const _body = this.resource.addConfig.body;
        if (this.resource.hasFile) {
            datas = new FormData();
            Object.keys(formData).forEach((key, index) => {
                const search = this.resource.fields.find((elt) => elt.name == key);
                if (search) {
                    switch (search.type) {
                        case REST_FIELD_TYPES.DATE:
                            datas.append(key, `${moment(formData[key]).format("YYYY-MM-DD")}`);
                            break;
                        case REST_FIELD_TYPES.JSON:
                            let jsonFields = {};
                            if (typeof this.jsonEditorOptions[key] == "object") {
                                this.jsonEditorOptions[key].map((elt) => {
                                    jsonFields = Object.assign(Object.assign({}, jsonFields), { [elt.label]: elt.value });
                                });
                            }
                            datas.append(key, JSON.stringify(jsonFields));
                            break;
                        case REST_FIELD_TYPES.BOOLEAN:
                            // console.log(formData[key]);
                            // if (formData[key]) {
                            //   datas.append(key, 1);
                            // } else datas.append(key, 0);
                            datas.append(key, formData[key]);
                            break;
                        default:
                            datas.append(key, formData[key]);
                            break;
                    }
                }
            });
            Object.keys(_body).map((key) => {
                datas.append(key, _body[key]);
            });
        }
        else {
            datas = this.form.value;
            datas = Object.assign(Object.assign({}, datas), _body);
        }
        console.log(datas);
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
            .addResources(this.resource.addConfig, datas)
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
                            this.router.navigate([
                                `/admin/${this.ressourceName}-detail`,
                                response.id,
                            ]);
                            this.reset();
                        }
                    });
                });
            }
            else {
                this.router.navigate([
                    `/admin/${this.ressourceName}-detail`,
                    response.id,
                ]);
                this.reset();
            }
        });
    }
    onEdit() {
        let datas;
        const formData = this.form.value;
        const _body = this.resource.editConfig.body;
        if (this.resource.hasFile) {
            datas = new FormData();
            Object.keys(formData).forEach((key) => {
                const search = this.resource.fields.find((elt) => elt.name == key);
                if (search) {
                    switch (search.type) {
                        case REST_FIELD_TYPES.DATE:
                            datas.append(key, `${moment(formData[key]).format("YYYY-MM-DD")}`);
                            break;
                        case REST_FIELD_TYPES.JSON:
                            let jsonFields = {};
                            if (typeof this.jsonEditorOptions[key] == "object") {
                                this.jsonEditorOptions[key].map((elt) => {
                                    jsonFields = Object.assign(Object.assign({}, jsonFields), { [elt.label]: elt.value });
                                });
                            }
                            datas.append(key, JSON.stringify(jsonFields));
                            break;
                        case REST_FIELD_TYPES.IMAGE:
                            if (this.filesUpload[key].length > 0)
                                datas.append(key, formData[key]);
                            break;
                        default:
                            datas.append(key, formData[key]);
                            break;
                    }
                }
            });
            Object.keys(_body).map((key, index) => {
                datas.append(key, _body[key]);
            });
        }
        else {
            datas = this.form.value;
            datas = Object.assign(Object.assign({}, datas), _body);
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
                            [item["saveRelatedIdName"]]: item[item["saveRelatedIdName"]],
                            [item["saveResourceIdName"]]: response.id,
                        };
                        proms.push(this.serviceRest
                            .addResources(restResource.addConfig, data)
                            .toPromise());
                    }
                    Promise.all(proms).then((res) => {
                        if (index == saveBelongTomany.length - 1) {
                            this.router.navigate([
                                `/admin/${this.ressourceName}-detail`,
                                this.formState.idEntity,
                            ]);
                            this.reset();
                        }
                    });
                });
            }
            else {
                this.router.navigate([
                    `/admin/${this.ressourceName}-detail`,
                    this.formState.idEntity,
                ]);
                this.reset();
            }
        });
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
        this.exportService.exportToExcel(edata, "rest_file_template_data");
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
                type: "custom",
                filter: false,
                addable: true,
                valuePrepareFunction: (cell, row) => ({
                    restField: elt,
                    cell,
                    row,
                }),
                editor: {
                    type: "custom",
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
            label: "",
            value: "",
            add: true,
        });
    }
    removeJSONField(event, index) {
        this.jsonEditorOptions[event.name].splice(index, 1);
    }
    onMorphSelectField(event, field) {
        const ressources = this.serviceRestAdminConfig.getSpecificResource(event);
        const fieldConfig = this.resource.fields.find((elt) => elt.name == field);
        // console.log(ressources);
        // console.log(fieldConfig);
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
}
RestResourceAddComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceAddComponent, deps: [{ token: i1$5.FormBuilder }, { token: RestResourceService }, { token: RestAdminConfigService }, { token: i1.ActivatedRoute }, { token: i1$1.NbMenuService }, { token: RestExportService }, { token: i1$1.NbDialogService }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
RestResourceAddComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestResourceAddComponent, selector: "ngx-rest-resource-add", inputs: { resource: "resource" }, viewQueries: [{ propertyName: "belongTo", first: true, predicate: ["belongTo"], descendants: true }, { propertyName: "inputBelongToMany", first: true, predicate: ["autoBelongToMany"], descendants: true }], ngImport: i0, template: "<nb-card>\n  <!-- <nb-card-header class=\"row\">\n    <div class=\"col-9\" *ngIf=\"formState.isAdd\">\n      {{ resource.addConfig.title }}\n    </div>\n\n    <div class=\"col-3\">\n      <button\n        nbButton\n        status=\"primary\"\n        [nbContextMenu]=\"items\"\n        nbContextMenuTag=\"my-context-menu\"\n      >\n        {{ \"rest-add.import\" | translate }}\n      </button>\n    </div>\n  </nb-card-header> -->\n\n  <nb-card-header *ngIf=\"formState.onReady && !formState.isAdd\"\n    >{{ resource.editConfig.title }}\n  </nb-card-header>\n\n  <nb-card-header *ngIf=\"formState.onReady && formState.isAdd\"\n    >{{ resource.addConfig.title }}\n  </nb-card-header>\n\n  <nb-card-body>\n    <nb-tabset>\n      <nb-tab tabTitle=\"Ajout simple\">\n        <form [formGroup]=\"form\" class=\"row\" *ngIf=\"formState.onReady\">\n          <div\n            *ngFor=\"\n              let field of resource.fields;\n              trackBy: trackByFn;\n              let i = index\n            \"\n            class=\"col-12\"\n          >\n            <ng-container *ngIf=\"field.inForm\">\n              <!-- Input type string  -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"\n                  field.type == REST_FIELD_TYPES.STRING ||\n                  field.type == REST_FIELD_TYPES.HAS_ONE\n                \"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <input\n                  nbInput\n                  fullWidth\n                  [id]=\"i\"\n                  [placeholder]=\"field.label\"\n                  [formControlName]=\"field.name\"\n                  type=\"text\"\n                />\n              </div>\n\n              <!-- Input type text -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.TEXT\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <textarea\n                  nbInput\n                  fullWidth\n                  [id]=\"i\"\n                  [placeholder]=\"field.label\"\n                  [formControlName]=\"field.name\"\n                ></textarea>\n              </div>\n\n              <!-- Input type number  -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.NUMBER\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <input\n                  nbInput\n                  fullWidth\n                  [id]=\"i\"\n                  [placeholder]=\"field.label\"\n                  [formControlName]=\"field.name\"\n                  type=\"number\"\n                />\n              </div>\n\n              <!-- Input type date -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.DATE\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <input\n                  nbInput\n                  [placeholder]=\"field.label\"\n                  [nbDatepicker]=\"formpicker\"\n                  fullWidth\n                  [formControlName]=\"field.name\"\n                />\n                <nb-datepicker #formpicker></nb-datepicker>\n              </div>\n\n              <!-- Input type dateTime -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.DATETIME\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <input\n                  nbInput\n                  fullWidth\n                  [placeholder]=\"field.label\"\n                  [nbDatepicker]=\"dateTimePicker\"\n                  [formControlName]=\"field.name\"\n                />\n                <nb-date-timepicker\n                  withSeconds\n                  #dateTimePicker\n                ></nb-date-timepicker>\n              </div>\n\n              <!-- Input type time -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.TIME\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <input\n                  [nbTimepicker]=\"timepicker\"\n                  fullWidth\n                  [formControlName]=\"field.name\"\n                  twelveHoursFormat\n                  nbInput\n                />\n                <nb-timepicker #timepicker></nb-timepicker>\n              </div>\n\n              <!-- Input type enum -->\n              <ng-container\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.ENUM\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <nb-select\n                  fullWidth\n                  [formControlName]=\"field.name\"\n                  [placeholder]=\"field.label\"\n                >\n                  <nb-option\n                    *ngFor=\"let option of field.metaData.addConfig.enumOptions\"\n                    [value]=\"option.value\"\n                    >{{ option.label }}</nb-option\n                  >\n                </nb-select>\n              </ng-container>\n\n              <!-- Input type boolean -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.BOOLEAN\"\n              >\n                <!-- <label class=\"label\">{{ field.label | titlecase }}</label> -->\n                <div style=\"display: flex; align-items: center\">\n                  <label style=\"margin-right: 0.5em\">{{\n                    field.label | titlecase\n                  }}</label>\n                  <!-- [name]=\"field.name\" -->\n                  <nb-toggle [formControlName]=\"field.name\"></nb-toggle>\n                </div>\n              </div>\n\n              <!-- Input type file -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"\n                  field.type == REST_FIELD_TYPES.FILE ||\n                  field.type == REST_FIELD_TYPES.PDF\n                \"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <div\n                  style=\"border: dashed; display: flex\"\n                  class=\"custom-dropzone form-control-custom rounded m-2\"\n                  ngx-dropzone\n                  (change)=\"onSelect($event, field)\"\n                >\n                  <img\n                    *ngIf=\"\n                      urlsImage[field.name] != '' &&\n                      filesUpload[field.name].length <= 0\n                    \"\n                    [src]=\"urlsImage[field.name]\"\n                    class=\"custom-img-dropzone\"\n                  />\n\n                  <ngx-dropzone-label\n                    *ngIf=\"filesUpload[field.name].length <= 0\"\n                  >\n                    <nb-icon\n                      icon=\"cloud-upload-outline\"\n                      style=\"font-size: 2em; color: #ccc\"\n                    ></nb-icon>\n                    Drag and drop files here or click to upload\n                  </ngx-dropzone-label>\n\n                  <ngx-dropzone-preview\n                    ngProjectAs=\"ngx-dropzone-preview\"\n                    *ngFor=\"let f of filesUpload[field.name]\"\n                    [file]=\"f\"\n                    [removable]=\"true\"\n                    (removed)=\"onRemove(field)\"\n                  >\n                    <ngx-dropzone-label\n                      >{{ f.name }} ({{ f.type }})</ngx-dropzone-label\n                    >\n                  </ngx-dropzone-preview>\n                </div>\n              </div>\n\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.IMAGE\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n\n                <div\n                  style=\"border: dashed; display: flex\"\n                  class=\"custom-dropzone form-control-custom rounded m-2\"\n                  ngx-dropzone\n                  (change)=\"onSelect($event, field)\"\n                >\n                  <img\n                    *ngIf=\"\n                      urlsImage[field.name] != '' &&\n                      filesUpload[field.name].length <= 0\n                    \"\n                    [src]=\"urlsImage[field.name]\"\n                    class=\"custom-img-dropzone\"\n                  />\n\n                  <ngx-dropzone-label\n                    *ngIf=\"\n                      filesUpload[field.name].length <= 0 &&\n                      urlsImage[field.name] == ''\n                    \"\n                  >\n                    <nb-icon\n                      icon=\"cloud-upload-outline\"\n                      style=\"font-size: 2em; color: #ccc\"\n                    ></nb-icon>\n                    Drag and drop files here or click to upload\n                  </ngx-dropzone-label>\n\n                  <!-- <ng-container\n                    *ngIf=\"filesUpload[field.name].length > 0\"\n                  > -->\n                  <ngx-dropzone-image-preview\n                    ngProjectAs=\"ngx-dropzone-preview\"\n                    *ngFor=\"let f of filesUpload[field.name]\"\n                    [file]=\"f\"\n                    [removable]=\"true\"\n                    (removed)=\"onRemove(field)\"\n                  >\n                  </ngx-dropzone-image-preview>\n                  <!-- </ng-container> -->\n                </div>\n\n                <button\n                  nbButton\n                  status=\"primary\"\n                  *ngIf=\"\n                    !isCrop[field.name] && controlCroper[field.name] != null\n                  \"\n                  (click)=\"activeCroper(field)\"\n                >\n                  CROP\n                </button>\n\n                <ng-container *ngIf=\"isCrop[field.name]\">\n                  <image-cropper\n                    [imageFile]=\"controlCroper[field.name]\"\n                    [maintainAspectRatio]=\"true\"\n                    [aspectRatio]=\"4 / 3\"\n                    format=\"png\"\n                    (imageCropped)=\"imageCropped($event, field)\"\n                  ></image-cropper>\n\n                  <button nbButton status=\"primary\" (click)=\"saveCroper(field)\">\n                    SAVE CHANGE\n                  </button>\n                  <button\n                    nbButton\n                    status=\"danger\"\n                    (click)=\"desactiveCrop(field)\"\n                  >\n                    Cancel\n                  </button>\n                </ng-container>\n\n                <!-- <img [src]=\"croppedImage\" /> -->\n              </div>\n\n              <!-- Input type hasMany -->\n              <div\n                *ngIf=\"field.type == REST_FIELD_TYPES.HAS_MANY\"\n                class=\"input-space\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <nb-tag-list\n                  (tagRemove)=\"onTagRemove($event, field.name)\"\n                  fullWidth\n                >\n                  <nb-tag\n                    *ngFor=\"let tree of form.get([field.name]).value\"\n                    [text]=\"tree\"\n                    removable\n                  ></nb-tag>\n                  <input\n                    type=\"text\"\n                    fullWidth\n                    nbTagInput\n                    [placeholder]=\"field.label\"\n                    (tagAdd)=\"onTagAdd($event, field.name)\"\n                  />\n                </nb-tag-list>\n              </div>\n\n              <!-- Input type belong_to -->\n              <div\n                *ngIf=\"field.type == REST_FIELD_TYPES.BELONG_TO\"\n                class=\"input-space\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <input\n                  #autoInput\n                  nbInput\n                  fullWidth\n                  type=\"text\"\n                  [formControlName]=\"field.name\"\n                  placeholder=\"Enter value\"\n                  [nbAutocomplete]=\"autoComplete\"\n                  (keyup)=\"filterInput($event, field)\"\n                  [id]=\"i\"\n                />\n\n                <nb-autocomplete\n                  #autoComplete\n                  (selectedChange)=\"onSelectionChange($event, field)\"\n                >\n                  <nb-option\n                    *ngFor=\"let option of allFilterContains[field.name] | async\"\n                    [value]=\"\n                      option[\n                        field?.metaData?.addConfig.belongToOptions?.value\n                          ? field?.metaData?.addConfig?.belongToOptions?.value\n                          : 'id'\n                      ]\n                    \"\n                  >\n                    {{\n                      option[\n                        field.metaData.addConfig.belongToOptions.template\n                          ? field.metaData.addConfig.belongToOptions.template\n                          : field.metaData.addConfig.belongToOptions\n                              .filterKeys[0]\n                      ]\n                    }}\n                  </nb-option>\n                </nb-autocomplete>\n              </div>\n\n              <!-- Input type belong_to_many -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.BELONG_TO_MANY\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <nb-tag-list (tagRemove)=\"onTagRemoveBelong($event, field)\">\n                  <nb-tag\n                    *ngFor=\"let tree of belongToMany[field.name]\"\n                    [text]=\"\n                      tree[\n                        field.metaData.addConfig.belongToManyOptions.template\n                          ? field.metaData.addConfig.belongToManyOptions\n                              .template\n                          : field.metaData.addConfig.belongToManyOptions\n                              .filterKeys[0]\n                      ]\n                    \"\n                    removable\n                  ></nb-tag>\n                  <input\n                    type=\"text\"\n                    nbTagInput\n                    #autoBelongToMany\n                    [nbAutocomplete]=\"belongToField\"\n                    (keyup)=\"filterInput($event, field)\"\n                    [placeholder]=\"field.label\"\n                    [formControlName]=\"field.name\"\n                    fullWidth\n                  />\n                </nb-tag-list>\n\n                <nb-autocomplete\n                  #belongToField\n                  (selectedChange)=\"onChoose($event, field)\"\n                >\n                  <nb-option\n                    *ngFor=\"let option of allFilterContains[field.name] | async\"\n                    [value]=\"option\"\n                  >\n                    {{\n                      option[\n                        field.metaData.addConfig.belongToManyOptions.template\n                          ? field.metaData.addConfig.belongToManyOptions\n                              .template\n                          : field.metaData.addConfig.belongToManyOptions\n                              .filterKeys[0]\n                      ]\n                    }}\n                  </nb-option>\n                </nb-autocomplete>\n              </div>\n\n              <!-- Input type link -->\n\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.LINK\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <input\n                  nbInput\n                  fullWidth\n                  [id]=\"i\"\n                  [placeholder]=\"field.label\"\n                  [formControlName]=\"field.name\"\n                  type=\"text\"\n                />\n\n                <!-- <div\n                *ngIf=\"\n                  form.get([field.name]).hasError('invalidUrl') &&\n                  form.get([field.name]).touched\n                \"\n                class=\"text-error\"\n              >\n                {{ \"rest-add.invalid-link\" | translate }}\n              </div> -->\n              </div>\n\n              <!-- Input type JSON -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.JSON\"\n              >\n                <div>\n                  <label class=\"label\">{{ field.label | titlecase }}</label>\n                  <button\n                    nbButton\n                    status=\"primary\"\n                    shape=\"round\"\n                    size=\"small\"\n                    outline\n                    ghost\n                    *ngIf=\"field.metaData.addConfig.jsonConfig.isOpen\"\n                    (click)=\"addJSONField(field)\"\n                  >\n                    <nb-icon icon=\"plus\" pack=\"fas\"></nb-icon>\n                  </button>\n                </div>\n\n                <div\n                  class=\"row mb-2\"\n                  *ngFor=\"\n                    let item of jsonEditorOptions[field.name];\n                    let index = index\n                  \"\n                >\n                  <div class=\"col\" [id]=\"index\">\n                    <input\n                      fullWidth\n                      nbInput\n                      *ngIf=\"item.add; else elseBlock\"\n                      [(ngModel)]=\"item.label\"\n                      [ngModelOptions]=\"{ standalone: true }\"\n                    />\n                    <ng-template #elseBlock>\n                      <input fullWidth nbInput disabled [value]=\"item.label\" />\n                    </ng-template>\n                  </div>\n                  <div class=\"col\">\n                    <input\n                      fullWidth\n                      nbInput\n                      [(ngModel)]=\"item.value\"\n                      [ngModelOptions]=\"{ standalone: true }\"\n                    />\n                  </div>\n                  <div class=\"col\" *ngIf=\"item.add\">\n                    <button\n                      nbButton\n                      status=\"primary\"\n                      shape=\"round\"\n                      size=\"small\"\n                      outline\n                      ghost\n                      (click)=\"removeJSONField(field, index)\"\n                    >\n                      <nb-icon icon=\"trash-alt\" pack=\"fas\"></nb-icon>\n                    </button>\n                  </div>\n                </div>\n              </div>\n\n              <!-- Input type MORPH -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.MORPH\"\n              >\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <label class=\"label\">Ressources</label>\n                    <nb-select\n                      fullWidth\n                      (selectedChange)=\"onMorphSelectField($event, field.name)\"\n                    >\n                      <nb-option\n                        *ngFor=\"\n                          let option of field.metaData.addConfig.morphConfig\n                            .related\n                        \"\n                        [value]=\"option.value\"\n                        >{{ option.label }}</nb-option\n                      >\n                    </nb-select>\n                  </div>\n\n                  <div class=\"col-9\">\n                    <label class=\"label\">{{ field.label | titlecase }}</label>\n                    <input\n                      #autoInput\n                      nbInput\n                      fullWidth\n                      type=\"text\"\n                      [formControlName]=\"field.name\"\n                      placeholder=\"Enter value\"\n                      [nbAutocomplete]=\"autoComplete\"\n                      (keyup)=\"filterInput($event, field)\"\n                      [id]=\"i\"\n                      [disabled]=\"!allFilterContains[field.name]\"\n                    />\n                    <nb-autocomplete\n                      #autoComplete\n                      (selectedChange)=\"onSelectionChange($event, field)\"\n                    >\n                      <nb-option\n                        *ngFor=\"\n                          let option of allFilterContains[field.name] | async\n                        \"\n                        [value]=\"\n                          option[\n                            field?.metaData?.addConfig.morphConfig?.value\n                              ? field?.metaData?.addConfig.morphConfig?.value\n                              : 'id'\n                          ]\n                        \"\n                      >\n                        {{\n                          option[\n                            field.metaData.addConfig.morphConfig.template\n                              ? field.metaData.addConfig.morphConfig.template\n                              : field.metaData.addConfig.morphConfig\n                                  .filterKeys[0]\n                          ]\n                        }}\n                      </nb-option>\n                    </nb-autocomplete>\n                  </div>\n                </div>\n              </div>\n            </ng-container>\n          </div>\n        </form>\n      </nb-tab>\n      <nb-tab tabTitle=\"Importation\">\n        <div class=\"row\">\n          <div class=\"col-9\"></div>\n          <div class=\"col-3\">\n            <button\n              nbButton\n              status=\"primary\"\n              [nbContextMenu]=\"items\"\n              nbContextMenuTag=\"my-context-add\"\n            >\n              {{ \"rest-add.import\" | translate }}\n            </button>\n          </div>\n        </div>\n\n        <div>\n          <ng2-smart-table [settings]=\"settings\" [source]=\"source\">\n          </ng2-smart-table>\n        </div>\n      </nb-tab>\n    </nb-tabset>\n  </nb-card-body>\n  <nb-card-footer>\n    <div class=\"buttons-row\">\n      <button nbButton (click)=\"onSumbit()\" status=\"primary\">\n        {{ formState.btnLabel }}\n      </button>\n    </div>\n  </nb-card-footer>\n</nb-card>\n", styles: ["nb-card-body{overflow:visible;padding-top:0}.input-space{margin-top:1rem}@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host .buttons-row{margin:-.5rem}.nb-theme-default :host button[nbButton]{margin:.5rem}[dir=ltr] .nb-theme-default :host .action-icon{margin-right:.5rem}[dir=rtl] .nb-theme-default :host .action-icon{margin-left:.5rem}.nb-theme-default :host .actions-card{height:8rem}.nb-theme-dark :host .buttons-row{margin:-.5rem}.nb-theme-dark :host button[nbButton]{margin:.5rem}[dir=ltr] .nb-theme-dark :host .action-icon{margin-right:.5rem}[dir=rtl] .nb-theme-dark :host .action-icon{margin-left:.5rem}.nb-theme-dark :host .actions-card{height:8rem}.nb-theme-cosmic :host .buttons-row{margin:-.5rem}.nb-theme-cosmic :host button[nbButton]{margin:.5rem}[dir=ltr] .nb-theme-cosmic :host .action-icon{margin-right:.5rem}[dir=rtl] .nb-theme-cosmic :host .action-icon{margin-left:.5rem}.nb-theme-cosmic :host .actions-card{height:8rem}.nb-theme-corporate :host .buttons-row{margin:-.5rem}.nb-theme-corporate :host button[nbButton]{margin:.5rem}[dir=ltr] .nb-theme-corporate :host .action-icon{margin-right:.5rem}[dir=rtl] .nb-theme-corporate :host .action-icon{margin-left:.5rem}.nb-theme-corporate :host .actions-card{height:8rem}.icon{height:35px;width:35px;line-height:30px;text-align:center;border:1px solid #eaeaea;border-radius:4px;float:left;margin-right:20px}.upload-text{overflow:hidden;width:auto;font-size:14px}svg{fill:#909293;height:20px}.overlay{position:relative}.delete-button{background-color:#fafafa;position:absolute;top:-6px;right:-6px;cursor:pointer;z-index:10;width:40px;height:40px;text-align:center;font-size:20px;line-height:40px}.file-image img{width:100%}nb-toggle{text-align:center}\n"], components: [{ type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1$1.NbTabsetComponent, selector: "nb-tabset", inputs: ["fullWidth", "routeParam"], outputs: ["changeTab"] }, { type: i1$1.NbTabComponent, selector: "nb-tab", inputs: ["badgeStatus", "badgeDot", "disabled", "responsive", "active", "lazyLoad", "tabTitle", "tabId", "tabIcon", "route", "badgeText", "badgePosition"] }, { type: i1$1.NbDatepickerComponent, selector: "nb-datepicker", inputs: ["date"], outputs: ["dateChange"] }, { type: i1$1.NbDateTimePickerComponent, selector: "nb-date-timepicker", inputs: ["twelveHoursFormat", "withSeconds", "singleColumn", "step", "title", "applyButtonText", "currentTimeButtonText"] }, { type: i1$1.NbTimePickerComponent, selector: "nb-timepicker", inputs: ["showFooter", "timeFormat", "twelveHoursFormat", "withSeconds", "singleColumn", "step", "date", "hoursText", "minutesText", "secondsText", "ampmText", "applyButtonText", "currentTimeButtonText"], outputs: ["onSelectTime"], exportAs: ["nbTimepicker"] }, { type: i1$1.NbSelectComponent, selector: "nb-select", inputs: ["size", "status", "shape", "appearance", "placeholder", "optionsOverlayOffset", "scrollStrategy", "outline", "filled", "hero", "disabled", "fullWidth", "compareWith", "selected", "multiple", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }, { type: i1$1.NbOptionComponent, selector: "nb-option", inputs: ["disabled", "value"], outputs: ["selectionChange"] }, { type: i1$1.NbToggleComponent, selector: "nb-toggle", inputs: ["status", "labelPosition", "checked", "disabled"], outputs: ["checkedChange"] }, { type: i7.NgxDropzoneComponent, selector: "ngx-dropzone, [ngx-dropzone]", inputs: ["accept", "disabled", "multiple", "maxFileSize", "expandable", "disableClick", "processDirectoryDrop", "id", "aria-label", "aria-labelledby", "aria-describedby"], outputs: ["change"] }, { type: i1$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i7.NgxDropzonePreviewComponent, selector: "ngx-dropzone-preview", inputs: ["file", "removable"], outputs: ["removed"] }, { type: i7.NgxDropzoneImagePreviewComponent, selector: "ngx-dropzone-image-preview", inputs: ["file"] }, { type: i1$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }, { type: i5.ImageCropperComponent, selector: "image-cropper", inputs: ["imageChangedEvent", "imageURL", "imageBase64", "imageFile", "format", "transform", "maintainAspectRatio", "aspectRatio", "resetCropOnAspectRatioChange", "resizeToWidth", "resizeToHeight", "cropperMinWidth", "cropperMinHeight", "cropperMaxHeight", "cropperMaxWidth", "cropperStaticWidth", "cropperStaticHeight", "canvasRotation", "initialStepSize", "roundCropper", "onlyScaleDown", "imageQuality", "autoCrop", "backgroundColor", "containWithinAspectRatio", "hideResizeSquares", "allowMoveImage", "cropper", "alignImage", "disabled", "hidden"], outputs: ["imageCropped", "startCropImage", "imageLoaded", "cropperReady", "loadImageFailed", "transformChange"] }, { type: i1$1.NbTagListComponent, selector: "nb-tag-list", inputs: ["size", "tabIndex", "role", "multiple"], outputs: ["tagRemove"], exportAs: ["nbTagList"] }, { type: i1$1.NbTagComponent, selector: "nb-tag", inputs: ["appearance", "status", "size", "role", "selected", "removable", "text"], outputs: ["remove", "selectedChange"], exportAs: ["nbTag"] }, { type: i1$1.NbAutocompleteComponent, selector: "nb-autocomplete", inputs: ["size", "activeFirst", "handleDisplayFn", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }, { type: i9.Ng2SmartTableComponent, selector: "ng2-smart-table", inputs: ["settings", "source"], outputs: ["rowSelect", "rowDeselect", "userRowSelect", "delete", "edit", "create", "custom", "deleteConfirm", "editConfirm", "createConfirm", "rowHover"] }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }], directives: [{ type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1$5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i8.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1$1.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1$5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1$5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$5.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i1$5.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { type: i1$1.NbDatepickerDirective, selector: "input[nbDatepicker]", inputs: ["nbDatepicker"] }, { type: i1$1.NbTimePickerDirective, selector: "input[nbTimepicker]", inputs: ["overlayOffset", "nbTimepicker"] }, { type: i7.NgxDropzoneLabelDirective, selector: "ngx-dropzone-label" }, { type: i1$1.NbTagInputDirective, selector: "input[nbTagInput]", inputs: ["separatorKeys"], outputs: ["tagAdd"], exportAs: ["nbTagInput"] }, { type: i1$1.NbAutocompleteDirective, selector: "input[nbAutocomplete]", inputs: ["overlayOffset", "scrollStrategy", "nbAutocomplete", "focusInputOnValueChange", "customOverlayHost"] }, { type: i1$5.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i1$1.NbContextMenuDirective, selector: "[nbContextMenu]", inputs: ["nbContextMenuAdjustment", "nbContextMenuTrigger", "nbContextMenuPlacement", "nbContextMenuTag", "nbContextMenu", "nbContextMenuClass"] }], pipes: { "titlecase": i8.TitleCasePipe, "async": i8.AsyncPipe, "translate": i1$4.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceAddComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-rest-resource-add',
                    templateUrl: './rest-resource-add.component.html',
                    styleUrls: ['./rest-resource-add.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1$5.FormBuilder }, { type: RestResourceService }, { type: RestAdminConfigService }, { type: i1.ActivatedRoute }, { type: i1$1.NbMenuService }, { type: RestExportService }, { type: i1$1.NbDialogService }, { type: i1.Router }]; }, propDecorators: { resource: [{
                type: Input
            }], belongTo: [{
                type: ViewChild,
                args: ["belongTo"]
            }], inputBelongToMany: [{
                type: ViewChild,
                args: ["autoBelongToMany"]
            }] } });

class RestResourceDetailComponent {
    constructor(activatedRoute, serviceRest, serviceRestAdminConfig, router, dataSourceBuilder, langService) {
        this.activatedRoute = activatedRoute;
        this.serviceRest = serviceRest;
        this.serviceRestAdminConfig = serviceRestAdminConfig;
        this.router = router;
        this.dataSourceBuilder = dataSourceBuilder;
        this.langService = langService;
        this.objectKeys = Object.keys;
        this.customColumn = "name";
        this.allColumns = [this.customColumn];
        this.listDataSource = {};
        this.isTabsMenu = false;
        this.tabsName = [];
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
        this.jsonValue = (val) => {
            let _jsonValue;
            if (val.restField.i18n == true) {
                if (val.data[0] == "{")
                    _jsonValue = JSON.parse(val.data)[this.langService.selected];
                else if (typeof val.data !== "string")
                    _jsonValue = val.data[this.langService.selected];
                else
                    _jsonValue = val.data;
            }
            else {
                _jsonValue = val.data;
            }
            if (typeof val.data == "object")
                return JSON.stringify(_jsonValue);
            else
                return _jsonValue;
        };
    }
    ngOnInit() {
        let id;
        if (this.ID) {
            console.log("ID", this.ID);
            id = this.ID;
        }
        else {
            id = this.activatedRoute.snapshot.paramMap.get("id");
            this.ressourceName =
                this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 2].path.split("-")[0];
        }
        this.entityId = parseInt(id);
        // console.log("restNAEM", this.ressourceName);
        this.resource = this.serviceRestAdminConfig.getSpecificResource(this.ressourceName);
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
                                                    ? item[temp[search.name].restField.metaData.listConfig
                                                        .restManyResources.label]
                                                    : item,
                                                item,
                                            },
                                        });
                                    });
                                    const rowsT = [
                                        {
                                            data: {
                                                name: temp[search.name].restField.name,
                                                place: "header-place",
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
                                                    place: "header-place",
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
                                                    : "",
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
                                            place: "header-place",
                                        },
                                        children: items,
                                    },
                                ];
                                this.listDataSource[temp[search.name].restField.name] =
                                    this.dataSourceBuilder.create(rowsBelongToMany);
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
                    colunms[elt.name] = {
                        restField: elt,
                        data: response[elt.label],
                    };
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
                                                ? item[this.datas[property].restField.metaData.listConfig
                                                    .restManyResources.label]
                                                : item,
                                            item,
                                        },
                                    });
                                });
                                const rowsT = [
                                    {
                                        data: {
                                            name: this.datas[property].restField.name,
                                            place: "header-place",
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
                                                place: "header-place",
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
                                                : "",
                                        });
                                    });
                                    console.log(this.datas[property]);
                                    console.log(this.listDataSource);
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
                                        place: "header-place",
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
    editEntity() {
        this.router.navigate([`/admin/${this.ressourceName}-edit`, this.entityId]);
    }
    listEntity() {
        this.router.navigateByUrl(`/admin/${this.ressourceName}-list`);
    }
    get REST_FIELD_TYPES() {
        return REST_FIELD_TYPES;
    }
    loadBelongToDetail(data) {
        const resourceName = data.restField.metaData.addConfig.belongToOptions.resourceName;
        this.router.navigate([`/admin/${resourceName}-detail`, data.data]);
    }
}
RestResourceDetailComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceDetailComponent, deps: [{ token: i1.ActivatedRoute }, { token: RestResourceService }, { token: RestAdminConfigService }, { token: i1.Router }, { token: i1$1.NbTreeGridDataSourceBuilder }, { token: RestLangService }], target: i0.ɵɵFactoryTarget.Component });
RestResourceDetailComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestResourceDetailComponent, selector: "ngx-rest-resource-detail", inputs: { resource: "resource", ID: "ID", ressourceName: "ressourceName", container: "container", style: "style" }, ngImport: i0, template: "<nb-card [style]=\"style ? style : ''\">\n  <nb-card-header *ngIf=\"!container\">\n    {{ resource.detailConfig?.title | titlecase }}\n  </nb-card-header>\n  <nb-card-body>\n    <nb-list *ngIf=\"!isTabsMenu; else tabsContent\">\n      <nb-list-item\n        *ngFor=\"let item of datas | keyvalue\"\n        class=\"rest-item-align\"\n      >\n        <!-- style=\"display: block\" -->\n        <ng-container\n          *ngIf=\"\n            item.value.restField.type == REST_FIELD_TYPES.TEXT ||\n            item.value.restField.type == REST_FIELD_TYPES.STRING ||\n            item.value.restField.type == REST_FIELD_TYPES.NUMBER ||\n            item.value.restField.type == REST_FIELD_TYPES.ENUM\n          \"\n        >\n          <ng-container *ngIf=\"!item.value.restField.template\">\n            <div class=\"\">\n              <b>{{ item.key | titlecase }}: </b>\n            </div>\n            <div class=\"\">\n              {{ item.value.data }}\n            </div>\n          </ng-container>\n\n          <div *ngIf=\"item.value.restField.template\">\n            <cng-html-compiler\n              [template]=\"item.value.restField.template\"\n              [componentClass]=\"item.value.data\"\n            >\n            </cng-html-compiler>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.JSON\">\n          <ng-container *ngIf=\"!item.value.restField.template\">\n            <div class=\"\">\n              <b>{{ item.key | titlecase }}: </b>\n            </div>\n            <div class=\"\">\n              {{ jsonValue(item.value) }}\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"item.value.restField.template\">\n            <cng-html-compiler\n              [template]=\"item.value.restField.template\"\n              [componentClass]=\"jsonValue(item.value)\"\n            >\n            </cng-html-compiler>\n          </ng-container>\n        </ng-container>\n\n        <ng-container\n          *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.BOOLEAN\"\n        >\n          <ng-container *ngIf=\"!item.value.restField.template\">\n            <div class=\"\">\n              <b>{{ item.key | titlecase }}: </b>\n            </div>\n\n            <div class=\"\">\n              <nb-checkbox\n                [checked]=\"item.value.data\"\n                [disabled]=\"true\"\n              ></nb-checkbox>\n            </div>\n          </ng-container>\n\n          <ng-container *ngIf=\"item.value.restField.template\">\n            <cng-html-compiler\n              [template]=\"item.value.restField.template\"\n              [componentClass]=\"item.value.data\"\n            >\n            </cng-html-compiler>\n          </ng-container>\n        </ng-container>\n\n        <ng-container\n          *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.IMAGE\"\n        >\n          <ng-container *ngIf=\"!item.value.restField.template\">\n            <div class=\"\">\n              <b>{{ item.key | titlecase }}: </b>\n            </div>\n            <div class=\"\">\n              <img\n                class=\"rest-img\"\n                [src]=\"item.value.data\"\n                alt=\"\"\n                [style]=\"style\"\n              />\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"item.value.restField.template\">\n            <cng-html-compiler\n              [template]=\"item.value.restField.template\"\n              [componentClass]=\"item.value.data\"\n            >\n            </cng-html-compiler>\n          </ng-container>\n        </ng-container>\n\n        <ng-container\n          *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.DATE\"\n        >\n          <ng-container *ngIf=\"!item.value.restField.template\">\n            <div class=\"\">\n              <b>{{ item.key | titlecase }}: </b>\n            </div>\n            <div class=\"\">\n              {{ item.value.data | date }}\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"item.value.restField.template\">\n            <cng-html-compiler\n              [template]=\"item.value.restField.template\"\n              [componentClass]=\"item.value.data\"\n            >\n            </cng-html-compiler>\n          </ng-container>\n        </ng-container>\n\n        <ng-container\n          *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.BELONG_TO\"\n        >\n          <ng-container *ngIf=\"!item.value.restField.template\">\n            <div class=\"\">\n              <b>{{ item.value.restField.label | titlecase }}: </b>\n            </div>\n            <div class=\"\">\n              <a\n                (click)=\"loadBelongToDetail(item.value)\"\n                nbTooltip=\"{{ 'rest-detail.belongToRef' | translate }}\"\n                nbTooltipPlacement=\"top\"\n                class=\"belongTo-link\"\n              >\n                {{ item.value.data }}\n              </a>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"item.value.restField.template\">\n            <cng-html-compiler\n              [template]=\"item.value.restField.template\"\n              [componentClass]=\"item.value.data\"\n            >\n            </cng-html-compiler>\n          </ng-container>\n        </ng-container>\n\n        <ng-container\n          *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.HAS_MANY\"\n        >\n          <!-- CAS 1 -->\n          <ng-container\n            *ngIf=\"\n              item.value.restField?.metaData?.listConfig?.restManyResources &&\n              !item.value.restField?.metaData?.detailConfig?.restManyResources\n            \"\n          >\n            <table [nbTreeGrid]=\"listDataSource[item.key]\">\n              <tr\n                nbTreeGridRow\n                *nbTreeGridRowDef=\"let row; columns: allColumns\"\n              ></tr>\n\n              <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n                <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n                  <ngx-fs-icon\n                    [expanded]=\"row.expanded\"\n                    [place]=\"row.data.place\"\n                  ></ngx-fs-icon>\n                  <ng-container\n                    *ngIf=\"\n                      !item.value.restField?.metaData?.listConfig\n                        ?.restManyResources.template\n                    \"\n                  >\n                    <b> {{ row.data[customColumn] }}</b>\n                  </ng-container>\n\n                  <ng-container\n                    *ngIf=\"\n                      item.value.restField?.metaData?.listConfig\n                        ?.restManyResources.template\n                    \"\n                  >\n                    <span *ngIf=\"row.data.place\">\n                      {{ item.value.restField.name }}</span\n                    >\n                    <ng-container *ngIf=\"!row.data.place\">\n                      <cng-html-compiler\n                        [template]=\"\n                          item.value.restField.metaData.listConfig\n                            .restManyResources.template\n                        \"\n                        [componentClass]=\"row.data.item\"\n                      >\n                      </cng-html-compiler>\n                    </ng-container>\n                  </ng-container>\n                </td>\n              </ng-container>\n            </table>\n          </ng-container>\n\n          <!-- CAS 2 -->\n          <ng-container\n            *ngIf=\"\n              item.value.restField?.metaData?.detailConfig?.restManyResources\n            \"\n          >\n            <div\n              *ngIf=\"\n                isObject(\n                  item.value.restField.metaData.detailConfig.restManyResources\n                );\n                else cas21\n              \"\n            >\n              <table [nbTreeGrid]=\"listDataSource[item.key]\">\n                <tr\n                  nbTreeGridRow\n                  *nbTreeGridRowDef=\"let row; columns: allColumns\"\n                ></tr>\n\n                <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n                  <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n                    <ngx-fs-icon\n                      [expanded]=\"row.expanded\"\n                      [place]=\"row.data.place\"\n                    ></ngx-fs-icon>\n                    <ng-container\n                      *ngIf=\"\n                        !item.value.restField.metaData.detailConfig\n                          .restManyResources?.template\n                      \"\n                    >\n                      <b> {{ row.data[customColumn] }}</b>\n                    </ng-container>\n\n                    <ng-container\n                      *ngIf=\"\n                        item.value.restField.metaData.detailConfig\n                          .restManyResources?.template\n                      \"\n                    >\n                      <span *ngIf=\"row.data.place\">\n                        {{ item.value.restField.name }}</span\n                      >\n                      <ng-container *ngIf=\"!row.data.place\">\n                        <cng-html-compiler\n                          [template]=\"\n                            item.value.restField.metaData.detailConfig\n                              .restManyResources.template\n                          \"\n                          [componentClass]=\"row.data.item\"\n                        >\n                        </cng-html-compiler>\n                      </ng-container>\n                    </ng-container>\n                  </td>\n                </ng-container>\n              </table>\n            </div>\n            <ng-template #cas21>\n              <div\n                class=\"row\"\n                *ngFor=\"let res of listDataSource[item.value.restField.name]\"\n              >\n                <ngx-rest-resource-detail\n                  [resource]=\"res.resource\"\n                  [ID]=\"res.id\"\n                  [ressourceName]=\"res.resourceName\"\n                  [container]=\"true\"\n                  [style]=\"res.style\"\n                ></ngx-rest-resource-detail>\n              </div>\n            </ng-template>\n          </ng-container>\n        </ng-container>\n\n        <ng-container\n          *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.BELONG_TO_MANY\"\n        >\n          <table [nbTreeGrid]=\"listDataSource[item.key]\">\n            <tr\n              nbTreeGridRow\n              *nbTreeGridRowDef=\"let row; columns: allColumns\"\n            ></tr>\n\n            <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n              <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n                <ngx-fs-icon\n                  [expanded]=\"row.expanded\"\n                  [place]=\"row.data.place\"\n                ></ngx-fs-icon>\n                <ng-container\n                  *ngIf=\"\n                    !item.value.restField.metaData.listConfig\n                      .restBelongToManyResources.template\n                  \"\n                >\n                  <b> {{ row.data[customColumn] }}</b>\n                </ng-container>\n\n                <ng-container\n                  *ngIf=\"\n                    item.value.restField.metaData.listConfig\n                      .restBelongToManyResources.template\n                  \"\n                >\n                  <span *ngIf=\"row.data.place\">{{\n                    item.value.restField.name\n                  }}</span>\n                  <ng-container *ngIf=\"!row.data.place\">\n                    <cng-html-compiler\n                      [template]=\"\n                        item.value.restField.metaData.listConfig\n                          .restBelongToManyResources.template\n                      \"\n                      [componentClass]=\"row.data.item\"\n                    >\n                    </cng-html-compiler>\n                  </ng-container>\n                </ng-container>\n              </td>\n            </ng-container>\n          </table>\n        </ng-container>\n      </nb-list-item>\n    </nb-list>\n    <ng-template #tabsContent>\n      <nb-tabset>\n        <nb-tab [tabTitle]=\"tabs\" *ngFor=\"let tabs of tabsName\">\n          <nb-list>\n            <nb-list-item\n              *ngFor=\"let item of datas1[tabs] | keyvalue\"\n              class=\"rest-item-align\"\n            >\n              <!-- style=\"display: flex, \" -->\n              <ng-container\n                *ngIf=\"\n                  item.value.restField.type == REST_FIELD_TYPES.TEXT ||\n                  item.value.restField.type == REST_FIELD_TYPES.STRING ||\n                  item.value.restField.type == REST_FIELD_TYPES.NUMBER ||\n                  item.value.restField.type == REST_FIELD_TYPES.ENUM\n                \"\n              >\n                <ng-container *ngIf=\"!item.value.restField.template\">\n                  <div class=\"\">\n                    <b>{{ item.key | titlecase }}: </b>\n                  </div>\n                  <div class=\"\">\n                    {{ item.value.data }}\n                  </div>\n                </ng-container>\n\n                <div *ngIf=\"item.value.restField.template\">\n                  <cng-html-compiler\n                    [template]=\"item.value.restField.template\"\n                    [componentClass]=\"item.value.data\"\n                  >\n                  </cng-html-compiler>\n                </div>\n              </ng-container>\n\n              <ng-container\n                *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.BOOLEAN\"\n              >\n                <ng-container *ngIf=\"!item.value.restField.template\">\n                  <div class=\"\">\n                    <b>{{ item.key | titlecase }}: </b>\n                  </div>\n\n                  <div class=\"\">\n                    <nb-checkbox\n                      [checked]=\"item.value.data\"\n                      [disabled]=\"true\"\n                    ></nb-checkbox>\n                  </div>\n                </ng-container>\n\n                <ng-container *ngIf=\"item.value.restField.template\">\n                  <cng-html-compiler\n                    [template]=\"item.value.restField.template\"\n                    [componentClass]=\"item.value.data\"\n                  >\n                  </cng-html-compiler>\n                </ng-container>\n              </ng-container>\n\n              <ng-container\n                *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.IMAGE\"\n              >\n                <ng-container *ngIf=\"!item.value.restField.template\">\n                  <div class=\"\">\n                    <b>{{ item.key | titlecase }}: </b>\n                  </div>\n                  <div class=\"\">\n                    <img\n                      class=\"rest-img\"\n                      [src]=\"item.value.data\"\n                      alt=\"\"\n                      [style]=\"style\"\n                    />\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"item.value.restField.template\">\n                  <cng-html-compiler\n                    [template]=\"item.value.restField.template\"\n                    [componentClass]=\"item.value.data\"\n                  >\n                  </cng-html-compiler>\n                </ng-container>\n              </ng-container>\n\n              <ng-container\n                *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.DATE\"\n              >\n                <ng-container *ngIf=\"!item.value.restField.template\">\n                  <div class=\"\">\n                    <b>{{ item.key | titlecase }}: </b>\n                  </div>\n                  <div class=\"\">\n                    {{ item.value.data | date }}\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"item.value.restField.template\">\n                  <cng-html-compiler\n                    [template]=\"item.value.restField.template\"\n                    [componentClass]=\"item.value.data\"\n                  >\n                  </cng-html-compiler>\n                </ng-container>\n              </ng-container>\n\n              <ng-container\n                *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.BELONG_TO\"\n              >\n                <ng-container *ngIf=\"!item.value.restField.template\">\n                  <div class=\"\">\n                    <b>{{ item.value.restField.label | titlecase }}: </b>\n                  </div>\n                  <div class=\"\">\n                    <a\n                      (click)=\"loadBelongToDetail(item.value)\"\n                      nbTooltip=\"{{ 'rest-detail.belongToRef' | translate }}\"\n                      nbTooltipPlacement=\"top\"\n                      class=\"belongTo-link\"\n                    >\n                      {{ item.value.data }}\n                    </a>\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"item.value.restField.template\">\n                  <cng-html-compiler\n                    [template]=\"item.value.restField.template\"\n                    [componentClass]=\"item.value.data\"\n                  >\n                  </cng-html-compiler>\n                </ng-container>\n              </ng-container>\n\n              <ng-container\n                *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.HAS_MANY\"\n              >\n                <ng-container\n                  *ngIf=\"\n                    item.value.restField?.metaData?.listConfig\n                      ?.restManyResources &&\n                    !item.value.restField?.metaData?.detailConfig\n                      ?.restManyResources\n                  \"\n                >\n                  <table [nbTreeGrid]=\"listDataSource[item.key]\">\n                    <tr\n                      nbTreeGridRow\n                      *nbTreeGridRowDef=\"let row; columns: allColumns\"\n                    ></tr>\n\n                    <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n                      <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n                        <ngx-fs-icon\n                          [expanded]=\"row.expanded\"\n                          [place]=\"row.data.place\"\n                        ></ngx-fs-icon>\n                        <ng-container\n                          *ngIf=\"\n                            !item.value.restField?.metaData?.listConfig\n                              ?.restManyResources.template\n                          \"\n                        >\n                          <b> {{ row.data[customColumn] }}</b>\n                        </ng-container>\n\n                        <ng-container\n                          *ngIf=\"\n                            item.value.restField?.metaData?.listConfig\n                              ?.restManyResources.template\n                          \"\n                        >\n                          <span *ngIf=\"row.data.place\">\n                            {{ item.value.restField.name }}</span\n                          >\n                          <ng-container *ngIf=\"!row.data.place\">\n                            <cng-html-compiler\n                              [template]=\"\n                                item.value.restField.metaData.listConfig\n                                  .restManyResources.template\n                              \"\n                              [componentClass]=\"row.data.item\"\n                            >\n                            </cng-html-compiler>\n                          </ng-container>\n                        </ng-container>\n                      </td>\n                    </ng-container>\n                  </table>\n                </ng-container>\n                <ng-container\n                  *ngIf=\"\n                    item.value.restField?.metaData?.detailConfig\n                      ?.restManyResources\n                  \"\n                >\n                  <ng-container\n                    *ngIf=\"\n                      isObject(\n                        item.value.restField?.metaData?.detailConfig\n                          ?.restManyResources\n                      );\n                      else displayRes\n                    \"\n                  >\n                    <table [nbTreeGrid]=\"listDataSource[item.key]\">\n                      <tr\n                        nbTreeGridRow\n                        *nbTreeGridRowDef=\"let row; columns: allColumns\"\n                      ></tr>\n\n                      <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n                        <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n                          <ngx-fs-icon\n                            [expanded]=\"row.expanded\"\n                            [place]=\"row.data.place\"\n                          ></ngx-fs-icon>\n                          <ng-container\n                            *ngIf=\"\n                              !item.value.restField?.metaData?.detailConfig\n                                ?.restManyResources.template\n                            \"\n                          >\n                            <b> {{ row.data[customColumn] }}</b>\n                          </ng-container>\n\n                          <ng-container\n                            *ngIf=\"\n                              item.value.restField?.metaData?.detailConfig\n                                ?.restManyResources.template\n                            \"\n                          >\n                            <span *ngIf=\"row.data.place\">\n                              {{ item.value.restField.name }}</span\n                            >\n                            <ng-container *ngIf=\"!row.data.place\">\n                              <cng-html-compiler\n                                [template]=\"\n                                  item.value.restField.metaData.detailConfig\n                                    .restManyResources.template\n                                \"\n                                [componentClass]=\"row.data.item\"\n                              >\n                              </cng-html-compiler>\n                            </ng-container>\n                          </ng-container>\n                        </td>\n                      </ng-container>\n                    </table>\n                  </ng-container>\n                  <ng-template #displayRes>\n                    <div\n                      class=\"row\"\n                      *ngFor=\"\n                        let res of listDataSource[item.value.restField.name]\n                      \"\n                    >\n                      <ngx-rest-resource-detail\n                        [resource]=\"res.resource\"\n                        [ID]=\"res.id\"\n                        [ressourceName]=\"res.resourceName\"\n                        [container]=\"true\"\n                        [style]=\"res.style\"\n                      ></ngx-rest-resource-detail>\n                    </div>\n                  </ng-template>\n                </ng-container>\n              </ng-container>\n\n              <ng-container\n                *ngIf=\"\n                  item.value.restField.type == REST_FIELD_TYPES.BELONG_TO_MANY\n                \"\n              >\n                <table [nbTreeGrid]=\"listDataSource[item.key]\">\n                  <tr\n                    nbTreeGridRow\n                    *nbTreeGridRowDef=\"let row; columns: allColumns\"\n                  ></tr>\n\n                  <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n                    <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n                      <ngx-fs-icon\n                        [expanded]=\"row.expanded\"\n                        [place]=\"row.data.place\"\n                      ></ngx-fs-icon>\n                      <ng-container\n                        *ngIf=\"\n                          !item.value.restField.metaData.listConfig\n                            .restBelongToManyResources.template\n                        \"\n                      >\n                        <b> {{ row.data[customColumn] }}</b>\n                      </ng-container>\n\n                      <ng-container\n                        *ngIf=\"\n                          item.value.restField.metaData.listConfig\n                            .restBelongToManyResources.template\n                        \"\n                      >\n                        <span *ngIf=\"row.data.place\">{{\n                          item.value.restField.name\n                        }}</span>\n                        <ng-container *ngIf=\"!row.data.place\">\n                          <cng-html-compiler\n                            [template]=\"\n                              item.value.restField.metaData.listConfig\n                                .restBelongToManyResources.template\n                            \"\n                            [componentClass]=\"row.data.item\"\n                          >\n                          </cng-html-compiler>\n                        </ng-container>\n                      </ng-container>\n                    </td>\n                  </ng-container>\n                </table>\n              </ng-container>\n            </nb-list-item>\n          </nb-list>\n        </nb-tab>\n      </nb-tabset>\n    </ng-template>\n  </nb-card-body>\n\n  <nb-card-footer *ngIf=\"datas && !container\">\n    <div class=\"buttons-row\">\n      <button\n        nbButton\n        status=\"danger\"\n        style=\"margin-right: 10px\"\n        (click)=\"listEntity()\"\n      >\n        {{ \"rest-detail.btnCancel\" | translate }}\n      </button>\n\n      <button nbButton status=\"primary\" (click)=\"editEntity()\">\n        {{ \"rest-detail.btnEdit\" | translate }}\n      </button>\n    </div>\n  </nb-card-footer>\n</nb-card>\n", styles: ["b{margin-right:20px}.belongTo-link{color:#598bff!important}.belongTo-link:hover{text-decoration:underline!important;cursor:pointer}img{max-width:300px;max-height:200px}:host nb-tab{padding:1.25rem}.rest-item-align{margin-right:5px}\n"], components: [{ type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1$1.NbListComponent, selector: "nb-list", inputs: ["role"] }, { type: i1$1.NbListItemComponent, selector: "nb-list-item", inputs: ["role"] }, { type: i3.CngHtmlCompilerComponent, selector: "cng-html-compiler", inputs: ["template", "componentClass", "imports"] }, { type: i1$1.NbCheckboxComponent, selector: "nb-checkbox", inputs: ["status", "checked", "disabled", "indeterminate"], outputs: ["checkedChange"] }, { type: i1$1.NbTreeGridComponent, selector: "table[nbTreeGrid]", inputs: ["levelPadding", "nbTreeGrid", "equalColumnsWidth"] }, { type: i1$1.NbTreeGridRowComponent, selector: "tr[nbTreeGridRow]", inputs: ["doubleClickDelay", "clickToToggle"] }, { type: FsIconCComponent, selector: "ngx-fs-icon", inputs: ["expanded", "place"] }, { type: RestResourceDetailComponent, selector: "ngx-rest-resource-detail", inputs: ["resource", "ID", "ressourceName", "container", "style"] }, { type: i1$1.NbTabsetComponent, selector: "nb-tabset", inputs: ["fullWidth", "routeParam"], outputs: ["changeTab"] }, { type: i1$1.NbTabComponent, selector: "nb-tab", inputs: ["badgeStatus", "badgeDot", "disabled", "responsive", "active", "lazyLoad", "tabTitle", "tabId", "tabIcon", "route", "badgeText", "badgePosition"] }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i1$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1$1.NbTooltipDirective, selector: "[nbTooltip]", inputs: ["nbTooltipPlacement", "nbTooltipTrigger", "nbTooltipOffset", "nbTooltipAdjustment", "nbTooltipClass", "nbTooltipIcon", "nbTooltipStatus", "nbTooltip"], outputs: ["nbTooltipShowStateChange"], exportAs: ["nbTooltip"] }, { type: i1$1.NbTreeGridRowDefDirective, selector: "[nbTreeGridRowDef]", inputs: ["nbTreeGridRowDefColumns"] }, { type: i1$1.NbTreeGridColumnDefDirective, selector: "[nbTreeGridColumnDef]", inputs: ["nbTreeGridColumnDef", "hideOn", "showOn"] }, { type: i1$1.NbTreeGridCellDefDirective, selector: "[nbTreeGridCellDef]" }, { type: i1$1.NbTreeGridCellDirective, selector: "td[nbTreeGridCell]" }], pipes: { "titlecase": i8.TitleCasePipe, "keyvalue": i8.KeyValuePipe, "date": i8.DatePipe, "translate": i1$4.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceDetailComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ngx-rest-resource-detail",
                    templateUrl: "./rest-resource-detail.component.html",
                    styleUrls: ["./rest-resource-detail.component.scss"],
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: RestResourceService }, { type: RestAdminConfigService }, { type: i1.Router }, { type: i1$1.NbTreeGridDataSourceBuilder }, { type: RestLangService }]; }, propDecorators: { resource: [{
                type: Input
            }], ID: [{
                type: Input
            }], ressourceName: [{
                type: Input
            }], container: [{
                type: Input
            }], style: [{
                type: Input
            }] } });

class RestResourceDeleteComponent {
    constructor(ref, serviceRestResource) {
        this.ref = ref;
        this.serviceRestResource = serviceRestResource;
        this.isSubmit = false;
    }
    dismiss(val = false) {
        this.ref.close(val);
    }
    delete() {
        this.isSubmit = true;
        this.serviceRestResource
            .deleteResources(this.listConfig, this.datas.id)
            .subscribe(() => {
            this.isSubmit = false;
            this.dismiss(true);
        }, (err) => {
            this.isSubmit = false;
            console.log(err);
        });
    }
}
RestResourceDeleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceDeleteComponent, deps: [{ token: i1$1.NbDialogRef }, { token: RestResourceService }], target: i0.ɵɵFactoryTarget.Component });
RestResourceDeleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestResourceDeleteComponent, selector: "ngx-rest-resource-delete", inputs: { datas: "datas", title: "title", listConfig: "listConfig" }, ngImport: i0, template: "<nb-card>\n  <nb-card-header>{{ title }}</nb-card-header>\n  <nb-card-body> Voulez vous vraiment le supprimer? </nb-card-body>\n  <nb-card-footer>\n    <button\n      style=\"margin-right: 10px\"\n      nbButton\n      hero\n      status=\"primary\"\n      (click)=\"dismiss()\"\n    >\n      Non\n    </button>\n\n    <button\n      nbButton\n      status=\"danger\"\n      size=\"medium\"\n      (click)=\"delete()\"\n      [nbSpinner]=\"isSubmit\"\n      nbSpinnerStatus=\"danger\"\n      nbSpinnerMessage=\"\"\n    >\n      Oui\n    </button>\n  </nb-card-footer>\n</nb-card>\n", styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host nb-card{max-width:600px;max-height:500px}.nb-theme-dark :host nb-card{max-width:600px;max-height:500px}.nb-theme-cosmic :host nb-card{max-width:600px;max-height:500px}.nb-theme-corporate :host nb-card{max-width:600px;max-height:500px}\n"], components: [{ type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i1$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i1$1.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceDeleteComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ngx-rest-resource-delete",
                    templateUrl: "./rest-resource-delete.component.html",
                    styleUrls: ["./rest-resource-delete.component.scss"],
                }]
        }], ctorParameters: function () { return [{ type: i1$1.NbDialogRef }, { type: RestResourceService }]; }, propDecorators: { datas: [{
                type: Input
            }], title: [{
                type: Input
            }], listConfig: [{
                type: Input
            }] } });

class RestResourceListComponent {
    constructor(serviceRestConfig, serviceRestResources, http, dialogService, activatedRoute, router, nbMenuService, exportService) {
        this.serviceRestConfig = serviceRestConfig;
        this.serviceRestResources = serviceRestResources;
        this.http = http;
        this.dialogService = dialogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.nbMenuService = nbMenuService;
        this.exportService = exportService;
        this.alphabelt = ALPHABET;
        this.isFetching = true;
        this.ressourceName = "";
        this.filterBy = "";
        this.filterOperator = FILTER_OPERATORS;
        this.exportAsConfig = {
            type: "png",
            elementId: "myTableElementId", // the id of html/table element
        };
        this.searchItems = [];
        this.searchItem = "";
        this.items = [
            { title: "All formats" },
            { title: "CSV" },
            { title: "EXCEL" },
            { title: "PDF" },
        ];
        this.perPagesOptions = [
            { title: "5", value: 5 },
            { title: "10", value: 10 },
            { title: "20", value: 20 },
            { title: "50", value: 50 },
            { title: "100", value: 100 },
        ];
        this.ressourceName =
            this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path.split("-")[0];
        this.resource = this.serviceRestConfig.getSpecificResource(this.ressourceName);
    }
    ngOnInit() {
        if (this.resource.listConfig.searchFilter) {
            this.searchItems.push({
                field: "",
                operator: "",
                terms: "",
            });
        }
        this.currentPerPage = this.resource.listConfig.perPage;
        this.settings = {
            hideSubHeader: this.resource.listConfig.hideAddSubHeader,
            actions: {
                position: "right",
                custom: [
                    {
                        name: "detail",
                        title: "<i class='nb-compose'></i>",
                    },
                    {
                        name: "delete",
                        title: "<i  class='nb-trash text-danger' ></i> ",
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
            // edit: {
            //   editButtonContent: '<i class="nb-edit"></i>',
            //   saveButtonContent: '<i class="nb-checkmark"></i>',
            //   cancelButtonContent: '<i class="nb-close"></i>',
            // },
            // delete: {
            //   deleteButtonContent: '<i  class="nb-trash"></i>',
            //   confirmDelete: true,
            // },
        };
        this.getList();
        this.source.onChanged().subscribe((e) => {
            setTimeout(() => {
                this.isFetching = false;
            });
        });
        this.nbMenuService
            .onItemClick()
            .pipe(filter(({ tag }) => tag === "my-context"), map(({ item: { title } }) => title))
            .subscribe((title) => {
            switch (title) {
                case "EXCEL":
                    this.exportToExcel();
                    break;
                case "PDF":
                    this.exportToPdf();
                    break;
                case "CSV":
                    this.exportToCsv();
                    break;
                default:
                    this.exportAll();
                    break;
            }
        });
    }
    onDeleteConfirm(event) {
        const dialog = this.dialogService.open(RestResourceDeleteComponent, {
            context: {
                datas: event.data,
                title: "SUPPRESSION",
                listConfig: this.resource.listConfig,
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
        this.router.navigate([
            `/admin/${this.ressourceName}-detail`,
            event.data.id,
        ]);
    }
    createMatTableColumns() {
        const colunms = {};
        this.resource.fields
            .filter((item) => this.resource.listConfig.columns.includes(item.name))
            .forEach((elt) => {
            colunms[elt.name] = {
                title: elt.label,
                type: "custom",
                filter: false,
                addable: true,
                valuePrepareFunction: (cell, row) => ({
                    restField: elt,
                    cell,
                    row,
                }),
                editor: {
                    type: "custom",
                    component: RestResourceEditorFieldsComponent,
                },
                renderComponent: RestResourceListFieldComponent,
            };
        });
        return colunms;
    }
    getList(page = null, perPage = null) {
        if (page) {
            this.resource.queryParams = Object.assign(Object.assign({}, this.resource.queryParams), { page });
        }
        if (perPage) {
            this.resource.queryParams = Object.assign(Object.assign({}, this.resource.queryParams), { per_page: perPage });
        }
        this.source = new ServerDataSource(this.http, {
            endPoint: this.serviceRestConfig.restBaseUrl +
                "/" +
                this.resource.listConfig.api +
                "?" +
                Object.keys(this.resource.listConfig.queryParams)
                    .reduce((cumul, item) => cumul +
                    item +
                    "=" +
                    this.resource.listConfig.queryParams[item] +
                    ",", "")
                    .slice(0, -1),
            dataKey: "data",
            pagerPageKey: "page",
            pagerLimitKey: "per_page",
            totalKey: "total",
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
                            [item["saveRelatedIdName"]]: item[item["saveRelatedIdName"]],
                            [item["saveResourceIdName"]]: response.id,
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
            case "delete":
                this.onDeleteConfirm(event);
                break;
            case "detail":
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
                { A: "Rest Excel export" },
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
            this.exportService.exportToExcel(edata, "rest_file_excel");
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
            this.exportService.exportToPdf(header, customData, "rest_file_pdf", fileTitle);
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
            this.exportService.exportToCsv(header, customData, "rest_file_csv");
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
            data: [{ A: "Rest Excel export" }, sheetHeader],
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
    selectFilterBy(value, index) {
        this.searchItems[index].field = value;
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
        this.searchItems.push({ field: "", operator: "", terms: "" });
    }
    removeFieldSearch(index) {
        this.searchItems.splice(index, 1);
    }
    startSearch() {
        const params = {};
        let search = "";
        this.searchItems.forEach((element) => {
            if (element.field != "" && element.terms != "") {
                if (element.operator != "=") {
                    params[element.field + "-" + element.operator] = `${element.terms}`;
                }
                else {
                    params[element.field] = `${element.terms}`;
                }
            }
        });
        search = Object.keys(this.resource.listConfig.queryParams)
            .reduce((cumul, item) => cumul + item + "=" + this.resource.listConfig.queryParams[item] + ",", "")
            .slice(0, -1);
        if (search != "") {
            search += "&";
        }
        search += Object.keys(params)
            .reduce((cumul, item) => cumul + item + "=" + params[item] + "&", "")
            .slice(0, -1);
        // console.log(search);
        this.source = new ServerDataSource(this.http, {
            endPoint: this.serviceRestConfig.restBaseUrl +
                "/" +
                this.resource.listConfig.api +
                "?" +
                search,
            dataKey: "data",
            pagerPageKey: "page",
            pagerLimitKey: "per_page",
            totalKey: "total",
            filterFieldKey: `#_include#`,
        });
    }
}
RestResourceListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceListComponent, deps: [{ token: RestAdminConfigService }, { token: RestResourceService }, { token: i1$3.HttpClient }, { token: i1$1.NbDialogService }, { token: i1.ActivatedRoute }, { token: i1.Router }, { token: i1$1.NbMenuService }, { token: RestExportService }], target: i0.ɵɵFactoryTarget.Component });
RestResourceListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestResourceListComponent, selector: "ngx-rest-resource-list", inputs: { resource: "resource" }, viewQueries: [{ propertyName: "search", first: true, predicate: ["search"], descendants: true }], ngImport: i0, template: "<nb-card status=\"success\">\n  <nb-card-header>\n    <div class=\"row\">\n      <div class=\"col-10\">\n        {{ this.resource.listConfig.title }}\n      </div>\n\n      <div class=\"col-1\"></div>\n      <div class=\"col-1\" style=\"display: flex\">\n        <button nbButton ghost status=\"control\" (click)=\"addNewEntity()\">\n          <nb-icon icon=\"plus-circle\"></nb-icon>\n        </button>\n        <button\n          nbButton\n          [nbContextMenu]=\"items\"\n          nbContextMenuTag=\"my-context\"\n          ghost\n          status=\"control\"\n        >\n          <nb-icon icon=\"menu\"></nb-icon>\n        </button>\n\n        <!-- <button\n          nbButton\n          status=\"primary\"\n          [nbContextMenu]=\"items\"\n          nbContextMenuTag=\"my-context\"\n        >\n          {{ \"rest-list.export\" | translate }}\n        </button> -->\n      </div>\n    </div>\n  </nb-card-header>\n\n  <nb-card-body\n    [nbSpinner]=\"isFetching\"\n    nbSpinnerSize=\"large\"\n    nbSpinnerStatus=\"primary\"\n  >\n    <!-- Rest-search implement -->\n    <div class=\"row mb-5\" *ngIf=\"this.resource.listConfig.searchFilter\">\n      <ng-container\n        *ngIf=\"this.resource.listConfig.searchFilter.filterBy.length > 0\"\n      >\n        <ng-container *ngFor=\"let search of searchItems; let index = index\">\n          <div class=\"col-lg-3 col-md-6 col-xs-12 input-space\">\n            <!-- Select with filter by -->\n            <nb-select\n              [placeholder]=\"'rest-list.filterPlaceholder' | translate\"\n              fullWidth\n              (selectedChange)=\"selectFilterBy($event, index)\"\n            >\n              <nb-option\n                *ngFor=\"\n                  let filter of this.resource.listConfig.searchFilter.filterBy\n                \"\n                [value]=\"filter\"\n                >{{ filter | titlecase }}</nb-option\n              >\n            </nb-select>\n          </div>\n\n          <div class=\"col-lg-3 col-md-6 col-xs-12 input-space\">\n            <nb-select\n              [placeholder]=\"'rest-list.operator' | translate\"\n              fullWidth\n              (selectedChange)=\"selectOperator($event, index)\"\n            >\n              <nb-option\n                *ngFor=\"let operator of filterOperator\"\n                [value]=\"operator.value\"\n                >{{ operator.name | translate }}\n              </nb-option>\n            </nb-select>\n          </div>\n          <div\n            class=\"col-lg-4 col-md-12 col-xs-12 input-space\"\n            [ngClass]=\"{\n              'col-12': this.resource.listConfig.searchFilter == null\n            }\"\n          >\n            <input\n              nbInput\n              (input)=\"onFilter($event.target, index)\"\n              fullWidth\n              [placeholder]=\"'rest-list.searchPlaceholder' | translate\"\n              type=\"text\"\n            />\n          </div>\n          <div\n            class=\"col-lg-1 col-md-6 col-xs-6 input-space\"\n            *ngIf=\"index == 0\"\n          >\n            <button nbButton fullWidth status=\"primary\" (click)=\"startSearch()\">\n              <nb-icon icon=\"search-outline\"></nb-icon>\n            </button>\n          </div>\n          <div\n            class=\"col-lg-1 col-md-6 col-xs-6 input-space\"\n            *ngIf=\"index == 0; else elseBlock\"\n          >\n            <button\n              nbButton\n              fullWidth\n              status=\"primary\"\n              (click)=\"addFieldSearch()\"\n            >\n              <nb-icon icon=\"plus-outline\"></nb-icon>\n            </button>\n          </div>\n          <ng-template #elseBlock>\n            <div class=\"col-lg-1 col-md-6 col-xs-6 input-space\">\n              <button\n                nbButton\n                fullWidth\n                status=\"danger\"\n                (click)=\"removeFieldSearch(index)\"\n              >\n                <nb-icon icon=\"minus-outline\"></nb-icon>\n              </button>\n            </div>\n          </ng-template>\n        </ng-container>\n      </ng-container>\n    </div>\n\n    <ng2-smart-table\n      [settings]=\"settings\"\n      [source]=\"source\"\n      (deleteConfirm)=\"onDeleteConfirm($event)\"\n      (createConfirm)=\"onCreateConfirm($event)\"\n      (userRowSelect)=\"detailEntity($event)\"\n      (custom)=\"onCustom($event)\"\n    >\n    </ng2-smart-table>\n\n    <div\n      class=\"row align-items-center justify-content-end\"\n      style=\"margin-top: 1rem\"\n    >\n      <label class=\"label mx-2\">{{ \"options.per_page\" | translate }}</label>\n      <nb-select\n        [placeholder]=\"resource.listConfig.perPage.toString()\"\n        [(selected)]=\"currentPerPage\"\n      >\n        <nb-option\n          *ngFor=\"let perPage of perPagesOptions\"\n          (click)=\"setPager(perPage.value)\"\n          value=\"perPage.value\"\n          >{{ perPage.title }}</nb-option\n        >\n      </nb-select>\n    </div>\n  </nb-card-body>\n</nb-card>\n", styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host nb-card-body{display:block}.nb-theme-default :host nb-card-body button{width:100%;margin-bottom:2rem;display:block}.nb-theme-default :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-default :host .result-from-dialog{flex-direction:column}.nb-theme-default :host .form-input-card nb-card-body{display:block}@media (max-width: 1199.98px){.nb-theme-default :host button{padding:.8rem}}@media (max-width: 575.98px){.nb-theme-default :host button{padding:.75rem}}.nb-theme-dark :host nb-card-body{display:block}.nb-theme-dark :host nb-card-body button{width:100%;margin-bottom:2rem;display:block}.nb-theme-dark :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-dark :host .result-from-dialog{flex-direction:column}.nb-theme-dark :host .form-input-card nb-card-body{display:block}@media (max-width: 1199.98px){.nb-theme-dark :host button{padding:.8rem}}@media (max-width: 575.98px){.nb-theme-dark :host button{padding:.75rem}}.nb-theme-cosmic :host nb-card-body{display:block}.nb-theme-cosmic :host nb-card-body button{width:100%;margin-bottom:2rem;display:block}.nb-theme-cosmic :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-cosmic :host .result-from-dialog{flex-direction:column}.nb-theme-cosmic :host .form-input-card nb-card-body{display:block}@media (max-width: 1199.98px){.nb-theme-cosmic :host button{padding:.8rem}}@media (max-width: 575.98px){.nb-theme-cosmic :host button{padding:.75rem}}.nb-theme-corporate :host nb-card-body{display:block}.nb-theme-corporate :host nb-card-body button{width:100%;margin-bottom:2rem;display:block}.nb-theme-corporate :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-corporate :host .result-from-dialog{flex-direction:column}.nb-theme-corporate :host .form-input-card nb-card-body{display:block}@media (max-width: 1199.98px){.nb-theme-corporate :host button{padding:.8rem}}@media (max-width: 575.98px){.nb-theme-corporate :host button{padding:.75rem}}::ng-deep ng2-st-tbody-edit-delete{display:none;height:0!important}::ng-deep ng2-st-tbody-custom{display:flex;text-align:center}.input-space{margin-top:1rem}.nb-theme-default ng2-smart-table th.ng2-smart-actions-title-add a{background-color:#00d68f!important;border-bottom-width:0;border-bottom-color:#00d68f!important;color:#fff}\n"], components: [{ type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }, { type: i1$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1$1.NbSelectComponent, selector: "nb-select", inputs: ["size", "status", "shape", "appearance", "placeholder", "optionsOverlayOffset", "scrollStrategy", "outline", "filled", "hero", "disabled", "fullWidth", "compareWith", "selected", "multiple", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }, { type: i1$1.NbOptionComponent, selector: "nb-option", inputs: ["disabled", "value"], outputs: ["selectionChange"] }, { type: i9.Ng2SmartTableComponent, selector: "ng2-smart-table", inputs: ["settings", "source"], outputs: ["rowSelect", "rowDeselect", "userRowSelect", "delete", "edit", "create", "custom", "deleteConfirm", "editConfirm", "createConfirm", "rowHover"] }], directives: [{ type: i1$1.NbContextMenuDirective, selector: "[nbContextMenu]", inputs: ["nbContextMenuAdjustment", "nbContextMenuTrigger", "nbContextMenuPlacement", "nbContextMenuTag", "nbContextMenu", "nbContextMenuClass"] }, { type: i1$1.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }, { type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i8.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1$1.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }], pipes: { "translate": i1$4.TranslatePipe, "titlecase": i8.TitleCasePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ngx-rest-resource-list",
                    templateUrl: "./rest-resource-list.component.html",
                    styleUrls: ["./rest-resource-list.component.scss"],
                }]
        }], ctorParameters: function () { return [{ type: RestAdminConfigService }, { type: RestResourceService }, { type: i1$3.HttpClient }, { type: i1$1.NbDialogService }, { type: i1.ActivatedRoute }, { type: i1.Router }, { type: i1$1.NbMenuService }, { type: RestExportService }]; }, propDecorators: { resource: [{
                type: Input
            }], search: [{
                type: ViewChild,
                args: ["search"]
            }] } });

class RestAdminConfigService {
    constructor(restConfig) {
        this.restConfig = restConfig;
        this.components = [];
        this.defaultLanguage = [
            { text: "Anglais", value: "en" },
            { text: "Français", value: "fr" },
        ];
        this._restResources = restConfig.resources;
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
    get restPathFileTranslate() {
        return this.restConfig.translate
            ? this.restConfig.translate.filePath
            : "assets/i18n/";
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
                                link: "admin/" + item.name.toLowerCase() + "-list",
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
                                link: "admin/" + item.name.toLowerCase() + "-list",
                            });
                        }
                        break;
                    case TYPE_GROUP.MENU:
                        if (Array.isArray(menus_group[item.listConfig.group.name])) {
                            menus_group[item.listConfig.group.name][0].children.push({
                                title: item.name,
                                link: "admin/" + item.name.toLowerCase() + "-list",
                                icon: item.icon,
                            });
                        }
                        else {
                            menus_group[item.listConfig.group.name] = [
                                {
                                    title: item.listConfig.group.name,
                                    icon: item.listConfig.group.icon,
                                    children: [
                                        {
                                            title: item.name,
                                            link: "admin/" + item.name.toLowerCase() + "-list",
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
                                link: "admin/" + item.name.toLowerCase() + "-list",
                            });
                        else {
                            menus_group[TYPE_GROUP.DEFAULT] = [];
                            menus_group[TYPE_GROUP.DEFAULT].push({
                                title: item.name,
                                link: "admin/" + item.name.toLowerCase() + "-list",
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
                        link: "admin/" + item.name.toLowerCase() + "-list",
                    });
                else {
                    menus_group[TYPE_GROUP.DEFAULT] = [];
                    menus_group[TYPE_GROUP.DEFAULT].push({
                        title: item.name,
                        link: "admin/" + item.name.toLowerCase() + "-list",
                        icon: item.icon,
                    });
                }
            }
        });
        let menus_test = [];
        let priorities = groupsName
            .sort((a, b) => a.priority - b.priority)
            .reverse();
        priorities = _.uniqBy(priorities, "name");
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
                        path: "admin/" + rest.name.toLowerCase() + "-list",
                        component: RestResourceListComponent,
                        // data: {
                        //   ngxPermissions: {
                        //     only: rest.permissions,
                        //   },
                        // },
                        canActivate: [AuthGuard],
                    },
                    {
                        path: "admin/" + rest.name.toLowerCase() + "-add",
                        component: RestResourceAddComponent,
                        // data: {
                        //   ngxPermissions: {
                        //     only: rest.permissions,
                        //   },
                        // },
                        canActivate: [AuthGuard],
                    },
                    {
                        path: "admin/" + rest.name.toLowerCase() + "-edit/:id",
                        component: RestResourceAddComponent,
                        // data: {
                        //   ngxPermissions: {
                        //     only: rest.permissions,
                        //   },
                        // },
                        canActivate: [AuthGuard],
                    },
                    {
                        path: "admin/" + rest.name.toLowerCase() + "-detail/:id",
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
                    path: "admin/" + rest.name.toLowerCase() + "-list",
                    data: {
                        ngxPermissions: {
                            only: rest.permissions,
                        },
                    },
                    component: RestResourceListComponent,
                },
                {
                    path: "admin/" + rest.name.toLowerCase() + "-add",
                    data: {
                        ngxPermissions: {
                            only: rest.permissions,
                        },
                    },
                    component: RestResourceAddComponent,
                },
                {
                    path: "admin/" + rest.name.toLowerCase() + "-edit/:id",
                    data: {
                        ngxPermissions: {
                            only: rest.permissions,
                        },
                    },
                    component: RestResourceAddComponent,
                },
                {
                    path: "admin/" + rest.name.toLowerCase() + "-detail/:id",
                    data: {
                        ngxPermissions: {
                            only: rest.permissions,
                        },
                    },
                    component: RestResourceDetailComponent,
                },
            ];
        }, []);
    }
}
RestAdminConfigService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestAdminConfigService, deps: [{ token: "restConfig" }], target: i0.ɵɵFactoryTarget.Injectable });
RestAdminConfigService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestAdminConfigService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestAdminConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ["restConfig"]
                }] }]; } });

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
                value: "default",
                name: "Light",
            },
            {
                value: "dark",
                name: "Dark",
            },
            {
                value: "cosmic",
                name: "Cosmic",
            },
            {
                value: "corporate",
                name: "Corporate",
            },
        ];
        this.currentTheme = "default";
        this.appLanguage = [];
        this.currentLang = "";
        this.userMenu = [{ title: "Déconnexion" }];
    }
    ngOnInit() {
        this.currentTheme = this.themeService.currentTheme;
        this.appLanguage = this.langService.getLanguages();
        this.currentLang = this.langService.selected;
        const authApp = JSON.parse(localStorage.getItem(GLOBALS.AUTH_APP_TOKEN));
        if (authApp && authApp.value) {
            this.httpClient
                .get(`${this.serviceRestAdmin.restBaseUrl}/users/me`)
                .subscribe((resp) => {
                const user = {
                    name: resp.original.full_name,
                    picture: resp.original.infos.logo,
                };
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
            .pipe(filter(({ tag }) => tag === "my-context-menu"), map(({ item: { title } }) => title))
            .subscribe((title) => {
            switch (title) {
                case "Déconnexion":
                    this.httpClient
                        .post(`${this.serviceRestAdmin.restBaseUrl}/auth/logout`, {})
                        .subscribe((resp) => {
                        localStorage.removeItem(GLOBALS.AUTH_APP_TOKEN);
                        this.router.navigateByUrl("/auth/login");
                        this.isAuth = false;
                    });
                    break;
                default:
                    console.log("Non pris en charge");
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
        this.sidebarService.toggle(true, "menu-sidebar");
        this.layoutService.changeLayoutSize();
        return false;
    }
    navigateHome() {
        this.menuService.navigateHome();
        return false;
    }
    signin() {
        this.router.navigateByUrl("/auth/login");
    }
    sigout() {
        this.authService.logout("email");
    }
    changeLang(event) {
        this.langService.setLanguage(event);
    }
}
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HeaderComponent, deps: [{ token: i1$1.NbSidebarService }, { token: i1$1.NbMenuService }, { token: i1$1.NbThemeService }, { token: LayoutService }, { token: i1$1.NbMediaBreakpointsService }, { token: RestAdminConfigService }, { token: i1$2.NbAuthService }, { token: i1.Router }, { token: RestLangService }, { token: i1$3.HttpClient }], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: HeaderComponent, selector: "ngx-header", ngImport: i0, template: "<div class=\"header-container\">\n  <div class=\"logo-container\">\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"sidebar-toggle\">\n      <nb-icon icon=\"menu-2-outline\"></nb-icon>\n    </a>\n    <a class=\"logo\" href=\"#\" (click)=\"navigateHome()\"\n      ><span>{{ serviceRestAdmin.siteName }}</span></a\n    >\n  </div>\n  <nb-select\n    [selected]=\"currentTheme\"\n    (selectedChange)=\"changeTheme($event)\"\n    status=\"primary\"\n  >\n    <nb-option *ngFor=\"let theme of themes\" [value]=\"theme.value\">\n      {{ theme.name }}</nb-option\n    >\n  </nb-select>\n</div>\n\n<div class=\"header-container\">\n  <nb-select\n    [selected]=\"currentLang\"\n    (selectedChange)=\"changeLang($event)\"\n    status=\"primary\"\n  >\n    <nb-option *ngFor=\"let lang of appLanguage\" [value]=\"lang.value\">\n      {{ lang.value | uppercase }}</nb-option\n    >\n  </nb-select>\n\n  <nb-actions size=\"small\">\n    <!-- <nb-action class=\"control-item\">\n      <nb-search type=\"rotate-layout\"></nb-search>\n    </nb-action> -->\n\n    <nb-action class=\"user-action\" *nbIsGranted=\"['view', 'user']\">\n      <nb-user\n        [nbContextMenu]=\"userMenu\"\n        nbContextMenuTag=\"my-context-menu\"\n        [name]=\"user?.name\"\n        [picture]=\"user?.picture\"\n      >\n      </nb-user>\n    </nb-action>\n\n    <!-- <nb-action *ngIf=\"!isAuth\"\n      ><button nbButton (click)=\"signin()\" status=\"primary\">\n        Connexion\n      </button></nb-action\n    > -->\n  </nb-actions>\n</div>\n", styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host{display:flex;justify-content:space-between;width:100%}.nb-theme-default :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-default :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-default :host nb-user{cursor:pointer}.nb-theme-default :host ::ng-deep nb-search button{padding:0!important}.nb-theme-default :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-default :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-default :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-default :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-default :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-default :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-default :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-default :host .header-container .logo{border-right:1px solid #edf1f7}@media (max-width: 767.98px){.nb-theme-default :host .control-item{display:none}.nb-theme-default :host .user-action{border:none;padding:0}}@media (max-width: 575.98px){.nb-theme-default :host nb-select{display:none}}.nb-theme-dark :host{display:flex;justify-content:space-between;width:100%}.nb-theme-dark :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-dark :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-dark :host nb-user{cursor:pointer}.nb-theme-dark :host ::ng-deep nb-search button{padding:0!important}.nb-theme-dark :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-dark :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-dark :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-dark :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-dark :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-dark :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-dark :host .header-container .logo{border-left:1px solid #151a30}[dir=rtl] .nb-theme-dark :host .header-container .logo{border-right:1px solid #151a30}@media (max-width: 767.98px){.nb-theme-dark :host .control-item{display:none}.nb-theme-dark :host .user-action{border:none;padding:0}}@media (max-width: 575.98px){.nb-theme-dark :host nb-select{display:none}}.nb-theme-cosmic :host{display:flex;justify-content:space-between;width:100%}.nb-theme-cosmic :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-cosmic :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-cosmic :host nb-user{cursor:pointer}.nb-theme-cosmic :host ::ng-deep nb-search button{padding:0!important}.nb-theme-cosmic :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-cosmic :host .header-container .sidebar-toggle{text-decoration:none;color:#b4b4db}[dir=ltr] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-cosmic :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-cosmic :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-cosmic :host .header-container .logo{border-left:1px solid #1b1b38}[dir=rtl] .nb-theme-cosmic :host .header-container .logo{border-right:1px solid #1b1b38}@media (max-width: 767.98px){.nb-theme-cosmic :host .control-item{display:none}.nb-theme-cosmic :host .user-action{border:none;padding:0}}@media (max-width: 575.98px){.nb-theme-cosmic :host nb-select{display:none}}.nb-theme-corporate :host{display:flex;justify-content:space-between;width:100%}.nb-theme-corporate :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-corporate :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-corporate :host nb-user{cursor:pointer}.nb-theme-corporate :host ::ng-deep nb-search button{padding:0!important}.nb-theme-corporate :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-corporate :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-corporate :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-corporate :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-corporate :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-corporate :host .header-container .logo{border-right:1px solid #edf1f7}@media (max-width: 767.98px){.nb-theme-corporate :host .control-item{display:none}.nb-theme-corporate :host .user-action{border:none;padding:0}}@media (max-width: 575.98px){.nb-theme-corporate :host nb-select{display:none}}\n"], components: [{ type: i1$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i1$1.NbSelectComponent, selector: "nb-select", inputs: ["size", "status", "shape", "appearance", "placeholder", "optionsOverlayOffset", "scrollStrategy", "outline", "filled", "hero", "disabled", "fullWidth", "compareWith", "selected", "multiple", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }, { type: i1$1.NbOptionComponent, selector: "nb-option", inputs: ["disabled", "value"], outputs: ["selectionChange"] }, { type: i1$1.NbActionsComponent, selector: "nb-actions", inputs: ["size", "fullWidth"] }, { type: i1$1.NbActionComponent, selector: "nb-action", inputs: ["title", "badgeStatus", "disabled", "badgeDot", "link", "href", "icon", "badgeText", "badgePosition"] }, { type: i1$1.NbUserComponent, selector: "nb-user", inputs: ["name", "size", "shape", "badgeStatus", "picture", "showName", "showTitle", "showInitials", "onlyPicture", "title", "color", "badgeText", "badgePosition"] }], directives: [{ type: i8.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i9$1.NbIsGrantedDirective, selector: "[nbIsGranted]", inputs: ["nbIsGranted"] }, { type: i1$1.NbContextMenuDirective, selector: "[nbContextMenu]", inputs: ["nbContextMenuAdjustment", "nbContextMenuTrigger", "nbContextMenuPlacement", "nbContextMenuTag", "nbContextMenu", "nbContextMenuClass"] }], pipes: { "uppercase": i8.UpperCasePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ngx-header",
                    styleUrls: ["./header.component.scss"],
                    templateUrl: "./header.component.html",
                }]
        }], ctorParameters: function () { return [{ type: i1$1.NbSidebarService }, { type: i1$1.NbMenuService }, { type: i1$1.NbThemeService }, { type: LayoutService }, { type: i1$1.NbMediaBreakpointsService }, { type: RestAdminConfigService }, { type: i1$2.NbAuthService }, { type: i1.Router }, { type: RestLangService }, { type: i1$3.HttpClient }]; } });

class FooterComponent {
}
FooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: FooterComponent, selector: "ngx-footer", ngImport: i0, template: `
    <span class="created-by"> <b>ngx-admin</b> 2022 </span>
    <div class="socials">
      <a
        href="https://github.com/Foris-master/ngx-admin"
        target="_blank"
        class="ion ion-social-github"
      ></a>
    </div>
  `, isInline: true, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-default :host .socials{font-size:2rem}.nb-theme-default :host .socials a{padding:.4rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-default :host .socials a:hover{color:#222b45}@media (max-width: 575.98px){.nb-theme-default :host .socials{font-size:1.5rem}}.nb-theme-dark :host{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-dark :host .socials{font-size:2rem}.nb-theme-dark :host .socials a{padding:.4rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-dark :host .socials a:hover{color:#fff}@media (max-width: 575.98px){.nb-theme-dark :host .socials{font-size:1.5rem}}.nb-theme-cosmic :host{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-cosmic :host .socials{font-size:2rem}.nb-theme-cosmic :host .socials a{padding:.4rem;color:#b4b4db;transition:color ease-out .1s}.nb-theme-cosmic :host .socials a:hover{color:#fff}@media (max-width: 575.98px){.nb-theme-cosmic :host .socials{font-size:1.5rem}}.nb-theme-corporate :host{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-corporate :host .socials{font-size:2rem}.nb-theme-corporate :host .socials a{padding:.4rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-corporate :host .socials a:hover{color:#222b45}@media (max-width: 575.98px){.nb-theme-corporate :host .socials{font-size:1.5rem}}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ngx-footer",
                    styleUrls: ["./footer.component.scss"],
                    template: `
    <span class="created-by"> <b>ngx-admin</b> 2022 </span>
    <div class="socials">
      <a
        href="https://github.com/Foris-master/ngx-admin"
        target="_blank"
        class="ion ion-social-github"
      ></a>
    </div>
  `,
                }]
        }] });

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
SearchInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SearchInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SearchInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: SearchInputComponent, selector: "ngx-search-input", outputs: { search: "search" }, viewQueries: [{ propertyName: "input", first: true, predicate: ["input"], descendants: true, static: true }], ngImport: i0, template: `
    <i class="control-icon ion ion-ios-search"
       (click)="showInput()"></i>
    <input placeholder="Type your search request here..."
           #input
           [class.hidden]="!isInputShown"
           (blur)="hideInput()"
           (input)="onInput($event)">
  `, isInline: true, styles: [":host{display:flex;align-items:center}:host i.control-icon:before{font-size:2.3rem}:host i.control-icon:hover{cursor:pointer}:host input{border:none;outline:none;margin-left:1rem;width:15rem;transition:width .2s ease}:host input.hidden{width:0;margin:0}:host ::ng-deep search-input input{background:transparent}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SearchInputComponent, decorators: [{
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
        }], propDecorators: { input: [{
                type: ViewChild,
                args: ['input', { static: true }]
            }], search: [{
                type: Output
            }] } });

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
TinyMCEComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TinyMCEComponent, deps: [{ token: i0.ElementRef }, { token: i8.LocationStrategy }], target: i0.ɵɵFactoryTarget.Component });
TinyMCEComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: TinyMCEComponent, selector: "ngx-tiny-mce", outputs: { editorKeyup: "editorKeyup" }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TinyMCEComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-tiny-mce',
                    template: '',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i8.LocationStrategy }]; }, propDecorators: { editorKeyup: [{
                type: Output
            }] } });

class CapitalizePipe {
    transform(input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    }
}
CapitalizePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CapitalizePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
CapitalizePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CapitalizePipe, name: "ngxCapitalize" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CapitalizePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ngxCapitalize' }]
        }] });

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
PluralPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PluralPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
PluralPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PluralPipe, name: "ngxPlural" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PluralPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ngxPlural' }]
        }] });

class RoundPipe {
    transform(input) {
        return Math.round(input);
    }
}
RoundPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RoundPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
RoundPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RoundPipe, name: "ngxRound" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RoundPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ngxRound' }]
        }] });

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
TimingPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TimingPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
TimingPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TimingPipe, name: "timing" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TimingPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'timing' }]
        }] });

class NumberWithCommasPipe {
    transform(input) {
        return new Intl.NumberFormat().format(input);
    }
}
NumberWithCommasPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: NumberWithCommasPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
NumberWithCommasPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: NumberWithCommasPipe, name: "ngxNumberWithCommas" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: NumberWithCommasPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ngxNumberWithCommas' }]
        }] });

class OneColumnLayoutComponent {
}
OneColumnLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: OneColumnLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
OneColumnLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: OneColumnLayoutComponent, selector: "ngx-one-column-layout", ngImport: i0, template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `, isInline: true, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}\n"], components: [{ type: i1$1.NbLayoutComponent, selector: "nb-layout", inputs: ["center", "windowMode", "withScroll", "restoreScrollTop"] }, { type: i1$1.NbLayoutHeaderComponent, selector: "nb-layout-header", inputs: ["fixed", "subheader"] }, { type: HeaderComponent, selector: "ngx-header" }, { type: i1$1.NbSidebarComponent, selector: "nb-sidebar", inputs: ["compactedBreakpoints", "collapsedBreakpoints", "right", "left", "start", "end", "fixed", "containerFixed", "state", "responsive", "tag"], outputs: ["stateChange", "responsiveStateChange"] }, { type: i1$1.NbLayoutColumnComponent, selector: "nb-layout-column", inputs: ["left", "start"] }, { type: i1$1.NbLayoutFooterComponent, selector: "nb-layout-footer", inputs: ["fixed"] }, { type: FooterComponent, selector: "ngx-footer" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: OneColumnLayoutComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-one-column-layout',
                    styleUrls: ['./one-column.layout.scss'],
                    template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
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
        }] });

class TwoColumnsLayoutComponent {
}
TwoColumnsLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TwoColumnsLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TwoColumnsLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: TwoColumnsLayoutComponent, selector: "ngx-two-columns-layout", ngImport: i0, template: `
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
  `, isInline: true, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}\n"], components: [{ type: i1$1.NbLayoutComponent, selector: "nb-layout", inputs: ["center", "windowMode", "withScroll", "restoreScrollTop"] }, { type: i1$1.NbLayoutHeaderComponent, selector: "nb-layout-header", inputs: ["fixed", "subheader"] }, { type: HeaderComponent, selector: "ngx-header" }, { type: i1$1.NbSidebarComponent, selector: "nb-sidebar", inputs: ["compactedBreakpoints", "collapsedBreakpoints", "right", "left", "start", "end", "fixed", "containerFixed", "state", "responsive", "tag"], outputs: ["stateChange", "responsiveStateChange"] }, { type: i1$1.NbLayoutColumnComponent, selector: "nb-layout-column", inputs: ["left", "start"] }, { type: i1$1.NbLayoutFooterComponent, selector: "nb-layout-footer", inputs: ["fixed"] }, { type: FooterComponent, selector: "ngx-footer" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TwoColumnsLayoutComponent, decorators: [{
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
        }] });

class ThreeColumnsLayoutComponent {
}
ThreeColumnsLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ThreeColumnsLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ThreeColumnsLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: ThreeColumnsLayoutComponent, selector: "ngx-three-columns-layout", ngImport: i0, template: `
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
  `, isInline: true, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}\n"], components: [{ type: i1$1.NbLayoutComponent, selector: "nb-layout", inputs: ["center", "windowMode", "withScroll", "restoreScrollTop"] }, { type: i1$1.NbLayoutHeaderComponent, selector: "nb-layout-header", inputs: ["fixed", "subheader"] }, { type: HeaderComponent, selector: "ngx-header" }, { type: i1$1.NbSidebarComponent, selector: "nb-sidebar", inputs: ["compactedBreakpoints", "collapsedBreakpoints", "right", "left", "start", "end", "fixed", "containerFixed", "state", "responsive", "tag"], outputs: ["stateChange", "responsiveStateChange"] }, { type: i1$1.NbLayoutColumnComponent, selector: "nb-layout-column", inputs: ["left", "start"] }, { type: i1$1.NbLayoutFooterComponent, selector: "nb-layout-footer", inputs: ["fixed"] }, { type: FooterComponent, selector: "ngx-footer" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ThreeColumnsLayoutComponent, decorators: [{
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
        }] });

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
ThemeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ThemeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ThemeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ThemeModule, declarations: [HeaderComponent,
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
        TwoColumnsLayoutComponent] });
ThemeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ThemeModule, imports: [[CommonModule, ...NB_MODULES], CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ThemeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...NB_MODULES],
                    exports: [CommonModule, ...PIPES, ...COMPONENTS],
                    declarations: [...COMPONENTS, ...PIPES],
                }]
        }] });

class RestMainComponentComponent {
    constructor(serviceConfig, activatedRoute, restLangService, router) {
        this.serviceConfig = serviceConfig;
        this.activatedRoute = activatedRoute;
        this.restLangService = restLangService;
        this.router = router;
        this.menu = [...this.serviceConfig.generateMenus()];
    }
    ngOnInit() {
        this.restLangService.setInitialAppLanguage();
        // this.permissionsService.loadPermissions([]);
    }
}
RestMainComponentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestMainComponentComponent, deps: [{ token: RestAdminConfigService }, { token: i1.ActivatedRoute }, { token: RestLangService }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
RestMainComponentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestMainComponentComponent, selector: "ngx-rest-main-component", ngImport: i0, template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `, isInline: true, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}.nb-theme-dark :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}.nb-theme-cosmic :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}.nb-theme-corporate :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}\n"], components: [{ type: OneColumnLayoutComponent, selector: "ngx-one-column-layout" }, { type: i1$1.NbMenuComponent, selector: "nb-menu", inputs: ["autoCollapse", "tag", "items"] }], directives: [{ type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestMainComponentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ngx-rest-main-component",
                    styleUrls: ["./rest-main-component.component.scss"],
                    template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
                }]
        }], ctorParameters: function () { return [{ type: RestAdminConfigService }, { type: i1.ActivatedRoute }, { type: RestLangService }, { type: i1.Router }]; } });

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
HttpAuthInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HttpAuthInterceptor, deps: [{ token: i1$2.NbAuthService }, { token: i1$2.NbTokenStorage }], target: i0.ɵɵFactoryTarget.Injectable });
HttpAuthInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HttpAuthInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HttpAuthInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1$2.NbAuthService }, { type: i1$2.NbTokenStorage }]; } });

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
PaginationInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PaginationInterceptor, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PaginationInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PaginationInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PaginationInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

/** Passes HttpErrorResponse to application-wide error handler */
class HttpErrorInterceptor {
    constructor(injector, router) {
        this.injector = injector;
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(tap({
            error: (err) => {
                if (err instanceof HttpErrorResponse) {
                    // const appErrorHandler = this.injector.get(ErrorHandler);
                    // appErrorHandler.handleError(err);
                    switch (err.status) {
                        case 401:
                            this.router.navigateByUrl("/auth/login");
                            break;
                        default:
                            break;
                    }
                }
            },
        }));
    }
}
HttpErrorInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HttpErrorInterceptor, deps: [{ token: i0.Injector }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
HttpErrorInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HttpErrorInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HttpErrorInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }]; } });

function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}

class UserData {
}

class ElectricityData {
}

class SmartTableData {
}

class UserActivityData {
}

class OrdersChartData {
}

class ProfitChartData {
}

class TrafficListData {
}

class EarningData {
}

class OrdersProfitChartData {
}

class TrafficBarData {
}

class ProfitBarAnimationChartData {
}

class TemperatureHumidityData {
}

class SolarData {
}

class TrafficChartData {
}

class StatsBarData {
}

class CountryOrderData {
}

class StatsProgressBarData {
}

class VisitorsAnalyticsData {
}

class SecurityCamerasData {
}

class UserService extends UserData {
    constructor() {
        super(...arguments);
        this.time = new Date;
        this.users = {
            nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
            eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
            jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
            lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
            alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
            kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
        };
        this.types = {
            mobile: 'mobile',
            home: 'home',
            work: 'work',
        };
        this.contacts = [
            { user: this.users.nick, type: this.types.mobile },
            { user: this.users.eva, type: this.types.home },
            { user: this.users.jack, type: this.types.mobile },
            { user: this.users.lee, type: this.types.mobile },
            { user: this.users.alan, type: this.types.home },
            { user: this.users.kate, type: this.types.work },
        ];
        this.recentUsers = [
            { user: this.users.alan, type: this.types.home, time: this.time.setHours(21, 12) },
            { user: this.users.eva, type: this.types.home, time: this.time.setHours(17, 45) },
            { user: this.users.nick, type: this.types.mobile, time: this.time.setHours(5, 29) },
            { user: this.users.lee, type: this.types.mobile, time: this.time.setHours(11, 24) },
            { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(10, 45) },
            { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 42) },
            { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 31) },
            { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(8, 0) },
        ];
    }
    getUsers() {
        return of(this.users);
    }
    getContacts() {
        return of(this.contacts);
    }
    getRecentUsers() {
        return of(this.recentUsers);
    }
}
UserService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: UserService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
UserService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: UserService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: UserService, decorators: [{
            type: Injectable
        }] });

class ElectricityService extends ElectricityData {
    constructor() {
        super();
        this.listData = [
            {
                title: '2015',
                months: [
                    { month: 'Jan', delta: '0.97', down: true, kWatts: '816', cost: '97' },
                    { month: 'Feb', delta: '1.83', down: true, kWatts: '806', cost: '95' },
                    { month: 'Mar', delta: '0.64', down: true, kWatts: '803', cost: '94' },
                    { month: 'Apr', delta: '2.17', down: false, kWatts: '818', cost: '98' },
                    { month: 'May', delta: '1.32', down: true, kWatts: '809', cost: '96' },
                    { month: 'Jun', delta: '0.05', down: true, kWatts: '808', cost: '96' },
                    { month: 'Jul', delta: '1.39', down: false, kWatts: '815', cost: '97' },
                    { month: 'Aug', delta: '0.73', down: true, kWatts: '807', cost: '95' },
                    { month: 'Sept', delta: '2.61', down: true, kWatts: '792', cost: '92' },
                    { month: 'Oct', delta: '0.16', down: true, kWatts: '791', cost: '92' },
                    { month: 'Nov', delta: '1.71', down: true, kWatts: '786', cost: '89' },
                    { month: 'Dec', delta: '0.37', down: false, kWatts: '789', cost: '91' },
                ],
            },
            {
                title: '2016',
                active: true,
                months: [
                    { month: 'Jan', delta: '1.56', down: true, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.33', down: false, kWatts: '791', cost: '92' },
                    { month: 'Mar', delta: '0.62', down: true, kWatts: '790', cost: '92' },
                    { month: 'Apr', delta: '1.93', down: true, kWatts: '783', cost: '87' },
                    { month: 'May', delta: '2.52', down: true, kWatts: '771', cost: '83' },
                    { month: 'Jun', delta: '0.39', down: false, kWatts: '774', cost: '85' },
                    { month: 'Jul', delta: '1.61', down: true, kWatts: '767', cost: '81' },
                    { month: 'Aug', delta: '1.41', down: true, kWatts: '759', cost: '76' },
                    { month: 'Sept', delta: '1.03', down: true, kWatts: '752', cost: '74' },
                    { month: 'Oct', delta: '2.94', down: false, kWatts: '769', cost: '82' },
                    { month: 'Nov', delta: '0.26', down: true, kWatts: '767', cost: '81' },
                    { month: 'Dec', delta: '1.62', down: true, kWatts: '760', cost: '76' },
                ],
            },
            {
                title: '2017',
                months: [
                    { month: 'Jan', delta: '1.34', down: false, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.95', down: false, kWatts: '793', cost: '93' },
                    { month: 'Mar', delta: '0.25', down: true, kWatts: '791', cost: '92' },
                    { month: 'Apr', delta: '1.72', down: false, kWatts: '797', cost: '95' },
                    { month: 'May', delta: '2.62', down: true, kWatts: '786', cost: '90' },
                    { month: 'Jun', delta: '0.72', down: false, kWatts: '789', cost: '91' },
                    { month: 'Jul', delta: '0.78', down: true, kWatts: '784', cost: '89' },
                    { month: 'Aug', delta: '0.36', down: true, kWatts: '782', cost: '88' },
                    { month: 'Sept', delta: '0.55', down: false, kWatts: '787', cost: '90' },
                    { month: 'Oct', delta: '1.81', down: true, kWatts: '779', cost: '86' },
                    { month: 'Nov', delta: '1.12', down: true, kWatts: '774', cost: '84' },
                    { month: 'Dec', delta: '0.52', down: false, kWatts: '776', cost: '95' },
                ],
            },
        ];
        this.chartPoints = [
            490, 490, 495, 500,
            505, 510, 520, 530,
            550, 580, 630, 720,
            800, 840, 860, 870,
            870, 860, 840, 800,
            720, 200, 145, 130,
            130, 145, 200, 570,
            635, 660, 670, 670,
            660, 630, 580, 460,
            380, 350, 340, 340,
            340, 340, 340, 340,
            340, 340, 340,
        ];
        this.chartData = this.chartPoints.map((p, index) => ({
            label: (index % 5 === 3) ? `${Math.round(index / 5)}` : '',
            value: p,
        }));
    }
    getListData() {
        return of(this.listData);
    }
    getChartData() {
        return of(this.chartData);
    }
}
ElectricityService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ElectricityService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ElectricityService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ElectricityService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ElectricityService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class SmartTableService extends SmartTableData {
    constructor() {
        super(...arguments);
        this.data = [{
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
            }, {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
            }, {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
            }, {
                id: 4,
                firstName: 'John',
                lastName: 'Snow',
                username: '@snow',
                email: 'snow@gmail.com',
                age: '20',
            }, {
                id: 5,
                firstName: 'Jack',
                lastName: 'Sparrow',
                username: '@jack',
                email: 'jack@yandex.ru',
                age: '30',
            }, {
                id: 6,
                firstName: 'Ann',
                lastName: 'Smith',
                username: '@ann',
                email: 'ann@gmail.com',
                age: '21',
            }, {
                id: 7,
                firstName: 'Barbara',
                lastName: 'Black',
                username: '@barbara',
                email: 'barbara@yandex.ru',
                age: '43',
            }, {
                id: 8,
                firstName: 'Sevan',
                lastName: 'Bagrat',
                username: '@sevan',
                email: 'sevan@outlook.com',
                age: '13',
            }, {
                id: 9,
                firstName: 'Ruben',
                lastName: 'Vardan',
                username: '@ruben',
                email: 'ruben@gmail.com',
                age: '22',
            }, {
                id: 10,
                firstName: 'Karen',
                lastName: 'Sevan',
                username: '@karen',
                email: 'karen@yandex.ru',
                age: '33',
            }, {
                id: 11,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mark',
                email: 'mark@gmail.com',
                age: '38',
            }, {
                id: 12,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@jacob',
                email: 'jacob@yandex.ru',
                age: '48',
            }, {
                id: 13,
                firstName: 'Haik',
                lastName: 'Hakob',
                username: '@haik',
                email: 'haik@outlook.com',
                age: '48',
            }, {
                id: 14,
                firstName: 'Garegin',
                lastName: 'Jirair',
                username: '@garegin',
                email: 'garegin@gmail.com',
                age: '40',
            }, {
                id: 15,
                firstName: 'Krikor',
                lastName: 'Bedros',
                username: '@krikor',
                email: 'krikor@yandex.ru',
                age: '32',
            }, {
                'id': 16,
                'firstName': 'Francisca',
                'lastName': 'Brady',
                'username': '@Gibson',
                'email': 'franciscagibson@comtours.com',
                'age': 11,
            }, {
                'id': 17,
                'firstName': 'Tillman',
                'lastName': 'Figueroa',
                'username': '@Snow',
                'email': 'tillmansnow@comtours.com',
                'age': 34,
            }, {
                'id': 18,
                'firstName': 'Jimenez',
                'lastName': 'Morris',
                'username': '@Bryant',
                'email': 'jimenezbryant@comtours.com',
                'age': 45,
            }, {
                'id': 19,
                'firstName': 'Sandoval',
                'lastName': 'Jacobson',
                'username': '@Mcbride',
                'email': 'sandovalmcbride@comtours.com',
                'age': 32,
            }, {
                'id': 20,
                'firstName': 'Griffin',
                'lastName': 'Torres',
                'username': '@Charles',
                'email': 'griffincharles@comtours.com',
                'age': 19,
            }, {
                'id': 21,
                'firstName': 'Cora',
                'lastName': 'Parker',
                'username': '@Caldwell',
                'email': 'coracaldwell@comtours.com',
                'age': 27,
            }, {
                'id': 22,
                'firstName': 'Cindy',
                'lastName': 'Bond',
                'username': '@Velez',
                'email': 'cindyvelez@comtours.com',
                'age': 24,
            }, {
                'id': 23,
                'firstName': 'Frieda',
                'lastName': 'Tyson',
                'username': '@Craig',
                'email': 'friedacraig@comtours.com',
                'age': 45,
            }, {
                'id': 24,
                'firstName': 'Cote',
                'lastName': 'Holcomb',
                'username': '@Rowe',
                'email': 'coterowe@comtours.com',
                'age': 20,
            }, {
                'id': 25,
                'firstName': 'Trujillo',
                'lastName': 'Mejia',
                'username': '@Valenzuela',
                'email': 'trujillovalenzuela@comtours.com',
                'age': 16,
            }, {
                'id': 26,
                'firstName': 'Pruitt',
                'lastName': 'Shepard',
                'username': '@Sloan',
                'email': 'pruittsloan@comtours.com',
                'age': 44,
            }, {
                'id': 27,
                'firstName': 'Sutton',
                'lastName': 'Ortega',
                'username': '@Black',
                'email': 'suttonblack@comtours.com',
                'age': 42,
            }, {
                'id': 28,
                'firstName': 'Marion',
                'lastName': 'Heath',
                'username': '@Espinoza',
                'email': 'marionespinoza@comtours.com',
                'age': 47,
            }, {
                'id': 29,
                'firstName': 'Newman',
                'lastName': 'Hicks',
                'username': '@Keith',
                'email': 'newmankeith@comtours.com',
                'age': 15,
            }, {
                'id': 30,
                'firstName': 'Boyle',
                'lastName': 'Larson',
                'username': '@Summers',
                'email': 'boylesummers@comtours.com',
                'age': 32,
            }, {
                'id': 31,
                'firstName': 'Haynes',
                'lastName': 'Vinson',
                'username': '@Mckenzie',
                'email': 'haynesmckenzie@comtours.com',
                'age': 15,
            }, {
                'id': 32,
                'firstName': 'Miller',
                'lastName': 'Acosta',
                'username': '@Young',
                'email': 'milleryoung@comtours.com',
                'age': 55,
            }, {
                'id': 33,
                'firstName': 'Johnston',
                'lastName': 'Brown',
                'username': '@Knight',
                'email': 'johnstonknight@comtours.com',
                'age': 29,
            }, {
                'id': 34,
                'firstName': 'Lena',
                'lastName': 'Pitts',
                'username': '@Forbes',
                'email': 'lenaforbes@comtours.com',
                'age': 25,
            }, {
                'id': 35,
                'firstName': 'Terrie',
                'lastName': 'Kennedy',
                'username': '@Branch',
                'email': 'terriebranch@comtours.com',
                'age': 37,
            }, {
                'id': 36,
                'firstName': 'Louise',
                'lastName': 'Aguirre',
                'username': '@Kirby',
                'email': 'louisekirby@comtours.com',
                'age': 44,
            }, {
                'id': 37,
                'firstName': 'David',
                'lastName': 'Patton',
                'username': '@Sanders',
                'email': 'davidsanders@comtours.com',
                'age': 26,
            }, {
                'id': 38,
                'firstName': 'Holden',
                'lastName': 'Barlow',
                'username': '@Mckinney',
                'email': 'holdenmckinney@comtours.com',
                'age': 11,
            }, {
                'id': 39,
                'firstName': 'Baker',
                'lastName': 'Rivera',
                'username': '@Montoya',
                'email': 'bakermontoya@comtours.com',
                'age': 47,
            }, {
                'id': 40,
                'firstName': 'Belinda',
                'lastName': 'Lloyd',
                'username': '@Calderon',
                'email': 'belindacalderon@comtours.com',
                'age': 21,
            }, {
                'id': 41,
                'firstName': 'Pearson',
                'lastName': 'Patrick',
                'username': '@Clements',
                'email': 'pearsonclements@comtours.com',
                'age': 42,
            }, {
                'id': 42,
                'firstName': 'Alyce',
                'lastName': 'Mckee',
                'username': '@Daugherty',
                'email': 'alycedaugherty@comtours.com',
                'age': 55,
            }, {
                'id': 43,
                'firstName': 'Valencia',
                'lastName': 'Spence',
                'username': '@Olsen',
                'email': 'valenciaolsen@comtours.com',
                'age': 20,
            }, {
                'id': 44,
                'firstName': 'Leach',
                'lastName': 'Holcomb',
                'username': '@Humphrey',
                'email': 'leachhumphrey@comtours.com',
                'age': 28,
            }, {
                'id': 45,
                'firstName': 'Moss',
                'lastName': 'Baxter',
                'username': '@Fitzpatrick',
                'email': 'mossfitzpatrick@comtours.com',
                'age': 51,
            }, {
                'id': 46,
                'firstName': 'Jeanne',
                'lastName': 'Cooke',
                'username': '@Ward',
                'email': 'jeanneward@comtours.com',
                'age': 59,
            }, {
                'id': 47,
                'firstName': 'Wilma',
                'lastName': 'Briggs',
                'username': '@Kidd',
                'email': 'wilmakidd@comtours.com',
                'age': 53,
            }, {
                'id': 48,
                'firstName': 'Beatrice',
                'lastName': 'Perry',
                'username': '@Gilbert',
                'email': 'beatricegilbert@comtours.com',
                'age': 39,
            }, {
                'id': 49,
                'firstName': 'Whitaker',
                'lastName': 'Hyde',
                'username': '@Mcdonald',
                'email': 'whitakermcdonald@comtours.com',
                'age': 35,
            }, {
                'id': 50,
                'firstName': 'Rebekah',
                'lastName': 'Duran',
                'username': '@Gross',
                'email': 'rebekahgross@comtours.com',
                'age': 40,
            }, {
                'id': 51,
                'firstName': 'Earline',
                'lastName': 'Mayer',
                'username': '@Woodward',
                'email': 'earlinewoodward@comtours.com',
                'age': 52,
            }, {
                'id': 52,
                'firstName': 'Moran',
                'lastName': 'Baxter',
                'username': '@Johns',
                'email': 'moranjohns@comtours.com',
                'age': 20,
            }, {
                'id': 53,
                'firstName': 'Nanette',
                'lastName': 'Hubbard',
                'username': '@Cooke',
                'email': 'nanettecooke@comtours.com',
                'age': 55,
            }, {
                'id': 54,
                'firstName': 'Dalton',
                'lastName': 'Walker',
                'username': '@Hendricks',
                'email': 'daltonhendricks@comtours.com',
                'age': 25,
            }, {
                'id': 55,
                'firstName': 'Bennett',
                'lastName': 'Blake',
                'username': '@Pena',
                'email': 'bennettpena@comtours.com',
                'age': 13,
            }, {
                'id': 56,
                'firstName': 'Kellie',
                'lastName': 'Horton',
                'username': '@Weiss',
                'email': 'kellieweiss@comtours.com',
                'age': 48,
            }, {
                'id': 57,
                'firstName': 'Hobbs',
                'lastName': 'Talley',
                'username': '@Sanford',
                'email': 'hobbssanford@comtours.com',
                'age': 28,
            }, {
                'id': 58,
                'firstName': 'Mcguire',
                'lastName': 'Donaldson',
                'username': '@Roman',
                'email': 'mcguireroman@comtours.com',
                'age': 38,
            }, {
                'id': 59,
                'firstName': 'Rodriquez',
                'lastName': 'Saunders',
                'username': '@Harper',
                'email': 'rodriquezharper@comtours.com',
                'age': 20,
            }, {
                'id': 60,
                'firstName': 'Lou',
                'lastName': 'Conner',
                'username': '@Sanchez',
                'email': 'lousanchez@comtours.com',
                'age': 16,
            }];
    }
    getData() {
        return this.data;
    }
}
SmartTableService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SmartTableService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
SmartTableService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SmartTableService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SmartTableService, decorators: [{
            type: Injectable
        }] });

class PeriodsService {
    getYears() {
        return [
            '2010', '2011', '2012',
            '2013', '2014', '2015',
            '2016', '2017', '2018',
        ];
    }
    getMonths() {
        return [
            'Jan', 'Feb', 'Mar',
            'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec',
        ];
    }
    getWeeks() {
        return [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun',
        ];
    }
}
PeriodsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PeriodsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PeriodsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PeriodsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PeriodsService, decorators: [{
            type: Injectable
        }] });

class UserActivityService extends UserActivityData {
    constructor(periods) {
        super();
        this.periods = periods;
        this.getRandom = (roundTo) => Math.round(Math.random() * roundTo);
        this.data = {};
        this.data = {
            week: this.getDataWeek(),
            month: this.getDataMonth(),
            year: this.getDataYear(),
        };
    }
    generateUserActivityRandomData(date) {
        return {
            date,
            pagesVisitCount: this.getRandom(1000),
            deltaUp: this.getRandom(1) % 2 === 0,
            newVisits: this.getRandom(100),
        };
    }
    getDataWeek() {
        return this.periods.getWeeks().map((week) => {
            return this.generateUserActivityRandomData(week);
        });
    }
    getDataMonth() {
        const currentDate = new Date();
        const days = currentDate.getDate();
        const month = this.periods.getMonths()[currentDate.getMonth()];
        return Array.from(Array(days)).map((_, index) => {
            const date = `${index + 1} ${month}`;
            return this.generateUserActivityRandomData(date);
        });
    }
    getDataYear() {
        return this.periods.getYears().map((year) => {
            return this.generateUserActivityRandomData(year);
        });
    }
    getUserActivityData(period) {
        return of(this.data[period] || []);
    }
}
UserActivityService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: UserActivityService, deps: [{ token: PeriodsService }], target: i0.ɵɵFactoryTarget.Injectable });
UserActivityService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: UserActivityService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: UserActivityService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: PeriodsService }]; } });

class OrdersChartService extends OrdersChartData {
    constructor(period) {
        super();
        this.period = period;
        this.year = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
        ];
        this.data = {};
        this.data = {
            week: this.getDataForWeekPeriod(),
            month: this.getDataForMonthPeriod(),
            year: this.getDataForYearPeriod(),
        };
    }
    getDataForWeekPeriod() {
        return {
            chartLabel: this.getDataLabels(42, this.period.getWeeks()),
            linesData: [
                [
                    184, 267, 326, 366, 389, 399,
                    392, 371, 340, 304, 265, 227,
                    191, 158, 130, 108, 95, 91, 97,
                    109, 125, 144, 166, 189, 212,
                    236, 259, 280, 300, 316, 329,
                    338, 342, 339, 329, 312, 288,
                    258, 221, 178, 128, 71,
                ],
                [
                    158, 178, 193, 205, 212, 213,
                    204, 190, 180, 173, 168, 164,
                    162, 160, 159, 158, 159, 166,
                    179, 195, 215, 236, 257, 276,
                    292, 301, 304, 303, 300, 293,
                    284, 273, 262, 251, 241, 234,
                    232, 232, 232, 232, 232, 232,
                ],
                [
                    58, 137, 202, 251, 288, 312,
                    323, 324, 311, 288, 257, 222,
                    187, 154, 124, 100, 81, 68, 61,
                    58, 61, 69, 80, 96, 115, 137,
                    161, 186, 210, 233, 254, 271,
                    284, 293, 297, 297, 297, 297,
                    297, 297, 297, 297, 297,
                ],
            ],
        };
    }
    getDataForMonthPeriod() {
        return {
            chartLabel: this.getDataLabels(47, this.period.getMonths()),
            linesData: [
                [
                    5, 63, 113, 156, 194, 225,
                    250, 270, 283, 289, 290,
                    286, 277, 264, 244, 220,
                    194, 171, 157, 151, 150,
                    152, 155, 160, 166, 170,
                    167, 153, 135, 115, 97,
                    82, 71, 64, 63, 62, 61,
                    62, 65, 73, 84, 102,
                    127, 159, 203, 259, 333,
                ],
                [
                    6, 83, 148, 200, 240,
                    265, 273, 259, 211,
                    122, 55, 30, 28, 36,
                    50, 68, 88, 109, 129,
                    146, 158, 163, 165,
                    173, 187, 208, 236,
                    271, 310, 346, 375,
                    393, 400, 398, 387,
                    368, 341, 309, 275,
                    243, 220, 206, 202,
                    207, 222, 247, 286, 348,
                ],
                [
                    398, 348, 315, 292, 274,
                    261, 251, 243, 237, 231,
                    222, 209, 192, 172, 152,
                    132, 116, 102, 90, 80, 71,
                    64, 58, 53, 49, 48, 54, 66,
                    84, 104, 125, 142, 156, 166,
                    172, 174, 172, 167, 159, 149,
                    136, 121, 105, 86, 67, 45, 22,
                ],
            ],
        };
    }
    getDataForYearPeriod() {
        return {
            chartLabel: this.getDataLabels(42, this.year),
            linesData: [
                [
                    190, 269, 327, 366, 389, 398,
                    396, 387, 375, 359, 343, 327,
                    312, 298, 286, 276, 270, 268,
                    265, 258, 247, 234, 220, 204,
                    188, 172, 157, 142, 128, 116,
                    106, 99, 95, 94, 92, 89, 84,
                    77, 69, 60, 49, 36, 22,
                ],
                [
                    265, 307, 337, 359, 375, 386,
                    393, 397, 399, 397, 390, 379,
                    365, 347, 326, 305, 282, 261,
                    241, 223, 208, 197, 190, 187,
                    185, 181, 172, 160, 145, 126,
                    105, 82, 60, 40, 26, 19, 22,
                    43, 82, 141, 220, 321,
                ],
                [
                    9, 165, 236, 258, 244, 206,
                    186, 189, 209, 239, 273, 307,
                    339, 365, 385, 396, 398, 385,
                    351, 300, 255, 221, 197, 181,
                    170, 164, 162, 161, 159, 154,
                    146, 135, 122, 108, 96, 87,
                    83, 82, 82, 82, 82, 82, 82,
                ],
            ],
        };
    }
    getDataLabels(nPoints, labelsArray) {
        const labelsArrayLength = labelsArray.length;
        const step = Math.round(nPoints / labelsArrayLength);
        return Array.from(Array(nPoints)).map((item, index) => {
            const dataIndex = Math.round(index / step);
            return index % step === 0 ? labelsArray[dataIndex] : '';
        });
    }
    getOrdersChartData(period) {
        return this.data[period];
    }
}
OrdersChartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: OrdersChartService, deps: [{ token: PeriodsService }], target: i0.ɵɵFactoryTarget.Injectable });
OrdersChartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: OrdersChartService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: OrdersChartService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: PeriodsService }]; } });

class ProfitChartService extends ProfitChartData {
    constructor(period) {
        super();
        this.period = period;
        this.year = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
        ];
        this.data = {};
        this.data = {
            week: this.getDataForWeekPeriod(),
            month: this.getDataForMonthPeriod(),
            year: this.getDataForYearPeriod(),
        };
    }
    getDataForWeekPeriod() {
        const nPoint = this.period.getWeeks().length;
        return {
            chartLabel: this.period.getWeeks(),
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    }
    getDataForMonthPeriod() {
        const nPoint = this.period.getMonths().length;
        return {
            chartLabel: this.period.getMonths(),
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    }
    getDataForYearPeriod() {
        const nPoint = this.year.length;
        return {
            chartLabel: this.year,
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    }
    getRandomData(nPoints) {
        return Array.from(Array(nPoints)).map(() => {
            return Math.round(Math.random() * 500);
        });
    }
    getProfitChartData(period) {
        return this.data[period];
    }
}
ProfitChartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ProfitChartService, deps: [{ token: PeriodsService }], target: i0.ɵɵFactoryTarget.Injectable });
ProfitChartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ProfitChartService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ProfitChartService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: PeriodsService }]; } });

class TrafficListService extends TrafficListData {
    constructor(period) {
        super();
        this.period = period;
        this.getRandom = (roundTo) => Math.round(Math.random() * roundTo);
        this.data = {};
        this.data = {
            week: this.getDataWeek(),
            month: this.getDataMonth(),
            year: this.getDataYear(),
        };
    }
    getDataWeek() {
        const getFirstDateInPeriod = () => {
            const weeks = this.period.getWeeks();
            return weeks[weeks.length - 1];
        };
        return this.reduceData(this.period.getWeeks(), getFirstDateInPeriod);
    }
    getDataMonth() {
        const getFirstDateInPeriod = () => {
            const months = this.period.getMonths();
            return months[months.length - 1];
        };
        return this.reduceData(this.period.getMonths(), getFirstDateInPeriod);
    }
    getDataYear() {
        const getFirstDateInPeriod = () => {
            const years = this.period.getYears();
            return `${parseInt(years[0], 10) - 1}`;
        };
        return this.reduceData(this.period.getYears(), getFirstDateInPeriod);
    }
    reduceData(timePeriods, getFirstDateInPeriod) {
        return timePeriods.reduce((result, timePeriod, index) => {
            const hasResult = result[index - 1];
            const prevDate = hasResult
                ? result[index - 1].comparison.nextDate
                : getFirstDateInPeriod();
            const prevValue = hasResult
                ? result[index - 1].comparison.nextValue
                : this.getRandom(100);
            const nextValue = this.getRandom(100);
            const deltaValue = prevValue - nextValue;
            const item = {
                date: timePeriod,
                value: this.getRandom(1000),
                delta: {
                    up: deltaValue <= 0,
                    value: Math.abs(deltaValue),
                },
                comparison: {
                    prevDate,
                    prevValue,
                    nextDate: timePeriod,
                    nextValue,
                },
            };
            return [...result, item];
        }, []);
    }
    // private reduceData(timePeriods: string[], getFirstDateInPeriod: () => string): TrafficList[] {
    //   return timePeriods.reduce((result, timePeriod, index) => {
    //     const hasResult = result[index - 1];
    //     const prevDate = hasResult ?
    //       result[index - 1].comparison.nextDate :
    //       getFirstDateInPeriod();
    //     const prevValue = hasResult ?
    //       result[index - 1].comparison.nextValue :
    //       this.getRandom(100);
    //     const nextValue = this.getRandom(100);
    //     const deltaValue = prevValue - nextValue;
    //     const item = {
    //       date: timePeriod,
    //       value: this.getRandom(1000),
    //       delta: {
    //         up: deltaValue <= 0,
    //         value: Math.abs(deltaValue),
    //       },
    //       comparison: {
    //         prevDate,
    //         prevValue,
    //         nextDate: timePeriod,
    //         nextValue,
    //       },
    //     };
    //     return [...result, item];
    //   }, []);
    // }
    getTrafficListData(period) {
        return of(this.data[period]);
    }
}
TrafficListService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TrafficListService, deps: [{ token: PeriodsService }], target: i0.ɵɵFactoryTarget.Injectable });
TrafficListService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TrafficListService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TrafficListService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: PeriodsService }]; } });

class EarningService extends EarningData {
    constructor() {
        super(...arguments);
        this.currentDate = new Date();
        this.currentValue = Math.random() * 1000;
        this.ONE_DAY = 24 * 3600 * 1000;
        this.pieChartData = [
            {
                value: 50,
                name: 'Bitcoin',
            },
            {
                value: 25,
                name: 'Tether',
            },
            {
                value: 25,
                name: 'Ethereum',
            },
        ];
        this.liveUpdateChartData = {
            bitcoin: {
                liveChart: [],
                delta: {
                    up: true,
                    value: 4,
                },
                dailyIncome: 45895,
            },
            tether: {
                liveChart: [],
                delta: {
                    up: false,
                    value: 9,
                },
                dailyIncome: 5862,
            },
            ethereum: {
                liveChart: [],
                delta: {
                    up: false,
                    value: 21,
                },
                dailyIncome: 584,
            },
        };
    }
    getDefaultLiveChartData(elementsNumber) {
        this.currentDate = new Date();
        this.currentValue = Math.random() * 1000;
        return Array.from(Array(elementsNumber))
            .map(item => this.generateRandomLiveChartData());
    }
    generateRandomLiveChartData() {
        this.currentDate = new Date(+this.currentDate + this.ONE_DAY);
        this.currentValue = this.currentValue + Math.random() * 20 - 11;
        if (this.currentValue < 0) {
            this.currentValue = Math.random() * 100;
        }
        return {
            value: [
                [
                    this.currentDate.getFullYear(),
                    this.currentDate.getMonth(),
                    this.currentDate.getDate(),
                ].join('/'),
                Math.round(this.currentValue),
            ],
        };
    }
    getEarningLiveUpdateCardData(currency) {
        const data = this.liveUpdateChartData[currency.toLowerCase()];
        const newValue = this.generateRandomLiveChartData();
        data.liveChart.shift();
        data.liveChart.push(newValue);
        return of(data.liveChart);
    }
    getEarningCardData(currency) {
        const data = this.liveUpdateChartData[currency.toLowerCase()];
        data.liveChart = this.getDefaultLiveChartData(150);
        return of(data);
    }
    getEarningPieChartData() {
        return of(this.pieChartData);
    }
}
EarningService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: EarningService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
EarningService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: EarningService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: EarningService, decorators: [{
            type: Injectable
        }] });

class OrdersProfitChartService extends OrdersProfitChartData {
    constructor(ordersChartService, profitChartService) {
        super();
        this.ordersChartService = ordersChartService;
        this.profitChartService = profitChartService;
        this.summary = [
            {
                title: 'Marketplace',
                value: 3654,
            },
            {
                title: 'Last Month',
                value: 946,
            },
            {
                title: 'Last Week',
                value: 654,
            },
            {
                title: 'Today',
                value: 230,
            },
        ];
    }
    getOrderProfitChartSummary() {
        return of(this.summary);
    }
    getOrdersChartData(period) {
        return of(this.ordersChartService.getOrdersChartData(period));
    }
    getProfitChartData(period) {
        return of(this.profitChartService.getProfitChartData(period));
    }
}
OrdersProfitChartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: OrdersProfitChartService, deps: [{ token: OrdersChartData }, { token: ProfitChartData }], target: i0.ɵɵFactoryTarget.Injectable });
OrdersProfitChartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: OrdersProfitChartService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: OrdersProfitChartService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: OrdersChartData }, { type: ProfitChartData }]; } });

class TrafficBarService extends TrafficBarData {
    constructor(period) {
        super();
        this.period = period;
        this.data = {};
        this.data = {
            week: this.getDataForWeekPeriod(),
            month: this.getDataForMonthPeriod(),
            year: this.getDataForYearPeriod(),
        };
    }
    getDataForWeekPeriod() {
        return {
            data: [10, 15, 19, 7, 20, 13, 15],
            labels: this.period.getWeeks(),
            formatter: '{c0} MB',
        };
    }
    getDataForMonthPeriod() {
        return {
            data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
            labels: this.period.getMonths(),
            formatter: '{c0} GB',
        };
    }
    getDataForYearPeriod() {
        return {
            data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
            labels: this.period.getYears(),
            formatter: '{c0} GB',
        };
    }
    getTrafficBarData(period) {
        return of(this.data[period]);
    }
}
TrafficBarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TrafficBarService, deps: [{ token: PeriodsService }], target: i0.ɵɵFactoryTarget.Injectable });
TrafficBarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TrafficBarService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TrafficBarService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: PeriodsService }]; } });

class ProfitBarAnimationChartService extends ProfitBarAnimationChartData {
    constructor() {
        super();
        this.data = {
            firstLine: this.getDataForFirstLine(),
            secondLine: this.getDataForSecondLine(),
        };
    }
    getDataForFirstLine() {
        return this.createEmptyArray(100)
            .map((_, index) => {
            const oneFifth = index / 5;
            return (Math.sin(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        });
    }
    getDataForSecondLine() {
        return this.createEmptyArray(100)
            .map((_, index) => {
            const oneFifth = index / 5;
            return (Math.cos(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        });
    }
    createEmptyArray(nPoints) {
        return Array.from(Array(nPoints));
    }
    getChartData() {
        return of(this.data);
    }
}
ProfitBarAnimationChartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ProfitBarAnimationChartService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ProfitBarAnimationChartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ProfitBarAnimationChartService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ProfitBarAnimationChartService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class TemperatureHumidityService extends TemperatureHumidityData {
    constructor() {
        super(...arguments);
        this.temperatureDate = {
            value: 24,
            min: 12,
            max: 30,
        };
        this.humidityDate = {
            value: 87,
            min: 0,
            max: 100,
        };
    }
    getTemperatureData() {
        return of(this.temperatureDate);
    }
    getHumidityData() {
        return of(this.humidityDate);
    }
}
TemperatureHumidityService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TemperatureHumidityService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
TemperatureHumidityService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TemperatureHumidityService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TemperatureHumidityService, decorators: [{
            type: Injectable
        }] });

class SolarService extends SolarData {
    constructor() {
        super(...arguments);
        this.value = 42;
    }
    getSolarData() {
        return of(this.value);
    }
}
SolarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SolarService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
SolarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SolarService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SolarService, decorators: [{
            type: Injectable
        }] });

class TrafficChartService extends TrafficChartData {
    constructor() {
        super(...arguments);
        this.data = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
    }
    getTrafficChartData() {
        return of(this.data);
    }
}
TrafficChartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TrafficChartService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
TrafficChartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TrafficChartService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TrafficChartService, decorators: [{
            type: Injectable
        }] });

class StatsBarService extends StatsBarData {
    constructor() {
        super(...arguments);
        this.statsBarData = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
    }
    getStatsBarData() {
        return of(this.statsBarData);
    }
}
StatsBarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StatsBarService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
StatsBarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StatsBarService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StatsBarService, decorators: [{
            type: Injectable
        }] });

class CountryOrderService extends CountryOrderData {
    constructor() {
        super(...arguments);
        this.countriesCategories = [
            'Sofas',
            'Furniture',
            'Lighting',
            'Tables',
            'Textiles',
        ];
        this.countriesCategoriesLength = this.countriesCategories.length;
    }
    generateRandomData(nPoints) {
        return Array.from(Array(nPoints)).map(() => {
            return Math.round(Math.random() * 20);
        });
    }
    getCountriesCategories() {
        return of(this.countriesCategories);
    }
    getCountriesCategoriesData(country) {
        return of(this.generateRandomData(this.countriesCategoriesLength));
    }
}
CountryOrderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CountryOrderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
CountryOrderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CountryOrderService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CountryOrderService, decorators: [{
            type: Injectable
        }] });

class StatsProgressBarService extends StatsProgressBarData {
    constructor() {
        super(...arguments);
        this.progressInfoData = [
            {
                title: 'Today’s Profit',
                value: 572900,
                activeProgress: 70,
                description: 'Better than last week (70%)',
            },
            {
                title: 'New Orders',
                value: 6378,
                activeProgress: 30,
                description: 'Better than last week (30%)',
            },
            {
                title: 'New Comments',
                value: 200,
                activeProgress: 55,
                description: 'Better than last week (55%)',
            },
        ];
    }
    getProgressInfoData() {
        return of(this.progressInfoData);
    }
}
StatsProgressBarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StatsProgressBarService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
StatsProgressBarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StatsProgressBarService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StatsProgressBarService, decorators: [{
            type: Injectable
        }] });

class VisitorsAnalyticsService extends VisitorsAnalyticsData {
    constructor(periodService) {
        super();
        this.periodService = periodService;
        this.pieChartValue = 75;
        this.innerLinePoints = [
            94, 188, 225, 244, 253, 254, 249, 235, 208,
            173, 141, 118, 105, 97, 94, 96, 104, 121, 147,
            183, 224, 265, 302, 333, 358, 375, 388, 395,
            400, 400, 397, 390, 377, 360, 338, 310, 278,
            241, 204, 166, 130, 98, 71, 49, 32, 20, 13, 9,
        ];
        this.outerLinePoints = [
            85, 71, 59, 50, 45, 42, 41, 44, 58, 88,
            136, 199, 267, 326, 367, 391, 400, 397,
            376, 319, 200, 104, 60, 41, 36, 37, 44,
            55, 74, 100, 131, 159, 180, 193, 199, 200,
            195, 184, 164, 135, 103, 73, 50, 33, 22, 15, 11,
        ];
    }
    generateOutlineLineData() {
        const months = this.periodService.getMonths();
        const outerLinePointsLength = this.outerLinePoints.length;
        const monthsLength = months.length;
        return this.outerLinePoints.map((p, index) => {
            const monthIndex = Math.round(index / 4);
            const label = (index % Math.round(outerLinePointsLength / monthsLength) === 0)
                ? months[monthIndex]
                : '';
            return {
                label,
                value: p,
            };
        });
    }
    getInnerLineChartData() {
        return of(this.innerLinePoints);
    }
    getOutlineLineChartData() {
        return of(this.generateOutlineLineData());
    }
    getPieChartData() {
        return of(this.pieChartValue);
    }
}
VisitorsAnalyticsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: VisitorsAnalyticsService, deps: [{ token: PeriodsService }], target: i0.ɵɵFactoryTarget.Injectable });
VisitorsAnalyticsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: VisitorsAnalyticsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: VisitorsAnalyticsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: PeriodsService }]; } });

class SecurityCamerasService extends SecurityCamerasData {
    constructor() {
        super(...arguments);
        this.cameras = [
            {
                title: 'Camera #1',
                source: 'assets/images/camera1.jpg',
            },
            {
                title: 'Camera #2',
                source: 'assets/images/camera2.jpg',
            },
            {
                title: 'Camera #3',
                source: 'assets/images/camera3.jpg',
            },
            {
                title: 'Camera #4',
                source: 'assets/images/camera4.jpg',
            },
        ];
    }
    getCamerasData() {
        return of(this.cameras);
    }
}
SecurityCamerasService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SecurityCamerasService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
SecurityCamerasService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SecurityCamerasService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SecurityCamerasService, decorators: [{
            type: Injectable
        }] });

const SERVICES = [
    UserService,
    ElectricityService,
    SmartTableService,
    UserActivityService,
    OrdersChartService,
    ProfitChartService,
    TrafficListService,
    PeriodsService,
    EarningService,
    OrdersProfitChartService,
    TrafficBarService,
    ProfitBarAnimationChartService,
    TemperatureHumidityService,
    SolarService,
    TrafficChartService,
    StatsBarService,
    CountryOrderService,
    StatsProgressBarService,
    VisitorsAnalyticsService,
    SecurityCamerasService,
];
class MockDataModule {
    static forRoot() {
        return {
            ngModule: MockDataModule,
            providers: [
                ...SERVICES,
            ],
        };
    }
}
MockDataModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: MockDataModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MockDataModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: MockDataModule, imports: [CommonModule] });
MockDataModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: MockDataModule, providers: [
        ...SERVICES,
    ], imports: [[
            CommonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: MockDataModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                    ],
                    providers: [
                        ...SERVICES,
                    ],
                }]
        }] });

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
const DATA_SERVICES = [
    { provide: UserData, useClass: UserService },
    { provide: ElectricityData, useClass: ElectricityService },
    { provide: SmartTableData, useClass: SmartTableService },
    { provide: UserActivityData, useClass: UserActivityService },
    { provide: OrdersChartData, useClass: OrdersChartService },
    { provide: ProfitChartData, useClass: ProfitChartService },
    { provide: TrafficListData, useClass: TrafficListService },
    { provide: EarningData, useClass: EarningService },
    { provide: OrdersProfitChartData, useClass: OrdersProfitChartService },
    { provide: TrafficBarData, useClass: TrafficBarService },
    {
        provide: ProfitBarAnimationChartData,
        useClass: ProfitBarAnimationChartService,
    },
    { provide: TemperatureHumidityData, useClass: TemperatureHumidityService },
    { provide: SolarData, useClass: SolarService },
    { provide: TrafficChartData, useClass: TrafficChartService },
    { provide: StatsBarData, useClass: StatsBarService },
    { provide: CountryOrderData, useClass: CountryOrderService },
    { provide: StatsProgressBarData, useClass: StatsProgressBarService },
    { provide: VisitorsAnalyticsData, useClass: VisitorsAnalyticsService },
    { provide: SecurityCamerasData, useClass: SecurityCamerasService },
];
class NbSimpleRoleProvider extends NbRoleProvider {
    getRole() {
        // here you could provide any role based on any auth flow
        return of('guest');
    }
}
const NB_CORE_PROVIDERS = [
    ...MockDataModule.forRoot().providers,
    ...DATA_SERVICES,
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
CoreModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CoreModule, deps: [{ token: CoreModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
CoreModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CoreModule, imports: [CommonModule], exports: [NbAuthModule] });
CoreModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CoreModule, imports: [[CommonModule], NbAuthModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CoreModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [NbAuthModule],
                    declarations: [],
                }]
        }], ctorParameters: function () { return [{ type: CoreModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });

// serviceRestConfig.restPathFileTranslate
function createTranslateHttpLoader(http) {
    // return new MultiTranslateHttpLoader(http, [
    //   { prefix: './assets/i18n/', suffix: '.json' },//host app i18n assets
    //   { prefix: './lib/assets/i18n/', suffix: '.json' }, //your lib assets
    //   { prefix: './rest/lib/assets/i18n/', suffix: '.json' }, //your lib assets
    // ])
    return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}
class RestAdminModule {
    constructor(router, compiler, serviceRestAdmin, iconLibraries, restLangService) {
        this.router = router;
        this.compiler = compiler;
        this.serviceRestAdmin = serviceRestAdmin;
        this.iconLibraries = iconLibraries;
        this.restLangService = restLangService;
        this.iconLibraries.registerFontPack("fas", {
            packClass: "fas",
            iconClassPrefix: "fa",
        });
        this.iconLibraries.registerFontPack("far", {
            packClass: "far",
            iconClassPrefix: "fa",
        });
        this.iconLibraries.registerFontPack("fab", {
            packClass: "fab",
            iconClassPrefix: "fa",
        });
        this.iconLibraries.registerFontPack("fad", {
            packClass: "fa-duotone",
            iconClassPrefix: "fa",
        });
        this.restLangService.setInitialAppLanguage();
        const tempModule = NgModule({
            imports: [
                RouterModule.forChild([
                    {
                        path: "",
                        component: RestMainComponentComponent,
                        canActivate: [AuthGuard],
                        children: [...this.serviceRestAdmin.generateRoutes()],
                    },
                ]),
            ],
        })(class {
        });
        this.compiler.compileModuleAsync(tempModule).then((module) => {
            const routes = {
                path: "",
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
                { provide: "restConfig", useValue: restConfig },
            ],
        };
    }
}
RestAdminModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestAdminModule, deps: [{ token: i1.Router }, { token: i0.Compiler }, { token: RestAdminConfigService }, { token: i1$1.NbIconLibraries }, { token: RestLangService }], target: i0.ɵɵFactoryTarget.NgModule });
RestAdminModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestAdminModule, declarations: [RestResourceListComponent,
        RestResourceAddComponent,
        RestResourceDeleteComponent,
        RestMainComponentComponent,
        RestResourceEditorFieldsComponent,
        RestResourceListFieldComponent,
        RestResourceDetailComponent,
        UploadFileComponent,
        FsIconCComponent], imports: [CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        NbActionsModule,
        NbButtonModule,
        NbCardModule,
        NbCheckboxModule,
        NbInputModule,
        NbTagModule,
        NbRadioModule,
        NbUserModule,
        NbTreeGridModule,
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
        NgxDropzoneModule, i5$1.NgxPermissionsModule, NbSelectModule,
        NbSidebarModule, i1$1.NbMenuModule, i1$1.NbDatepickerModule, i1$1.NbDialogModule, i1$1.NbWindowModule, i1$1.NbToastrModule, i1$1.NbTimepickerModule, CoreModule, ThemeModule, NbIconModule, i1$4.TranslateModule], exports: [RestResourceListComponent,
        RestResourceAddComponent,
        RestResourceDeleteComponent,
        RestMainComponentComponent,
        RestResourceEditorFieldsComponent,
        RestResourceListFieldComponent,
        RestResourceDetailComponent,
        UploadFileComponent] });
RestAdminModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestAdminModule, providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: PaginationInterceptor,
            multi: true,
        },
        AuthGuard,
        RestResourceService,
        RestAdminConfigService,
        RestExportService,
        RestLangService,
    ], imports: [[
            CommonModule,
            RouterModule,
            ReactiveFormsModule,
            FormsModule,
            HttpClientModule,
            NbActionsModule,
            NbButtonModule,
            NbCardModule,
            NbCheckboxModule,
            NbInputModule,
            NbTagModule,
            NbRadioModule,
            NbUserModule,
            NbTreeGridModule,
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
            NgxPermissionsModule.forChild(),
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
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: createTranslateHttpLoader,
                    deps: [HttpClient],
                },
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestAdminModule, decorators: [{
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
                        FsIconCComponent,
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
                    ],
                    entryComponents: [
                        RestResourceListComponent,
                        RestResourceListFieldComponent,
                        RestResourceAddComponent,
                        FsIconCComponent,
                        RestResourceDeleteComponent,
                        RestMainComponentComponent,
                        RestResourceEditorFieldsComponent,
                        RestResourceDetailComponent,
                        UploadFileComponent,
                    ],
                    imports: [
                        CommonModule,
                        RouterModule,
                        ReactiveFormsModule,
                        FormsModule,
                        HttpClientModule,
                        NbActionsModule,
                        NbButtonModule,
                        NbCardModule,
                        NbCheckboxModule,
                        NbInputModule,
                        NbTagModule,
                        NbRadioModule,
                        NbUserModule,
                        NbTreeGridModule,
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
                        NgxPermissionsModule.forChild(),
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
                        RestResourceService,
                        RestAdminConfigService,
                        RestExportService,
                        RestLangService,
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i0.Compiler }, { type: RestAdminConfigService }, { type: i1$1.NbIconLibraries }, { type: RestLangService }]; } });

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
    }
    // Getters
    get name() {
        return this._name;
    }
    get api() {
        return this._api == null ? this.name.toLowerCase() + "s" : this._api;
    }
    get authRequired() {
        return this._authRequired == null ? false : this._authRequired;
    }
    get showInMenu() {
        return this._showInMenu == null ? true : this._showInMenu;
    }
    get icon() {
        if (this._icon == null)
            return "browser-outline";
        else if (typeof this._icon == "string")
            return this._icon;
        else
            return { icon: this._icon.icon, pack: this._icon.pack };
    }
    get fields() {
        return this._fields.map((field) => ({
            name: field.name,
            type: field.type ? field.type : REST_FIELD_TYPES.STRING,
            label: field.label ? field.label : field.name,
            inForm: field.inForm !== undefined ? field.inForm : true,
            metaData: field.metaData,
            i18n: field.i18n !== undefined ? field.i18n : false,
        }));
    }
    get hasFile() {
        return this.fields.findIndex((field) => ([REST_FIELD_TYPES.IMAGE, REST_FIELD_TYPES.PDF, REST_FIELD_TYPES.FILE].includes(field.type))) >= 0;
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
            : "list of " + this.name;
        rest.perPage = this._listConfig.perPage ? this._listConfig.perPage : 25;
        rest.title = this._listConfig.title
            ? this._listConfig.title
            : "List of " + this.name;
        rest.searchFilter = this._listConfig.searchFilter
            ? this._listConfig.searchFilter
            : null;
        if (rest.group) {
            rest.group = this._listConfig.group;
            rest.group.priority = rest.group.priority ? rest.group.priority : 0;
            rest.group.icon = rest.group.icon ? rest.group.icon : "folder-outline";
        }
        else
            rest.group = {
                priority: 0,
                name: "default",
                type: TYPE_GROUP.DEFAULT,
            };
        return rest;
    }
    get addConfig() {
        const rest = {};
        rest.api = this._addConfig.api ? this._addConfig.api : this.api;
        rest.title = this._addConfig.title
            ? this._addConfig.title
            : "Add " + this.name;
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
        rest.body = this._editConfig.body
            ? this._editConfig.body
            : {};
        rest.header = this._editConfig.header
            ? this._editConfig.header
            : {};
        rest.title = this._editConfig.title
            ? this._editConfig.title
            : "Edit " + this.name;
        rest.queryParams = this._editConfig.queryParams
            ? this._editConfig.queryParams
            : this.queryParams;
        return rest;
    }
    get detailConfig() {
        const rest = {};
        rest.api = this._detailConfig.api ? this._detailConfig.api : this.api;
        rest.title = this._detailConfig.title ? this._detailConfig.title : "";
        rest.tabsConfig = this._detailConfig.tabsConfig
            ? this._detailConfig.tabsConfig
            : null;
        rest.queryParams = this._detailConfig.queryParams
            ? this._detailConfig.queryParams
            : this.queryParams;
        return rest;
    }
    get description() {
        return this._description == null
            ? "manage " + this.name
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

class LoginComponent extends NbLoginComponent {
}
LoginComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: LoginComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
LoginComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: LoginComponent, selector: "ngx-login", usesInheritance: true, ngImport: i0, template: "<h1 id=\"title\" class=\"title\">{{ \"login.main\" | translate }}</h1>\n<p class=\"sub-title\">{{ \"login.labelMessage\" | translate }}.</p>\n\n<nb-alert\n  *ngIf=\"showMessages.error && errors?.length && !submitted\"\n  outline=\"danger\"\n  role=\"alert\"\n>\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert\n  *ngIf=\"showMessages.success && messages?.length && !submitted\"\n  outline=\"success\"\n  role=\"alert\"\n>\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">\n      {{ message }}\n    </li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"login()\" #form=\"ngForm\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\"\n      >{{ \"login.email\" | translate }}:</label\n    >\n    <input\n      nbInput\n      fullWidth\n      [(ngModel)]=\"user.login\"\n      #email=\"ngModel\"\n      name=\"login\"\n      id=\"input-email\"\n      pattern=\".+@.+\\..+\"\n      placeholder=\"Email address\"\n      fieldSize=\"large\"\n      autofocus\n      [status]=\"email.dirty ? (email.invalid ? 'danger' : 'success') : 'basic'\"\n      [required]=\"getConfigValue('forms.validation.email.required')\"\n      [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\"\n    />\n    <ng-container *ngIf=\"email.invalid && email.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.required\">\n        Email is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.pattern\">\n        Email should be the real one!\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <span class=\"label-with-link\">\n      <label class=\"label\" for=\"input-password\"\n        >{{ \"login.password\" | translate }}:</label\n      >\n      <a class=\"forgot-password caption-2\" routerLink=\"../request-password\"\n        >{{ \"login.forgetPassword\" | translate }}?</a\n      >\n    </span>\n    <input\n      nbInput\n      fullWidth\n      [(ngModel)]=\"user.password\"\n      #password=\"ngModel\"\n      name=\"password\"\n      type=\"password\"\n      id=\"input-password\"\n      placeholder=\"Password\"\n      fieldSize=\"large\"\n      [status]=\"\n        password.dirty ? (password.invalid ? 'danger' : 'success') : 'basic'\n      \"\n      [required]=\"getConfigValue('forms.validation.password.required')\"\n      [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n      [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n      [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\"\n    />\n    <ng-container *ngIf=\"password.invalid && password.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.required\">\n        Password is required!\n      </p>\n      <p\n        class=\"caption status-danger\"\n        *ngIf=\"password.errors?.minlength || password.errors?.maxlength\"\n      >\n        Password should contain from\n        {{ getConfigValue(\"forms.validation.password.minLength\") }} to\n        {{ getConfigValue(\"forms.validation.password.maxLength\") }}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group accept-group\">\n    <nb-checkbox\n      name=\"rememberMe\"\n      [(ngModel)]=\"user.rememberMe\"\n      *ngIf=\"rememberMe\"\n      >{{ \"login.rememberMe\" | translate }}</nb-checkbox\n    >\n  </div>\n\n  <button\n    nbButton\n    fullWidth\n    status=\"primary\"\n    size=\"large\"\n    [disabled]=\"submitted || !form.valid\"\n    [class.btn-pulse]=\"submitted\"\n  >\n    {{ \"login.logIn\" | translate }}\n  </button>\n</form>\n\n<!-- <section\n  *ngIf=\"socialLinks && socialLinks.length > 0\"\n  class=\"links\"\n  aria-label=\"Social sign in\"\n>\n  or enter with:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a\n        *ngIf=\"socialLink.link\"\n        [routerLink]=\"socialLink.link\"\n        [attr.target]=\"socialLink.target\"\n        [attr.class]=\"socialLink.icon\"\n        [class.with-icon]=\"socialLink.icon\"\n      >\n        <nb-icon\n          *ngIf=\"socialLink.icon; else title\"\n          [icon]=\"socialLink.icon\"\n        ></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <a\n        *ngIf=\"socialLink.url\"\n        [attr.href]=\"socialLink.url\"\n        [attr.target]=\"socialLink.target\"\n        [attr.class]=\"socialLink.icon\"\n        [class.with-icon]=\"socialLink.icon\"\n      >\n        <nb-icon\n          *ngIf=\"socialLink.icon; else title\"\n          [icon]=\"socialLink.icon\"\n        ></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n    </ng-container>\n  </div>\n</section> -->\n\n<!-- <section class=\"another-action\" aria-label=\"Register\">\n  Don't have an account?\n  <a class=\"text-link\" routerLink=\"../register\">Register</a>\n</section> -->\n", styles: ["::ng-deep .navigation .link nb-icon{display:none!important}\n"], components: [{ type: i1$1.NbAlertComponent, selector: "nb-alert", inputs: ["size", "status", "accent", "outline", "closable"], outputs: ["close"] }, { type: i1$1.NbCheckboxComponent, selector: "nb-checkbox", inputs: ["status", "checked", "disabled", "indeterminate"], outputs: ["checkedChange"] }, { type: i1$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1$5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$5.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1$1.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1$5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1$5.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i1$5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$5.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i1$5.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i1$5.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i1$5.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }], pipes: { "translate": i1$4.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ngx-login",
                    templateUrl: "./login.component.html",
                    styleUrls: ["./login.component.scss"],
                }]
        }] });

const routes = [
    {
        path: "",
        component: NbAuthComponent,
        children: [
            {
                path: "login",
                component: LoginComponent,
            },
        ],
    },
    { path: "auth", redirectTo: "login", pathMatch: "full" },
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AuthRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AuthRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AuthRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
AuthRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AuthRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AuthRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });

class AuthModule {
    constructor(restAdminConfigService) {
        this.restAdminConfigService = restAdminConfigService;
    }
}
AuthModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AuthModule, deps: [{ token: RestAdminConfigService }], target: i0.ɵɵFactoryTarget.NgModule });
AuthModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AuthModule, declarations: [LoginComponent], imports: [CommonModule,
        TranslateModule,
        AuthRoutingModule,
        FormsModule,
        RouterModule,
        NbAlertModule,
        NbInputModule,
        NbButtonModule,
        NbCheckboxModule,
        HttpClientModule, i1$2.NbAuthModule] });
AuthModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AuthModule, imports: [[
            CommonModule,
            TranslateModule,
            AuthRoutingModule,
            FormsModule,
            RouterModule,
            NbAlertModule,
            NbInputModule,
            NbButtonModule,
            NbCheckboxModule,
            HttpClientModule,
            NbAuthModule.forRoot({
                strategies: [
                    NbPasswordAuthStrategy.setup({
                        name: "email",
                        baseEndpoint: "https://api.marylis.com/api",
                        login: {
                            method: "post",
                            endpoint: "/auth/signin",
                            redirect: {
                                success: "/",
                                failure: null,
                            },
                        },
                        token: {
                            class: NbAuthSimpleToken,
                            key: "data.token",
                        },
                    }),
                ],
                forms: {
                    login: {
                        redirectDelay: 500,
                        strategy: "email",
                        showMessages: {
                            success: true,
                            error: true,
                        },
                    },
                },
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AuthModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [LoginComponent],
                    imports: [
                        CommonModule,
                        TranslateModule,
                        AuthRoutingModule,
                        FormsModule,
                        RouterModule,
                        NbAlertModule,
                        NbInputModule,
                        NbButtonModule,
                        NbCheckboxModule,
                        HttpClientModule,
                        NbAuthModule.forRoot({
                            strategies: [
                                NbPasswordAuthStrategy.setup({
                                    name: "email",
                                    baseEndpoint: "https://api.marylis.com/api",
                                    login: {
                                        method: "post",
                                        endpoint: "/auth/signin",
                                        redirect: {
                                            success: "/",
                                            failure: null,
                                        },
                                    },
                                    token: {
                                        class: NbAuthSimpleToken,
                                        key: "data.token",
                                    },
                                }),
                            ],
                            forms: {
                                login: {
                                    redirectDelay: 500,
                                    strategy: "email",
                                    showMessages: {
                                        success: true,
                                        error: true,
                                    },
                                },
                            },
                        }),
                    ],
                }]
        }], ctorParameters: function () { return [{ type: RestAdminConfigService }]; } });

/*
 * Public API Surface of rest-admin
 */
// export * from './lib/assets/i18n/*';
// export * from './lib/auth/auth-routing.module';

/**
 * Generated bundle index. Do not edit.
 */

export { ALPHABET, AnalyticsService, AuthGuard, AuthModule, CapitalizePipe, CoreModule, DIRECTION, FILTER_OPERATORS, FooterComponent, FsIconCComponent, HeaderComponent, LayoutService, NB_CORE_PROVIDERS, NbSimpleRoleProvider, NumberWithCommasPipe, OneColumnLayoutComponent, PERMISSION, PlayerService, PluralPipe, REST_FIELD_TYPES, RestAdminConfigService, RestAdminModule, RestExportService, RestLangService, RestMainComponentComponent, RestResource, RestResourceAddComponent, RestResourceDeleteComponent, RestResourceDetailComponent, RestResourceEditorFieldsComponent, RestResourceListComponent, RestResourceListFieldComponent, RestResourceService, RoundPipe, SearchInputComponent, SeoService, StateService, TYPE_GROUP, TYPE_METHOD_REQUEST, ThemeModule, ThreeColumnsLayoutComponent, TimingPipe, TinyMCEComponent, TwoColumnsLayoutComponent, UploadFileComponent, createTranslateHttpLoader };
//# sourceMappingURL=foris-master-ngx-rest-admin.js.map