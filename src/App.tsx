import React, {useState, useEffect} from 'react';
import {Navbar} from "./Components/Navbar";
import { ToDoForm } from './Components/ToDoForm';
import { ToDoList } from './Components/ToDoList';
import { ITodo } from './interfaces';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITodo[]>([]);

// to save our todo list in local storage

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem('tasks') || '[]') as ITodo[];
    setTasks(saved);
  },[]);
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks]);

  
  const createTask = (title: string) =>{
    const newTask: ITodo = {
      title,
      id: Date.now(),
      completed: false
    }
    setTasks(prev =>[newTask, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTasks(prev =>
      prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
    const shouldRemoved = window.confirm('Delete this task?')
    if(shouldRemoved){
      setTasks( prev=> prev.filter(todo => todo.id !== id))
    }
  }

  return (
    <div>
      <Navbar/>
     <div className="container">
     <ToDoForm onAdd={createTask}/>
     <ToDoList tasks={tasks} onRemove={removeHandler} onToggle={toggleHandler}/>
     </div> 
    </div>
  )
}

export default App;
