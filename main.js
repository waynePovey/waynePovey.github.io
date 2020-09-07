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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _common_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/routes */ "./src/app/common/routes.ts");
/* harmony import */ var _scenes_solar_system_solar_system_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scenes/solar-system/solar-system.component */ "./src/app/scenes/solar-system/solar-system.component.ts");







var routes = [
    { path: _common_routes__WEBPACK_IMPORTED_MODULE_3__["RoutePath"].HOME, component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: _common_routes__WEBPACK_IMPORTED_MODULE_3__["RoutePath"].SOLAR_SYSTEM, component: _scenes_solar_system_solar_system_component__WEBPACK_IMPORTED_MODULE_4__["SolarSystemComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/routes */ "./src/app/common/routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'waynepovey-portfolio';
        this.initialiseApp();
    }
    AppComponent.prototype.initialiseApp = function () {
        this.router.navigateByUrl(_common_routes__WEBPACK_IMPORTED_MODULE_1__["RoutePath"].HOME);
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _scenes_solar_system_solar_system_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @scenes/solar-system/solar-system.component */ "./src/app/scenes/solar-system/solar-system.component.ts");
/* harmony import */ var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/loading-spinner/loading-spinner.component */ "./src/app/components/loading-spinner/loading-spinner.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _scenes_solar_system_solar_system_component__WEBPACK_IMPORTED_MODULE_5__["SolarSystemComponent"],
        _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__["LoadingSpinnerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _scenes_solar_system_solar_system_component__WEBPACK_IMPORTED_MODULE_5__["SolarSystemComponent"],
                    _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__["LoadingSpinnerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/common/routes.ts":
/*!**********************************!*\
  !*** ./src/app/common/routes.ts ***!
  \**********************************/
/*! exports provided: RoutePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePath", function() { return RoutePath; });
var RoutePath;
(function (RoutePath) {
    RoutePath["HOME"] = "home";
    RoutePath["SOLAR_SYSTEM"] = "solar-system";
})(RoutePath || (RoutePath = {}));


/***/ }),

/***/ "./src/app/common/utils.ts":
/*!*********************************!*\
  !*** ./src/app/common/utils.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core */ "./node_modules/@babylonjs/core/index.js");

var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.degreesToRads = function (degrees) {
        return degrees * Math.PI / 180;
    };
    Utils.random = function (value) {
        return Math.random() * value;
    };
    Utils.randomInRange = function (lower, upper) {
        return Math.random() * (upper - lower) + lower;
    };
    Utils.pointOnSphere = function (radius, phi, theta) {
        return new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](radius * Math.sin(phi) * Math.cos(theta), radius * Math.cos(phi), radius * Math.sin(phi) * Math.sin(theta));
    };
    Utils.capitaliseString = function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    Utils.orbitalPeriodSecs = function (seconds, fps) {
        return (2 * Math.PI) / (seconds * fps);
    };
    return Utils;
}());
/* harmony default export */ __webpack_exports__["default"] = (Utils);


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/routes */ "./src/app/common/routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.initialised = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initialised = true;
        }, 500);
    };
    HomeComponent.prototype.play = function () {
        var _this = this;
        this.initialised = false;
        setTimeout(function () {
            _this.router.navigateByUrl(_common_routes__WEBPACK_IMPORTED_MODULE_1__["RoutePath"].SOLAR_SYSTEM);
        }, 500);
    };
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 1, consts: [[3, "ngClass"], [3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hi, I'm Wayne Povey. Welcome to my interactive portfolio");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(Still in early development. Be wary of bugs and missing features!)");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() { return ctx.play(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ENTER");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.initialised ? "visible" : "hidden");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["div[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  width: 100%;\n  height: 100%;\n  background: cadetblue;\n}\ndiv.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.5s ease-in;\n}\ndiv.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 0.5s ease-in;\n}\ndiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 5em;\n  color: white;\n  text-align: center;\n}\ndiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2em;\n}\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0.1em solid white;\n  border-radius: 0.4em;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  background: transparent;\n  color: white;\n  font-family: Open Sans Light;\n  font-size: 3em;\n}\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQ0k7RUFDSSxVQUFBO0VBQ0EsZ0NBQUE7QUFDUjtBQUVJO0VBQ0ksVUFBQTtFQUNBLGdDQUFBO0FBQVI7QUFHSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQUlJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFGUjtBQUtJO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQUhSO0FBS1E7RUFDSSxhQUFBO0FBSFoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcblxuICAgICYuaGlkZGVuIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW47XG4gICAgfVxuXG4gICAgJi52aXNpYmxlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW47XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDVlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyOiAwLjFlbSBzb2xpZCB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC40ZW07XG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgTGlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });
    return HomeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/loading-spinner/loading-spinner.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/loading-spinner/loading-spinner.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
    LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 11, vars: 0, consts: [[1, "planet"], [1, "mars"], [1, "earth"], [1, "venus"], [1, "mercury"], [1, "sun"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["div[_ngcontent-%COMP%] {\n  background: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0.1em solid transparent;\n  border-top-color: white;\n  border-radius: 50%;\n  padding: 0.1em;\n  width: 13em;\n  height: 13em;\n  -webkit-animation: spin 10s linear infinite;\n  animation: spin 10s linear infinite;\n}\ndiv[_ngcontent-%COMP%]   .mars[_ngcontent-%COMP%] {\n  width: 11em;\n  height: 11em;\n}\ndiv[_ngcontent-%COMP%]   .mars[_ngcontent-%COMP%]   .earth[_ngcontent-%COMP%] {\n  width: 9em;\n  height: 9em;\n}\ndiv[_ngcontent-%COMP%]   .mars[_ngcontent-%COMP%]   .earth[_ngcontent-%COMP%]   .venus[_ngcontent-%COMP%] {\n  width: 7em;\n  height: 7em;\n}\ndiv[_ngcontent-%COMP%]   .mars[_ngcontent-%COMP%]   .earth[_ngcontent-%COMP%]   .venus[_ngcontent-%COMP%]   .mercury[_ngcontent-%COMP%] {\n  width: 5em;\n  height: 5em;\n}\ndiv[_ngcontent-%COMP%]   .mars[_ngcontent-%COMP%]   .earth[_ngcontent-%COMP%]   .venus[_ngcontent-%COMP%]   .mercury[_ngcontent-%COMP%]   .sun[_ngcontent-%COMP%] {\n  border: none;\n  background: white;\n  width: 2em;\n  height: 2em;\n}\n.planet[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10%;\n  right: 10%;\n  background: white;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 50%;\n}\n@-webkit-keyframes spin {\n  0% {\n    \n    \n    transform: rotate(0deg);\n    \n  }\n  100% {\n    \n    \n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    \n    \n    transform: rotate(0deg);\n    \n  }\n  100% {\n    \n    \n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDJDQUFBO0VBQ0EsbUNBQUE7QUFBSjtBQUVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFBUjtBQUVRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFBWjtBQUVZO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFBaEI7QUFFZ0I7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQUFwQjtBQUVvQjtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQXhCO0FBUUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTEo7QUFRQTtFQUNJO0lBQ3NDLG1DQUFBO0lBQ0osU0FBQTtJQUM5Qix1QkFBQTtJQUEwQiwrQkFBQTtFQUZoQztFQUtFO0lBQ3dDLG1DQUFBO0lBQ0osU0FBQTtJQUNoQyx5QkFBQTtFQUROO0FBQ0Y7QUFJQTtFQUNJO0lBQ3NDLG1DQUFBO0lBQ0osU0FBQTtJQUM5Qix1QkFBQTtJQUEwQiwrQkFBQTtFQUNoQztFQUVFO0lBQ3dDLG1DQUFBO0lBQ0osU0FBQTtJQUNoQyx5QkFBQTtFQUVOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDAuMWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiAwLjFlbTtcbiAgICB3aWR0aDogMTNlbTtcbiAgICBoZWlnaHQ6IDEzZW07XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxMHMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAxMHMgbGluZWFyIGluZmluaXRlO1xuXG4gICAgLm1hcnMge1xuICAgICAgICB3aWR0aDogMTFlbTtcbiAgICAgICAgaGVpZ2h0OiAxMWVtO1xuXG4gICAgICAgIC5lYXJ0aCB7XG4gICAgICAgICAgICB3aWR0aDogOWVtO1xuICAgICAgICAgICAgaGVpZ2h0OiA5ZW07XG5cbiAgICAgICAgICAgIC52ZW51cyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDdlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDdlbTtcblxuICAgICAgICAgICAgICAgIC5tZXJjdXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVlbTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1ZW07XG5cbiAgICAgICAgICAgICAgICAgICAgLnN1biB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBsYW5ldCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAlO1xuICAgIHJpZ2h0OiAxMCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgd2lkdGg6IDAuNWVtO1xuICAgIGhlaWdodDogMC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyAgLyogQ2hyb21lLCBPcGVyYSAxNSssIFNhZmFyaSAzLjErICovXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgIC8qIElFIDkgKi9cbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7ICAvKiBGaXJlZm94IDE2KywgSUUgMTArLCBPcGVyYSAqL1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7ICAvKiBDaHJvbWUsIE9wZXJhIDE1KywgU2FmYXJpIDMuMSsgKi9cbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7ICAvKiBJRSA5ICovXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgIC8qIENocm9tZSwgT3BlcmEgMTUrLCBTYWZhcmkgMy4xKyAqL1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7ICAvKiBJRSA5ICovXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyAgLyogRmlyZWZveCAxNissIElFIDEwKywgT3BlcmEgKi9cbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAgLyogQ2hyb21lLCBPcGVyYSAxNSssIFNhZmFyaSAzLjErICovXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAgLyogSUUgOSAqL1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbn0iXX0= */"] });
    return LoadingSpinnerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-spinner',
                templateUrl: './loading-spinner.component.html',
                styleUrls: ['./loading-spinner.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/player/player.ts":
/*!*********************************************!*\
  !*** ./src/app/components/player/player.ts ***!
  \*********************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core */ "./node_modules/@babylonjs/core/index.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/utils */ "./src/app/common/utils.ts");
/* harmony import */ var _models_particle_trail_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/particle-trail.model */ "./src/app/models/particle-trail.model.ts");




var Player = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Player, _super);
    function Player(scene, maxZVel, maxYRot, maxZRot, zRotRate, input, particle, model) {
        var _this = _super.call(this, 'player', scene) || this;
        _this.input = input;
        _this.particle = particle;
        _this.model = model;
        _this.zVel = 0;
        _this.yRot = 0;
        _this.zRotRate = 0;
        _this.PITCH_TILT = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Vector3"](_common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].degreesToRads(15), 0, 0);
        _this.scene = scene;
        _this.maxZVel = maxZVel;
        _this.maxYRot = maxYRot;
        _this.maxZRot = maxZRot;
        _this.zRotRate = zRotRate;
        _this.mesh = scene.getMeshByID('player');
        _this.mesh.setParent(_this);
        _this.initEngineTrails();
        console.log(_this.maxZRot);
        return _this;
    }
    Object.defineProperty(Player.prototype, "playerMesh", {
        get: function () {
            return this.mesh;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.thrust = function (zRate) {
        if (this.input.keyPressed('w')) {
            this.zVel += zRate;
            if (this.zVel > this.maxZVel) {
                this.zVel = this.maxZVel;
            }
            this.translate(_babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Axis"].Z, this.zVel, _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Space"].LOCAL);
        }
        else {
            this.zVel -= zRate;
            if (this.zVel < 0) {
                this.zVel = 0;
            }
            this.translate(_babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Axis"].Z, this.zVel, _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Space"].LOCAL);
        }
    };
    Player.prototype.turnLeft = function (yRotRate) {
        if (this.input.keyPressed('a')) {
            if (this.yRot - yRotRate < -this.maxYRot) {
                this.yRot = -this.maxYRot;
            }
            else {
                this.yRot -= yRotRate;
            }
            this.rotation.y += this.yRot;
            if (this.rotation.z + this.zRotRate > this.maxZRot) {
                this.rotation.z = this.maxZRot;
            }
            else {
                this.rotation.z += this.zRotRate;
            }
        }
        else if (!this.input.keyPressed('d')) {
            if (this.yRot < 0) {
                if (this.yRot + yRotRate > 0) {
                    this.yRot = 0;
                }
                else {
                    this.yRot += yRotRate;
                }
                this.rotation.y += this.yRot;
            }
            if (this.rotation.z > 0) {
                if (this.rotation.z - this.zRotRate < 0) {
                    this.rotation.z = 0;
                }
                else {
                    this.rotation.z -= this.zRotRate;
                }
            }
        }
    };
    Player.prototype.turnRight = function (yRotRate) {
        if (this.input.keyPressed('d')) {
            if (this.yRot + yRotRate > this.maxYRot) {
                this.yRot = this.maxYRot;
            }
            else {
                this.yRot += yRotRate;
            }
            this.rotation.y += this.yRot;
            if (this.rotation.z - this.zRotRate < -this.maxZRot) {
                this.rotation.z = -this.maxZRot;
            }
            else {
                this.rotation.z -= this.zRotRate;
            }
        }
        else if (!this.input.keyPressed('a')) {
            if (this.yRot > 0) {
                if (this.yRot - yRotRate < 0) {
                    this.yRot = 0;
                }
                else {
                    this.yRot -= yRotRate;
                }
                this.rotation.y += this.yRot;
            }
            if (this.rotation.z < 0) {
                if (this.rotation.z + this.zRotRate > 0) {
                    this.rotation.z = 0;
                }
                else {
                    this.rotation.z += this.zRotRate;
                }
            }
        }
    };
    Player.prototype.toggleTrails = function () {
        if (this.input.keyPressed('w')) {
            this.lEng.start();
            this.rEng.start();
        }
        else {
            this.lEng.stop();
            this.rEng.stop();
        }
    };
    Player.prototype.initEngineTrails = function () {
        this.lEng = this.particle.createParticleTrail(this.scene, new _models_particle_trail_model__WEBPACK_IMPORTED_MODULE_3__["ParticleTrailModel"]({
            name: 'lEng',
            minEmitBox: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 1.3, 0),
            maxEmitBox: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, -1.3, 0),
            pTextureUrl: 'assets/textures/plane_trail/plane_trail.jpg',
            direction1: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, _common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].degreesToRads(0), 0),
            direction2: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, _common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].degreesToRads(0), 0),
            color1: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Color4"](0, 0.4, 1, 1),
            color2: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Color4"](1, 0.4, 0, 1),
            colorDead: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Color4"](0, 0, 0, 0),
            emitRate: 1000,
            minLifeTime: 0.2,
            maxLifeTime: 0.4,
            minSize: 0.001,
            maxSize: 0.03,
            minEmitPower: 1,
            maxEmitPower: 3,
            updateSpeed: 0.001,
            emitter: this.scene.getMeshByID('left_engine'),
            gpuCap: 2000,
            cpuCap: 2000
        }));
        this.rEng = this.particle.createParticleTrail(this.scene, new _models_particle_trail_model__WEBPACK_IMPORTED_MODULE_3__["ParticleTrailModel"]({
            name: 'rEng',
            minEmitBox: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 1.3, 0),
            maxEmitBox: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, -1.3, 0),
            pTextureUrl: 'assets/textures/plane_trail/plane_trail.jpg',
            direction1: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, _common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].degreesToRads(0), 0),
            direction2: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, _common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].degreesToRads(0), 0),
            color1: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Color4"](0, 0.4, 1, 1),
            color2: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Color4"](1, 0.4, 0, 1),
            colorDead: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Color4"](0, 0, 0, 0),
            emitRate: 1000,
            minLifeTime: 0.2,
            maxLifeTime: 0.4,
            minSize: 0.001,
            maxSize: 0.03,
            minEmitPower: 1,
            maxEmitPower: 3,
            updateSpeed: 0.001,
            emitter: this.scene.getMeshByID('right_engine'),
            gpuCap: 2000,
            cpuCap: 2000
        }));
    };
    Player.prototype.animateEngines = function () {
        this.model.rotateMesh(this.scene, 'left_engine', new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 1, 1), 3, this.scene.getEngine().getFps());
        this.model.rotateMesh(this.scene, 'right_engine', new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, -1, -1), 3, this.scene.getEngine().getFps());
    };
    Player.prototype.moveGuns = function () {
        this.model.rotateMesh(this.scene, 'left_gun', new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 1, 1), 3, this.scene.getEngine().getFps());
    };
    return Player;
}(_babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["TransformNode"]));



