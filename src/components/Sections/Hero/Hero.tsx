import React from 'react';
import {Col, Row} from "antd";
import {HeroContent} from "@/components/Sections/Hero/components/HeroContent.tsx";
import HeroImage from "@/components/Sections/Hero/components/HeroImage.tsx";

const Hero = () => {
    return (
        <section className="relative min-h-[75vh] w-full overflow-hidden bg-teal-600">
            <div className="mx-auto max-w-7xl px-6 pt-20">
                <Row gutter={[40, 40]} align="middle">
                    <Col xs={24} md={12}>
                        <HeroContent />
                    </Col>

                    <Col xs={24} md={12}>
                        <HeroImage />
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Hero;