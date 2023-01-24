import React from 'react'
import { useState } from 'react';

const TodoInput = ({addTodo}) => {
    const [text,setText]=useState("");
    // console.log(text)
    const handleAdd=()=>{
      addTodo(text);
    }
  return (
    <div>
        <input type="text" placeholder='Add Todos' value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput