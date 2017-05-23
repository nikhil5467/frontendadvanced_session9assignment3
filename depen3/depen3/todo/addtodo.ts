

import {Component} from '@angular/core';
import {todoservice} from './todoservice';
import {ToDo} from './todo';

@Component({                
    selector:'addtodo',
    template:`
         <div class='container-fluid'>
            <div class='panel panel-danger'>
                <div class='panel-heading'>
                    <h4 align='center'>ADD NEW TODO</h4>
                </div>

                <div class='panel-body'>
                    <p>
                        ToDo ID: <input type='text' [(ngModel)]="todo.id"/>
                    </p>

                    <p>
                        ToDo Task: <input type='text' [(ngModel)]="todo.task"/>
                    </p>

                    <button class='btn btn-default' (click)="AddToDo()">Add ToDo</button>
                    <h1>{{result}}</h1>
                </div>
            </div>
        </div>
    `
})
export class addtodo
{
    public todo:ToDo = new ToDo();
    public result:string;
    constructor(private svc:todoservice)
    {

    }  
    public AddToDo():void
    {
        this.result = this.svc.AddToDo(this.todo);
        


        //recreate the object
        this.todo = null;
        this.todo = new ToDo();
    }  
}