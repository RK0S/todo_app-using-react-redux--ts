import { FC } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { todoActionTypes, todoAction, ButtonProps } from '../../../../../types/todo';

import './Button.css'


const Button: FC<ButtonProps> = ({name}: ButtonProps) => {
    const {filter} = useTypedSelector(state => state.todo)
    const dispatch: Dispatch<todoAction> = useDispatch()
    const classes = ['button']

    if (filter.toLocaleLowerCase() === name.toLocaleLowerCase()) {
        classes.push('button__active')
    }

    const changeFilter = (filter: string) => {
        dispatch({type: todoActionTypes.SET_FILTER, payload: filter.toUpperCase()})
    }

    return (
        <button onClick={() => changeFilter(name)} className={classes.join(' ')}>
            {name}
        </button>
    );
};

export default Button;