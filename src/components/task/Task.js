import "./task.css";

function Task(props) {
  console.log("🚀 ~ Task ~ props:", props);
  //console.log("props: ", props);
  return (
    <>
      <div className="task" style={{ backgroundColor: "cyan" }}>
        <div className="title">{props.title}</div>
        <div className="title">{props.duration}</div>
        {props.details && (
          <div className="title">{props.details.difficulty}</div>
        )}

        {props.details && <div className="title">{props.details.level}</div>}
        <div className="actions">
          <span>delete</span>
          <span>update</span>
        </div>
      </div>
    </>
  );
}

export default Task;
