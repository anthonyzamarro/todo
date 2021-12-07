import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Box, Button } from '@mui/material';

interface Props {
    todo: React.ReactNode 
}

const TodoList: React.FC<Props> = ({ todo }) => {
    const [todoArray, updateTodoArray] = useState<React.ReactNode[]>([]);
    
    useEffect(() => {
        updateTodoArray(todoArray => [...todoArray, todo]);
    }, [todo]);

    return (
        <>
          <List >
            { todoArray.map((todoItem, index) => {      
              return (
                index > 0 ?
                <Box
                    sx={{
                    display: 'flex',
                  }}
                  key={index}
                >
                  <Button 
                    variant="contained"
                    size="small"
                    sx={{
                      mr: '12px'
                    }}
                  >
                  Complete
                  </Button>
                  <ListItem disablePadding >{todoItem}</ListItem>
                </Box> 
                : 
                <div key={0}></div>
                )
            }) }
          </List>  
        </>
    )
}

export default TodoList;