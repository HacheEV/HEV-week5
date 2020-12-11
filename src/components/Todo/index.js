import React from 'react';
import './style.css';
import todosRepository from '../../infraestructure/todosRepository';

const Todo = (props) => {

    const todo = props.todo;

    let isChecked = false;
    
 
    const handleDoing = async () => {
                
    if(todo.status === 'doing'){
            await todosRepository.patchTodo(todo.id, {
                status:'to_do', 
           })
            
        }
    if(todo.status === 'finished' && todo.status !== 'to_do'){
            await todosRepository.patchTodo(todo.id, {
                status:'doing', 
                completed: false,
                completion_date: ''
            })
    } else{
            await todosRepository.patchTodo(todo.id, {
                status:'doing',
            })
                       
        }
      

        props.changedState();
    };
    const handleFinished = async () => {
        
    if(todo.status === 'finished' && todo.status !== 'doing'){
        await todosRepository.patchTodo(todo.id, {
            status:'to_do', 
            completed: false,
            completion_date: ''
            })
            console.log(todo.completed);
        } else {
         await todosRepository.patchTodo(todo.id, {
            status:'finished', 
            completed: true,
            completion_date: Date.now()
            })
            console.log(todo.completed);
            
        }
    
    
        props.changedState();
    };
    if(todo.status === 'doing'){
        isChecked = true;
    }
    if(todo.status === 'to_do' && todo.completed === false){
        isChecked = false;
    }
  
    return(
        <div className="todo">
            <div className="row">
                <div className="name">{todo.name}</div>
                <div className="owner">{todo.owner}</div>
            </div>
            <div className="description">{todo.description}</div>
            <div className="row">
                <input type="checkbox"  checked={isChecked} onChange={handleDoing}/>
                <label>Doing</label>
            </div>
            <div className="row">
                <input type="checkbox"  checked={todo.completed}  onChange={handleFinished}/>
                <label>Completed</label>
            </div>
            
        </div>
    )
}
export default Todo;