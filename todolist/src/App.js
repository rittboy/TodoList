import {useState} from 'react';
import './App.css';

function App(){
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
    setTodos(todos.map(todo =>(todo.id === id ? {
      ...todo,
      text: newText
    } : todo )));
  }

  function toggleTodo(id){
    setTodos(todos.map(todo =>(todo.id === id ? {
      ...todo,
      completed: !todo.completed
    } : todo)));
  }

  
}