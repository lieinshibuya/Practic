// Импорт React и хука useState для управления состоянием компонента
import React, { useState } from 'react';


function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask.trim(), completed: false }]);
            setNewTask('');
        }
    };

    const toggleTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const remainingTasks = tasks.filter((task) => !task.completed).length;

    // Возвращение JSX разметки компонента
    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Enter a new task"
            />
            <button onClick={addTask}>Add Task</button>
            <p>Remaining tasks: {remainingTasks}</p>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        <span onClick={() => toggleTask(index)}>{task.text}</span>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
