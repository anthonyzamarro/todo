import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

interface Props {
    text: string,
    id: number
}

const Todo: React.FC<Props> = ({ text, id }) => {
    const [todoText, updateTodoText] = useState<string>(text);
    const [todoComplete, updateTodoComplete] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateTodoText(e.target.value);
    }

     const handleComplete = () => {
      updateTodoComplete(!todoComplete);
    }

    return (
        <>
            {
                <div>
                <Button 
                    variant="contained"
                    size="small"
                    sx={{
                      mr: '12px'
                    }}
                    onClick={e => handleComplete()}
                  > Complete </Button>
                <TextField 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}  
                    value={todoText}
                    data-id={id}
                    disabled={todoComplete}
                /> 
                </div>
            }
        </>
    )
}

export default Todo;