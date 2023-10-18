import React from 'react';
import styles from './Checkbox.module.scss'
interface props{
    Text:string;
    ClassName?:string;
}
const Checkbox = (props:props) => {
    return (
        <label className={styles.check + ' ' + props.ClassName}>
            <input className={styles.check__input} type={'checkbox'} disabled={false}/>
            <span className={styles.check__box}/>
            {props.Text}
        </label>
    );
};

export default Checkbox;