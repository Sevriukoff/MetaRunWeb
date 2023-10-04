import React, {FC} from 'react';
import styles from './Header.module.scss'


const Header : FC = () => {
    return (
        <header>
            <button className={styles.active}/>
        </header>
    );
};

export default Header;