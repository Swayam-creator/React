import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removetodo, updateTodo, toggleTodo } from "../features/todo/todoSlice";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEditHandler = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const updateHandler = () => {
    if (editText.trim()) {
      dispatch(updateTodo({ id: editId, text: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  const completedTasks = todos.filter((todo) => todo.completed).length;
  const totalTasks = todos.length;
  const completionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md w-3/4 ml-32">
      <h2 className="mb-4 text-lg font-bold text-gray-700">Todo List</h2>
      <div className="flex justify-center items-center mb-4">
        <div className="w-24 h-24">
        { todos.length>0 && <CircularProgressbar
            value={completionPercentage}
            text={`${Math.round(completionPercentage)}%`}
            styles={buildStyles({
              textColor: "#4A5568",
              pathColor: "#4CAF50",
              trailColor: "#D1D5DB",
            })}
          />}
        </div>
      </div>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 border rounded-md shadow-sm ${
              todo.completed ? "bg-green-100" : "bg-white"
            }`}
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="cursor-pointer"
              />
              {editId === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-grow p-2 mr-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              ) : (
                <span className={`${todo.completed ? "line-through text-gray-500" : ""}`}>
                  {todo.text}
                </span>
              )}
            </div>
            <div className="flex gap-2">
              {editId === todo.id ? (
                <button
                  onClick={updateHandler}
                  className="px-2 py-1 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => startEditHandler(todo.id, todo.text)}
                  className="px-2 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Update
                </button>
              )}
              <button
                onClick={() => dispatch(removetodo(todo.id))}
                className="px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
