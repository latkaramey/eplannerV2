(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/contact-us/contact-us.module": [
		"./src/app/modules/contact-us/contact-us.module.ts",
		"modules-contact-us-contact-us-module"
	],
	"./modules/gantt-charts/gantt-chart.module": [
		"./src/app/modules/gantt-charts/gantt-chart.module.ts",
		"modules-gantt-charts-gantt-chart-module"
	],
	"./modules/resource/resource.module": [
		"./src/app/modules/resource/resource.module.ts",
		"modules-resource-resource-module"
	],
	"./modules/tasks/tasks.module": [
		"./src/app/modules/tasks/tasks.module.ts",
		"modules-tasks-tasks-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _modules_upload_plan_upload_plan_upload_plan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/upload-plan/upload-plan/upload-plan.component */ "./src/app/modules/upload-plan/upload-plan/upload-plan.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");








var routes = [
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'index',
        component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"]
    },
    {
        path: 'contact-us',
        loadChildren: './modules/contact-us/contact-us.module#ContactUsModule'
    },
    {
        path: 'resource', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        loadChildren: './modules/resource/resource.module#ResourceModule'
    },
    {
        path: 'charts', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        loadChildren: './modules/gantt-charts/gantt-chart.module#GanttChartModule'
    },
    {
        path: 'task', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        loadChildren: './modules/tasks/tasks.module#TaskModule'
    },
    {
        path: 'plan', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        component: _modules_upload_plan_upload_plan_upload_plan_component__WEBPACK_IMPORTED_MODULE_5__["UploadPlanComponent"]
    },
    {
        path: "",
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<app-nav-menu></app-nav-menu>\n    <!--<div class=\"container\"> -->\n        <div style=\"padding:15px!important\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n<footer class=\"bg-dark fixed-bottom\" style=\"color: white;background-color: #212529;\">\n    &nbsp;Copyright © www.e-planner.co.in(2020)\n    <div class=\"pull-right\">\n        Have any queries? \n        <a href=\"#\" style=\"color: white;\"\n        [routerLink]=\"['/contact-us/contact-details']\">Contact Us</a>&nbsp;&nbsp;\n    </div>\n</footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'e-planner';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav-menu/nav-menu.component */ "./src/app/components/nav-menu/nav-menu.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/http.client.service */ "./src/app/services/http.client.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_link_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/link.service */ "./src/app/services/link.service.ts");
/* harmony import */ var _services_resource_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/resource.service */ "./src/app/services/resource.service.ts");
/* harmony import */ var _modules_upload_plan_upload_plan_upload_plan_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/upload-plan/upload-plan/upload-plan.component */ "./src/app/modules/upload-plan/upload-plan/upload-plan.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_BasicAuthHttpInterceptorService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/BasicAuthHttpInterceptorService */ "./src/app/services/BasicAuthHttpInterceptorService.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_5__["NavMenuComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _modules_upload_plan_upload_plan_upload_plan_component__WEBPACK_IMPORTED_MODULE_13__["UploadPlanComponent"],
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_16__["IndexComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]
            ],
            providers: [_services_http_client_service__WEBPACK_IMPORTED_MODULE_8__["HttpClientService"], _services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"], _services_link_service__WEBPACK_IMPORTED_MODULE_11__["LinkService"], _services_resource_service__WEBPACK_IMPORTED_MODULE_12__["ResourceService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _services_BasicAuthHttpInterceptorService__WEBPACK_IMPORTED_MODULE_15__["BasicAuthHttpInterceptorService"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/base.page.ts":
/*!******************************!*\
  !*** ./src/app/base.page.ts ***!
  \******************************/
/*! exports provided: BasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePage", function() { return BasePage; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

var BasePage = /** @class */ (function () {
    function BasePage(baseTitle) {
        this.baseTitle = baseTitle;
        baseTitle.setTitle(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appTitle);
    }
    BasePage.prototype.setTitle = function (title) {
        if (title) {
            title += " | ";
            this.baseTitle.setTitle(title + _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appTitle);
        }
    };
    return BasePage;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div class=\"row\">\n  <div class=\"list-group\" style=\"max-width: 55rem;\">\n    <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">Day's Tasks</h5>\n        <small>Due in 5 mins</small>\n      </div>\n      <p class=\"mb-1\">TFIT-3423</p>\n      <small>Requirement analysis to be completed</small>\n    </a>\n    <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\"></h5>\n        <small class=\"text-muted\">Due in 5 hrs</small>\n      </div>\n      <p class=\"mb-1\">TFIT-7878</p>\n      <small class=\"text-muted\">Sending the daily report of activities</small>\n    </a>\n  </div>&nbsp;\n  <div class=\"list-group\" style=\"max-width: 25rem;\">\n    <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">Week's Tasks</h5>\n        <small>Due in 5 days</small>\n      </div>\n      <p class=\"mb-1\">TFIT-3423</p>\n      <small>Requirement analysis to be completed</small>\n    </a>\n    <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\"></h5>\n        <small class=\"text-muted\">Due in 4 days</small>\n      </div>\n      <p class=\"mb-1\">TFIT-7878</p>\n      <small class=\"text-muted\">Sending the daily report of activities</small>\n    </a>\n  </div>\n</div>\n<br>\n<div class=\"jumbotron\">\n  <h4>Hello, Amod!</h4>\n  <p class=\"lead\">This planner allows you to create, plan and manage events or activities of all kinds, leisure and professional</p>\n  <hr class=\"my-4\">\n  <p>Enables advanced spacial visualization</p>\n  <p class=\"lead\">\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Go to My Schedule</a>\n  </p>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base.page */ "./src/app/base.page.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var HomeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HomeComponent, _super);
    function HomeComponent(title) {
        var _this = _super.call(this, title) || this;
        _this.title = title;
        _super.prototype.setTitle.call(_this, "Home");
        return _this;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], HomeComponent);
    return HomeComponent;
}(src_app_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ }),

/***/ "./src/app/components/index/index.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/index/index.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/index/index.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/index/index.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n\n  <div class=\"row\">        \n    <div class=\"col-md-3 col-xs-6\">\n          <img class=\"card-img-top\" src=\"assets/images/planning_time.jpg\"/>\n      </div>\n      <div class=\"col-md-9 col-xs-6\">\n      <h3 class=\"display-6\">Bringing digital experience to shop floor</h3>\n      <p class=\"lead\">\n          E-Planner, software platform to enhance your shop floor productivity to its true potential. \n          Manage your pipeline and job production in hand right from your desk or while on go. \n          Partner with us to take advantage of digitization to transform your production scheduling \n          to next level...\n      </p>\n      <p class=\"lead\">\n        <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n      </p>\n    </div>\n </div>\n</div>\n<div class=\"card-columns\">\n  <div class=\"card bg-light\">\n    <div class=\"card\" style=\"width:100%\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Schedule - Gantt Chart</h4>\n        <p class=\"card-text\">About Schedule Gantt Chart</p>\n        <a href=\"#\" class=\"btn btn-primary\">More...</a>\n      </div>\n      <img class=\"card-img-top\" src=\"assets/images/gantt_chart.jpg\" alt=\"Card image\">\n    </div>\n  </div>\n  <div class=\"card bg-light\">\n    <div class=\"card\" style=\"width:100%\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Resource - Loading</h4>\n        <p class=\"card-text\">About Resource Loading</p>\n        <a href=\"#\" class=\"btn btn-primary\">More...</a>\n      </div>\n      <img class=\"card-img-top\" src=\"assets/images/resource_loading.jpg\" alt=\"Card image\">\n    </div>\n  </div>\n  <div class=\"card bg-light\">\n    <div class=\"card\" style=\"width:100%\">\n      \n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Operator View</h4>\n        <p class=\"card-text\">About Operator View</p>\n        <a href=\"#\" class=\"btn btn-primary\">More...</a>\n      </div>\n      <img class=\"card-img-top\" src=\"assets/images/operator_view.jpg\" alt=\"Card image\">\n    </div>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/components/index/index.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/components/index/index.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login{\n    padding-top: 72px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xuICAgIHBhZGRpbmctdG9wOiA3MnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n\n  <div class=\"row\">        \n    <div class=\"col-md-3 col-xs-6\">\n          <img class=\"card-img-top\" src=\"assets/images/planning_time.jpg\"/>\n      </div>\n      <div class=\"col-md-9 col-xs-6\">\n      <h3 class=\"display-6\">Bringing digital experience to shop floor</h3>\n      <p class=\"lead\">\n          E-Planner, software platform to enhance your shop floor productivity to its true potential. \n          Manage your pipeline and job production in hand right from your desk or while on go. \n          Partner with us to take advantage of digitization to transform your production scheduling \n          to next level...\n      </p>\n      <p class=\"lead\">\n        <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n      </p>\n    </div>\n </div>\n</div>\n<div class=\"card-columns\">\n  <div class=\"card bg-light\">\n    <div class=\"card\" style=\"width:100%\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Schedule - Gantt Chart</h4>\n        <p class=\"card-text\">About Schedule Gantt Chart</p>\n        <a href=\"#\" class=\"btn btn-primary\">More...</a>\n      </div>\n      <img class=\"card-img-top\" src=\"assets/images/gantt_chart.jpg\" alt=\"Card image\">\n    </div>\n  </div>\n  <div class=\"card bg-light\">\n    <div class=\"card\" style=\"width:100%\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Resource - Loading</h4>\n        <p class=\"card-text\">About Resource Loading</p>\n        <a href=\"#\" class=\"btn btn-primary\">More...</a>\n      </div>\n      <img class=\"card-img-top\" src=\"assets/images/resource_loading.jpg\" alt=\"Card image\">\n    </div>\n  </div>\n  <!-- <div class=\"card bg-light\">\n    <div class=\"card\" style=\"width:100%\">\n      \n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Operator View</h4>\n        <p class=\"card-text\">About Operator View</p>\n        <a href=\"#\" class=\"btn btn-primary\">More...</a>\n      </div>\n      <img class=\"card-img-top\" src=\"assets/images/operator_view.jpg\" alt=\"Card image\">\n    </div>\n  </div> -->\n  <div class=\"card\" style=\"width:100%\">\n      \n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Login</h4>\n        <form #authForm=\"ngForm\" (ngSubmit)=\"onSubmit(authForm)\">\n      \n          <div class=\"form-group\">\n            <label for=\"username\">Username*</label>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n              </div>\n              <input\n                type=\"text\"\n                id=\"text\"\n                class=\"form-control\"\n                ngModel\n                name=\"username\"\n                minlength=\"3\"\n                placeholder=\"Username\"\n                value=\"admin\"\n              />\n            </div>  \n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password*</label>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"fa fa-key\"></i></span>\n              </div>\n              <input\n                type=\"password\"\n                id=\"password\"\n                class=\"form-control\"\n                ngModel\n                name=\"password\"\n                required\n                minlength=\"3\"\n                placeholder=\"Password\"\n                value=\"admin\"\n              />\n            </div>\n          </div>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"\" >\n              Remember me\n            </label>\n          </div>\n          <div>\n            <button\n              class=\"btn btn-primary\"\n              type=\"submit\"\n              [disabled]=\"!authForm.valid\">Login</button>&nbsp;\n              <button type=\"button\" class=\"btn btn-outline-primary\">Forgot Password</button>\n          </div>\n        </form>\n      </div>\n      \n    </div>\n  </div> \n\n\n\n\n\n\n\n  "

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_ip_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ip-service.service */ "./src/app/services/ip-service.service.ts");





var LoginComponent = /** @class */ (function () {
    //ipAddress:string ='0.0.0.0';
    function LoginComponent(authenticationService, router, ipService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.ipService = ipService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        //this.getIP();
    };
    // getIP()
    // {
    //   this.ipService.getIPAddress().subscribe((res:any)=>{
    //     this.ipAddress=res.ip;
    //   });
    // }
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!form.valid) {
            return;
        }
        var username = form.value.username;
        var password = form.value.password;
        sessionStorage.clear();
        this.authenticationService.authenticationService(username, password);
        setTimeout(function () {
            if (sessionStorage.getItem('role') === 'ROLE_ADMIN') {
                _this.router.navigate(['/plan']);
            }
            else {
                _this.router.navigate(['/home']);
            }
        }, 2000);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_ip_service_service__WEBPACK_IMPORTED_MODULE_4__["IpServiceService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-menu/nav-menu.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/nav-menu/nav-menu.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/nav-menu/nav-menu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/nav-menu/nav-menu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">dPMS</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n     <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\" >Login</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/home']\" >Home</a>\n      </li>\n\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/resource/show-resource']\">Resource</a>\n      </li> -->\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Upload</a>\n      </li> -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/task/update']\">Operator</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/plan']\">Planning</a>\n      </li>\n      <li class=\"nav-item\"> \n        <a class=\"nav-link\" [routerLink]=\"['/charts/view']\">Schedules</a>\n      </li>\n      <!-- <li class=\"nav-item\"> \n        <a class=\"nav-link\" [routerLink]=\"['/index']\">Index</a>\n      </li> -->\n      <li class=\"nav-item\"> \n        <a class=\"nav-link\" [routerLink]=\"['/contact-us/contact-details']\">Contact Us</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Welcome, John</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/nav-menu/nav-menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-menu/nav-menu.component.ts ***!
  \***********************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(authService) {
        this.authService = authService;
    }
    NavMenuComponent.prototype.ngOnInit = function () {
    };
    NavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/components/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/components/nav-menu/nav-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/models/RawInput.ts":
/*!************************************!*\
  !*** ./src/app/models/RawInput.ts ***!
  \************************************/
/*! exports provided: RawInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawInput", function() { return RawInput; });
var RawInput = /** @class */ (function () {
    function RawInput() {
    }
    return RawInput;
}());



/***/ }),

/***/ "./src/app/models/resourcelib.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/resourcelib.model.ts ***!
  \*********************************************/
/*! exports provided: ResourceLib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceLib", function() { return ResourceLib; });
var ResourceLib = /** @class */ (function () {
    function ResourceLib() {
    }
    return ResourceLib;
}());



/***/ }),

