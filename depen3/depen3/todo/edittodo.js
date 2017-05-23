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
var todo_1 = require('./todo');
var edittodo = (function () {
    function edittodo(r, ac, svc) {
        this.r = r;
        this.ac = ac;
        this.svc = svc;
        var self = this;
        //read the route parameter
        ac.params.forEach(function (param) {
            self.todoid = param['id'];
            //console.log(param['id']);
        });
        //search for the todo object with this id
        for (var i = 0; i < this.svc.todos.length; i++) {
            if (this.svc.todos[i].id == this.todoid) {
                this.todo = new todo_1.ToDo(this.svc.todos[i].id, this.svc.todos[i].task);
                break;
            }
        }
    }
    edittodo.prototype.Cancel = function () {
        this.r.navigate(['retrieve']);
    };
    edittodo.prototype.SaveChanges = function () {
        this.svc.EditToDo(this.todo);
        this.r.navigate(['retrieve']);
    };
    edittodo = __decorate([
        core_1.Component({
            selector: 'edittodo',
            template: "\n         <div class='container-fluid'>\n            <div class='panel panel-danger'>\n                <div class='panel-heading'>\n                    <h4 align='center'>EDIT A TODO with id: {{todoid}}</h4>\n                </div>\n\n                <div class='panel-body'>\n                    <p>\n                        Edit task: \n                        <input type='text' [(ngModel)]=\"todo.task\"/>\n                    </p>\n                    <button class='btn btn-danger' (click)='Cancel()'>Cancel</button>\n                    <button class='btn btn-danger' (click)='SaveChanges()'>Save Changes</button>\n                </div>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, todoservice_1.todoservice])
    ], edittodo);
    return edittodo;
}());
exports.edittodo = edittodo;
//# sourceMappingURL=edittodo.js.map