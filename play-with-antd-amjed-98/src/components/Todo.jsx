import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Button, Col } from 'antd';
import React from 'react';

const Todo = ({ setTodos, todos, id, title }) => {
  const deleteTodo = ({ target }) => {
    setTodos(todos.filter((todo) => todo.id !== target.id));
  };


  const editTodo = ({ target: { id } }) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, title: 'great editing but i will handle the editing' } : todo)));
  };
  return (
    <Col span={24} id={id}>
      {title}
      <Button icon={<DeleteFilled />} onClick={deleteTodo} id={id} />
      <Button icon={<EditFilled />} id={id} onClick={editTodo} />
    </Col>
  );
};

export default Todo;
