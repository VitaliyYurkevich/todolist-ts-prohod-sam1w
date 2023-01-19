import React from 'react';

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}


export type TodoListType = {
    title: string
    tasks: Array<TasksType>
    removeTask: Function
}



export const Todolist = (props:TodoListType) => {
    return(
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((t, index)=>{
                    return(
                        <li><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
                        <button onClick={()=>{props.removeTask(t.id)}}>x</button>
                        </li>

                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}