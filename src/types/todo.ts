export enum todoActionTypes {
    ADD_TASK = 'ADD_TASK',
    REMOVE_TASKS = 'REMOVE_TASKS',
    SET_FILTER = 'SET_FILTER',
    CHECK_TASK = 'CHECK_TASK'
}

export interface taskType {
    id: number;
    title: string;
    completed: boolean;
}


interface addTaskAction {
    type: todoActionTypes.ADD_TASK;
    payload: taskType;
}

interface removeTasksAction {
    type: todoActionTypes.REMOVE_TASKS;
}

interface setFilterAction {
    type: todoActionTypes.SET_FILTER;
    payload: string;
}

interface checkTaskAction {
    type: todoActionTypes.CHECK_TASK;
    payload: boolean
}

export interface todoState {
    tasks: taskType[];
    filter: string;
}

export type todoAction = addTaskAction | removeTasksAction | setFilterAction | checkTaskAction
