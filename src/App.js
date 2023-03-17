import React from 'react'
import { ThemeProvider } from "@mui/material"
import { theme } from './mui/theme';

import styles from "./app.module.css"

import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Dashboard from "./components/dashboard/Dashboard"

const App = () => {
  return (
    <ThemeProvider theme={theme}>


      <div className="container">

        <div className={styles.wrapper}>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>

          <div className={styles.main}>
            <Header />
            <Dashboard />
          </div>
        </div>


      </div>
    </ThemeProvider>

  )
}

export default App