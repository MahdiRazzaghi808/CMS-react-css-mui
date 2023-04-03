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
import { InputsContext } from "../../context/InputsContextProvider"
// mui components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// mui icons
import CloseIcon from '@mui/icons-material/Close';
// send Data
import SendBtn from '../sendBtn/SendBtn';


const initialINputValues = {
    firstName: "",
    lastName: "",
    position: "",
    userName: "",
    password: "",
    number: "",
    email: "",
    birthDay: "",
    image: null
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
    const [userModal, setUserModal] = useContext(InputsContext);
    // update or create user
    let update = null;
    (userModal.users.type === 'update') ? update = true : update = false;

    // show data for user choose or show empty inputs for create user
    let values = null;
    update ? values = userModal.users.data : values = initialINputValues;
    

    // show date 
    const [showDate, setShowDate] = useState(false);

    // input state and change this
    const [inputValues, setInputValues] = useState(values);

    const handleInputChange = (event, data) => {
        let name = null;
        let value = null;


        if (event.year) {
            name = 'birthDay'
            value = `${event.year}/${event.month.number}/${event.day}`
            setShowDate(false)
        } else {
            name = data
            value = event.target.value;
        }

        setInputValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));


    };





    // const [getState, setGetState] = useContext(GetDataContext)

    // const sendBtnHandler = async () => {
    //     // const flag = await sendData('products', update, inputValues);
    //     // setState(prev => ({
    //     //     ...prev, products: { ...prev.products, show: false }
    //     // }));
    //     // if (flag) {
    //     //     const value = await getData('products');
    //     //     setGetState(prev => ({ ...prev, products: { load: true, data: value } }));
    //     // }

    // }

    const changeImageHandler = (event) => {
        const file = event.target.files[0];
        setInputValues(prev => ({
            ...prev, image: file

        })
        )

    }

    return ReactDOM.createPortal(
        <div className={styles.userModalWrapper}>
            <div className={styles.userModal} >
                {/* close button modal */}
                <CloseIcon className={styles.closeIcon} color='error' onClick={() => setUserModal(prev => ({ ...prev, users: { type: 'close', data: {}, show: false } }))} />

                {/* title */}
                <div className={styles.header}>
                    <h2>{(update) ? 'ویرایش کاربر' : 'کاربر جدید'}</h2>
                </div>

                {/*avatar*/}
                <div className={styles.avatar}>
                    <div className={styles.imageWrapper}>
                        <img src={update ? image : question} alt="avatar" />
                    </div>
                    <Button variant="contained" component="label" >
                        آپلود پروفایل
                        <input hidden accept="image/*" type="file" onChange={changeImageHandler} />
                    </Button>
                </div>

                {/* input box */}
                <div className={styles.boxWrapper}>
                    {
                        inputLabel.map(item =>

                            <TextField fullWidth label={item.main} onChange={event => handleInputChange(event, item.data)} value={inputValues[item.data]} key={item.data} />
                        )
                    }

                    <div className={styles.inputDateWrapper}>
                        <div className={styles.inputDate}>
                            <label >تاریخ تولد</label>
                            <Button fullWidth onClick={() => setShowDate(true)} variant="contained" sx={{ color: "#fff", background: "var(--main-bg-color)" }}>{inputValues.birthDay ? inputValues.birthDay : 'انتخاب کنید'}</Button>
                        </div>
                        <div style={{ display: showDate ? 'flex' : 'none', justifyContent: 'center' }}>
                            <Calendar
                                calendar={persian}
                                locale={persian_fa}
                                value={inputValues.birthDay}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>



                </div>

                {/* create or edit user */}
                <div className={styles.sendButton}>
                    <SendBtn data={{ type: 'users', update, inputValues }} />
                </div>

            </div>
        </div>
        ,
        document.getElementById('user-modal')
    )
}