/***/ "./src/app/modules/upload-plan/upload-plan/upload-plan.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/upload-plan/upload-plan/upload-plan.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXBsb2FkLXBsYW4vdXBsb2FkLXBsYW4vdXBsb2FkLXBsYW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/upload-plan/upload-plan/upload-plan.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/upload-plan/upload-plan/upload-plan.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h4 class=\"\">\n  Upload plan\n</h4>\n<p class=\"animated \">Upload your desired plan to scheudle.</p>\n\n<section class=\"section-preview\">\n\n\n  <div class=\"input-group \">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"inputGroupResourceFileAddon01\">Upload Resource Library</span>\n    </div>\n    <div class=\"custom-file\">\n      <input type=\"file\" class=\"custom-file-input\" (change)=\"onResourceFileChange($event.target.files)\">\n      <label class=\"custom-file-label\" #labelResourceImport for=\"importFile\">Choose file</label>\n    </div>\n  </div>\n\n      \n  <div class=\"input-group \">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\n    </div>\n    <div class=\"custom-file\">\n      <input type=\"file\" class=\"custom-file-input\" (change)=\"onFileChange($event.target.files)\">\n      <label class=\"custom-file-label\" #labelImport for=\"importFile\">Choose file</label>\n    </div>\n  </div>\n\n\n  <!-- <p class=\"animated\">Select planning stage.</p>\n  <div >\n    <select class=\"browser-default custom-select\" name=\"selectedStage\"\n    (change)=\"changeStage($event)\">\n      <option selected>Choose your planning stage</option>\n      <option *ngFor=\"let stage of PlanningStages\" [ngValue]=\"stage\">{{stage}}</option>\n    </select>\n  </div> -->\n \n  <div class =\"row p-3\">\n    <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"onSubmit()\">Upload</button>\n  </div>\n</section>\n<html><head><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=utf-8\"><meta name=\"Robots\" content=\"NOINDEX \" /></head><body></body>\n                <script type=\"text/javascript\">\n                 var gearPage = document.getElementById('GearPage');\n                 if(null != gearPage)\n                 {\n                     gearPage.parentNode.removeChild(gearPage);\n                     document.title = \"Error\";\n                 }\n                 </script>\n                 </html>"

