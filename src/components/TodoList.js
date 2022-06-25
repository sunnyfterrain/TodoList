import React from 'react';
import { useTodoState } from '../TodoContext';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TotoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  overflow-y: auto;
`;

const TodoList = () => {
  const todos = useTodoState();

  return (
    <TotoListBlock>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />;
      })}
    </TotoListBlock>
  );
};

export default TodoList;
