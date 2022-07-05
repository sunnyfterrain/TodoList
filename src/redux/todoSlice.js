import { createSlice } from '@reduxjs/toolkit';

const INITIAL_TODOS = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
  },
  {
    id: 5,
    text: '리팩토링 하기',
    done: true,
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.id}`);
  }
};

const todos = createSlice({
  name: 'todos',
  initialState: INITIAL_TODOS,
  reducers: {
    toggle(state, action) {
      const targetId = action.payload;
      const index = state.findIndex((todo) => todo.id === targetId);
      state[index].done = !state[index].done;
    },
    remove(state, action) {
      const targetId = action.payload;
      const index = state.findIndex((todo) => todo.id === targetId);
      state.splice(index, 1);
    },
    create(state, action) {
      const newId = Math.max(0, ...state.map((todo) => Number(todo.id))) + 1;
      const newText = action.payload;
      state.push({ id: newId, text: newText, done: false });
    },
  },
});

export const todoActions = todos.actions;

export default todos.reducer;