/***/ }),

/***/ "./src/app/modules/upload-plan/upload-plan/upload-plan.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/upload-plan/upload-plan/upload-plan.component.ts ***!
  \**************************************************************************/
/*! exports provided: UploadPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPlanComponent", function() { return UploadPlanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base.page */ "./src/app/base.page.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var src_app_models_RawInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/RawInput */ "./src/app/models/RawInput.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_models_resourcelib_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/resourcelib.model */ "./src/app/models/resourcelib.model.ts");








var UploadPlanComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UploadPlanComponent, _super);
    function UploadPlanComponent(title, taskService) {
        var _this = _super.call(this, title) || this;
        _this.title = title;
        _this.taskService = taskService;
        _this.PlanningStages = ["Planned", "Released", "Scheduled"];
        _this.fileUpload = null;
        _this.resourceFileUpload = null;
        _this.excelTask = [];
        _this.excelResourceLib = [];
        _super.prototype.setTitle.call(_this, "Upload-plan");
        return _this;
    }
    UploadPlanComponent.prototype.ngOnInit = function () {
    };
    UploadPlanComponent.prototype.onFileChange = function (files) {
        this.labelImport.nativeElement.innerText = Array.from(files).map(function (f) { return f.name; }).join(', ');
        this.fileUpload = files.item(0);
    };
    UploadPlanComponent.prototype.onResourceFileChange = function (files) {
        this.labelResourceImport.nativeElement.innerText = Array.from(files).map(function (f) { return f.name; }).join(', ');
        this.resourceFileUpload = files.item(0);
        this.processResourceFile();
    };
    UploadPlanComponent.prototype.processResourceFile = function () {
        var _this = this;
        var workBook = null;
        var jsonData = null;
        var reader = new FileReader();
        //const file = ev.target.files[0];
        reader.onload = function (event) {
            var data = reader.result;
            workBook = xlsx__WEBPACK_IMPORTED_MODULE_6__["read"](data, { type: 'binary' });
            jsonData = workBook.SheetNames.reduce(function (initial, name) {
                var sheet = workBook.Sheets[name];
                initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].sheet_to_json(sheet);
                return initial;
            }, {});
            var dataString = JSON.stringify(jsonData);
            //this.tempService.setData(dataString);
            var object = JSON.parse(dataString);
            var arr = object.Resource;
            for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                var resourceElement = arr_1[_i];
                var inputElement = new src_app_models_resourcelib_model__WEBPACK_IMPORTED_MODULE_7__["ResourceLib"]();
                inputElement.key = resourceElement.SrNo;
                inputElement.department = resourceElement.Department;
                inputElement.resourceName = resourceElement.ResourceName;
                _this.excelResourceLib.push(inputElement);
            }
            _this.taskService.insertResourceLib(_this.excelResourceLib);
            // console.log(this.task.progress);
            // document.getElementById('output').innerHTML = dataString.slice(0, 300).concat("...");
            // this.setDownload(dataString);
        };
        reader.readAsBinaryString(this.resourceFileUpload);
    };
    UploadPlanComponent.prototype.processFile = function () {
        var _this = this;
        var workBook = null;
        var jsonData = null;
        var reader = new FileReader();
        //const file = ev.target.files[0];
        reader.onload = function (event) {
            var data = reader.result;
            workBook = xlsx__WEBPACK_IMPORTED_MODULE_6__["read"](data, { type: 'binary' });
            jsonData = workBook.SheetNames.reduce(function (initial, name) {
                var sheet = workBook.Sheets[name];
                initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].sheet_to_json(sheet);
                return initial;
            }, {});
            var dataString = JSON.stringify(jsonData);
            //this.tempService.setData(dataString);
            var object = JSON.parse(dataString);
            console.dir(object);
            var arr = object.Process;
            for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
                var taskElement = arr_2[_i];
                var inputElement = new src_app_models_RawInput__WEBPACK_IMPORTED_MODULE_5__["RawInput"]();
                inputElement.project = 'Planning';
                inputElement.workOrder = taskElement.WorkOrder;
                inputElement.operation = taskElement.Operation;
                inputElement.startDate = taskElement.EarliestStartdate;
                inputElement.estimatedTime = taskElement.Estimatedtime;
                inputElement.poDetails = taskElement.PODetails;
                inputElement.priority = taskElement.priority;
                inputElement.setupTime = taskElement.Setuptime;
                inputElement.tearDownTime = taskElement.Teardowntime;
                inputElement.transferTime = taskElement.Transfertime;
                inputElement.predecessor = taskElement.Predecessor;
                inputElement.resourceGroup = taskElement.Resourcegroup;
                //inputElement.resource = taskElement.Resource;
                _this.excelTask.push(inputElement);
            }
            _this.taskService.insertAll(_this.excelTask, _this.selectedStage);
            // console.log(this.task.progress);
            // document.getElementById('output').innerHTML = dataString.slice(0, 300).concat("...");
            // this.setDownload(dataString);
        };
        reader.readAsBinaryString(this.fileUpload);
    };
    UploadPlanComponent.prototype.changeStage = function (ev) {
        this.selectedStage = ev.target.value;
    };
    UploadPlanComponent.prototype.onSubmit = function () {
        this.processFile();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('labelImport'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UploadPlanComponent.prototype, "labelImport", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('labelResourceImport'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UploadPlanComponent.prototype, "labelResourceImport", void 0);
    UploadPlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-plan',
            template: __webpack_require__(/*! ./upload-plan.component.html */ "./src/app/modules/upload-plan/upload-plan/upload-plan.component.html"),
            styles: [__webpack_require__(/*! ./upload-plan.component.css */ "./src/app/modules/upload-plan/upload-plan/upload-plan.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], src_app_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]])
    ], UploadPlanComponent);
    return UploadPlanComponent;
}(src_app_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ }),

