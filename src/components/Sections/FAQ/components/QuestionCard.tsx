import React from 'react';
import {Collapse, theme} from "antd";
import {PlusOutlined} from "@ant-design/icons";

const QuestionCard = () => {


    const collapce1 = [
        {
            key: 0,
            label: 'Will I receive lifetime access to the courses?',
            children: <p>"Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively."</p>,
            style: {
                marginBottom: 16,
                borderRadius: 10,
                border: '1px solid #686868',
            },
        },
    ]

    const collapce2 = [
        {
            key: 0,
            label: 'Can I use the materials for community teaching?',
            children: <p>"Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively."</p>,
            style: {
                marginBottom: 16,
                borderRadius: 10,
                border: '1px solid #686868',
            },
        },
    ]

    const collapce3 = [
        {
            key: 0,
            label: 'Is there a free trial for the courses?',
            children: <p>"Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively."</p>,
            style: {
                marginBottom: 16,
                borderRadius: 10,
                border: '1px solid #686868',
            },
        },
    ]


    const collapce4 = [
        {
            key: 0,
            label: 'Who can benefit from these courses?',
            children: <p>"Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively."</p>,
            style: {
                marginBottom: 16,
                borderRadius: 10,
                border: '1px solid #686868',
            },
        },
    ]


    return (
        <div className="columns-1 px-4 gap-6 sm:px-6 md:columns-2 md:px-12 lg:px-30">
            <div className="mb-6 break-inside-avoid">
                <Collapse size={'large'} style={{border: 24}} expandIcon={({isActive}) => <PlusOutlined rotate={isActive ? 135 : 0} />} items={collapce1} />
            </div>

            <div className="mb-6 break-inside-avoid">
                <Collapse size={'large'} style={{border: 24}} expandIcon={({isActive}) => <PlusOutlined rotate={isActive ? 135 : 0} />} items={collapce2} />
            </div>

            <div className="mb-6 break-inside-avoid">
                <Collapse size={'large'} style={{border: 24}} expandIcon={({isActive}) => <PlusOutlined rotate={isActive ? 135 : 0} />} items={collapce3} />
            </div>

            <div className="mb-6 break-inside-avoid">
                <Collapse size={'large'}  style={{border: 24}} expandIcon={({isActive}) => <PlusOutlined rotate={isActive ? 135 : 0} />} items={collapce4} />
            </div>
        </div>
    );
};

export default QuestionCard;