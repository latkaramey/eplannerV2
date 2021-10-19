(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-contact-us-contact-us-module"],{

/***/ "./src/app/modules/contact-us/contact-us.component.css":
/*!*************************************************************!*\
  !*** ./src/app/modules/contact-us/contact-us.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/contact-us/contact-us.component.html":
/*!**************************************************************!*\
  !*** ./src/app/modules/contact-us/contact-us.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"row\">        \n    <div class=\"col-md-3 col-xs-6\">\n          <img class=\"card-img-top\" src=\"assets/images/planning_time.jpg\"/>\n          <br/><br/><br/>\n          <h4><span><i class=\"fa fa-phone\"></i></span>&nbsp;Call Us</h4>\n          <p>999-99-9999 <strong>(Toll Free)</strong>.</p>\n          <p>+91 - 01800252525 <em>(India)</em>.</p>\n          <br/>\n          <h4><span><i class=\"fa fa-map-marker\"></i></span>&nbsp;Office Location</h4>\n          <p><strong>My Company Pvt. Ltd.</strong>.</p>\n          <p> \n            Floor. No. 08, SandStone Business Bay, Near Expressway, Hinjawadi, Pune - 411038\n          </p>\n      </div>\n      <div class=\"col-md-9 col-xs-6\">\n      <h3 class=\"display-6\">Have any queries?</h3>\n      <p class=\"lead\">\n        <form>\n          <h4><span><i class=\"fa fa-pencil\"></i></span>&nbsp;Write to Us</h4>\n          <fieldset>\n            <div class=\"form-group\">\n              <label for=\"name\">Name*</label>\n              <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" \n                  id=\"name\" aria-describedby=\"name\" placeholder=\"Enter Name\">\n              </div>  \n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Email address*</label>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-envelope\"></i></span>\n                  </div>\n                  <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n                </div> \n              </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Subject*</label>\n              <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-comments-o\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" \n                  id=\"subject\" aria-describedby=\"subject\" placeholder=\"Enter Subject\">\n              </div>    \n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleTextarea\">Message*</label>\n              <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n            </div>\n            <fieldset class=\"form-group\">\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                  Send me a copy of this message.\n                </label>\n              </div>\n            </fieldset>\n            <button type=\"submit\" class=\"btn btn-primary\">Send</button>\n          </fieldset>\n        </form>\n        <br/>\n        \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/contact-us/contact-us.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/contact-us/contact-us.component.ts ***!
  \************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/modules/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/modules/contact-us/contact-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/modules/contact-us/contact-us.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/contact-us/contact-us.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/modules/contact-us/contact-us.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var contactUsRoutes = [
    {
        path: 'contact-details',
        component: _contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"]
    }
];
var ContactUsModule = /** @class */ (function () {
    function ContactUsModule() {
    }
    ContactUsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(contactUsRoutes)],
            declarations: [_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"]]
        })
    ], ContactUsModule);
    return ContactUsModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-contact-us-contact-us-module.js.map