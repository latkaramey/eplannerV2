(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-tasks-tasks-module"],{

/***/ "./src/app/models/rsourcerequest.model.ts":
/*!************************************************!*\
  !*** ./src/app/models/rsourcerequest.model.ts ***!
  \************************************************/
/*! exports provided: ResourceRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceRequest", function() { return ResourceRequest; });
var ResourceRequest = /** @class */ (function () {
    function ResourceRequest() {
    }
    return ResourceRequest;
}());



/***/ }),

/***/ "./src/app/modules/tasks/tasks.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/tasks/tasks.module.ts ***!
  \***********************************************/
/*! exports provided: taskRoutes, TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskRoutes", function() { return taskRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _update_task_update_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-task/update-task.component */ "./src/app/modules/tasks/update-task/update-task.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var taskRoutes = [
    { path: 'update', component: _update_task_update_task_component__WEBPACK_IMPORTED_MODULE_4__["UpdateTaskComponent"] }
];
var TaskModule = /** @class */ (function () {
    function TaskModule() {
    }
    TaskModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(taskRoutes)],
            declarations: [_update_task_update_task_component__WEBPACK_IMPORTED_MODULE_4__["UpdateTaskComponent"]]
        })
    ], TaskModule);
    return TaskModule;
}());



/***/ }),

