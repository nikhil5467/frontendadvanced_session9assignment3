


import {ToDo} from './todo';

export class todoservice
{
    //hard code the data
    public todos:ToDo[] = [
        new ToDo(1,'Task1'),
        new ToDo(2,'Task2'),
        new ToDo(3,'Task3'),
        new ToDo(4,'Task4'),
        new ToDo(5,'Task5')
    ];


    //RETRIEVE OPERATION
    public RetrieveToDos():ToDo[]
    {
        return this.todos;
    }

    public AddToDo(obj:ToDo):string
    {
        this.todos.push(obj);
        return "New ToDo added successfully";
    }
    public DeleteToDo(id:number):string
    {
        //code to remove the todo object from the array based on the id

        for(var i=0 ; i<this.todos.length ; i++)
        {
            if(this.todos[i].id == id)
            {
                this.todos.splice(i,1);
                break;
            }
        }
        return "ToDo deleted";       
    }

    public EditToDo(newtodo:ToDo):void
    {
        for(var i=0 ; i<this.todos.length ; i++)
        {
            if(this.todos[i].id == newtodo.id)
            {
                //overwrite the old object with the new object
                this.todos[i] = newtodo;
                break;
            }
        }
    }
}