/***/ }),

/***/ "./src/app/models/particle-trail.model.ts":
/*!************************************************!*\
  !*** ./src/app/models/particle-trail.model.ts ***!
  \************************************************/
/*! exports provided: ParticleTrailModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticleTrailModel", function() { return ParticleTrailModel; });
var ParticleTrailModel = /** @class */ (function () {
    function ParticleTrailModel(init) {
        Object.assign(this, init);
    }
    return ParticleTrailModel;
}());



/***/ }),

/***/ "./src/app/scenes/solar-system/solar-system.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/scenes/solar-system/solar-system.component.ts ***!
  \***************************************************************/
/*! exports provided: SolarSystemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolarSystemComponent", function() { return SolarSystemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core */ "./node_modules/@babylonjs/core/index.js");
/* harmony import */ var _babylonjs_core_Debug_debugLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babylonjs/core/Debug/debugLayer */ "./node_modules/@babylonjs/core/Debug/debugLayer.js");
/* harmony import */ var _babylonjs_inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babylonjs/inspector */ "./node_modules/@babylonjs/inspector/babylon.inspector.bundle.max.js");
/* harmony import */ var _babylonjs_inspector__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_inspector__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/utils */ "./src/app/common/utils.ts");
/* harmony import */ var _components_player_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/player/player */ "./src/app/components/player/player.ts");
/* harmony import */ var _models_particle_trail_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @models/particle-trail.model */ "./src/app/models/particle-trail.model.ts");
/* harmony import */ var _services_render_engine_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/render-engine.service */ "./src/app/services/render-engine.service.ts");
/* harmony import */ var _services_model_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/model.service */ "./src/app/services/model.service.ts");
/* harmony import */ var _services_camera_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/camera.service */ "./src/app/services/camera.service.ts");
/* harmony import */ var _services_input_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/input.service */ "./src/app/services/input.service.ts");
/* harmony import */ var _services_particle_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/particle.service */ "./src/app/services/particle.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/loading-spinner/loading-spinner.component */ "./src/app/components/loading-spinner/loading-spinner.component.ts");
















