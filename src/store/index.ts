import { createStore, combineReducers } from "redux";
import { todoReducer } from './reducers/todoReducer';
import { composeWithDevTools } from "@redux-devtools/extension";

const RootReducer = combineReducers({
    todo: todoReducer
})

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState') as string)
                       : {}

export const store = createStore(RootReducer, persistedState, composeWithDevTools());

export type RootState = ReturnType<typeof RootReducer>

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
