import React from 'react'
import styles from './header.module.css'
import Divider from '@mui/material/Divider';

import avatar from "../../asset/images/avatar/photo.jpeg"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <>
      <div className={styles.header}>

        <div className={styles.headerRight}>
          <p>اپلیکیشن /<span> داشبورد</span></p>
        </div>


        <div className={styles.headerLeft}>
          <div>
            <SearchIcon />
            <NotificationsIcon />
          </div>
          <div className={styles.avatar}>
            <img src={avatar} alt="avatar" />
          </div>
        </div>

      </div>
      <Divider sx={{ backgroundColor: 'rgb(49, 58, 85)',marginBottom: '2.5rem'}} />
    </>

  )
}

export default Header