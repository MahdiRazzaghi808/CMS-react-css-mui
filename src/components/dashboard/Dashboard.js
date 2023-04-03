import React from 'react'
// style
import styles from "./dashboard.module.css"
// components
import ShowInformation from './Show-information/ShowInformation'
import PieMain from "./pie-chart/PieMain"
import LineMain from './line-chart/LineMain'

import PieChart from "./pie-chart/PieChart"
import Doughnut from "./pie-chart/DoughnutChart"

function Dashboard() {
  return (

    <div className={styles.wrapper}>
      
      {/* title */}
      <h3>گزارش کلی</h3>
      {/*4 item for information */}
      <ShowInformation />
      {/* charts */}
      <div className={styles.chart}>

        <div className={styles.lineMain}>
          <LineMain />
        </div>

        <div className={styles.pieMain}>
          <PieMain chart={PieChart} />
          <PieMain chart={Doughnut} />
        </div>

      </div>

    </div>

  )
}

export default Dashboard