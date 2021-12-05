import React from 'react';
// import TextField from '@mui/material/TextField';

interface Props {
    text: string
}

const Todo: React.FC<Props> = ({ text }) => {
    return (
        <>
            <p> {text} </p>
        </>
    )
}

export default Todo;