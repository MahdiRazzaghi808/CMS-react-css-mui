import React, { useContext } from 'react'
// import styles from "./productCard.module.css"
// import { styled } from '@mui/material/styles';

// component
import TableConstructor from '../../table/TableConstructor';
// image
import image from "../../../asset/images/iphon.jpg"


// // table mui
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
// import { tableCellClasses } from '@mui/material/TableCell';
// // icons
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

// context
import { InputsContext } from '../../../context/InputsContextProvider'


import { showTableData } from '../../showTableData/showTableData'

// //  style table
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//         textAlign: 'center',

//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//         textAlign: 'center',
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));



const rowsDetails = [{ main: 'id', data: 'id' }, { main: 'تصویر', data: 'image' }, { main: 'نام محصول', data: 'title' }, { main: 'تخفیف', data: 'off' }, { main: 'قیمت', data: 'price' }, { main: 'موجودی', data: 'count' }, { main: 'دسترسی ها', data: 'access' }];







function ProductCard({ pageActive, data }) {



    const showData = showTableData(data, pageActive)

    // const [productState, setProductState] = useContext(InputsContext);
    // const [state, setState] = useState({type:'main'})





    // const editHandler = value => {
    //     document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    //     value.off && (value.showOff = true);


    //     setProductState(prev => ({
    //         ...prev, products: { type: 'update', data: value, show: true }

    //     }))

    // }

    return (
        <TableConstructor data={{ type: 'products', rowsDetails, showData }} />

    )
}

export default ProductCard


{/* <TableContainer component={Paper}>
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
</TableContainer> */}