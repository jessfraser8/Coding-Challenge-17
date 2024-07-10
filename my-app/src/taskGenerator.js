// taskGenerator.js
// Display tasks with status.

// Import tasks.
import tasks from './tasks.js'

let index = 0

function TaskGenerator() {
    let list = tasks.map(task => {
        if (task.isCompleted) {
            return (
                <div>
                    <p>{task.name}</p>
                    <p>Completed! ✅</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>{task.name}</p>
                    <p>Pending...</p>
                </div>
            )
        }
        
        
    })
    return (
        <div>
            {list[index]}
            <button onClick={() => {
                index ++
                if (index >= list.length) {
                    index = 0
                }
            }}>Next Task</button>
        </div>
    )

}

export default TaskGenerator;