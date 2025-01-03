import './App.css';
import Addtodo from './components/Addtodo';
import Todo from './components/Todo';

function App() {
  return (
    <div className=" bg-gray-50  p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Todos...</h1>
      <Addtodo />
      <div className="mt-8 w-full max-w-md">
        <Todo />
      </div>
    </div>
  );
}

export default App;
