import {useTranslation} from "react-i18next";

const AskQuestionsBadge = ({ name = "Diyor", avatarSrc = " " }) => {

    const {t} = useTranslation()

    return (
        <div className={'relative'}>
            <div className="flex absolute items-center justify-between px-2 top-6 -left-40 bg-white rounded-r-[40px] w-80 z-[10] gap-10">
                <div className="text-start">
                    <p className="text-[20px] font-normal text-[#8F8F8F]">{t('login.questions')}</p>
                    <p className="text-[30px] font-semibold text-[#009688]">{t('login.ask')}</p>
                </div>
                <img
                    src={avatarSrc}
                    alt={name}
                    className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-md"
                />
            </div>
        </div>
    );
};

export default AskQuestionsBadge;