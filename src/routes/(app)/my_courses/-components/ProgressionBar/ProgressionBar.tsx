import React from 'react';
import {Progress} from "antd";

const ProgressionBar = () => {
    return (
        <div>
            <Progress strokeColor={'#FE5D37'} percent={12} size={'middle'} className={'w-full'} />
        </div>
    );
};

export default ProgressionBar;