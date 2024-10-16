import React from 'react';
import styled from '@emotion/styled';

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: ${props => props.completed ? '#f2f2f2' : 'white'};
`;

function Todo({ todo, toggleComplete, removeTodo }) {
  return (
    <TodoItem>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </TodoItem>
  );
}

export default Todo;