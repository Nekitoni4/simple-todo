import React from 'react';
import styles from "../styles/ToDoItem.module.css";

function ToDoItem({title, description}) {
    console.log(styles);
    return (
        <li className={styles.item}>
            <h2>
                {title}
            </h2>
            <p>
                {description}
            </p>
        </li>
    );
}

export default ToDoItem;