"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todoservice_1 = require('./todoservice');
var router_1 = require('@angular/router');
var gettodo = (function () {
    function gettodo(svc, r) {
        this.svc = svc;
        this.r = r;
    }
    gettodo.prototype.GetAllToDos = function () {
        return this.svc.RetrieveToDos();
    };
    gettodo.prototype.DeleteToDo = function (id) {
        //alert("DeleteToDo() called for deleting id:" +id);
        var deleteconfirm = confirm('Do you want to delete this todo?');
        if (deleteconfirm == true) {
            var result = this.svc.DeleteToDo(id);
        }
    };
    gettodo.prototype.EditToDo = function (id) {
        this.r.navigate(['edittodo', id]);
    };
    gettodo = __decorate([
        core_1.Component({
            selector: 'gettodo',
            template: "\n         <div class='container-fluid'>\n            <div class='panel panel-danger'>\n                <div class='panel-heading'>\n                    <h4 align='center'>RETRIEVE ALL TODOs</h4>\n                </div>\n\n                <div class='panel-body'>\n                    <table class='table'>\n                        <thead>\n                            <tr>\n                                <td align='center'>ToDo ID</td>\n                                <td align='center'>ToDo Task</td>\n                                <td align='center'></td>\n                                <td align='center'></td>\n                            </tr>\n                        </thead>\n                        <tr *ngFor=\"let t of GetAllToDos()\">\n                            <td align='center'>{{t.id}}</td>\n                            <td align='center'>{{t.task}}</td>\n                            <td align='center'>\n                                <button class='btn btn-danger' (click)=\"DeleteToDo(t.id)\">Delete</button>\n                            </td>\n\n                            <td align='center'>\n                                <button class='btn btn-danger' (click)=\"EditToDo(t.id)\">Edit</button>\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [todoservice_1.todoservice, router_1.Router])
    ], gettodo);
    return gettodo;
}());
exports.gettodo = gettodo;
//# sourceMappingURL=gettodo.js.map