import { FC } from 'react';
import { taskType, todoAction, todoActionTypes } from '../../../types/todo';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import './Task.css';

const Task: FC<taskType> = (task: taskType) => {
    const dispatch: Dispatch<todoAction> = useDispatch();
    const classes = ['text'];
    if (task.completed) {
        classes.push('cross');
    }

    function checkTask(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: todoActionTypes.CHECK_TASK, payload: task.id });
    }

    const removeTask = (e: React.MouseEvent<HTMLImageElement>) => {
        dispatch({ type: todoActionTypes.REMOVE_TASK, payload: task.id})
    }

    return (
        <li className="taskBlock">
            <div className="taskWrapper">
                <input
                    onChange={checkTask}
                    id={task.id.toString()}
                    type="checkbox"
                    checked={task.completed}
                    className="circle"
                />
                <label
                    className={classes.join(' ')}
                    htmlFor={task.id.toString()}
                >
                    {task.title}
                </label>
                <img
                    className="cross_icon"
                    src={require('../../../img/cross.png')}
                    alt="cross"
                    onClick={removeTask}
                />
            </div>
            <hr className="hr" />
        </li>
    );
};

export default Task;
