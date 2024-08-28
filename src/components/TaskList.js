// src/components/TaskList.js
import React, { useEffect } from 'react';

const TaskList = ({ tasks }) => {
    useEffect(() => {
        tasks.forEach(({ task, reminder }) => {
            if (reminder) {
                const reminderTime = new Date(reminder).getTime();
                const currentTime = new Date().getTime();
                const timeDiff = reminderTime - currentTime;

                if (timeDiff > 0) {
                    setTimeout(() => {
                        alert(`Reminder: ${task}`);
                    }, timeDiff);
                }
            }
        });
    }, [tasks]);

    return ( <
        ul > {
            tasks.map((t, index) => ( <
                li key = { index } > { `${t.task} - Reminder: ${t.reminder}` } < /li>
            ))
        } <
        /ul>
    );
};

export default TaskList;