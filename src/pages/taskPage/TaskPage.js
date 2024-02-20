import Task from "../../components/task/Task";
import TaskForm from "../../components/taskForm/TaskForm";

function TaskPage() {
  const steps = ["Enter the title", "Click on the button"];
  const tasks = [
    {
      title: "Learn HTML",
      duration: 60,
      details: {
        difficulty: 8,
        level: "level 2",
      },
    },
    {
      title: "Learn Angular",
      duration: 120,
      details: {
        difficulty: 14,
        level: "level 5",
      },
    },
    {
      title: "Learn React",
      duration: 100,
      details: {
        difficulty: 12,
        level: "level 4",
      },
    },
  ];
  const loading = false;
  return (
    <div className="task-page">
      <ul>
        {steps.map((step) => {
          return <li>{step}</li>;
        })}
      </ul>
      <TaskForm />
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

      {loading && <div>loading... </div>}
      {
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
      }
    </div>
  );
}

export default TaskPage;
