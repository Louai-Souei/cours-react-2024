import "./taskform.css" 

function TaskForm(props){
    props.sayHello(' value')
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