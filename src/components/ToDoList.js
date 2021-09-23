import React from 'react';
import ToDoItem from "./ToDoItem";
import style from "../styles/ToDoList.module.css";
import { useToDo } from "./todo-hooks";

function ToDoList(props) {

    const [toDoData] = useToDo();

    if (!toDoData.length) return <div>В настоящий момент - записей нет ;(</div>
    return (
        <div className={style.root}>
            <h1>Мой ToDoList</h1>
            <ul>
                {
                    toDoData.map((todo, key) => {
                        return <ToDoItem key={key} {...todo}/>;
                    })
                }
            </ul>
        </div>
    );
}

export default ToDoList;