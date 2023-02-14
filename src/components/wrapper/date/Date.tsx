import { FC } from 'react';
import moment from 'moment';

const Date: FC = () => {
    return (
        <h1 className='date'>
            {moment().format('dddd, D MMMM')}
        </h1>
    );
};

export default Date;