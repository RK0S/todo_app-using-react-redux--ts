import { FC } from 'react';
import { Dispatch } from 'redux';
import { todoAction, todoActionTypes } from '../../../../types/todo';
import { useDispatch } from 'react-redux';

import './Bin.css';

const Bin: FC = () => {
    const dispatch: Dispatch<todoAction> = useDispatch();

    const deleteTasks = (e: React.MouseEvent<HTMLImageElement>) => {
        dispatch({ type: todoActionTypes.REMOVE_TASKS });
    };

    return (
        <div>
            <img
                className="bin"
                src={require('../../../../img/bin.png')}
                alt="bin"
                onClick={deleteTasks}
            />
        </div>
    );
};

export default Bin;
