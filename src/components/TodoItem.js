import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { todoActions } from '../redux/todoSlice';

const ToDoItem = ({ done, text, id }) => {
  const dispatch = useDispatch();

  const onRemove = () => dispatch(todoActions.remove(id));
  const onToggle = () => dispatch(todoActions.toggle(id));

  return (
    <TodoItemBlock>
      <CheckBox done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckBox>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;
const CheckBox = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #0c68ab;
      color: #0c68ab;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;
export default React.memo(ToDoItem);
