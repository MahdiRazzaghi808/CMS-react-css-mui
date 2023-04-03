import React, { useState, useContext, useEffect } from 'react'
import styles from './products.module.css'
//  component
import ProductCard from './productCard/ProductCard';
import ProductAdd from './productAdd/ProductAdd';
import TablePagination from '../pagination/TablePagination';
// styled
import styled from 'styled-components';
import HeaderComponent from '../header-component/HeaderComponent';
// context 
import { InputsContext } from '../../context/InputsContextProvider'
import { GetDataContext } from '../../context/GetDataContextProvider'
import { getData } from '../../api/getData';

const Div = styled.div`
      transition: all 0.3s linear;
      border-radius:0.5rem ;
      overflow: hidden;

      height: ${({ open }) => open ? '44rem' : '0'};
      border:${({ open }) => open ? '1px solid #285fd320' : 'none'} ;
      padding: ${({ open }) => open ? '1rem' : '0'};
      margin-bottom:${({ open }) => open ? '2rem' : '0'};

      @media (min-width: 768px) {
        height: ${({ open }) => open ? '24rem' : '0'};
        };
           
 `




const initialInputState = {
    title: '',
    price: '',
    count: '',
    off: '',
    priceAfterOff: '',
    showOff: false,
    explain: '',
};

function Products() {

    // const [inputValues, setInputValues] = useState(initialInputState);

    const [state, setState] = useContext(GetDataContext);

    const pageCount = Math.ceil(state.products.data.length / 15)
    useEffect(() => {

        if (!state.products.load) {
            const ff = async () => {
                const value = await getData('products')
                setState(prev => ({ ...prev, products: { load: true, data: value } }))
            }
            ff()
            // console.log('update');
        }

    }, [])

    const [page, setPage] = useState(1)

    const [productState, setProductState] = useContext(InputsContext);

    const addProductBtnHandler = () => {
        setProductState(prev => ({
            ...prev, products: { type: 'add', data: initialInputState, show: !prev.products.show }
        }))
    }
  
    return (
        <div className={styles.wrapper}>

            <HeaderComponent data={{ title: 'لیست محصولات', btnClick: addProductBtnHandler, showAddProduct: productState.products.show }} />

            <Div open={productState.products.show}>
                <ProductAdd data={productState.products} />
            </Div>

            {/* {console.log(state)} */}

            {state.products.data.length && <ProductCard pageActive={page} data={state.products.data} />}


            <TablePagination data={{ count: pageCount, setPage }} />

        </div >
    )
}

export default Products