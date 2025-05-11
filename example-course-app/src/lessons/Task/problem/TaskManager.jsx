import { useState } from 'react';

function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (!input.trim()) return;
        setTasks([...tasks, input]);
        setInput('');
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Task Manager</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((task, i) => (
                    <li key={i}>
                        {task}
                        <button onClick={() => deleteTask(i)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskManager;