import React from 'react';
import styles from './RunCard.module.scss'
import difficultyImg from '../../resources/difficulty_easy.png'
import character1Img from '../../resources/mult.png'
import character2Img from '../../resources/railgunner.png'
import character3Img from '../../resources/void_fiend.png'
import character4Img from '../../resources/huntrees.png'
import artifact1Img from '../../resources/artifact_of_chaos.png'
import artifact2Img from '../../resources/artifact_of_command.png'
import artifact3Img from '../../resources/artifact_of_enigma.png'
import voidDlcImg from '../../resources/dlc_void.png'

const RunCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card__header}>
                <img className={styles.card__difficulty} src={difficultyImg} alt={'easy'}/>
                <div>
                    <p className={styles.card__title}>Run Name</p>
                    <p className={styles.card__type}>Run Type</p>
                </div>
            </div>
            <div className={styles.card__body}>
                <img className={styles.card__character} src={character1Img} alt={'character'}/>
                <img className={styles.card__character} src={character2Img} alt={'character'}/>
                <img className={styles.card__character} src={character3Img} alt={'character'}/>
                <img className={styles.card__character} src={character4Img} alt={'character'}/>
            </div>

            <div className={styles.card__statistics_top}>
                <div className={styles.card__statistics_timer_container}>
                    <p>54:21</p>
                    <p>:98</p>
                </div>
                <div className={styles.card__statistics_container}>
                    <p>Stage</p>
                    <p>6</p>
                </div>
                <div className={styles.card__statistics_container}>
                    <p>Level</p>
                    <p>23</p>
                </div>
            </div>

            <div className={styles.card__statistics_bottom}>
                <img src={voidDlcImg} alt={'dlc'}/>
                <img src={voidDlcImg} alt={'dlc'}/>
            </div>

            <div className={styles.card__footer}>
                <img className={styles.card__artifact} src={artifact1Img} alt={'artifact'}/>
                <img className={styles.card__artifact} src={artifact2Img} alt={'artifact'}/>
                <img className={styles.card__artifact} src={artifact3Img} alt={'artifact'}/>
            </div>
        </div>
    );
};

export default RunCard;