import React from 'react'
import styles from "./dashboard.module.css"
import ShowInformation from './Show-information/ShowInformation'
import PieMain from "./pie-chart/PieMain"
import LineMain from './line-chart/LineMain'

import PieChart from "./pie-chart/PieChart"
import Doughnut from "./doughnut-chart/DoughnutChart"

function Dashboard() {
  return (

    <div>
      <h3 style={{ color: "#fff" }}>گزارش کلی</h3>
      <ShowInformation />

      <div className={styles.chart}>

        <div className={styles.lineChart}>
          <LineMain />
        </div>
 
        <div className={styles.pieChart}>
            <PieMain  chart={PieChart}/>
            <PieMain chart={Doughnut}/>
        </div>

      </div>

    </div>

  )
}

export default Dashboard