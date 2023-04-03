import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom';

import styles from './darkMoodBtn.module.css'
import { FormControlLabel, Switch } from '@mui/material';
import { ThemContext } from '../../context/ThemContextProvider';


function DarkMoodBtn() {

  const [state, setState] = useContext(ThemContext)


  const changeBtn = () => {
    if (state === 'light') {
      localStorage.setItem('dark-them', 'dark');
      setState('dark');
      document.documentElement.classList.add("dark-mood")
    } else {
      localStorage.setItem('dark-them', 'light');
      setState('light');
      document.documentElement.classList.remove("dark-mood")
    }
  }
  console.log('change mod  btn');

  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <p>حالت تیره</p>
      <FormControlLabel control={<Switch color="warning" checked={state === 'dark' ? true : false} onClick={changeBtn} />} />
    </div>
    ,
    document.getElementById('dark-them')

  )
}

export default DarkMoodBtn