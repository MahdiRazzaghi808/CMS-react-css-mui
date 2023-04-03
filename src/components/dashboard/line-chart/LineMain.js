import React from 'react'
// style
import styles from "./lineMain.module.css"
// chart
import LineChart from './LineChart'

function LineMain() {
    return (
        <>
            <h3>گزارش فروش</h3>

            <div className={styles.wrapper}>

                <div className={styles.chart}>
                    <LineChart />
                </div>

            </div>

        </>
    )
}

export default LineMain