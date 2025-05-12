export default function TaskList(tasks, deleteTask) {
    return (
        <ul>
            {tasks.map((task, i) => (
                <li key={i}>
                    {task}
                    <button onClick={() => deleteTask(i)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}