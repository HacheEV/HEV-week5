import React, { useEffect, useState } from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import todosRepository from './infraestructure/todosRepository';

function App() {

  const [listTodo, setListTodo] = useState([])

  useEffect (() => {
    todosRepository.getTodo().then((response) => {
       setListTodo(response);
  });
}, []);
  

  const changedState = () => {
    
    todosRepository.getTodo().then((response) => {
      setListTodo(response);
 });
  }
  
  return (
    <div className="container">
      <CreateTodo />
      
      <TodoList className="to_doList" changedState={changedState} todos={listTodo.filter(x => x.status === 'to_do')} title={'TO DO'}/>
      <TodoList className="to_doList"  changedState={changedState} todos={listTodo.filter(x => x.status === 'doing')} title={'DOING'}/>
      <TodoList className="to_doList"  changedState={changedState} todos={listTodo.filter(x => x.status === 'finished')} title={'FINISHED'}/>
      
    </div>
  );
}

export default App;

