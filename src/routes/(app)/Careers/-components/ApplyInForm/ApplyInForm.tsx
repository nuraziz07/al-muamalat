import React from 'react';
import { Form, Input, Select, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';
import styles from './ApplyForm.module.scss';
import { EXPERIENCE_OPTIONS } from '@/Constants/general.ts';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const { TextArea } = Input;

interface ApplyFormValues {
    fullName: string;
    phone: string;
    email?: string;
    position: string;
    experience?: string;
    resume?: UploadFile[];
    message?: string;
}

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const buildTelegramText = (values: ApplyFormValues) => `
📩 Yangi ariza!
👤 Kim: ${values.fullName}
📞 Telefon raqam: ${values.phone}
📧 Email: ${values.email || '-'}
🏢 Position: ${values.position}
🧑‍💼 Experience: ${values.experience || '-'}
📎 Resume: ${values.resume?.[0]?.name ? 'quyida ilova qilindi 👇' : '-'}
💬 Xabar: ${values.message || '-'}
`;

const ApplyNowForm = () => {
    const [form] = Form.useForm<ApplyFormValues>();

    const normFile = (e: any) => {
        if (Array.isArray(e)) return e;
        return e?.fileList;
    };

    const mutationContactInfo = useMutation({
        mutationKey: ['contact-form-info'],
        mutationFn: async (values: ApplyFormValues) => {
            const resumeFile = values.resume?.[0]?.originFileObj;

            if (resumeFile) {
                const fd = new FormData();
                fd.append('chat_id', TELEGRAM_CHAT_ID);
                fd.append('document', resumeFile, resumeFile.name);
                fd.append('caption', buildTelegramText(values));
                fd.append('parse_mode', 'HTML');

                return axios.post(
                    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`,
                    fd,
                    { headers: { 'Content-Type': 'multipart/form-data' } }
                );
            }

            return axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                chat_id: TELEGRAM_CHAT_ID,
                text: buildTelegramText(values),
                parse_mode: 'HTML',
            });
        },
    });

    const handleFinish = (values: ApplyFormValues) => {
        mutationContactInfo.mutate(values, {
            onSuccess: () => {
                message.success('Xabar muvaffaqiyatli yuborildi!');
                form.resetFields();
            },
            onError: (error: Error) => {
                message.error(`Xabar yuborishda xatolik yuz berdi: ${error.message}`);
            },
        });
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
                        rules={[{ required: true, message: 'Please enter your full name' }]}
                        className={styles['apply-now__field']}
                    >
                        <Input placeholder="Full Name *" size="large" />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        rules={[{ required: true, message: 'Please enter your phone number' }]}
                        className={styles['apply-now__field']}
                    >
                        <Input placeholder="Phone Number *" size="large" />
                    </Form.Item>
                </div>

                <div className={styles['apply-now__row']}>
                    <Form.Item
                        name="email"
                        rules={[{ type: 'email', message: 'Enter a valid email address' }]}
                        className={styles['apply-now__field']}
                    >
                        <Input placeholder="Email Address" size="large" />
                    </Form.Item>

                    <Form.Item
                        name="position"
                        rules={[{ required: true, message: 'Please enter the position' }]}
                        className={styles['apply-now__field']}
                    >
                        <Input placeholder="Position / Role *" size="large" />
                    </Form.Item>
                </div>

                <div className={styles['apply-now__row']}>
                    <Form.Item name="experience" className={styles['apply-now__field']}>
                        <Select placeholder="Select experience" size="large" options={EXPERIENCE_OPTIONS} />
                    </Form.Item>

                    <Form.Item
                        name="resume"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        className={styles['apply-now__field']}
                    >
                        <Upload accept=".pdf,.docx" maxCount={1} beforeUpload={() => false}>
                            <Button
                                size="large"
                                icon={<UploadOutlined />}
                                className={styles['apply-now__upload-btn']}
                                block
                            >
                                Upload CV/Resume (PDF, DOCX)
                            </Button>
                        </Upload>
                    </Form.Item>
                </div>

                <Form.Item name="message">
                    <TextArea placeholder="Your message / comment..." autoSize={{ minRows: 4, maxRows: 8 }} />
                </Form.Item>

                <Form.Item className={styles['apply-now__submit-wrap']}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        loading={mutationContactInfo.isPending}
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