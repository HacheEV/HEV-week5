import React from 'react';
import './style.css'
import Todo from '../Todo';


const TodoList = (props) => {
      
  const changedState = () => {
      props.changedState();
  }

    return(
        <div className="to_doList">
            <h2>{props.title}</h2>
            {props.todos.map((todo) => <Todo todo={todo} changedState={changedState} />)}
        </div>
    );
}
export default TodoList;