import React from 'react';

const BriefInfoCard = ({dataSource}) => {

    return (
        <div className={'flex px-30 gap-3 justify-center items-center'}>
            {dataSource.map((item) => {
                return (
                    <div key={item.id} className={'flex px-10 flex-col gap-2'}>
                        <div className={'flex gap-2 items-center'}>
                            <h1 className={'text-[#009688] font-[500] text-[32px]'}>{item.title}</h1>
                            <div className={'text-[#009688]'}>{item.icon}</div>
                        </div>
                        <p className={'font-[400] text-[27px] text-[#152032]'}>{item.description}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default BriefInfoCard;