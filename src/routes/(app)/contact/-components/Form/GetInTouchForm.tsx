import React from 'react';
import {Form, Input, Button} from 'antd';
import {Contact_Banner} from '../../../../../assets/Images/Png'
import styles from '../../contact.module.scss';

const {TextArea} = Input;

interface ContactFormValues {
    firstName: string;
    lastName: string;
    email: string;
    organization?: string;
    phone: string;
    message: string;
}

const GetInTouchForm = () => {
    const [form] = Form.useForm<ContactFormValues>();

    const handleFinish = (values: ContactFormValues) => {
        console.log('Contact form submitted:', values);
        form.resetFields();
    };

    return (
        <div className={styles['get-in-touch']}>
            <div className={styles['get-in-touch__form-side']}>
                <h2 className={styles['get-in-touch__title']}>Get in Touch</h2>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleFinish}
                    className={styles['get-in-touch__form']}
                >
                    <div className={styles['get-in-touch__row']}>
                        <Form.Item
                            name="firstName"
                            rules={[{required: true, message: 'Please enter your name'}]}
                            className={styles['get-in-touch__field']}
                        >
                            <Input placeholder="Your Name" size="large"/>
                        </Form.Item>

                        <Form.Item
                            name="lastName"
                            rules={[{required: true, message: 'Please enter your surname'}]}
                            className={styles['get-in-touch__field']}
                        >
                            <Input placeholder="Your Surname" size="large"/>
                        </Form.Item>
                    </div>

                    <div className={styles['get-in-touch__row']}>
                        <Form.Item
                            name="email"
                            rules={[
                                {required: true, message: 'Please enter your email'},
                                {type: 'email', message: 'Enter a valid email address'},
                            ]}
                            className={styles['get-in-touch__field']}
                        >
                            <Input placeholder="Your Email Address" size="large"/>
                        </Form.Item>

                        <Form.Item
                            name="organization"
                            className={styles['get-in-touch__field']}
                        >
                            <Input placeholder="Your organization" size="large"/>
                        </Form.Item>
                    </div>

                    <Form.Item
                        name="phone"
                        rules={[{required: true, message: 'Please enter your phone number'}]}
                    >
                        <Input placeholder="Your phone number" size="large"/>
                    </Form.Item>

                    <Form.Item
                        name="message"
                        rules={[{required: true, message: 'Please enter your message'}]}
                    >
                        <TextArea
                            placeholder="Your message / comment..."
                            autoSize={{minRows: 4, maxRows: 8}}
                        />
                    </Form.Item>

                    <Form.Item className={styles['get-in-touch__submit-wrap']}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            className={styles['get-in-touch__submit']}
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>

            <div className={styles['get-in-touch__image-side']}>
                <img src={Contact_Banner} alt="Get in touch" className={styles['get-in-touch__image']}/>
            </div>
        </div>
    );
};

export default GetInTouchForm;