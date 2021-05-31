import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event){
    const newVal = event.target.value;
    setInputText(newVal);
  }

  function addItem(event){
    setItems(prevItems => {
      return [...prevItems, inputText]
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" id="myItem" onChange={handleChange}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item =><ToDoItem text={item} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
