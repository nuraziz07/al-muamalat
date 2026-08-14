import {useTranslation} from "react-i18next";

interface PageHeadProps {
    courseName: {
        name_en: string;
        name_uz: string;
    };
    courseDescription: {
        description_en: string;
        description_uz: string;
    };
}

const PageHead = ({courseName, courseDescription}: PageHeadProps) => {
    const {i18n} = useTranslation();

    const isEn = i18n.language?.startsWith("en");

    const title = isEn
        ? courseName?.name_en
        : courseName?.name_uz;

    const description = isEn
        ? courseDescription?.description_en
        : courseDescription?.description_uz;

    return (
        <div className="mx-auto max-w-6xl pb-5">
            {/* Title */}
            <h1 className="text-center text-[32px] font-semibold leading-tight  text-[#152032] sm:text-[36px] lg:text-[40px]">
                {title}
            </h1>

            <div className="text-[16px] mt-10 leading-[2.55] text-[#566174] sm:text-[17px]lg:text-[18px]"
                dangerouslySetInnerHTML={{
                    __html: description?.replace(/\\n/g, "")
                }}
            />
        </div>
    );
};

export default PageHead;