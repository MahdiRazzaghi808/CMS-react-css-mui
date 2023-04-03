import React, { useState, useContext } from 'react'
import styles from "./productAdd.module.css"

import { TextField, Button, FormControlLabel, Switch } from '@mui/material';
import { InputsContext } from '../../../context/InputsContextProvider';
import SendBtn from '../../sendBtn/SendBtn';

const initialInputState = {
    title: '',
    price: '',
    count: '',
    off: '',
    priceAfterOff: '',
    showOff: false,
    explain: '',
};

function ProductAdd({ data }) {
    // update or create product
    let update = null;
    (data.type === 'update') ? update = true : update = false;
    // show data for product choose or show empty inputs for create product
    let values = null;
    update ? values = data.data : values = initialInputState;
    // input state and change this
    const [inputValues, setInputValues] = useState(values);

    const [state, setState] = useContext(InputsContext)

    if (state.products.data.id !== inputValues.id) {
        setInputValues(values)
    }

    const showInputOff = (inputValues.off === '' || inputValues.off === 0 ? true : inputValues.off) && inputValues.showOff && inputValues.price
    const showPriceAfterOff = (inputValues.priceAfterOff === '' || inputValues.priceAfterOff === 0 ? true : inputValues.priceAfterOff) && inputValues.showOff && inputValues.price

    const changeHandler = event => {
        const name = event.target.id
        const value = event.target.value;

        setInputValues(prev => ({
            ...prev, [name]: value
        })
        )
    }

    const changeImageHandler = (event) => {
        const file = event.target.files[0];
        setInputValues(prev => ({
            ...prev, image: file

        })
        )
       
    }


    return (
        <>
            <div className={styles.productAddWrapper}>

                <div >
                    <TextField fullWidth label={'نام محصول'} id='title' value={inputValues.title} onChange={changeHandler} />
                </div>

                <div >
                    <TextField fullWidth label={'قیمت'} id='price' value={inputValues.price} onChange={(event) => setInputValues(prev => ({ ...prev, priceAfterOff: prev.off * event.target.value / 100, price: event.target.value }))} type='number' InputProps={{ inputProps: { min: 0 } }} />
                </div>


                <div>
                    <TextField
                        id="count"
                        label="تعداد"
                        type="number"
                        InputProps={{ inputProps: { min: 0 } }}
                        fullWidth
                        value={inputValues.count}
                        onChange={changeHandler}

                    />
                </div>

                <div>
                    <Button variant="outlined" component="label" fullWidth sx={{  padding: '1rem 2.5rem' }} >
                        آپلود عکس
                        <input hidden accept="image/*" type="file" onChange={changeImageHandler} />
                    </Button>
                </div>


                <div>
                    <TextField
                        id="explain"
                        label="توضیحات"
                        multiline
                        rows={4}
                        fullWidth
                        value={inputValues.explain}
                        onChange={changeHandler}
                    />
                </div>


                <div className={styles.offWrapper} >
                    <FormControlLabel control={<Switch checked={inputValues.showOff && inputValues.price ? true : false} onClick={() => inputValues.price && setInputValues(prev => ({ ...prev, showOff: !prev.showOff }))} />} label="تخفیف" sx={{ color: 'green' }} />

                    <div className={styles.off} >
                        <TextField
                            id="off"
                            label="درصد"
                            type="number"
                            InputProps={{ inputProps: { min: 0 } }}
                            fullWidth
                            disabled={showInputOff ? false : true}
                            value={showInputOff ? inputValues.off : inputValues.off = ''}
                            onChange={event => {
                                setInputValues(prev => ({ ...prev, priceAfterOff: event.target.value === '' ? '' : (100 - event.target.value) * inputValues.price / 100 }));
                                setInputValues(prev => ({ ...prev, off: event.target.value }));
                            }}
                        />
                        <TextField
                            id="outlined-number"
                            label="قیمت بعد از تخفیف"
                            type="number"
                            InputProps={{ inputProps: { min: 0 } }}
                            fullWidth
                            disabled={showPriceAfterOff ? false : true}
                            value={showPriceAfterOff ? inputValues.priceAfterOff : inputValues.priceAfterOff = ''}
                            onChange={event => {
                                setInputValues(prev => ({ ...prev, off: event.target.value === '' ? '' : event.target.value * 100 / inputValues.price }));
                                setInputValues(prev => ({ ...prev, priceAfterOff: event.target.value }));
                            }}
                        />
                    </div>
                </div>

            </div>




            <div className={styles.sendBtn}>
                <SendBtn data={{ type: 'products', update, inputValues }} />
            </div>
        </>
    )
}

export default ProductAdd