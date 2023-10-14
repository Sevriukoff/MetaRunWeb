import React, {FC, ReactNode} from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from './MainLayout.module.scss'

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout : FC<MainLayoutProps> = ({ children } : { children: ReactNode }) => {
    return (
        <>
            <Header/>
            <div className={styles.wrapper}>
                {children}
                <Footer/>
            </div>
        </>
    );
};

export default MainLayout;