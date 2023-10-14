import React, {FC} from 'react';
import styles from './Header.module.scss'
import logoImg from '../../resources/logo.svg';
import downloadImg from '../../resources/download.svg'
import steamImg from '../../resources/steam.svg'
import Button from "../../components/Button/Button";

const Header : FC = () => {
    return (
        <header className={styles.header}>
            <img src={logoImg} alt={'logo'}/>
            <div>
                <Button className={styles.header__btn} icon={downloadImg} >Download</Button>
                <Button icon={steamImg} isOutlined={true}>Login</Button>
            </div>
        </header>
    );
};

export default Header;