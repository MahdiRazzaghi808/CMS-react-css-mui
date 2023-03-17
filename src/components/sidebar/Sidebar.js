import React, { useState } from 'react'
import styles from "./sidebar.module.css"
import styled from 'styled-components';

import logo from "../../asset/images/icon/logo.svg"

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import GroupIcon from '@mui/icons-material/Group';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Div = styled.div`
      transition: all 0.3s linear;
      height: ${({ open }) => open ? '0' : '30rem'};
      overflow: hidden;

      @media (min-width: 768px) {
        height: 100vh;
        }
 `



const Sidebar = () => {


  const [open, setOpen] = useState(true)

  return (

    <div className={styles.sidebar}>

      <div >
          <div className={styles.logoWrapper}>

            <div>
              <img src={logo} alt="logo" />
              <span className={styles.title}>روبیک</span>
            </div>

            <div onClick={() => setOpen(prev => !prev)}>
              <MenuIcon fontSize='large' />
            </div>
          </div>
          <div className={styles.line}></div>

      </div>


      <Div open={open}>
        <ul className={styles.menu}>
          <li><a href="" className={styles.active}><span>داشبورد</span> <HomeIcon /></a></li>
          <li><a href="" ><span>محصولات</span> <ProductionQuantityLimitsIcon /></a></li>
          <li><a href=""><span>کاربران</span> <GroupIcon /></a></li>
          <li><a href=""><span>کامنت ها</span> <ModeCommentIcon /></a></li>
          <li><a href=""><span>سفارشات</span>  <ShoppingCartIcon /></a></li>
        </ul>
      </Div>


     
    </div>

  )
}

export default Sidebar


