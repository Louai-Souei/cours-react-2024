//import Task from "../../components/task/Task";
import TaskForm from "../../components/taskForm/TaskForm";
import TasksList from "../../components/taskList/TasksList";

function TaskPage() {
  const steps = ["Enter the title", "Click on the button"];
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

  const tasks = [
    {
      _id: "1",
      title: "learn html",
      duration: "60",
    },
    { _id: "2", title: "learn react", duration: "120" },
    { _id: "3", title: "learn angular", duration: "180" },
  ];

  const loading = false;
  function sayHello(value){
    alert('hello' + value)
  }
  return (
    <div className="task-page">
      <ul>
        {steps.map((step) => {
          return <li key={step}>{step}</li>;
        })}
      </ul>
      <TaskForm sayHello={sayHello} />
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
      {!loading && (
        <TasksList tasks={tasks} />

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
