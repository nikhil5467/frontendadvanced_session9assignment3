

import {Component} from '@angular/core';
import {todoservice} from './todoservice';
import {ToDo} from './todo';
import {Router} from '@angular/router';

@Component({                
    selector:'gettodo',
    template:`
         <div class='container-fluid'>
            <div class='panel panel-danger'>
                <div class='panel-heading'>
                    <h4 align='center'>RETRIEVE ALL TODOs</h4>
                </div>

                <div class='panel-body'>
                    <table class='table'>
                        <thead>
                            <tr>
                                <td align='center'>ToDo ID</td>
                                <td align='center'>ToDo Task</td>
                                <td align='center'></td>
                                <td align='center'></td>
                            </tr>
                        </thead>
                        <tr *ngFor="let t of GetAllToDos()">
                            <td align='center'>{{t.id}}</td>
                            <td align='center'>{{t.task}}</td>
                            <td align='center'>
                                <button class='btn btn-danger' (click)="DeleteToDo(t.id)">Delete</button>
                            </td>

                            <td align='center'>
                                <button class='btn btn-danger' (click)="EditToDo(t.id)">Edit</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `
})
export class gettodo
{
    constructor(private svc:todoservice,private r:Router)
    {

    }    
    public GetAllToDos():ToDo[]
    {
        return this.svc.RetrieveToDos();
    }

    public DeleteToDo(id:number):void
    {
        //alert("DeleteToDo() called for deleting id:" +id);
        var deleteconfirm = confirm('Do you want to delete this todo?');
        if(deleteconfirm == true)
        {
            var result = this.svc.DeleteToDo(id);
            
        }
    }

    public EditToDo(id:number):void
    {
        this.r.navigate(['edittodo',id]);
    }
}