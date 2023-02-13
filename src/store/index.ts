import { createStore, combineReducers } from "redux";
import { todoReducer } from './reducers/todoReducer';

const RootReducer = combineReducers({
    todo: todoReducer
})

export const store = createStore(RootReducer);

export type RootState = ReturnType<typeof RootReducer>