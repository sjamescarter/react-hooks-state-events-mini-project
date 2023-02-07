import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("")
  const [category, setCategoy] = useState("Code")

  const selectOptions = categories.map((category) => {
    if(category === "All"){
      return null;
    } else {
      return <option key={category}>{category}</option>
    }
  })

  function handleSubmit(e) {  
    e.preventDefault();
    const newTask = {
      text: text,
      category: category
    };

    onTaskFormSubmit(newTask);
    setText("");
    setCategoy("Code");
  }
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategoy(e.target.value)}>
          {selectOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
