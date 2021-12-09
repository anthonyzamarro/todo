import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Button, Container } from '@mui/material';
import Todo from './Todo';

interface Props {
  todos: object[],
  deleteTodo: (id: number) => void
}

const TodoList: React.FC<Props> = ({ todos, deleteTodo }) => {
  const handleDelete = (id: number) => {
    deleteTodo(id);
  }

  return (
    <Container>
      <List>
        {todos.map((todo: any) => {
          return <ListItem
                sx={{
                display: 'flex',
                mb: '12px',
                width: '100%'
              }}
              disablePadding
              key={todo.id}
            >
              <Todo 
                text={todo.text}
                id={todo.id}
              />
              <Button 
              variant="contained"
              size="small"
              sx={{
                ml: '12px'
              }}
              onClick={e => handleDelete(todo.id)}
            > X </Button>
            </ListItem> 
        })}
      </List>  
    </Container>
  )
}

export default TodoList;