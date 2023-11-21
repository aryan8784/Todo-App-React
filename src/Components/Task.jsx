import React from "react";
import "./TodoApp.css";

const Task = ({ title,deleteTask,index }) => {

  const editTodo = ()=>{
      
  }


  return (
    <>
      <div>
        <div className="alert flex justify-between mt-5">
          <p className="text-black">{title}</p>
          <div>
            <button className="btn btn-sm" onClick={editTodo}>Edit</button>
            <button
            onClick={()=>deleteTask(index)}
              className="btn btn-sm btn-info text-white ml-1"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
