import React from 'react'
import styles from "./productAdd.module.css"

import { TextField, Button, FormControlLabel, Switch } from '@mui/material';





function ProductAdd({ inputState }) {
    const { inputValues, setInputValues } = inputState;



    const changeHandler = event => {
        const name = event.target.id
        const value = event.target.value;
        setInputValues(prev => ({
            ...prev, [name]: value
        }))
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
                    <Button variant="outlined" component="label" fullWidth sx={{ color: "#fff", padding: '1rem 2.5rem' }} >
                        آپلود عکس
                        <input hidden accept="image/*" type="file" />
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
                            disabled={(inputValues.off === '' || inputValues.off === 0 ? true : inputValues.off) && inputValues.showOff ? false : true}
                            value={(inputValues.off === '' || inputValues.off === 0 ? true : inputValues.off) && inputValues.showOff ? inputValues.off : ''}
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
                            disabled={(inputValues.priceAfterOff === '' || inputValues.priceAfterOff === 0 ? true : inputValues.priceAfterOff) && inputValues.showOff ? false : true}
                            value={(inputValues.priceAfterOff === '' || inputValues.priceAfterOff === 0 ? true : inputValues.priceAfterOff) && inputValues.showOff ? inputValues.priceAfterOff : ''}
                            onChange={event => {
                                setInputValues(prev => ({ ...prev, off: event.target.value === '' ? '' : event.target.value * 100 / inputValues.price }));
                                setInputValues(prev => ({ ...prev, priceAfterOff: event.target.value }));
                            }}
                        />
                    </div>
                </div>

            </div>


            <div className={styles.sendBtn}>
                <Button variant="contained" component="label" sx={{ color: "#fff", background: '#22c55e', "&:hover": { background: '#5cdb6a' } }}>
                    {inputValues.add ? 'اضافه کردن محصول' : 'ویرایش محصول'}
                </Button>
            </div>
        </>
    )
}

export default ProductAdd