var _c0 = ["rCanvas"];
function SolarSystemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.initialised ? "visible" : "hidden");
} }
var EARTH_ROTATE_PERIOD = -120;
var FOV = 50;
var CAMERA_DISTANCE = -1.5;
var CAMERA_HEIGHT = 0.3;
var THRUST_RATE = 0.0001;
var VEL_LAG = 0.07;
var MAX_Z_VEL = 0.03;
var TURN_RATE = 0.0001;
var ROT_LAG = 0.05;
var MAX_Y_ROT = 0.008;
var MAX_Z_ROT = _common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].degreesToRads(45);
var Z_ROT_RATE = 0.005;
var SolarSystemComponent = /** @class */ (function () {
    function SolarSystemComponent(renderEngine, modelService, camera, input, particle) {
        this.renderEngine = renderEngine;
        this.modelService = modelService;
        this.camera = camera;
        this.input = input;
        this.particle = particle;
        this.initialised = false;
        this.loading = true;
    }
    SolarSystemComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initialised = true;
        }, 500);
    };
    SolarSystemComponent.prototype.ngAfterViewInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.renderEngine.createScene(this.canvasRef.nativeElement)];
                    case 1:
                        _a.scene = _b.sent();
                        this.renderEngine.addInspector(this.scene);
                        return [4 /*yield*/, this.loadSceneObjects()];
                    case 2:
                        _b.sent();
                        this.player = new _components_player_player__WEBPACK_IMPORTED_MODULE_6__["Player"](this.scene, MAX_Z_VEL, MAX_Y_ROT, MAX_Z_ROT, Z_ROT_RATE, this.input, this.particle, this.modelService);
                        this.playerCam = this.camera.createChaseCam(this.scene, this.player, CAMERA_HEIGHT, CAMERA_DISTANCE, FOV);
                        this.input.initInput(this.scene);
                        this.renderEngine.startEngine(this.scene);
                        this.updateScene();
                        setTimeout(function () {
                            _this.initialised = false;
                            _this.loading = false;
                        }, 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    SolarSystemComponent.prototype.loadSceneObjects = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var sceneContainer;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modelService.createSkybox(this.scene, 'assets/textures/skybox/skybox');
                        return [4 /*yield*/, _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["SceneLoader"].LoadAssetContainerAsync('assets/models/solar_system/', 'solar_system.babylon', this.scene)];
                    case 1:
                        sceneContainer = _a.sent();
                        sceneContainer.addAllToScene();
                        this.createCloudInstances();
                        this.loadPlane();
                        this.createLighting(this.scene);
                        return [2 /*return*/];
                }
            });
        });
    };
    SolarSystemComponent.prototype.updateScene = function () {
        var _this = this;
        this.updateInput();
        this.scene.registerBeforeRender(function () {
            _this.updateModels();
            _this.camera.updateChaseCam(_this.scene, _this.player, VEL_LAG, ROT_LAG);
        });
    };
    SolarSystemComponent.prototype.updateInput = function () {
        var _this = this;
        this.scene.onBeforeRenderObservable.add(function () {
            _this.player.thrust(THRUST_RATE);
            _this.player.turnLeft(TURN_RATE);
            _this.player.turnRight(TURN_RATE);
            _this.player.toggleTrails();
        });
    };
    SolarSystemComponent.prototype.updateModels = function () {
        // BODY ROTATIONS
        this.modelService.rotateMesh(this.scene, 'earth', new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 1, 0), EARTH_ROTATE_PERIOD, this.renderEngine.engine.getFps());
        this.modelService.rotateMesh(this.scene, 'volcano_world', new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 1, 0), EARTH_ROTATE_PERIOD, this.renderEngine.engine.getFps());
        // EARTH SATS
        this.modelService.rotateTransformNode(this.scene, 'coPlane', new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 1, 0), 30, this.renderEngine.engine.getFps());
        this.modelService.rotateTransformNode(this.scene, 'coMoon', new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 1, 0), 30, this.renderEngine.engine.getFps());
        this.player.animateEngines();
    };
    SolarSystemComponent.prototype.createCloudInstances = function () {
        var cloud = this.scene.getMeshByID('clouds');
        var radius = 0.6;
        cloud.isVisible = false;
        for (var i = 0; i < 20; i++) {
            var newCloud = cloud.createInstance('cloud' + i);
            newCloud.setParent(this.scene.getMeshByID('earth'));
            var theta = _common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].degreesToRads(_common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].random(360));
            var phi = _common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].degreesToRads(_common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].random(180));
            newCloud.position = _common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].pointOnSphere(radius, phi, theta);
            var scale = _common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].randomInRange(0.4, 0.6);
            newCloud.scaling = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](scale, scale, scale);
            newCloud.rotation = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, -theta, -phi);
        }
    };
    SolarSystemComponent.prototype.loadPlane = function () {
        var plane = this.scene.getMeshByID('plane');
        var coPlane = this.modelService.createTransformNode(this.scene, 'plane', 'earth');
        coPlane.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0);
        coPlane.rotation = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0);
        plane.rotation = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0);
        plane.setParent(coPlane);
        var lEngine = this.particle.createParticleTrail(this.scene, new _models_particle_trail_model__WEBPACK_IMPORTED_MODULE_7__["ParticleTrailModel"]({
            name: 'lEng',
            minEmitBox: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0.02, -0.01, 0.002),
            maxEmitBox: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0.03, -0.015, 0.003),
            pTextureUrl: 'assets/textures/plane_trail/plane_trail.jpg',
            direction1: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, _common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].degreesToRads(0), 0),
            direction2: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, _common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].degreesToRads(0), 0),
            color1: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Color4"](1, 1, 1, 1.0),
            color2: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Color4"](0.5, 0.5, 0.5, 1.0),
            colorDead: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Color4"](0, 0, 0, 0.0),
            emitRate: 600,
            minLifeTime: 0.2,
            maxLifeTime: 0.4,
            minSize: 0.01,
            maxSize: 0.02,
            minEmitPower: 1,
            maxEmitPower: 3,
            updateSpeed: 0.001,
            emitter: plane,
            gpuCap: 2000,
            cpuCap: 2000
        }));
        lEngine.start();
        var rEngine = this.particle.createParticleTrail(this.scene, new _models_particle_trail_model__WEBPACK_IMPORTED_MODULE_7__["ParticleTrailModel"]({
            name: 'rEng',
            minEmitBox: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0.02, 0.01, 0.002),
            maxEmitBox: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0.03, 0.015, 0.003),
            pTextureUrl: 'assets/textures/plane_trail/plane_trail.jpg',
            direction1: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, _common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].degreesToRads(0), 0),
            direction2: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, _common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].degreesToRads(0), 0),
            color1: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Color4"](1, 1, 1, 1.0),
            color2: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Color4"](0.5, 0.5, 0.5, 1.0),
            colorDead: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Color4"](0, 0, 0, 0.0),
            emitRate: 600,
            minLifeTime: 0.2,
            maxLifeTime: 0.4,
            minSize: 0.01,
            maxSize: 0.02,
            minEmitPower: 1,
            maxEmitPower: 3,
            updateSpeed: 0.001,
            emitter: plane,
            gpuCap: 2000,
            cpuCap: 2000
        }));
        rEngine.start();
    };
    SolarSystemComponent.prototype.createLighting = function (scene) {
        var ambient = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["HemisphericLight"]('ambientLight', new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0), scene);
        ambient.intensity = 0.6;
        var sun = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["PointLight"]('sunLight', new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0), scene);
        sun.intensity = 50000;
        sun.diffuse = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Color3"](1, 1, 1);
        sun.specular = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Color3"](1, 0, 0);
        sun.parent = this.scene.getMeshByID('sun');
        sun.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](125, 0, 8);
    };
    SolarSystemComponent.ɵfac = function SolarSystemComponent_Factory(t) { return new (t || SolarSystemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_render_engine_service__WEBPACK_IMPORTED_MODULE_8__["RenderEngineService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_model_service__WEBPACK_IMPORTED_MODULE_9__["ModelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_camera_service__WEBPACK_IMPORTED_MODULE_10__["CameraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_input_service__WEBPACK_IMPORTED_MODULE_11__["InputService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_particle_service__WEBPACK_IMPORTED_MODULE_12__["ParticleService"])); };
    SolarSystemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SolarSystemComponent, selectors: [["app-solar-system"]], viewQuery: function SolarSystemComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvasRef = _t.first);
        } }, decls: 4, vars: 1, consts: [["class", "loading-container", 3, "ngClass", 4, "ngIf"], ["id", "rCanvas"], ["rCanvas", ""], [1, "loading-container", 3, "ngClass"]], template: function SolarSystemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SolarSystemComponent_div_1_Template, 2, 1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "canvas", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_14__["LoadingSpinnerComponent"]], styles: ["div[_ngcontent-%COMP%] {\n  height: 100%;\n  background: transparent;\n}\ndiv[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: cadetblue;\n}\ndiv[_ngcontent-%COMP%]   .loading-container.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.5s ease-in;\n}\ndiv[_ngcontent-%COMP%]   .loading-container.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 0.5s ease-in;\n}\ndiv[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NlbmVzL3NvbGFyLXN5c3RlbS9zb2xhci1zeXN0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNSO0FBQ1E7RUFDSSxVQUFBO0VBQ0EsZ0NBQUE7QUFDWjtBQUVRO0VBQ0ksVUFBQTtFQUNBLGdDQUFBO0FBQVo7QUFJSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRlIiLCJmaWxlIjoic3JjL2FwcC9zY2VuZXMvc29sYXItc3lzdGVtL3NvbGFyLXN5c3RlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgLmxvYWRpbmctY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcblxuICAgICAgICAmLmhpZGRlbiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW47XG4gICAgICAgIH1cblxuICAgICAgICAmLnZpc2libGUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FudmFzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59Il19 */"] });
    return SolarSystemComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SolarSystemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-solar-system',
                templateUrl: './solar-system.component.html',
                styleUrls: ['./solar-system.component.scss']
            }]
    }], function () { return [{ type: _services_render_engine_service__WEBPACK_IMPORTED_MODULE_8__["RenderEngineService"] }, { type: _services_model_service__WEBPACK_IMPORTED_MODULE_9__["ModelService"] }, { type: _services_camera_service__WEBPACK_IMPORTED_MODULE_10__["CameraService"] }, { type: _services_input_service__WEBPACK_IMPORTED_MODULE_11__["InputService"] }, { type: _services_particle_service__WEBPACK_IMPORTED_MODULE_12__["ParticleService"] }]; }, { canvasRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['rCanvas', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/services/camera.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/camera.service.ts ***!
  \********************************************/
/*! exports provided: CameraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraService", function() { return CameraService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _babylonjs_core_Cameras__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Cameras */ "./node_modules/@babylonjs/core/Cameras/index.js");
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core */ "./node_modules/@babylonjs/core/index.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/utils */ "./src/app/common/utils.ts");





var CameraService = /** @class */ (function () {
    function CameraService() {
    }
    CameraService.prototype.createChaseCam = function (scene, player, height, distance, fov) {
        var camRoot = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["TransformNode"]('camRoot', scene);
        camRoot.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0);
        camRoot.rotation = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0);
        var yTilt = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["TransformNode"]('yTilt');
        yTilt.rotation = player.PITCH_TILT;
        yTilt.parent = camRoot;
        var camera = new _babylonjs_core_Cameras__WEBPACK_IMPORTED_MODULE_1__["UniversalCamera"]('chaseCam', new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, height, distance), scene);
        camera.lockedTarget = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](camRoot.position.x, camRoot.position.y + height, camRoot.position.z);
        camera.fov = _common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].degreesToRads(fov);
        camera.parent = yTilt;
        camera.minZ = 0.05;
        camera.maxZ = 1000;
        scene.activeCamera = camera;
        return camera;
    };
    CameraService.prototype.updateChaseCam = function (scene, player, velLag, rotLag) {
        var camRoot = scene.getTransformNodeByID('camRoot');
        camRoot.position = _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"].Lerp(camRoot.position, new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](player.position.x, player.position.y, player.position.z), velLag);
        camRoot.rotation = _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"].Lerp(camRoot.rotation, new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](player.rotation.x, player.rotation.y, 0), rotLag);
    };
    CameraService.ɵfac = function CameraService_Factory(t) { return new (t || CameraService)(); };
    CameraService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CameraService, factory: CameraService.ɵfac, providedIn: 'root' });
    return CameraService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CameraService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/input.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/input.service.ts ***!
  \*******************************************/
