import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface Props {
    addTodo: (text: string) => void
}

const SearchBox: React.FC<Props> = ({ addTodo }) => {
    const [todoText, updateTodoText] = useState<string>('');

    const handleChange = (text: string) => {
        updateTodoText(text);
    }

    const handleClick = () => {
        addTodo(todoText);
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                m: '2em'
            }}
        >
            <TextField 
                id="standard-basic" 
                label="Standard" 
                variant="standard" 
                onChange={e => handleChange(e.currentTarget.value)}
                sx={{
                    mr: '16px'
                }}
            />
            <Button 
                variant="contained"
                size="small"
                sx={{alignSelf: 'flex-end'}}
                onClick={handleClick}
            >
                Add Todo
            </Button>
        </Box>
    )
}

export default SearchBox;