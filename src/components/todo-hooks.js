import React, {createContext, useContext, useState} from 'react';

const ToDoContext = createContext();
const toDoData = [];

export const useToDo = () => useContext(ToDoContext);

export function ToDoProvider({ children }) {
    const [todos, setTodo] = useState(toDoData);
    return (
        <ToDoContext.Provider value={[todos, setTodo]}>
            {children}
        </ToDoContext.Provider>
    );
}