import React from "react";
import ToDoList from "./ToDoList";
import '../styles/Global.module.css';
import {ToDoProvider} from "./todo-hooks";
import ToDoForm from "./ToDoForm";

export default function App() {

    return (
        <ToDoProvider>
            <ToDoForm/>
            <ToDoList/>
        </ToDoProvider>
    );
}