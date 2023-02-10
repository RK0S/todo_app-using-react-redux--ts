import { FC } from 'react';
import Date from './date/Date';

import './Wrapper.css';

const Wrapper: FC = () => {
    return (
        <div className="list">
            <Date />
        </div>
    );
};

export default Wrapper;
