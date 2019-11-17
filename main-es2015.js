(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container\"> -->\n  <!-- <app-employees></app-employees> -->\n  <app-employeeform></app-employeeform>\n  <br>\n  <div hidden=\"true\">\n        <app-employee-list></app-employee-list>\n</div>\n<!-- </div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employee-list/employee-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employee-list/employee-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"content\">\n    <table>\n        <tr>\n            <th>name</th>\n            <th>position</th>\n            <th>office</th>\n            <th>salary</th>\n            <!-- <th>delete</th> -->\n            <th>edit</th>\n        </tr>\n        <tr *ngFor=\"let employee of employeeList;let i=index;\">\n            <td class=\"text-center\">{{i+1}}</td>\n            <td>{{employee.name}}</td>\n            <td>{{employee.position}}</td>\n            <td>{{employee.office}}</td>\n            <td>{{employee.salary}}</td>\n        <!-- <td><button class=\"btn btn-success\" (click)=\"delete(employee.$key)\">Delete</button></td> -->\n            <!-- <td><button class=\"btn btn-primary\" (click)=\"edit(employee)\">Edit</button></td> -->\n        </tr>\n        </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employeeform/employeeform.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employeeform/employeeform.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <form #employeeform=\"ngForm\" (ngSubmit)=\"submit(employeeform);employeeform.resetForm()\">\n    <input type=\"hidden\" class=\"form-control\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"employeeservice.selectedEmployee.$key\">\n    <div class=\"form-group\">\n        <label>name</label>\n        <input type=\"text\" class=\"form-control\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"employeeservice.selectedEmployee.name\">\n    </div>\n    <div class=\"form-group\">\n        <label>position</label>\n        <input type=\"password\" class=\"form-control\" name=\"position\" #position=\"ngModel\" [(ngModel)]=\"employeeservice.selectedEmployee.position\">\n    </div>\n    <div class=\"form-group\"  hidden=\"true\">\n        <label>office</label>\n        <input type=\"text\" class=\"form-control\" name=\"office\" #office=\"ngModel\" [(ngModel)]=\"employeeservice.selectedEmployee.office\" value=\"abc\">\n    </div>\n    <div class=\"form-group\" hidden=\"true\">\n        <label>salary</label>\n        <input type=\"text\" class=\"form-control\" name=\"salary\" #salary=\"ngModel\" [(ngModel)]=\"employeeservice.selectedEmployee.salary\" value=\"abc\">\n    </div>\n    <div class=\"form-group\">\n        <button class=\"btn btn-success\">submit</button>&nbsp;\n        <button class=\"btn btn-primary\" type=\"reset\">clear</button>\n    </div>\n</form> -->\n\n\n<div>\n\t<header>\n\t\t<div id=\"headerContent\">\n\t\t\t<h1>The Love Calculator</h1>\n\t\t\t<div class=\"result\">\n\t\t\t\t<p>Result: <span id=\"txtresult\">{{result}}</span></p>\n\t\t\t\t<div class=\"divider\"></div>\n\t\t\t\t<p id=\"responseLine\" class=\"text-success\">{{res}}</p>\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\t<img src=\"https://media2.giphy.com/media/1WUi2i8vT66Dm/200.webp?cid=790b7611181a6f13c4491d94b619536c6034fabc3507d98f&rid=200.webp\" height=\"70px\" width=\"50px\" style=\"position: absolute;right:20%;bottom:10%;\">\n\t<section class=\"wrapper\">\n\t\t<form #employeeform=\"ngForm\" (ngSubmit)=\"submit(employeeform);employeeform.resetForm()\" >\n\t\t\t<p>Enter First Person:<br>\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"employeeservice.selectedEmployee.name\" autocomplete=\"off\">\n    <!-- <hr> -->\n\t\t\t</p>\n\t\t\t<p>Enter Second Person:<br>\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"position\" #position=\"ngModel\" [(ngModel)]=\"employeeservice.selectedEmployee.position\" autocomplete=\"off\">\n   <!-- <hr> -->\n\t\t\t</p>\n\t\t\t<div class=\"errorMessage\">\n\t\t\t\t<p id=\"error\"></p>\n\t\t\t</div>\n\t\t\t<div class=\"buttonHolder\">\n\t\t\t\t<input class=\"btn btn-success\" type=\"submit\" id=\"calculateBtn\" name=\"clickbtn\" value=\"Calculate\">\n\t\t\t</div>\n\t\t\t<!-- <div class=\"buttonHolder\">\n\t\t\t\t<input type=\"button\" id=\"calculateBtn\" name=\"clickbtn\" value=\"Refresh\" onclick=\"window.location.reload()\">\n\t\t\t</div> -->\n\t\t</form>\n\t</section>\n\t<!-- <script src=\"main.js\"></script> -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"jumbotron\">\n<h3 class=\"text-center\">EmployeeApp</h3>\n</div>\n<div class=\"col-sm-7\"> -->\n    <!-- </div> -->\n    <!-- <div class=\"col-sm-5\"> -->\n        <!-- <app-employee-list></app-employee-list> -->\n        <!-- </div> -->\n        <!-- <app-employeeform></app-employeeform> -->\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'lenovo';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _employees_employeeform_employeeform_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employees/employeeform/employeeform.component */ "./src/app/employees/employeeform/employeeform.component.ts");
/* harmony import */ var _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employees/employee-list/employee-list.component */ "./src/app/employees/employee-list/employee-list.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _employees_employees_component__WEBPACK_IMPORTED_MODULE_9__["EmployeesComponent"],
            _employees_employeeform_employeeform_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeformComponent"],
            _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseConfig),
            angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot()
        ],
        providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table, th, td {\n  border: 1px solid green;\n  border-collapse: collapse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2VtcGxveWVlLWxpc3QvRDpcXGFuZ3VsYXI2XFxlbXBsb3llZVxcbG92ZSBjYWxjdWxhdG9yL3NyY1xcYXBwXFxlbXBsb3llZXNcXGVtcGxveWVlLWxpc3RcXGVtcGxveWVlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZXMvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsdGgsdGR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuIiwidGFibGUsIHRoLCB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




let EmployeeListComponent = class EmployeeListComponent {
    constructor(employeeservice, tostr) {
        this.employeeservice = employeeservice;
        this.tostr = tostr;
    }
    ngOnInit() {
        var x = this.employeeservice.getEmployee();
        x.snapshotChanges().subscribe(data => {
            this.employeeList = [];
            data.forEach(element => {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                this.employeeList.push(y);
            });
        });
    }
    edit(data) {
        this.employeeservice.selectedEmployee = Object.assign({}, data);
    }
    delete(key) {
        this.employeeservice.deleteEmployee(key);
        this.tostr.warning("deleted successfully");
    }
};
EmployeeListComponent.ctorParameters = () => [
    { type: src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employee-list/employee-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-list.component.scss */ "./src/app/employees/employee-list/employee-list.component.scss")).default]
    })
], EmployeeListComponent);



