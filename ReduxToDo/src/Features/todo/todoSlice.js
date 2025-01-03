import { createSlice,nanoid} from "@reduxjs/toolkit";
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
                text:action.payload,
            }
            state.todos.push(todo);
        },
        removetodo:(state,action)=>{
          state.todos=state.todos.filter((todo)=>todo.id!==action.payload);
        },
        updatetodo:(state,action)=>{
            const {id,text}=action.payload;
            state.todos=state.todos.find((todo)=>todo.id==id);
            if(todo){ todo.text=text; }
        }
    }
})
export  const { addtodo,removetodo,updatetodo }= todoSlice.actions;
export default todoSlice.reducer;