/***/ "./src/app/modules/tasks/update-task/update-task.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/tasks/update-task/update-task.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table tr.highlight {\r\n    background-color: #18BC9C !important;\r\n    color: #ffffff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90YXNrcy91cGRhdGUtdGFzay91cGRhdGUtdGFzay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Rhc2tzL3VwZGF0ZS10YXNrL3VwZGF0ZS10YXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB0ci5oaWdobGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4QkM5QyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/tasks/update-task/update-task.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tasks/update-task/update-task.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<form>\n  <fieldset>\n    <legend>Update Task\n    </legend>\n\n    <div class=\"form-group\">\n      <fieldset>\n      <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"autoSchedule($event)\">\n        <i class=\"fa fa-floppy-o\"></i>&nbsp;&nbsp;AutoResourceLoading</button>\n    </fieldset>\n\n\n    \n      <fieldset>\n      <button type=\"submit\" class=\"btn btn-danger btn-lg float-right\" (click)=\"cleanUpAll($event)\">\n        <i class=\"fa fa-floppy-o\"></i>&nbsp;&nbsp;CleanUpAllData</button>\n    </fieldset>\n\n          \n      <label for=\"exampleSelect1\">Machine Group:</label>\n      <!-- <select class=\"form-control\" id=\"machinegroupSelect\" [(ngModel)]=\"selectedGroup\" (change)= \"changeMachineGroup($event.target.value)\">\n        <option>--Choose Machine group--</option>\n        <option *ngFor=\"let depname of deparray\">{{depname.label}}</option>\n      </select> -->\n\n      <select class=\"form-control\" name=\"depname\" [(ngModel)]=\"depname\"\n        (change)=\"changeMachineGroup($event.target.value)\">\n        <option>--Choose Machine group---</option>\n        <option *ngFor=\"let depname of deparray\">{{depname.label}}</option>\n      </select>\n\n\n    </div>\n\n\n    <div class=\"form-group\" *ngIf=\"depname != null\">\n      <label for=\"exampleSelect1\">Machine</label>\n      <select class=\"form-control\" name=\"selectedMachine\" [(ngModel)]=\"selectedMachine\"\n        (change)=\"changeMachine($event.target.value)\"\n        \n         >\n\n        <option>-Choose Machine ---</option>\n        <option *ngFor=\"let selectedMachine of machines\">{{selectedMachine.machineName}}</option>\n      </select>\n    </div>\n\n\n    <ul class=\"nav nav-tabs\" *ngIf=\"selectedMachine != null\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#machineStatus\">Machine Status</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#scheduledTask\" (click)=\"callTasks($event)\">Scheduled Tasks</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#completedTask\" (click)=\"callTasks($event)\">Completed Tasks</a>\n      </li>\n    </ul>\n    <div id=\"tabs\" class=\"tab-content\"><br>\n      <div class=\"tab-pane fade show active\" id=\"machineStatus\">\n        <br>\n        <form>\n          <fieldset>\n            <div class=\"form-group\" *ngIf=\"flag\">\n              <label for=\"exampleSelect1\">Current Status: {{machine.machineStatus}}</label>\n\n            </div>\n            <div class=\"form-group\" *ngIf=\"flag\">\n              <label for=\"exampleSelect1\">Change Status:</label>\n              <select class=\"form-control\" name=\"machineStatus\" ngModel [value]=\"machineStatus\"\n                (change)=\"changeMachineStatus($event.target.value)\">\n                <option>--Change Status --</option>\n                <option *ngFor=\"let machineStatus of machineDropDownHolder\">{{machineStatus}}</option>\n              </select>\n            </div>\n            <div class=\"form-group\" *ngIf=\"currentMachineStatus == 'Hold'\">\n              <label for=\"exampleSelect1\">Reason:</label>\n              <select class=\"form-control\" id=\"exampleSelect1\">\n                <option>Repairs</option>\n                <option>Break Down</option>\n              </select>\n            </div>\n            <!-- <div class=\"form-group row\">\n              <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Comments:</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" readonly=\"\" \n                class=\"form-control-plaintext\" id=\"staticEmail\" value=\"Power Failure at Machine\">\n              </div>\n            </div> -->\n\n\n            <div class=\"form-group\" *ngIf=\"currentMachineStatus == 'Hold'\" >\n              <label for=\"exampleTextarea\">Comments : </label>\n              <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n            </div>\n\n\n            <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"submitGroupData($event)\">\n              <i class=\"fa fa-floppy-o\"></i>&nbsp;&nbsp;Save</button>\n          </fieldset>\n        </form>\n      </div>\n      <div class=\"tab-pane fade\" id=\"scheduledTask\">\n\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">#</th>\n                  <th scope=\"col\">Task Name</th>\n                  <th scope=\"col\">Status</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let selectedTask of alignedTask; \" class=\"table\" (click)=\"selectTask($event, selectedTask)\" \n                  [ngClass] = \"{'highlight' : selectedTask.id == selectedId}\">\n                  <th scope=\"row\" *ngIf=\"selectedTask.taskText != null && selectedTask.id != null\">{{selectedTask.id}}</th>\n                  <td>{{selectedTask.taskText}}</td>\n                  <td>{{selectedTask.status}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div> &nbsp;\n          <div class=\"col-md-3\" *ngIf=\"selectedTask != null\">\n            <div class=\"card border-primary mb-3\">\n              <div class=\"card-header\">Project : X1</div>\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">{{selectedTask.taskText}}</h4>\n                <p class=\"card-text\">\n                  Estimated Time :{{selectedTask.duration}} days.<br/>\n                  Ref Doc : <a href=\"#\">link</a><br/>\n                  Actual Start date:{{selectedTask.start_date}}<br/>\n                  start time : {{selectedTask.startDateTime}}<br/>\n                  completed hours : {{selectedTask.completedHours}}<br/>\n                  Planner : Pradeep S.\n                </p>\n              </div>\n            </div>\n          </div>  \n        </div>\n        <div class=\"form-group\">\n          <label for=\"comments\">Comments : </label>\n          <textarea class=\"form-control\" id=\"comments\" rows=\"3\"></textarea>\n        </div>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"startTask($event,selectedTask)\"><i class=\"fa fa-play\" ></i>&nbsp;Start</button>&nbsp;\n        <button type=\"button\" class=\"btn btn-outline-primary btn-sm\" (click)=\"holdTask($event,selectedTask)\"><i\n            class=\"fa fa-pause\"></i>&nbsp;Pause</button>&nbsp;\n        <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"finishTask($event,selectedTask)\"><i class=\"fa fa-check\"></i>&nbsp;Finish</button>\n      </div>\n      <div class=\"tab-pane fade\" id=\"completedTask\">\n        <br />\n        <div class=\"input-group\"> <span class=\"input-group-addon\">Filter :&nbsp;</span>\n          <input id=\"filter\" type=\"text\" class=\"form-control\" placeholder=\"Type Filter...\">\n        </div><br />\n        <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Text</th>\n              <th scope=\"col\">Type</th>\n              <th scope=\"col\">Start Date</th>\n              <th scope=\"col\">Progress</th>\n            </tr>\n          </thead>\n          <tr *ngFor=\"let finish of finishedTask\">\n            <th scope=\"row\">{{finish.text}}</th>\n            <td>{{finish.type}}</td>\n            <td>{{finish.start_date}}</td>\n            <td>{{finish.duration}} %</td>\n          </tr>\n\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <!--<table class=\"table\">\n  <tr>\n    <td style=\"width: 60%\">\n      <div class=\"form-group\">\n        <label for=\"exampleSelect1\">Select Resource:</label>\n        <select class=\"form-control\" id=\"exampleSelect1\">\n          <option *ngFor=\"let resource of resources\" [value]=\"resource.resourceId\">{{resource.resourceName}}</option>\n        </select>\n      </div>  \n    </td>\n    <td rowspan=\"4\">\n      <div class=\"card mb-3\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Task Details\n            <span class=\"float-right\">\n              <div class=\"custom-control custom-switch\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch2\">\n                <label class=\"custom-control-label\" style=\"font-size: small;\"for=\"customSwitch2\">Hold the Job</label>\n              </div>\n            </span>\n          </h5>\n          <h6 class=\"card-subtitle text-muted\">Status : Planned</h6>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">Planned Start : 06-Jul-2020</li>\n          <li class=\"list-group-item\">Estimated Duration : 56 hr</li>\n          <li class=\"list-group-item\">Status : Planned</li>\n          <li class=\"list-group-item\">Time Spent : 0 hrs</li>\n        </ul>\n        <!--<div class=\"card-body\">\n          <a href=\"#\" class=\"card-link\">Card link</a>\n          <a href=\"#\" class=\"card-link\">Another link</a>\n        </div>\n        <div class=\"card-footer text-muted\">\n          2 days ago\n        </div>\n      </div>\n      \n    </td>\n  </tr>\n  <tr>\n    <td>\n      <div class=\"form-group\">\n        <label for=\"exampleSelect1\">Select Job/Task:</label>\n        <select class=\"form-control\" id=\"exampleSelect1\">\n          <option *ngFor=\"let task of tasks\" [value]=\"task.id\">{{task.text}}</option>\n        </select>\n      </div>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <div class=\"form-group\">\n        <label for=\"exampleSelect1\">Select Machine Status:</label>\n      <select class=\"form-control\" id=\"exampleSelect1\">\n        <option *ngFor=\"let mcStatus of machineStatuses\" [value]=\"mcStatus.statusId\">{{mcStatus.statusName}}</option>\n      </select>\n      </div>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <div class=\"form-group\">\n        <label for=\"exampleTextarea\">Notes : </label>\n      <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n      </div>\n    </td>\n  </tr>\n  \n</table>-->\n  </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/modules/tasks/update-task/update-task.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/tasks/update-task/update-task.component.ts ***!
  \********************************************************************/