/***/ "./src/app/services/BasicAuthHttpInterceptorService.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/BasicAuthHttpInterceptorService.ts ***!
  \*************************************************************/
/*! exports provided: BasicAuthHttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthHttpInterceptorService", function() { return BasicAuthHttpInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



var BasicAuthHttpInterceptorService = /** @class */ (function () {
    function BasicAuthHttpInterceptorService(authService) {
        this.authService = authService;
    }
    BasicAuthHttpInterceptorService.prototype.intercept = function (req, next) {
        if (this.authService.username && this.authService.basicAuth) {
            req = req.clone({
                setHeaders: {
                    Authorization: this.authService.basicAuth
                }
            });
        }
        return next.handle(req);
    };
    BasicAuthHttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], BasicAuthHttpInterceptorService);
    return BasicAuthHttpInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/api.base.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/api.base.service.ts ***!
  \**********************************************/
/*! exports provided: ApiBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiBaseService", function() { return ApiBaseService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

var ApiBaseService = /** @class */ (function () {
    function ApiBaseService() {
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api;
        this.host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].host;
    }
    return ApiBaseService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.loggedIn) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.base.service */ "./src/app/services/api.base.service.ts");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.client.service */ "./src/app/services/http.client.service.ts");





var AuthService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AuthService, _super);
    function AuthService(httpClientService, http) {
        var _this = _super.call(this) || this;
        _this.httpClientService = httpClientService;
        _this.http = http;
        _this.USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
        _this.loggedIn = false;
        return _this;
    }
    AuthService.prototype.authenticationService = function (username, password) {
        var _this = this;
        this.http.get(this.api.login, {
            headers: { authorization: this.createBasicAuthToken(username, password) }
        }).subscribe(function (data) {
            _this.candidate = data;
            _this.username = _this.candidate.username;
            _this.basicAuth = _this.createBasicAuthToken(username, password);
            _this.role = _this.candidate.userRole;
            sessionStorage.setItem('username', _this.candidate.username);
            sessionStorage.setItem('role', _this.candidate.userRole);
            sessionStorage.setItem('basicAuth', _this.basicAuth);
            _this.loggedIn = true;
        });
    };
    AuthService.prototype.createBasicAuthToken = function (username, password) {
        return 'Basic ' + window.btoa(username + ":" + password);
    };
    AuthService.prototype.registerSuccessfulLogin = function (username, password) {
        sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    };
    AuthService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem('username');
        console.log(!(user === null));
        return !(user === null);
    };
    AuthService.prototype.logOut = function () {
        sessionStorage.removeItem('username');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}(_api_base_service__WEBPACK_IMPORTED_MODULE_3__["ApiBaseService"]));



