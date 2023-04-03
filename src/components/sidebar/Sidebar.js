import React, { useState } from 'react'
// style
import styles from "./sidebar.module.css"
import styled from 'styled-components';
// logo
import logo from "../../asset/images/icon/logo.svg"
// react router dom
import { NavLink } from 'react-router-dom';
// mui icon
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


const sidebarMenu = [
  { id: 1, to: '/', menuItem: 'داشبورد', icon: HomeIcon },
  { id: 2, to: '/products', menuItem: 'محصولات', icon: ProductionQuantityLimitsIcon },
  { id: 3, to: '/users', menuItem: 'کاربران', icon: GroupIcon },
  { id: 4, to: '/comments', menuItem: 'کامنت ها', icon: ModeCommentIcon },
  { id: 5, to: '/cart', menuItem: 'سفارشات', icon: ShoppingCartIcon },
]

const Sidebar = () => {
  // state for menu in mobile size
  const [open, setOpen] = useState(true)

  return (

    <div className={styles.sidebar}>

      {/* header sidebar */}
      <div>

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
      {/* main sidebar */}
      <Div open={open}>
        <ul className={styles.menu}>

          {
            sidebarMenu.map(item =>
              <li key={item.id}>
                <NavLink to={item.to} className={({ isActive }) => isActive ? styles.active : ""} onClick={() => setOpen(true)}>
                  <span>{item.menuItem}</span> <item.icon />
                </NavLink>
              </li>
            )
          }

        </ul>
      </Div>

    </div>

  )
}

export default Sidebar


