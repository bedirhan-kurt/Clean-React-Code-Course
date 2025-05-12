import {useState} from "react";

export default function useTasks() {
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

    return {tasks, input, setInput, addTask, deleteTask};
}