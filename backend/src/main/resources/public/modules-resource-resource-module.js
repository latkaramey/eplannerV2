(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-resource-resource-module"],{

/***/ "./src/app/modules/resource/resource.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/resource/resource.module.ts ***!
  \*****************************************************/
/*! exports provided: resourceRoutes, ResourceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceRoutes", function() { return resourceRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceModule", function() { return ResourceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _show_resource_show_resource_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show-resource/show-resource.component */ "./src/app/modules/resource/show-resource/show-resource.component.ts");





var resourceRoutes = [
    { path: 'show-resource', component: _show_resource_show_resource_component__WEBPACK_IMPORTED_MODULE_4__["ShowResourceComponent"] }
];
var ResourceModule = /** @class */ (function () {
    function ResourceModule() {
    }
    ResourceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(resourceRoutes)],
            declarations: [_show_resource_show_resource_component__WEBPACK_IMPORTED_MODULE_4__["ShowResourceComponent"]]
        })
    ], ResourceModule);
    return ResourceModule;
}());



/***/ }),

/***/ "./src/app/modules/resource/show-resource/show-resource.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/resource/show-resource/show-resource.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVzb3VyY2Uvc2hvdy1yZXNvdXJjZS9zaG93LXJlc291cmNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/resource/show-resource/show-resource.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/resource/show-resource/show-resource.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<ol class=\"breadcrumb\">\n  <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Show Resource</li>\n</ol>"

/***/ }),

/***/ "./src/app/modules/resource/show-resource/show-resource.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/resource/show-resource/show-resource.component.ts ***!
  \***************************************************************************/
/*! exports provided: ShowResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowResourceComponent", function() { return ShowResourceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShowResourceComponent = /** @class */ (function () {
    function ShowResourceComponent() {
    }
    ShowResourceComponent.prototype.ngOnInit = function () {
    };
    ShowResourceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-resource',
            template: __webpack_require__(/*! ./show-resource.component.html */ "./src/app/modules/resource/show-resource/show-resource.component.html"),
            styles: [__webpack_require__(/*! ./show-resource.component.css */ "./src/app/modules/resource/show-resource/show-resource.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShowResourceComponent);
    return ShowResourceComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-resource-resource-module.js.map