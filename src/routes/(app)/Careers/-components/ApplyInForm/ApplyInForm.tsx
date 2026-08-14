import React from 'react';
import {Form, Input, Select, Upload, Button, message} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import type {UploadFile} from 'antd/es/upload/interface';
import styles from './ApplyForm.module.scss';

const {TextArea} = Input;

interface ApplyFormValues {
    fullName: string;
    phone: string;
    email?: string;
    position: string;
    experience?: string;
    resume?: UploadFile[];
    message?: string;
}

const EXPERIENCE_OPTIONS = [
    {value: 'no-experience', label: 'No experience'},
    {value: '1-3', label: '1–3 years'},
    {value: '3-5', label: '3–5 years'},
    {value: '5+', label: '5+ years'},
];

const ApplyNowForm = () => {
    const [form] = Form.useForm<ApplyFormValues>();

    const handleFinish = (values: ApplyFormValues) => {
        // bu yerda API'ga yuborish logikasi bo'ladi
        console.log('Career application submitted:', values);
        message.success('Application submitted successfully!');
        form.resetFields();
    };

    const normFile = (e: any) => {
        if (Array.isArray(e)) return e;
        return e?.fileList;
    };

    return (
        <div className={styles['apply-now']}>
            <h2 className={styles['apply-now__title']}>Apply Now</h2>

            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                className={styles['apply-now__form']}
            >
                <div className={styles['apply-now__row']}>
                    <Form.Item
                        name="fullName"
                        rules={[{required: true, message: 'Please enter your full name'}]}
                        className={styles['apply-now__field']}
                    >
                        <Input placeholder="Full Name *" size="large"/>
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        rules={[{required: true, message: 'Please enter your phone number'}]}
                        className={styles['apply-now__field']}
                    >
                        <Input placeholder="Phone Number *" size="large"/>
                    </Form.Item>
                </div>

                <div className={styles['apply-now__row']}>
                    <Form.Item
                        name="email"
                        rules={[{type: 'email', message: 'Enter a valid email address'}]}
                        className={styles['apply-now__field']}
                    >
                        <Input placeholder="Email Address" size="large"/>
                    </Form.Item>

                    <Form.Item
                        name="position"
                        rules={[{required: true, message: 'Please enter the position'}]}
                        className={styles['apply-now__field']}
                    >
                        <Input placeholder="Position / Role *" size="large"/>
                    </Form.Item>
                </div>

                <div className={styles['apply-now__row']}>
                    <Form.Item
                        name="experience"
                        className={styles['apply-now__field']}
                    >
                        <Select
                            placeholder="Select experience"
                            size="large"
                            options={EXPERIENCE_OPTIONS}
                        />
                    </Form.Item>

                    <Form.Item
                        name="resume"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        className={styles['apply-now__field']}
                    >
                        <Upload
                            accept=".pdf,.docx"
                            maxCount={1}
                            beforeUpload={() => false} // avtomatik yuklashni to'xtatadi, faylni faqat formaga biriktiradi
                        >
                            <Button
                                size="large"
                                icon={<UploadOutlined/>}
                                className={styles['apply-now__upload-btn']}
                                block
                            >
                                Upload CV/Resume (PDF, DOCX)
                            </Button>
                        </Upload>
                    </Form.Item>
                </div>

                <Form.Item name="message">
                    <TextArea
                        placeholder="Your message / comment..."
                        autoSize={{minRows: 4, maxRows: 8}}
                    />
                </Form.Item>

                <Form.Item className={styles['apply-now__submit-wrap']}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        className={styles['apply-now__submit']}
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ApplyNowForm;