import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete, selectedCategory, currentTasks, setCurrentTasks }) {

  // const filteredTasks = currentTasks.filter((task) => task.category === selectedCategory);
  // const taskList = selectedCategory === "All" ? currentTasks : filteredTasks;
  
  const displayTasks = tasks.map((task) => {
    return <Task key={task.text} text={task.text} category={task.category} handleDelete={handleDelete} />
  })

  // function handleDelete(e) {
  //   const completedTask = e.target.name;
  //   const newTaskList = currentTasks.filter((task) => task.text !== completedTask);
  //   setCurrentTasks(newTaskList);
  // }

  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;