/***/ }),

/***/ "./src/app/employees/employeeform/employeeform.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/employees/employeeform/employeeform.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  margin: 0;\n  padding: 0;\n}\n\nheader {\n  position: relative;\n  height: 300px;\n  width: 100%;\n  background: #DC758F;\n  color: #FFF;\n}\n\np {\n  font-size: 1.25em;\n  font-family: \"Source Sans Pro\", sans-serif;\n  margin: 10px 0;\n}\n\nform p {\n  margin-top: 30px;\n}\n\n#headerContent {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n#headerContent h1,\n#headerContent h2,\n#headerContent p {\n  font-family: \"Lobster\", cursive;\n}\n\n#headerContent h1 {\n  font-size: 24px;\n}\n\n#headerContent h2 {\n  font-size: 14px;\n}\n\n#headerContent p {\n  font-size: 1em;\n}\n\nsection {\n  padding: 20px 20px;\n}\n\nsection p {\n  color: #a6a6a6;\n}\n\n.wrapper {\n  max-width: 100%;\n}\n\ninput[type=text] {\n  display: block;\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-weight: bold;\n  margin: 0;\n  width: 100%;\n  font-size: 18px;\n  padding-top: 10px;\n  color: #a6a6a6;\n}\n\ninput[type=text]:focus {\n  border: 2px;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n  outline: none;\n}\n\ninput[type=button] {\n  width: 100%;\n  background: #a6a6a6;\n  cursor: pointer;\n  color: #FFF;\n  border: 0;\n  font-family: \"Lobster\", cursive;\n  font-size: 1.25em;\n  padding: 15px;\n  margin-top: 15px;\n}\n\ninput[type=button]:hover {\n  background: #bfbfbf;\n}\n\nhr {\n  border: 0;\n  border-bottom: 1px solid #a6a6a6;\n  margin: 0;\n}\n\n.buttonHolder {\n  width: 100%;\n  text-align: center;\n}\n\n.result {\n  padding: 30px;\n}\n\n@media screen and (min-width: 800px) {\n  .wrapper {\n    margin: 0 auto;\n    max-width: 70%;\n  }\n}\n\n.divider {\n  display: block;\n  width: 40px;\n  border: 4px solid #FFF;\n  margin: 20px auto 0 auto;\n}\n\n.errorMessage p {\n  color: #DC758F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2VtcGxveWVlZm9ybS9EOlxcYW5ndWxhcjZcXGVtcGxveWVlXFxsb3ZlIGNhbGN1bGF0b3Ivc3JjXFxhcHBcXGVtcGxveWVlc1xcZW1wbG95ZWVmb3JtXFxlbXBsb3llZWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZWZvcm0vZW1wbG95ZWVmb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7QUNDRDs7QURFQTtFQUNDLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNDRDs7QURFQTtFQUNDLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0FDQ0Q7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0csU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBOzs7RUFHQywrQkFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtBQ0NEOztBREVBO0VBQ0MsY0FBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7QUNDRDs7QURFQTtFQUNDLGNBQUE7QUNDRDs7QURFQTtFQUNDLGVBQUE7QUNDRDs7QURFQTtFQUNFLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFHQSxjQUFBO0FDREY7O0FESUE7RUFDQyxXQUFBO0FDREQ7O0FESUE7Ozs7RUFJSSxhQUFBO0FDREo7O0FESUE7RUFDQyxXQUFBO0VBQ0csbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtBQ0RKOztBRElBO0VBQ0MsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtBQ0REOztBRElBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0FDREQ7O0FESUE7RUFDQyxhQUFBO0FDREQ7O0FESUE7RUFFQztJQUNDLGNBQUE7SUFDQSxjQUFBO0VDRkE7QUFDRjs7QURNQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQ0pEOztBRE9BO0VBQ0MsY0FBQTtBQ0pEIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWVzL2VtcGxveWVlZm9ybS9lbXBsb3llZWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0aGVpZ2h0OiAzMDBweDtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGJhY2tncm91bmQ6ICNEQzc1OEY7XHJcblx0Y29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbnAge1xyXG5cdGZvbnQtc2l6ZTogMS4yNWVtO1xyXG5cdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuXHRtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuZm9ybSBwIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4jaGVhZGVyQ29udGVudCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNoZWFkZXJDb250ZW50IGgxLCBcclxuI2hlYWRlckNvbnRlbnQgaDIsIFxyXG4jaGVhZGVyQ29udGVudCBwIHtcclxuXHRmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xyXG59XHJcblxyXG4jaGVhZGVyQ29udGVudCBoMSB7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4jaGVhZGVyQ29udGVudCBoMiB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4jaGVhZGVyQ29udGVudCBwIHtcclxuXHRmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcblx0cGFkZGluZzogMjBweCAyMHB4O1xyXG59XHJcblxyXG5zZWN0aW9uIHAge1xyXG5cdGNvbG9yOiAjYTZhNmE2O1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbi8vICAgYm9yZGVyOiBub25lO1xyXG4vLyAgIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6ICNhNmE2YTY7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzIHtcclxuXHRib3JkZXI6IDJweDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMsXHJcbnNlbGVjdDpmb2N1cyxcclxudGV4dGFyZWE6Zm9jdXMsXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDojYTZhNmE2OyBcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6I2JmYmZiZjsgXHJcbn1cclxuXHJcbmhyIHtcclxuXHRib3JkZXI6IDA7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhNmE2YTY7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYnV0dG9uSG9sZGVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZXN1bHQge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgICBcclxuXHQud3JhcHBlciB7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdG1heC13aWR0aDogNzAlO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogNDBweDtcclxuXHRib3JkZXI6IDRweCBzb2xpZCAjRkZGO1xyXG5cdG1hcmdpbjogMjBweCBhdXRvIDAgYXV0bztcclxufVxyXG5cclxuLmVycm9yTWVzc2FnZSBwIHtcclxuXHRjb2xvcjogI0RDNzU4RjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI0RDNzU4RjtcbiAgY29sb3I6ICNGRkY7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuMjVlbTtcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG5mb3JtIHAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4jaGVhZGVyQ29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jaGVhZGVyQ29udGVudCBoMSxcbiNoZWFkZXJDb250ZW50IGgyLFxuI2hlYWRlckNvbnRlbnQgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxvYnN0ZXJcIiwgY3Vyc2l2ZTtcbn1cblxuI2hlYWRlckNvbnRlbnQgaDEge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbiNoZWFkZXJDb250ZW50IGgyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4jaGVhZGVyQ29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG59XG5cbnNlY3Rpb24gcCB7XG4gIGNvbG9yOiAjYTZhNmE2O1xufVxuXG4ud3JhcHBlciB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGNvbG9yOiAjYTZhNmE2O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcbiAgYm9yZGVyOiAycHg7XG59XG5cbmlucHV0OmZvY3VzLFxuc2VsZWN0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMsXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2E2YTZhNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiAwO1xuICBmb250LWZhbWlseTogXCJMb2JzdGVyXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYmZiZmJmO1xufVxuXG5ociB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhNmE2YTY7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJ1dHRvbkhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZXN1bHQge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAud3JhcHBlciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiA3MCU7XG4gIH1cbn1cbi5kaXZpZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXI6IDRweCBzb2xpZCAjRkZGO1xuICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XG59XG5cbi5lcnJvck1lc3NhZ2UgcCB7XG4gIGNvbG9yOiAjREM3NThGO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/employees/employeeform/employeeform.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/employees/employeeform/employeeform.component.ts ***!
  \******************************************************************/
