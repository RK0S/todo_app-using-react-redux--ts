import { FC, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {Dispatch} from 'redux';
import { todoAction, todoActionTypes } from '../../../types/todo';

import './AddTask.css';

const AddTask: FC = () => {
    const [task, setTask] = useState<string>('')
    const dispatch: Dispatch<todoAction> = useDispatch()

    function addTask(e: React.MouseEvent): void {
        dispatch({type: todoActionTypes.ADD_TASK, payload: {
            id: Date.now(),
            title: task,
            completed: false
        }})
        setTask('')
    }

    function addTaskInput(e: React.ChangeEvent<HTMLInputElement>): void {
        setTask(e.target.value)
    }

    return (
        <div className="addTaskBlock">
            <div className="addTaskWrapper">
                <img
                    className="plus"
                    src={require('../../../img/plus.png')}
                    alt="plus"
                    onClick={addTask}
                />
                <input
                    className="addInput"
                    type="text"
                    placeholder="Добавить задачу"
                    value={task}
                    onChange={addTaskInput}
                />
            </div>

            <hr className="hr" />
        </div>
    );
};

export default AddTask;
