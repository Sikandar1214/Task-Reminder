// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [task, setTask] = useState('');
    const [reminder, setReminder] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task && reminder) {
            addTask({ task, reminder });
            setTask('');
            setReminder('');
        }
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        placeholder = "Task"
        value = { task }
        onChange = {
            (e) => setTask(e.target.value) }
        /> <
        input type = "datetime-local"
        value = { reminder }
        onChange = {
            (e) => setReminder(e.target.value) }
        /> <
        button type = "submit" > Add Task < /button> <
        /form>
    );
};

export default TaskForm;