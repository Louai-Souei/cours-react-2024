import { useState } from "react";
import "./taskform.css";

function TaskForm(props) {
  // props.sayHello(' value')
  const[title, setTitle]= useState("default")
  const[duration, setDuration]= useState(50)

  function handleTitle(e){
    setTitle(e.target.value)
    //console.log("🚀 ~ handleTitle ~ e.target.value:", e.target.value)
  }

  function handleDuration(e){
    setDuration(e.target.value)
   // console.log("🚀 ~ handleDuration ~ e.target.value:", e.target.value)
  }

  function handleClick(){
    props.addTask(title, duration)

  }

  return (
    <div className="taskForm">
      <form action="" className="form">

{/* //*?première méthode */}

        {/* <input type="text" name="title" onChange={handleTitle}/> */}

        {/* //*? deuxième méthode */}

          <input type="text" name="title" value={title} onChange={(e) => handleTitle(e)}/>
          <input type="text" name="duration" value={duration} onChange={(e) => handleDuration(e)}/>

        <button type="button" onClick={handleClick}>Add a task</button>
      </form>
    </div>
  );
}

export default TaskForm;