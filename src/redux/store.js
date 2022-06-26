import { configureStore, createSlice } from '@reduxjs/toolkit';

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
];

const todos = createSlice({
  name: 'todos',
  initialState: INITIAL_TODOS,
});

export const store = configureStore({
  reducer: {
    todo: todos.reducer,
  },
});
