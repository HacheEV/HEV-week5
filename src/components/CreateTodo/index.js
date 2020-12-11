import React, {useState} from 'react';
import './style.css';
import todosRepository from '../../infraestructure/todosRepository';

const CreateTodo = () => {
    

    const initialState = {
        name : '', 
        description: '', 
        completed: false,
        completion_date: '',
        status: 'to_do',
        owner: ''        
    
    };
    const [todo, setTodo] = useState(initialState);
  
    const handleChange = (key, value) => {
        setTodo({...todo, [key]: value});

    } 

    const createNewTodo = async () => {

        await todosRepository.createTodo(todo).then((response) => response);
        setTodo(initialState);
        
    }

    return(
        <div className="form-container">
            <div className="top-card">
                <div className="target">
                    <label>Name</label>
                    <input className="input" 
                        placeholder="To Do name"
                        value={todo.name}
                        onChange={(e) => handleChange('name', e.target.value)}/>
                </div>
                <div className="target">
                    <label>Owner</label>
                    <input className="input" 
                        placeholder="Owner name"
                        value={todo.owner}
                        onChange={(e) => handleChange('owner', e.target.value)}/>
                </div>
       
            </div>
            <label className="lbl-description">Description</label>
            <textarea 
                value={todo.description}
                rows="4"  
                className="txt-todo" 
                placeholder="Description"
                onChange={(e) => handleChange('description', e.target.value)}></textarea>

            <button className="btn-create" onClick={createNewTodo}>Create</button>

        </div>
    )
}
export default CreateTodo;