/***/ }),

/***/ "./src/app/services/http.client.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/http.client.service.ts ***!
  \*************************************************/
/*! exports provided: HttpClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientService", function() { return HttpClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _api_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.base.service */ "./src/app/services/api.base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-helper */ "./src/app/services/service-helper.ts");






var HttpClientService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HttpClientService, _super);
    function HttpClientService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.headers = new Headers({ 'Content-Type': 'application/json' });
        return _this;
    }
    HttpClientService.prototype.get = function (url) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        url = params ? this.assignParams(url, params) : url;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HttpClientService.prototype.put = function (url, body) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        url = params ? this.assignParams(url, params) : url;
        return this.http.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HttpClientService.prototype.postSubscribe = function (url, body) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        url = params ? this.assignParams(url, params) : url;
        return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HttpClientService.prototype.post = function (url, params, body) {
        url = params ? this.assignParams(url, params) : url;
        // console.log(url+" <> "+body);
        return this.http.post(url, body).toPromise()
            .catch(_service_helper__WEBPACK_IMPORTED_MODULE_5__["HandleError"]);
    };
    HttpClientService.prototype.update = function (url, params, body) {
        return this.http
            .put(url, body)
            .toPromise()
            .catch(_service_helper__WEBPACK_IMPORTED_MODULE_5__["HandleError"]);
    };
    HttpClientService.prototype.remove = function (url) {
        // console.log("This url is going for delete ===> "+url);
        return this.http.delete(url).toPromise()
            .catch(_service_helper__WEBPACK_IMPORTED_MODULE_5__["HandleError"]);
    };
    HttpClientService.prototype.assignParams = function (url, params) {
        params.forEach(function (param, index) {
            url = url.replace('{' + index + '}', param === null || param === undefined ? '' : param);
        });
        return url;
    };
    HttpClientService.prototype.handleError = function (err) {
        console.log("coming to error handler ???");
        var errorMsg;
        if (err.error instanceof ErrorEvent) {
            errorMsg = "Error Occurred : " + err.error.message;
            window.alert(errorMsg);
        }
        else {
            errorMsg = "Server Error : " + err.status;
            window.alert(errorMsg);
        }
        return errorMsg;
    };
    HttpClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpClientService);
    return HttpClientService;
}(_api_base_service__WEBPACK_IMPORTED_MODULE_1__["ApiBaseService"]));



