import React, { useSelector } from "react";
import { useDispatch } from 'react-redux';


const TodoList = () => {
    const todos = useSelector((state) => 
    state.todos);

    const handleTodoStatusChange = (id,
        status) => {
            useDispatch({
                type: "updateTodoStatus",
                payload: {
                    id,
                    status,
                },
            });
        };

        return (
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.name}
                        <button onClick={() =>
                        handleTodoStatusChange(todo.id,
                        todo.status === "pending" ? "completed" :
                    "pending")}>
{todo.status === "pending" ? "Mark as completed" : "Mark as pending"}
                    </button>
                    </li>
                ))}
            </ul>
        );
                        };

                        export default TodoList;