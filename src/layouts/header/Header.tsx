import React, {FC} from 'react';
import styles from './Header.module.scss'
import logoImg from '../../resources/logo.svg';
import downloadImg from '../../resources/download.svg'
import steamImg from '../../resources/steam.svg'
import Button from "../../components/Button/Button";

const Header : FC = () => {
    return (
        <header className={styles.header}>
            <img className={styles.header__logo} src={logoImg} alt={'logo'}/>
            <div>
                <Button className={styles.header__btn} icon={downloadImg} onClick={() => console.log('clicked')} >
                    <span>Download mod</span>
                </Button>

                <Button className={styles.header__btn_outline} icon={steamImg} isOutlined={true}>
                    <span>Login via steam</span>
                </Button>
            </div>
        </header>
    );
};

export default Header;