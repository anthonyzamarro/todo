import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

interface Props {
    text: string
}

const Todo: React.FC<Props> = ({ text }) => {
    const [todoText, updateTodoText] = useState<string>(text);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateTodoText(e.target.value);
    }

    return (
        <>
            {
                text !== "" && 
                <TextField 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}  
                    value={todoText} 
                /> 
            }
        </>
    )
}

export default Todo;