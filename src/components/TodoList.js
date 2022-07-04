import React from 'react';
import { useTodoState } from '../TodoContext';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
  // const todos = useTodoState();
  // context API

  const todos = useSelector((state) => state.todo);
  console.log(todos);
  return (
    <TotoListBlock>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />;
      })}
    </TotoListBlock>
  );
};

const TotoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  overflow-y: auto;
`;

export default TodoList;
