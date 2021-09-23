import React, {useState} from 'react';
import {useToDo} from "./todo-hooks";

function ToDoForm(props) {

    const [toDoData, setToDo] = useToDo();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const submitHandler = (e) => {
      e.preventDefault();
      setToDo([
          ...toDoData, {
            title, description
          }
      ]);
      setTitle('');
      setDescription('');
    };

    return (
        <form onSubmit={submitHandler}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text"/>
            <input value={description} onChange={(e) => setDescription(e.target.value)} type="text"/>
            <button>
                Добавить задачу
            </button>
        </form>
    );
}

export default ToDoForm;