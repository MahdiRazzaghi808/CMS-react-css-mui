import React from 'react'
import styles from "./PieMain.module.css"

function PieMain(props) {
    const { chart: Chart } = props
    return (
        <div className={styles.main}>
            <h3 style={{ color: "#fff", marginBottom: "2rem" }}>فروش بالای هفتگی</h3>

            <div className={styles.wrapper}>

                <div>
                    <div className={styles.chart}>
                        <Chart />
                    </div>


                    <div className={styles.details}>
                        <div>
                            <p>17 - 30 سن</p>
                            <span>70%</span>
                        </div>

                        <div>
                            <p>31 - 50 سن</p>
                            <span>20%</span>
                        </div>
                        <div>
                            <p>سن بالای 50</p>
                            <span>10%</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default PieMain