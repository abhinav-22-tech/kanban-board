import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";

import Data from "./data/data";
import Board from "./component/Board";
import "./styles.css";
import { moveTask } from "./component/app/kanbanSlice";
import TaskDrawer from "./component/TaskDrawer";

export default function App() {
  const columns = useSelector((state) => state.kanban.Data);
  const [dragging, setDragging] = useState(false);
  const dispatch = useDispatch();

  const handleDragStart = () => {
    setDragging(true);
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    dispatch(moveTask({ source: source, destination: destination }));
    // // If no destination and simply return
    // setDragging(false);
    // if (!destination) return;

    // // If the item is dropped in same place do nothing
    // if (source.droppableId === destination.draggableId
    //   && source.index === destination.index) return;

    // const sourceColumn = columns.find(col => col.id === source.droppableId);
    // const destinationColumn = columns.find(col => col.id === destination.droppableId);

    // const sourceTasks = Array.from(sourceColumn.tasks);
    // const destinationTasks = Array.from(destinationColumn.tasks);

    // // Remove the task from the source column
    // const [movedTask] = sourceTasks.splice(source.index, 1);

    // // Add the task to the destination column at the new index
    // if (source.droppableId === destination.droppableId) {
    //   sourceTasks.splice(destination.index, 0, movedTask);

    //   const updatedColumn = { ...sourceColumn, tasks: sourceTasks };
    //   const newColumns = columns.map(col =>
    //     col.id === source.droppableId ? updatedColumn : col
    //   );
    //   setColumns(newColumns);
    // }
    // else {
    //   // If the task is moved to a different column
    //   destinationTasks.splice(destination.index, 0, movedTask);
    //   const newColumns = columns.map((col) => {
    //     if (col.id === source.droppableId) {
    //       return { ...col, tasks: sourceTasks };
    //     }
    //     if (col.id === destination.droppableId) {
    //       return { ...col, tasks: destinationTasks }
    //     }
    //     return col;
    //   });
    //   setColumns(newColumns);
    // }
  };

  // const handleAddTask = (taskContent, columnId) => {
  //   const newTask = {
  //     id: `task-${Date.now()}`,
  //     content: taskContent
  //   };

  //   // Update the column with new Task
  //   const updatedColumns = columns.map((column) => {
  //     if (column.id === columnId) {
  //       return {
  //         ...column,
  //         tasks: [newTask, ...column.tasks]
  //       };
  //     }
  //     return column;
  //   })
  //   setColumns(updatedColumns);
  // }

  return (
    <DragDropContext
      className="App"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <TaskDrawer className="task-drawer-container" />
      <Board columns={columns} className="board-container" />
    </DragDropContext>
  );
}
