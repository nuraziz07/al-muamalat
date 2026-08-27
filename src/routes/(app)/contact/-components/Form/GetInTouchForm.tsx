import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { Contact_Banner } from '../../../../../assets/Images/Png';
import styles from '../../contact.module.scss';
import axios from 'axios';

const { TextArea } = Input;

interface ContactFormValues {
    firstName: string;
    lastName: string;
    email: string;
    organization: string;
    phone: string;
    message: string;
}

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const initialFormData: ContactFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
};

const GetInTouchForm = () => {
    const [formData, setFormData] = useState<ContactFormValues>(initialFormData);
    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name as keyof ContactFormValues]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const validate = (): boolean => {
        const newErrors: Partial<Record<keyof ContactFormValues, string>> = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'Please enter your name';
        if (!formData.lastName.trim()) newErrors.lastName = 'Please enter your surname';

        if (!formData.email.trim()) {
            newErrors.email = 'Please enter your email';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email address';
        }

        if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number';
        if (!formData.message.trim()) newErrors.message = 'Please enter your message';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setStatus('loading');

        const text = `
📩 Yangi murojaat!
👤 Ism: ${formData.firstName}
👤 Familya: ${formData.lastName}
📧 Email: ${formData.email}
🏢 Tashkilot: ${formData.organization || '-'}
📞 Telefon: ${formData.phone}
💬 Xabar: ${formData.message}
        `;

        try {
            await axios.post(
                `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
                {
                    chat_id: TELEGRAM_CHAT_ID,
                    text,
                    parse_mode: 'HTML',
                }
            );
            setStatus('success');
            setFormData(initialFormData);
        } catch (error) {
            console.error('Telegramga yuborishda xatolik:', error);
            setStatus('error');
        }
    };

    return (
        <div className={styles['get-in-touch']}>
            <div className={styles['get-in-touch__form-side']}>
                <h2 className={styles['get-in-touch__title']}>Get in Touch</h2>

                <form className={styles['get-in-touch__form']} onSubmit={handleSubmit} noValidate>
                    <div className={styles['get-in-touch__row']}>
                        <div className={styles['get-in-touch__field']}>
                            <Input
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Your Name"
                                size="large"
                                status={errors.firstName ? 'error' : ''}
                            />
                            {errors.firstName && (
                                <span className={styles['get-in-touch__error']}>{errors.firstName}</span>
                            )}
                        </div>

                        <div className={styles['get-in-touch__field']}>
                            <Input
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Your Surname"
                                size="large"
                                status={errors.lastName ? 'error' : ''}
                            />
                            {errors.lastName && (
                                <span className={styles['get-in-touch__error']}>{errors.lastName}</span>
                            )}
                        </div>
                    </div>

                    <div className={styles['get-in-touch__row']}>
                        <div className={styles['get-in-touch__field']}>
                            <Input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email Address"
                                size="large"
                                status={errors.email ? 'error' : ''}
                            />
                            {errors.email && (
                                <span className={styles['get-in-touch__error']}>{errors.email}</span>
                            )}
                        </div>

                        <div className={styles['get-in-touch__field']}>
                            <Input
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                placeholder="Your organization"
                                size="large"
                            />
                        </div>
                    </div>

                    <div className={styles['get-in-touch__field']}>
                        <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your phone number"
                            size="large"
                            status={errors.phone ? 'error' : ''}
                        />
                        {errors.phone && (
                            <span className={styles['get-in-touch__error']}>{errors.phone}</span>
                        )}
                    </div>

                    <div className={styles['get-in-touch__field']}>
                        <TextArea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message / comment..."
                            autoSize={{ minRows: 4, maxRows: 8 }}
                            status={errors.message ? 'error' : ''}
                        />
                        {errors.message && (
                            <span className={styles['get-in-touch__error']}>{errors.message}</span>
                        )}
                    </div>

                    <div className={styles['get-in-touch__submit-wrap']}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            loading={status === 'loading'}
                            className={styles['get-in-touch__submit']}
                        >
                            Submit
                        </Button>
                    </div>

                    {status === 'success' && (
                        <p className={styles['get-in-touch__success']}>✅ Xabar yuborildi!</p>
                    )}
                    {status === 'error' && (
                        <p className={styles['get-in-touch__error-msg']}>❌ Xatolik yuz berdi, qayta urinib ko'ring</p>
                    )}
                </form>
            </div>

            <div className={styles['get-in-touch__image-side']}>
                <img src={Contact_Banner} alt="Get in touch" className={styles['get-in-touch__image']} />
            </div>
        </div>
    );
};

export default GetInTouchForm;