/*! exports provided: InputService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputService", function() { return InputService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core */ "./node_modules/@babylonjs/core/index.js");



var InputService = /** @class */ (function () {
    function InputService() {
        this.inputMap = {};
    }
    InputService.prototype.initInput = function (scene) {
        var _this = this;
        scene.actionManager = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["ActionManager"](scene);
        scene.actionManager.registerAction(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["ExecuteCodeAction"](_babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["ActionManager"].OnKeyDownTrigger, function (evt) {
            _this.inputMap[evt.sourceEvent.key] = evt.sourceEvent.type === 'keydown';
        }));
        scene.actionManager.registerAction(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["ExecuteCodeAction"](_babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["ActionManager"].OnKeyUpTrigger, function (evt) {
            _this.inputMap[evt.sourceEvent.key] = evt.sourceEvent.type === 'keydown';
        }));
    };
    InputService.prototype.keyPressed = function (key) {
        return this.inputMap[key];
    };
    InputService.ɵfac = function InputService_Factory(t) { return new (t || InputService)(); };
    InputService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InputService, factory: InputService.ɵfac, providedIn: 'root' });
    return InputService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/model.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/model.service.ts ***!
  \*******************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core */ "./node_modules/@babylonjs/core/index.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/utils */ "./src/app/common/utils.ts");




