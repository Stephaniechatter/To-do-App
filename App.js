import React, { useState } from 'react';
import styled from '@emotion/styled';
import TodoList from './TodoList';
import InputForm from './InputForm';

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <AppContainer>
      <h1>To-Do App</h1>
      <InputForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </AppContainer>
  );
}

export default App;