/*! exports provided: EmployeeformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeformComponent", function() { return EmployeeformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




let EmployeeformComponent = class EmployeeformComponent {
    constructor(employeeservice, tostr) {
        this.employeeservice = employeeservice;
        this.tostr = tostr;
        this.showerror = false;
    }
    ngOnInit() {
    }
    submit(employeeform) {
        debugger;
        let fname = employeeform.form.value.name;
        let sname = employeeform.form.value.position;
        if (fname == null || sname == null) {
            this.result = "invalid inputs! check ur love again.";
            return;
        }
        let percentage = Math.floor(Math.random() * 100) + 1;
        if (fname.toLowerCase() === "mithuna" && sname.toLowerCase() === "nikhil") {
            percentage = 100;
        }
        this.result = fname + " & " +
            sname + " are " + percentage + "% Compatible.";
        this.res = this.response(percentage);
        if (employeeform.value.$key == null) {
            this.employeeservice.insertEmployee(employeeform.value);
            this.showerror = true;
            //  this.tostr.error("something went wrong")
        }
        else {
            this.employeeservice.updateEmployee(employeeform.value);
            // this.tostr.error("something went wrong")
            // this.tostr.warning("successfully updated")
        }
    }
    calculate(nameOne, nameTwo) {
        var error = "";
        document.getElementById('error').innerHTML = error;
        var inputOne = nameOne;
        var inputTwo = nameTwo;
        var percentage = Math.floor(Math.random() * 100) + 1;
        var result = "<strong> " + nameOne + "</strong>" + " & " + "<strong>" +
            nameTwo + "</strong>" + " are " + "<strong>" + percentage + "</strong>" + "% Compatible.";
        document.getElementById('txtresult').innerHTML = result;
        //  document.getElementById("calculateBtn").disabled = true;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        let data = this.response(percentage);
        // if (inputOne === "Michael" && inputTwo ==="Omar") {
        //   percentage = 100; 
        // }
    }
    response(percentage) {
        var responses = [
            "None. None at all.",
            "Not much chemistry.",
            "Possibly a couple of glances, but nothing to get excited about.",
            "Starting to show some promise.",
            "You're half way there!",
            "There is a real spark!",
            "Match made in heaven!",
            "This is love.",
            "These two need to be together.",
        ];
        var value = percentage;
        // var responseLine = document.getElementById('responseLine');
        if (value >= 0 && value < 10) {
            return responses[0];
        }
        else if (value >= 10 && value < 20) {
            return responses[1];
        }
        else if (value >= 20 && value < 30) {
            return responses[2];
        }
        else if (value >= 30 && value < 40) {
            return responses[3];
        }
        else if (value >= 50 && value < 60) {
            return responses[4];
        }
        else if (value >= 60 && value < 70) {
            return responses[5];
        }
        else if (value >= 70 && value < 80) {
            return responses[6];
        }
        else if (value >= 80 && value < 90) {
            return responses[7];
        }
        else if (value >= 90 && value <= 100) {
            return responses[8];
        }
    }
};
EmployeeformComponent.ctorParameters = () => [
    { type: src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
EmployeeformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employeeform',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employeeform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employeeform/employeeform.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employeeform.component.scss */ "./src/app/employees/employeeform/employeeform.component.scss")).default]
    })
], EmployeeformComponent);



