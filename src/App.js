import React from 'react';
import TodoCreate from './components/TodoCreate.tsx';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { TodoProvider } from './TodoContext';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
