import { FC } from 'react';
import Button from './button/Button';

const Filters: FC = () => {
    return (
        <div>
            <Button name='All' />
            <Button name='Active' />
            <Button name='Completed' />
        </div>
    );
};

export default Filters;