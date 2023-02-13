import { FC, useState } from 'react';
import { taskType } from '../../../types/todo';

import './Task.css';

const Task: FC<taskType> = (task: taskType) => {
    const [checked, setChecked] = useState<boolean>(task.completed)
    const classes = ['text']
    if (checked) {
        classes.push('cross')
    }

    function checkTask() {
        setChecked(!checked)
        console.log(checked);
    }

    return (
        <li className='taskBlock'>
            <div className='taskWrapper'>
                <input onChange={checkTask} id={task.id.toString()} type="checkbox" checked={checked} className='circle' />
                <label className={classes.join(' ')} htmlFor={task.id.toString()}>{task.title}</label>
            </div>
            <hr className='hr'/>   
        </li>
    );
};

export default Task;