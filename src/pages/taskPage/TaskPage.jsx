//import Task from "../../components/task/Task";
import { useState } from "react";
import TaskForm from "../../components/taskForm/TaskForm";
import TasksList from "../../components/taskList/TasksList";

function TaskPage() {
  const steps = ["Enter the title", "Click on the button"];
  const [isVisible, setIsVisible] = useState(true);
  //console.log("🚀 ~ TaskPage ~ isVisible:", isVisible);

  // const tasks = [
  //   {
  //     title: "Learn HTML",
  //     duration: 60,
  //     details: {
  //       difficulty: 8,
  //       level: "level 2",
  //     },
  //   },
  //   {
  //     title: "Learn Angular",
  //     duration: 120,
  //     details: {
  //       difficulty: 14,
  //       level: "level 5",
  //     },
  //   },
  //   {
  //     title: "Learn React",
  //     duration: 100,
  //     details: {
  //       difficulty: 12,
  //       level: "level 4",
  //     },
  //   },
  // ];

  const [tasks, setTasks] = useState([
    {
      _id: "1",
      title: "learn html",
      duration: "60",
    },
    { _id: "2", title: "learn react", duration: "120" },
    { _id: "3", title: "learn angular", duration: "180" },
  ]);

    function deleteTask(taskId) {
    const updatedTasks = tasks.filter(task => task._id !== taskId);
    setTasks(updatedTasks);
  }

  function updateTask(taskId, newValues) {
  const updatedTasks = tasks.map(task => {
    if (task._id === taskId) {
      return { ...task, ...newValues };
    }    
    //console.log("🚀 ~ updatedTasks ~ task:", task)
    return task;
  });

  setTasks(updatedTasks);
  //console.log("🚀 ~ updateTask ~ updatedTasks:", updatedTasks)
}


  const loading = false;
  // function sayHello(value) {
  //   alert("hello" + value);
  // }

  function handleVisibility(par) {
    setIsVisible(par);
  }

  function addTask(title, duration){
    //console.log("🚀 ~ addTask ~ title , duration:", title, duration)
    
    const newTask = {
      _id:tasks.length + 1 + "",
      title: title,
      duration: duration
    }

    // //* Ou bien

    // const newTask ={_id:tasks.length + "", title:title, duration:duration}

    //setTasks(tasks.concat(newTask))
    setTasks([...tasks, newTask])

  }
    //console.log("🚀 ~ addTask ~ tasks:", tasks)

  return (
    <div className="task-page">
      <ul>
        {steps.map((step) => {
          return <li key={step}>{step}</li>;
        })}
      </ul>
      {/* <TaskForm sayHello={sayHello} /> */}

      {/*! //! OnClick accepte le nom de la fct et non pas l'appel de la fct !! */}

      {/* //*? Cette methode la fct est sans paramètre */}
      {/* <button onClick={handleVisibility}>Toggle Visibility</button> */}

      {/* //* Cette methode la fct est avec paramètre */}
      <button onClick={() => handleVisibility(!isVisible)}>
        Toggle Visibility
      </button>

      <TaskForm addTask={addTask}/>
      {/* {loading ? (
        <div>loading... </div>
      ) : (
        <>
          <Task />
          <Task />
          <Task />
        </>
      )} */}

      {/*------- deuxième méthode -------*/}

      {/* {loading && <div>loading... </div>} */}
      {/* {
        !loading &&
          tasks.map((task) => {
            return (
              <Task
                title={task.title}
                duration={task.duration}
                details={task.details}
              />
            );
          })

        // <>
        //   <Task
        //     title="Learn HTML"
        //     duration={60}
        //     details={{
        //       difficulty: 8,
        //       level: "level 2",
        //     }}
        //   />
        //   <Task
        //     title="Learn Angular"
        //     duration={120}
        //     details={{
        //       difficulty: 14,
        //       level: "level 5",
        //     }}
        //   />
        //   <Task
        //     title="Learn React"
        //     duration={100}
        //     details={{
        //       difficulty: 12,
        //       level: "level 4",
        //     }}
        //   />
        // </>
      } */}

      {loading && <div>loading...</div>}
      {!loading && isVisible && (
        <TasksList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>

        // <>
        //   <Task title="learn html" duration={30} />
        //   <Task
        //     title="learn react"
        //     duration={30}
        //     details={{ difficulty: "high", level: 1 }}
        //   />
        //   <Task
        //     title="learn angular"
        //     duration={30}
        //     details={{ difficulty: "high", level: 1 }}
        //   />
        // </>
      )}
    </div>
  );
}

export default TaskPage;