var ModelService = /** @class */ (function () {
    function ModelService() {
    }
    ModelService.prototype.loadModel = function (scene, url, model) {
        return new Promise(function (resolve) {
            _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["SceneLoader"].ImportMesh('', url, model, scene, function (meshes) {
                resolve(meshes);
            });
        });
    };
    ModelService.prototype.createSkybox = function (scene, url) {
        var sbMesh = _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["MeshBuilder"].CreateBox('skyBox', { size: 1000 }, scene);
        var sbMat = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["StandardMaterial"]('skyBox', scene);
        sbMat.backFaceCulling = false;
        sbMesh.material = sbMat;
        sbMesh.infiniteDistance = true;
        sbMat.reflectionTexture = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["CubeTexture"](url, scene);
        sbMat.reflectionTexture.coordinatesMode = _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Texture"].SKYBOX_MODE;
        sbMat.disableLighting = true;
    };
    ModelService.prototype.createTransformNode = function (scene, mesh, parent) {
        var m = scene.getMeshByID(mesh);
        var co = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["TransformNode"]("co" + _common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].capitaliseString(mesh), scene);
        co.setParent(scene.getMeshByID(parent) || null);
        co.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 0);
        m.setParent(co);
        return co;
    };
    ModelService.prototype.rotateMesh = function (scene, mesh, axis, rotPeriod, fps) {
        var _a;
        (_a = scene.getMeshByID(mesh)) === null || _a === void 0 ? void 0 : _a.rotate(axis, _common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].orbitalPeriodSecs(rotPeriod, fps));
    };
    ModelService.prototype.rotateTransformNode = function (scene, node, axis, rotPeriod, fps) {
        var _a;
        (_a = scene.getTransformNodeByID(node)) === null || _a === void 0 ? void 0 : _a.rotate(axis, _common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].orbitalPeriodSecs(rotPeriod, fps));
    };
    ModelService.ɵfac = function ModelService_Factory(t) { return new (t || ModelService)(); };
    ModelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModelService, factory: ModelService.ɵfac, providedIn: 'root' });
    return ModelService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/particle.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/particle.service.ts ***!
  \**********************************************/
