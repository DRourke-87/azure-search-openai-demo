import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";
import { LoginButton } from "../../components/LoginButton";
import applogo from "../../assets/applogo.svg";

const Layout = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.layout}>
            <header className={styles.header} role="banner">
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <img src={applogo} alt="TransformAItion Communications logo" className={styles.headerLogo} />
                        <h3 className={styles.headerTitle}>{t("headerTitle")}</h3>
                    </Link>
                    <div className={styles.loginMenuContainer}>{useLogin && <LoginButton />}</div>
                </div>
            </header>

            <main className={styles.main} id="main-content">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
