import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

interface Props {
    todo: React.ReactNode 
}

const TodoList: React.FC<Props> = ({ todo }) => {
    const [todoArray, updateTodoArray] = useState<React.ReactNode[]>([] );
    
    useEffect(() => {
        updateTodoArray(todoArray => [...todoArray, todo]);
    }, [todo]);

    return (
        <>
          <List> 
            { todoArray && todoArray.map((todoItem, index) => {
              return <ListItem disablePadding key={index}>{todoItem}</ListItem>
            })}
          </List>  
        </>
    )
}

export default TodoList;