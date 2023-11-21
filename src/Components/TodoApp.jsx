import React from "react";
import "./TodoApp.css";
import Task from "./Task";
import { useState, useEffect } from "react";

const TodoApp = () => {
  const intialArray = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [tasks, setTasks] = useState(intialArray);
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title }]);
    setTitle("");
  };

  const deleteTask = (index) => {
    const filteredArray = tasks.filter((val, i) => {
      return i !== index;
    });
    setTasks(filteredArray);
  };

  const buttonHandel = () => {
    if (title === "") {
      alert("Enter Your task");
      return;
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className="navbar  bg-info text-white ">
        <button className=" text-2xl font-bold m-auto  ">Todo App</button>
      </div>

      <div className="container bg-neutral-content">
        <form onSubmit={submitHandler}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter your Task"
            className="input input-bordered input-info w-full mb-2"
          />

          <button
            className="btn w-28 m-auto btn-info text-white"
            onClick={buttonHandel}
            type="submit"
          >
            Submit task
          </button>
        </form>

        {tasks.map((val, index) => (
          <Task
            key={index}
            title={val.title}
            index={index}
            deleteTask={deleteTask}
            tasks={tasks}
          />
        ))}
      </div>
    </>
  );
};

export default TodoApp;
