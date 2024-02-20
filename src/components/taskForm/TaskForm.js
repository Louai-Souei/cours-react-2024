import "./taskform.css" 

function TaskForm(){
    return(
        <div className="taskForm">
            <form action="" className="form">
            <input type="text" name="task" id=""/>
            <button type="submit">Add a task</button>
            </form>
        </div>
        )
}

export default TaskForm