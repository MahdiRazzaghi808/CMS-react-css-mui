import React, { useContext } from 'react'
import { Button } from '@mui/material';

import { GetDataContext } from '../../context/GetDataContextProvider';
import { InputsContext } from '../../context/InputsContextProvider'

import { getData } from '../../api/getData';
import { sendData } from '../../api/sendData';


const btnContent = {
    products: ['ویرایش محصول', 'اضافه کردن محصول'],
    users: ['ويرايش كاربر', 'ايجاد كاربر'],
}

function SendBtn({ data }) {
    const { type, update, inputValues } = data;

    const [getState, setGetState] = useContext(GetDataContext)
    const [state, setState] = useContext(InputsContext)

    const sendBtnHandler = async () => {
        console.log(inputValues);


        const flag = await sendData(type, update, inputValues);
        setState(prev => ({
            ...prev, [type]: { ...prev[type], show: false }
        }));
        if (flag) {
            const value = await getData(type);
            setGetState(prev => ({ ...prev, [type]: { load: true, data: value } }));
            console.log(getState);
        }

    }

    return (
        <Button variant="contained" component="label" sx={{ color: "#fff", background: '#22c55e', "&:hover": { background: '#5cdb6a' } }} onClick={sendBtnHandler}>
            {update ? btnContent[type][0] : btnContent[type][1]}

        </Button>
    )
}

export default SendBtn