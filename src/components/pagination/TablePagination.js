import React from 'react'
// styles
import styles from './tablePagination.module.css'
// mui component
import { Pagination, PaginationItem } from '@mui/material';
// mui icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function TablePagination({ data }) {
    const { count, setPage } = data;

    const changeHandler = (event, value) => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
        setPage(value)
    }


    return (
        <div className={styles.pagination}>

            <Pagination count={count} onChange={changeHandler}
                color='primary'
                renderItem={(item) => (
                    <PaginationItem
                        components={{
                            next: ArrowBackIcon,
                            previous: ArrowForwardIcon
                        }}
                        {...item}
                    />
                )}
            />

        </div>
    )
}

export default TablePagination