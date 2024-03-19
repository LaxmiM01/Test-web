import React, { useEffect, useState } from 'react'
import axios from "axios"
import Header from './compenents/Header'
import Form from './compenents/form';
import TodosList from './compenents/TodosList';
import "./App.css";

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input,setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
        try{
            const response = await axios.get(`http://localhost:5000/todo`)
            setTodos(response.data);
        }catch(error) {
            console.error(error)
        }
    }
    fetchTodos();
}, []);
  return (
    <div className='container'>
     <div className='app-wrapper'>
       <div>
        <Header/>
       </div>
       <div>
        <Form  
        input = {input}
        setInput={setInput}
        todos = {todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
        </div>
        <TodosList 
        todos={todos} 
        setTodos={setTodos}
        setEditTodo={setEditTodo}
        />
     </div>
    </div>
  )
}

export default App