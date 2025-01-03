
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
    <h1 className='  text-neutral-200 font-jersey-15 font-bold font text-5xl text-center mt-10  -ml-20 '>
      To Do list
    </h1>
  <AddTodo/>
  <TodoList/>
      
    </>
  )
}

export default App
