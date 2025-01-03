import { useDispatch } from "react-redux";
import { addtodo } from "../features/todo/todoSlice";
import { useState } from "react";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addtodo(input));
      setInput("");
    }
  };

  return (
    
    <form
      onSubmit={addTodoHandler}
      className="flex flex-col items-center gap-4 p-4 bg-gray-100 rounded-md shadow-md w-3/4 mt-10  ml-32   mb-5"
    >
      <input
        type="text"
        placeholder="Add Todos..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
