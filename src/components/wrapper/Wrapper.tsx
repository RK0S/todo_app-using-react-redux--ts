import { FC } from 'react';
import Date from './date/Date';
import AddTask from './addTask/AddTask';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Task from './task/Task';

import './Wrapper.css';

const Wrapper: FC = () => {
    const {tasks, filter} = useTypedSelector(state => state.todo)

    return (
        <div className="wrapper">
            <Date />
            <ul>
                {tasks.map(task => 
                    <Task key={task.id} {...task}/>
                )}
            </ul>
            <AddTask />
        </div>
    );
};

export default Wrapper;
