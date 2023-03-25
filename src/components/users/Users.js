import React, { useContext, useState } from 'react'
// style
import styles from './users.module.css'
// component
import User from "./user/User"
// mui component
import { Pagination, PaginationItem, Button } from '@mui/material';
// icons
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// context
import { UserModalContext } from "../../context/ModalContextProvider"
// modal
import UserModal from "../modal/UserModal"


function Users() {

    const [userModal, setUserModal] = useContext(UserModalContext)

    // page state and choose page
    const [page, setPage] = useState(1)
    const changeHandler = (event, value) => {
        setPage(value)
    }

    return (
        <div className={styles.wrapper}>
            <h2>کاربران</h2>
            <div className={styles.header}>
                <Button variant="contained" size="large" sx={{ background: "#285fd3", color: "#fff" }} onClick={() => setUserModal({ show: true, type: 'new user' })}>کاربر جدید</Button>

                <div className={styles.search}>
                    <input type="text" placeholder="جستجو..." />
                    <SearchIcon className={styles.iconSearch} />
                </div>
            </div>

            <User pageActive={page} />

            <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0", direction: "ltr" }}>
                <Pagination count={3} onChange={changeHandler}

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

            {
                userModal.show && <UserModal />
            }

        </div>
    )
}

export default Users