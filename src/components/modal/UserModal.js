import React, { useContext, useState } from 'react'
import ReactDOM from 'react-dom';
// style
import styles from "./userModal.module.css"
// image
import image from "../../asset/images/avatar/photo.jpeg"
import question from "../../asset/images/avatar/question.svg"
// date
import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
// context
import { UserModalContext } from "../../context/ModalContextProvider"
// mui
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';


const initialINputValues = {
    firstName: "",
    lastName: "",
    position: "",
    userName: "",
    password: "",
    number: "",
    email: "",
    birthDay: ""
}

const inputLabel = [
    { main: 'نام', data: "firstName" },
    { main: 'نام خانوادگی', data: "lastName" },
    { main: 'سمت', data: "position" },
    { main: 'نام کاربری', data: "userName" },
    { main: 'رمز عبور', data: "password" },
    { main: 'شماره تماس', data: "number" },
    { main: 'ایمیل', data: "email" },
]

export default function UserModal() {
    // context data
    const [userModal, setUserModal] = useContext(UserModalContext);

    // update or create user
    let update = null;
    (userModal.type === 'update') ? update = true : update = false;

    // show data for user choose or show empty inputs for create user
    let inputValues = null;
    update ? inputValues = userModal.data : inputValues = initialINputValues;

    // show date 
    const [showDate, setShowDate] = useState(false);

    // input state and change this
    const [values, setValues] = useState(inputValues)
    const handleInputChange = (event) => {
        let name = null;
        let value = null;

        if (event.year) {
            name = 'birthDay'
            value = `${event.year}/${event.month.number}/${event.day}`
            setShowDate(false)
        } else {
            name = event.target.dataset.value
            value = event.target.value;
        }

        setValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));


    };

    return ReactDOM.createPortal(
        <div className={styles.userModalWrapper}>
            <div className={styles.userModal} >
                {/* close button modal */}
                <CloseIcon className={styles.closeIcon} color='error' onClick={() => setUserModal({ ...userModal, show: false })} />
               
                {/* title */}
                <div className={styles.header}>
                    <h2>{(update) ? 'ویرایش کاربر' : 'کاربر جدید'}</h2>
                </div>
               
                {/*avatar*/}
                <div className={styles.avatar}>
                    <div className={styles.imageWrapper}>
                        <img src={update ? image : question} alt="avatar" />
                    </div>
                    <Button variant="contained" component="label">
                        آپلود پروفایل
                        <input hidden accept="image/*" type="file" />
                    </Button>
                </div>
               
                {/* input box */}
                <div className={styles.boxWrapper}>
                    {
                        inputLabel.map(item =>

                            <div className={styles.inputWrapper} key={item.data}>
                                <label htmlFor={`${item.data}`}>{item.main}</label>
                                <input type='text' id={`${item.data}`} onChange={handleInputChange} value={values[item.data]} data-value={item.data} />
                            </div>
                        )
                    }

                    <div className={styles.inputWrapper}>
                        <label >تاریخ تولد</label>
                        <Button onClick={() => setShowDate(true)} variant="contained" sx={{ color: "#fff", background: "#313a55" }}>{values.birthDay ? values.birthDay : 'انتخاب کنید'}</Button>
                        <div style={{ display: showDate ? 'flex' : 'none', justifyContent: 'center' }}>
                            <Calendar
                                calendar={persian}
                                locale={persian_fa}
                                value={values.birthDay}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>



                </div>
               
                {/* create or edit user */}
                <div className={styles.sendButton}>
                    <Button variant="contained" data-value='date' sx={{ color: "#fff", background: "#285fd3" }} >{update ? 'ويرايش كاربر' : 'ايجاد كاربر'}</Button>
                </div>
            
            </div>
        </div>
        ,
        document.getElementById('user-modal')
    )
}


