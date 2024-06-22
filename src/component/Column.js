import { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import Tasks from './Tasks';
import './styles/column.css';
import { addTasks } from './app/kanbanSlice';

const Column = ({ column }) => {
    // Handle input field for add new Task
    const [inputAddTask, setInputAddTask] = useState(false);
    const [addTaskText, setAddTaskText] = useState('');
    const dispatch = useDispatch();

    const onAddTask = () => {
        setInputAddTask(!inputAddTask);
    }

    const addNewTask = () => {
        if (addTaskText.trim()) {
            // handleAddTask(addTaskText, column.id);
            dispatch(addTasks({ columnId: column.id, taskContent: addTaskText }));
            setAddTaskText('');
            setInputAddTask(false);
        }
    }

    return (
        <div className="column">
            <div className='column-header'>
                <h2>{column.name}</h2>
                <div className='dropdown'>
                    <button className='add-task' onClick={onAddTask}>+</button>
                    {/* Input field to add new task */}
                    {inputAddTask &&
                        <div className='input-add-task'>
                            <input type="text" className='task-input' value={addTaskText}
                                onChange={(e) => setAddTaskText(e.target.value)}
                                placeholder='Enter Task Content'
                            />
                            <button className="submit-task-button" onClick={addNewTask}>Add</button>
                        </div>
                    }
                </div>
            </div>
            <Droppable droppableId={column.id}>
                {(provided) => (
                    <div className='task-list' ref={provided.innerRef}
                        {...provided.droppableProps}>
                        {column.tasks.map((task, index) => (
                            <Tasks key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default Column;