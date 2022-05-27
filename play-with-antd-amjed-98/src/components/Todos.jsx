import { Row } from 'antd';
import 'antd/dist/antd.css';
import { useId } from 'react';
import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import AddTodoForm from './AddTodoForm';



const Todos = () => {

  const todosList = [
    { id: useId(), title: 'todo1' },
    { id: useId(), title: 'todo2' },
    { id: useId(), title: 'todo3' },
    { id: useId(), title: 'todo4' },
  ];

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(todosList);
  },[]);


  
  return (
    <>
    <AddTodoForm setTodos={setTodos} todos={todos} />
      <Row>
        {todos.map(({title, id }) => (
          <Todo todos={todos} title={title} setTodos={setTodos} key={id} id={id} />
        ))}
      </Row>
    </>
  );
};

export default Todos;
