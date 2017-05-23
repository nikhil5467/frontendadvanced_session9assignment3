



import {Component} from '@angular/core';
import {todoservice} from './todoservice';
import {Router,ActivatedRoute} from '@angular/router';
import {ToDo} from './todo';

@Component({                
    selector:'edittodo',
    template:`
         <div class='container-fluid'>
            <div class='panel panel-danger'>
                <div class='panel-heading'>
                    <h4 align='center'>EDIT A TODO with id: {{todoid}}</h4>
                </div>

                <div class='panel-body'>
                    <p>
                        Edit task: 
                        <input type='text' [(ngModel)]="todo.task"/>
                    </p>
                    <button class='btn btn-danger' (click)='Cancel()'>Cancel</button>
                    <button class='btn btn-danger' (click)='SaveChanges()'>Save Changes</button>
                </div>
            </div>
        </div>
    `
})
export class edittodo
{   
    public todoid:number;
    public todo:ToDo;

    constructor(private r:Router,private ac:ActivatedRoute,private svc:todoservice)
    {
        var self = this;
        //read the route parameter
        ac.params.forEach(function(param:any)
        {
           self.todoid = param['id'];
            //console.log(param['id']);
        });

        //search for the todo object with this id
        for(var i=0 ; i<this.svc.todos.length ; i++)
        {
            if(this.svc.todos[i].id == this.todoid)
            {
                this.todo = new ToDo(this.svc.todos[i].id,this.svc.todos[i].task);
                break;
            }
        }
        

    }
    public Cancel():void
    {
        this.r.navigate(['retrieve']);
    }

    public SaveChanges():void
    {
        this.svc.EditToDo(this.todo);
        this.r.navigate(['retrieve']);
    }  
}