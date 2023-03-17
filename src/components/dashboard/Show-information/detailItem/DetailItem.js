import React from 'react'
import styles from "./detailItem.module.css"


const DetailItem = ({ data }) => {
    const { icon: Icon } = data;
    const { title, number, percent,color } = data;
    return (
        <div className={styles.wrapper}>

            <div className={styles.header}>
                {<Icon fontSize='large' sx={{color: color}}/>}

                {percent > 0 ?
                    <div style={{ background: '#91c714' }}>
                        <span>{percent}%</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4 mr-0.5"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    </div>
                    :
                    <div style={{ background: '#d32929' }}>
                        <span>{Math.abs(percent)}%</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down w-4 h-4 mr-0.5"><polyline points="6 9 12 15 18 9"></polyline></svg>

                    </div>}
            </div>



            <div className={styles.main}>
                <p>{number}</p>
                <p>{title}</p>
            </div>

        </div>
    )
}

export default DetailItem