/***/ }),

/***/ "./src/app/employees/employees.component.scss":
/*!****************************************************!*\
  !*** ./src/app/employees/employees.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/employee.service */ "./src/app/shared/employee.service.ts");



let EmployeesComponent = class EmployeesComponent {
    constructor(employeeservice) {
        this.employeeservice = employeeservice;
    }
    ngOnInit() {
    }
};
EmployeesComponent.ctorParameters = () => [
    { type: _shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] }
];
EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employees',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employees.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.component.html")).default,
        providers: [_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employees.component.scss */ "./src/app/employees/employees.component.scss")).default]
    })
], EmployeesComponent);



/***/ }),

/***/ "./src/app/shared/employee.model.ts":
/*!******************************************!*\
  !*** ./src/app/shared/employee.model.ts ***!
  \******************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Employee {
}


/***/ }),

/***/ "./src/app/shared/employee.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/employee.service.ts ***!
  \********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _employee_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee.model */ "./src/app/shared/employee.model.ts");




let EmployeeService = class EmployeeService {
    constructor(firebase) {
        this.firebase = firebase;
        this.selectedEmployee = new _employee_model__WEBPACK_IMPORTED_MODULE_3__["Employee"]();
    }
    getEmployee() {
        this.employeeList = this.firebase.list('employee');
        return this.employeeList;
    }
    insertEmployee(employee) {
        this.employeeList.push({
            name: employee.name,
            position: employee.position,
            office: 'aaa',
            salary: 'nnn',
        });
    }
    updateEmployee(employee) {
        this.employeeList.update(employee.$key, {
            name: employee.name,
            position: employee.position,
            organization: employee.office,
            salary: employee.salary,
        });
    }
    deleteEmployee($key) {
        this.employeeList.remove($key);
    }
};
EmployeeService.ctorParameters = () => [
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EmployeeService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAPgH5CGMPukhIGIY44bBHxiQRcuJjDqvE",
        authDomain: "fir-curdapp-36bd2.firebaseapp.com",
        databaseURL: "https://fir-curdapp-36bd2.firebaseio.com",
        projectId: "fir-curdapp-36bd2",
        storageBucket: "fir-curdapp-36bd2.appspot.com",
        messagingSenderId: "752809214947",
        appId: "1:752809214947:web:e9859719578111373fd6d6"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular6\employee\love calculator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map