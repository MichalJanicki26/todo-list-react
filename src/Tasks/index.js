import "./style.css";

const deleteTask = (name) => {
    console.log(`Nazwa zadania do usunięcia: ${name}`);
}; 

const Tasks = ({tasks, hideDone}) => (
    <ul  className="tasks">
        {tasks.map(task => (
            <li
            key={task.id} 
            className={`tasks__item${task.done && hideDone ? " tasks__item--hidden" : ""}`}
            >
                    <button className="tasks__checkedButton">
                    {task.done ? "✓" : ""}
                    </button>
                    <span className={`tasks__content${task.done ? "--done" : ""}`}>
                    {task.content}</span>
                    <button className="tasks__removeButton" onClick={() => deleteTask(task.content)}>
                    X
                    </button>
            </li>
        ))}
    </ul>
);

export default Tasks;