/*! exports provided: UpdateTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTaskComponent", function() { return UpdateTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/base.page */ "./src/app/base.page.ts");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/resource.service */ "./src/app/services/resource.service.ts");
/* harmony import */ var src_app_models_rsourcerequest_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/rsourcerequest.model */ "./src/app/models/rsourcerequest.model.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var UpdateTaskComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UpdateTaskComponent, _super);
    function UpdateTaskComponent(taskService, title, resourceService, router, authService) {
        var _this = _super.call(this, title) || this;
        _this.taskService = taskService;
        _this.title = title;
        _this.resourceService = resourceService;
        _this.router = router;
        _this.authService = authService;
        _this.resources = [];
        _this.tasks = [];
        _this.alignedTask = [];
        _this.deparray = [];
        _this.flag = false;
        _this.machineStatusHolder = ["Available", "Hold", "Running", "Maintanance"];
        _this.machineDropDownHolder = [];
        _this.resourceRequest = new src_app_models_rsourcerequest_model__WEBPACK_IMPORTED_MODULE_6__["ResourceRequest"]();
        _this.finishedTask = [];
        _super.prototype.setTitle.call(_this, "Update Task");
        return _this;
    }
    UpdateTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getResources().subscribe(function (resources) {
            _this.resources = resources;
        });
        this.taskService.getTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
        });
        this.resourceService.getDepartments().subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var val = data_1[_i];
                _this.deparray.push(val);
            }
        });
        this.resetTasks;
    };
    UpdateTaskComponent.prototype.resetTasks = function () {
        this.alignedTask = [];
        this.finishedTask = [];
    };
    UpdateTaskComponent.prototype.changeMachineGroup = function (group) {
        this.resetTasks;
        this.machines = this.deparray.find(function (grp) { return grp.label == group; }).machineList;
        this.resourceRequest.group = group;
    };
    UpdateTaskComponent.prototype.changeMachine = function (selectedMachine) {
        var _this = this;
        this.resetTasks;
        this.machineDropDownHolder.splice(0, this.machineDropDownHolder.length);
        this.flag = true;
        this.machine = this.machines.find(function (machines) { return machines.machineName == selectedMachine; });
        //cleanup
        this.machineStatusHolder.filter(function (m) {
            // if (m != this.machine.machineStatus) {
            _this.machineDropDownHolder.push(m);
            //}
        });
        this.resourceRequest.machine = selectedMachine;
        this.callTasks(selectedMachine);
    };
    UpdateTaskComponent.prototype.changeMachineStatus = function (machineStatus) {
        this.currentMachineStatus = machineStatus;
        this.resourceRequest.machineStatus = machineStatus;
    };
    UpdateTaskComponent.prototype.submitGroupData = function (tt) {
        this.resourceService.updateResourceGroup(this.resourceRequest);
    };
    UpdateTaskComponent.prototype.callTasks = function (dummy) {
        var _this = this;
        this.resetTasks;
        this.taskService.getAlignedTasks(this.resourceRequest).subscribe(function (tasks) {
            _this.alignedTask = tasks;
            _this.finishedTask = _this.alignedTask.filter(function (f) { return f.status == 'COMPLETED'; });
            _this.alignedTask = _this.alignedTask.filter(function (f) { return f.status !== 'COMPLETED'; });
            // 
        });
    };
    UpdateTaskComponent.prototype.selectTask = function (event, row) {
        this.selectedId = row.id;
        this.selectedTask = row;
        //  console.log(row);
    };
    UpdateTaskComponent.prototype.startTask = function (event, selectedTask) {
        var _this = this;
        this.taskService.startTask(selectedTask).subscribe(function (data) {
            _this.selectedTask = data;
        });
    };
    UpdateTaskComponent.prototype.holdTask = function (event, selectedTask) {
        var _this = this;
        this.taskService.holdTask(selectedTask).subscribe(function (data) {
            _this.selectedTask = data;
        });
    };
    UpdateTaskComponent.prototype.autoSchedule = function (event) {
        //alert("autoscheduling start")
        this.taskService.autoSchedule();
    };
    UpdateTaskComponent.prototype.cleanUpAll = function (event) {
        alert("This will delete all data");
        this.taskService.cleanUp();
        this.authService.logOut();
        this.router.navigateByUrl('/login');
        window.location.reload();
    };
    UpdateTaskComponent.prototype.finishTask = function (event, selectedTask) {
        var _this = this;
        this.resetTasks;
        this.taskService.finishTask(selectedTask).subscribe(function (data) {
            //this.finish = data;
            _this.finishedTask = data;
            _this.alignedTask = _this.alignedTask.filter(function (t) { return t.id !== selectedTask.id; });
        });
    };
    UpdateTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-task',
            template: __webpack_require__(/*! ./update-task.component.html */ "./src/app/modules/tasks/update-task/update-task.component.html"),
            styles: [__webpack_require__(/*! ./update-task.component.css */ "./src/app/modules/tasks/update-task/update-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], UpdateTaskComponent);
    return UpdateTaskComponent;
}(src_app_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=modules-tasks-tasks-module.js.map