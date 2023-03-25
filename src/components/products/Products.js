import React, { useState } from 'react'
import styles from './products.module.css'
// mui component
import { Pagination, PaginationItem, Button } from '@mui/material';
// icons
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//  product
import ProductCard from './productCard/ProductCard';
//
import ProductAdd from './productAdd/ProductAdd';
// styled
import styled from 'styled-components';

const Div = styled.div`
      transition: all 0.3s linear;
      border-radius:0.5rem ;
      height: ${({ open }) => open ? '44rem' : '0'};
      border:${({ open }) => open ? '1px solid #285fd320' : 'none'} ;
      padding: ${({ open }) => open ? '1rem' : '0'};
      margin-bottom:${({ open }) => open ? '2rem' : '0'};

      @media (min-width: 768px) {
        height: ${({ open }) => open ? '24rem' : '0'};
        };

        div:first-child{
          display:${({ open }) => open ? 'grid' : 'none'};
            
 `




const initialInputState = {
    title: '',
    price: '',
    count: '',
    off: '',
    priceAfterOff: '',
    showOff: false,
    explain: '',
    // add: true
};
function Products() {

    const [inputValues, setInputValues] = useState(initialInputState);


    const [showAddProduct, setShowAddProduct] = useState(false);

    const [page, setPage] = useState(1)
    const changeHandler = (event, value) => {
        setPage(value)
    }


    const addProductBtnHandler = () => {
        setShowAddProduct(prev => !prev);
        setInputValues(initialInputState)
    }

    return (
        <div className={styles.wrapper}>
            <h2>لیست محصولات</h2>

            <div className={styles.header}>
                <Button variant="contained" size="large" hover='none' sx={{ background: showAddProduct ? '#d32929' : "#285fd3", "&:hover": { backgroundColor: showAddProduct ? '#d32929' : "#285fd3" }, color: "#fff" }} onClick={addProductBtnHandler}>{showAddProduct ? 'بستن' : 'محصول جدید'}</Button>
                <div className={styles.search}>
                    <input type="text" placeholder="جستجو..." />
                    <SearchIcon className={styles.iconSearch} />
                </div>
            </div>

            <Div open={showAddProduct}>
                <div>
                    <ProductAdd inputState={{ inputValues, setInputValues }} />
                </div>
            </Div>

            <div className={styles.productsWrapper}>
                <ProductCard pageActive={page} setInputValues={setInputValues} showAddProduct={setShowAddProduct} />
            </div>

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

        </div >
    )
}

export default Products