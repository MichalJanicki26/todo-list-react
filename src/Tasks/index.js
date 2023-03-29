import "./style.css";

const Tasks = ({tasks, hideDone, removeTask, toggleTaskDone}) => (
    <ul  className="tasks">
        {tasks.map(task => (
            <li
            key={task.id} 
            className={`tasks__item${task.done && hideDone ? " tasks__item--hidden" : ""}`}
            >
                    <button className="tasks__checkedButton" onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✓" : ""}
                    </button>
                    <span className={`tasks__content${task.done ? "--done" : ""}`}>
                    {task.content}
                    </span>
                    <button className="tasks__removeButton" onClick={() => removeTask(task.id)}>
                    X
                    </button>
            </li>
        ))}
    </ul>
);

export default Tasks;