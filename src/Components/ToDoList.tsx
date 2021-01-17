import React from 'react'
import { ITodo } from './../interfaces';

type ToDoListProps ={
    tasks: ITodo[];
    onToggle(id: number): void;
    onRemove(id: number): void;
}

export const ToDoList: React.FC<ToDoListProps> = ({tasks,onToggle,onRemove}) =>{
    if(tasks.length === 0){
        return <h3 className="center">Nothing to do, no tasks!</h3>
    }

const stopPropagationHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);

}

    return(
        <ul>
            {tasks.map(task => {
                const classes = ['todo'];
                if(task.completed){
                    classes.push('completed')
                }
        return(
            // конструкция onToggle.bind вернет новую функцию 
            <li className={classes.join(' ')} key={task.id} onChange={()=>onToggle(task.id)}> 
                <label>
                <input type="checkbox" name="completed" />
                <span>{task.title}</span>
                <i className="material-icons red-text" onClick={(event)=>stopPropagationHandler(event,task.id)}>delete</i>
            </label>
            </li>
        )})}
        </ul>
    )
}