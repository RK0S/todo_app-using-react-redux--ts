import { todoActionTypes, todoState, todoAction, filterTypes } from '../../types/todo';


const initialState: todoState = {
    tasks: [],
    filter: filterTypes.ALL
}

export const todoReducer = (state = initialState, action: todoAction): todoState => {
    switch(action.type) {
        case todoActionTypes.ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload]}
        case todoActionTypes.REMOVE_TASKS:
            return {...state, tasks: []}
        case todoActionTypes.SET_FILTER:
            return {...state, filter: action.payload}
        case todoActionTypes.CHECK_TASK:
            return {...state, tasks: state.tasks.map(task => 
                task.id === action.payload ? {...task, completed: !task.completed} : task
            )}
        case todoActionTypes.REMOVE_TASK:
            return {...state, tasks: state.tasks.filter(t => t.id !== action.payload)}
        default:
            return state
    }
}