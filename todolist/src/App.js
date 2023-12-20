import {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [updating, setUpdating] = useState(false);
  function addTodo(){
    if(newTodo.trim()){
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo,
        completed: false,
        updating: false
      }]);
      setNewTodo('');
    }
  }

  function updateTodo(id, newText){
    setTodos(todos.map(todo =>(todo.id === id ?{
      ...todo,
      text: newText
    } : todo)));
  }

  function toggleTodo(id){
    setTodos(todos.map(todo =>(todo.id === id ?{
      ...todo,
      completed: !todo.completed
    } : todo)));
  }

  function deleteTodo(id){
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function toggleUpdating(id){
    setUpdating(!updating);
    setTodos(todos.map(todo =>(todo.id === id ?{
      ...todo,
      updating: !todo.updating
    } : todo)));
  }
  return(
    <div className='App'>
      <h1>React To - Do App</h1>
      <input type='text'
      placeholder='Add a new to-do'
      value={
        newTodo
      }
      onChange={
        e => setNewTodo(e.target.value)
      }
      onKeyDown={
        e =>(e.key === 'Enter' ? addTodo() : null)
      }
      /><ul>
        {
          
        }
      </ul>
    </div>
  )
}