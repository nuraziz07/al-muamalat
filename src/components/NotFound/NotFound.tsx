import React from 'react';
import {Result, Space, Typography, Button} from "antd";
import {Link, useRouter} from "@tanstack/react-router";
import {ArrowLeftOutlined, HomeOutlined} from "@ant-design/icons";

const NotFound = () => {

    const { Title, Text } = Typography
    const router = useRouter()

    return (
        <div className={'min-h-screen flex items-center justify-center w-full'}>
            <Result status={404} title={
                <Title level={2} className="!text-4xl !font-bold !mb-4 !text-gray-800">Sahifa topilmadi</Title>
            } subTitle={
                <Text className="!text-lg !text-gray-600 !leading-relaxed">Kechirasiz siz tashrif buyurgan sahifa mavjud emas</Text>
            } extra={
                <Space size={16} className="mt-2">
                    <Link to="/">
                        <Button
                            type="primary"
                            size="large"
                            icon={<HomeOutlined />}
                            className="h-12 px-8 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Bosh sahifaga qaytish
                        </Button>
                    </Link>

                        <Button
                            size="large"
                            icon={<ArrowLeftOutlined />}
                            onClick={() => router.history.back()}
                            className="h-12 px-8 rounded-lg font-medium border-gray-300 hover:border-primary hover:text-primary transition-all duration-300"
                        >
                            Orqaga qaytish
                        </Button>
                </Space>
            } />
        </div>
    );
};

export default NotFound;