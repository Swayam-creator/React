import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[{id:1,text:"Hello World"}]
}
export const todoSlice=createSlice({
name:"todo",
initialState,
reducers:{
    addtodo:(state,action)=>{
    const todo={
         id:nanoid(),
         text:action.payload,}

     state.todos.push(todo);
    },
    removetodo:(state,action)=>{
        state.todos=state.todos.filter((todo)=>todo.id!==action.payload);
    },
    updateTodo: (state, action) => {
        console.log("UpdateTodo Payload:", action.payload);
        const { id, text } = action.payload;
        const todo = state.todos.find((todo) => todo.id === id);
        if (todo) {
          todo.text = text;
        }
      },
      toggleTodo: (state, action) => {
        const todo = state.todos.find((todo) => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed; 
        }
      },

},

}
)
export const {addtodo,removetodo,updateTodo,toggleTodo}=todoSlice.actions;
export default todoSlice.reducer;