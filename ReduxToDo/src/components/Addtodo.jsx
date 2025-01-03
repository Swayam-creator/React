import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../Features/todo/todoSlice";

function Addtodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addtodoHandler = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addtodo(input));
            setInput("");
        }
    };

    return (
        <form 
            onSubmit={addtodoHandler} 
            className="flex items-center gap-4 p-4 bg-gray-100 rounded shadow-md w-3/4 ml-3/5 mt-40"
        >
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a new todo..."
                className="flex-1 px-4 py-2 text-lg border border-gray-300 rounded focus:outline-none focus:ring-4 focus:ring-blue-300 active:ring-4 active:ring-blue-400 transition duration-300"
            />
            <button
                type="submit"
                className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 active:ring-2 active:ring-blue-400 transition duration-300"
            >
                Add Todo
            </button>
        </form>
    );
}

export default Addtodo;