/*! exports provided: ParticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticleService", function() { return ParticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core */ "./node_modules/@babylonjs/core/index.js");



var ParticleService = /** @class */ (function () {
    function ParticleService() {
    }
    ParticleService.prototype.createParticleTrail = function (scene, pModel) {
        var ps = _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["GPUParticleSystem"].IsSupported
            ? new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["GPUParticleSystem"](pModel.name, { capacity: pModel.gpuCap }, scene)
            : new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["ParticleSystem"](pModel.name, pModel.cpuCap, scene);
        ps.minEmitBox = pModel.minEmitBox;
        ps.maxEmitBox = pModel.maxEmitBox;
        ps.particleTexture = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Texture"](pModel.pTextureUrl, scene);
        ps.direction1 = pModel.direction1;
        ps.direction2 = pModel.direction2;
        ps.color1 = pModel.color1;
        ps.color2 = pModel.color2;
        ps.colorDead = pModel.colorDead;
        ps.emitRate = pModel.emitRate;
        ps.minLifeTime = pModel.minLifeTime;
        ps.maxLifeTime = pModel.maxLifeTime;
        ps.minEmitPower = pModel.minEmitPower;
        ps.maxEmitPower = pModel.maxEmitPower;
        ps.minSize = pModel.minSize;
        ps.maxSize = pModel.maxSize;
        ps.updateSpeed = pModel.updateSpeed;
        ps.emitter = pModel.emitter;
        return ps;
    };
    ParticleService.ɵfac = function ParticleService_Factory(t) { return new (t || ParticleService)(); };
    ParticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ParticleService, factory: ParticleService.ɵfac, providedIn: 'root' });
    return ParticleService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/render-engine.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/render-engine.service.ts ***!
  \***************************************************/
