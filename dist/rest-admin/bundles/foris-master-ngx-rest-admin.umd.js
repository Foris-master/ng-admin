(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngx-translate/core'), require('@angular/forms'), require('@angular/common/http'), require('@angular/core'), require('@angular/common'), require('@nebular/theme'), require('ng2-smart-table'), require('@nebular/eva-icons'), require('@nebular/security'), require('rxjs'), require('rxjs/operators'), require('@angular/router'), require('ngx-image-cropper'), require('file-saver'), require('xlsx'), require('jspdf'), require('jspdf-autotable'), require('jszip'), require('@iplab/ngx-file-upload'), require('lodash'), require('@codehint-ng/html-compiler'), require('ngx-input-validator'), require('moment'), require('ngx-dropzone'), require('@nebular/auth'), require('@ngx-translate/http-loader'), require('ngx-permissions')) :
    typeof define === 'function' && define.amd ? define('@foris-master/ngx-rest-admin', ['exports', '@ngx-translate/core', '@angular/forms', '@angular/common/http', '@angular/core', '@angular/common', '@nebular/theme', 'ng2-smart-table', '@nebular/eva-icons', '@nebular/security', 'rxjs', 'rxjs/operators', '@angular/router', 'ngx-image-cropper', 'file-saver', 'xlsx', 'jspdf', 'jspdf-autotable', 'jszip', '@iplab/ngx-file-upload', 'lodash', '@codehint-ng/html-compiler', 'ngx-input-validator', 'moment', 'ngx-dropzone', '@nebular/auth', '@ngx-translate/http-loader', 'ngx-permissions'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["foris-master"] = global["foris-master"] || {}, global["foris-master"]["ngx-rest-admin"] = {}), global["@ngx-translate/core"], global.ng.forms, global.ng.common.http, global.ng.core, global.ng.common, global["@nebular/theme"], global["ng2-smart-table"], global["@nebular/eva-icons"], global["@nebular/security"], global.rxjs, global.rxjs.operators, global.ng.router, global["ngx-image-cropper"], global["file-saver"], global.xlsx, global.jspdf, null, global.jszip, global["@iplab/ngx-file-upload"], global.lodash, global["@codehint-ng/html-compiler"], global["ngx-input-validator"], global.moment, global["ngx-dropzone"], global["@nebular/auth"], global["@ngx-translate/http-loader"], global["ngx-permissions"]));
})(this, (function (exports, i1$3, i1$4, i1$2, i0, i8, i1$1, i9, evaIcons, i9$1, rxjs, operators, i1, i5, FileSaver, XLSX, jsPDF, jspdfAutotable, JSZip, i2, _, i3, ngxInputValidator, moment, i7, i1$5, httpLoader, i5$1) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i1__namespace$3 = /*#__PURE__*/_interopNamespace(i1$3);
    var i1__namespace$4 = /*#__PURE__*/_interopNamespace(i1$4);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var i9__namespace$1 = /*#__PURE__*/_interopNamespace(i9$1);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var FileSaver__namespace = /*#__PURE__*/_interopNamespace(FileSaver);
    var XLSX__namespace = /*#__PURE__*/_interopNamespace(XLSX);
    var jsPDF__default = /*#__PURE__*/_interopDefaultLegacy(jsPDF);
    var JSZip__namespace = /*#__PURE__*/_interopNamespace(JSZip);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var ___namespace = /*#__PURE__*/_interopNamespace(_);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var moment__namespace = /*#__PURE__*/_interopNamespace(moment);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i1__namespace$5 = /*#__PURE__*/_interopNamespace(i1$5);
    var i5__namespace$1 = /*#__PURE__*/_interopNamespace(i5$1);

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }

    var APP_NAME = "REST-ADMIN";
    var GLOBALS = {
        LANG: APP_NAME + "_LANG",
        LNG_KEY: APP_NAME + "_SELECT_LANGUAGE",
        DEFAULT_LANG: "en",
        AUTH_APP_TOKEN: "auth_app_token",
    };

    var LayoutService = /** @class */ (function () {
        function LayoutService() {
            this.layoutSize$ = new rxjs.Subject();
            this.layoutSizeChange$ = this.layoutSize$.pipe(operators.shareReplay({ refCount: true }));
        }
        LayoutService.prototype.changeLayoutSize = function () {
            this.layoutSize$.next();
        };
        LayoutService.prototype.onChangeLayoutSize = function () {
            return this.layoutSizeChange$.pipe(operators.delay(1));
        };
        LayoutService.prototype.onSafeChangeLayoutSize = function () {
            return this.layoutSizeChange$.pipe(operators.debounceTime(350));
        };
        return LayoutService;
    }());
    LayoutService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: LayoutService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LayoutService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: LayoutService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: LayoutService, decorators: [{
                type: i0.Injectable
            }] });

    var AnalyticsService = /** @class */ (function () {
        function AnalyticsService(location, router) {
            this.location = location;
            this.router = router;
            this.enabled = false;
        }
        AnalyticsService.prototype.trackPageViews = function () {
            var _this = this;
            if (this.enabled) {
                this.router.events.pipe(operators.filter(function (event) { return event instanceof i1.NavigationEnd; }))
                    .subscribe(function () {
                    ga('send', { hitType: 'pageview', page: _this.location.path() });
                });
            }
        };
        AnalyticsService.prototype.trackEvent = function (eventName) {
            if (this.enabled) {
                ga('send', 'event', eventName);
            }
        };
        return AnalyticsService;
    }());
    AnalyticsService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: AnalyticsService, deps: [{ token: i8__namespace.Location }, { token: i1__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AnalyticsService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: AnalyticsService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: AnalyticsService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i8__namespace.Location }, { type: i1__namespace.Router }]; } });

    var Track = /** @class */ (function () {
        function Track() {
        }
        return Track;
    }());
    var PlayerService = /** @class */ (function () {
        function PlayerService() {
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
        PlayerService.prototype.random = function () {
            this.current = Math.floor(Math.random() * this.playlist.length);
            return this.playlist[this.current];
        };
        PlayerService.prototype.next = function () {
            return this.getNextTrack();
        };
        PlayerService.prototype.prev = function () {
            return this.getPrevTrack();
        };
        PlayerService.prototype.getNextTrack = function () {
            if (this.current === this.playlist.length - 1) {
                this.current = 0;
            }
            else {
                this.current++;
            }
            return this.playlist[this.current];
        };
        PlayerService.prototype.getPrevTrack = function () {
            if (this.current === 0) {
                this.current = this.playlist.length - 1;
            }
            else {
                this.current--;
            }
            return this.playlist[this.current];
        };
        return PlayerService;
    }());
    PlayerService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: PlayerService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PlayerService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: PlayerService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: PlayerService, decorators: [{
                type: i0.Injectable
            }] });

    var StateService = /** @class */ (function () {
        function StateService(directionService) {
            var _this = this;
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
            this.layoutState$ = new rxjs.BehaviorSubject(this.layouts[0]);
            this.sidebarState$ = new rxjs.BehaviorSubject(this.sidebars[0]);
            this.alive = true;
            directionService.onDirectionChange()
                .pipe(operators.takeWhile(function () { return _this.alive; }))
                .subscribe(function (direction) { return _this.updateSidebarIcons(direction); });
            this.updateSidebarIcons(directionService.getDirection());
        }
        StateService.prototype.ngOnDestroy = function () {
            this.alive = false;
        };
        StateService.prototype.updateSidebarIcons = function (direction) {
            var _a = __read(this.sidebars, 2), startSidebar = _a[0], endSidebar = _a[1];
            var isLtr = direction === i1$1.NbLayoutDirection.LTR;
            var startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
            var endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
            startSidebar.icon = startIconClass;
            endSidebar.icon = endIconClass;
        };
        StateService.prototype.setLayoutState = function (state) {
            this.layoutState$.next(state);
        };
        StateService.prototype.getLayoutStates = function () {
            return rxjs.of(this.layouts);
        };
        StateService.prototype.onLayoutState = function () {
            return this.layoutState$.asObservable();
        };
        StateService.prototype.setSidebarState = function (state) {
            this.sidebarState$.next(state);
        };
        StateService.prototype.getSidebarStates = function () {
            return rxjs.of(this.sidebars);
        };
        StateService.prototype.onSidebarState = function () {
            return this.sidebarState$.asObservable();
        };
        return StateService;
    }());
    StateService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StateService, deps: [{ token: i1__namespace$1.NbLayoutDirectionService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    StateService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StateService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StateService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i1__namespace$1.NbLayoutDirectionService }]; } });

    var SeoService = /** @class */ (function () {
        function SeoService(router, document, platformId) {
            this.router = router;
            this.destroy$ = new rxjs.Subject();
            this.isBrowser = i8.isPlatformBrowser(platformId);
            this.dom = document;
            if (this.isBrowser) {
                this.createCanonicalTag();
            }
        }
        SeoService.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        SeoService.prototype.createCanonicalTag = function () {
            this.linkCanonical = this.dom.createElement('link');
            this.linkCanonical.setAttribute('rel', 'canonical');
            this.dom.head.appendChild(this.linkCanonical);
            this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
        };
        SeoService.prototype.trackCanonicalChanges = function () {
            var _this = this;
            if (!this.isBrowser) {
                return;
            }
            this.router.events.pipe(operators.filter(function (event) { return event instanceof i1.NavigationEnd; }), operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.linkCanonical.setAttribute('href', _this.getCanonicalUrl());
            });
        };
        SeoService.prototype.getCanonicalUrl = function () {
            return this.dom.location.origin + this.dom.location.pathname;
        };
        return SeoService;
    }());
    SeoService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: SeoService, deps: [{ token: i1__namespace.Router }, { token: i1$1.NB_DOCUMENT }, { token: i0.PLATFORM_ID }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SeoService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: SeoService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: SeoService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () {
            return [{ type: i1__namespace.Router }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$1.NB_DOCUMENT]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.PLATFORM_ID]
                        }] }];
        } });

    // export interface QUERY_PARAMS {
    //   type:
    //   params:
    // }
    exports.QUERY_PARAMS_TYPE = void 0;
    (function (QUERY_PARAMS_TYPE) {
    })(exports.QUERY_PARAMS_TYPE || (exports.QUERY_PARAMS_TYPE = {}));
    exports.TYPE_GROUP = void 0;
    (function (TYPE_GROUP) {
        TYPE_GROUP["SEPARATOR"] = "separator";
        TYPE_GROUP["MENU"] = "menu";
        TYPE_GROUP["DEFAULT"] = "default";
    })(exports.TYPE_GROUP || (exports.TYPE_GROUP = {}));
    exports.TYPE_METHOD_REQUEST = void 0;
    (function (TYPE_METHOD_REQUEST) {
        TYPE_METHOD_REQUEST["POST"] = "POST";
        TYPE_METHOD_REQUEST["PUT"] = "PUT";
        TYPE_METHOD_REQUEST["GET"] = "GET";
        TYPE_METHOD_REQUEST["DELETE"] = "DELETE";
        TYPE_METHOD_REQUEST["PATCH"] = "PATCH";
    })(exports.TYPE_METHOD_REQUEST || (exports.TYPE_METHOD_REQUEST = {}));
    exports.DIRECTION = void 0;
    (function (DIRECTION) {
        DIRECTION["ASC"] = "ASCENDING";
        DIRECTION["DESC"] = "DESCENDING";
    })(exports.DIRECTION || (exports.DIRECTION = {}));
    exports.REST_FIELD_TYPES = void 0;
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
    })(exports.REST_FIELD_TYPES || (exports.REST_FIELD_TYPES = {}));
    exports.STRATEGY_AUTH = void 0;
    (function (STRATEGY_AUTH) {
        STRATEGY_AUTH["EMAIL"] = "email";
    })(exports.STRATEGY_AUTH || (exports.STRATEGY_AUTH = {}));
    exports.PERMISSION = void 0;
    (function (PERMISSION) {
        PERMISSION["C"] = "create";
        PERMISSION["R"] = "read";
        PERMISSION["U"] = "update";
        PERMISSION["D"] = "delete";
        PERMISSION["A"] = "all";
    })(exports.PERMISSION || (exports.PERMISSION = {}));

    var AuthGuard = /** @class */ (function () {
        function AuthGuard(router) {
            this.router = router;
        }
        AuthGuard.prototype.canActivate = function () {
            var authJson = localStorage.getItem(GLOBALS.AUTH_APP_TOKEN);
            var authApp = authJson ? JSON.parse(authJson) : {};
            if (authApp && (authApp === null || authApp === void 0 ? void 0 : authApp.value))
                return true;
            else {
                this.router.navigateByUrl('/login');
                return false;
            }
        };
        return AuthGuard;
    }());
    AuthGuard.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: AuthGuard, deps: [{ token: i1__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthGuard.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: AuthGuard });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: AuthGuard, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i1__namespace.Router }]; } });

    var EXCEL_EXTENSION = ".xlsx";
    var CSV_EXTENSION = ".csv";
    var CSV_TYPE = "text/csv;charset=utf-8;";
    var EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8;";
    var ALPHABET = [
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
    var RestExportService = /** @class */ (function () {
        function RestExportService(http) {
            this.http = http;
        }
        RestExportService.prototype.exportToExcel = function (data, fileName, param) {
            if (param === void 0) { param = false; }
            // inserting first blank row
            var worksheet = XLSX__namespace.utils.json_to_sheet(data[0].data, this.getOptions(data[0]));
            for (var i = 1, length = data.length; i < length; i++) {
                // adding a dummy row for separation
                XLSX__namespace.utils.sheet_add_json(worksheet, [{}], this.getOptions({
                    data: [],
                    skipHeader: true,
                }, -1));
                XLSX__namespace.utils.sheet_add_json(worksheet, data[i].data, this.getOptions(data[i], -1));
            }
            var workbook = {
                Sheets: { Sheet1: worksheet },
                SheetNames: ["Sheet1"],
            };
            var excelBuffer = XLSX__namespace.write(workbook, {
                bookType: "xlsx",
                type: "buffer",
            });
            var blob = new Blob([excelBuffer], {
                type: EXCEL_TYPE,
            });
            if (param) {
                return blob;
            }
            else {
                FileSaver__namespace.saveAs(blob, fileName + EXCEL_EXTENSION);
                return null;
            }
            // save to file
        };
        RestExportService.prototype.exportToCsv = function (header, data, fileName, param) {
            if (param === void 0) { param = false; }
            var csvData = this.ConvertToCSV(data, header);
            var blob = new Blob(["\ufeff" + csvData], {
                type: CSV_TYPE,
            });
            if (param)
                return blob;
            else {
                FileSaver__namespace.saveAs(blob, "" + fileName + CSV_EXTENSION);
            }
        };
        RestExportService.prototype.exportToPdf = function (header, data, fileName, fileTitle, param) {
            if (param === void 0) { param = false; }
            var doc = new jsPDF__default["default"]("l", "mm", [305, 250]);
            var col = header;
            var rows = [];
            var rowCountModNew = data;
            rowCountModNew.forEach(function (element) {
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
                doc.save(fileName + ".pdf");
        };
        RestExportService.prototype.getOptions = function (json, origin) {
            // adding actual data
            var options = {
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
        };
        RestExportService.prototype.ConvertToCSV = function (objArray, headerList) {
            var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
            var str = "";
            var row = "";
            for (var index in headerList) {
                row += headerList[index] + ",";
            }
            row = row.slice(0, -1);
            str += row + "\r\n";
            var _loop_1 = function (i) {
                var line = "";
                headerList.forEach(function (element, index) {
                    var head = headerList[index];
                    if (index == 0)
                        line += array[i][head];
                    else
                        line += "," + array[i][head];
                });
                str += line + "\r\n";
            };
            for (var i = 0; i < array.length; i++) {
                _loop_1(i);
            }
            return str;
        };
        RestExportService.prototype.generateZip = function (header, pdfData, csvData, excelData) {
            var conserved = true;
            var pdf = this.exportToPdf(header, pdfData, "rest_file_pdf", "", conserved);
            var csv = this.exportToCsv(header, csvData, "rest_file_csv", conserved);
            var excel = this.exportToExcel(excelData, "rest_file_excel", conserved);
            var zip = new JSZip__namespace();
            var document = zip.folder("rest_document");
            document.file("rest_file_pdf.pdf", pdf, { base64: true });
            document.file("rest_file_csv.csv", csv, { base64: true });
            document.file("rest_file_excel.xlsx", excel, { base64: true });
            zip.generateAsync({ type: "blob" }).then(function (content) {
                FileSaver__namespace.saveAs(content, "rest_document.zip");
            });
        };
        RestExportService.prototype.s2ab = function (s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i != s.length; ++i)
                view[i] = s.charCodeAt(i) & 0xff;
            return buf;
        };
        return RestExportService;
    }());
    RestExportService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestExportService, deps: [{ token: i1__namespace$2.HttpClient }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RestExportService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestExportService, providedIn: "root" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestExportService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: "root",
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$2.HttpClient }]; } });

    var UploadFileComponent = /** @class */ (function () {
        function UploadFileComponent(ref, toastrService) {
            this.ref = ref;
            this.toastrService = toastrService;
            this.positions = i1$1.NbGlobalPhysicalPosition;
            this.isSubmit = false;
            this.control = new i2.FileUploadControl({
                listVisible: true,
                discardInvalid: true,
                multiple: false,
            }, [i2.FileUploadValidators.filesLimit(1)]);
        }
        UploadFileComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.subscription = this.control.valueChanges.subscribe(function (values) {
                if (values != undefined && values.length > 0) {
                    var file = values[0];
                    var name = file.name.split(".");
                    var ext = name[name.length - 1];
                    if (ext == "xlsx" || ext == "xls") {
                        var reader = new FileReader();
                        reader.readAsBinaryString(file);
                        reader.onload = function (e) {
                            /* create workbook */
                            var binarystr = e.target.result;
                            var wb = XLSX__namespace.read(binarystr, {
                                type: "binary",
                                cellDates: true,
                            });
                            /* selected the first sheet */
                            var wsname = wb.SheetNames[0];
                            var ws = wb.Sheets[wsname];
                            /* save data */
                            var data = XLSX__namespace.utils.sheet_to_json(ws);
                            _this.dataDoc = data;
                        };
                    }
                    else {
                        _this.showToast(_this.positions.BOTTOM_LEFT, "danger");
                        _this.control.clear();
                    }
                }
            });
        };
        UploadFileComponent.prototype.addDatas = function () {
            this.ref.close(this.dataDoc);
        };
        UploadFileComponent.prototype.close = function () {
            this.ref.close();
        };
        UploadFileComponent.prototype.showToast = function (position, status) {
            this.toastrService.show(status || "Echec", "Fichier non pris en charge", {
                position: position,
                status: status,
            });
        };
        return UploadFileComponent;
    }());
    UploadFileComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: UploadFileComponent, deps: [{ token: i1__namespace$1.NbDialogRef }, { token: i1__namespace$1.NbToastrService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    UploadFileComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: UploadFileComponent, selector: "ngx-upload-file", inputs: { datas: "datas", title: "title" }, ngImport: i0__namespace, template: "<nb-card accent=\"danger\" style=\"width: 370px\">\n  <nb-card-header>{{ title }}</nb-card-header>\n\n  <nb-card-body>\n    <file-upload [control]=\"control\"></file-upload>\n  </nb-card-body>\n\n  <nb-card-footer style=\"display: flex; justify-content: end\">\n    <div class=\"buttons-row\">\n      <button\n        nbButton\n        (click)=\"close()\"\n        status=\"danger\"\n        style=\"margin-right: 10px\"\n      >\n        Annuler\n      </button>\n\n      <button nbButton (click)=\"addDatas()\" status=\"success\">\n        Charger le fichier\n      </button>\n    </div>\n  </nb-card-footer>\n</nb-card>\n", styles: [""], components: [{ type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i2__namespace.FileUploadComponent, selector: "file-upload:not([simple])", inputs: ["control", "animation", "multiple"] }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i1__namespace$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: UploadFileComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: "ngx-upload-file",
                        templateUrl: "./upload-file.component.html",
                        styleUrls: ["./upload-file.component.scss"],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.NbDialogRef }, { type: i1__namespace$1.NbToastrService }]; }, propDecorators: { datas: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }] } });

    var RestLangService = /** @class */ (function () {
        function RestLangService(translate, restConfigService) {
            var _this = this;
            this.translate = translate;
            this.restConfigService = restConfigService;
            this.selected = "";
            this.translateInstant = function (word) { return _this.translate.instant(word); };
        }
        RestLangService.prototype.setInitialAppLanguage = function () {
            var lang = this.translate.getBrowserLang();
            this.translate.setDefaultLang(lang);
            if (localStorage.getItem(GLOBALS.LNG_KEY) !== null) {
                var lng = JSON.parse(localStorage.getItem(GLOBALS.LNG_KEY));
                this.setLanguage(lng);
                this.selected = lng;
            }
            else {
                this.setLanguage(GLOBALS.DEFAULT_LANG);
            }
        };
        RestLangService.prototype.setLanguage = function (lang) {
            this.translate.use(lang);
            this.selected = lang;
            localStorage.setItem(GLOBALS.LNG_KEY, JSON.stringify(lang));
        };
        RestLangService.prototype.getLanguages = function () {
            return this.restConfigService.restLanguage;
        };
        return RestLangService;
    }());
    RestLangService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestLangService, deps: [{ token: i1__namespace$3.TranslateService }, { token: RestAdminConfigService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RestLangService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestLangService, providedIn: "root" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestLangService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: "root",
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$3.TranslateService }, { type: RestAdminConfigService }]; } });

    var FsIconCComponent = /** @class */ (function () {
        function FsIconCComponent() {
        }
        FsIconCComponent.prototype.isDir = function () {
            return this.place == "header-place";
        };
        return FsIconCComponent;
    }());
    FsIconCComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FsIconCComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    FsIconCComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: FsIconCComponent, selector: "ngx-fs-icon", inputs: { expanded: "expanded", place: "place" }, ngImport: i0__namespace, template: "\n    <nb-tree-grid-row-toggle\n      [expanded]=\"expanded\"\n      *ngIf=\"isDir(); else fileIcon\"\n    >\n    </nb-tree-grid-row-toggle>\n    <ng-template #fileIcon> </ng-template>\n  ", isInline: true, components: [{ type: i1__namespace$1.NbTreeGridRowToggleComponent, selector: "nb-tree-grid-row-toggle", inputs: ["expanded"] }], directives: [{ type: i8__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FsIconCComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: "ngx-fs-icon",
                        template: "\n    <nb-tree-grid-row-toggle\n      [expanded]=\"expanded\"\n      *ngIf=\"isDir(); else fileIcon\"\n    >\n    </nb-tree-grid-row-toggle>\n    <ng-template #fileIcon> </ng-template>\n  ",
                    }]
            }], propDecorators: { expanded: [{
                    type: i0.Input
                }], place: [{
                    type: i0.Input
                }] } });

    var RestResourceListFieldComponent = /** @class */ (function () {
        function RestResourceListFieldComponent(dataSourceBuilder, langService) {
            this.dataSourceBuilder = dataSourceBuilder;
            this.langService = langService;
            this.customColumn = "name";
            this.allColumns = [this.customColumn];
        }
        RestResourceListFieldComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a, _b, _c, _d, _e, _f, _g, _h;
            this.restField = this.value.restField;
            this.val = ___namespace.get(this.rowData, this.restField.label);
            switch (this.restField.type) {
                case exports.REST_FIELD_TYPES.HAS_MANY:
                    var datas_1 = [];
                    this.val.forEach(function (item) {
                        var _a, _b, _c;
                        datas_1.push({
                            data: {
                                name: ((_c = (_b = (_a = _this.restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.listConfig) === null || _c === void 0 ? void 0 : _c.restManyResources.label)
                                    ? item[_this.restField.metaData.listConfig.restManyResources.label]
                                    : item,
                                item: item,
                            },
                        });
                    });
                    var rowsT = [
                        {
                            data: {
                                name: this.restField.name,
                                place: "header-place",
                            },
                            children: datas_1,
                        },
                    ];
                    this.dataSource = this.dataSourceBuilder.create(rowsT);
                    break;
                case exports.REST_FIELD_TYPES.BELONG_TO_MANY:
                    var items_1 = [];
                    this.val.forEach(function (item) {
                        items_1.push({
                            data: {
                                name: item[_this.restField.metaData.listConfig.restBelongToManyResources
                                    .label],
                                item: item,
                            },
                        });
                    });
                    var rowsBelongToMany = [
                        {
                            data: {
                                name: this.restField.name,
                                place: "header-place",
                            },
                            children: items_1,
                        },
                    ];
                    this.dataSource = this.dataSourceBuilder.create(rowsBelongToMany);
                    break;
                case exports.REST_FIELD_TYPES.HAS_ONE:
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
        };
        Object.defineProperty(RestResourceListFieldComponent.prototype, "REST_FIELD_TYPES", {
            get: function () {
                return exports.REST_FIELD_TYPES;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RestResourceListFieldComponent.prototype, "jsonValue", {
            get: function () {
                var _this = this;
                if (this.restField.i18n == true) {
                    this.restField.metaData.addConfig.jsonConfig.jsonFields.map(function (field) {
                        if (field == _this.langService.selected) {
                            if (_this.val[0] == "{")
                                _this._jsonValue = JSON.parse(_this.val)[field];
                            else if (typeof _this.val !== "string")
                                _this._jsonValue = _this.val[field];
                            else
                                _this._jsonValue = _this.val;
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
            },
            enumerable: false,
            configurable: true
        });
        return RestResourceListFieldComponent;
    }());
    RestResourceListFieldComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestResourceListFieldComponent, deps: [{ token: i1__namespace$1.NbTreeGridDataSourceBuilder }, { token: RestLangService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RestResourceListFieldComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestResourceListFieldComponent, selector: "ngx-rest-resource-list-field", inputs: { value: "value", rowData: "rowData" }, ngImport: i0__namespace, template: "<div\n  *ngIf=\"\n    restField.type == REST_FIELD_TYPES.TEXT ||\n    restField.type == REST_FIELD_TYPES.STRING ||\n    restField.type == REST_FIELD_TYPES.NUMBER ||\n    restField.type == REST_FIELD_TYPES.ENUM\n  \"\n>\n  <ng-container *ngIf=\"!restField.template\"> {{ val }}</ng-container>\n\n  <ng-container *ngIf=\"restField.template\">\n    <cng-html-compiler [template]=\"restField.template\" [componentClass]=\"val\">\n    </cng-html-compiler>\n  </ng-container>\n</div>\n\n<div *ngIf=\"restField.type == REST_FIELD_TYPES.BOOLEAN\" class=\"text-center\">\n  <ng-container *ngIf=\"!restField.template\">\n    <nb-checkbox [checked]=\"val\" [disabled]=\"true\"></nb-checkbox>\n  </ng-container>\n\n  <ng-container *ngIf=\"restField.template\">\n    <cng-html-compiler [template]=\"restField.template\" [componentClass]=\"val\">\n    </cng-html-compiler>\n  </ng-container>\n</div>\n\n<div *ngIf=\"restField.type == REST_FIELD_TYPES.IMAGE\" class=\"text-center\">\n  <ng-container *ngIf=\"!restField.template\">\n    <img class=\"rest-img\" [src]=\"val\" alt=\"\" [style]=\"style\"\n  /></ng-container>\n  <ng-container *ngIf=\"restField.template\">\n    <cng-html-compiler [template]=\"restField.template\" [componentClass]=\"val\">\n    </cng-html-compiler>\n  </ng-container>\n</div>\n\n<div *ngIf=\"restField.type == REST_FIELD_TYPES.HAS_ONE\">\n  <ng-container *ngIf=\"!restField.template\"> {{ val }}</ng-container>\n  <ng-container *ngIf=\"restField.template\">\n    <cng-html-compiler [template]=\"restField.template\" [componentClass]=\"val\">\n    </cng-html-compiler>\n  </ng-container>\n</div>\n\n<div *ngIf=\"restField.type == REST_FIELD_TYPES.BELONG_TO\">\n  <ng-container *ngIf=\"!restField.template\"> {{ val }}</ng-container>\n  <ng-container *ngIf=\"restField.template\">\n    <cng-html-compiler [template]=\"restField.template\" [componentClass]=\"val\">\n    </cng-html-compiler>\n  </ng-container>\n</div>\n\n<div *ngIf=\"restField.type == REST_FIELD_TYPES.MORPH\">\n  <ng-container *ngIf=\"!restField.template\"> {{ val }}</ng-container>\n  <ng-container *ngIf=\"restField.template\">\n    <cng-html-compiler [template]=\"restField.template\" [componentClass]=\"val\">\n    </cng-html-compiler>\n  </ng-container>\n</div>\n\n<div *ngIf=\"restField.type == REST_FIELD_TYPES.JSON\">\n  <ng-container *ngIf=\"!restField.template\"> {{ jsonValue }}</ng-container>\n  <ng-container *ngIf=\"restField.template\">\n    <cng-html-compiler [template]=\"restField.template\" [componentClass]=\"jsonValue\">\n    </cng-html-compiler>\n  </ng-container>\n</div>\n\n<div *ngIf=\"restField.type == REST_FIELD_TYPES.DATE\">\n  <ng-container *ngIf=\"!restField.template\"> {{ val }}</ng-container>\n  <ng-container *ngIf=\"restField.template\">\n    <cng-html-compiler [template]=\"restField.template\" [componentClass]=\"val\">\n    </cng-html-compiler>\n  </ng-container>\n</div>\n\n<div *ngIf=\"restField.type == REST_FIELD_TYPES.HAS_MANY\">\n  <table [nbTreeGrid]=\"dataSource\">\n    <tr nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"></tr>\n\n    <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n      <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n        <ngx-fs-icon\n          [expanded]=\"row.expanded\"\n          [place]=\"row.data.place\"\n        ></ngx-fs-icon>\n        <ng-container\n          *ngIf=\"!restField?.metaData?.listConfig?.restManyResources.template\"\n        >\n          {{ row.data[customColumn] }}\n        </ng-container>\n\n        <ng-container\n          *ngIf=\"restField?.metaData?.listConfig?.restManyResources.template\"\n        >\n          <span *ngIf=\"row.data.place\">{{ restField.name }}</span>\n          <ng-container *ngIf=\"!row.data.place\">\n            <cng-html-compiler\n              [template]=\"\n                restField.metaData.listConfig.restManyResources.template\n              \"\n              [componentClass]=\"row.data.item\"\n            >\n            </cng-html-compiler>\n          </ng-container>\n        </ng-container>\n      </td>\n    </ng-container>\n  </table>\n</div>\n\n<div *ngIf=\"restField.type == REST_FIELD_TYPES.BELONG_TO_MANY\">\n  <table [nbTreeGrid]=\"dataSource\">\n    <tr nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"></tr>\n\n    <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n      <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n        <ngx-fs-icon\n          [expanded]=\"row.expanded\"\n          [place]=\"row.data.place\"\n        ></ngx-fs-icon>\n        <ng-container\n          *ngIf=\"\n            !restField.metaData.listConfig.restBelongToManyResources.template\n          \"\n        >\n          {{ row.data[customColumn] }}\n        </ng-container>\n\n        <ng-container\n          *ngIf=\"\n            restField.metaData.listConfig.restBelongToManyResources.template\n          \"\n        >\n          <span *ngIf=\"row.data.place\">{{ restField.name }}</span>\n          <ng-container *ngIf=\"!row.data.place\">\n            <cng-html-compiler\n              [template]=\"\n                restField.metaData.listConfig.restBelongToManyResources.template\n              \"\n              [componentClass]=\"row.data.item\"\n            >\n            </cng-html-compiler>\n          </ng-container>\n        </ng-container>\n      </td>\n    </ng-container>\n  </table>\n</div>\n", styles: ["@use \"@nebular/theme/styles/themes/default\";.rest-img{max-width:100px}.nb-theme-default :host button[nbTreeGridRowToggle]{background:transparent;border:none;padding:0}.nb-theme-default :host .search-label{display:block}.nb-theme-default :host .search-input{margin-bottom:1rem}.nb-theme-default :host .nb-column-name{width:100%}.nb-theme-default :host ::ng-deep .row-toggle-button{color:#222b45}.nb-theme-default :host .nb-tree-grid-header-cell,.nb-theme-default :host .nb-tree-grid-header-cell button{text-transform:capitalize}@media screen and (min-width: 400px){.nb-theme-default :host .nb-column-name,.nb-theme-default :host .nb-column-size{width:50%}}@media screen and (min-width: 500px){.nb-theme-default :host .nb-column-name,.nb-theme-default :host .nb-column-size,.nb-theme-default :host .nb-column-kind{width:33.333%}}@media screen and (min-width: 600px){.nb-theme-default :host .nb-column-name{width:31%}.nb-theme-default :host .nb-column-size,.nb-theme-default :host .nb-column-kind,.nb-theme-default :host .nb-column-items{width:23%}}.nb-theme-dark :host button[nbTreeGridRowToggle]{background:transparent;border:none;padding:0}.nb-theme-dark :host .search-label{display:block}.nb-theme-dark :host .search-input{margin-bottom:1rem}.nb-theme-dark :host .nb-column-name{width:100%}.nb-theme-dark :host ::ng-deep .row-toggle-button{color:#fff}.nb-theme-dark :host .nb-tree-grid-header-cell,.nb-theme-dark :host .nb-tree-grid-header-cell button{text-transform:capitalize}@media screen and (min-width: 400px){.nb-theme-dark :host .nb-column-name,.nb-theme-dark :host .nb-column-size{width:50%}}@media screen and (min-width: 500px){.nb-theme-dark :host .nb-column-name,.nb-theme-dark :host .nb-column-size,.nb-theme-dark :host .nb-column-kind{width:33.333%}}@media screen and (min-width: 600px){.nb-theme-dark :host .nb-column-name{width:31%}.nb-theme-dark :host .nb-column-size,.nb-theme-dark :host .nb-column-kind,.nb-theme-dark :host .nb-column-items{width:23%}}.nb-theme-cosmic :host button[nbTreeGridRowToggle]{background:transparent;border:none;padding:0}.nb-theme-cosmic :host .search-label{display:block}.nb-theme-cosmic :host .search-input{margin-bottom:1rem}.nb-theme-cosmic :host .nb-column-name{width:100%}.nb-theme-cosmic :host ::ng-deep .row-toggle-button{color:#fff}.nb-theme-cosmic :host .nb-tree-grid-header-cell,.nb-theme-cosmic :host .nb-tree-grid-header-cell button{text-transform:capitalize}@media screen and (min-width: 400px){.nb-theme-cosmic :host .nb-column-name,.nb-theme-cosmic :host .nb-column-size{width:50%}}@media screen and (min-width: 500px){.nb-theme-cosmic :host .nb-column-name,.nb-theme-cosmic :host .nb-column-size,.nb-theme-cosmic :host .nb-column-kind{width:33.333%}}@media screen and (min-width: 600px){.nb-theme-cosmic :host .nb-column-name{width:31%}.nb-theme-cosmic :host .nb-column-size,.nb-theme-cosmic :host .nb-column-kind,.nb-theme-cosmic :host .nb-column-items{width:23%}}.nb-theme-corporate :host button[nbTreeGridRowToggle]{background:transparent;border:none;padding:0}.nb-theme-corporate :host .search-label{display:block}.nb-theme-corporate :host .search-input{margin-bottom:1rem}.nb-theme-corporate :host .nb-column-name{width:100%}.nb-theme-corporate :host ::ng-deep .row-toggle-button{color:#222b45}.nb-theme-corporate :host .nb-tree-grid-header-cell,.nb-theme-corporate :host .nb-tree-grid-header-cell button{text-transform:capitalize}@media screen and (min-width: 400px){.nb-theme-corporate :host .nb-column-name,.nb-theme-corporate :host .nb-column-size{width:50%}}@media screen and (min-width: 500px){.nb-theme-corporate :host .nb-column-name,.nb-theme-corporate :host .nb-column-size,.nb-theme-corporate :host .nb-column-kind{width:33.333%}}@media screen and (min-width: 600px){.nb-theme-corporate :host .nb-column-name{width:31%}.nb-theme-corporate :host .nb-column-size,.nb-theme-corporate :host .nb-column-kind,.nb-theme-corporate :host .nb-column-items{width:23%}}\n"], components: [{ type: i3__namespace.CngHtmlCompilerComponent, selector: "cng-html-compiler", inputs: ["template", "componentClass", "imports"] }, { type: i1__namespace$1.NbCheckboxComponent, selector: "nb-checkbox", inputs: ["status", "checked", "disabled", "indeterminate"], outputs: ["checkedChange"] }, { type: i1__namespace$1.NbTreeGridComponent, selector: "table[nbTreeGrid]", inputs: ["levelPadding", "nbTreeGrid", "equalColumnsWidth"] }, { type: i1__namespace$1.NbTreeGridRowComponent, selector: "tr[nbTreeGridRow]", inputs: ["doubleClickDelay", "clickToToggle"] }, { type: FsIconCComponent, selector: "ngx-fs-icon", inputs: ["expanded", "place"] }], directives: [{ type: i8__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace$1.NbTreeGridRowDefDirective, selector: "[nbTreeGridRowDef]", inputs: ["nbTreeGridRowDefColumns"] }, { type: i1__namespace$1.NbTreeGridColumnDefDirective, selector: "[nbTreeGridColumnDef]", inputs: ["nbTreeGridColumnDef", "hideOn", "showOn"] }, { type: i1__namespace$1.NbTreeGridCellDefDirective, selector: "[nbTreeGridCellDef]" }, { type: i1__namespace$1.NbTreeGridCellDirective, selector: "td[nbTreeGridCell]" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestResourceListFieldComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: "ngx-rest-resource-list-field",
                        templateUrl: "./rest.resource-list-field.component.html",
                        styleUrls: ["./rest.resource-list-field.component.scss"],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.NbTreeGridDataSourceBuilder }, { type: RestLangService }]; }, propDecorators: { value: [{
                    type: i0.Input
                }], rowData: [{
                    type: i0.Input
                }] } });

    var FILTER_OPERATORS = [
        {
            name: "filter-compare.equality",
            value: "=",
        },
        {
            name: "filter-compare.superiority",
            value: "get",
        },
        {
            name: "filter-compare.inferiority",
            value: "let",
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
            name: "filter-compare.include",
            value: "lk",
        },
    ];
    var RestResourceService = /** @class */ (function () {
        function RestResourceService(http, serviceRestConfig) {
            var _this = this;
            this.http = http;
            this.serviceRestConfig = serviceRestConfig;
            this.getResources = function (config) {
                return _this.http.get(_this.serviceRestConfig.restBaseUrl + "/" + config.api, {
                    params: config.queryParams,
                });
            };
            this.getOneResource = function (config, id) {
                return _this.http.get(_this.serviceRestConfig.restBaseUrl + "/" + config.api + "/" + id, {
                    params: config.queryParams,
                });
            };
            this.addResources = function (addConfig, datas) {
                return _this.http.post(_this.serviceRestConfig.restBaseUrl + "/" + addConfig.api, datas, { headers: _this.getCustomHeaders(addConfig.header) });
            };
            this.editResources = function (editConfig, hasFile, datas, id) {
                if (hasFile)
                    return _this.http.post(_this.serviceRestConfig.restBaseUrl + "/" + editConfig.api + "/" + id, datas, { headers: _this.getCustomHeaders(editConfig.header) });
                return _this.http.put(_this.serviceRestConfig.restBaseUrl + "/" + editConfig.api + "/" + id, datas, { headers: _this.getCustomHeaders(editConfig.header) });
            };
            this.deleteResources = function (listConfig, id) { return _this.http.delete(_this.serviceRestConfig.restBaseUrl + "/" + listConfig.api + "/" + id); };
        }
        RestResourceService.prototype.getCustomHeaders = function (headerElement) {
            var headers = new i1$2.HttpHeaders(); // create header object
            if (headerElement !== undefined) {
                Object.keys(headerElement).map(function (key) {
                    headers = headers.append(key, headerElement[key]); // add another header
                });
            }
            return headers;
        };
        return RestResourceService;
    }());
    RestResourceService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestResourceService, deps: [{ token: i1__namespace$2.HttpClient }, { token: RestAdminConfigService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RestResourceService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestResourceService, providedIn: "root" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestResourceService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: "root",
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$2.HttpClient }, { type: RestAdminConfigService }]; } });

    var RestResourceEditorFieldsComponent = /** @class */ (function (_super) {
        __extends(RestResourceEditorFieldsComponent, _super);
        function RestResourceEditorFieldsComponent(serviceRestAdminConfig, serviceResResource) {
            var _this = _super.call(this) || this;
            _this.serviceRestAdminConfig = serviceRestAdminConfig;
            _this.serviceResResource = serviceResResource;
            // Test
            _this.uploadedFile = new rxjs.BehaviorSubject(null);
            // Control sur les fichiers a upload
            _this.control = new i2.FileUploadControl({
                listVisible: true,
                accept: ["image/*"],
                discardInvalid: true,
                multiple: false,
            }, [
                i2.FileUploadValidators.accept(["image/*"]),
                i2.FileUploadValidators.filesLimit(1),
            ]);
            _this.controlCroper = null;
            _this.croppedImage = "";
            _this.isCrop = false;
            return _this;
        }
        // End test
        RestResourceEditorFieldsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.subscription = this.control.valueChanges.subscribe(function (values) {
                _this.getImage(values[0]);
                _this.controlCroper = values[0];
            });
            this.infoRows = this.cell.getColumn().valuePrepareFunction();
            this.field = this.infoRows.restField;
            switch (this.field.type) {
                case exports.REST_FIELD_TYPES.HAS_MANY:
                    this.cell.newValue = new Set([]);
                    break;
                case exports.REST_FIELD_TYPES.BELONG_TO:
                    var restResource = this.serviceRestAdminConfig.getSpecificResource(this.field.metaData.addConfig.belongToOptions.resourceName);
                    this.serviceResResource
                        .getResources({
                        api: restResource.api,
                        queryParams: this.field.metaData.addConfig.belongToOptions
                            .queryParams
                            ? this.field.metaData.addConfig.belongToOptions.queryParams
                            : restResource.queryParams,
                    })
                        .subscribe(function (response) {
                        _this.options = response;
                        _this.filteredOptions$ = rxjs.of(_this.options);
                    });
                    break;
                case exports.REST_FIELD_TYPES.BELONG_TO_MANY:
                    this.cell.newValue = new Set([]);
                    var resource = this.serviceRestAdminConfig.getSpecificResource(this.field.metaData.addConfig.belongToManyOptions.relatedName);
                    this.serviceResResource
                        .getResources({
                        api: resource.api,
                        queryParams: this.field.metaData.addConfig.belongToManyOptions
                            .queryParams
                            ? this.field.metaData.addConfig.belongToManyOptions.queryParams
                            : resource.queryParams,
                    })
                        .subscribe(function (response) {
                        _this.options = response;
                        _this.filteredOptions$ = rxjs.of(_this.options);
                    });
                    break;
                case exports.REST_FIELD_TYPES.IMAGE:
                case exports.REST_FIELD_TYPES.FILE:
                    this.cell.newValue = [];
                    break;
                case exports.REST_FIELD_TYPES.BOOLEAN:
                    this.cell.newValue = false;
                    break;
                // case REST_FIELD_TYPES.PDF:
                // this.cell.newValue = [];
                // break;
                default:
                    break;
            }
        };
        Object.defineProperty(RestResourceEditorFieldsComponent.prototype, "REST_FIELD_TYPES", {
            get: function () {
                return exports.REST_FIELD_TYPES;
            },
            enumerable: false,
            configurable: true
        });
        // Tags
        RestResourceEditorFieldsComponent.prototype.onTagRemove = function (tagToRemove) {
            var treesA = new Set(this.cell.newValue);
            treesA.delete(tagToRemove.text);
            this.cell.newValue = Array.from(treesA.values());
        };
        RestResourceEditorFieldsComponent.prototype.onTagAdd = function (_a) {
            var value = _a.value, input = _a.input;
            if (value) {
                var treesA = new Set(this.cell.newValue);
                treesA.add(value);
                this.cell.newValue = Array.from(treesA.values());
            }
            input.nativeElement.value = "";
        };
        // End tag
        // Autocomplete
        RestResourceEditorFieldsComponent.prototype.filter = function (value) {
            var _this = this;
            if (typeof value == "string") {
                return this.options.filter(function (optionValue) {
                    return _this.field.metaData.addConfig.belongToOptions.filterKeys.some(function (elt) { return ("" + optionValue[elt].toLowerCase()).includes("" + value.toLowerCase()); });
                });
            }
        };
        RestResourceEditorFieldsComponent.prototype.getFilteredOptions = function (value) {
            var _this = this;
            return rxjs.of(value).pipe(operators.map(function (filterString) { return _this.filter(filterString); }));
        };
        RestResourceEditorFieldsComponent.prototype.onChange = function () {
            this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
        };
        RestResourceEditorFieldsComponent.prototype.onSelectionChange = function ($event) {
            this.filteredOptions$ = this.getFilteredOptions($event);
        };
        // End Autocomplete
        RestResourceEditorFieldsComponent.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        RestResourceEditorFieldsComponent.prototype.getImage = function (file) {
            var _this = this;
            if (FileReader && file) {
                var fr = new FileReader();
                fr.onload = function (e) {
                    _this.uploadedFile.next(e.target.result);
                };
                fr.readAsDataURL(file);
            }
            else {
                this.uploadedFile.next(null);
            }
        };
        RestResourceEditorFieldsComponent.prototype.imageCropped = function (event) {
            this.croppedImage = event.base64;
        };
        RestResourceEditorFieldsComponent.prototype.activeCroper = function () {
            this.isCrop = true;
        };
        RestResourceEditorFieldsComponent.prototype.saveCroper = function () {
            this.isCrop = false;
            this.uploadedFile.next(this.croppedImage);
            this.cell.setValue(i5.base64ToFile(this.croppedImage));
        };
        //belongToManyOptions
        RestResourceEditorFieldsComponent.prototype.onChoose = function (event) {
            var _a;
            var cellData = Array.from(this.cell.newValue.values());
            if (event) {
                var search = cellData.find(function (elt) { return elt.id == event.id; });
                if (search == undefined) {
                    var newElt = (_a = {
                            id: event.id
                        },
                        _a[this.field.metaData.addConfig.belongToManyOptions.relatedIdName] = event.id,
                        _a[this.field.metaData.addConfig.belongToManyOptions.resourceIdName] = "",
                        _a[this.field.metaData.addConfig.belongToManyOptions.filterKeys[0]] = event[this.field.metaData.addConfig.belongToManyOptions.filterKeys[0]],
                        _a.saveRelatedIdName = this.field.metaData.addConfig.belongToManyOptions.relatedIdName,
                        _a.saveResourceIdName = this.field.metaData.addConfig.belongToManyOptions.resourceIdName,
                        _a);
                    var treesA = new Set(this.cell.newValue);
                    treesA.add(newElt);
                    this.cell.newValue = Array.from(treesA.values());
                }
            }
            this.inputBelongTo.nativeElement.value = "";
        };
        RestResourceEditorFieldsComponent.prototype.onTagRemoveBelong = function (tagToRemove) {
            var _this = this;
            var cellData = Array.from(this.cell.newValue.values());
            var save = [];
            cellData.forEach(function (elt) {
                if (elt[_this.field.metaData.addConfig.belongToManyOptions.template
                    ? _this.field.metaData.addConfig.belongToManyOptions.template
                    : _this.field.metaData.addConfig.belongToManyOptions.filterKeys[0]].localeCompare(tagToRemove.text) != 0)
                    save.push(elt);
            });
            this.cell.newValue = Array.from(save);
        };
        //End BelongToMany
        RestResourceEditorFieldsComponent.prototype.getField = function (fields, value) {
            return ___namespace.get(fields, value);
        };
        return RestResourceEditorFieldsComponent;
    }(i9.DefaultEditor));
    RestResourceEditorFieldsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestResourceEditorFieldsComponent, deps: [{ token: RestAdminConfigService }, { token: RestResourceService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RestResourceEditorFieldsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestResourceEditorFieldsComponent, selector: "input-editor", viewQueries: [{ propertyName: "input", first: true, predicate: ["autoInput"], descendants: true }, { propertyName: "inputBelongTo", first: true, predicate: ["autoInputBelongToMany"], descendants: true }], usesInheritance: true, ngImport: i0__namespace, template: "<ng-container *ngIf=\"field.inForm == true\">\n  <!-- Input type string -->\n  <input\n    type=\"text\"\n    *ngIf=\"field.type == REST_FIELD_TYPES.STRING\"\n    [(ngModel)]=\"cell.newValue\"\n    [name]=\"cell.getId()\"\n    [placeholder]=\"cell.getTitle()\"\n    [disabled]=\"!cell.isEditable()\"\n    (click)=\"onClick.emit($event)\"\n    (keydown.enter)=\"onEdited.emit($event)\"\n    (keydown.esc)=\"onStopEditing.emit()\"\n    class=\"form-control ng-valid ng-touched ng-dirty\"\n    fullWidth\n  />\n\n  <!-- Input type text -->\n  <textarea\n    [(ngModel)]=\"cell.newValue\"\n    [name]=\"cell.getId()\"\n    [placeholder]=\"cell.getTitle()\"\n    [disabled]=\"!cell.isEditable()\"\n    (click)=\"onClick.emit($event)\"\n    (keydown.enter)=\"onEdited.emit($event)\"\n    (keydown.esc)=\"onStopEditing.emit()\"\n    class=\"form-control ng-valid ng-touched ng-dirty\"\n    *ngIf=\"field.type == REST_FIELD_TYPES.TEXT\"\n    fullWidth\n  ></textarea>\n\n  <!-- Input type number  -->\n  <input\n    [(ngModel)]=\"cell.newValue\"\n    [name]=\"cell.getId()\"\n    [placeholder]=\"cell.getTitle()\"\n    [disabled]=\"!cell.isEditable()\"\n    (click)=\"onClick.emit($event)\"\n    (keydown.enter)=\"onEdited.emit($event)\"\n    (keydown.esc)=\"onStopEditing.emit()\"\n    class=\"form-control ng-valid ng-touched ng-dirty\"\n    type=\"number\"\n    fullWidth\n    *ngIf=\"field.type == REST_FIELD_TYPES.NUMBER\"\n  />\n\n  <!-- Input type date -->\n  <input\n    *ngIf=\"field.type == REST_FIELD_TYPES.DATE\"\n    [nbDatepicker]=\"formpicker\"\n    [(ngModel)]=\"cell.newValue\"\n    [name]=\"cell.getId()\"\n    [placeholder]=\"cell.getTitle()\"\n    [disabled]=\"!cell.isEditable()\"\n    (click)=\"onClick.emit($event)\"\n    (keydown.enter)=\"onEdited.emit($event)\"\n    (keydown.esc)=\"onStopEditing.emit()\"\n    class=\"form-control ng-valid ng-touched ng-dirty\"\n    fullWidth\n  />\n  <nb-datepicker #formpicker></nb-datepicker>\n\n  <!-- Input type dateTime -->\n  <ng-container *ngIf=\"field.type == REST_FIELD_TYPES.DATETIME\">\n    <input\n      nbInput\n      [nbDatepicker]=\"dateTimePicker\"\n      [(ngModel)]=\"cell.newValue\"\n      [name]=\"cell.getId()\"\n      [placeholder]=\"cell.getTitle()\"\n      [disabled]=\"!cell.isEditable()\"\n      (click)=\"onClick.emit($event)\"\n      (keydown.enter)=\"onEdited.emit($event)\"\n      (keydown.esc)=\"onStopEditing.emit()\"\n      class=\"form-control ng-valid ng-touched ng-dirty\"\n      fullWidth\n    />\n    <nb-date-timepicker withSeconds #dateTimePicker></nb-date-timepicker>\n  </ng-container>\n\n  <!-- Input type time -->\n  <ng-container *ngIf=\"field.type == REST_FIELD_TYPES.TIME\">\n    <input\n      [nbTimepicker]=\"timepicker\"\n      twelveHoursFormat]\n      nbInput\n      [(ngModel)]=\"cell.newValue\"\n      [name]=\"cell.getId()\"\n      [placeholder]=\"cell.getTitle()\"\n      [disabled]=\"!cell.isEditable()\"\n      (click)=\"onClick.emit($event)\"\n      (keydown.enter)=\"onEdited.emit($event)\"\n      (keydown.esc)=\"onStopEditing.emit()\"\n      class=\"form-control ng-valid ng-touched ng-dirty\"\n      fullWidth\n    />\n    <nb-timepicker #timepicker></nb-timepicker>\n  </ng-container>\n\n  <!-- Input type enum -->\n  <nb-select\n    [(ngModel)]=\"cell.newValue\"\n    [name]=\"cell.getId()\"\n    (change)=\"onClick.emit($event)\"\n    class=\"input-space\"\n    *ngIf=\"field.type == REST_FIELD_TYPES.ENUM\"\n    nbInput\n  >\n    <nb-option\n      *ngFor=\"let option of field.metaData.addConfig.enumOptions\"\n      [value]=\"option.value\"\n      >{{ option.label }}</nb-option\n    >\n  </nb-select>\n\n  <!-- Input type Boolean -->\n  <div\n    style=\"text-align: center\"\n    *ngIf=\"field.type == REST_FIELD_TYPES.BOOLEAN\"\n  >\n    <nb-toggle [name]=\"cell.getId()\" [(ngModel)]=\"cell.newValue\"></nb-toggle>\n  </div>\n\n  <ng-container *ngIf=\"field.type == REST_FIELD_TYPES.FILE\">\n    <file-upload\n      [(ngModel)]=\"cell.newValue\"\n      class=\"input-space\"\n      [name]=\"field.label\"\n      style=\"min-width: 300px; max-width: 300px\"\n    ></file-upload>\n  </ng-container>\n\n  <ng-container *ngIf=\"field.type == REST_FIELD_TYPES.PDF\">\n    <file-upload\n      [(ngModel)]=\"cell.newValue\"\n      class=\"input-space\"\n      [name]=\"field.label\"\n      style=\"min-width: 300px; max-width: 300px\"\n    ></file-upload>\n    <object width=\"300px\" height=\"300px\" [data]=\"cell.newValue[0]\"></object>\n  </ng-container>\n\n  <ng-container *ngIf=\"field.type == REST_FIELD_TYPES.IMAGE\">\n    <!-- [(ngModel)]=\"cell.newValue\"\n    class=\"file-image\"\n    [name]=\"field.label\" -->\n    <file-upload\n      [control]=\"control\"\n    >\n      <ng-template\n        let-isFileDragDropAvailable=\"isFileDragDropAvailable\"\n        #placeholder\n      >\n        <div *ngIf=\"control.size === 0\">\n          <svg viewBox=\"0 0 512 512\" class=\"icon\">\n            <path\n              d=\"M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z\"\n            ></path>\n          </svg>\n\n          <div class=\"upload-text\">\n            <ng-container\n              *ngIf=\"isFileDragDropAvailable; else isNotDragDropAvailable\"\n            >\n              <b>Drag and drop</b> files<br />\n              or click here\n            </ng-container>\n            <ng-template #isNotDragDropAvailable>\n              <b>Click here</b> to<br />\n              choose a files\n            </ng-template>\n          </div>\n        </div>\n      </ng-template>\n\n      <ng-template let-i=\"index\" let-file=\"file\" let-control=\"control\" #item>\n        <div class=\"overlay\">\n          <svg\n            viewBox=\"0 0 448 512\"\n            class=\"delete-button\"\n            (click)=\"control.removeFile(file)\"\n          >\n            <path\n              d=\"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z\"\n            ></path>\n          </svg>\n          <img *ngIf=\"control.valid\" [src]=\"uploadedFile | async\" />\n        </div>\n      </ng-template>\n    </file-upload>\n\n    <button\n      nbButton\n      status=\"primary\"\n      *ngIf=\"!isCrop && controlCroper != null\"\n      (click)=\"activeCroper()\"\n    >\n      CROP\n    </button>\n\n    <ng-container *ngIf=\"isCrop\">\n      <image-cropper\n        [imageFile]=\"controlCroper\"\n        [maintainAspectRatio]=\"true\"\n        [aspectRatio]=\"4 / 3\"\n        format=\"png\"\n        (imageCropped)=\"imageCropped($event)\"\n      ></image-cropper>\n\n      <button nbButton status=\"primary\" (click)=\"saveCroper()\">\n        SAVE CHANGE\n      </button>\n    </ng-container>\n\n    <!-- <img [src]=\"croppedImage\" /> -->\n  </ng-container>\n\n  <!-- Input type  -->\n  <ng-container *ngIf=\"field.type == REST_FIELD_TYPES.HAS_MANY\">\n    <nb-tag-list (tagRemove)=\"onTagRemove($event)\" class=\"input-space\">\n      <nb-tag\n        *ngFor=\"let tree of cell.newValue\"\n        [text]=\"tree\"\n        removable\n      ></nb-tag>\n      <input type=\"text\" nbTagInput (tagAdd)=\"onTagAdd($event)\" fullWidth />\n    </nb-tag-list>\n  </ng-container>\n\n  <ng-container *ngIf=\"field.type == REST_FIELD_TYPES.BELONG_TO\">\n    <input\n      #autoInput\n      nbInput\n      type=\"text\"\n      (input)=\"onChange()\"\n      placeholder=\"Enter value\"\n      [nbAutocomplete]=\"auto\"\n      [(ngModel)]=\"cell.newValue\"\n    />\n\n    <nb-autocomplete #auto (selectedChange)=\"onSelectionChange($event)\">\n      <nb-option\n        *ngFor=\"let option of filteredOptions$ | async\"\n        [value]=\"\n          option[\n            field?.metaData?.addConfig.belongToOptions?.value\n              ? field?.metaData?.addConfig?.belongToOptions?.value\n              : 'id'\n          ]\n        \"\n      >\n        {{\n          option[\n            field.metaData.addConfig.belongToOptions.template\n              ? field.metaData.addConfig.belongToOptions.template\n              : field.metaData.addConfig.belongToOptions.filterKeys[0]\n          ]\n        }}\n      </nb-option>\n    </nb-autocomplete>\n  </ng-container>\n\n  <ng-container *ngIf=\"field.type == REST_FIELD_TYPES.BELONG_TO_MANY\">\n    <div>\n      <nb-tag-list (tagRemove)=\"onTagRemoveBelong($event)\" class=\"input-space\">\n        <nb-tag\n          *ngFor=\"let tree of cell.newValue\"\n          [text]=\"\n            tree[\n              field.metaData.addConfig.belongToManyOptions.template\n                ? field.metaData.addConfig.belongToManyOptions.template\n                : field.metaData.addConfig.belongToManyOptions.filterKeys[0]\n            ]\n          \"\n          removable\n        ></nb-tag>\n        <input\n          type=\"text\"\n          nbTagInput\n          #autoInputBelongToMany\n          [nbAutocomplete]=\"autoBelonToMany\"\n          (tagAdd)=\"onTagAdd($event)\"\n          fullWidth\n        />\n\n        <nb-autocomplete #autoBelonToMany (selectedChange)=\"onChoose($event)\">\n          <nb-option\n            *ngFor=\"let option of filteredOptions$ | async\"\n            [value]=\"option\"\n          >\n            {{\n              option[\n                field.metaData.addConfig.belongToManyOptions.template\n                  ? field.metaData.addConfig.belongToManyOptions.template\n                  : field.metaData.addConfig.belongToManyOptions.filterKeys[0]\n              ]\n            }}\n          </nb-option>\n        </nb-autocomplete>\n      </nb-tag-list>\n    </div>\n  </ng-container>\n</ng-container>\n", styles: [".icon{height:35px;width:35px;line-height:30px;text-align:center;border:1px solid #eaeaea;border-radius:4px;float:left;margin-right:20px}.upload-text{overflow:hidden;width:auto;font-size:14px}svg{fill:#909293;height:20px}.overlay{position:relative}.delete-button{background-color:#fafafa;position:absolute;top:-6px;right:-6px;cursor:pointer;z-index:10;width:40px;height:40px;text-align:center;font-size:20px;line-height:40px}.file-image{min-width:300px;max-width:300px}.file-image img{width:100%}nb-toggle{text-align:center}\n"], components: [{ type: i1__namespace$1.NbDatepickerComponent, selector: "nb-datepicker", inputs: ["date"], outputs: ["dateChange"] }, { type: i1__namespace$1.NbDateTimePickerComponent, selector: "nb-date-timepicker", inputs: ["twelveHoursFormat", "withSeconds", "singleColumn", "step", "title", "applyButtonText", "currentTimeButtonText"] }, { type: i1__namespace$1.NbTimePickerComponent, selector: "nb-timepicker", inputs: ["showFooter", "timeFormat", "twelveHoursFormat", "withSeconds", "singleColumn", "step", "date", "hoursText", "minutesText", "secondsText", "ampmText", "applyButtonText", "currentTimeButtonText"], outputs: ["onSelectTime"], exportAs: ["nbTimepicker"] }, { type: i1__namespace$1.NbSelectComponent, selector: "nb-select", inputs: ["size", "status", "shape", "appearance", "placeholder", "optionsOverlayOffset", "scrollStrategy", "outline", "filled", "hero", "disabled", "fullWidth", "compareWith", "selected", "multiple", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }, { type: i1__namespace$1.NbOptionComponent, selector: "nb-option", inputs: ["disabled", "value"], outputs: ["selectionChange"] }, { type: i1__namespace$1.NbToggleComponent, selector: "nb-toggle", inputs: ["status", "labelPosition", "checked", "disabled"], outputs: ["checkedChange"] }, { type: i2__namespace.FileUploadComponent, selector: "file-upload:not([simple])", inputs: ["control", "animation", "multiple"] }, { type: i1__namespace$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }, { type: i5__namespace.ImageCropperComponent, selector: "image-cropper", inputs: ["imageChangedEvent", "imageURL", "imageBase64", "imageFile", "format", "transform", "maintainAspectRatio", "aspectRatio", "resetCropOnAspectRatioChange", "resizeToWidth", "resizeToHeight", "cropperMinWidth", "cropperMinHeight", "cropperMaxHeight", "cropperMaxWidth", "cropperStaticWidth", "cropperStaticHeight", "canvasRotation", "initialStepSize", "roundCropper", "onlyScaleDown", "imageQuality", "autoCrop", "backgroundColor", "containWithinAspectRatio", "hideResizeSquares", "allowMoveImage", "cropper", "alignImage", "disabled", "hidden"], outputs: ["imageCropped", "startCropImage", "imageLoaded", "cropperReady", "loadImageFailed", "transformChange"] }, { type: i1__namespace$1.NbTagListComponent, selector: "nb-tag-list", inputs: ["size", "tabIndex", "role", "multiple"], outputs: ["tagRemove"], exportAs: ["nbTagList"] }, { type: i1__namespace$1.NbTagComponent, selector: "nb-tag", inputs: ["appearance", "status", "size", "role", "selected", "removable", "text"], outputs: ["remove", "selectedChange"], exportAs: ["nbTag"] }, { type: i1__namespace$1.NbAutocompleteComponent, selector: "nb-autocomplete", inputs: ["size", "activeFirst", "handleDisplayFn", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }], directives: [{ type: i8__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace$4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1__namespace$4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace$4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i1__namespace$4.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { type: i1__namespace$1.NbDatepickerDirective, selector: "input[nbDatepicker]", inputs: ["nbDatepicker"] }, { type: i1__namespace$1.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1__namespace$1.NbTimePickerDirective, selector: "input[nbTimepicker]", inputs: ["overlayOffset", "nbTimepicker"] }, { type: i8__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1__namespace$1.NbTagInputDirective, selector: "input[nbTagInput]", inputs: ["separatorKeys"], outputs: ["tagAdd"], exportAs: ["nbTagInput"] }, { type: i1__namespace$1.NbAutocompleteDirective, selector: "input[nbAutocomplete]", inputs: ["overlayOffset", "scrollStrategy", "nbAutocomplete", "focusInputOnValueChange", "customOverlayHost"] }], pipes: { "async": i8__namespace.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestResourceEditorFieldsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: "input-editor",
                        templateUrl: "./rest-resource-editor-fields.component.html",
                        styleUrls: ["./rest-resource-editor-fields.component.scss"],
                    }]
            }], ctorParameters: function () { return [{ type: RestAdminConfigService }, { type: RestResourceService }]; }, propDecorators: { input: [{
                    type: i0.ViewChild,
                    args: ["autoInput"]
                }], inputBelongTo: [{
                    type: i0.ViewChild,
                    args: ["autoInputBelongToMany"]
                }] } });

    var RestResourceAddComponent = /** @class */ (function () {
        function RestResourceAddComponent(fb, serviceRest, serviceRestAdminConfig, activatedRoute, nbMenuService, exportService, dialogService, router) {
            var _this = this;
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
            activatedRoute.params.subscribe(function (params) {
                _this.ressourceName =
                    _this.activatedRoute.snapshot.url[_this.activatedRoute.snapshot.url.length - 1].path.split("-")[0];
                _this.resource = _this.serviceRestAdminConfig.getSpecificResource(_this.ressourceName);
                if (Object.keys(params).length != 0) {
                    _this.ressourceName =
                        _this.activatedRoute.snapshot.url[_this.activatedRoute.snapshot.url.length - 2].path.split("-")[0];
                    _this.resource = _this.serviceRestAdminConfig.getSpecificResource(_this.ressourceName);
                    _this.serviceRest
                        .getOneResource({
                        api: _this.resource.editConfig.api,
                        queryParams: _this.resource.editConfig.queryParams,
                    }, params.id)
                        .subscribe(function (response) {
                        _this.initForm(response);
                        _this.formState = {
                            btnLabel: "Modifier",
                            isAdd: false,
                            idEntity: response.id,
                            onReady: true,
                        };
                    });
                }
                else {
                    _this.initForm(null);
                    _this.formState = {
                        btnLabel: "Ajouter",
                        isAdd: true,
                        onReady: true,
                    };
                }
            });
        }
        RestResourceAddComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.nbMenuService
                .onItemClick()
                .pipe(operators.filter(function (_c) {
                var tag = _c.tag;
                return tag === "my-context-add";
            }), operators.map(function (_c) {
                var title = _c.item.title;
                return title;
            }))
                .subscribe(function (title) {
                switch (title) {
                    case "Download template":
                        _this.downloadTemplate();
                        break;
                    case "Import":
                        _this.importData();
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
        };
        RestResourceAddComponent.prototype.initForm = function (datas) {
            var _this = this;
            if (datas != null) {
                this.controls = this.resource.fields.reduce(function (cumul, elt) {
                    var _c, _d, _e, _f, _g, _h, _j, _k, _l;
                    if (elt.inForm) {
                        switch (elt.type) {
                            case exports.REST_FIELD_TYPES.FILE:
                            case exports.REST_FIELD_TYPES.PDF:
                            case exports.REST_FIELD_TYPES.IMAGE:
                                _this.filesUpload[elt.name] = [];
                                _this.urlsImage[elt.name] = datas[elt.name];
                                return Object.assign(Object.assign({}, cumul), (_c = {}, _c[elt.name] = datas[elt.name], _c));
                            case exports.REST_FIELD_TYPES.HAS_MANY:
                                return Object.assign(Object.assign({}, cumul), (_d = {}, _d[elt.name] = new Set([datas[elt.name]]), _d));
                            case exports.REST_FIELD_TYPES.BOOLEAN:
                                return Object.assign(Object.assign({}, cumul), (_e = {}, _e[elt.name] = datas[elt.name], _e));
                            case exports.REST_FIELD_TYPES.BELONG_TO:
                                var restResource = _this.serviceRestAdminConfig.getSpecificResource(elt.metaData.addConfig.belongToOptions.resourceName);
                                _this.serviceRest
                                    .getResources({
                                    api: restResource.api,
                                    queryParams: elt.metaData.addConfig.belongToOptions
                                        .queryParams
                                        ? elt.metaData.addConfig.belongToOptions.queryParams
                                        : restResource.queryParams,
                                })
                                    .subscribe(function (response) {
                                    _this.options[elt.name] = response;
                                    _this.allFilterContains[elt.name] = rxjs.of(_this.options[elt.name]);
                                });
                                return Object.assign(Object.assign({}, cumul), (_f = {}, _f[elt.name] = [datas[elt.name]], _f));
                            case exports.REST_FIELD_TYPES.BELONG_TO_MANY:
                                var resource = _this.serviceRestAdminConfig.getSpecificResource(elt.metaData.addConfig.belongToManyOptions.relatedName);
                                _this.serviceRest
                                    .getResources({
                                    api: resource.api,
                                    queryParams: elt.metaData.addConfig.belongToManyOptions
                                        .queryParams
                                        ? elt.metaData.addConfig.belongToManyOptions.queryParams
                                        : resource.queryParams,
                                })
                                    .subscribe(function (response) {
                                    _this.options[elt.name] = response;
                                    _this.allFilterContains[elt.name] = rxjs.of(_this.options[elt.name]);
                                });
                                _this.belongToMany[elt.name] = new Set(datas[elt.name]);
                                return Object.assign(Object.assign({}, cumul), (_g = {}, _g[elt.name] = [datas[elt.name]], _g));
                            case exports.REST_FIELD_TYPES.LINK:
                                return Object.assign(Object.assign({}, cumul), (_h = {}, _h[elt.name] = [datas[elt.name], ngxInputValidator.Validator.url], _h));
                            case exports.REST_FIELD_TYPES.JSON:
                                var jsonFiels_1 = [];
                                elt.metaData.addConfig.jsonConfig.jsonFields.map(function (field) {
                                    jsonFiels_1.push({
                                        label: field,
                                        value: datas[elt.name][0] == "{"
                                            ? JSON.parse(datas[elt.name])[field]
                                            : typeof datas[elt.name] !== "string"
                                                ? datas[elt.name][field]
                                                : datas[elt.name],
                                    });
                                });
                                _this.jsonEditorOptions[elt.name] = jsonFiels_1;
                                return Object.assign(Object.assign({}, cumul), (_j = {}, _j[elt.name] = datas[elt.name], _j));
                            case exports.REST_FIELD_TYPES.MORPH_ONE:
                                _this.morphFields[elt.name] = {
                                    type: datas[elt.name].type,
                                    id: datas[elt.name].id,
                                };
                                return Object.assign(Object.assign({}, cumul), (_k = {}, _k[elt.name] = [null], _k));
                            default:
                                return Object.assign(Object.assign({}, cumul), (_l = {}, _l[elt.name] = datas[elt.name], _l));
                        }
                    }
                    else
                        return Object.assign({}, cumul);
                }, {});
            }
            else {
                this.controls = this.resource.fields.reduce(function (cumul, elt) {
                    var _c, _d, _e, _f, _g, _h, _j, _k;
                    var _a, _b;
                    if (elt.inForm) {
                        switch (elt.type) {
                            case exports.REST_FIELD_TYPES.FILE:
                            case exports.REST_FIELD_TYPES.PDF:
                            case exports.REST_FIELD_TYPES.IMAGE:
                                _this.filesUpload[elt.name] = [];
                                _this.urlsImage[elt.name] = "";
                                return Object.assign(Object.assign({}, cumul), (_c = {}, _c[elt.name] = [null], _c));
                            case exports.REST_FIELD_TYPES.HAS_MANY:
                                return Object.assign(Object.assign({}, cumul), (_d = {}, _d[elt.name] = new Set([]), _d));
                            case exports.REST_FIELD_TYPES.BOOLEAN:
                                return Object.assign(Object.assign({}, cumul), (_e = {}, _e[elt.name] = false, _e));
                            case exports.REST_FIELD_TYPES.BELONG_TO:
                                var restResource = _this.serviceRestAdminConfig.getSpecificResource(elt.metaData.addConfig.belongToOptions.resourceName);
                                if (restResource) {
                                    _this.serviceRest
                                        .getResources({
                                        api: restResource.api,
                                        queryParams: elt.metaData.addConfig.belongToOptions
                                            .queryParams
                                            ? elt.metaData.addConfig.belongToOptions.queryParams
                                            : restResource.queryParams,
                                    })
                                        .subscribe(function (response) {
                                        _this.options[elt.name] = response;
                                        _this.allFilterContains[elt.name] = rxjs.of(_this.options[elt.name]);
                                    });
                                }
                                return Object.assign(Object.assign({}, cumul), (_f = {}, _f[elt.name] = [""], _f));
                            case exports.REST_FIELD_TYPES.BELONG_TO_MANY:
                                var resource = _this.serviceRestAdminConfig.getSpecificResource(elt.metaData.addConfig.belongToManyOptions.relatedName);
                                _this.serviceRest
                                    .getResources({
                                    api: resource.api,
                                    queryParams: elt.metaData.addConfig.belongToManyOptions
                                        .queryParams
                                        ? elt.metaData.addConfig.belongToManyOptions.queryParams
                                        : resource.queryParams,
                                })
                                    .subscribe(function (response) {
                                    _this.options[elt.name] = response;
                                    _this.allFilterContains[elt.name] = rxjs.of(_this.options[elt.name]);
                                });
                                _this.belongToMany[elt.name] = new Set();
                                return Object.assign(Object.assign({}, cumul), (_g = {}, _g[elt.name] = [], _g));
                            case exports.REST_FIELD_TYPES.LINK:
                                return Object.assign(Object.assign({}, cumul), (_h = {}, _h[elt.name] = ["", ngxInputValidator.Validator.url], _h));
                            case exports.REST_FIELD_TYPES.JSON:
                                var jsonFiels_2 = [];
                                (_b = (_a = elt === null || elt === void 0 ? void 0 : elt.metaData) === null || _a === void 0 ? void 0 : _a.addConfig) === null || _b === void 0 ? void 0 : _b.jsonConfig.jsonFields.map(function (field) {
                                    jsonFiels_2.push({ label: field, value: "" });
                                });
                                _this.jsonEditorOptions[elt.name] = jsonFiels_2;
                                return Object.assign(Object.assign({}, cumul), (_j = {}, _j[elt.name] = [null], _j));
                            default:
                                return Object.assign(Object.assign({}, cumul), (_k = {}, _k[elt.name] = [""], _k));
                        }
                    }
                    else
                        return Object.assign({}, cumul);
                }, {});
            }
            this.form = this.fb.group(this.controls);
        };
        RestResourceAddComponent.prototype.trackByFn = function (index) {
            return index;
        };
        RestResourceAddComponent.prototype.reset = function () {
            this.form = this.fb.group(this.controls);
        };
        Object.defineProperty(RestResourceAddComponent.prototype, "REST_FIELD_TYPES", {
            get: function () {
                return exports.REST_FIELD_TYPES;
            },
            enumerable: false,
            configurable: true
        });
        //Tags
        RestResourceAddComponent.prototype.onTagRemove = function (tagToRemove, name) {
            var _c;
            var treesA = new Set(this.form.get([name]).value);
            treesA.delete(tagToRemove.text);
            this.form.patchValue((_c = {},
                _c[name] = Array.from(treesA.values()),
                _c));
        };
        RestResourceAddComponent.prototype.onTagAdd = function (_c, name) {
            var _d;
            var value = _c.value, input = _c.input;
            if (value) {
                var treesA = new Set(this.form.get([name]).value);
                treesA.add(value);
                this.form.patchValue((_d = {},
                    _d[name] = Array.from(treesA.values()),
                    _d));
            }
            input.nativeElement.value = "";
        };
        // Autocomplete
        RestResourceAddComponent.prototype.filter = function (value, field) {
            if (typeof value == "string") {
                if (!this.options[field.name]) {
                    return [];
                }
                else
                    return this.options[field.name].filter(function (optionValue) {
                        return field.metaData.addConfig.belongToOptions.filterKeys.some(function (elt) { return ("" + optionValue[elt].toLowerCase()).includes("" + "value".toLowerCase()); });
                    });
            }
        };
        RestResourceAddComponent.prototype.getFilteredOptions = function (value, field) {
            var _this = this;
            if (field.type == exports.REST_FIELD_TYPES.BELONG_TO)
                return rxjs.of(value).pipe(operators.map(function (filterString) { return _this.filter(filterString, field); }));
            else if (field.type == exports.REST_FIELD_TYPES.MORPH)
                return rxjs.of(value).pipe(operators.map(function (filterString) { return _this.filterMany(filterString, field, "morphConfig"); }));
            return rxjs.of(value).pipe(operators.map(function (filterString) { return _this.filterMany(filterString, field); }));
        };
        RestResourceAddComponent.prototype.onSelectionChange = function (event, field) {
            this.allFilterContains[field.name] = this.getFilteredOptions(event, field);
        };
        RestResourceAddComponent.prototype.filterInput = function (event, field) {
            this.allFilterContains[field.name] = this.getFilteredOptions(event.target.value, field);
        };
        RestResourceAddComponent.prototype.test = function (event) {
            console.log(event);
        };
        // End Autocomplete
        //Image input
        RestResourceAddComponent.prototype.onSelect = function (event, field) {
            var _c;
            this.filesUpload[field.name] = [];
            var addedFiles = event.addedFiles;
            this.filesUpload[field.name] = [addedFiles[0]];
            if (field.type == exports.REST_FIELD_TYPES.IMAGE) {
                this.isCrop[field.name] = true;
                this.controlCroper[field.name] = addedFiles[0];
            }
            this.form.patchValue((_c = {},
                _c[field.name] = addedFiles[0],
                _c));
        };
        RestResourceAddComponent.prototype.onRemove = function (field) {
            var _c;
            this.filesUpload[field.name] = [];
            this.form.patchValue((_c = {},
                _c[field.name] = null,
                _c));
        };
        RestResourceAddComponent.prototype.imageCropped = function (event, field) {
            this.croppedImage[field.name] = event.base64;
        };
        RestResourceAddComponent.prototype.activeCroper = function (field) {
            this.isCrop[field.name] = true;
        };
        RestResourceAddComponent.prototype.desactiveCrop = function (field) {
            this.isCrop[field.name] = false;
        };
        RestResourceAddComponent.prototype.saveCroper = function (field) {
            var _c;
            this.isCrop[field.name] = false;
            this.filesUpload[field.name] = [
                i5.base64ToFile(this.croppedImage[field.name]),
            ];
            this.form.patchValue((_c = {},
                _c[field.name] = new File([i5.base64ToFile(this.croppedImage[field.name])], field.name),
                _c));
        };
        //belongToManyOptions
        RestResourceAddComponent.prototype.onChoose = function (event, field) {
            var _c, _d;
            var cellData = Array.from(this.belongToMany[field.name]);
            if (event.id) {
                var search = cellData.find(function (elt) { return elt.id == event.id; });
                if (search == undefined) {
                    var newElt = (_c = {
                            id: event.id
                        },
                        _c[field.metaData.addConfig.belongToManyOptions.relatedIdName] = event.id,
                        _c[field.metaData.addConfig.belongToManyOptions.resourceIdName] = "",
                        _c[field.metaData.addConfig.belongToManyOptions.filterKeys[0]] = event[field.metaData.addConfig.belongToManyOptions.filterKeys[0]],
                        _c.saveRelatedIdName = field.metaData.addConfig.belongToManyOptions.relatedIdName,
                        _c.saveResourceIdName = field.metaData.addConfig.belongToManyOptions.resourceIdName,
                        _c);
                    this.belongToMany[field.name].add(newElt);
                    this.form.patchValue((_d = {},
                        _d[field.name] = Array.from(this.belongToMany[field.name].values()),
                        _d));
                }
            }
            this.inputBelongToMany.nativeElement.value = "";
        };
        RestResourceAddComponent.prototype.onTagRemoveBelong = function (tagToRemove, field) {
            var _c;
            var cellData = Array.from(this.belongToMany[field.name]);
            var save = [];
            cellData.forEach(function (elt) {
                if (elt[field.metaData.addConfig.belongToManyOptions.template
                    ? field.metaData.addConfig.belongToManyOptions.template
                    : field.metaData.addConfig.belongToManyOptions.filterKeys[0]] != tagToRemove.text)
                    save.push(elt);
            });
            this.belongToMany[field.name] = new Set(save);
            this.form.patchValue((_c = {},
                _c[field.name] = save,
                _c));
        };
        RestResourceAddComponent.prototype.filterMany = function (value, field, options) {
            if (options === void 0) { options = "belongToManyOptions"; }
            if (typeof value == "string") {
                return this.options[field.name].filter(function (optionValue) {
                    return field.metaData.addConfig[options].filterKeys.some(function (elt) { return ("" + optionValue[elt].toLowerCase()).includes("" + value.toLowerCase()); });
                });
            }
        };
        //End BelongToMany
        RestResourceAddComponent.prototype.onCreate = function () {
            var _this = this;
            var datas;
            var formData = this.form.value;
            var _body = this.resource.addConfig.body;
            if (this.resource.hasFile) {
                datas = new FormData();
                Object.keys(formData).forEach(function (key, index) {
                    var search = _this.resource.fields.find(function (elt) { return elt.name == key; });
                    if (search) {
                        switch (search.type) {
                            case exports.REST_FIELD_TYPES.DATE:
                                datas.append(key, "" + moment__namespace(formData[key]).format("YYYY-MM-DD"));
                                break;
                            case exports.REST_FIELD_TYPES.JSON:
                                var jsonFields_1 = {};
                                if (typeof _this.jsonEditorOptions[key] == "object") {
                                    _this.jsonEditorOptions[key].map(function (elt) {
                                        var _c;
                                        jsonFields_1 = Object.assign(Object.assign({}, jsonFields_1), (_c = {}, _c[elt.label] = elt.value, _c));
                                    });
                                }
                                datas.append(key, JSON.stringify(jsonFields_1));
                                break;
                            case exports.REST_FIELD_TYPES.BOOLEAN:
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
                Object.keys(_body).map(function (key) {
                    datas.append(key, _body[key]);
                });
            }
            else {
                datas = this.form.value;
                datas = Object.assign(Object.assign({}, datas), _body);
            }
            console.log(datas);
            var saveBelongTomany = [];
            this.resource.fields.forEach(function (elt) {
                if (elt.type == exports.REST_FIELD_TYPES.BELONG_TO_MANY) {
                    saveBelongTomany.push({
                        resources: datas[elt.name],
                        pivot: elt.metaData.addConfig.belongToManyOptions.pivotName,
                    });
                }
            });
            this.serviceRest
                .addResources(this.resource.addConfig, datas)
                .subscribe(function (response) {
                if (saveBelongTomany.length > 0) {
                    saveBelongTomany.forEach(function (element, index) {
                        var _c;
                        var restResource = _this.serviceRestAdminConfig.getSpecificResource(element.pivot);
                        var proms = [];
                        for (var index_1 = 0; index_1 < element.resources.length; index_1++) {
                            var item = element.resources[index_1];
                            var data = (_c = {},
                                _c[item['saveRelatedIdName']] = item[item['saveRelatedIdName']],
                                _c[item['saveResourceIdName']] = response.id,
                                _c);
                            proms.push(_this.serviceRest
                                .addResources(restResource.addConfig, data)
                                .toPromise());
                        }
                        Promise.all(proms).then(function (res) {
                            if (index == saveBelongTomany.length - 1) {
                                _this.router.navigate([
                                    "/admin/" + _this.ressourceName + "-detail",
                                    response.id,
                                ]);
                                _this.reset();
                            }
                        });
                    });
                }
                else {
                    _this.router.navigate([
                        "/admin/" + _this.ressourceName + "-detail",
                        response.id,
                    ]);
                    _this.reset();
                }
            });
        };
        RestResourceAddComponent.prototype.onEdit = function () {
            var _this = this;
            var datas;
            var formData = this.form.value;
            var _body = this.resource.editConfig.body;
            if (this.resource.hasFile) {
                datas = new FormData();
                Object.keys(formData).forEach(function (key) {
                    var search = _this.resource.fields.find(function (elt) { return elt.name == key; });
                    if (search) {
                        switch (search.type) {
                            case exports.REST_FIELD_TYPES.DATE:
                                datas.append(key, "" + moment__namespace(formData[key]).format("YYYY-MM-DD"));
                                break;
                            case exports.REST_FIELD_TYPES.JSON:
                                var jsonFields_2 = {};
                                if (typeof _this.jsonEditorOptions[key] == "object") {
                                    _this.jsonEditorOptions[key].map(function (elt) {
                                        var _c;
                                        jsonFields_2 = Object.assign(Object.assign({}, jsonFields_2), (_c = {}, _c[elt.label] = elt.value, _c));
                                    });
                                }
                                datas.append(key, JSON.stringify(jsonFields_2));
                                break;
                            case exports.REST_FIELD_TYPES.IMAGE:
                                if (_this.filesUpload[key].length > 0)
                                    datas.append(key, formData[key]);
                                break;
                            default:
                                datas.append(key, formData[key]);
                                break;
                        }
                    }
                });
                Object.keys(_body).map(function (key, index) {
                    datas.append(key, _body[key]);
                });
            }
            else {
                datas = this.form.value;
                datas = Object.assign(Object.assign({}, datas), _body);
            }
            var saveBelongTomany = [];
            this.resource.fields.forEach(function (elt) {
                if (elt.type == exports.REST_FIELD_TYPES.BELONG_TO_MANY) {
                    saveBelongTomany.push({
                        resources: datas[elt.name],
                        pivot: elt.metaData.addConfig.belongToManyOptions.pivotName,
                    });
                }
            });
            this.serviceRest
                .editResources(this.resource.editConfig, this.resource.hasFile, datas, this.formState.idEntity)
                .subscribe(function (response) {
                if (saveBelongTomany.length > 0) {
                    saveBelongTomany.forEach(function (element, index) {
                        var _c;
                        var restResource = _this.serviceRestAdminConfig.getSpecificResource(element.pivot);
                        var proms = [];
                        for (var index_2 = 0; index_2 < element.resources.length; index_2++) {
                            var item = element.resources[index_2];
                            var data = (_c = {},
                                _c[item["saveRelatedIdName"]] = item[item["saveRelatedIdName"]],
                                _c[item["saveResourceIdName"]] = response.id,
                                _c);
                            proms.push(_this.serviceRest
                                .addResources(restResource.addConfig, data)
                                .toPromise());
                        }
                        Promise.all(proms).then(function (res) {
                            if (index == saveBelongTomany.length - 1) {
                                _this.router.navigate([
                                    "/admin/" + _this.ressourceName + "-detail",
                                    _this.formState.idEntity,
                                ]);
                                _this.reset();
                            }
                        });
                    });
                }
                else {
                    _this.router.navigate([
                        "/admin/" + _this.ressourceName + "-detail",
                        _this.formState.idEntity,
                    ]);
                    _this.reset();
                }
            });
        };
        RestResourceAddComponent.prototype.downloadTemplate = function () {
            var _this = this;
            var colunms = {};
            var sheetHeader = {};
            this.resource.fields
                .filter(function (item) { return _this.resource.listConfig.columns.includes(item.name); })
                .forEach(function (elt) {
                colunms[elt.name] = {
                    title: elt.label,
                };
            });
            Object.entries(colunms).forEach(function (_c, index) {
                var _d = __read(_c, 2), key = _d[0], value = _d[1];
                sheetHeader[_this.alphabelt[index]] = key;
            });
            var edata = [];
            var udt = {
                data: [
                    sheetHeader, // table header
                ],
                skipHeader: true,
            };
            edata.push(udt);
            this.exportService.exportToExcel(edata, "rest_file_template_data");
        };
        RestResourceAddComponent.prototype.importData = function () {
            var _this = this;
            var dialog = this.dialogService.open(UploadFileComponent, {});
            dialog.onClose.subscribe(function (resp) {
                if (resp)
                    _this.source = new i9.LocalDataSource(resp);
            });
        };
        RestResourceAddComponent.prototype.createMatTableColumns = function () {
            var _this = this;
            var colunms = {};
            // console.log(this.resource.fields);
            this.resource.fields
                .filter(function (item) { return _this.resource.listConfig.columns.includes(item.name); })
                .forEach(function (elt) {
                colunms[elt.name] = {
                    title: elt.label,
                    type: "custom",
                    filter: false,
                    addable: true,
                    valuePrepareFunction: function (cell, row) { return ({
                        restField: elt,
                        cell: cell,
                        row: row,
                    }); },
                    editor: {
                        type: "custom",
                        component: RestResourceEditorFieldsComponent,
                    },
                    renderComponent: RestResourceListFieldComponent,
                };
            });
            return colunms;
        };
        RestResourceAddComponent.prototype.onSumbit = function () {
            if (this.formState.isAdd)
                this.onCreate();
            else
                this.onEdit();
        };
        RestResourceAddComponent.prototype.addJSONField = function (event) {
            this.jsonEditorOptions[event.name].push({
                label: "",
                value: "",
                add: true,
            });
        };
        RestResourceAddComponent.prototype.removeJSONField = function (event, index) {
            this.jsonEditorOptions[event.name].splice(index, 1);
        };
        RestResourceAddComponent.prototype.onMorphSelectField = function (event, field) {
            var _this = this;
            var ressources = this.serviceRestAdminConfig.getSpecificResource(event);
            var fieldConfig = this.resource.fields.find(function (elt) { return elt.name == field; });
            // console.log(ressources);
            // console.log(fieldConfig);
            this.serviceRest
                .getResources({
                api: ressources.api,
                queryParams: fieldConfig.metaData.addConfig.morphConfig.queryParams
                    ? fieldConfig.metaData.addConfig.morphConfig.queryParams
                    : {},
            })
                .subscribe(function (response) {
                _this.options[field] = response;
                _this.allFilterContains[field] = rxjs.of(_this.options[field]);
            });
        };
        return RestResourceAddComponent;
    }());
    RestResourceAddComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestResourceAddComponent, deps: [{ token: i1__namespace$4.FormBuilder }, { token: RestResourceService }, { token: RestAdminConfigService }, { token: i1__namespace.ActivatedRoute }, { token: i1__namespace$1.NbMenuService }, { token: RestExportService }, { token: i1__namespace$1.NbDialogService }, { token: i1__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RestResourceAddComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestResourceAddComponent, selector: "ngx-rest-resource-add", inputs: { resource: "resource" }, viewQueries: [{ propertyName: "belongTo", first: true, predicate: ["belongTo"], descendants: true }, { propertyName: "inputBelongToMany", first: true, predicate: ["autoBelongToMany"], descendants: true }], ngImport: i0__namespace, template: "<nb-card>\n  <!-- <nb-card-header class=\"row\">\n    <div class=\"col-9\" *ngIf=\"formState.isAdd\">\n      {{ resource.addConfig.title }}\n    </div>\n\n    <div class=\"col-3\">\n      <button\n        nbButton\n        status=\"primary\"\n        [nbContextMenu]=\"items\"\n        nbContextMenuTag=\"my-context-menu\"\n      >\n        {{ \"rest-add.import\" | translate }}\n      </button>\n    </div>\n  </nb-card-header> -->\n\n  <nb-card-header *ngIf=\"formState.onReady && !formState.isAdd\"\n    >{{ resource.editConfig.title }}\n  </nb-card-header>\n\n  <nb-card-header *ngIf=\"formState.onReady && formState.isAdd\"\n    >{{ resource.addConfig.title }}\n  </nb-card-header>\n\n  <nb-card-body>\n    <nb-tabset>\n      <nb-tab tabTitle=\"Ajout simple\">\n        <form [formGroup]=\"form\" class=\"row\" *ngIf=\"formState.onReady\">\n          <div\n            *ngFor=\"\n              let field of resource.fields;\n              trackBy: trackByFn;\n              let i = index\n            \"\n            class=\"col-12\"\n          >\n            <ng-container *ngIf=\"field.inForm\">\n              <!-- Input type string  -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"\n                  field.type == REST_FIELD_TYPES.STRING ||\n                  field.type == REST_FIELD_TYPES.HAS_ONE\n                \"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <input\n                  nbInput\n                  fullWidth\n                  [id]=\"i\"\n                  [placeholder]=\"field.label\"\n                  [formControlName]=\"field.name\"\n                  type=\"text\"\n                />\n              </div>\n\n              <!-- Input type text -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.TEXT\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <textarea\n                  nbInput\n                  fullWidth\n                  [id]=\"i\"\n                  [placeholder]=\"field.label\"\n                  [formControlName]=\"field.name\"\n                ></textarea>\n              </div>\n\n              <!-- Input type number  -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.NUMBER\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <input\n                  nbInput\n                  fullWidth\n                  [id]=\"i\"\n                  [placeholder]=\"field.label\"\n                  [formControlName]=\"field.name\"\n                  type=\"number\"\n                />\n              </div>\n\n              <!-- Input type date -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.DATE\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <input\n                  nbInput\n                  [placeholder]=\"field.label\"\n                  [nbDatepicker]=\"formpicker\"\n                  fullWidth\n                  [formControlName]=\"field.name\"\n                />\n                <nb-datepicker #formpicker></nb-datepicker>\n              </div>\n\n              <!-- Input type dateTime -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.DATETIME\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <input\n                  nbInput\n                  fullWidth\n                  [placeholder]=\"field.label\"\n                  [nbDatepicker]=\"dateTimePicker\"\n                  [formControlName]=\"field.name\"\n                />\n                <nb-date-timepicker\n                  withSeconds\n                  #dateTimePicker\n                ></nb-date-timepicker>\n              </div>\n\n              <!-- Input type time -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.TIME\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <input\n                  [nbTimepicker]=\"timepicker\"\n                  fullWidth\n                  [formControlName]=\"field.name\"\n                  twelveHoursFormat\n                  nbInput\n                />\n                <nb-timepicker #timepicker></nb-timepicker>\n              </div>\n\n              <!-- Input type enum -->\n              <ng-container\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.ENUM\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <nb-select\n                  fullWidth\n                  [formControlName]=\"field.name\"\n                  [placeholder]=\"field.label\"\n                >\n                  <nb-option\n                    *ngFor=\"let option of field.metaData.addConfig.enumOptions\"\n                    [value]=\"option.value\"\n                    >{{ option.label }}</nb-option\n                  >\n                </nb-select>\n              </ng-container>\n\n              <!-- Input type boolean -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.BOOLEAN\"\n              >\n                <!-- <label class=\"label\">{{ field.label | titlecase }}</label> -->\n                <div style=\"display: flex; align-items: center\">\n                  <label style=\"margin-right: 0.5em\">{{\n                    field.label | titlecase\n                  }}</label>\n                  <!-- [name]=\"field.name\" -->\n                  <nb-toggle [formControlName]=\"field.name\"></nb-toggle>\n                </div>\n              </div>\n\n              <!-- Input type file -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"\n                  field.type == REST_FIELD_TYPES.FILE ||\n                  field.type == REST_FIELD_TYPES.PDF\n                \"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <div\n                  style=\"border: dashed; display: flex\"\n                  class=\"custom-dropzone form-control-custom rounded m-2\"\n                  ngx-dropzone\n                  (change)=\"onSelect($event, field)\"\n                >\n                  <img\n                    *ngIf=\"\n                      urlsImage[field.name] != '' &&\n                      filesUpload[field.name].length <= 0\n                    \"\n                    [src]=\"urlsImage[field.name]\"\n                    class=\"custom-img-dropzone\"\n                  />\n\n                  <ngx-dropzone-label\n                    *ngIf=\"filesUpload[field.name].length <= 0\"\n                  >\n                    <nb-icon\n                      icon=\"cloud-upload-outline\"\n                      style=\"font-size: 2em; color: #ccc\"\n                    ></nb-icon>\n                    Drag and drop files here or click to upload\n                  </ngx-dropzone-label>\n\n                  <ngx-dropzone-preview\n                    ngProjectAs=\"ngx-dropzone-preview\"\n                    *ngFor=\"let f of filesUpload[field.name]\"\n                    [file]=\"f\"\n                    [removable]=\"true\"\n                    (removed)=\"onRemove(field)\"\n                  >\n                    <ngx-dropzone-label\n                      >{{ f.name }} ({{ f.type }})</ngx-dropzone-label\n                    >\n                  </ngx-dropzone-preview>\n                </div>\n              </div>\n\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.IMAGE\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n\n                <div\n                  style=\"border: dashed; display: flex\"\n                  class=\"custom-dropzone form-control-custom rounded m-2\"\n                  ngx-dropzone\n                  (change)=\"onSelect($event, field)\"\n                >\n                  <img\n                    *ngIf=\"\n                      urlsImage[field.name] != '' &&\n                      filesUpload[field.name].length <= 0\n                    \"\n                    [src]=\"urlsImage[field.name]\"\n                    class=\"custom-img-dropzone\"\n                  />\n\n                  <ngx-dropzone-label\n                    *ngIf=\"\n                      filesUpload[field.name].length <= 0 &&\n                      urlsImage[field.name] == ''\n                    \"\n                  >\n                    <nb-icon\n                      icon=\"cloud-upload-outline\"\n                      style=\"font-size: 2em; color: #ccc\"\n                    ></nb-icon>\n                    Drag and drop files here or click to upload\n                  </ngx-dropzone-label>\n\n                  <!-- <ng-container\n                    *ngIf=\"filesUpload[field.name].length > 0\"\n                  > -->\n                  <ngx-dropzone-image-preview\n                    ngProjectAs=\"ngx-dropzone-preview\"\n                    *ngFor=\"let f of filesUpload[field.name]\"\n                    [file]=\"f\"\n                    [removable]=\"true\"\n                    (removed)=\"onRemove(field)\"\n                  >\n                  </ngx-dropzone-image-preview>\n                  <!-- </ng-container> -->\n                </div>\n\n                <button\n                  nbButton\n                  status=\"primary\"\n                  *ngIf=\"\n                    !isCrop[field.name] && controlCroper[field.name] != null\n                  \"\n                  (click)=\"activeCroper(field)\"\n                >\n                  CROP\n                </button>\n\n                <ng-container *ngIf=\"isCrop[field.name]\">\n                  <image-cropper\n                    [imageFile]=\"controlCroper[field.name]\"\n                    [maintainAspectRatio]=\"true\"\n                    [aspectRatio]=\"4 / 3\"\n                    format=\"png\"\n                    (imageCropped)=\"imageCropped($event, field)\"\n                  ></image-cropper>\n\n                  <button nbButton status=\"primary\" (click)=\"saveCroper(field)\">\n                    SAVE CHANGE\n                  </button>\n                  <button\n                    nbButton\n                    status=\"danger\"\n                    (click)=\"desactiveCrop(field)\"\n                  >\n                    Cancel\n                  </button>\n                </ng-container>\n\n                <!-- <img [src]=\"croppedImage\" /> -->\n              </div>\n\n              <!-- Input type hasMany -->\n              <div\n                *ngIf=\"field.type == REST_FIELD_TYPES.HAS_MANY\"\n                class=\"input-space\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <nb-tag-list\n                  (tagRemove)=\"onTagRemove($event, field.name)\"\n                  fullWidth\n                >\n                  <nb-tag\n                    *ngFor=\"let tree of form.get([field.name]).value\"\n                    [text]=\"tree\"\n                    removable\n                  ></nb-tag>\n                  <input\n                    type=\"text\"\n                    fullWidth\n                    nbTagInput\n                    [placeholder]=\"field.label\"\n                    (tagAdd)=\"onTagAdd($event, field.name)\"\n                  />\n                </nb-tag-list>\n              </div>\n\n              <!-- Input type belong_to -->\n              <div\n                *ngIf=\"field.type == REST_FIELD_TYPES.BELONG_TO\"\n                class=\"input-space\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <input\n                  #autoInput\n                  nbInput\n                  fullWidth\n                  type=\"text\"\n                  [formControlName]=\"field.name\"\n                  placeholder=\"Enter value\"\n                  [nbAutocomplete]=\"autoComplete\"\n                  (keyup)=\"filterInput($event, field)\"\n                  [id]=\"i\"\n                />\n\n                <nb-autocomplete\n                  #autoComplete\n                  (selectedChange)=\"onSelectionChange($event, field)\"\n                >\n                  <nb-option\n                    *ngFor=\"let option of allFilterContains[field.name] | async\"\n                    [value]=\"\n                      option[\n                        field?.metaData?.addConfig.belongToOptions?.value\n                          ? field?.metaData?.addConfig?.belongToOptions?.value\n                          : 'id'\n                      ]\n                    \"\n                  >\n                    {{\n                      option[\n                        field.metaData.addConfig.belongToOptions.template\n                          ? field.metaData.addConfig.belongToOptions.template\n                          : field.metaData.addConfig.belongToOptions\n                              .filterKeys[0]\n                      ]\n                    }}\n                  </nb-option>\n                </nb-autocomplete>\n              </div>\n\n              <!-- Input type belong_to_many -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.BELONG_TO_MANY\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <nb-tag-list (tagRemove)=\"onTagRemoveBelong($event, field)\">\n                  <nb-tag\n                    *ngFor=\"let tree of belongToMany[field.name]\"\n                    [text]=\"\n                      tree[\n                        field.metaData.addConfig.belongToManyOptions.template\n                          ? field.metaData.addConfig.belongToManyOptions\n                              .template\n                          : field.metaData.addConfig.belongToManyOptions\n                              .filterKeys[0]\n                      ]\n                    \"\n                    removable\n                  ></nb-tag>\n                  <input\n                    type=\"text\"\n                    nbTagInput\n                    #autoBelongToMany\n                    [nbAutocomplete]=\"belongToField\"\n                    (keyup)=\"filterInput($event, field)\"\n                    [placeholder]=\"field.label\"\n                    [formControlName]=\"field.name\"\n                    fullWidth\n                  />\n                </nb-tag-list>\n\n                <nb-autocomplete\n                  #belongToField\n                  (selectedChange)=\"onChoose($event, field)\"\n                >\n                  <nb-option\n                    *ngFor=\"let option of allFilterContains[field.name] | async\"\n                    [value]=\"option\"\n                  >\n                    {{\n                      option[\n                        field.metaData.addConfig.belongToManyOptions.template\n                          ? field.metaData.addConfig.belongToManyOptions\n                              .template\n                          : field.metaData.addConfig.belongToManyOptions\n                              .filterKeys[0]\n                      ]\n                    }}\n                  </nb-option>\n                </nb-autocomplete>\n              </div>\n\n              <!-- Input type link -->\n\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.LINK\"\n              >\n                <label class=\"label\">{{ field.label | titlecase }}</label>\n                <input\n                  nbInput\n                  fullWidth\n                  [id]=\"i\"\n                  [placeholder]=\"field.label\"\n                  [formControlName]=\"field.name\"\n                  type=\"text\"\n                />\n\n                <!-- <div\n                *ngIf=\"\n                  form.get([field.name]).hasError('invalidUrl') &&\n                  form.get([field.name]).touched\n                \"\n                class=\"text-error\"\n              >\n                {{ \"rest-add.invalid-link\" | translate }}\n              </div> -->\n              </div>\n\n              <!-- Input type JSON -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.JSON\"\n              >\n                <div>\n                  <label class=\"label\">{{ field.label | titlecase }}</label>\n                  <button\n                    nbButton\n                    status=\"primary\"\n                    shape=\"round\"\n                    size=\"small\"\n                    outline\n                    ghost\n                    *ngIf=\"field.metaData.addConfig.jsonConfig.isOpen\"\n                    (click)=\"addJSONField(field)\"\n                  >\n                    <nb-icon icon=\"plus\" pack=\"fas\"></nb-icon>\n                  </button>\n                </div>\n\n                <div\n                  class=\"row mb-2\"\n                  *ngFor=\"\n                    let item of jsonEditorOptions[field.name];\n                    let index = index\n                  \"\n                >\n                  <div class=\"col\" [id]=\"index\">\n                    <input\n                      fullWidth\n                      nbInput\n                      *ngIf=\"item.add; else elseBlock\"\n                      [(ngModel)]=\"item.label\"\n                      [ngModelOptions]=\"{ standalone: true }\"\n                    />\n                    <ng-template #elseBlock>\n                      <input fullWidth nbInput disabled [value]=\"item.label\" />\n                    </ng-template>\n                  </div>\n                  <div class=\"col\">\n                    <input\n                      fullWidth\n                      nbInput\n                      [(ngModel)]=\"item.value\"\n                      [ngModelOptions]=\"{ standalone: true }\"\n                    />\n                  </div>\n                  <div class=\"col\" *ngIf=\"item.add\">\n                    <button\n                      nbButton\n                      status=\"primary\"\n                      shape=\"round\"\n                      size=\"small\"\n                      outline\n                      ghost\n                      (click)=\"removeJSONField(field, index)\"\n                    >\n                      <nb-icon icon=\"trash-alt\" pack=\"fas\"></nb-icon>\n                    </button>\n                  </div>\n                </div>\n              </div>\n\n              <!-- Input type MORPH -->\n              <div\n                class=\"input-space\"\n                *ngIf=\"field.type == REST_FIELD_TYPES.MORPH\"\n              >\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <label class=\"label\">Ressources</label>\n                    <nb-select\n                      fullWidth\n                      (selectedChange)=\"onMorphSelectField($event, field.name)\"\n                    >\n                      <nb-option\n                        *ngFor=\"\n                          let option of field.metaData.addConfig.morphConfig\n                            .related\n                        \"\n                        [value]=\"option.value\"\n                        >{{ option.label }}</nb-option\n                      >\n                    </nb-select>\n                  </div>\n\n                  <div class=\"col-9\">\n                    <label class=\"label\">{{ field.label | titlecase }}</label>\n                    <input\n                      #autoInput\n                      nbInput\n                      fullWidth\n                      type=\"text\"\n                      [formControlName]=\"field.name\"\n                      placeholder=\"Enter value\"\n                      [nbAutocomplete]=\"autoComplete\"\n                      (keyup)=\"filterInput($event, field)\"\n                      [id]=\"i\"\n                      [disabled]=\"!allFilterContains[field.name]\"\n                    />\n                    <nb-autocomplete\n                      #autoComplete\n                      (selectedChange)=\"onSelectionChange($event, field)\"\n                    >\n                      <nb-option\n                        *ngFor=\"\n                          let option of allFilterContains[field.name] | async\n                        \"\n                        [value]=\"\n                          option[\n                            field?.metaData?.addConfig.morphConfig?.value\n                              ? field?.metaData?.addConfig.morphConfig?.value\n                              : 'id'\n                          ]\n                        \"\n                      >\n                        {{\n                          option[\n                            field.metaData.addConfig.morphConfig.template\n                              ? field.metaData.addConfig.morphConfig.template\n                              : field.metaData.addConfig.morphConfig\n                                  .filterKeys[0]\n                          ]\n                        }}\n                      </nb-option>\n                    </nb-autocomplete>\n                  </div>\n                </div>\n              </div>\n            </ng-container>\n          </div>\n        </form>\n      </nb-tab>\n      <nb-tab tabTitle=\"Importation\">\n        <div class=\"row\">\n          <div class=\"col-9\"></div>\n          <div class=\"col-3\">\n            <button\n              nbButton\n              status=\"primary\"\n              [nbContextMenu]=\"items\"\n              nbContextMenuTag=\"my-context-add\"\n            >\n              {{ \"rest-add.import\" | translate }}\n            </button>\n          </div>\n        </div>\n\n        <div>\n          <ng2-smart-table [settings]=\"settings\" [source]=\"source\">\n          </ng2-smart-table>\n        </div>\n      </nb-tab>\n    </nb-tabset>\n  </nb-card-body>\n  <nb-card-footer>\n    <div class=\"buttons-row\">\n      <button nbButton (click)=\"onSumbit()\" status=\"primary\">\n        {{ formState.btnLabel }}\n      </button>\n    </div>\n  </nb-card-footer>\n</nb-card>\n", styles: ["nb-card-body{overflow:visible;padding-top:0}.input-space{margin-top:1rem}@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host .buttons-row{margin:-.5rem}.nb-theme-default :host button[nbButton]{margin:.5rem}[dir=ltr] .nb-theme-default :host .action-icon{margin-right:.5rem}[dir=rtl] .nb-theme-default :host .action-icon{margin-left:.5rem}.nb-theme-default :host .actions-card{height:8rem}.nb-theme-dark :host .buttons-row{margin:-.5rem}.nb-theme-dark :host button[nbButton]{margin:.5rem}[dir=ltr] .nb-theme-dark :host .action-icon{margin-right:.5rem}[dir=rtl] .nb-theme-dark :host .action-icon{margin-left:.5rem}.nb-theme-dark :host .actions-card{height:8rem}.nb-theme-cosmic :host .buttons-row{margin:-.5rem}.nb-theme-cosmic :host button[nbButton]{margin:.5rem}[dir=ltr] .nb-theme-cosmic :host .action-icon{margin-right:.5rem}[dir=rtl] .nb-theme-cosmic :host .action-icon{margin-left:.5rem}.nb-theme-cosmic :host .actions-card{height:8rem}.nb-theme-corporate :host .buttons-row{margin:-.5rem}.nb-theme-corporate :host button[nbButton]{margin:.5rem}[dir=ltr] .nb-theme-corporate :host .action-icon{margin-right:.5rem}[dir=rtl] .nb-theme-corporate :host .action-icon{margin-left:.5rem}.nb-theme-corporate :host .actions-card{height:8rem}.icon{height:35px;width:35px;line-height:30px;text-align:center;border:1px solid #eaeaea;border-radius:4px;float:left;margin-right:20px}.upload-text{overflow:hidden;width:auto;font-size:14px}svg{fill:#909293;height:20px}.overlay{position:relative}.delete-button{background-color:#fafafa;position:absolute;top:-6px;right:-6px;cursor:pointer;z-index:10;width:40px;height:40px;text-align:center;font-size:20px;line-height:40px}.file-image img{width:100%}nb-toggle{text-align:center}\n"], components: [{ type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1__namespace$1.NbTabsetComponent, selector: "nb-tabset", inputs: ["fullWidth", "routeParam"], outputs: ["changeTab"] }, { type: i1__namespace$1.NbTabComponent, selector: "nb-tab", inputs: ["badgeStatus", "badgeDot", "disabled", "responsive", "active", "lazyLoad", "tabTitle", "tabId", "tabIcon", "route", "badgeText", "badgePosition"] }, { type: i1__namespace$1.NbDatepickerComponent, selector: "nb-datepicker", inputs: ["date"], outputs: ["dateChange"] }, { type: i1__namespace$1.NbDateTimePickerComponent, selector: "nb-date-timepicker", inputs: ["twelveHoursFormat", "withSeconds", "singleColumn", "step", "title", "applyButtonText", "currentTimeButtonText"] }, { type: i1__namespace$1.NbTimePickerComponent, selector: "nb-timepicker", inputs: ["showFooter", "timeFormat", "twelveHoursFormat", "withSeconds", "singleColumn", "step", "date", "hoursText", "minutesText", "secondsText", "ampmText", "applyButtonText", "currentTimeButtonText"], outputs: ["onSelectTime"], exportAs: ["nbTimepicker"] }, { type: i1__namespace$1.NbSelectComponent, selector: "nb-select", inputs: ["size", "status", "shape", "appearance", "placeholder", "optionsOverlayOffset", "scrollStrategy", "outline", "filled", "hero", "disabled", "fullWidth", "compareWith", "selected", "multiple", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }, { type: i1__namespace$1.NbOptionComponent, selector: "nb-option", inputs: ["disabled", "value"], outputs: ["selectionChange"] }, { type: i1__namespace$1.NbToggleComponent, selector: "nb-toggle", inputs: ["status", "labelPosition", "checked", "disabled"], outputs: ["checkedChange"] }, { type: i7__namespace.NgxDropzoneComponent, selector: "ngx-dropzone, [ngx-dropzone]", inputs: ["accept", "disabled", "multiple", "maxFileSize", "expandable", "disableClick", "processDirectoryDrop", "id", "aria-label", "aria-labelledby", "aria-describedby"], outputs: ["change"] }, { type: i1__namespace$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i7__namespace.NgxDropzonePreviewComponent, selector: "ngx-dropzone-preview", inputs: ["file", "removable"], outputs: ["removed"] }, { type: i7__namespace.NgxDropzoneImagePreviewComponent, selector: "ngx-dropzone-image-preview", inputs: ["file"] }, { type: i1__namespace$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }, { type: i5__namespace.ImageCropperComponent, selector: "image-cropper", inputs: ["imageChangedEvent", "imageURL", "imageBase64", "imageFile", "format", "transform", "maintainAspectRatio", "aspectRatio", "resetCropOnAspectRatioChange", "resizeToWidth", "resizeToHeight", "cropperMinWidth", "cropperMinHeight", "cropperMaxHeight", "cropperMaxWidth", "cropperStaticWidth", "cropperStaticHeight", "canvasRotation", "initialStepSize", "roundCropper", "onlyScaleDown", "imageQuality", "autoCrop", "backgroundColor", "containWithinAspectRatio", "hideResizeSquares", "allowMoveImage", "cropper", "alignImage", "disabled", "hidden"], outputs: ["imageCropped", "startCropImage", "imageLoaded", "cropperReady", "loadImageFailed", "transformChange"] }, { type: i1__namespace$1.NbTagListComponent, selector: "nb-tag-list", inputs: ["size", "tabIndex", "role", "multiple"], outputs: ["tagRemove"], exportAs: ["nbTagList"] }, { type: i1__namespace$1.NbTagComponent, selector: "nb-tag", inputs: ["appearance", "status", "size", "role", "selected", "removable", "text"], outputs: ["remove", "selectedChange"], exportAs: ["nbTag"] }, { type: i1__namespace$1.NbAutocompleteComponent, selector: "nb-autocomplete", inputs: ["size", "activeFirst", "handleDisplayFn", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }, { type: i9__namespace.Ng2SmartTableComponent, selector: "ng2-smart-table", inputs: ["settings", "source"], outputs: ["rowSelect", "rowDeselect", "userRowSelect", "delete", "edit", "create", "custom", "deleteConfirm", "editConfirm", "createConfirm", "rowHover"] }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }], directives: [{ type: i8__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace$4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1__namespace$4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1__namespace$4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i8__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1__namespace$1.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1__namespace$4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1__namespace$4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace$4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i1__namespace$4.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { type: i1__namespace$1.NbDatepickerDirective, selector: "input[nbDatepicker]", inputs: ["nbDatepicker"] }, { type: i1__namespace$1.NbTimePickerDirective, selector: "input[nbTimepicker]", inputs: ["overlayOffset", "nbTimepicker"] }, { type: i7__namespace.NgxDropzoneLabelDirective, selector: "ngx-dropzone-label" }, { type: i1__namespace$1.NbTagInputDirective, selector: "input[nbTagInput]", inputs: ["separatorKeys"], outputs: ["tagAdd"], exportAs: ["nbTagInput"] }, { type: i1__namespace$1.NbAutocompleteDirective, selector: "input[nbAutocomplete]", inputs: ["overlayOffset", "scrollStrategy", "nbAutocomplete", "focusInputOnValueChange", "customOverlayHost"] }, { type: i1__namespace$4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i1__namespace$1.NbContextMenuDirective, selector: "[nbContextMenu]", inputs: ["nbContextMenuAdjustment", "nbContextMenuTrigger", "nbContextMenuPlacement", "nbContextMenuTag", "nbContextMenu", "nbContextMenuClass"] }], pipes: { "titlecase": i8__namespace.TitleCasePipe, "async": i8__namespace.AsyncPipe, "translate": i1__namespace$3.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestResourceAddComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-rest-resource-add',
                        templateUrl: './rest-resource-add.component.html',
                        styleUrls: ['./rest-resource-add.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$4.FormBuilder }, { type: RestResourceService }, { type: RestAdminConfigService }, { type: i1__namespace.ActivatedRoute }, { type: i1__namespace$1.NbMenuService }, { type: RestExportService }, { type: i1__namespace$1.NbDialogService }, { type: i1__namespace.Router }]; }, propDecorators: { resource: [{
                    type: i0.Input
                }], belongTo: [{
                    type: i0.ViewChild,
                    args: ["belongTo"]
                }], inputBelongToMany: [{
                    type: i0.ViewChild,
                    args: ["autoBelongToMany"]
                }] } });

    var RestResourceDetailComponent = /** @class */ (function () {
        function RestResourceDetailComponent(activatedRoute, serviceRest, serviceRestAdminConfig, router, dataSourceBuilder, langService) {
            var _this = this;
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
            this.isObject = function (a) {
                var isObject = false;
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
            this.isArray = function (a) {
                return !!a && a.constructor === Array;
            };
            this.jsonValue = function (val) {
                var _jsonValue;
                if (val.restField.i18n == true) {
                    if (val.data[0] == "{")
                        _jsonValue = JSON.parse(val.data)[_this.langService.selected];
                    else if (typeof val.data !== "string")
                        _jsonValue = val.data[_this.langService.selected];
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
        RestResourceDetailComponent.prototype.ngOnInit = function () {
            var _this = this;
            var id;
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
                .subscribe(function (response) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                var colunms = {};
                _this.entityId = response.id;
                if (_this.resource.detailConfig.tabsConfig &&
                    _this.resource.detailConfig.tabsConfig.length > 1) {
                    _this.isTabsMenu = true;
                    _this.resource.detailConfig.tabsConfig.forEach(function (tab) {
                        _this.tabsName.push(tab.name);
                        var temp = {};
                        tab.datas.forEach(function (elt) {
                            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                            var search = _this.resource.fields.find(function (field) { return field.label === elt; });
                            if (search) {
                                temp[search.name] = {
                                    restField: search,
                                    data: response[search.label],
                                };
                            }
                            switch (temp[search.name].restField.type) {
                                case exports.REST_FIELD_TYPES.HAS_MANY:
                                    /*Premier cas si les configs ont ete definis dans le listConfig et rien dans le detailConfig
                                      Premier cas si les configs ont ete definis dans le listConfig et rien dans le detailConfig
                                      on considere que les configs sont les memes
                                      */
                                    if (((_c = (_b = (_a = temp[search.name].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.listConfig) === null || _c === void 0 ? void 0 : _c.restManyResources) &&
                                        !((_f = (_e = (_d = temp[search.name].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources)) {
                                        var datas_1 = [];
                                        // console.log("Xa me concerne");
                                        // console.log(temp[search.name]);
                                        temp[search.name].data.forEach(function (item) {
                                            var _a, _b, _c, _d;
                                            datas_1.push({
                                                data: {
                                                    name: ((_d = (_c = (_b = (_a = temp[search.name]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.listConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                        ? item[temp[search.name].restField.metaData.listConfig
                                                            .restManyResources.label]
                                                        : item,
                                                    item: item,
                                                },
                                            });
                                        });
                                        var rowsT = [
                                            {
                                                data: {
                                                    name: temp[search.name].restField.name,
                                                    place: "header-place",
                                                },
                                                children: datas_1,
                                            },
                                        ];
                                        _this.listDataSource[temp[search.name].restField.name] =
                                            _this.dataSourceBuilder.create(rowsT);
                                    }
                                    else if ((_j = (_h = (_g = temp[search.name].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources) {
                                        if (_this.isObject((_m = (_l = (_k = temp[search.name].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig) === null || _m === void 0 ? void 0 : _m.restManyResources)) {
                                            var datas_2 = [];
                                            temp[search.name].data.forEach(function (item) {
                                                var _a, _b, _c, _d;
                                                datas_2.push({
                                                    data: {
                                                        name: ((_d = (_c = (_b = (_a = temp[search.name]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.detailConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                            ? item[temp[search.name].restField.metaData
                                                                .detailConfig.restManyResources.label]
                                                            : item,
                                                        item: item,
                                                    },
                                                });
                                            });
                                            var rowsT = [
                                                {
                                                    data: {
                                                        name: temp[search.name].restField.name,
                                                        place: "header-place",
                                                    },
                                                    children: datas_2,
                                                },
                                            ];
                                            _this.listDataSource[temp[search.name].restField.name] =
                                                _this.dataSourceBuilder.create(rowsT);
                                        }
                                        else {
                                            _this.listDataSource[temp[search.name].restField.name] =
                                                [];
                                            temp[search.name].data.forEach(function (element) {
                                                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                                                _this.listDataSource[temp[search.name].restField.name].push({
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
                                case exports.REST_FIELD_TYPES.BELONG_TO_MANY:
                                    var items_1 = [];
                                    temp[search.name].data.forEach(function (item) {
                                        items_1.push({
                                            data: {
                                                name: item[temp[search.name].restField.metaData.listConfig
                                                    .restBelongToManyResources.label],
                                                item: item,
                                            },
                                        });
                                    });
                                    var rowsBelongToMany = [
                                        {
                                            data: {
                                                name: temp[search.name].restField.name,
                                                place: "header-place",
                                            },
                                            children: items_1,
                                        },
                                    ];
                                    _this.listDataSource[temp[search.name].restField.name] =
                                        _this.dataSourceBuilder.create(rowsBelongToMany);
                                    break;
                                default:
                                    break;
                            }
                            colunms[tab.name] = temp;
                        });
                    });
                    _this.datas = colunms;
                    _this.datas1 = colunms;
                }
                else {
                    _this.resource.fields.forEach(function (elt) {
                        colunms[elt.name] = {
                            restField: elt,
                            data: response[elt.label],
                        };
                    });
                    _this.datas = colunms;
                    var _loop_1 = function (property) {
                        switch (_this.datas[property].restField.type) {
                            case exports.REST_FIELD_TYPES.HAS_MANY:
                                if (((_c = (_b = (_a = _this.datas[property].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.listConfig) === null || _c === void 0 ? void 0 : _c.restManyResources) &&
                                    !((_f = (_e = (_d = _this.datas[property].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources)) {
                                    var datas_3 = [];
                                    _this.datas[property].data.forEach(function (item) {
                                        var _a, _b, _c, _d;
                                        datas_3.push({
                                            data: {
                                                name: ((_d = (_c = (_b = (_a = _this.datas[property]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.listConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                    ? item[_this.datas[property].restField.metaData.listConfig
                                                        .restManyResources.label]
                                                    : item,
                                                item: item,
                                            },
                                        });
                                    });
                                    var rowsT = [
                                        {
                                            data: {
                                                name: _this.datas[property].restField.name,
                                                place: "header-place",
                                            },
                                            children: datas_3,
                                        },
                                    ];
                                    _this.listDataSource[_this.datas[property].restField.name] =
                                        _this.dataSourceBuilder.create(rowsT);
                                }
                                else if ((_j = (_h = (_g = _this.datas[property].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources) {
                                    if (_this.isObject((_m = (_l = (_k = _this.datas[property].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig) === null || _m === void 0 ? void 0 : _m.restManyResources)) {
                                        var datas_4 = [];
                                        _this.datas[property].data.forEach(function (item) {
                                            var _a, _b, _c, _d;
                                            datas_4.push({
                                                data: {
                                                    name: ((_d = (_c = (_b = (_a = _this.datas[property]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.detailConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                        ? item[_this.datas[property].restField.metaData
                                                            .detailConfig.restManyResources.label]
                                                        : item,
                                                    item: item,
                                                },
                                            });
                                        });
                                        var rowsT = [
                                            {
                                                data: {
                                                    name: _this.datas[property].restField.name,
                                                    place: "header-place",
                                                },
                                                children: datas_4,
                                            },
                                        ];
                                        _this.listDataSource[_this.datas[property].restField.name] =
                                            _this.dataSourceBuilder.create(rowsT);
                                    }
                                    else {
                                        _this.listDataSource[_this.datas[property].restField.name] =
                                            [];
                                        _this.datas[property].data.forEach(function (element) {
                                            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                                            _this.listDataSource[_this.datas[property].restField.name].push({
                                                resource: (_c = (_b = (_a = _this.datas[property].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.detailConfig) === null || _c === void 0 ? void 0 : _c.restManyResources.resource,
                                                resourceName: (_f = (_e = (_d = _this.datas[property].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources.resourceName,
                                                id: element === null || element === void 0 ? void 0 : element.id,
                                                style: ((_j = (_h = (_g = _this.datas[property].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources.style)
                                                    ? (_l = (_k = _this.datas[property].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig.restManyResources.style
                                                    : "",
                                            });
                                        });
                                        console.log(_this.datas[property]);
                                        console.log(_this.listDataSource);
                                    }
                                }
                                break;
                            case exports.REST_FIELD_TYPES.BELONG_TO_MANY:
                                var items_2 = [];
                                _this.datas[property].data.forEach(function (item) {
                                    items_2.push({
                                        data: {
                                            name: item[_this.datas[property].restField.metaData.listConfig
                                                .restBelongToManyResources.label],
                                            item: item,
                                        },
                                    });
                                });
                                var rowsBelongToMany = [
                                    {
                                        data: {
                                            name: _this.datas[property].restField.name,
                                            place: "header-place",
                                        },
                                        children: items_2,
                                    },
                                ];
                                _this.listDataSource[_this.datas[property].restField.name] =
                                    _this.dataSourceBuilder.create(rowsBelongToMany);
                                break;
                            default:
                                break;
                        }
                    };
                    for (var property in _this.datas) {
                        _loop_1(property);
                    }
                }
            });
        };
        RestResourceDetailComponent.prototype.editEntity = function () {
            this.router.navigate(["/admin/" + this.ressourceName + "-edit", this.entityId]);
        };
        RestResourceDetailComponent.prototype.listEntity = function () {
            this.router.navigateByUrl("/admin/" + this.ressourceName + "-list");
        };
        Object.defineProperty(RestResourceDetailComponent.prototype, "REST_FIELD_TYPES", {
            get: function () {
                return exports.REST_FIELD_TYPES;
            },
            enumerable: false,
            configurable: true
        });
        RestResourceDetailComponent.prototype.loadBelongToDetail = function (data) {
            var resourceName = data.restField.metaData.addConfig.belongToOptions.resourceName;
            this.router.navigate(["/admin/" + resourceName + "-detail", data.data]);
        };
        return RestResourceDetailComponent;
    }());
    RestResourceDetailComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestResourceDetailComponent, deps: [{ token: i1__namespace.ActivatedRoute }, { token: RestResourceService }, { token: RestAdminConfigService }, { token: i1__namespace.Router }, { token: i1__namespace$1.NbTreeGridDataSourceBuilder }, { token: RestLangService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RestResourceDetailComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestResourceDetailComponent, selector: "ngx-rest-resource-detail", inputs: { resource: "resource", ID: "ID", ressourceName: "ressourceName", container: "container", style: "style" }, ngImport: i0__namespace, template: "<nb-card [style]=\"style ? style : ''\">\n  <nb-card-header *ngIf=\"!container\">\n    {{ resource.detailConfig?.title | titlecase }}\n  </nb-card-header>\n  <nb-card-body>\n    <nb-list *ngIf=\"!isTabsMenu; else tabsContent\">\n      <nb-list-item\n        *ngFor=\"let item of datas | keyvalue\"\n        class=\"rest-item-align\"\n      >\n        <!-- style=\"display: block\" -->\n        <ng-container\n          *ngIf=\"\n            item.value.restField.type == REST_FIELD_TYPES.TEXT ||\n            item.value.restField.type == REST_FIELD_TYPES.STRING ||\n            item.value.restField.type == REST_FIELD_TYPES.NUMBER ||\n            item.value.restField.type == REST_FIELD_TYPES.ENUM\n          \"\n        >\n          <ng-container *ngIf=\"!item.value.restField.template\">\n            <div class=\"\">\n              <b>{{ item.key | titlecase }}: </b>\n            </div>\n            <div class=\"\">\n              {{ item.value.data }}\n            </div>\n          </ng-container>\n\n          <div *ngIf=\"item.value.restField.template\">\n            <cng-html-compiler\n              [template]=\"item.value.restField.template\"\n              [componentClass]=\"item.value.data\"\n            >\n            </cng-html-compiler>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.JSON\">\n          <ng-container *ngIf=\"!item.value.restField.template\">\n            <div class=\"\">\n              <b>{{ item.key | titlecase }}: </b>\n            </div>\n            <div class=\"\">\n              {{ jsonValue(item.value) }}\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"item.value.restField.template\">\n            <cng-html-compiler\n              [template]=\"item.value.restField.template\"\n              [componentClass]=\"jsonValue(item.value)\"\n            >\n            </cng-html-compiler>\n          </ng-container>\n        </ng-container>\n\n        <ng-container\n          *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.BOOLEAN\"\n        >\n          <ng-container *ngIf=\"!item.value.restField.template\">\n            <div class=\"\">\n              <b>{{ item.key | titlecase }}: </b>\n            </div>\n\n            <div class=\"\">\n              <nb-checkbox\n                [checked]=\"item.value.data\"\n                [disabled]=\"true\"\n              ></nb-checkbox>\n            </div>\n          </ng-container>\n\n          <ng-container *ngIf=\"item.value.restField.template\">\n            <cng-html-compiler\n              [template]=\"item.value.restField.template\"\n              [componentClass]=\"item.value.data\"\n            >\n            </cng-html-compiler>\n          </ng-container>\n        </ng-container>\n\n        <ng-container\n          *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.IMAGE\"\n        >\n          <ng-container *ngIf=\"!item.value.restField.template\">\n            <div class=\"\">\n              <b>{{ item.key | titlecase }}: </b>\n            </div>\n            <div class=\"\">\n              <img\n                class=\"rest-img\"\n                [src]=\"item.value.data\"\n                alt=\"\"\n                [style]=\"style\"\n              />\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"item.value.restField.template\">\n            <cng-html-compiler\n              [template]=\"item.value.restField.template\"\n              [componentClass]=\"item.value.data\"\n            >\n            </cng-html-compiler>\n          </ng-container>\n        </ng-container>\n\n        <ng-container\n          *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.DATE\"\n        >\n          <ng-container *ngIf=\"!item.value.restField.template\">\n            <div class=\"\">\n              <b>{{ item.key | titlecase }}: </b>\n            </div>\n            <div class=\"\">\n              {{ item.value.data | date }}\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"item.value.restField.template\">\n            <cng-html-compiler\n              [template]=\"item.value.restField.template\"\n              [componentClass]=\"item.value.data\"\n            >\n            </cng-html-compiler>\n          </ng-container>\n        </ng-container>\n\n        <ng-container\n          *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.BELONG_TO\"\n        >\n          <ng-container *ngIf=\"!item.value.restField.template\">\n            <div class=\"\">\n              <b>{{ item.value.restField.label | titlecase }}: </b>\n            </div>\n            <div class=\"\">\n              <a\n                (click)=\"loadBelongToDetail(item.value)\"\n                nbTooltip=\"{{ 'rest-detail.belongToRef' | translate }}\"\n                nbTooltipPlacement=\"top\"\n                class=\"belongTo-link\"\n              >\n                {{ item.value.data }}\n              </a>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"item.value.restField.template\">\n            <cng-html-compiler\n              [template]=\"item.value.restField.template\"\n              [componentClass]=\"item.value.data\"\n            >\n            </cng-html-compiler>\n          </ng-container>\n        </ng-container>\n\n        <ng-container\n          *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.HAS_MANY\"\n        >\n          <!-- CAS 1 -->\n          <ng-container\n            *ngIf=\"\n              item.value.restField?.metaData?.listConfig?.restManyResources &&\n              !item.value.restField?.metaData?.detailConfig?.restManyResources\n            \"\n          >\n            <table [nbTreeGrid]=\"listDataSource[item.key]\">\n              <tr\n                nbTreeGridRow\n                *nbTreeGridRowDef=\"let row; columns: allColumns\"\n              ></tr>\n\n              <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n                <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n                  <ngx-fs-icon\n                    [expanded]=\"row.expanded\"\n                    [place]=\"row.data.place\"\n                  ></ngx-fs-icon>\n                  <ng-container\n                    *ngIf=\"\n                      !item.value.restField?.metaData?.listConfig\n                        ?.restManyResources.template\n                    \"\n                  >\n                    <b> {{ row.data[customColumn] }}</b>\n                  </ng-container>\n\n                  <ng-container\n                    *ngIf=\"\n                      item.value.restField?.metaData?.listConfig\n                        ?.restManyResources.template\n                    \"\n                  >\n                    <span *ngIf=\"row.data.place\">\n                      {{ item.value.restField.name }}</span\n                    >\n                    <ng-container *ngIf=\"!row.data.place\">\n                      <cng-html-compiler\n                        [template]=\"\n                          item.value.restField.metaData.listConfig\n                            .restManyResources.template\n                        \"\n                        [componentClass]=\"row.data.item\"\n                      >\n                      </cng-html-compiler>\n                    </ng-container>\n                  </ng-container>\n                </td>\n              </ng-container>\n            </table>\n          </ng-container>\n\n          <!-- CAS 2 -->\n          <ng-container\n            *ngIf=\"\n              item.value.restField?.metaData?.detailConfig?.restManyResources\n            \"\n          >\n            <div\n              *ngIf=\"\n                isObject(\n                  item.value.restField.metaData.detailConfig.restManyResources\n                );\n                else cas21\n              \"\n            >\n              <table [nbTreeGrid]=\"listDataSource[item.key]\">\n                <tr\n                  nbTreeGridRow\n                  *nbTreeGridRowDef=\"let row; columns: allColumns\"\n                ></tr>\n\n                <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n                  <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n                    <ngx-fs-icon\n                      [expanded]=\"row.expanded\"\n                      [place]=\"row.data.place\"\n                    ></ngx-fs-icon>\n                    <ng-container\n                      *ngIf=\"\n                        !item.value.restField.metaData.detailConfig\n                          .restManyResources?.template\n                      \"\n                    >\n                      <b> {{ row.data[customColumn] }}</b>\n                    </ng-container>\n\n                    <ng-container\n                      *ngIf=\"\n                        item.value.restField.metaData.detailConfig\n                          .restManyResources?.template\n                      \"\n                    >\n                      <span *ngIf=\"row.data.place\">\n                        {{ item.value.restField.name }}</span\n                      >\n                      <ng-container *ngIf=\"!row.data.place\">\n                        <cng-html-compiler\n                          [template]=\"\n                            item.value.restField.metaData.detailConfig\n                              .restManyResources.template\n                          \"\n                          [componentClass]=\"row.data.item\"\n                        >\n                        </cng-html-compiler>\n                      </ng-container>\n                    </ng-container>\n                  </td>\n                </ng-container>\n              </table>\n            </div>\n            <ng-template #cas21>\n              <div\n                class=\"row\"\n                *ngFor=\"let res of listDataSource[item.value.restField.name]\"\n              >\n                <ngx-rest-resource-detail\n                  [resource]=\"res.resource\"\n                  [ID]=\"res.id\"\n                  [ressourceName]=\"res.resourceName\"\n                  [container]=\"true\"\n                  [style]=\"res.style\"\n                ></ngx-rest-resource-detail>\n              </div>\n            </ng-template>\n          </ng-container>\n        </ng-container>\n\n        <ng-container\n          *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.BELONG_TO_MANY\"\n        >\n          <table [nbTreeGrid]=\"listDataSource[item.key]\">\n            <tr\n              nbTreeGridRow\n              *nbTreeGridRowDef=\"let row; columns: allColumns\"\n            ></tr>\n\n            <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n              <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n                <ngx-fs-icon\n                  [expanded]=\"row.expanded\"\n                  [place]=\"row.data.place\"\n                ></ngx-fs-icon>\n                <ng-container\n                  *ngIf=\"\n                    !item.value.restField.metaData.listConfig\n                      .restBelongToManyResources.template\n                  \"\n                >\n                  <b> {{ row.data[customColumn] }}</b>\n                </ng-container>\n\n                <ng-container\n                  *ngIf=\"\n                    item.value.restField.metaData.listConfig\n                      .restBelongToManyResources.template\n                  \"\n                >\n                  <span *ngIf=\"row.data.place\">{{\n                    item.value.restField.name\n                  }}</span>\n                  <ng-container *ngIf=\"!row.data.place\">\n                    <cng-html-compiler\n                      [template]=\"\n                        item.value.restField.metaData.listConfig\n                          .restBelongToManyResources.template\n                      \"\n                      [componentClass]=\"row.data.item\"\n                    >\n                    </cng-html-compiler>\n                  </ng-container>\n                </ng-container>\n              </td>\n            </ng-container>\n          </table>\n        </ng-container>\n      </nb-list-item>\n    </nb-list>\n    <ng-template #tabsContent>\n      <nb-tabset>\n        <nb-tab [tabTitle]=\"tabs\" *ngFor=\"let tabs of tabsName\">\n          <nb-list>\n            <nb-list-item\n              *ngFor=\"let item of datas1[tabs] | keyvalue\"\n              class=\"rest-item-align\"\n            >\n              <!-- style=\"display: flex, \" -->\n              <ng-container\n                *ngIf=\"\n                  item.value.restField.type == REST_FIELD_TYPES.TEXT ||\n                  item.value.restField.type == REST_FIELD_TYPES.STRING ||\n                  item.value.restField.type == REST_FIELD_TYPES.NUMBER ||\n                  item.value.restField.type == REST_FIELD_TYPES.ENUM\n                \"\n              >\n                <ng-container *ngIf=\"!item.value.restField.template\">\n                  <div class=\"\">\n                    <b>{{ item.key | titlecase }}: </b>\n                  </div>\n                  <div class=\"\">\n                    {{ item.value.data }}\n                  </div>\n                </ng-container>\n\n                <div *ngIf=\"item.value.restField.template\">\n                  <cng-html-compiler\n                    [template]=\"item.value.restField.template\"\n                    [componentClass]=\"item.value.data\"\n                  >\n                  </cng-html-compiler>\n                </div>\n              </ng-container>\n\n              <ng-container\n                *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.BOOLEAN\"\n              >\n                <ng-container *ngIf=\"!item.value.restField.template\">\n                  <div class=\"\">\n                    <b>{{ item.key | titlecase }}: </b>\n                  </div>\n\n                  <div class=\"\">\n                    <nb-checkbox\n                      [checked]=\"item.value.data\"\n                      [disabled]=\"true\"\n                    ></nb-checkbox>\n                  </div>\n                </ng-container>\n\n                <ng-container *ngIf=\"item.value.restField.template\">\n                  <cng-html-compiler\n                    [template]=\"item.value.restField.template\"\n                    [componentClass]=\"item.value.data\"\n                  >\n                  </cng-html-compiler>\n                </ng-container>\n              </ng-container>\n\n              <ng-container\n                *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.IMAGE\"\n              >\n                <ng-container *ngIf=\"!item.value.restField.template\">\n                  <div class=\"\">\n                    <b>{{ item.key | titlecase }}: </b>\n                  </div>\n                  <div class=\"\">\n                    <img\n                      class=\"rest-img\"\n                      [src]=\"item.value.data\"\n                      alt=\"\"\n                      [style]=\"style\"\n                    />\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"item.value.restField.template\">\n                  <cng-html-compiler\n                    [template]=\"item.value.restField.template\"\n                    [componentClass]=\"item.value.data\"\n                  >\n                  </cng-html-compiler>\n                </ng-container>\n              </ng-container>\n\n              <ng-container\n                *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.DATE\"\n              >\n                <ng-container *ngIf=\"!item.value.restField.template\">\n                  <div class=\"\">\n                    <b>{{ item.key | titlecase }}: </b>\n                  </div>\n                  <div class=\"\">\n                    {{ item.value.data | date }}\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"item.value.restField.template\">\n                  <cng-html-compiler\n                    [template]=\"item.value.restField.template\"\n                    [componentClass]=\"item.value.data\"\n                  >\n                  </cng-html-compiler>\n                </ng-container>\n              </ng-container>\n\n              <ng-container\n                *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.BELONG_TO\"\n              >\n                <ng-container *ngIf=\"!item.value.restField.template\">\n                  <div class=\"\">\n                    <b>{{ item.value.restField.label | titlecase }}: </b>\n                  </div>\n                  <div class=\"\">\n                    <a\n                      (click)=\"loadBelongToDetail(item.value)\"\n                      nbTooltip=\"{{ 'rest-detail.belongToRef' | translate }}\"\n                      nbTooltipPlacement=\"top\"\n                      class=\"belongTo-link\"\n                    >\n                      {{ item.value.data }}\n                    </a>\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"item.value.restField.template\">\n                  <cng-html-compiler\n                    [template]=\"item.value.restField.template\"\n                    [componentClass]=\"item.value.data\"\n                  >\n                  </cng-html-compiler>\n                </ng-container>\n              </ng-container>\n\n              <ng-container\n                *ngIf=\"item.value.restField.type == REST_FIELD_TYPES.HAS_MANY\"\n              >\n                <ng-container\n                  *ngIf=\"\n                    item.value.restField?.metaData?.listConfig\n                      ?.restManyResources &&\n                    !item.value.restField?.metaData?.detailConfig\n                      ?.restManyResources\n                  \"\n                >\n                  <table [nbTreeGrid]=\"listDataSource[item.key]\">\n                    <tr\n                      nbTreeGridRow\n                      *nbTreeGridRowDef=\"let row; columns: allColumns\"\n                    ></tr>\n\n                    <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n                      <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n                        <ngx-fs-icon\n                          [expanded]=\"row.expanded\"\n                          [place]=\"row.data.place\"\n                        ></ngx-fs-icon>\n                        <ng-container\n                          *ngIf=\"\n                            !item.value.restField?.metaData?.listConfig\n                              ?.restManyResources.template\n                          \"\n                        >\n                          <b> {{ row.data[customColumn] }}</b>\n                        </ng-container>\n\n                        <ng-container\n                          *ngIf=\"\n                            item.value.restField?.metaData?.listConfig\n                              ?.restManyResources.template\n                          \"\n                        >\n                          <span *ngIf=\"row.data.place\">\n                            {{ item.value.restField.name }}</span\n                          >\n                          <ng-container *ngIf=\"!row.data.place\">\n                            <cng-html-compiler\n                              [template]=\"\n                                item.value.restField.metaData.listConfig\n                                  .restManyResources.template\n                              \"\n                              [componentClass]=\"row.data.item\"\n                            >\n                            </cng-html-compiler>\n                          </ng-container>\n                        </ng-container>\n                      </td>\n                    </ng-container>\n                  </table>\n                </ng-container>\n                <ng-container\n                  *ngIf=\"\n                    item.value.restField?.metaData?.detailConfig\n                      ?.restManyResources\n                  \"\n                >\n                  <ng-container\n                    *ngIf=\"\n                      isObject(\n                        item.value.restField?.metaData?.detailConfig\n                          ?.restManyResources\n                      );\n                      else displayRes\n                    \"\n                  >\n                    <table [nbTreeGrid]=\"listDataSource[item.key]\">\n                      <tr\n                        nbTreeGridRow\n                        *nbTreeGridRowDef=\"let row; columns: allColumns\"\n                      ></tr>\n\n                      <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n                        <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n                          <ngx-fs-icon\n                            [expanded]=\"row.expanded\"\n                            [place]=\"row.data.place\"\n                          ></ngx-fs-icon>\n                          <ng-container\n                            *ngIf=\"\n                              !item.value.restField?.metaData?.detailConfig\n                                ?.restManyResources.template\n                            \"\n                          >\n                            <b> {{ row.data[customColumn] }}</b>\n                          </ng-container>\n\n                          <ng-container\n                            *ngIf=\"\n                              item.value.restField?.metaData?.detailConfig\n                                ?.restManyResources.template\n                            \"\n                          >\n                            <span *ngIf=\"row.data.place\">\n                              {{ item.value.restField.name }}</span\n                            >\n                            <ng-container *ngIf=\"!row.data.place\">\n                              <cng-html-compiler\n                                [template]=\"\n                                  item.value.restField.metaData.detailConfig\n                                    .restManyResources.template\n                                \"\n                                [componentClass]=\"row.data.item\"\n                              >\n                              </cng-html-compiler>\n                            </ng-container>\n                          </ng-container>\n                        </td>\n                      </ng-container>\n                    </table>\n                  </ng-container>\n                  <ng-template #displayRes>\n                    <div\n                      class=\"row\"\n                      *ngFor=\"\n                        let res of listDataSource[item.value.restField.name]\n                      \"\n                    >\n                      <ngx-rest-resource-detail\n                        [resource]=\"res.resource\"\n                        [ID]=\"res.id\"\n                        [ressourceName]=\"res.resourceName\"\n                        [container]=\"true\"\n                        [style]=\"res.style\"\n                      ></ngx-rest-resource-detail>\n                    </div>\n                  </ng-template>\n                </ng-container>\n              </ng-container>\n\n              <ng-container\n                *ngIf=\"\n                  item.value.restField.type == REST_FIELD_TYPES.BELONG_TO_MANY\n                \"\n              >\n                <table [nbTreeGrid]=\"listDataSource[item.key]\">\n                  <tr\n                    nbTreeGridRow\n                    *nbTreeGridRowDef=\"let row; columns: allColumns\"\n                  ></tr>\n\n                  <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n                    <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n                      <ngx-fs-icon\n                        [expanded]=\"row.expanded\"\n                        [place]=\"row.data.place\"\n                      ></ngx-fs-icon>\n                      <ng-container\n                        *ngIf=\"\n                          !item.value.restField.metaData.listConfig\n                            .restBelongToManyResources.template\n                        \"\n                      >\n                        <b> {{ row.data[customColumn] }}</b>\n                      </ng-container>\n\n                      <ng-container\n                        *ngIf=\"\n                          item.value.restField.metaData.listConfig\n                            .restBelongToManyResources.template\n                        \"\n                      >\n                        <span *ngIf=\"row.data.place\">{{\n                          item.value.restField.name\n                        }}</span>\n                        <ng-container *ngIf=\"!row.data.place\">\n                          <cng-html-compiler\n                            [template]=\"\n                              item.value.restField.metaData.listConfig\n                                .restBelongToManyResources.template\n                            \"\n                            [componentClass]=\"row.data.item\"\n                          >\n                          </cng-html-compiler>\n                        </ng-container>\n                      </ng-container>\n                    </td>\n                  </ng-container>\n                </table>\n              </ng-container>\n            </nb-list-item>\n          </nb-list>\n        </nb-tab>\n      </nb-tabset>\n    </ng-template>\n  </nb-card-body>\n\n  <nb-card-footer *ngIf=\"datas && !container\">\n    <div class=\"buttons-row\">\n      <button\n        nbButton\n        status=\"danger\"\n        style=\"margin-right: 10px\"\n        (click)=\"listEntity()\"\n      >\n        {{ \"rest-detail.btnCancel\" | translate }}\n      </button>\n\n      <button nbButton status=\"primary\" (click)=\"editEntity()\">\n        {{ \"rest-detail.btnEdit\" | translate }}\n      </button>\n    </div>\n  </nb-card-footer>\n</nb-card>\n", styles: ["b{margin-right:20px}.belongTo-link{color:#598bff!important}.belongTo-link:hover{text-decoration:underline!important;cursor:pointer}img{max-width:300px;max-height:200px}:host nb-tab{padding:1.25rem}.rest-item-align{margin-right:5px}\n"], components: [{ type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1__namespace$1.NbListComponent, selector: "nb-list", inputs: ["role"] }, { type: i1__namespace$1.NbListItemComponent, selector: "nb-list-item", inputs: ["role"] }, { type: i3__namespace.CngHtmlCompilerComponent, selector: "cng-html-compiler", inputs: ["template", "componentClass", "imports"] }, { type: i1__namespace$1.NbCheckboxComponent, selector: "nb-checkbox", inputs: ["status", "checked", "disabled", "indeterminate"], outputs: ["checkedChange"] }, { type: i1__namespace$1.NbTreeGridComponent, selector: "table[nbTreeGrid]", inputs: ["levelPadding", "nbTreeGrid", "equalColumnsWidth"] }, { type: i1__namespace$1.NbTreeGridRowComponent, selector: "tr[nbTreeGridRow]", inputs: ["doubleClickDelay", "clickToToggle"] }, { type: FsIconCComponent, selector: "ngx-fs-icon", inputs: ["expanded", "place"] }, { type: RestResourceDetailComponent, selector: "ngx-rest-resource-detail", inputs: ["resource", "ID", "ressourceName", "container", "style"] }, { type: i1__namespace$1.NbTabsetComponent, selector: "nb-tabset", inputs: ["fullWidth", "routeParam"], outputs: ["changeTab"] }, { type: i1__namespace$1.NbTabComponent, selector: "nb-tab", inputs: ["badgeStatus", "badgeDot", "disabled", "responsive", "active", "lazyLoad", "tabTitle", "tabId", "tabIcon", "route", "badgeText", "badgePosition"] }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i1__namespace$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i8__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1__namespace$1.NbTooltipDirective, selector: "[nbTooltip]", inputs: ["nbTooltipPlacement", "nbTooltipTrigger", "nbTooltipOffset", "nbTooltipAdjustment", "nbTooltipClass", "nbTooltipIcon", "nbTooltipStatus", "nbTooltip"], outputs: ["nbTooltipShowStateChange"], exportAs: ["nbTooltip"] }, { type: i1__namespace$1.NbTreeGridRowDefDirective, selector: "[nbTreeGridRowDef]", inputs: ["nbTreeGridRowDefColumns"] }, { type: i1__namespace$1.NbTreeGridColumnDefDirective, selector: "[nbTreeGridColumnDef]", inputs: ["nbTreeGridColumnDef", "hideOn", "showOn"] }, { type: i1__namespace$1.NbTreeGridCellDefDirective, selector: "[nbTreeGridCellDef]" }, { type: i1__namespace$1.NbTreeGridCellDirective, selector: "td[nbTreeGridCell]" }], pipes: { "titlecase": i8__namespace.TitleCasePipe, "keyvalue": i8__namespace.KeyValuePipe, "date": i8__namespace.DatePipe, "translate": i1__namespace$3.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestResourceDetailComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: "ngx-rest-resource-detail",
                        templateUrl: "./rest-resource-detail.component.html",
                        styleUrls: ["./rest-resource-detail.component.scss"],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.ActivatedRoute }, { type: RestResourceService }, { type: RestAdminConfigService }, { type: i1__namespace.Router }, { type: i1__namespace$1.NbTreeGridDataSourceBuilder }, { type: RestLangService }]; }, propDecorators: { resource: [{
                    type: i0.Input
                }], ID: [{
                    type: i0.Input
                }], ressourceName: [{
                    type: i0.Input
                }], container: [{
                    type: i0.Input
                }], style: [{
                    type: i0.Input
                }] } });

    var RestResourceDeleteComponent = /** @class */ (function () {
        function RestResourceDeleteComponent(ref, serviceRestResource) {
            this.ref = ref;
            this.serviceRestResource = serviceRestResource;
            this.isSubmit = false;
        }
        RestResourceDeleteComponent.prototype.dismiss = function (val) {
            if (val === void 0) { val = false; }
            this.ref.close(val);
        };
        RestResourceDeleteComponent.prototype.delete = function () {
            var _this = this;
            this.isSubmit = true;
            this.serviceRestResource
                .deleteResources(this.listConfig, this.datas.id)
                .subscribe(function () {
                _this.isSubmit = false;
                _this.dismiss(true);
            }, function (err) {
                _this.isSubmit = false;
                console.log(err);
            });
        };
        return RestResourceDeleteComponent;
    }());
    RestResourceDeleteComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestResourceDeleteComponent, deps: [{ token: i1__namespace$1.NbDialogRef }, { token: RestResourceService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RestResourceDeleteComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestResourceDeleteComponent, selector: "ngx-rest-resource-delete", inputs: { datas: "datas", title: "title", listConfig: "listConfig" }, ngImport: i0__namespace, template: "<nb-card>\n  <nb-card-header>{{ title }}</nb-card-header>\n  <nb-card-body> Voulez vous vraiment le supprimer? </nb-card-body>\n  <nb-card-footer>\n    <button\n      style=\"margin-right: 10px\"\n      nbButton\n      hero\n      status=\"primary\"\n      (click)=\"dismiss()\"\n    >\n      Non\n    </button>\n\n    <button\n      nbButton\n      status=\"danger\"\n      size=\"medium\"\n      (click)=\"delete()\"\n      [nbSpinner]=\"isSubmit\"\n      nbSpinnerStatus=\"danger\"\n      nbSpinnerMessage=\"\"\n    >\n      Oui\n    </button>\n  </nb-card-footer>\n</nb-card>\n", styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host nb-card{max-width:600px;max-height:500px}.nb-theme-dark :host nb-card{max-width:600px;max-height:500px}.nb-theme-cosmic :host nb-card{max-width:600px;max-height:500px}.nb-theme-corporate :host nb-card{max-width:600px;max-height:500px}\n"], components: [{ type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i1__namespace$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i1__namespace$1.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestResourceDeleteComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: "ngx-rest-resource-delete",
                        templateUrl: "./rest-resource-delete.component.html",
                        styleUrls: ["./rest-resource-delete.component.scss"],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.NbDialogRef }, { type: RestResourceService }]; }, propDecorators: { datas: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }], listConfig: [{
                    type: i0.Input
                }] } });

    var RestResourceListComponent = /** @class */ (function () {
        function RestResourceListComponent(serviceRestConfig, serviceRestResources, http, dialogService, activatedRoute, router, nbMenuService, exportService) {
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
        RestResourceListComponent.prototype.ngOnInit = function () {
            var _this = this;
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
            this.source.onChanged().subscribe(function (e) {
                setTimeout(function () {
                    _this.isFetching = false;
                });
            });
            this.nbMenuService
                .onItemClick()
                .pipe(operators.filter(function (_a) {
                var tag = _a.tag;
                return tag === "my-context";
            }), operators.map(function (_a) {
                var title = _a.item.title;
                return title;
            }))
                .subscribe(function (title) {
                switch (title) {
                    case "EXCEL":
                        _this.exportToExcel();
                        break;
                    case "PDF":
                        _this.exportToPdf();
                        break;
                    case "CSV":
                        _this.exportToCsv();
                        break;
                    default:
                        _this.exportAll();
                        break;
                }
            });
        };
        RestResourceListComponent.prototype.onDeleteConfirm = function (event) {
            var _this = this;
            var dialog = this.dialogService.open(RestResourceDeleteComponent, {
                context: {
                    datas: event.data,
                    title: "SUPPRESSION",
                    listConfig: this.resource.listConfig,
                },
            });
            dialog.onClose.subscribe(function (resp) {
                if (resp) {
                    _this.getList(_this.source.getPaging().page, _this.source.getPaging().perPage);
                }
            });
        };
        RestResourceListComponent.prototype.addNewEntity = function () {
            this.router.navigateByUrl("/admin/" + this.ressourceName + "-add");
        };
        RestResourceListComponent.prototype.detailEntity = function (event) {
            this.router.navigate([
                "/admin/" + this.ressourceName + "-detail",
                event.data.id,
            ]);
        };
        RestResourceListComponent.prototype.createMatTableColumns = function () {
            var _this = this;
            var colunms = {};
            this.resource.fields
                .filter(function (item) { return _this.resource.listConfig.columns.includes(item.name); })
                .forEach(function (elt) {
                colunms[elt.name] = {
                    title: elt.label,
                    type: "custom",
                    filter: false,
                    addable: true,
                    valuePrepareFunction: function (cell, row) { return ({
                        restField: elt,
                        cell: cell,
                        row: row,
                    }); },
                    editor: {
                        type: "custom",
                        component: RestResourceEditorFieldsComponent,
                    },
                    renderComponent: RestResourceListFieldComponent,
                };
            });
            return colunms;
        };
        RestResourceListComponent.prototype.getList = function (page, perPage) {
            var _this = this;
            if (page === void 0) { page = null; }
            if (perPage === void 0) { perPage = null; }
            if (page) {
                this.resource.queryParams = Object.assign(Object.assign({}, this.resource.queryParams), { page: page });
            }
            if (perPage) {
                this.resource.queryParams = Object.assign(Object.assign({}, this.resource.queryParams), { per_page: perPage });
            }
            this.source = new i9.ServerDataSource(this.http, {
                endPoint: this.serviceRestConfig.restBaseUrl +
                    "/" +
                    this.resource.listConfig.api +
                    "?" +
                    Object.keys(this.resource.listConfig.queryParams)
                        .reduce(function (cumul, item) { return cumul +
                        item +
                        "=" +
                        _this.resource.listConfig.queryParams[item] +
                        ","; }, "")
                        .slice(0, -1),
                dataKey: "data",
                pagerPageKey: "page",
                pagerLimitKey: "per_page",
                totalKey: "total",
                filterFieldKey: "#_include#",
            });
        };
        RestResourceListComponent.prototype.onCreateConfirm = function (event) {
            var _this = this;
            var datas = event.newData;
            var saveBelongTomany = [];
            this.resource.fields.forEach(function (elt) {
                if (elt.type == exports.REST_FIELD_TYPES.BELONG_TO_MANY) {
                    saveBelongTomany.push({
                        resources: datas[elt.name],
                        pivot: elt.metaData.addConfig.belongToManyOptions.pivotName,
                    });
                    delete datas[elt.name];
                }
            });
            this.serviceRestResources
                .addResources(this.resource.addConfig, Object.assign(Object.assign({}, datas), { user_id: 1 }))
                .subscribe(function (response) {
                if (saveBelongTomany.length > 0) {
                    saveBelongTomany.forEach(function (element, index) {
                        var _a;
                        var restResource = _this.serviceRestConfig.getSpecificResource(element.pivot);
                        var proms = [];
                        for (var index_1 = 0; index_1 < element.resources.length; index_1++) {
                            var item = element.resources[index_1];
                            var data = (_a = {},
                                _a[item["saveRelatedIdName"]] = item[item["saveRelatedIdName"]],
                                _a[item["saveResourceIdName"]] = response.id,
                                _a);
                            proms.push(_this.serviceRestResources
                                .addResources(restResource.addConfig, data)
                                .toPromise());
                        }
                        Promise.all(proms).then(function (res) {
                            _this.getList(_this.source.getPaging().page, _this.source.getPaging().perPage);
                        });
                    });
                }
                else
                    _this.getList(_this.source.getPaging().page, _this.source.getPaging().perPage);
            });
        };
        RestResourceListComponent.prototype.onCustom = function (event) {
            switch (event.action) {
                case "delete":
                    this.onDeleteConfirm(event);
                    break;
                case "detail":
                    this.detailEntity(event);
                    break;
            }
        };
        RestResourceListComponent.prototype.getFullData = function () {
            return this.serviceRestResources.getResources({
                api: this.resource.listConfig.api,
                queryParams: {
                    should_paginate: false,
                },
            });
        };
        RestResourceListComponent.prototype.exportToExcel = function () {
            var _this = this;
            var colunms = {};
            var sheetHeader = {};
            this.resource.fields
                .filter(function (item) { return _this.resource.listConfig.columns.includes(item.name); })
                .forEach(function (elt) {
                colunms[elt.name] = {
                    title: elt.label,
                };
            });
            Object.entries(colunms).forEach(function (_a, index) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                sheetHeader[_this.alphabelt[index]] = key;
            });
            var keys = Object.keys(sheetHeader);
            var edata = [];
            var udt = {
                data: [
                    { A: "Rest Excel export" },
                    sheetHeader, // table header
                ],
                skipHeader: true,
            };
            var elt = {};
            this.getFullData().subscribe(function (response) {
                response.forEach(function (element, indice) {
                    elt = {};
                    Object.entries(colunms).forEach(function (_a, index) {
                        var _b = __read(_a, 2), key = _b[0], value = _b[1];
                        elt[_this.alphabelt[index]] = element[sheetHeader[keys[index]]];
                    });
                    udt.data.push(elt);
                });
                edata.push(udt);
                _this.exportService.exportToExcel(edata, "rest_file_excel");
            });
        };
        RestResourceListComponent.prototype.exportToPdf = function () {
            var _this = this;
            var colunms = {};
            var customData = [];
            var header = [];
            var elt = [];
            this.resource.fields
                .filter(function (item) { return _this.resource.listConfig.columns.includes(item.name); })
                .forEach(function (elt) {
                header.push(elt.label);
            });
            this.getFullData().subscribe(function (response) {
                response.forEach(function (element) {
                    elt = [];
                    header.forEach(function (row) {
                        elt.push(element[row]);
                    });
                    customData.push(elt);
                });
                var fileTitle = _this.resource.name;
                _this.exportService.exportToPdf(header, customData, "rest_file_pdf", fileTitle);
            });
        };
        RestResourceListComponent.prototype.exportToCsv = function () {
            var _this = this;
            var colunms = {};
            var customData = [];
            var header = [];
            var elt = {};
            this.resource.fields
                .filter(function (item) { return _this.resource.listConfig.columns.includes(item.name); })
                .forEach(function (elt) {
                header.push(elt.label);
            });
            this.getFullData().subscribe(function (response) {
                response.forEach(function (element) {
                    elt = {};
                    header.forEach(function (row) {
                        elt[row] = element[row];
                    });
                    customData.push(elt);
                });
                _this.exportService.exportToCsv(header, customData, "rest_file_csv");
            });
        };
        RestResourceListComponent.prototype.exportAll = function () {
            var _this = this;
            var colunms = {};
            var pdfAndCsvHeader = [];
            var sheetHeader = {};
            var csvData = [];
            var pdfData = [];
            var eltPDF = [];
            var eltCSV = {};
            var eltEXCEL = {};
            this.resource.fields
                .filter(function (item) { return _this.resource.listConfig.columns.includes(item.name); })
                .forEach(function (elt) {
                pdfAndCsvHeader.push(elt.label);
                colunms[elt.name] = {
                    title: elt.label,
                };
            });
            Object.entries(colunms).forEach(function (_a, index) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                sheetHeader[_this.alphabelt[index]] = key;
            });
            var excelData = {
                data: [{ A: "Rest Excel export" }, sheetHeader],
                skipHeader: true,
            };
            var keys = Object.keys(sheetHeader);
            var edata = [];
            this.getFullData().subscribe(function (response) {
                response.forEach(function (element) {
                    //CSV
                    eltCSV = {};
                    pdfAndCsvHeader.forEach(function (row) {
                        eltCSV[row] = element[row];
                    });
                    csvData.push(eltCSV);
                    //PDF
                    eltPDF = [];
                    pdfAndCsvHeader.forEach(function (row) {
                        eltPDF.push(element[row]);
                    });
                    pdfData.push(eltPDF);
                    //EXCEL
                    eltEXCEL = {};
                    Object.entries(colunms).forEach(function (_a, index) {
                        var _b = __read(_a, 2), key = _b[0], value = _b[1];
                        eltEXCEL[_this.alphabelt[index]] = element[sheetHeader[keys[index]]];
                    });
                    excelData.data.push(eltEXCEL);
                    edata.push(excelData);
                });
                _this.exportService.generateZip(pdfAndCsvHeader, pdfData, csvData, edata);
            });
        };
        //Filter
        RestResourceListComponent.prototype.setPager = function (setPager) {
            this.source.setPaging(1, setPager, true);
            this.settings = Object.assign({}, this.settings);
        };
        RestResourceListComponent.prototype.selectFilterBy = function (value, index) {
            this.searchItems[index].field = value;
        };
        RestResourceListComponent.prototype.selectOperator = function (value, index) {
            this.searchItems[index].operator = value;
        };
        RestResourceListComponent.prototype.onFilter = function (val, index) {
            if (index != undefined && index != null) {
                this.searchItems[index].terms = val === null || val === void 0 ? void 0 : val.value;
            }
            else {
                this.searchItem = val === null || val === void 0 ? void 0 : val.value;
            }
        };
        RestResourceListComponent.prototype.addFieldSearch = function () {
            this.searchItems.push({ field: "", operator: "", terms: "" });
        };
        RestResourceListComponent.prototype.removeFieldSearch = function (index) {
            this.searchItems.splice(index, 1);
        };
        RestResourceListComponent.prototype.startSearch = function () {
            var _this = this;
            var params = {};
            var search = "";
            this.searchItems.forEach(function (element) {
                if (element.field != "" && element.terms != "") {
                    if (element.operator != "=") {
                        params[element.field + "-" + element.operator] = "" + element.terms;
                    }
                    else {
                        params[element.field] = "" + element.terms;
                    }
                }
            });
            search = Object.keys(this.resource.listConfig.queryParams)
                .reduce(function (cumul, item) { return cumul + item + "=" + _this.resource.listConfig.queryParams[item] + ","; }, "")
                .slice(0, -1);
            if (search != "") {
                search += "&";
            }
            search += Object.keys(params)
                .reduce(function (cumul, item) { return cumul + item + "=" + params[item] + "&"; }, "")
                .slice(0, -1);
            // console.log(search);
            this.source = new i9.ServerDataSource(this.http, {
                endPoint: this.serviceRestConfig.restBaseUrl +
                    "/" +
                    this.resource.listConfig.api +
                    "?" +
                    search,
                dataKey: "data",
                pagerPageKey: "page",
                pagerLimitKey: "per_page",
                totalKey: "total",
                filterFieldKey: "#_include#",
            });
        };
        return RestResourceListComponent;
    }());
    RestResourceListComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestResourceListComponent, deps: [{ token: RestAdminConfigService }, { token: RestResourceService }, { token: i1__namespace$2.HttpClient }, { token: i1__namespace$1.NbDialogService }, { token: i1__namespace.ActivatedRoute }, { token: i1__namespace.Router }, { token: i1__namespace$1.NbMenuService }, { token: RestExportService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RestResourceListComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestResourceListComponent, selector: "ngx-rest-resource-list", inputs: { resource: "resource" }, viewQueries: [{ propertyName: "search", first: true, predicate: ["search"], descendants: true }], ngImport: i0__namespace, template: "<nb-card status=\"success\">\n  <nb-card-header>\n    <div class=\"row\">\n      <div class=\"col-10\">\n        {{ this.resource.listConfig.title }}\n      </div>\n\n      <div class=\"col-1\"></div>\n      <div class=\"col-1\" style=\"display: flex\">\n        <button nbButton ghost status=\"control\" (click)=\"addNewEntity()\">\n          <nb-icon icon=\"plus-circle\"></nb-icon>\n        </button>\n        <button\n          nbButton\n          [nbContextMenu]=\"items\"\n          nbContextMenuTag=\"my-context\"\n          ghost\n          status=\"control\"\n        >\n          <nb-icon icon=\"menu\"></nb-icon>\n        </button>\n\n        <!-- <button\n          nbButton\n          status=\"primary\"\n          [nbContextMenu]=\"items\"\n          nbContextMenuTag=\"my-context\"\n        >\n          {{ \"rest-list.export\" | translate }}\n        </button> -->\n      </div>\n    </div>\n  </nb-card-header>\n\n  <nb-card-body\n    [nbSpinner]=\"isFetching\"\n    nbSpinnerSize=\"large\"\n    nbSpinnerStatus=\"primary\"\n  >\n    <!-- Rest-search implement -->\n    <div class=\"row mb-5\" *ngIf=\"this.resource.listConfig.searchFilter\">\n      <ng-container\n        *ngIf=\"this.resource.listConfig.searchFilter.filterBy.length > 0\"\n      >\n        <ng-container *ngFor=\"let search of searchItems; let index = index\">\n          <div class=\"col-lg-3 col-md-6 col-xs-12 input-space\">\n            <!-- Select with filter by -->\n            <nb-select\n              [placeholder]=\"'rest-list.filterPlaceholder' | translate\"\n              fullWidth\n              (selectedChange)=\"selectFilterBy($event, index)\"\n            >\n              <nb-option\n                *ngFor=\"\n                  let filter of this.resource.listConfig.searchFilter.filterBy\n                \"\n                [value]=\"filter\"\n                >{{ filter | titlecase }}</nb-option\n              >\n            </nb-select>\n          </div>\n\n          <div class=\"col-lg-3 col-md-6 col-xs-12 input-space\">\n            <nb-select\n              [placeholder]=\"'rest-list.operator' | translate\"\n              fullWidth\n              (selectedChange)=\"selectOperator($event, index)\"\n            >\n              <nb-option\n                *ngFor=\"let operator of filterOperator\"\n                [value]=\"operator.value\"\n                >{{ operator.name | translate }}\n              </nb-option>\n            </nb-select>\n          </div>\n          <div\n            class=\"col-lg-4 col-md-12 col-xs-12 input-space\"\n            [ngClass]=\"{\n              'col-12': this.resource.listConfig.searchFilter == null\n            }\"\n          >\n            <input\n              nbInput\n              (input)=\"onFilter($event.target, index)\"\n              fullWidth\n              [placeholder]=\"'rest-list.searchPlaceholder' | translate\"\n              type=\"text\"\n            />\n          </div>\n          <div\n            class=\"col-lg-1 col-md-6 col-xs-6 input-space\"\n            *ngIf=\"index == 0\"\n          >\n            <button nbButton fullWidth status=\"primary\" (click)=\"startSearch()\">\n              <nb-icon icon=\"search-outline\"></nb-icon>\n            </button>\n          </div>\n          <div\n            class=\"col-lg-1 col-md-6 col-xs-6 input-space\"\n            *ngIf=\"index == 0; else elseBlock\"\n          >\n            <button\n              nbButton\n              fullWidth\n              status=\"primary\"\n              (click)=\"addFieldSearch()\"\n            >\n              <nb-icon icon=\"plus-outline\"></nb-icon>\n            </button>\n          </div>\n          <ng-template #elseBlock>\n            <div class=\"col-lg-1 col-md-6 col-xs-6 input-space\">\n              <button\n                nbButton\n                fullWidth\n                status=\"danger\"\n                (click)=\"removeFieldSearch(index)\"\n              >\n                <nb-icon icon=\"minus-outline\"></nb-icon>\n              </button>\n            </div>\n          </ng-template>\n        </ng-container>\n      </ng-container>\n    </div>\n\n    <ng2-smart-table\n      [settings]=\"settings\"\n      [source]=\"source\"\n      (deleteConfirm)=\"onDeleteConfirm($event)\"\n      (createConfirm)=\"onCreateConfirm($event)\"\n      (userRowSelect)=\"detailEntity($event)\"\n      (custom)=\"onCustom($event)\"\n    >\n    </ng2-smart-table>\n\n    <div\n      class=\"row align-items-center justify-content-end\"\n      style=\"margin-top: 1rem\"\n    >\n      <label class=\"label mx-2\">{{ \"options.per_page\" | translate }}</label>\n      <nb-select\n        [placeholder]=\"resource.listConfig.perPage.toString()\"\n        [(selected)]=\"currentPerPage\"\n      >\n        <nb-option\n          *ngFor=\"let perPage of perPagesOptions\"\n          (click)=\"setPager(perPage.value)\"\n          value=\"perPage.value\"\n          >{{ perPage.title }}</nb-option\n        >\n      </nb-select>\n    </div>\n  </nb-card-body>\n</nb-card>\n", styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host nb-card-body{display:block}.nb-theme-default :host nb-card-body button{width:100%;margin-bottom:2rem;display:block}.nb-theme-default :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-default :host .result-from-dialog{flex-direction:column}.nb-theme-default :host .form-input-card nb-card-body{display:block}@media (max-width: 1199.98px){.nb-theme-default :host button{padding:.8rem}}@media (max-width: 575.98px){.nb-theme-default :host button{padding:.75rem}}.nb-theme-dark :host nb-card-body{display:block}.nb-theme-dark :host nb-card-body button{width:100%;margin-bottom:2rem;display:block}.nb-theme-dark :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-dark :host .result-from-dialog{flex-direction:column}.nb-theme-dark :host .form-input-card nb-card-body{display:block}@media (max-width: 1199.98px){.nb-theme-dark :host button{padding:.8rem}}@media (max-width: 575.98px){.nb-theme-dark :host button{padding:.75rem}}.nb-theme-cosmic :host nb-card-body{display:block}.nb-theme-cosmic :host nb-card-body button{width:100%;margin-bottom:2rem;display:block}.nb-theme-cosmic :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-cosmic :host .result-from-dialog{flex-direction:column}.nb-theme-cosmic :host .form-input-card nb-card-body{display:block}@media (max-width: 1199.98px){.nb-theme-cosmic :host button{padding:.8rem}}@media (max-width: 575.98px){.nb-theme-cosmic :host button{padding:.75rem}}.nb-theme-corporate :host nb-card-body{display:block}.nb-theme-corporate :host nb-card-body button{width:100%;margin-bottom:2rem;display:block}.nb-theme-corporate :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-corporate :host .result-from-dialog{flex-direction:column}.nb-theme-corporate :host .form-input-card nb-card-body{display:block}@media (max-width: 1199.98px){.nb-theme-corporate :host button{padding:.8rem}}@media (max-width: 575.98px){.nb-theme-corporate :host button{padding:.75rem}}::ng-deep ng2-st-tbody-edit-delete{display:none;height:0!important}::ng-deep ng2-st-tbody-custom{display:flex;text-align:center}.input-space{margin-top:1rem}.nb-theme-default ng2-smart-table th.ng2-smart-actions-title-add a{background-color:#00d68f!important;border-bottom-width:0;border-bottom-color:#00d68f!important;color:#fff}\n"], components: [{ type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }, { type: i1__namespace$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1__namespace$1.NbSelectComponent, selector: "nb-select", inputs: ["size", "status", "shape", "appearance", "placeholder", "optionsOverlayOffset", "scrollStrategy", "outline", "filled", "hero", "disabled", "fullWidth", "compareWith", "selected", "multiple", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }, { type: i1__namespace$1.NbOptionComponent, selector: "nb-option", inputs: ["disabled", "value"], outputs: ["selectionChange"] }, { type: i9__namespace.Ng2SmartTableComponent, selector: "ng2-smart-table", inputs: ["settings", "source"], outputs: ["rowSelect", "rowDeselect", "userRowSelect", "delete", "edit", "create", "custom", "deleteConfirm", "editConfirm", "createConfirm", "rowHover"] }], directives: [{ type: i1__namespace$1.NbContextMenuDirective, selector: "[nbContextMenu]", inputs: ["nbContextMenuAdjustment", "nbContextMenuTrigger", "nbContextMenuPlacement", "nbContextMenuTag", "nbContextMenu", "nbContextMenuClass"] }, { type: i1__namespace$1.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }, { type: i8__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i8__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace$1.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }], pipes: { "translate": i1__namespace$3.TranslatePipe, "titlecase": i8__namespace.TitleCasePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestResourceListComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: "ngx-rest-resource-list",
                        templateUrl: "./rest-resource-list.component.html",
                        styleUrls: ["./rest-resource-list.component.scss"],
                    }]
            }], ctorParameters: function () { return [{ type: RestAdminConfigService }, { type: RestResourceService }, { type: i1__namespace$2.HttpClient }, { type: i1__namespace$1.NbDialogService }, { type: i1__namespace.ActivatedRoute }, { type: i1__namespace.Router }, { type: i1__namespace$1.NbMenuService }, { type: RestExportService }]; }, propDecorators: { resource: [{
                    type: i0.Input
                }], search: [{
                    type: i0.ViewChild,
                    args: ["search"]
                }] } });

    var RestAdminConfigService = /** @class */ (function () {
        function RestAdminConfigService(restConfig) {
            this.restConfig = restConfig;
            this.components = [];
            this._restAuthParams = {
                strategy: exports.STRATEGY_AUTH.EMAIL,
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
        }
        Object.defineProperty(RestAdminConfigService.prototype, "restResources", {
            get: function () {
                return this._restResources;
            },
            set: function (v) {
                this._restResources = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RestAdminConfigService.prototype, "siteName", {
            get: function () {
                return this.restConfig.name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RestAdminConfigService.prototype, "restBaseUrl", {
            get: function () {
                return this.restConfig.baseUrl;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RestAdminConfigService.prototype, "restPathFileTranslate", {
            get: function () {
                return this.restConfig.translate
                    ? this.restConfig.translate.filePath
                    : 'assets/i18n/';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RestAdminConfigService.prototype, "restLanguage", {
            get: function () {
                return this.restConfig.translate
                    ? this.restConfig.translate.languages
                    : this.defaultLanguage;
            },
            enumerable: false,
            configurable: true
        });
        RestAdminConfigService.prototype.getSpecificResource = function (nameResource) {
            return this._restResources.find(function (rest) { return rest.name.toLowerCase() == nameResource.toLowerCase(); });
        };
        RestAdminConfigService.prototype.generateMenus = function () {
            var groupsName = [];
            this._restResources.map(function (rest) {
                if (rest.listConfig.group)
                    groupsName.push(rest.listConfig.group);
            });
            var menus_group = {};
            this._restResources.forEach(function (item) {
                if (item.listConfig.group) {
                    switch (item.listConfig.group.type) {
                        case exports.TYPE_GROUP.SEPARATOR:
                            if (Array.isArray(menus_group[item.listConfig.group.name]))
                                menus_group[item.listConfig.group.name].push({
                                    title: item.name,
                                    icon: item.icon,
                                    link: item.name.toLowerCase() + '-list',
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
                                    link: 'admin/' + item.name.toLowerCase() + '-list',
                                });
                            }
                            break;
                        case exports.TYPE_GROUP.MENU:
                            if (Array.isArray(menus_group[item.listConfig.group.name])) {
                                menus_group[item.listConfig.group.name][0].children.push({
                                    title: item.name,
                                    link: 'admin/' + item.name.toLowerCase() + '-list',
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
                                                link: 'admin/' + item.name.toLowerCase() + '-list',
                                                icon: item.icon,
                                            },
                                        ],
                                    },
                                ];
                            }
                            break;
                        default:
                            if (Array.isArray(menus_group[exports.TYPE_GROUP.DEFAULT]))
                                menus_group[exports.TYPE_GROUP.DEFAULT].push({
                                    title: item.name,
                                    icon: item.icon,
                                    link: 'admin/' + item.name.toLowerCase() + '-list',
                                });
                            else {
                                menus_group[exports.TYPE_GROUP.DEFAULT] = [];
                                menus_group[exports.TYPE_GROUP.DEFAULT].push({
                                    title: item.name,
                                    link: 'admin/' + item.name.toLowerCase() + '-list',
                                    icon: item.icon,
                                });
                            }
                            break;
                    }
                }
                else {
                    if (Array.isArray(menus_group[exports.TYPE_GROUP.DEFAULT]))
                        menus_group[exports.TYPE_GROUP.DEFAULT].push({
                            title: item.name,
                            icon: item.icon,
                            link: 'admin/' + item.name.toLowerCase() + '-list',
                        });
                    else {
                        menus_group[exports.TYPE_GROUP.DEFAULT] = [];
                        menus_group[exports.TYPE_GROUP.DEFAULT].push({
                            title: item.name,
                            link: 'admin/' + item.name.toLowerCase() + '-list',
                            icon: item.icon,
                        });
                    }
                }
            });
            var menus_test = [];
            var priorities = groupsName
                .sort(function (a, b) { return a.priority - b.priority; })
                .reverse();
            priorities = ___namespace.uniqBy(priorities, 'name');
            priorities.forEach(function (item) {
                menus_test.push.apply(menus_test, __spreadArray([], __read(menus_group[item.name])));
            });
            return menus_test;
        };
        RestAdminConfigService.prototype.generateRoutes = function () {
            return this._restResources.reduce(function (cumul, rest) {
                if (rest.authRequired) {
                    return __spreadArray(__spreadArray([], __read(cumul)), [
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
                    ]);
                }
                return __spreadArray(__spreadArray([], __read(cumul)), [
                    {
                        path: rest.name.toLowerCase() + '-list',
                        data: {
                            ngxPermissions: {
                                only: rest.permissions,
                            },
                        },
                        component: RestResourceListComponent,
                    },
                    {
                        path: rest.name.toLowerCase() + '-add',
                        data: {
                            ngxPermissions: {
                                only: rest.permissions,
                            },
                        },
                        component: RestResourceAddComponent,
                    },
                    {
                        path: rest.name.toLowerCase() + '-edit/:id',
                        data: {
                            ngxPermissions: {
                                only: rest.permissions,
                            },
                        },
                        component: RestResourceAddComponent,
                    },
                    {
                        path: rest.name.toLowerCase() + '-detail/:id',
                        data: {
                            ngxPermissions: {
                                only: rest.permissions,
                            },
                        },
                        component: RestResourceDetailComponent,
                    },
                ]);
            }, []);
        };
        Object.defineProperty(RestAdminConfigService.prototype, "restAuthParams", {
            get: function () {
                return this._restAuthParams;
            },
            enumerable: false,
            configurable: true
        });
        RestAdminConfigService.prototype.checkValueRestAuth = function (params) {
            var rest = {
                strategy: exports.STRATEGY_AUTH.EMAIL,
                baseEndpoint: '',
                logoutEndPoint: '',
                loginEndPoint: '',
                userInfoEndPoint: '',
            };
            rest.strategy = params.strategy ? params.strategy : exports.STRATEGY_AUTH.EMAIL;
            rest.baseEndpoint = params.baseEndpoint
                ? params.baseEndpoint
                : this.restBaseUrl;
            rest.loginEndPoint = params.loginEndPoint
                ? params.loginEndPoint
                : '/auth/login';
            rest.logoutEndPoint = params.logoutEndPoint
                ? params.logoutEndPoint
                : 'auth/logout';
            rest.userInfoEndPoint = params.userInfoEndPoint
                ? params.userInfoEndPoint
                : '/users/me';
            rest.redirectRouteAfterLogin = params.redirectRouteAfterLogin
                ? this.checkIfRouteExist(params.redirectRouteAfterLogin.substring(1) + '-list')
                    ? '/admin' + params.redirectRouteAfterLogin + '-list'
                    : '/admin'
                : '/admin';
            rest.tokenLocationInResponse = params.tokenLocationInResponse
                ? params.tokenLocationInResponse
                : 'data.token';
            return rest;
        };
        RestAdminConfigService.prototype.checkIfRouteExist = function (route) {
            return this.generateRoutes().find(function (item) { return item.path === route; })
                ? true
                : false;
        };
        return RestAdminConfigService;
    }());
    RestAdminConfigService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestAdminConfigService, deps: [{ token: 'restConfig' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RestAdminConfigService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestAdminConfigService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestAdminConfigService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['restConfig']
                        }] }];
        } });

    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent(sidebarService, menuService, themeService, layoutService, breakpointService, serviceRestAdmin, authService, router, langService, httpClient) {
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
            this.destroy$ = new rxjs.Subject();
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
        HeaderComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.currentTheme = this.themeService.currentTheme;
            this.appLanguage = this.langService.getLanguages();
            this.currentLang = this.langService.selected;
            var authApp = JSON.parse(localStorage.getItem(GLOBALS.AUTH_APP_TOKEN));
            if (authApp && authApp.value) {
                this.httpClient
                    .get(this.serviceRestAdmin.restBaseUrl + "/" + this.serviceRestAdmin.restAuthParams.userInfoEndPoint)
                    .subscribe(function (resp) {
                    var user = {
                        name: resp.original.full_name,
                        picture: resp.original.infos.logo,
                    };
                    _this.user = user;
                    _this.isAuth = true;
                });
            }
            var xl = this.breakpointService.getBreakpointsMap().xl;
            this.themeService
                .onMediaQueryChange()
                .pipe(operators.map(function (_a) {
                var _b = __read(_a, 2), currentBreakpoint = _b[1];
                return currentBreakpoint.width < xl;
            }), operators.takeUntil(this.destroy$))
                .subscribe(function (isLessThanXl) { return (_this.userPictureOnly = isLessThanXl); });
            this.themeService
                .onThemeChange()
                .pipe(operators.map(function (_a) {
                var name = _a.name;
                return name;
            }), operators.takeUntil(this.destroy$))
                .subscribe(function (themeName) { return (_this.currentTheme = themeName); });
            this.menuService
                .onItemClick()
                .pipe(operators.filter(function (_a) {
                var tag = _a.tag;
                return tag === 'my-context-menu';
            }), operators.map(function (_a) {
                var title = _a.item.title;
                return title;
            }))
                .subscribe(function (title) {
                switch (title) {
                    case 'Déconnexion':
                        _this.httpClient
                            .post(_this.serviceRestAdmin.restBaseUrl + "/" + _this.serviceRestAdmin.restAuthParams.logoutEndPoint, {})
                            .subscribe(function (resp) {
                            localStorage.removeItem(GLOBALS.AUTH_APP_TOKEN);
                            _this.router.navigateByUrl('/login');
                            _this.isAuth = false;
                        }, function (err) {
                            localStorage.removeItem(GLOBALS.AUTH_APP_TOKEN);
                            _this.router.navigateByUrl('/login');
                            _this.isAuth = false;
                        });
                        break;
                    default:
                        console.log('Non pris en charge');
                        break;
                }
            });
        };
        HeaderComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        HeaderComponent.prototype.changeTheme = function (themeName) {
            this.themeService.changeTheme(themeName);
        };
        HeaderComponent.prototype.toggleSidebar = function () {
            this.sidebarService.toggle(true, 'menu-sidebar');
            this.layoutService.changeLayoutSize();
            return false;
        };
        HeaderComponent.prototype.navigateHome = function () {
            this.menuService.navigateHome();
            return false;
        };
        HeaderComponent.prototype.signin = function () {
            this.router.navigateByUrl('/auth/login');
        };
        HeaderComponent.prototype.sigout = function () {
            this.authService.logout('email');
        };
        HeaderComponent.prototype.changeLang = function (event) {
            this.langService.setLanguage(event);
        };
        return HeaderComponent;
    }());
    HeaderComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: HeaderComponent, deps: [{ token: i1__namespace$1.NbSidebarService }, { token: i1__namespace$1.NbMenuService }, { token: i1__namespace$1.NbThemeService }, { token: LayoutService }, { token: i1__namespace$1.NbMediaBreakpointsService }, { token: RestAdminConfigService }, { token: i1__namespace$5.NbAuthService }, { token: i1__namespace.Router }, { token: RestLangService }, { token: i1__namespace$2.HttpClient }], target: i0__namespace.ɵɵFactoryTarget.Component });
    HeaderComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: HeaderComponent, selector: "ngx-header", ngImport: i0__namespace, template: "<div class=\"header-container\">\n  <div class=\"logo-container\">\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"sidebar-toggle\">\n      <nb-icon icon=\"menu-2-outline\"></nb-icon>\n    </a>\n    <a class=\"logo\" href=\"#\" (click)=\"navigateHome()\"\n      ><span>{{ serviceRestAdmin.siteName }}</span></a\n    >\n  </div>\n  <nb-select\n    [selected]=\"currentTheme\"\n    (selectedChange)=\"changeTheme($event)\"\n    status=\"primary\"\n  >\n    <nb-option *ngFor=\"let theme of themes\" [value]=\"theme.value\">\n      {{ theme.name }}</nb-option\n    >\n  </nb-select>\n</div>\n\n<div class=\"header-container\">\n  <nb-select\n    [selected]=\"currentLang\"\n    (selectedChange)=\"changeLang($event)\"\n    status=\"primary\"\n  >\n    <nb-option *ngFor=\"let lang of appLanguage\" [value]=\"lang.value\">\n      {{ lang.value | uppercase }}</nb-option\n    >\n  </nb-select>\n\n  <nb-actions size=\"small\">\n    <!-- <nb-action class=\"control-item\">\n      <nb-search type=\"rotate-layout\"></nb-search>\n    </nb-action> -->\n\n    <nb-action class=\"user-action\" *nbIsGranted=\"['view', 'user']\">\n      <nb-user\n        [nbContextMenu]=\"userMenu\"\n        nbContextMenuTag=\"my-context-menu\"\n        [name]=\"user?.name\"\n        [picture]=\"user?.picture\"\n      >\n      </nb-user>\n    </nb-action>\n\n    <!-- <nb-action *ngIf=\"!isAuth\"\n      ><button nbButton (click)=\"signin()\" status=\"primary\">\n        Connexion\n      </button></nb-action\n    > -->\n  </nb-actions>\n</div>\n", styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host{display:flex;justify-content:space-between;width:100%}.nb-theme-default :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-default :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-default :host nb-user{cursor:pointer}.nb-theme-default :host ::ng-deep nb-search button{padding:0!important}.nb-theme-default :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-default :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-default :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-default :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-default :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-default :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-default :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-default :host .header-container .logo{border-right:1px solid #edf1f7}@media (max-width: 767.98px){.nb-theme-default :host .control-item{display:none}.nb-theme-default :host .user-action{border:none;padding:0}}@media (max-width: 575.98px){.nb-theme-default :host nb-select{display:none}}.nb-theme-dark :host{display:flex;justify-content:space-between;width:100%}.nb-theme-dark :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-dark :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-dark :host nb-user{cursor:pointer}.nb-theme-dark :host ::ng-deep nb-search button{padding:0!important}.nb-theme-dark :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-dark :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-dark :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-dark :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-dark :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-dark :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-dark :host .header-container .logo{border-left:1px solid #151a30}[dir=rtl] .nb-theme-dark :host .header-container .logo{border-right:1px solid #151a30}@media (max-width: 767.98px){.nb-theme-dark :host .control-item{display:none}.nb-theme-dark :host .user-action{border:none;padding:0}}@media (max-width: 575.98px){.nb-theme-dark :host nb-select{display:none}}.nb-theme-cosmic :host{display:flex;justify-content:space-between;width:100%}.nb-theme-cosmic :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-cosmic :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-cosmic :host nb-user{cursor:pointer}.nb-theme-cosmic :host ::ng-deep nb-search button{padding:0!important}.nb-theme-cosmic :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-cosmic :host .header-container .sidebar-toggle{text-decoration:none;color:#b4b4db}[dir=ltr] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-cosmic :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-cosmic :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-cosmic :host .header-container .logo{border-left:1px solid #1b1b38}[dir=rtl] .nb-theme-cosmic :host .header-container .logo{border-right:1px solid #1b1b38}@media (max-width: 767.98px){.nb-theme-cosmic :host .control-item{display:none}.nb-theme-cosmic :host .user-action{border:none;padding:0}}@media (max-width: 575.98px){.nb-theme-cosmic :host nb-select{display:none}}.nb-theme-corporate :host{display:flex;justify-content:space-between;width:100%}.nb-theme-corporate :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-corporate :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-corporate :host nb-user{cursor:pointer}.nb-theme-corporate :host ::ng-deep nb-search button{padding:0!important}.nb-theme-corporate :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-corporate :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-corporate :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-corporate :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-corporate :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-corporate :host .header-container .logo{border-right:1px solid #edf1f7}@media (max-width: 767.98px){.nb-theme-corporate :host .control-item{display:none}.nb-theme-corporate :host .user-action{border:none;padding:0}}@media (max-width: 575.98px){.nb-theme-corporate :host nb-select{display:none}}\n"], components: [{ type: i1__namespace$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i1__namespace$1.NbSelectComponent, selector: "nb-select", inputs: ["size", "status", "shape", "appearance", "placeholder", "optionsOverlayOffset", "scrollStrategy", "outline", "filled", "hero", "disabled", "fullWidth", "compareWith", "selected", "multiple", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }, { type: i1__namespace$1.NbOptionComponent, selector: "nb-option", inputs: ["disabled", "value"], outputs: ["selectionChange"] }, { type: i1__namespace$1.NbActionsComponent, selector: "nb-actions", inputs: ["size", "fullWidth"] }, { type: i1__namespace$1.NbActionComponent, selector: "nb-action", inputs: ["title", "badgeStatus", "disabled", "badgeDot", "link", "href", "icon", "badgeText", "badgePosition"] }, { type: i1__namespace$1.NbUserComponent, selector: "nb-user", inputs: ["name", "size", "shape", "badgeStatus", "picture", "showName", "showTitle", "showInitials", "onlyPicture", "title", "color", "badgeText", "badgePosition"] }], directives: [{ type: i8__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i9__namespace$1.NbIsGrantedDirective, selector: "[nbIsGranted]", inputs: ["nbIsGranted"] }, { type: i1__namespace$1.NbContextMenuDirective, selector: "[nbContextMenu]", inputs: ["nbContextMenuAdjustment", "nbContextMenuTrigger", "nbContextMenuPlacement", "nbContextMenuTag", "nbContextMenu", "nbContextMenuClass"] }], pipes: { "uppercase": i8__namespace.UpperCasePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: HeaderComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-header',
                        styleUrls: ['./header.component.scss'],
                        templateUrl: './header.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.NbSidebarService }, { type: i1__namespace$1.NbMenuService }, { type: i1__namespace$1.NbThemeService }, { type: LayoutService }, { type: i1__namespace$1.NbMediaBreakpointsService }, { type: RestAdminConfigService }, { type: i1__namespace$5.NbAuthService }, { type: i1__namespace.Router }, { type: RestLangService }, { type: i1__namespace$2.HttpClient }]; } });

    var FooterComponent = /** @class */ (function () {
        function FooterComponent() {
        }
        return FooterComponent;
    }());
    FooterComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FooterComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    FooterComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: FooterComponent, selector: "ngx-footer", ngImport: i0__namespace, template: "\n    <span class=\"created-by\"> <b>ngx-admin</b> 2022 </span>\n    <div class=\"socials\">\n      <a\n        href=\"https://github.com/Foris-master/ngx-admin\"\n        target=\"_blank\"\n        class=\"ion ion-social-github\"\n      ></a>\n    </div>\n  ", isInline: true, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-default :host .socials{font-size:2rem}.nb-theme-default :host .socials a{padding:.4rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-default :host .socials a:hover{color:#222b45}@media (max-width: 575.98px){.nb-theme-default :host .socials{font-size:1.5rem}}.nb-theme-dark :host{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-dark :host .socials{font-size:2rem}.nb-theme-dark :host .socials a{padding:.4rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-dark :host .socials a:hover{color:#fff}@media (max-width: 575.98px){.nb-theme-dark :host .socials{font-size:1.5rem}}.nb-theme-cosmic :host{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-cosmic :host .socials{font-size:2rem}.nb-theme-cosmic :host .socials a{padding:.4rem;color:#b4b4db;transition:color ease-out .1s}.nb-theme-cosmic :host .socials a:hover{color:#fff}@media (max-width: 575.98px){.nb-theme-cosmic :host .socials{font-size:1.5rem}}.nb-theme-corporate :host{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-corporate :host .socials{font-size:2rem}.nb-theme-corporate :host .socials a{padding:.4rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-corporate :host .socials a:hover{color:#222b45}@media (max-width: 575.98px){.nb-theme-corporate :host .socials{font-size:1.5rem}}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FooterComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: "ngx-footer",
                        styleUrls: ["./footer.component.scss"],
                        template: "\n    <span class=\"created-by\"> <b>ngx-admin</b> 2022 </span>\n    <div class=\"socials\">\n      <a\n        href=\"https://github.com/Foris-master/ngx-admin\"\n        target=\"_blank\"\n        class=\"ion ion-social-github\"\n      ></a>\n    </div>\n  ",
                    }]
            }] });

    var SearchInputComponent = /** @class */ (function () {
        function SearchInputComponent() {
            this.search = new i0.EventEmitter();
            this.isInputShown = false;
        }
        SearchInputComponent.prototype.showInput = function () {
            this.isInputShown = true;
            this.input.nativeElement.focus();
        };
        SearchInputComponent.prototype.hideInput = function () {
            this.isInputShown = false;
        };
        SearchInputComponent.prototype.onInput = function (val) {
            this.search.emit(val);
        };
        return SearchInputComponent;
    }());
    SearchInputComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: SearchInputComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SearchInputComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: SearchInputComponent, selector: "ngx-search-input", outputs: { search: "search" }, viewQueries: [{ propertyName: "input", first: true, predicate: ["input"], descendants: true, static: true }], ngImport: i0__namespace, template: "\n    <i class=\"control-icon ion ion-ios-search\"\n       (click)=\"showInput()\"></i>\n    <input placeholder=\"Type your search request here...\"\n           #input\n           [class.hidden]=\"!isInputShown\"\n           (blur)=\"hideInput()\"\n           (input)=\"onInput($event)\">\n  ", isInline: true, styles: [":host{display:flex;align-items:center}:host i.control-icon:before{font-size:2.3rem}:host i.control-icon:hover{cursor:pointer}:host input{border:none;outline:none;margin-left:1rem;width:15rem;transition:width .2s ease}:host input.hidden{width:0;margin:0}:host ::ng-deep search-input input{background:transparent}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: SearchInputComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-search-input',
                        styleUrls: ['./search-input.component.scss'],
                        template: "\n    <i class=\"control-icon ion ion-ios-search\"\n       (click)=\"showInput()\"></i>\n    <input placeholder=\"Type your search request here...\"\n           #input\n           [class.hidden]=\"!isInputShown\"\n           (blur)=\"hideInput()\"\n           (input)=\"onInput($event)\">\n  ",
                    }]
            }], propDecorators: { input: [{
                    type: i0.ViewChild,
                    args: ['input', { static: true }]
                }], search: [{
                    type: i0.Output
                }] } });

    var TinyMCEComponent = /** @class */ (function () {
        function TinyMCEComponent(host, locationStrategy) {
            this.host = host;
            this.locationStrategy = locationStrategy;
            this.editorKeyup = new i0.EventEmitter();
        }
        TinyMCEComponent.prototype.ngAfterViewInit = function () {
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
        };
        TinyMCEComponent.prototype.ngOnDestroy = function () {
            // tinymce.remove(this.editor);
        };
        return TinyMCEComponent;
    }());
    TinyMCEComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TinyMCEComponent, deps: [{ token: i0__namespace.ElementRef }, { token: i8__namespace.LocationStrategy }], target: i0__namespace.ɵɵFactoryTarget.Component });
    TinyMCEComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: TinyMCEComponent, selector: "ngx-tiny-mce", outputs: { editorKeyup: "editorKeyup" }, ngImport: i0__namespace, template: '', isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TinyMCEComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-tiny-mce',
                        template: '',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.ElementRef }, { type: i8__namespace.LocationStrategy }]; }, propDecorators: { editorKeyup: [{
                    type: i0.Output
                }] } });

    var CapitalizePipe = /** @class */ (function () {
        function CapitalizePipe() {
        }
        CapitalizePipe.prototype.transform = function (input) {
            return input && input.length
                ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
                : input;
        };
        return CapitalizePipe;
    }());
    CapitalizePipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: CapitalizePipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    CapitalizePipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: CapitalizePipe, name: "ngxCapitalize" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: CapitalizePipe, decorators: [{
                type: i0.Pipe,
                args: [{ name: 'ngxCapitalize' }]
            }] });

    var PluralPipe = /** @class */ (function () {
        function PluralPipe() {
        }
        PluralPipe.prototype.transform = function (input, label, pluralLabel) {
            if (pluralLabel === void 0) { pluralLabel = ''; }
            input = input || 0;
            return input === 1
                ? input + " " + label
                : pluralLabel
                    ? input + " " + pluralLabel
                    : input + " " + label + "s";
        };
        return PluralPipe;
    }());
    PluralPipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: PluralPipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    PluralPipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: PluralPipe, name: "ngxPlural" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: PluralPipe, decorators: [{
                type: i0.Pipe,
                args: [{ name: 'ngxPlural' }]
            }] });

    var RoundPipe = /** @class */ (function () {
        function RoundPipe() {
        }
        RoundPipe.prototype.transform = function (input) {
            return Math.round(input);
        };
        return RoundPipe;
    }());
    RoundPipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RoundPipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    RoundPipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RoundPipe, name: "ngxRound" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RoundPipe, decorators: [{
                type: i0.Pipe,
                args: [{ name: 'ngxRound' }]
            }] });

    var TimingPipe = /** @class */ (function () {
        function TimingPipe() {
        }
        TimingPipe.prototype.transform = function (time) {
            if (time) {
                var minutes = Math.floor(time / 60);
                var seconds = Math.floor(time % 60);
                return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
            }
            return '00:00';
        };
        TimingPipe.prototype.initZero = function (time) {
            return time < 10 ? '0' : '';
        };
        return TimingPipe;
    }());
    TimingPipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TimingPipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    TimingPipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TimingPipe, name: "timing" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TimingPipe, decorators: [{
                type: i0.Pipe,
                args: [{ name: 'timing' }]
            }] });

    var NumberWithCommasPipe = /** @class */ (function () {
        function NumberWithCommasPipe() {
        }
        NumberWithCommasPipe.prototype.transform = function (input) {
            return new Intl.NumberFormat().format(input);
        };
        return NumberWithCommasPipe;
    }());
    NumberWithCommasPipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: NumberWithCommasPipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    NumberWithCommasPipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: NumberWithCommasPipe, name: "ngxNumberWithCommas" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: NumberWithCommasPipe, decorators: [{
                type: i0.Pipe,
                args: [{ name: 'ngxNumberWithCommas' }]
            }] });

    var OneColumnLayoutComponent = /** @class */ (function () {
        function OneColumnLayoutComponent() {
        }
        return OneColumnLayoutComponent;
    }());
    OneColumnLayoutComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: OneColumnLayoutComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    OneColumnLayoutComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: OneColumnLayoutComponent, selector: "ngx-one-column-layout", ngImport: i0__namespace, template: "\n    <nb-layout windowMode>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ", isInline: true, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}\n"], components: [{ type: i1__namespace$1.NbLayoutComponent, selector: "nb-layout", inputs: ["center", "windowMode", "withScroll", "restoreScrollTop"] }, { type: i1__namespace$1.NbLayoutHeaderComponent, selector: "nb-layout-header", inputs: ["fixed", "subheader"] }, { type: HeaderComponent, selector: "ngx-header" }, { type: i1__namespace$1.NbSidebarComponent, selector: "nb-sidebar", inputs: ["compactedBreakpoints", "collapsedBreakpoints", "right", "left", "start", "end", "fixed", "containerFixed", "state", "responsive", "tag"], outputs: ["stateChange", "responsiveStateChange"] }, { type: i1__namespace$1.NbLayoutColumnComponent, selector: "nb-layout-column", inputs: ["left", "start"] }, { type: i1__namespace$1.NbLayoutFooterComponent, selector: "nb-layout-footer", inputs: ["fixed"] }, { type: FooterComponent, selector: "ngx-footer" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: OneColumnLayoutComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-one-column-layout',
                        styleUrls: ['./one-column.layout.scss'],
                        template: "\n    <nb-layout windowMode>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
                    }]
            }] });

    var TwoColumnsLayoutComponent = /** @class */ (function () {
        function TwoColumnsLayoutComponent() {
        }
        return TwoColumnsLayoutComponent;
    }());
    TwoColumnsLayoutComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TwoColumnsLayoutComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    TwoColumnsLayoutComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: TwoColumnsLayoutComponent, selector: "ngx-two-columns-layout", ngImport: i0__namespace, template: "\n    <nb-layout windowMode>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n\n    </nb-layout>\n  ", isInline: true, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}\n"], components: [{ type: i1__namespace$1.NbLayoutComponent, selector: "nb-layout", inputs: ["center", "windowMode", "withScroll", "restoreScrollTop"] }, { type: i1__namespace$1.NbLayoutHeaderComponent, selector: "nb-layout-header", inputs: ["fixed", "subheader"] }, { type: HeaderComponent, selector: "ngx-header" }, { type: i1__namespace$1.NbSidebarComponent, selector: "nb-sidebar", inputs: ["compactedBreakpoints", "collapsedBreakpoints", "right", "left", "start", "end", "fixed", "containerFixed", "state", "responsive", "tag"], outputs: ["stateChange", "responsiveStateChange"] }, { type: i1__namespace$1.NbLayoutColumnComponent, selector: "nb-layout-column", inputs: ["left", "start"] }, { type: i1__namespace$1.NbLayoutFooterComponent, selector: "nb-layout-footer", inputs: ["fixed"] }, { type: FooterComponent, selector: "ngx-footer" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TwoColumnsLayoutComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-two-columns-layout',
                        styleUrls: ['./two-columns.layout.scss'],
                        template: "\n    <nb-layout windowMode>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n\n    </nb-layout>\n  ",
                    }]
            }] });

    var ThreeColumnsLayoutComponent = /** @class */ (function () {
        function ThreeColumnsLayoutComponent() {
        }
        return ThreeColumnsLayoutComponent;
    }());
    ThreeColumnsLayoutComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ThreeColumnsLayoutComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ThreeColumnsLayoutComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: ThreeColumnsLayoutComponent, selector: "ngx-three-columns-layout", ngImport: i0__namespace, template: "\n    <nb-layout windowMode>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ", isInline: true, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}\n"], components: [{ type: i1__namespace$1.NbLayoutComponent, selector: "nb-layout", inputs: ["center", "windowMode", "withScroll", "restoreScrollTop"] }, { type: i1__namespace$1.NbLayoutHeaderComponent, selector: "nb-layout-header", inputs: ["fixed", "subheader"] }, { type: HeaderComponent, selector: "ngx-header" }, { type: i1__namespace$1.NbSidebarComponent, selector: "nb-sidebar", inputs: ["compactedBreakpoints", "collapsedBreakpoints", "right", "left", "start", "end", "fixed", "containerFixed", "state", "responsive", "tag"], outputs: ["stateChange", "responsiveStateChange"] }, { type: i1__namespace$1.NbLayoutColumnComponent, selector: "nb-layout-column", inputs: ["left", "start"] }, { type: i1__namespace$1.NbLayoutFooterComponent, selector: "nb-layout-footer", inputs: ["fixed"] }, { type: FooterComponent, selector: "ngx-footer" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ThreeColumnsLayoutComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-three-columns-layout',
                        styleUrls: ['./three-columns.layout.scss'],
                        template: "\n    <nb-layout windowMode>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
                    }]
            }] });

    var baseThemeVariables$3 = i1$1.DEFAULT_THEME.variables;
    var DEFAULT_THEME = {
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

    var baseThemeVariables$2 = i1$1.COSMIC_THEME.variables;
    var COSMIC_THEME = {
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

    var baseThemeVariables$1 = i1$1.CORPORATE_THEME.variables;
    var CORPORATE_THEME = {
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

    var baseThemeVariables = i1$1.DARK_THEME.variables;
    var DARK_THEME = {
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

    var NB_MODULES = [
        i1$1.NbLayoutModule,
        i1$1.NbMenuModule,
        i1$1.NbUserModule,
        i1$1.NbActionsModule,
        i1$1.NbSearchModule,
        i1$1.NbSidebarModule,
        i1$1.NbContextMenuModule,
        i9$1.NbSecurityModule,
        i1$1.NbButtonModule,
        i1$1.NbSelectModule,
        i1$1.NbIconModule,
        evaIcons.NbEvaIconsModule,
        i1$1.NbToggleModule,
    ];
    var COMPONENTS = [
        HeaderComponent,
        FooterComponent,
        SearchInputComponent,
        TinyMCEComponent,
        OneColumnLayoutComponent,
        ThreeColumnsLayoutComponent,
        TwoColumnsLayoutComponent,
    ];
    var PIPES = [
        CapitalizePipe,
        PluralPipe,
        RoundPipe,
        TimingPipe,
        NumberWithCommasPipe,
    ];
    var ThemeModule = /** @class */ (function () {
        function ThemeModule() {
        }
        ThemeModule.forRoot = function () {
            return {
                ngModule: ThemeModule,
                providers: __spreadArray(__spreadArray([], __read(i1$1.NbThemeModule.forRoot({
                    name: 'default',
                }, [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]).providers)), [
                    i1$1.NbSidebarService,
                ]),
            };
        };
        return ThemeModule;
    }());
    ThemeModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ThemeModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ThemeModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ThemeModule, declarations: [HeaderComponent,
            FooterComponent,
            SearchInputComponent,
            TinyMCEComponent,
            OneColumnLayoutComponent,
            ThreeColumnsLayoutComponent,
            TwoColumnsLayoutComponent, CapitalizePipe,
            PluralPipe,
            RoundPipe,
            TimingPipe,
            NumberWithCommasPipe], imports: [i8.CommonModule, i1$1.NbLayoutModule,
            i1$1.NbMenuModule,
            i1$1.NbUserModule,
            i1$1.NbActionsModule,
            i1$1.NbSearchModule,
            i1$1.NbSidebarModule,
            i1$1.NbContextMenuModule,
            i9$1.NbSecurityModule,
            i1$1.NbButtonModule,
            i1$1.NbSelectModule,
            i1$1.NbIconModule,
            evaIcons.NbEvaIconsModule,
            i1$1.NbToggleModule], exports: [i8.CommonModule, CapitalizePipe,
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
    ThemeModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ThemeModule, imports: [__spreadArray([i8.CommonModule], __read(NB_MODULES)), i8.CommonModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ThemeModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: __spreadArray([i8.CommonModule], __read(NB_MODULES)),
                        exports: __spreadArray(__spreadArray([i8.CommonModule], __read(PIPES)), __read(COMPONENTS)),
                        declarations: __spreadArray(__spreadArray([], __read(COMPONENTS)), __read(PIPES)),
                    }]
            }] });

    var RestMainComponentComponent = /** @class */ (function () {
        function RestMainComponentComponent(serviceConfig, activatedRoute, restLangService, router) {
            this.serviceConfig = serviceConfig;
            this.activatedRoute = activatedRoute;
            this.restLangService = restLangService;
            this.router = router;
            this.menu = __spreadArray([], __read(this.serviceConfig.generateMenus()));
        }
        RestMainComponentComponent.prototype.ngOnInit = function () {
            this.restLangService.setInitialAppLanguage();
            // this.permissionsService.loadPermissions([]);
        };
        return RestMainComponentComponent;
    }());
    RestMainComponentComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestMainComponentComponent, deps: [{ token: RestAdminConfigService }, { token: i1__namespace.ActivatedRoute }, { token: RestLangService }, { token: i1__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RestMainComponentComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestMainComponentComponent, selector: "ngx-rest-main-component", ngImport: i0__namespace, template: "\n    <ngx-one-column-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-one-column-layout>\n  ", isInline: true, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}.nb-theme-dark :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}.nb-theme-cosmic :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}.nb-theme-corporate :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}\n"], components: [{ type: OneColumnLayoutComponent, selector: "ngx-one-column-layout" }, { type: i1__namespace$1.NbMenuComponent, selector: "nb-menu", inputs: ["autoCollapse", "tag", "items"] }], directives: [{ type: i1__namespace.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestMainComponentComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: "ngx-rest-main-component",
                        styleUrls: ["./rest-main-component.component.scss"],
                        template: "\n    <ngx-one-column-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-one-column-layout>\n  ",
                    }]
            }], ctorParameters: function () { return [{ type: RestAdminConfigService }, { type: i1__namespace.ActivatedRoute }, { type: RestLangService }, { type: i1__namespace.Router }]; } });

    // import { LocalStorageService } from '../local-storage/local-storage.service';
    // import { AUTH_TOKEN } from '../auth/auth.models';
    var HttpAuthInterceptor = /** @class */ (function () {
        function HttpAuthInterceptor(authService, serviceToken) {
            this.authService = authService;
            this.serviceToken = serviceToken;
        }
        HttpAuthInterceptor.prototype.intercept = function (request, next) {
            var token = this.serviceToken.get();
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token,
                },
            });
            return next.handle(request);
        };
        return HttpAuthInterceptor;
    }());
    HttpAuthInterceptor.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: HttpAuthInterceptor, deps: [{ token: i1__namespace$5.NbAuthService }, { token: i1__namespace$5.NbTokenStorage }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HttpAuthInterceptor.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: HttpAuthInterceptor });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: HttpAuthInterceptor, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i1__namespace$5.NbAuthService }, { type: i1__namespace$5.NbTokenStorage }]; } });

    var PaginationInterceptor = /** @class */ (function () {
        function PaginationInterceptor() {
        }
        PaginationInterceptor.prototype.intercept = function (request, next) {
            return next.handle(request).pipe(operators.map(function (event) {
                if (event instanceof i1$2.HttpResponse) {
                    // console.log(event, "one");
                    if (event.body.total) {
                        // console.log(event, "two");
                        var newHeaders = new i1$2.HttpHeaders({
                            "X-Total-Count": String(event.body.total),
                        });
                        var newEvent = event.clone({ headers: newHeaders });
                        newEvent.headers.set("X-Total-Count", String(event.body.total));
                        // console.log(newEvent);
                        return newEvent;
                    }
                    return event;
                }
                return event;
            }));
        };
        return PaginationInterceptor;
    }());
    PaginationInterceptor.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: PaginationInterceptor, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PaginationInterceptor.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: PaginationInterceptor });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: PaginationInterceptor, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    /** Passes HttpErrorResponse to application-wide error handler */
    var HttpErrorInterceptor = /** @class */ (function () {
        function HttpErrorInterceptor(injector, router) {
            this.injector = injector;
            this.router = router;
        }
        HttpErrorInterceptor.prototype.intercept = function (request, next) {
            var _this = this;
            return next.handle(request).pipe(operators.tap({
                error: function (err) {
                    if (err instanceof i1$2.HttpErrorResponse) {
                        // const appErrorHandler = this.injector.get(ErrorHandler);
                        // appErrorHandler.handleError(err);
                        switch (err.status) {
                            case 401:
                                _this.router.navigateByUrl('/login');
                                break;
                            default:
                                break;
                        }
                    }
                },
            }));
        };
        return HttpErrorInterceptor;
    }());
    HttpErrorInterceptor.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: HttpErrorInterceptor, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HttpErrorInterceptor.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: HttpErrorInterceptor });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: HttpErrorInterceptor, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }]; } });

    function throwIfAlreadyLoaded(parentModule, moduleName) {
        if (parentModule) {
            throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
        }
    }

    var UserData = /** @class */ (function () {
        function UserData() {
        }
        return UserData;
    }());

    var ElectricityData = /** @class */ (function () {
        function ElectricityData() {
        }
        return ElectricityData;
    }());

    var SmartTableData = /** @class */ (function () {
        function SmartTableData() {
        }
        return SmartTableData;
    }());

    var UserActivityData = /** @class */ (function () {
        function UserActivityData() {
        }
        return UserActivityData;
    }());

    var OrdersChartData = /** @class */ (function () {
        function OrdersChartData() {
        }
        return OrdersChartData;
    }());

    var ProfitChartData = /** @class */ (function () {
        function ProfitChartData() {
        }
        return ProfitChartData;
    }());

    var TrafficListData = /** @class */ (function () {
        function TrafficListData() {
        }
        return TrafficListData;
    }());

    var EarningData = /** @class */ (function () {
        function EarningData() {
        }
        return EarningData;
    }());

    var OrdersProfitChartData = /** @class */ (function () {
        function OrdersProfitChartData() {
        }
        return OrdersProfitChartData;
    }());

    var TrafficBarData = /** @class */ (function () {
        function TrafficBarData() {
        }
        return TrafficBarData;
    }());

    var ProfitBarAnimationChartData = /** @class */ (function () {
        function ProfitBarAnimationChartData() {
        }
        return ProfitBarAnimationChartData;
    }());

    var TemperatureHumidityData = /** @class */ (function () {
        function TemperatureHumidityData() {
        }
        return TemperatureHumidityData;
    }());

    var SolarData = /** @class */ (function () {
        function SolarData() {
        }
        return SolarData;
    }());

    var TrafficChartData = /** @class */ (function () {
        function TrafficChartData() {
        }
        return TrafficChartData;
    }());

    var StatsBarData = /** @class */ (function () {
        function StatsBarData() {
        }
        return StatsBarData;
    }());

    var CountryOrderData = /** @class */ (function () {
        function CountryOrderData() {
        }
        return CountryOrderData;
    }());

    var StatsProgressBarData = /** @class */ (function () {
        function StatsProgressBarData() {
        }
        return StatsProgressBarData;
    }());

    var VisitorsAnalyticsData = /** @class */ (function () {
        function VisitorsAnalyticsData() {
        }
        return VisitorsAnalyticsData;
    }());

    var SecurityCamerasData = /** @class */ (function () {
        function SecurityCamerasData() {
        }
        return SecurityCamerasData;
    }());

    var UserService = /** @class */ (function (_super) {
        __extends(UserService, _super);
        function UserService() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.time = new Date;
            _this.users = {
                nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
                eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
                jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
                lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
                alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
                kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
            };
            _this.types = {
                mobile: 'mobile',
                home: 'home',
                work: 'work',
            };
            _this.contacts = [
                { user: _this.users.nick, type: _this.types.mobile },
                { user: _this.users.eva, type: _this.types.home },
                { user: _this.users.jack, type: _this.types.mobile },
                { user: _this.users.lee, type: _this.types.mobile },
                { user: _this.users.alan, type: _this.types.home },
                { user: _this.users.kate, type: _this.types.work },
            ];
            _this.recentUsers = [
                { user: _this.users.alan, type: _this.types.home, time: _this.time.setHours(21, 12) },
                { user: _this.users.eva, type: _this.types.home, time: _this.time.setHours(17, 45) },
                { user: _this.users.nick, type: _this.types.mobile, time: _this.time.setHours(5, 29) },
                { user: _this.users.lee, type: _this.types.mobile, time: _this.time.setHours(11, 24) },
                { user: _this.users.jack, type: _this.types.mobile, time: _this.time.setHours(10, 45) },
                { user: _this.users.kate, type: _this.types.work, time: _this.time.setHours(9, 42) },
                { user: _this.users.kate, type: _this.types.work, time: _this.time.setHours(9, 31) },
                { user: _this.users.jack, type: _this.types.mobile, time: _this.time.setHours(8, 0) },
            ];
            return _this;
        }
        UserService.prototype.getUsers = function () {
            return rxjs.of(this.users);
        };
        UserService.prototype.getContacts = function () {
            return rxjs.of(this.contacts);
        };
        UserService.prototype.getRecentUsers = function () {
            return rxjs.of(this.recentUsers);
        };
        return UserService;
    }(UserData));
    UserService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: UserService, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    UserService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: UserService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: UserService, decorators: [{
                type: i0.Injectable
            }] });

    var ElectricityService = /** @class */ (function (_super) {
        __extends(ElectricityService, _super);
        function ElectricityService() {
            var _this = _super.call(this) || this;
            _this.listData = [
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
            _this.chartPoints = [
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
            _this.chartData = _this.chartPoints.map(function (p, index) { return ({
                label: (index % 5 === 3) ? "" + Math.round(index / 5) : '',
                value: p,
            }); });
            return _this;
        }
        ElectricityService.prototype.getListData = function () {
            return rxjs.of(this.listData);
        };
        ElectricityService.prototype.getChartData = function () {
            return rxjs.of(this.chartData);
        };
        return ElectricityService;
    }(ElectricityData));
    ElectricityService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ElectricityService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ElectricityService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ElectricityService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ElectricityService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var SmartTableService = /** @class */ (function (_super) {
        __extends(SmartTableService, _super);
        function SmartTableService() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.data = [{
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
            return _this;
        }
        SmartTableService.prototype.getData = function () {
            return this.data;
        };
        return SmartTableService;
    }(SmartTableData));
    SmartTableService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: SmartTableService, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SmartTableService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: SmartTableService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: SmartTableService, decorators: [{
                type: i0.Injectable
            }] });

    var PeriodsService = /** @class */ (function () {
        function PeriodsService() {
        }
        PeriodsService.prototype.getYears = function () {
            return [
                '2010', '2011', '2012',
                '2013', '2014', '2015',
                '2016', '2017', '2018',
            ];
        };
        PeriodsService.prototype.getMonths = function () {
            return [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec',
            ];
        };
        PeriodsService.prototype.getWeeks = function () {
            return [
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat',
                'Sun',
            ];
        };
        return PeriodsService;
    }());
    PeriodsService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: PeriodsService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PeriodsService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: PeriodsService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: PeriodsService, decorators: [{
                type: i0.Injectable
            }] });

    var UserActivityService = /** @class */ (function (_super) {
        __extends(UserActivityService, _super);
        function UserActivityService(periods) {
            var _this = _super.call(this) || this;
            _this.periods = periods;
            _this.getRandom = function (roundTo) { return Math.round(Math.random() * roundTo); };
            _this.data = {};
            _this.data = {
                week: _this.getDataWeek(),
                month: _this.getDataMonth(),
                year: _this.getDataYear(),
            };
            return _this;
        }
        UserActivityService.prototype.generateUserActivityRandomData = function (date) {
            return {
                date: date,
                pagesVisitCount: this.getRandom(1000),
                deltaUp: this.getRandom(1) % 2 === 0,
                newVisits: this.getRandom(100),
            };
        };
        UserActivityService.prototype.getDataWeek = function () {
            var _this = this;
            return this.periods.getWeeks().map(function (week) {
                return _this.generateUserActivityRandomData(week);
            });
        };
        UserActivityService.prototype.getDataMonth = function () {
            var _this = this;
            var currentDate = new Date();
            var days = currentDate.getDate();
            var month = this.periods.getMonths()[currentDate.getMonth()];
            return Array.from(Array(days)).map(function (_, index) {
                var date = index + 1 + " " + month;
                return _this.generateUserActivityRandomData(date);
            });
        };
        UserActivityService.prototype.getDataYear = function () {
            var _this = this;
            return this.periods.getYears().map(function (year) {
                return _this.generateUserActivityRandomData(year);
            });
        };
        UserActivityService.prototype.getUserActivityData = function (period) {
            return rxjs.of(this.data[period] || []);
        };
        return UserActivityService;
    }(UserActivityData));
    UserActivityService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: UserActivityService, deps: [{ token: PeriodsService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    UserActivityService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: UserActivityService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: UserActivityService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: PeriodsService }]; } });

    var OrdersChartService = /** @class */ (function (_super) {
        __extends(OrdersChartService, _super);
        function OrdersChartService(period) {
            var _this = _super.call(this) || this;
            _this.period = period;
            _this.year = [
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
            ];
            _this.data = {};
            _this.data = {
                week: _this.getDataForWeekPeriod(),
                month: _this.getDataForMonthPeriod(),
                year: _this.getDataForYearPeriod(),
            };
            return _this;
        }
        OrdersChartService.prototype.getDataForWeekPeriod = function () {
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
        };
        OrdersChartService.prototype.getDataForMonthPeriod = function () {
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
        };
        OrdersChartService.prototype.getDataForYearPeriod = function () {
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
        };
        OrdersChartService.prototype.getDataLabels = function (nPoints, labelsArray) {
            var labelsArrayLength = labelsArray.length;
            var step = Math.round(nPoints / labelsArrayLength);
            return Array.from(Array(nPoints)).map(function (item, index) {
                var dataIndex = Math.round(index / step);
                return index % step === 0 ? labelsArray[dataIndex] : '';
            });
        };
        OrdersChartService.prototype.getOrdersChartData = function (period) {
            return this.data[period];
        };
        return OrdersChartService;
    }(OrdersChartData));
    OrdersChartService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: OrdersChartService, deps: [{ token: PeriodsService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    OrdersChartService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: OrdersChartService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: OrdersChartService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: PeriodsService }]; } });

    var ProfitChartService = /** @class */ (function (_super) {
        __extends(ProfitChartService, _super);
        function ProfitChartService(period) {
            var _this = _super.call(this) || this;
            _this.period = period;
            _this.year = [
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
            ];
            _this.data = {};
            _this.data = {
                week: _this.getDataForWeekPeriod(),
                month: _this.getDataForMonthPeriod(),
                year: _this.getDataForYearPeriod(),
            };
            return _this;
        }
        ProfitChartService.prototype.getDataForWeekPeriod = function () {
            var nPoint = this.period.getWeeks().length;
            return {
                chartLabel: this.period.getWeeks(),
                data: [
                    this.getRandomData(nPoint),
                    this.getRandomData(nPoint),
                    this.getRandomData(nPoint),
                ],
            };
        };
        ProfitChartService.prototype.getDataForMonthPeriod = function () {
            var nPoint = this.period.getMonths().length;
            return {
                chartLabel: this.period.getMonths(),
                data: [
                    this.getRandomData(nPoint),
                    this.getRandomData(nPoint),
                    this.getRandomData(nPoint),
                ],
            };
        };
        ProfitChartService.prototype.getDataForYearPeriod = function () {
            var nPoint = this.year.length;
            return {
                chartLabel: this.year,
                data: [
                    this.getRandomData(nPoint),
                    this.getRandomData(nPoint),
                    this.getRandomData(nPoint),
                ],
            };
        };
        ProfitChartService.prototype.getRandomData = function (nPoints) {
            return Array.from(Array(nPoints)).map(function () {
                return Math.round(Math.random() * 500);
            });
        };
        ProfitChartService.prototype.getProfitChartData = function (period) {
            return this.data[period];
        };
        return ProfitChartService;
    }(ProfitChartData));
    ProfitChartService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ProfitChartService, deps: [{ token: PeriodsService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ProfitChartService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ProfitChartService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ProfitChartService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: PeriodsService }]; } });

    var TrafficListService = /** @class */ (function (_super) {
        __extends(TrafficListService, _super);
        function TrafficListService(period) {
            var _this = _super.call(this) || this;
            _this.period = period;
            _this.getRandom = function (roundTo) { return Math.round(Math.random() * roundTo); };
            _this.data = {};
            _this.data = {
                week: _this.getDataWeek(),
                month: _this.getDataMonth(),
                year: _this.getDataYear(),
            };
            return _this;
        }
        TrafficListService.prototype.getDataWeek = function () {
            var _this = this;
            var getFirstDateInPeriod = function () {
                var weeks = _this.period.getWeeks();
                return weeks[weeks.length - 1];
            };
            return this.reduceData(this.period.getWeeks(), getFirstDateInPeriod);
        };
        TrafficListService.prototype.getDataMonth = function () {
            var _this = this;
            var getFirstDateInPeriod = function () {
                var months = _this.period.getMonths();
                return months[months.length - 1];
            };
            return this.reduceData(this.period.getMonths(), getFirstDateInPeriod);
        };
        TrafficListService.prototype.getDataYear = function () {
            var _this = this;
            var getFirstDateInPeriod = function () {
                var years = _this.period.getYears();
                return "" + (parseInt(years[0], 10) - 1);
            };
            return this.reduceData(this.period.getYears(), getFirstDateInPeriod);
        };
        TrafficListService.prototype.reduceData = function (timePeriods, getFirstDateInPeriod) {
            var _this = this;
            return timePeriods.reduce(function (result, timePeriod, index) {
                var hasResult = result[index - 1];
                var prevDate = hasResult
                    ? result[index - 1].comparison.nextDate
                    : getFirstDateInPeriod();
                var prevValue = hasResult
                    ? result[index - 1].comparison.nextValue
                    : _this.getRandom(100);
                var nextValue = _this.getRandom(100);
                var deltaValue = prevValue - nextValue;
                var item = {
                    date: timePeriod,
                    value: _this.getRandom(1000),
                    delta: {
                        up: deltaValue <= 0,
                        value: Math.abs(deltaValue),
                    },
                    comparison: {
                        prevDate: prevDate,
                        prevValue: prevValue,
                        nextDate: timePeriod,
                        nextValue: nextValue,
                    },
                };
                return __spreadArray(__spreadArray([], __read(result)), [item]);
            }, []);
        };
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
        TrafficListService.prototype.getTrafficListData = function (period) {
            return rxjs.of(this.data[period]);
        };
        return TrafficListService;
    }(TrafficListData));
    TrafficListService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TrafficListService, deps: [{ token: PeriodsService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    TrafficListService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TrafficListService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TrafficListService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: PeriodsService }]; } });

    var EarningService = /** @class */ (function (_super) {
        __extends(EarningService, _super);
        function EarningService() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.currentDate = new Date();
            _this.currentValue = Math.random() * 1000;
            _this.ONE_DAY = 24 * 3600 * 1000;
            _this.pieChartData = [
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
            _this.liveUpdateChartData = {
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
            return _this;
        }
        EarningService.prototype.getDefaultLiveChartData = function (elementsNumber) {
            var _this = this;
            this.currentDate = new Date();
            this.currentValue = Math.random() * 1000;
            return Array.from(Array(elementsNumber))
                .map(function (item) { return _this.generateRandomLiveChartData(); });
        };
        EarningService.prototype.generateRandomLiveChartData = function () {
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
        };
        EarningService.prototype.getEarningLiveUpdateCardData = function (currency) {
            var data = this.liveUpdateChartData[currency.toLowerCase()];
            var newValue = this.generateRandomLiveChartData();
            data.liveChart.shift();
            data.liveChart.push(newValue);
            return rxjs.of(data.liveChart);
        };
        EarningService.prototype.getEarningCardData = function (currency) {
            var data = this.liveUpdateChartData[currency.toLowerCase()];
            data.liveChart = this.getDefaultLiveChartData(150);
            return rxjs.of(data);
        };
        EarningService.prototype.getEarningPieChartData = function () {
            return rxjs.of(this.pieChartData);
        };
        return EarningService;
    }(EarningData));
    EarningService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: EarningService, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    EarningService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: EarningService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: EarningService, decorators: [{
                type: i0.Injectable
            }] });

    var OrdersProfitChartService = /** @class */ (function (_super) {
        __extends(OrdersProfitChartService, _super);
        function OrdersProfitChartService(ordersChartService, profitChartService) {
            var _this = _super.call(this) || this;
            _this.ordersChartService = ordersChartService;
            _this.profitChartService = profitChartService;
            _this.summary = [
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
            return _this;
        }
        OrdersProfitChartService.prototype.getOrderProfitChartSummary = function () {
            return rxjs.of(this.summary);
        };
        OrdersProfitChartService.prototype.getOrdersChartData = function (period) {
            return rxjs.of(this.ordersChartService.getOrdersChartData(period));
        };
        OrdersProfitChartService.prototype.getProfitChartData = function (period) {
            return rxjs.of(this.profitChartService.getProfitChartData(period));
        };
        return OrdersProfitChartService;
    }(OrdersProfitChartData));
    OrdersProfitChartService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: OrdersProfitChartService, deps: [{ token: OrdersChartData }, { token: ProfitChartData }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    OrdersProfitChartService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: OrdersProfitChartService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: OrdersProfitChartService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: OrdersChartData }, { type: ProfitChartData }]; } });

    var TrafficBarService = /** @class */ (function (_super) {
        __extends(TrafficBarService, _super);
        function TrafficBarService(period) {
            var _this = _super.call(this) || this;
            _this.period = period;
            _this.data = {};
            _this.data = {
                week: _this.getDataForWeekPeriod(),
                month: _this.getDataForMonthPeriod(),
                year: _this.getDataForYearPeriod(),
            };
            return _this;
        }
        TrafficBarService.prototype.getDataForWeekPeriod = function () {
            return {
                data: [10, 15, 19, 7, 20, 13, 15],
                labels: this.period.getWeeks(),
                formatter: '{c0} MB',
            };
        };
        TrafficBarService.prototype.getDataForMonthPeriod = function () {
            return {
                data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
                labels: this.period.getMonths(),
                formatter: '{c0} GB',
            };
        };
        TrafficBarService.prototype.getDataForYearPeriod = function () {
            return {
                data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
                labels: this.period.getYears(),
                formatter: '{c0} GB',
            };
        };
        TrafficBarService.prototype.getTrafficBarData = function (period) {
            return rxjs.of(this.data[period]);
        };
        return TrafficBarService;
    }(TrafficBarData));
    TrafficBarService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TrafficBarService, deps: [{ token: PeriodsService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    TrafficBarService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TrafficBarService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TrafficBarService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: PeriodsService }]; } });

    var ProfitBarAnimationChartService = /** @class */ (function (_super) {
        __extends(ProfitBarAnimationChartService, _super);
        function ProfitBarAnimationChartService() {
            var _this = _super.call(this) || this;
            _this.data = {
                firstLine: _this.getDataForFirstLine(),
                secondLine: _this.getDataForSecondLine(),
            };
            return _this;
        }
        ProfitBarAnimationChartService.prototype.getDataForFirstLine = function () {
            return this.createEmptyArray(100)
                .map(function (_, index) {
                var oneFifth = index / 5;
                return (Math.sin(oneFifth) * (oneFifth - 10) + index / 6) * 5;
            });
        };
        ProfitBarAnimationChartService.prototype.getDataForSecondLine = function () {
            return this.createEmptyArray(100)
                .map(function (_, index) {
                var oneFifth = index / 5;
                return (Math.cos(oneFifth) * (oneFifth - 10) + index / 6) * 5;
            });
        };
        ProfitBarAnimationChartService.prototype.createEmptyArray = function (nPoints) {
            return Array.from(Array(nPoints));
        };
        ProfitBarAnimationChartService.prototype.getChartData = function () {
            return rxjs.of(this.data);
        };
        return ProfitBarAnimationChartService;
    }(ProfitBarAnimationChartData));
    ProfitBarAnimationChartService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ProfitBarAnimationChartService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ProfitBarAnimationChartService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ProfitBarAnimationChartService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ProfitBarAnimationChartService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var TemperatureHumidityService = /** @class */ (function (_super) {
        __extends(TemperatureHumidityService, _super);
        function TemperatureHumidityService() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.temperatureDate = {
                value: 24,
                min: 12,
                max: 30,
            };
            _this.humidityDate = {
                value: 87,
                min: 0,
                max: 100,
            };
            return _this;
        }
        TemperatureHumidityService.prototype.getTemperatureData = function () {
            return rxjs.of(this.temperatureDate);
        };
        TemperatureHumidityService.prototype.getHumidityData = function () {
            return rxjs.of(this.humidityDate);
        };
        return TemperatureHumidityService;
    }(TemperatureHumidityData));
    TemperatureHumidityService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TemperatureHumidityService, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    TemperatureHumidityService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TemperatureHumidityService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TemperatureHumidityService, decorators: [{
                type: i0.Injectable
            }] });

    var SolarService = /** @class */ (function (_super) {
        __extends(SolarService, _super);
        function SolarService() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.value = 42;
            return _this;
        }
        SolarService.prototype.getSolarData = function () {
            return rxjs.of(this.value);
        };
        return SolarService;
    }(SolarData));
    SolarService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: SolarService, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SolarService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: SolarService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: SolarService, decorators: [{
                type: i0.Injectable
            }] });

    var TrafficChartService = /** @class */ (function (_super) {
        __extends(TrafficChartService, _super);
        function TrafficChartService() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.data = [
                300, 520, 435, 530,
                730, 620, 660, 860,
            ];
            return _this;
        }
        TrafficChartService.prototype.getTrafficChartData = function () {
            return rxjs.of(this.data);
        };
        return TrafficChartService;
    }(TrafficChartData));
    TrafficChartService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TrafficChartService, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    TrafficChartService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TrafficChartService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TrafficChartService, decorators: [{
                type: i0.Injectable
            }] });

    var StatsBarService = /** @class */ (function (_super) {
        __extends(StatsBarService, _super);
        function StatsBarService() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.statsBarData = [
                300, 520, 435, 530,
                730, 620, 660, 860,
            ];
            return _this;
        }
        StatsBarService.prototype.getStatsBarData = function () {
            return rxjs.of(this.statsBarData);
        };
        return StatsBarService;
    }(StatsBarData));
    StatsBarService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StatsBarService, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    StatsBarService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StatsBarService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StatsBarService, decorators: [{
                type: i0.Injectable
            }] });

    var CountryOrderService = /** @class */ (function (_super) {
        __extends(CountryOrderService, _super);
        function CountryOrderService() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.countriesCategories = [
                'Sofas',
                'Furniture',
                'Lighting',
                'Tables',
                'Textiles',
            ];
            _this.countriesCategoriesLength = _this.countriesCategories.length;
            return _this;
        }
        CountryOrderService.prototype.generateRandomData = function (nPoints) {
            return Array.from(Array(nPoints)).map(function () {
                return Math.round(Math.random() * 20);
            });
        };
        CountryOrderService.prototype.getCountriesCategories = function () {
            return rxjs.of(this.countriesCategories);
        };
        CountryOrderService.prototype.getCountriesCategoriesData = function (country) {
            return rxjs.of(this.generateRandomData(this.countriesCategoriesLength));
        };
        return CountryOrderService;
    }(CountryOrderData));
    CountryOrderService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: CountryOrderService, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CountryOrderService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: CountryOrderService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: CountryOrderService, decorators: [{
                type: i0.Injectable
            }] });

    var StatsProgressBarService = /** @class */ (function (_super) {
        __extends(StatsProgressBarService, _super);
        function StatsProgressBarService() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.progressInfoData = [
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
            return _this;
        }
        StatsProgressBarService.prototype.getProgressInfoData = function () {
            return rxjs.of(this.progressInfoData);
        };
        return StatsProgressBarService;
    }(StatsProgressBarData));
    StatsProgressBarService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StatsProgressBarService, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    StatsProgressBarService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StatsProgressBarService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StatsProgressBarService, decorators: [{
                type: i0.Injectable
            }] });

    var VisitorsAnalyticsService = /** @class */ (function (_super) {
        __extends(VisitorsAnalyticsService, _super);
        function VisitorsAnalyticsService(periodService) {
            var _this = _super.call(this) || this;
            _this.periodService = periodService;
            _this.pieChartValue = 75;
            _this.innerLinePoints = [
                94, 188, 225, 244, 253, 254, 249, 235, 208,
                173, 141, 118, 105, 97, 94, 96, 104, 121, 147,
                183, 224, 265, 302, 333, 358, 375, 388, 395,
                400, 400, 397, 390, 377, 360, 338, 310, 278,
                241, 204, 166, 130, 98, 71, 49, 32, 20, 13, 9,
            ];
            _this.outerLinePoints = [
                85, 71, 59, 50, 45, 42, 41, 44, 58, 88,
                136, 199, 267, 326, 367, 391, 400, 397,
                376, 319, 200, 104, 60, 41, 36, 37, 44,
                55, 74, 100, 131, 159, 180, 193, 199, 200,
                195, 184, 164, 135, 103, 73, 50, 33, 22, 15, 11,
            ];
            return _this;
        }
        VisitorsAnalyticsService.prototype.generateOutlineLineData = function () {
            var months = this.periodService.getMonths();
            var outerLinePointsLength = this.outerLinePoints.length;
            var monthsLength = months.length;
            return this.outerLinePoints.map(function (p, index) {
                var monthIndex = Math.round(index / 4);
                var label = (index % Math.round(outerLinePointsLength / monthsLength) === 0)
                    ? months[monthIndex]
                    : '';
                return {
                    label: label,
                    value: p,
                };
            });
        };
        VisitorsAnalyticsService.prototype.getInnerLineChartData = function () {
            return rxjs.of(this.innerLinePoints);
        };
        VisitorsAnalyticsService.prototype.getOutlineLineChartData = function () {
            return rxjs.of(this.generateOutlineLineData());
        };
        VisitorsAnalyticsService.prototype.getPieChartData = function () {
            return rxjs.of(this.pieChartValue);
        };
        return VisitorsAnalyticsService;
    }(VisitorsAnalyticsData));
    VisitorsAnalyticsService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: VisitorsAnalyticsService, deps: [{ token: PeriodsService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    VisitorsAnalyticsService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: VisitorsAnalyticsService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: VisitorsAnalyticsService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: PeriodsService }]; } });

    var SecurityCamerasService = /** @class */ (function (_super) {
        __extends(SecurityCamerasService, _super);
        function SecurityCamerasService() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.cameras = [
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
            return _this;
        }
        SecurityCamerasService.prototype.getCamerasData = function () {
            return rxjs.of(this.cameras);
        };
        return SecurityCamerasService;
    }(SecurityCamerasData));
    SecurityCamerasService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: SecurityCamerasService, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SecurityCamerasService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: SecurityCamerasService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: SecurityCamerasService, decorators: [{
                type: i0.Injectable
            }] });

    var SERVICES = [
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
    var MockDataModule = /** @class */ (function () {
        function MockDataModule() {
        }
        MockDataModule.forRoot = function () {
            return {
                ngModule: MockDataModule,
                providers: __spreadArray([], __read(SERVICES)),
            };
        };
        return MockDataModule;
    }());
    MockDataModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: MockDataModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MockDataModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: MockDataModule, imports: [i8.CommonModule] });
    MockDataModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: MockDataModule, providers: __spreadArray([], __read(SERVICES)), imports: [[
                i8.CommonModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: MockDataModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i8.CommonModule,
                        ],
                        providers: __spreadArray([], __read(SERVICES)),
                    }]
            }] });

    var socialLinks = [
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
    var DATA_SERVICES = [
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
    var NbSimpleRoleProvider = /** @class */ (function (_super) {
        __extends(NbSimpleRoleProvider, _super);
        function NbSimpleRoleProvider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NbSimpleRoleProvider.prototype.getRole = function () {
            // here you could provide any role based on any auth flow
            return rxjs.of('guest');
        };
        return NbSimpleRoleProvider;
    }(i9$1.NbRoleProvider));
    var NB_CORE_PROVIDERS = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], __read(MockDataModule.forRoot().providers)), __read(DATA_SERVICES)), __read(i1$5.NbAuthModule.forRoot({
        strategies: [
            i1$5.NbDummyAuthStrategy.setup({
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
    }).providers)), [
        i9$1.NbSecurityModule.forRoot({
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
            provide: i9$1.NbRoleProvider,
            useClass: NbSimpleRoleProvider,
        },
        AnalyticsService,
        LayoutService,
        PlayerService,
        SeoService,
        StateService,
    ]);
    var CoreModule = /** @class */ (function () {
        function CoreModule(parentModule) {
            throwIfAlreadyLoaded(parentModule, 'CoreModule');
        }
        CoreModule.forRoot = function () {
            return {
                ngModule: CoreModule,
                providers: __spreadArray([], __read(NB_CORE_PROVIDERS)),
            };
        };
        return CoreModule;
    }());
    CoreModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: CoreModule, deps: [{ token: CoreModule, optional: true, skipSelf: true }], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CoreModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: CoreModule, imports: [i8.CommonModule], exports: [i1$5.NbAuthModule] });
    CoreModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: CoreModule, imports: [[i8.CommonModule], i1$5.NbAuthModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: CoreModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i8.CommonModule],
                        exports: [i1$5.NbAuthModule],
                        declarations: [],
                    }]
            }], ctorParameters: function () {
            return [{ type: CoreModule, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.SkipSelf
                        }] }];
        } });

    var LoginComponent = /** @class */ (function (_super) {
        __extends(LoginComponent, _super);
        function LoginComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return LoginComponent;
    }(i1$5.NbLoginComponent));
    LoginComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: LoginComponent, deps: null, target: i0__namespace.ɵɵFactoryTarget.Component });
    LoginComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: LoginComponent, selector: "ngx-login", usesInheritance: true, ngImport: i0__namespace, template: "<h1 id=\"title\" class=\"title\">{{ \"login.main\" | translate }}</h1>\n<p class=\"sub-title\">{{ \"login.labelMessage\" | translate }}.</p>\n\n<nb-alert\n  *ngIf=\"showMessages.error && errors?.length && !submitted\"\n  outline=\"danger\"\n  role=\"alert\"\n>\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert\n  *ngIf=\"showMessages.success && messages?.length && !submitted\"\n  outline=\"success\"\n  role=\"alert\"\n>\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">\n      {{ message }}\n    </li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"login()\" #form=\"ngForm\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\"\n      >{{ \"login.email\" | translate }}:</label\n    >\n    <input\n      nbInput\n      fullWidth\n      [(ngModel)]=\"user.login\"\n      #email=\"ngModel\"\n      name=\"login\"\n      id=\"input-email\"\n      pattern=\".+@.+\\..+\"\n      placeholder=\"Email address\"\n      fieldSize=\"large\"\n      autofocus\n      [status]=\"email.dirty ? (email.invalid ? 'danger' : 'success') : 'basic'\"\n      [required]=\"getConfigValue('forms.validation.email.required')\"\n      [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\"\n    />\n    <ng-container *ngIf=\"email.invalid && email.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.required\">\n        Email is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.pattern\">\n        Email should be the real one!\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <span class=\"label-with-link\">\n      <label class=\"label\" for=\"input-password\"\n        >{{ \"login.password\" | translate }}:</label\n      >\n      <a class=\"forgot-password caption-2\" routerLink=\"../request-password\"\n        >{{ \"login.forgetPassword\" | translate }}?</a\n      >\n    </span>\n    <input\n      nbInput\n      fullWidth\n      [(ngModel)]=\"user.password\"\n      #password=\"ngModel\"\n      name=\"password\"\n      type=\"password\"\n      id=\"input-password\"\n      placeholder=\"Password\"\n      fieldSize=\"large\"\n      [status]=\"\n        password.dirty ? (password.invalid ? 'danger' : 'success') : 'basic'\n      \"\n      [required]=\"getConfigValue('forms.validation.password.required')\"\n      [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n      [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n      [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\"\n    />\n    <ng-container *ngIf=\"password.invalid && password.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.required\">\n        Password is required!\n      </p>\n      <p\n        class=\"caption status-danger\"\n        *ngIf=\"password.errors?.minlength || password.errors?.maxlength\"\n      >\n        Password should contain from\n        {{ getConfigValue(\"forms.validation.password.minLength\") }} to\n        {{ getConfigValue(\"forms.validation.password.maxLength\") }}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group accept-group\">\n    <nb-checkbox\n      name=\"rememberMe\"\n      [(ngModel)]=\"user.rememberMe\"\n      *ngIf=\"rememberMe\"\n      >{{ \"login.rememberMe\" | translate }}</nb-checkbox\n    >\n  </div>\n\n  <button\n    nbButton\n    fullWidth\n    status=\"primary\"\n    size=\"large\"\n    [disabled]=\"submitted || !form.valid\"\n    [class.btn-pulse]=\"submitted\"\n  >\n    {{ \"login.logIn\" | translate }}\n  </button>\n</form>\n\n<!-- <section\n  *ngIf=\"socialLinks && socialLinks.length > 0\"\n  class=\"links\"\n  aria-label=\"Social sign in\"\n>\n  or enter with:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a\n        *ngIf=\"socialLink.link\"\n        [routerLink]=\"socialLink.link\"\n        [attr.target]=\"socialLink.target\"\n        [attr.class]=\"socialLink.icon\"\n        [class.with-icon]=\"socialLink.icon\"\n      >\n        <nb-icon\n          *ngIf=\"socialLink.icon; else title\"\n          [icon]=\"socialLink.icon\"\n        ></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <a\n        *ngIf=\"socialLink.url\"\n        [attr.href]=\"socialLink.url\"\n        [attr.target]=\"socialLink.target\"\n        [attr.class]=\"socialLink.icon\"\n        [class.with-icon]=\"socialLink.icon\"\n      >\n        <nb-icon\n          *ngIf=\"socialLink.icon; else title\"\n          [icon]=\"socialLink.icon\"\n        ></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n    </ng-container>\n  </div>\n</section> -->\n\n<!-- <section class=\"another-action\" aria-label=\"Register\">\n  Don't have an account?\n  <a class=\"text-link\" routerLink=\"../register\">Register</a>\n</section> -->\n", styles: ["::ng-deep .navigation .link nb-icon{display:none!important}\n"], components: [{ type: i1__namespace$1.NbAlertComponent, selector: "nb-alert", inputs: ["size", "status", "accent", "outline", "closable"], outputs: ["close"] }, { type: i1__namespace$1.NbCheckboxComponent, selector: "nb-checkbox", inputs: ["status", "checked", "disabled", "indeterminate"], outputs: ["checkedChange"] }, { type: i1__namespace$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i8__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1__namespace$4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1__namespace$4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1__namespace$4.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1__namespace$1.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1__namespace$4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1__namespace$4.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i1__namespace$4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace$4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i1__namespace$4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i1__namespace.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i1__namespace$4.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i1__namespace$4.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }], pipes: { "translate": i1__namespace$3.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: LoginComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: "ngx-login",
                        templateUrl: "./login.component.html",
                        styleUrls: ["./login.component.scss"],
                    }]
            }] });

    var isAuthGuard = /** @class */ (function () {
        function isAuthGuard(restAdminConfig, router) {
            this.restAdminConfig = restAdminConfig;
            this.router = router;
        }
        isAuthGuard.prototype.canActivate = function () {
            var authJson = localStorage.getItem(GLOBALS.AUTH_APP_TOKEN);
            if (!authJson)
                return true;
            else {
                this.router.navigateByUrl(this.restAdminConfig.restAuthParams.redirectRouteAfterLogin);
                return false;
            }
        };
        return isAuthGuard;
    }());
    isAuthGuard.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: isAuthGuard, deps: [{ token: RestAdminConfigService }, { token: i1__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    isAuthGuard.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: isAuthGuard });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: isAuthGuard, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: RestAdminConfigService }, { type: i1__namespace.Router }]; } });

    // serviceRestConfig.restPathFileTranslate
    function createTranslateHttpLoader(http) {
        // return new MultiTranslateHttpLoader(http, [
        //   { prefix: './assets/i18n/', suffix: '.json' },//host app i18n assets
        //   { prefix: './lib/assets/i18n/', suffix: '.json' }, //your lib assets
        //   { prefix: './rest/lib/assets/i18n/', suffix: '.json' }, //your lib assets
        // ])
        return new httpLoader.TranslateHttpLoader(http, 'assets/i18n/', '.json');
    }
    var RestAdminModule = /** @class */ (function () {
        function RestAdminModule(router, compiler, serviceRestAdmin, iconLibraries, restLangService) {
            var _this = this;
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
            var tempModule = i0.NgModule({
                imports: [
                    i1.RouterModule.forChild([
                        {
                            path: 'login',
                            component: i1$5.NbAuthComponent,
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
                            children: __spreadArray([], __read(this.serviceRestAdmin.generateRoutes())),
                        },
                        { path: '', redirectTo: '/login', pathMatch: 'full' },
                        { path: '**', redirectTo: '/' },
                    ]),
                    i1$5.NbAuthModule.forRoot({
                        strategies: [
                            i1$5.NbPasswordAuthStrategy.setup({
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
                                    class: i1$5.NbAuthSimpleToken,
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
            })(/** @class */ (function () {
                function class_1() {
                }
                return class_1;
            }()));
            this.compiler.compileModuleAsync(tempModule).then(function (module) {
                var routes = {
                    path: '',
                    loadChildren: function () {
                        return module;
                    },
                };
                _this.router.resetConfig(__spreadArray([routes], __read(_this.router.config)));
            });
        }
        RestAdminModule.forRoot = function (restConfig) {
            return {
                ngModule: RestAdminModule,
                providers: [
                    RestAdminConfigService,
                    { provide: 'restConfig', useValue: restConfig },
                ],
            };
        };
        return RestAdminModule;
    }());
    RestAdminModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestAdminModule, deps: [{ token: i1__namespace.Router }, { token: i0__namespace.Compiler }, { token: RestAdminConfigService }, { token: i1__namespace$1.NbIconLibraries }, { token: RestLangService }], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    RestAdminModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestAdminModule, declarations: [RestResourceListComponent,
            RestResourceAddComponent,
            RestResourceDeleteComponent,
            RestMainComponentComponent,
            RestResourceEditorFieldsComponent,
            RestResourceListFieldComponent,
            RestResourceDetailComponent,
            UploadFileComponent,
            FsIconCComponent,
            LoginComponent], imports: [i8.CommonModule,
            i1.RouterModule,
            i1$4.ReactiveFormsModule,
            i1$4.FormsModule,
            i1$2.HttpClientModule,
            i1$1.NbActionsModule,
            i1$1.NbButtonModule,
            i1$1.NbCardModule,
            i1$1.NbCheckboxModule,
            i1$1.NbInputModule,
            i1$1.NbTagModule,
            i1$1.NbRadioModule,
            i1$1.NbUserModule,
            i1$1.NbTreeGridModule,
            i1$1.NbAlertModule,
            i1$1.NbAutocompleteModule,
            i9.Ng2SmartTableModule,
            i2.FileUploadModule,
            i3.CngHtmlCompilerModule,
            i1$1.NbSpinnerModule,
            i1$1.NbTabsetModule,
            i1$1.NbPopoverModule,
            i5.ImageCropperModule,
            i1$1.NbToggleModule,
            i1$1.NbListModule,
            i1$1.NbTooltipModule,
            i1$1.NbContextMenuModule,
            i1$3.TranslateModule,
            i7.NgxDropzoneModule, i5__namespace$1.NgxPermissionsModule, i1$1.NbSelectModule,
            i1$1.NbSidebarModule, i1__namespace$1.NbMenuModule, i1__namespace$1.NbDatepickerModule, i1__namespace$1.NbDialogModule, i1__namespace$1.NbWindowModule, i1__namespace$1.NbToastrModule, i1__namespace$1.NbTimepickerModule, CoreModule, ThemeModule, i1$1.NbIconModule, i1__namespace$3.TranslateModule], exports: [RestResourceListComponent,
            RestResourceAddComponent,
            RestResourceDeleteComponent,
            RestMainComponentComponent,
            RestResourceEditorFieldsComponent,
            RestResourceListFieldComponent,
            RestResourceDetailComponent,
            UploadFileComponent,
            LoginComponent] });
    RestAdminModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestAdminModule, providers: [
            { provide: i1$2.HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true },
            { provide: i1$2.HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
            {
                provide: i1$2.HTTP_INTERCEPTORS,
                useClass: PaginationInterceptor,
                multi: true,
            },
            AuthGuard,
            isAuthGuard,
            RestResourceService,
            RestAdminConfigService,
            RestExportService,
            RestLangService,
        ], imports: [[
                i8.CommonModule,
                i1.RouterModule,
                i1$4.ReactiveFormsModule,
                i1$4.FormsModule,
                i1$2.HttpClientModule,
                i1$1.NbActionsModule,
                i1$1.NbButtonModule,
                i1$1.NbCardModule,
                i1$1.NbCheckboxModule,
                i1$1.NbInputModule,
                i1$1.NbTagModule,
                i1$1.NbRadioModule,
                i1$1.NbUserModule,
                i1$1.NbTreeGridModule,
                i1$1.NbAlertModule,
                i1$1.NbAutocompleteModule,
                i9.Ng2SmartTableModule,
                i2.FileUploadModule,
                i3.CngHtmlCompilerModule,
                i1$1.NbSpinnerModule,
                i1$1.NbTabsetModule,
                i1$1.NbPopoverModule,
                i5.ImageCropperModule,
                i1$1.NbToggleModule,
                i1$1.NbListModule,
                i1$1.NbTooltipModule,
                i1$1.NbContextMenuModule,
                i1$3.TranslateModule,
                i7.NgxDropzoneModule,
                i5$1.NgxPermissionsModule.forChild(),
                i1$1.NbSelectModule,
                i1$1.NbSidebarModule,
                i1$1.NbMenuModule.forRoot(),
                i1$1.NbDatepickerModule.forRoot(),
                i1$1.NbDialogModule.forRoot(),
                i1$1.NbWindowModule.forRoot(),
                i1$1.NbToastrModule.forRoot(),
                i1$1.NbTimepickerModule.forRoot(),
                CoreModule.forRoot(),
                ThemeModule.forRoot(),
                i1$1.NbIconModule,
                i1$3.TranslateModule.forRoot({
                    loader: {
                        provide: i1$3.TranslateLoader,
                        useFactory: createTranslateHttpLoader,
                        deps: [i1$2.HttpClient],
                    },
                }),
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RestAdminModule, decorators: [{
                type: i0.NgModule,
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
                            LoginComponent,
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
                            LoginComponent,
                        ],
                        imports: [
                            i8.CommonModule,
                            i1.RouterModule,
                            i1$4.ReactiveFormsModule,
                            i1$4.FormsModule,
                            i1$2.HttpClientModule,
                            i1$1.NbActionsModule,
                            i1$1.NbButtonModule,
                            i1$1.NbCardModule,
                            i1$1.NbCheckboxModule,
                            i1$1.NbInputModule,
                            i1$1.NbTagModule,
                            i1$1.NbRadioModule,
                            i1$1.NbUserModule,
                            i1$1.NbTreeGridModule,
                            i1$1.NbAlertModule,
                            i1$1.NbAutocompleteModule,
                            i9.Ng2SmartTableModule,
                            i2.FileUploadModule,
                            i3.CngHtmlCompilerModule,
                            i1$1.NbSpinnerModule,
                            i1$1.NbTabsetModule,
                            i1$1.NbPopoverModule,
                            i5.ImageCropperModule,
                            i1$1.NbToggleModule,
                            i1$1.NbListModule,
                            i1$1.NbTooltipModule,
                            i1$1.NbContextMenuModule,
                            i1$3.TranslateModule,
                            i7.NgxDropzoneModule,
                            i5$1.NgxPermissionsModule.forChild(),
                            i1$1.NbSelectModule,
                            i1$1.NbSidebarModule,
                            i1$1.NbMenuModule.forRoot(),
                            i1$1.NbDatepickerModule.forRoot(),
                            i1$1.NbDialogModule.forRoot(),
                            i1$1.NbWindowModule.forRoot(),
                            i1$1.NbToastrModule.forRoot(),
                            i1$1.NbTimepickerModule.forRoot(),
                            CoreModule.forRoot(),
                            ThemeModule.forRoot(),
                            i1$1.NbIconModule,
                            i1$3.TranslateModule.forRoot({
                                loader: {
                                    provide: i1$3.TranslateLoader,
                                    useFactory: createTranslateHttpLoader,
                                    deps: [i1$2.HttpClient],
                                },
                            }),
                        ],
                        providers: [
                            { provide: i1$2.HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true },
                            { provide: i1$2.HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
                            {
                                provide: i1$2.HTTP_INTERCEPTORS,
                                useClass: PaginationInterceptor,
                                multi: true,
                            },
                            AuthGuard,
                            isAuthGuard,
                            RestResourceService,
                            RestAdminConfigService,
                            RestExportService,
                            RestLangService,
                        ],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.Router }, { type: i0__namespace.Compiler }, { type: RestAdminConfigService }, { type: i1__namespace$1.NbIconLibraries }, { type: RestLangService }]; } });

    var RestResource = /** @class */ (function () {
        function RestResource(mainConfig, fields, listConfig, addConfig, editConfig, detailConfig) {
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
        Object.defineProperty(RestResource.prototype, "name", {
            // Getters
            get: function () {
                return this._name;
            },
            // Setters
            set: function (v) {
                this._name = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RestResource.prototype, "api", {
            get: function () {
                return this._api == null ? this.name.toLowerCase() + "s" : this._api;
            },
            set: function (v) {
                this._api = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RestResource.prototype, "authRequired", {
            get: function () {
                return this._authRequired == null ? false : this._authRequired;
            },
            set: function (v) {
                this._authRequired = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RestResource.prototype, "showInMenu", {
            get: function () {
                return this._showInMenu == null ? true : this._showInMenu;
            },
            set: function (v) {
                this._showInMenu = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RestResource.prototype, "icon", {
            get: function () {
                if (this._icon == null)
                    return "browser-outline";
                else if (typeof this._icon == "string")
                    return this._icon;
                else
                    return { icon: this._icon.icon, pack: this._icon.pack };
            },
            set: function (v) {
                this._icon = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RestResource.prototype, "fields", {
            get: function () {
                return this._fields.map(function (field) { return ({
                    name: field.name,
                    type: field.type ? field.type : exports.REST_FIELD_TYPES.STRING,
                    label: field.label ? field.label : field.name,
                    inForm: field.inForm !== undefined ? field.inForm : true,
                    metaData: field.metaData,
                    i18n: field.i18n !== undefined ? field.i18n : false,
                }); });
            },
            set: function (v) {
                this._fields = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RestResource.prototype, "hasFile", {
            get: function () {
                return this.fields.findIndex(function (field) { return ([exports.REST_FIELD_TYPES.IMAGE, exports.REST_FIELD_TYPES.PDF, exports.REST_FIELD_TYPES.FILE].includes(field.type)); }) >= 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RestResource.prototype, "permissions", {
            get: function () {
                return this._permissions == null ? [] : this._permissions;
            },
            set: function (v) {
                this._permissions = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RestResource.prototype, "listConfig", {
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
            get: function () {
                var rest = {};
                if (this._listConfig.columns)
                    rest.columns = this._listConfig.columns;
                else {
                    rest.columns = this.fields.reduce(function (cumul, item) {
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
                        type: exports.TYPE_GROUP.DEFAULT,
                    };
                return rest;
            },
            set: function (v) {
                this._listConfig = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RestResource.prototype, "addConfig", {
            get: function () {
                var rest = {};
                rest.api = this._addConfig.api ? this._addConfig.api : this.api;
                rest.title = this._addConfig.title
                    ? this._addConfig.title
                    : "Add " + this.name;
                rest.method = this._addConfig.method
                    ? this._addConfig.method
                    : exports.TYPE_METHOD_REQUEST.POST;
                rest.body = this._addConfig.body ? this._addConfig.body : {};
                rest.header = this._addConfig.header ? this._addConfig.header : {};
                return rest;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RestResource.prototype, "editConfig", {
            get: function () {
                var rest = {};
                rest.api = this._editConfig.api ? this._editConfig.api : this.api;
                rest.isLaravel = this._editConfig.isLaravel
                    ? this._editConfig.isLaravel
                    : false;
                this._hasFile = this.hasFile;
                rest.method = this._editConfig.method
                    ? this._editConfig.method
                    : exports.TYPE_METHOD_REQUEST.POST;
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
            },
            set: function (v) {
                this._editConfig = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RestResource.prototype, "detailConfig", {
            get: function () {
                var rest = {};
                rest.api = this._detailConfig.api ? this._detailConfig.api : this.api;
                rest.title = this._detailConfig.title ? this._detailConfig.title : "";
                rest.tabsConfig = this._detailConfig.tabsConfig
                    ? this._detailConfig.tabsConfig
                    : null;
                rest.queryParams = this._detailConfig.queryParams
                    ? this._detailConfig.queryParams
                    : this.queryParams;
                return rest;
            },
            set: function (v) {
                this._detailConfig = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RestResource.prototype, "description", {
            get: function () {
                return this._description == null
                    ? "manage " + this.name
                    : this._description;
            },
            set: function (v) {
                this._description = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RestResource.prototype, "queryParams", {
            get: function () {
                return this._queryParams == null ? {} : this._queryParams;
            },
            set: function (v) {
                this._queryParams = v;
            },
            enumerable: false,
            configurable: true
        });
        return RestResource;
    }());

    /*
     * Public API Surface of rest-admin
     */
    // export * from './lib/assets/i18n/*';
    // export * from './lib/auth/auth-routing.module';

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ALPHABET = ALPHABET;
    exports.AnalyticsService = AnalyticsService;
    exports.AuthGuard = AuthGuard;
    exports.CapitalizePipe = CapitalizePipe;
    exports.CoreModule = CoreModule;
    exports.FILTER_OPERATORS = FILTER_OPERATORS;
    exports.FooterComponent = FooterComponent;
    exports.FsIconCComponent = FsIconCComponent;
    exports.HeaderComponent = HeaderComponent;
    exports.LayoutService = LayoutService;
    exports.LoginComponent = LoginComponent;
    exports.NB_CORE_PROVIDERS = NB_CORE_PROVIDERS;
    exports.NbSimpleRoleProvider = NbSimpleRoleProvider;
    exports.NumberWithCommasPipe = NumberWithCommasPipe;
    exports.OneColumnLayoutComponent = OneColumnLayoutComponent;
    exports.PlayerService = PlayerService;
    exports.PluralPipe = PluralPipe;
    exports.RestAdminConfigService = RestAdminConfigService;
    exports.RestAdminModule = RestAdminModule;
    exports.RestExportService = RestExportService;
    exports.RestLangService = RestLangService;
    exports.RestMainComponentComponent = RestMainComponentComponent;
    exports.RestResource = RestResource;
    exports.RestResourceAddComponent = RestResourceAddComponent;
    exports.RestResourceDeleteComponent = RestResourceDeleteComponent;
    exports.RestResourceDetailComponent = RestResourceDetailComponent;
    exports.RestResourceEditorFieldsComponent = RestResourceEditorFieldsComponent;
    exports.RestResourceListComponent = RestResourceListComponent;
    exports.RestResourceListFieldComponent = RestResourceListFieldComponent;
    exports.RestResourceService = RestResourceService;
    exports.RoundPipe = RoundPipe;
    exports.SearchInputComponent = SearchInputComponent;
    exports.SeoService = SeoService;
    exports.StateService = StateService;
    exports.ThemeModule = ThemeModule;
    exports.ThreeColumnsLayoutComponent = ThreeColumnsLayoutComponent;
    exports.TimingPipe = TimingPipe;
    exports.TinyMCEComponent = TinyMCEComponent;
    exports.TwoColumnsLayoutComponent = TwoColumnsLayoutComponent;
    exports.UploadFileComponent = UploadFileComponent;
    exports.createTranslateHttpLoader = createTranslateHttpLoader;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=foris-master-ngx-rest-admin.umd.js.map
