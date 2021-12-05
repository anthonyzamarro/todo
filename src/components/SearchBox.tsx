import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

interface Props {
    addTodo: (text: string) => void
}


const SearchBox: React.FC<Props> = ({ addTodo }) => {
    // const [userText, updateUserText] = useState('');

    const handleChange = (text: string) => {
        // console.log('SearchBox', text);
        addTodo(text);
    }

    return (
        <>
            <TextField 
                id="standard-basic" 
                label="Standard" 
                variant="standard" 
                onChange={e => handleChange(e.currentTarget.value)}
                />
        </>
    )
}

export default SearchBox;