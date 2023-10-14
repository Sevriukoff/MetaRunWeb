import React from 'react';
import styles from './Home.module.scss'
import RunCard from "../components/RunCard/RunCard";

const Home = () => {
    return (
        <div>
            Home page
            <div className={styles.main}>
                <RunCard/>
                <RunCard/>
                <RunCard/>
                <RunCard/>
                <RunCard/>
                <RunCard/>
                <RunCard/>
                <RunCard/>
                <RunCard/>
                <RunCard/>
            </div>
        </div>
    );
};

export default Home;