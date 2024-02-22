import { useState } from "react";
import "./task.css";

function Task(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedDuration, setEditedDuration] = useState(props.duration);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleDurationChange = (e) => {
    setEditedDuration(e.target.value);
  };

  const handleUpdate = () => {
    const updatedTask = { title: editedTitle, duration: editedDuration };
    props.updateTask(props._id, updatedTask);
    setIsEditing(false); 
  };

  const handleDelete = () => {
    props.deleteTask(props._id);
    //console.log("🚀 ~ handleDelete ~ props._id:", props._id)
  };
    

   return (
    <div className={`task ${props.duration <= 60 ? "custom-task" : ""}`} style={{ backgroundColor: "cyan" }}>
      <div className="title">
        {isEditing ? (
          <input type="text" value={editedTitle} onChange={handleTitleChange} />
        ) : (
          <span>{props.title}</span>
        )}
      </div>
      <div className="title">
        {isEditing ? (
          <input type="number" value={editedDuration} onChange={handleDurationChange} step="5" />
        ) : (
          <span>{props.duration}</span>
        )}
      </div>
      {props.details && <div className="title">{props.details.difficulty}</div>}
      {props.details && <div className="title">{props.details.level}</div>}
      <div className="actions">
        {isEditing ? (
          <button onClick={handleUpdate}>save</button>
        ) : (
          <button onClick={handleEdit}>update</button>
        )}
        {!isEditing && <button onClick={handleDelete}>delete</button>}
      </div>
    </div>
  );
}

export default Task;
