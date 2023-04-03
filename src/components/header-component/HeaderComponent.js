import React from 'react'
// style
import styles from './headerComponent.module.css'
// mui component
import { Button } from '@mui/material';
// icons
import SearchIcon from '@mui/icons-material/Search';

function HeaderComponent({ data }) {
    const { title, btnClick, showAddProduct } = data;


    return (
        <div className={styles.wrapper}>

            <h2>{title}</h2>

            <div className={styles.header}>

                {title === 'لیست محصولات' ?
                    <Button  variant="contained" size="large" hover='none' sx={{ background: showAddProduct ? '#d32929' : "#285fd3", "&:hover": { backgroundColor: showAddProduct ? '#d32929' : "#285fd3" }, color: "#fff" }} onClick={btnClick}>{showAddProduct ? 'بستن' : 'محصول جدید'}</Button>
                    :
                    <Button variant="contained" size="large" sx={{ background: "#285fd3", color: "#fff" }} onClick={btnClick}>کاربر جدید</Button>
                }
                <div className={styles.search}>
                    <input type="text" placeholder="جستجو..." />
                    <SearchIcon className={styles.iconSearch} />
                </div>
            </div>

        </div >
    )
}

export default HeaderComponent