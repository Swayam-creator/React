import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removetodo, updatetodo } from "../Features/todo/todoSlice";
import Addtodo from "./Addtodo";

function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="mt-10 ml-30">
            <div className="p-6 bg-black rounded-lg shadow-md w-3/5 ml-40">
                <h2 className="text-2xl font-bold text-center text-white mb-4">My Todos</h2>
                <ul className="space-y-2">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex justify-between items-center bg-white p-4 rounded shadow hover:bg-gray-50"
                        >
                            <span className="text-lg text-gray-700">{todo.text}</span>
                            <button
                                className="text-blue-500 hover:text-blue-700 focus:outline-none ml-2"
                                onClick={() => dispatch(updatetodo({ id: todo.id, text: todo.text }))}
                            >
                                ✏️
                            </button>
                            <button
                                onClick={() => dispatch(removetodo(todo.id))}
                                className="text-red-500 hover:text-red-700 focus:outline-none ml-2"
                            >
                                ❌
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
         
            
        </div>
    );
}

export default Todo;
