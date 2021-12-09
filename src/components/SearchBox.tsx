import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface Props {
    addTodo: (text: string, id: number) => void
}

const SearchBox: React.FC<Props> = ({ addTodo }) => {
    const [todoText, updateTodoText] = useState<string>('');
    const [todoId, updateTodoId] = useState<number>(0);

    const handleChange = (text: string) => {
        updateTodoText(text);
        updateTodoId(todoId + 1)
    }
    
    const handleClick = () => {
        addTodo(todoText, todoId);
        updateTodoText('');
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                m: '2em'
            }}>
            <TextField 
                id="standard-basic" 
                label="Standard" 
                variant="standard" 
                onChange={e => handleChange(e.currentTarget.value)}
                sx={{
                    mr: '16px'
                }}
                value={todoText}/>
            <Button 
                variant="contained"
                size="small"
                sx={{alignSelf: 'flex-end'}}
                onClick={handleClick}>
                Add Todo
            </Button>
        </Box>
    )
}

export default SearchBox;