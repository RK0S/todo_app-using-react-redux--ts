import { FC } from 'react';
import Bin from './bin/Bin';
import Filters from './filters/Filters';

import './Settings.css'

const Settings: FC = () => {
    return (
        <div className='settings'>
            <Bin />
            <Filters />
        </div>
    );
};

export default Settings;