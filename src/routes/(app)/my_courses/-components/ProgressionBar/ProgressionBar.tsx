import React from 'react';
import {Progress} from "antd";

const ProgressionBar = () => {
    return (
        <div>
            <Progress percent={12} size={'middle'} className={'w-full'} status="active" />
        </div>
    );
};

export default ProgressionBar;