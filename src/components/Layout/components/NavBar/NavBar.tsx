import {Link, useNavigate} from "@tanstack/react-router";
import {useTranslation} from "react-i18next";
import {Select} from "antd";
import {useQuery} from "@tanstack/react-query";
import {request} from "@/Services/api/interceptor.ts";
import {useGetUser} from "@/hooks/custom/useAuth.ts";
import Avatar_User from "@/components/Shared/Avatar";
import {ArrowRight,  Menu, X} from "lucide-react";
import {useEffect, useState} from "react";
import styles from "./NavBar.module.scss";
import LanguageSelect from "@/components/Layout/components/NavBar/components";
import {Logo} from "@/assets/Images/Svg";

interface CourseItem {
    course_id: string;
    name_uz: string;
    name_en: string;
}

export const NavBar = () => {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);

    const {data: user} = useGetUser();

    const {data: courses = []} = useQuery({
        queryKey: ["courses"],
        queryFn: async () => {
            const response = await request.get("/courses/main");
            return response?.data?.data ?? [];
        },
    });

    const isUz = i18n.language?.startsWith("uz");

    const navLinks = [
        {label: t("header.home"), path: "/"},
        {label: t("header.services"), path: "/services"},
        {label: t("header.careers"), path: "/careers"},
        {label: t("header.contact"), path: "/contact"},
    ];

    const handleLogin = () => {
        navigate({to: "/signin"});
        setMobileOpen(false);
    };

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);


    const {data} = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const response = await request.get('/courses/main')
            return response?.data?.data ?? []
        }
    })

    const selectItems = [
        {
            key: 0,
            label: 'Online Courses',
            value: 'online'
        }
    ]

    const handleCourseChange = (value: string) => {
        navigate({
            to: '/programs',
            params: {courseId: value}
        })
    }


    return (
        <nav className={styles.navbar}>
            <div className={styles.inner}>
                <Link to="/" className={styles.logo}>
                    <img onClick={() => this} src={Logo} alt="Al Muamalat" className={styles.logoIcon} />
                    <div className={styles.logoText}>
                        <span className={styles.logoTitle}>AL MUAMALAT</span>
                        <span className={styles.logoSubtitle}>{t("header.consulting")}</span>
                    </div>
                </Link>

                <div className={styles.nav}>
                    {navLinks.slice(0, 2).map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className={`${styles.navLink} [&.active]:text-[#ff6600]`}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <Select classNames={{popup: {root: styles.programDropdown}}}
                            className={styles.programSelect} onChange={handleCourseChange} placeholder={'Programs'}
                            options={selectItems}/>

                    {navLinks.slice(2, 3).map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className={`${styles.navLink} [&.active]:text-[#ff6600]`}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {navLinks.slice(3).map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className={`${styles.navLink} [&.active]:text-[#ff6600]`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className={styles.actions}>
                    <LanguageSelect />

                    {user?.user_id ? (
                        <Avatar_User user={user} />
                    ) : (
                        <button type="button" className={styles.loginBtn} onClick={handleLogin}>
                            {t("header.login")}
                            <ArrowRight size={18} />
                        </button>
                    )}
                </div>

                <button
                    type="button"
                    className={styles.mobileToggle}
                    onClick={() => setMobileOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* ── Mobile Drawer ── */}
            {mobileOpen && (
                <>
                    <div
                        className={styles.mobileOverlay}
                        onClick={() => setMobileOpen(false)}
                    />
                    <div className={styles.mobileMenu}>
                        {/* Drawer Header */}
                        <div className={styles.mobileMenuHeader}>
                            <Link to="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
                                <img src={Logo} alt="Al Muamalat" className={styles.logoIcon} />
                                <div className={styles.logoText}>
                                    <span className={styles.logoTitle}>AL MUAMALAT</span>
                                    <span className={styles.logoSubtitle}>{t("header.consulting")}</span>
                                </div>
                            </Link>
                            <button
                                type="button"
                                className={styles.mobileMenuCloseBtn}
                                onClick={() => setMobileOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Drawer Body */}
                        <div className={styles.mobileMenuBody}>
                            {navLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className={styles.mobileLink}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <span className={styles.mobileLink}>{t("header.trainingPrograms")}</span>
                            {(courses as CourseItem[]).slice(0, 5).map((course) => (
                                <Link
                                    key={course.course_id}
                                    to="/programs/$courseId"
                                    params={{courseId: course.course_id}}
                                    className={styles.mobileLinkSub}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {isUz ? course.name_uz : course.name_en}
                                </Link>
                            ))}
                        </div>

                        {/* Drawer Actions */}
                        <div className={styles.mobileMenuActions}>
                            <LanguageSelect />

                            {user?.user_id ? (
                                <Avatar_User user={user} />
                            ) : (
                                <button
                                    type="button"
                                    className={`${styles.loginBtn} ${styles.mobileLogin}`}
                                    onClick={handleLogin}
                                >
                                    {t("header.login")}
                                    <ArrowRight size={18} />
                                </button>
                            )}
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};
