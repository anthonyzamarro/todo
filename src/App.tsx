import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todoList, updateTodoList] = useState<Object[]>([]);

  const addNewTodo = (newTask: string, todoId: number) => {
    updateTodoList(todoList => [...todoList, {text: newTask, id: todoId}])
  }

  const deleteTodo = (id: number) => {
    updateTodoList(todoList.filter((t: any, i) => t.id !== id));
  }

  return (
    <div className="App">
      <SearchBox addTodo={(task: string, id: number) => addNewTodo(task, id)}/>
        <TodoList 
          todos={todoList}
          deleteTodo={(id: number) => deleteTodo(id)}
        />
    </div>
  );
}

export default App;
