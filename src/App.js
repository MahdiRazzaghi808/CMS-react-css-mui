import React, { useContext } from 'react'
// style
import styles from "./app.module.css"
// routes
import { useRoutes } from 'react-router-dom';
import { routes } from "./routes/routes"
// component
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header'

// mui setting rtl
import { ThemeProvider } from "@mui/material"
import { theme } from './mui/theme';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const App = () => {


  const router = useRoutes(routes)

  return (

    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>

        <div className="container">
          <div className={styles.wrapper}>
            {/* sidebar */}
            <div className={styles.sidebar}>
              <Sidebar />
            </div>
            {/* main site  */}
            <div className={styles.main}>
              <Header />
              {router}
            </div>
          </div>
        </div>

      </ThemeProvider>
    </CacheProvider>

  )
}

export default App