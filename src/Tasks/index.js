import "./style.css";

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
                    <button className="tasks__removeButton" onClick={() => console.log("Kliknięto w 'X'")}>
                    X
                    </button>
            </li>
        ))}
    </ul>
);

export default Tasks;