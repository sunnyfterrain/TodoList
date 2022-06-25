import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import TodoSearchModal from './TodoSearchModal';

const InsertForm = styled.form`
  width: 50%;
  padding: 5px 5px;
  border: 1px solid gray;
  border-radius: 5px;
  input {
    border: none;
    outline: none;
    width: 100%;
  }
`;

const TodoSearch = () => {
  const todos = useTodoState();
  const [value, setValue] = useState('');

  const isTrue = value.length >= 1 ? true : false;

  const handleModal = (e) => {
    setValue(e.target.value);
  };

  return (
    <InsertForm>
      <input type="text" placeholder="검색" onChange={handleModal} value={value} />
      {isTrue && <TodoSearchModal todos={todos} value={value} />}
    </InsertForm>
  );
};

export default TodoSearch;
