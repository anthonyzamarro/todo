import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Button, Container } from '@mui/material';
import Todo from './Todo';

interface Props {
  text: string,
  id: number
}

const TodoList: React.FC<Props> = (props: any) => {
    const [todoArray, updateTodoArray] = useState<Object[]>([]);

    const handleDelete = (id: number) => {
      updateTodoArray(todoArray.filter((t: any, i) => t.id !== id));
    }
    
    useEffect(() => {
      updateTodoArray(todoArray => [...todoArray, props]);
    }, [props]);

    return (
        <Container>
          <List>
            { todoArray.map((todoItem: any, index) => {
              console.log(todoItem);
              return (
                index > 0 ?
                <ListItem
                    sx={{
                    display: 'flex',
                    mb: '12px',
                    width: '100%'
                  }}
                  disablePadding
                  key={todoItem.id}
                >
                <Button 
                  variant="contained"
                  size="small"
                  sx={{
                    mr: '12px'
                  }}
                  onClick={e => handleDelete(todoItem.id)}
                >
                X
                </Button>
                <Todo 
                  text={todoItem.text}
                  id={todoItem.id}
                />
                </ListItem> 
                : 
                <div key={0}></div>
                )
            }) }
          </List>  
        </Container>
    )
}

export default TodoList;