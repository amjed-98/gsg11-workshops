import React, { useId } from 'react';
import { Form, Input } from 'antd';

const AddTodoForm = ({ setTodos, todos }) => {
  const id = useId();
  const onFinish = ({title}) => {
    setTodos((prev) => [...prev, { id, title }]);
  };  
  return (
    <Form
      name='basic'
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      autoComplete='off'>
      <Form.Item
        label='add todo'
        name='title'
        rules={[{ required: true, message: 'Please input your todo!' }]}>
        <Input />
      </Form.Item>
    </Form>
  );
};

export default AddTodoForm;
