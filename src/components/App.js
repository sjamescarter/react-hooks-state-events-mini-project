import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentTasks, setCurrentTasks] = useState(TASKS);

  function onTaskFormSubmit(newTask) {
    setCurrentTasks([...currentTasks, newTask]);
  }

  const filteredTasks = currentTasks.filter((task) => task.category === selectedCategory);
  const taskList = selectedCategory === "All" ? currentTasks : filteredTasks;

  function handleDelete(e) {
    const completedTask = e.target.name;
    const newTaskList = currentTasks.filter((task) => task.text !== completedTask);
    setCurrentTasks(newTaskList);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList 
        tasks={taskList} 
        handleDelete={handleDelete}
        // currentTasks={currentTasks} 
        // setCurrentTasks={setCurrentTasks}
        // selectedCategory={selectedCategory} 
      />
    </div>
  );
}

export default App;
