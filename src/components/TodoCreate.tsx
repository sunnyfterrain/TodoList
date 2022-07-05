import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import { todoActions } from '../redux/todoSlice';

const TodoCreate = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const dispatch = useDispatch();

  const onToggle = () => {
    setOpen(!open);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const onSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(todoActions.create(value));
    setValue('');
    setOpen(false);
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" onChange={onChange} />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

const CircleButton = styled.button<CircleProps>`
  background: #0c68ab;
  &:hover {
    background: #0c68ab;
  }
  &:active {
    background: #20c997;
  }
  cursor: pointer;

  width: 80px;
  height: 80px;
  display: block;

  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

export default React.memo(TodoCreate);
