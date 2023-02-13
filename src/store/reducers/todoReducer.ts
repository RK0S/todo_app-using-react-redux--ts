import { todoActionTypes, todoState, todoAction, taskType } from '../../types/todo';

const initialState: todoState = {
    tasks: [],
    filter: 'all'
}

export const todoReducer = (state = initialState, action: todoAction): todoState => {
    switch(action.type) {
        case todoActionTypes.ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload]}
        case todoActionTypes.REMOVE_TASKS:
            return {...state, tasks: []}
        case todoActionTypes.SET_FILTER:
            return {...state, filter: action.payload}
        // case todoActionTypes.CHECK_TASK:
        //     return {...state, tasks: [...state.tasks, state.tasks.filter() ]}
        default:
            return state
    }
}