import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { closeDrawer, updateTask } from "./app/kanbanSlice";
import "./styles/taskDrawer.css";
import ColorPalette from "./ColorPalette";

const TaskDrawer = () => {
  const dispatch = useDispatch();
  const selectedTask = useSelector((state) => state.kanban.selectedTask);
  const drawerOpen = useSelector((state) => state.kanban.drawerOpen);
  const [taskDetails, setTaskDetails] = useState({
    id: "",
    dueDate: "",
    labels: [],
    priority: "",
    content: "",
    description: "",
    progress: ''
  });
  const [inputLabelAdd, setInputLabelAdd] = useState(false);
  const [addLabelText, setAddLabelText] = useState({ text: "", color: "" });

  useEffect(() => {
    if (selectedTask) {
      setTaskDetails({
        id: selectedTask.id,
        dueDate: selectedTask.dueDate,
        labels: selectedTask.labels,
        priority: selectedTask.priority,
        content: selectedTask.content,
        description: selectedTask.description,
        progress: selectedTask.progress
      });
    }
  }, [selectedTask]);

  // console.log('Progress: ', taskDetails.progress);

  // if (!drawerOpen || !selectedTask) return null;

  const drawerClass = drawerOpen ? "task-drawer" : "task-overlay";

  const handleClose = () => {
    dispatch(closeDrawer());
  };

  const handlePriorityChange = (e) => {
    setTaskDetails({ ...taskDetails, priority: e.target.value });
  };

  const handleLabel = () => {
    setInputLabelAdd(!inputLabelAdd);
  };

  const handleNewLabel = (e) => {
    setTaskDetails({
      ...taskDetails,
      labels: { text: addLabelText.text, color: addLabelText.color },
    });
  };

  const handleInputContent = (e) => {
    setTaskDetails({ ...taskDetails, content: e.target.value });
  };

  const handleTextareaDes = (e) => {
    setTaskDetails({ ...taskDetails, description: e.target.value });
  };

  const handleProgressChange = (e) => {
    const value = e.target.value;
    if (value >= 0 && value <= 100) {
      setTaskDetails({ ...taskDetails, progress: e.target.value });
    }
  };

  const handleSaveTask = () => {
    dispatch(updateTask({ taskId: taskDetails.id, updates: taskDetails }));
  };

  return (
    <div className={drawerClass}>
      <div className="drawer-content">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        <h3>Edit Task</h3>
        {/* Priority */}
        <select
          name="priority"
          value={taskDetails.priority}
          className="drawer-select-priority"
          onChange={handlePriorityChange}
        >
          <option value="low" className="drawer-options">
            Low
          </option>
          <option value="medium" className="drawer-options">
            Medium
          </option>
          <option value="high" className="drawer-options">
            High
          </option>
          <option value="critical" className="drawer-options">
            Critical
          </option>
        </select>
        {/* Label */}
        {/* <div className="labels">
          {taskDetails.labels && (
            <div className="taskDetails-label">
              {taskDetails.labels.map((label) => (
                <span
                  key={label.text}
                  className={`taskDetails-label ${label.color}`}
                >
                  {label.text}
                </span>
              ))}
            </div>
          )}
          <button className="label-button" onClick={handleLabel}>
            +
          </button>
        //   Input field to add new task 
          {inputLabelAdd && (
            <div className="input-add-label">
              <input
                type="text"
                className="label-input"
                value={addLabelText}
                onChange={(e) => setAddLabelText(e.target.value)}
                placeholder="Enter Label"
              />
              <input
                type="text"
                className="label-input"
                value={addLabelText}
                onChange={(e) => setAddLabelText(e.target.value)}
                placeholder="Enter Label"
              />
              <ColorPalette />
              <button className="submit-label-button">Add</button>
            </div>
          )}
        </div> */}
        {/* Task Content */}
        <input
          type="text"
          name="content"
          value={taskDetails.content}
          placeholder="Task Content"
          className="drawer-input"
          onChange={handleInputContent}
        />
        <textarea
          name="description"
          value={taskDetails.description}
          placeholder="Task Description"
          className="drawer-textarea"
          onChange={handleTextareaDes}
        />

        {/* Progress */}
        <input
          type="number"
          name="progress"
          value={taskDetails.progress}
          onChange={handleProgressChange}
          className="drawer-input"
          min="0"
          max="100"
        />

        {/* Start and Due Date */}
        <button className="drawer-save-button" onClick={handleSaveTask}>
          Save
        </button>
      </div>
    </div>
  );
};

export default TaskDrawer;

// Priority DropDown => [No Priority(Gray), Low(Grey), Normal(Green), Medium(Blue),
// High(Orange), Critical(Red)]
// Title Edit
// Description Edit
// Start & Due date

// Task Creation and deletion
// Search Functionality
// Responsive design
