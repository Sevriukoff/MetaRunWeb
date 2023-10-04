import React, {ReactElement} from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";

const MainLayout = ({ children } : {children : ReactElement}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
};

export default MainLayout;