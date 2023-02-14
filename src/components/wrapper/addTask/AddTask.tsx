import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import {Dispatch} from 'redux';
import { todoAction, todoActionTypes } from '../../../types/todo';

import './AddTask.css';

const AddTask: FC = () => {
    const [task, setTask] = useState<string>('')
    const dispatch: Dispatch<todoAction> = useDispatch()

    function createTask() {
        if (task.length > 0) {
            dispatch({type: todoActionTypes.ADD_TASK, payload: {
                id: Date.now(),
                title: task,
                completed: false
            }})
            setTask('')
        }
    }

    function addTask(e: React.MouseEvent): void {
        createTask()
    }

    function addTaskInput(e: React.ChangeEvent<HTMLInputElement>): void {
        const title = e.target.value
        if (title.length <= 45) {
            setTask(title)
        }
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            createTask()
        }
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
                    onKeyDown={onKeyDown}
                />
            </div>

            <hr className="hr" />
        </div>
    );
};

export default AddTask;
