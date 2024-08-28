// src/App.js
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css'; // Import the CSS file

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    return ( <
        div className = "container" >
        <
        h1 > Task Reminder App < /h1> <
        TaskForm addTask = { addTask }
        /> <
        TaskList tasks = { tasks }
        /> <
        div className = "footer" > Created by Sikandar Khan < /div> <
        /div>
    );
};

export default App;