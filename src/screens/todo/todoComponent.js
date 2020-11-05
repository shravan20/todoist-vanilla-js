import React from 'react';
import './todoComponent.css';


const TodoComponent = () => {
    
    function validateTask(){
        x = document.getElementById("todo_input").value
        console.log(x);
    }

    function deleteAllElements(){
        console.log("I am sleepy.. Dont shout")

    }

    return  (<div id="todos">
                <div className="heading">
                    <h1>Add Todo List</h1>
                </div>
                <div className="todo-input-container">
                    <input className="todo_input" type="text" placeholder="Add Task..." />
                    <i className="fas fa-plus add-item" onClick={ validateTask } />
                    <i className="fas fa-trash-alt add-item deleteBtn" onClick={deleteAllElements} />
                </div>  
                
            </div>);
}

export default TodoComponent;