import React, {FC, ReactNode} from 'react';
import styles from './Button.module.scss'

interface ButtonProps{
    icon? : string;
    iconPosition?: 'left' | 'right';
    isOutlined?: boolean;
    className?: string;
    children: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}

const Button : FC<ButtonProps> = ({icon, iconPosition = 'left', className, children, disabled, isOutlined = false, onClick} : ButtonProps) => {
    const defaultClass = className + ' ' + styles.btn
    const btnClassName = isOutlined ? defaultClass + ' ' + styles.btn_outlined : defaultClass;

    return (
        <button className={btnClassName} disabled={disabled} onClick={onClick}>
            {icon && <img src={icon} alt={'btn icon'} className={styles.buttonIcon}/>}
            {children}
        </button>
    );
};

export default Button;