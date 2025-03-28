import React, { useState } from "react";

const TodoApp = () => {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    setTodo([
      ...todo,
      {
        task: newTask,
        completed: false,
      },
    ]);
    setNewTask("");
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...todo];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTodo(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter the task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button disabled={!newTask} onClick={handleAddTask}>
        Add
      </button>

      <div className="tasks">
        {todo.map((task, index) => (
          <div
            key={index}
            className="task"
            style={{
              backgroundColor: task.completed ? "yellow" : "lightgoldenrodyellow",
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(index)}
            />
            <span>{task.task}</span>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
