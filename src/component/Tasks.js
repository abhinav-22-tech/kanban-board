import { memo, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

import "./styles/tasks.css";
import ProgressBar from "./ProgressBar";
import { onDrawerOpen } from "./app/kanbanSlice";

const Tasks = memo(({ task, index }) => {
  // console.log("Tasks");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // console.log(task);
  // }, []);

  const handleDetailOfTask = () => {
    dispatch(
      onDrawerOpen({
        id: task.id,
        dueDate: task.dueDate,
        labels: task.labels,
        priority: task.priority,
        content: task.content,
        description: task.description,
        progress: task.progress
      })
    );
  };
  return (
    <Draggable draggableId={task.id} index={index} type="TASK">
      {(provided) => (
        <div
          className="task"
          ref={provided.innerRef}
          onClick={handleDetailOfTask}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="task-content">
            {/* Priority */}
            {task.priority && (
              <div className="task-priority">
                <span className={`task-priority-text ${task.priority}`}>
                  {" "}
                  {task.priority.charAt(0).toUpperCase()}
                </span>
              </div>
            )}

            <div className="task-description">{task.content}</div>
            {/* Label */}
            <div className="task-title">
              {task.labels && (
                <div className="task-label">
                  {task.labels.map((label) => (
                    <span
                      key={label.text}
                      className="task-label"
                      style={{backgroundColor: label.color}}
                    >
                      {label.text}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {/* Progress */}
            <ProgressBar progress={task.progress} />
            {/* Due Date */}
            <div className="task-date">
              {task.dueDate && (
                <span className="task-due-date">{task.dueDate}</span>
              )}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
});

export default Tasks;

// Progress according with todays date and due date

// Title
// Assign
// Button to delete task
