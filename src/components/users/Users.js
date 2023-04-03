import React, { useContext, useState, useEffect } from 'react'
// style
import styles from './users.module.css'
// component
import HeaderComponent from '../header-component/HeaderComponent';
import User from "./user/User"
// context
import { InputsContext } from "../../context/InputsContextProvider"
import { GetDataContext } from '../../context/GetDataContextProvider'
// modal
import UserModal from "../modal/UserModal"
import TablePagination from '../pagination/TablePagination';
// 
import { getData } from '../../api/getData';


function Users() {

    const [state, setState] = useContext(GetDataContext);
    const pageCount = Math.ceil(state.users.data.length / 15);

    useEffect(() => {

        if (!state.users.load) {
            const ff = async () => {
                const value = await getData('users')
                setState(prev => ({ ...prev, users: { load: true, data: value } }))
            }
            ff()
            console.log('update');
        }

    }, [])



    const [userModal, setUserModal] = useContext(InputsContext)

    // page state and choose page
    const [page, setPage] = useState(1)

    const clickHandler = () => {
        setUserModal(prev => ({
            ...prev, users: { type: 'new', data: {}, show: true }
        }));
    }

    return (

        <div className={styles.wrapper}>

            <HeaderComponent data={{ title: 'لیست کاربران', btnClick: clickHandler }} />

            {state.users.data.length && <User pageActive={page} data={state.users.data} />}


            <TablePagination data={{ count: pageCount, setPage }} />


            {
                userModal.users.show && <UserModal />
            }

        </div>
    )
}

export default Users