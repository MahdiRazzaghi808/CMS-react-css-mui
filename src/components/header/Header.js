import React from 'react'
// style
import styles from './header.module.css'
// image
import avatar from "../../asset/images/avatar/photo.jpeg"
// mui icons
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
// mui component
import Divider from '@mui/material/Divider';

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

      <Divider sx={{ backgroundColor: '#e2e8f08f',marginBottom: '2rem'}} />
    </>

  )
}

export default Header