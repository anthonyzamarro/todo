import React, { useEffect, useState } from 'react';

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
          <ul> 
            { todoArray && todoArray.map((todoItem, index) => {
              return <li key={index}>{todoItem}</li>
            })}
          </ul>  
        </>
    )
}

export default TodoList;