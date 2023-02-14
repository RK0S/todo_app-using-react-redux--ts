import { FC } from 'react';
import Date from './date/Date';
import AddTask from './addTask/AddTask';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Task from './task/Task';
import { taskType, filterTypes } from '../../types/todo';
import Settings from './settings/Settings'


import './Wrapper.css';

const Wrapper: FC = () => {
    const {tasks, filter} = useTypedSelector(state => state.todo)
    const getVisibleTodos = (tasks: taskType[], filter: string) => {
        switch (filter) {
            case filterTypes.ALL:
                return tasks
            case filterTypes.ACTIVE:
                return tasks.filter(t => !t.completed)
            case filterTypes.COMPLETED:
                return tasks.filter(t => t.completed)
            default:
                throw new Error('Unknown filter: ' + filter)
        }
    }

    return (
        <div className="wrapper">
            <Date />
            <ul>
                {getVisibleTodos(tasks, filter).map(task => 
                    <Task key={task.id} {...task}/>
                )}
            </ul>
            <AddTask />
            <Settings />
        </div>
    );
};

export default Wrapper;
