import axios from 'axios'
import React from 'react'
import '../App.css';

function TodoItem(props) {
    const deleteTodoHandler = (title) => {
    axios.delete(`http://localhost:8000/task/${title}`)
        .then(res => console.log(res.data)) }
  
    return (
        <div className='justify-content-center align-items-center' style={{"width":"500px", "backgroundColor":"white"}}>
            <p>
                <span style={{fontWeight: 'bold, underline' }}>{props.todo.title} | </span> {props.todo.task} 
                <br></br>
                <button onClick={() => deleteTodoHandler(props.todo.title)} className="btn btn-dark btn-sm mx-2 mb-0" >Delete Todo</button>
                <hr></hr>
            </p>
        </div>
    )
}

export default TodoItem;