/***/ }),

/***/ "./src/app/services/ip-service.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/ip-service.service.ts ***!
  \************************************************/
/*! exports provided: IpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpServiceService", function() { return IpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var IpServiceService = /** @class */ (function () {
    function IpServiceService(http) {
        this.http = http;
    }
    IpServiceService.prototype.getIPAddress = function () {
        return this.http.get("http://api.ipify.org/?format=json");
    };
    IpServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IpServiceService);
    return IpServiceService;
}());



/***/ }),

/***/ "./src/app/services/link.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/link.service.ts ***!
  \******************************************/
/*! exports provided: LinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkService", function() { return LinkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.base.service */ "./src/app/services/api.base.service.ts");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.client.service */ "./src/app/services/http.client.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var LinkService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LinkService, _super);
    function LinkService(httpClientService) {
        var _this = _super.call(this) || this;
        _this.httpClientService = httpClientService;
        return _this;
    }
    LinkService.prototype.getLinks = function () {
        return this.httpClientService.get(this.api.getLinks)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }));
    };
    LinkService.prototype.insert = function (link) {
        return this.httpClientService.post(this.api.getLinks, [], link);
    };
    LinkService.prototype.update = function (link) {
        return this.httpClientService
            .update(this.api.getLinks + "/" + link.id);
    };
    LinkService.prototype.remove = function (id) {
        return this.httpClientService.remove(this.api.getLinks + "/" + id);
    };
    LinkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_client_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"]])
    ], LinkService);
    return LinkService;
}(_api_base_service__WEBPACK_IMPORTED_MODULE_2__["ApiBaseService"]));



