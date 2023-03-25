import React from 'react'
import styles from "./productCard.module.css"
import { styled } from '@mui/material/styles';

import image from "../../../asset/images/iphon.jpg"


// table mui
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { tableCellClasses } from '@mui/material/TableCell';
// icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
//  style table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        textAlign: 'center',

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        textAlign: 'center',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));






const rows = [
    { id: 1, title: 'iphone 12', price: 200_000, count: 120, off: '50', image, priceAfterOff: 100_00 },
    { id: 2, title: 'iphone 13', price: 100_000, count: 360, off: '20', image, priceAfterOff: 80_000 },
    { id: 3, title: 'iphone 14', price: 250_000, count: 200, off: '10', image },
    { id: 4, title: 'iphone 15', price: 200_000, count: 120, off: '10', image },
    { id: 5, title: 'iphone 16', price: 200_000, count: 120, off: '10', image },
    { id: 6, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 8, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 9, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 10, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 11, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 12, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 13, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 14, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 15, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 16, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 17, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 16, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 17, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 18, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 19, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 20, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 21, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 22, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 23, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },
    { id: 24, title: 'iphone 12', price: 200_000, count: 120, off: '10', image },

]





const showItem = 15;





function ProductCard({ pageActive, setInputValues, showAddProduct }) {
    const showData = [...rows].slice(((showItem * pageActive) - showItem), (showItem * pageActive));


    const editHandler = value => {
        if (value.off) {
            value.showOff = true
        }
        setInputValues(value);
        showAddProduct(true);
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })

    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="right">id</StyledTableCell>
                        <StyledTableCell align="right" >تصویر</StyledTableCell>
                        <StyledTableCell align="right" >نام محصول</StyledTableCell>
                        <StyledTableCell align="right">قیمت</StyledTableCell>
                        <StyledTableCell align="right">موجودی</StyledTableCell>
                        <StyledTableCell align="right">دسترسی ها</StyledTableCell>

                    </TableRow>
                </TableHead>

                <TableBody>
                    {showData.map((row) =>
                        <StyledTableRow key={row.id}>
                            <StyledTableCell align="right">{row.id}</StyledTableCell>
                            <StyledTableCell align="right" className={styles.productImage}><img src={row.image} alt="" /></StyledTableCell>
                            <StyledTableCell align="right">{row.title}</StyledTableCell>
                            <StyledTableCell align="right">{row.price}</StyledTableCell>
                            <StyledTableCell align="right">{row.count}</StyledTableCell>
                            <StyledTableCell align="right">
                                <div style={{ display: "flex", align: "center", justifyContent: "space-evenly" }} >
                                    <EditIcon color='warning' style={{ cursor: 'pointer' }} onClick={() => editHandler(row)} />
                                    <DeleteIcon color='error' />
                                </div>
                            </StyledTableCell>

                        </StyledTableRow>
                    )}
                </TableBody>



            </Table>
        </TableContainer>
    )
}

export default ProductCard