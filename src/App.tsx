import React, { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todoText,updateTodoText] = useState<string>('');
  const [todoId, updateTodoId] = useState<number>(0);

  const updateText = (t: string) => {
    updateTodoText(t);
    updateTodoId(todoId + 1);
  }

  return (
    <div className="App">
      <SearchBox addTodo={(e: string) => updateText(e)}/>
        <TodoList 
          text={todoText}
          id={todoId}
        />
    </div>
  );
}

export default App;
