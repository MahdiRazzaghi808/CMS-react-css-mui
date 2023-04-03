import React, { useEffect } from 'react'
// style
import "./app.css"
// routes
import { useRoutes } from 'react-router-dom';
import { routes } from "./routes/routes"
// component
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import DarkMoodBtn from './components/darkMoodBtn/DarkMoodBtn';
// mui provider
import MuiProvider from './mui/MuiProvider';


const App = () => {
  const router = useRoutes(routes);

  useEffect(() => {
    const them = localStorage.getItem('dark-them')
    if (them && them === 'dark') {
      document.documentElement.classList.add("dark-mood")
    } else {
      localStorage.setItem('dark-them', 'light')
    }

  }, [])

  return (
    <MuiProvider>

      <div className="container">

        <div className='wrapper'>
          {/* sidebar */}
          <div className='sidebar'>
            <Sidebar />
          </div>
          {/* main site  */}
          <div className='main'>
            <Header />
            {router}
            <DarkMoodBtn />

          </div>
        </div>

      </div>

    </MuiProvider>
  )
}

export default App