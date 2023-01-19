import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./TodoList";

function App() {

    let tasks: Array<TasksType> = [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
    ]

    useState()


    const removeTask = (id: number) => {
        tasks = tasks.filter(t => t.id !== id)
        console.log(tasks)
}



    return (
        <div className="App">
            <div>
                <Todolist title={'What to learn?'}
                          tasks={tasks}
                          removeTask={removeTask}
                />

            </div>
        </div>
    );
}

export default App;
