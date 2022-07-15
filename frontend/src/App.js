import './App.css';
import React, {useState, useEffect, setInterval} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoView from './components/TodoListView';

function App() {

  const [todolist, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [task, setTask] = useState('')


  // Read all todos
  useEffect(() => {
    axios.get('http://localhost:8000/task/')
      .then(res => {
        setTodoList(res.data)
      })
  });

  // Post a todo
  const addTodoHandler = () => {
    axios.post('http://localhost:8000/task/', {'title': title, 'task':task})
    .then(res => console.log(res))
  };


  return (
        <div className='App list-group-item justify-content-center align-items-center mx-auto' 
        style={{"width":"600px", "backgroundColor":"white"}}>
        <h2 className='card text-white bg-dark mb-3'>React - FastAPI - Postgresql</h2>
        <span className='card-text'>
          <input className='mb-1 form-control titleIn' onChange={event => setTitle(event.target.value)} placeholder='Enter your Title' />
          <input className='mb-3 form-control desIn' onChange={event => setTask(event.target.value)} placeholder='Enter your Todo'/>
        <button className="btn btn-dark btn-sm mx-2 mb-3"  onClick={addTodoHandler}>Add Todo</button>
        </span>
        <h8 className='card text-white bg-dark mb-3'>Your Todo's</h8>
        <div>
        <TodoView todoList={todolist} />
        </div>
        <h8 style={{"width":"100%","height":"100%", "backgroundColor":"black"}}></h8>
        </div>

     

  );
}

export default App;
