"use strict";
var todo_1 = require('./todo');
var todoservice = (function () {
    function todoservice() {
        //hard code the data
        this.todos = [
            new todo_1.ToDo(1, 'Task1'),
            new todo_1.ToDo(2, 'Task2'),
            new todo_1.ToDo(3, 'Task3'),
            new todo_1.ToDo(4, 'Task4'),
            new todo_1.ToDo(5, 'Task5')
        ];
    }
    //RETRIEVE OPERATION
    todoservice.prototype.RetrieveToDos = function () {
        return this.todos;
    };
    todoservice.prototype.AddToDo = function (obj) {
        this.todos.push(obj);
        return "New ToDo added successfully";
    };
    todoservice.prototype.DeleteToDo = function (id) {
        //code to remove the todo object from the array based on the id
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == id) {
                this.todos.splice(i, 1);
                break;
            }
        }
        return "ToDo deleted";
    };
    todoservice.prototype.EditToDo = function (newtodo) {
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == newtodo.id) {
                //overwrite the old object with the new object
                this.todos[i] = newtodo;
                break;
            }
        }
    };
    return todoservice;
}());
exports.todoservice = todoservice;
//# sourceMappingURL=todoservice.js.map