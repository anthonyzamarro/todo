import React from 'react';

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