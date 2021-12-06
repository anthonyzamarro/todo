import React, { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [userText,updateUserText] = useState('');

  const updateText = (t: string) => {
    // console.log('updateText', t);
    updateUserText(t);
  }

  return (
    <div className="App">
      <SearchBox addTodo={(e: string) => updateText(e)}/>
      {/* <Todo text={userText}/> */}
      <TodoList todo={<Todo text={userText} />}/>
    </div>
  );
}

export default App;
