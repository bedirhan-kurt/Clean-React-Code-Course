import { useState } from 'react';
import NewTaskForm from "./NewTaskForm.jsx";
import TaskList from "./TaskList.jsx";
import useTasks from "./useTasks.jsx";


// Oppgave:
// 1) Les og forstå komponenten nedenfor.
// 2) Skriv ansvarlighetene til komponenten i en liste.
// 3) Refactor komponenten, lag nye komponenter/hook i "solution" mappen. Bruk alle 3 prinsippene.

function TaskManager() {
    // Ansvarligheter:
    // Rendering UI

    const { tasks, input, setInput, addTask, deleteTask } = useTasks();

    return (
        <div style={{ padding: 20 }}>
            <h1>Task Manager</h1>
            <NewTaskForm input={input} setInput={setInput} addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} />
        </div>
    );
}

export default TaskManager;