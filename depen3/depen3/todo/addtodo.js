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
var todo_1 = require('./todo');
var addtodo = (function () {
    function addtodo(svc) {
        this.svc = svc;
        this.todo = new todo_1.ToDo();
    }
    addtodo.prototype.AddToDo = function () {
        this.result = this.svc.AddToDo(this.todo);
        //recreate the object
        this.todo = null;
        this.todo = new todo_1.ToDo();
    };
    addtodo = __decorate([
        core_1.Component({
            selector: 'addtodo',
            template: "\n         <div class='container-fluid'>\n            <div class='panel panel-danger'>\n                <div class='panel-heading'>\n                    <h4 align='center'>ADD NEW TODO</h4>\n                </div>\n\n                <div class='panel-body'>\n                    <p>\n                        ToDo ID: <input type='text' [(ngModel)]=\"todo.id\"/>\n                    </p>\n\n                    <p>\n                        ToDo Task: <input type='text' [(ngModel)]=\"todo.task\"/>\n                    </p>\n\n                    <button class='btn btn-default' (click)=\"AddToDo()\">Add ToDo</button>\n                    <h1>{{result}}</h1>\n                </div>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [todoservice_1.todoservice])
    ], addtodo);
    return addtodo;
}());
exports.addtodo = addtodo;
//# sourceMappingURL=addtodo.js.map