/***/ }),

/***/ "./src/app/services/resource.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/resource.service.ts ***!
  \**********************************************/
/*! exports provided: ResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceService", function() { return ResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.base.service */ "./src/app/services/api.base.service.ts");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.client.service */ "./src/app/services/http.client.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ResourceService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ResourceService, _super);
    function ResourceService(httpClientService) {
        var _this = _super.call(this) || this;
        _this.httpClientService = httpClientService;
        return _this;
    }
    ResourceService.prototype.getStaff = function () {
        return this.httpClientService.get(this.api.getStaff)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }));
    };
    ResourceService.prototype.getDepartments = function () {
        return this.httpClientService.get(this.api.getDepartments)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }));
    };
    ResourceService.prototype.updateResourceGroup = function (resourceRequest) {
        return this.httpClientService
            .update(this.api.department, [], resourceRequest);
    };
    ResourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_client_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"]])
    ], ResourceService);
    return ResourceService;
}(_api_base_service__WEBPACK_IMPORTED_MODULE_2__["ApiBaseService"]));



/***/ }),

/***/ "./src/app/services/service-helper.ts":
/*!********************************************!*\
  !*** ./src/app/services/service-helper.ts ***!
  \********************************************/
/*! exports provided: HandleError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleError", function() { return HandleError; });
function HandleError(error) {
    console.log(error);
    return Promise.reject(error);
}


/***/ }),

