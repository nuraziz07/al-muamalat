import React from 'react';
import {Empty as AntEmpty} from 'antd'

const Empty = () => {
    return (
        <div>
            <AntEmpty description={'Malumot mavjud emas'} />
        </div>
    );
};

export default Empty;