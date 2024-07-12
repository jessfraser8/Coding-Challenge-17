// taskGenerator.js
// Display tasks with status.

// Import tasks.
import tasks from './tasks.js';
import FancyText from './FancyText.js';
import {useEffect, useState} from 'react';

function Task({task}) {
    const [isCompleted, setCompleted] = useState(task.isCompleted)
    useEffect(() => {
        setCompleted(task.isCompleted)
    })
    return (
        <div className="task">
            <FancyText title={false} text={"Task: " + task.name}/>
            <div className="status">
                <input className="status-box" type="checkbox" checked={isCompleted} onChange={() => {
                    task.isCompleted = !task.isCompleted
                    setCompleted(task.isCompleted)
                }}/>
                <p>{isCompleted ? "Completed ✔️" : "Pending..."}</p>
            </div>
            <FancyText title={true} text={isCompleted ? "Good work!!" : "You got this!"}/>
        </div>
    )
}

function TaskGenerator() {
    let [index, setIndex] = useState(0)
    return (
        <div className="task-generator">
            <Task task={tasks[index]}/>
            <button className="next-button" onClick={() => {
                setIndex(index + 1)
                if (index === tasks.length - 1) {
                    setIndex(0)
                }
            }}>Next Task</button>
        </div>
    )
}

export default TaskGenerator;