/***/ "./src/app/services/task.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.base.service */ "./src/app/services/api.base.service.ts");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.client.service */ "./src/app/services/http.client.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var TaskService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TaskService, _super);
    function TaskService(httpClientService) {
        var _this = _super.call(this) || this;
        _this.httpClientService = httpClientService;
        return _this;
    }
    TaskService.prototype.getResources = function () {
        return this.httpClientService.get(this.api.getResources)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }));
    };
    TaskService.prototype.getTasks = function () {
        return this.httpClientService.get(this.api.getTasks)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }));
    };
    TaskService.prototype.getAlignedTasks = function (resourceRequest) {
        return this.httpClientService.put(this.api.alignedTask, resourceRequest)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }));
    };
    TaskService.prototype.getMachineStatus = function () {
        return this.httpClientService.get(this.api.getMachineStatus)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }));
    };
    TaskService.prototype.getGanttTasks = function () {
        return this.httpClientService.get(this.api.getGanttTasks)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }));
    };
    TaskService.prototype.insert = function (task) {
        return this.httpClientService.post(this.api.singletaskUrl, [], task);
    };
    TaskService.prototype.autoSchedule = function () {
        return this.httpClientService.post(this.api.autoSchedule).catch(function (err) {
            console.log(err.error.message);
            alert(err.error.message);
        });
    };
    TaskService.prototype.cleanUp = function () {
        return this.httpClientService.remove(this.api.cleanup);
    };
    TaskService.prototype.update = function (task) {
        // console.log(task);
        return this.httpClientService
            .update(this.api.tasks + "/" + task.id, [], task);
    };
    TaskService.prototype.remove = function (id) {
        //  console.log("reaching in delete and url  =>"+this.api.tasks);
        return this.httpClientService.remove(this.api.tasks + "/" + id);
    };
    TaskService.prototype.insertAll = function (tasks, selectedStage) {
        return this.httpClientService.post(this.api.loadPlan + "/" + selectedStage, [], tasks)
            .catch(function (err) {
            console.log(err.error.message);
            alert(err.error.message);
        });
    };
    TaskService.prototype.insertResourceLib = function (resourcelib) {
        return this.httpClientService.post("" + this.api.loadResourceLib, [], resourcelib);
    };
    TaskService.prototype.startTask = function (starttedTask) {
        return this.httpClientService.put(this.api.start + "/" + starttedTask.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }));
    };
    TaskService.prototype.holdTask = function (starttedTask) {
        return this.httpClientService.put(this.api.hold + "/" + starttedTask.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }));
    };
    TaskService.prototype.finishTask = function (starttedTask) {
        return this.httpClientService.put(this.api.finish + "/" + starttedTask.id);
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_client_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"]])
    ], TaskService);
    return TaskService;
}(_api_base_service__WEBPACK_IMPORTED_MODULE_2__["ApiBaseService"]));



/***/ }),

/***/ "./src/environments/environment.dev.ts":
/*!*********************************************!*\
  !*** ./src/environments/environment.dev.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environments = [
    {
        name: 'local',
        host: 'localhost',
        port: '4200',
        apibase: 'http://localhost:5000/eplanner'
    }
];
var currentEnv = environments.find(function (item) {
    return item.host === window.location.hostname && (item.port === '' || item.port === window.location.port);
});
var host = currentEnv ? currentEnv.apibase : null;
if (!host) {
    console.warn('Environment setup not done', window.location.hostname, window.location.port);
}
var environment = {
    appTitle: 'e-Planner(DEV) | Company Name',
    host: host,
    production: false,
    api: {
        resource: host + "/resource",
        getResources: host + "/resources",
        getTasks: host + "/tasks",
        getMachineStatus: host + "/getMachineStatus",
        getGanttTasks: host + "/tasks",
        getLinks: host + "/links",
        getStaff: host + "/staff",
        getDepartments: host + "/departments",
        singletaskUrl: host + "/task",
        tasks: host + "/tasks",
        loadPlan: host + "/rawInput",
        login: host + "/login",
        department: host + "/department",
        alignedTask: host + "/alignedtasks",
        start: host + "/start",
        hold: host + "/hold",
        finish: host + "/finish",
        loadResourceLib: host + "/resourcelib",
        autoSchedule: host + "/autoSchedule",
        cleanup: host + "/cleanup"
    }
};


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
/* harmony import */ var _environment_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment.dev */ "./src/environments/environment.dev.ts");

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _environment_dev__WEBPACK_IMPORTED_MODULE_1__["environment"]);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alatkar\SCHEDULER\frontend-amod\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map