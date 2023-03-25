import React from 'react'
import styles from "./lineMain.module.css"
import LineChart from './LineChart'

function LineMain() {
    return (
        <>
            <h3 style={{ color: "#fff", marginBottom: "2rem" }}>گزارش فروش</h3>
            <div className={styles.wrapper}>
                <div className={styles.chart}>
                    <LineChart />
                </div>
            </div>
        </>

    )
}

export default LineMain