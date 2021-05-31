import React, { useState } from 'react';

function ToDoItem(props) {

    const [isDone, setIsDone] = useState(false);

    function handleClick (event) {  
        setIsDone(prevValue => !prevValue);
    }
    
    return <li onClick={handleClick} style={{textDecoration: isDone? "line-through" : "none"}}>{props.text}</li>
}

export default ToDoItem;