/*! exports provided: RenderEngineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderEngineService", function() { return RenderEngineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core */ "./node_modules/@babylonjs/core/index.js");



var RenderEngineService = /** @class */ (function () {
    function RenderEngineService(ngZone) {
        this.ngZone = ngZone;
    }
    RenderEngineService.prototype.createScene = function (canvas) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.engine = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Engine"](canvas, true);
            var scene = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Scene"](_this.engine);
            resolve(scene);
        });
    };
    RenderEngineService.prototype.startEngine = function (scene) {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            window.addEventListener('resize', function () { return _this.engine.resize(); });
            _this.engine.runRenderLoop(function () {
                scene.render();
            });
        });
    };
    RenderEngineService.prototype.addInspector = function (scene) {
        // INSPECTOR
        window.addEventListener('keydown', function (ev) {
            if (ev.ctrlKey && ev.key === 'i') {
                if (scene.debugLayer.isVisible()) {
                    scene.debugLayer.hide();
                }
                else {
                    scene.debugLayer.show();
                }
            }
        });
    };
    RenderEngineService.ɵfac = function RenderEngineService_Factory(t) { return new (t || RenderEngineService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
    RenderEngineService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RenderEngineService, factory: RenderEngineService.ɵfac, providedIn: 'root' });
    return RenderEngineService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenderEngineService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\github_projects\waynepovey-portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map