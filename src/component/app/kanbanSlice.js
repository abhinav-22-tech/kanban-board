import { createSlice } from '@reduxjs/toolkit';
import Data from '../../data/data'

const initialState = {
    Data, drawerOpen: false,
    selectedTask: {
        id: '',
        dueDate: '',
        labels: [],
        priority: '',
        content: '',
        description: '',
        progress: 0
    },
};

const kanbanSlice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {
        // Add new tasks 
        addTasks: (state, action) => {
            const { columnId, taskContent } = action.payload;
            const newTask = {
                id: `task-${Date.now()}`,
                content: taskContent,
                dueDate: new Date().toString().substring(4, 15),
                progress: 0,
            };
            // Update the column with new Task
            const column = state.Data.find(col => col.id === columnId);
            if (column) {
                column.tasks.unshift(newTask);
            }
        },
        // On drag end
        moveTask: (state, action) => {
            const { source, destination } = action.payload;
            if (!destination) return;

            // If the item is dropped in same place do nothing 
            if (source.droppableId === destination.draggableId
                && source.index === destination.index) return;

            const sourceColumn = state.Data.find(col => col.id === source.droppableId);
            const destinationColumn = state.Data.find(col => col.id === destination.droppableId);

            // Remove the task from the source column 
            const [movedTask] = sourceColumn.tasks.splice(source.index, 1);

            // Add the task to the destination column at the new index 
            if (source.droppableId === destination.droppableId) {
                sourceColumn.tasks.splice(destination.index, 0, movedTask);
            }
            else {
                // If the task is moved to a different column 
                destinationColumn.tasks.splice(destination.index, 0, movedTask);
            }
        },
        onDrawerOpen: (state, action) => {
            state.drawerOpen = !state.drawerOpen;
            state.selectedTask = action.payload;
        },
        closeDrawer: (state) => {
            state.drawerOpen = false;
            state.selectedTask = null;
        },

        updateTask: (state, action) => {
            const { taskId, updates } = action.payload;
            state.Data.forEach(column => {
                const task = column.tasks.find(task => task.id === taskId);
                if (task) {
                    Object.assign(task, updates)
                }
            });
            state.drawerOpen = false;
            state.selectedTask = null;
        }
    }
});

export const { addTasks, moveTask, onDrawerOpen, closeDrawer, updateTask } = kanbanSlice.actions;
export default kanbanSlice.reducer;