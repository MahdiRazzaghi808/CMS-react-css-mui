import React, { useContext } from 'react';
// context
// import { InputsContext } from "../../../context/InputsContextProvider"
// // table mui
// import { styled } from '@mui/material/styles';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
// import { tableCellClasses } from '@mui/material/TableCell';
// // icons
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import InfoIcon from '@mui/icons-material/Info';
import TableConstructor from '../../table/TableConstructor';


// //  style table
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//     textAlign: 'center',

//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//     textAlign: 'center',
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

import { showTableData } from '../../showTableData/showTableData';





const rowsDetails = [{ main: 'id', data: 'id' }, { main: 'پروفایل', data: 'image' }, { main: 'نام و نام خانوداگی', data: ['firstName', 'lastName'] }, { main: 'سمت', data: 'position' }, { main: 'نام کاربری', data: 'userName' }, { main: 'رمز عبور', data: 'password' }, { main: 'دسترسی ها', data: 'access' }];

function User({ data, pageActive }) {

  const showData = showTableData(data, pageActive)

  // const [userModal, setUserModal] = useContext(InputsContext);

  // const editHandler = (data) => {
  //   document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
  //   setUserModal(prev => ({
  //     ...prev, users: { type: 'update', data, show: true }

  //   }));
  // }

  return (
    <TableConstructor data={{ type: 'users', rowsDetails, showData }} />
  );
}

export default User

{/* <TableContainer component={Paper}>
<Table sx={{ minWidth: 700 }} aria-label="customized table">
  <TableHead>
    <TableRow>
      <StyledTableCell align="right">id</StyledTableCell>
      <StyledTableCell align="right" >پروفایل</StyledTableCell>
      <StyledTableCell align="right" >نام و نام خانوادگی</StyledTableCell>
      <StyledTableCell align="right">سمت</StyledTableCell>
      <StyledTableCell align="right">نام کاربری</StyledTableCell>
      <StyledTableCell align="right">رمز عبور</StyledTableCell>
      <StyledTableCell align="right">دسترسی ها</StyledTableCell>

    </TableRow>
  </TableHead>

  <TableBody>
    {showData.map((row) => 
      <StyledTableRow key={row.id}>
        <StyledTableCell align="right">{row.id}</StyledTableCell>
        <StyledTableCell align="right">{row.image}</StyledTableCell>
        <StyledTableCell align="right">{row.firstName} {row.lastName}</StyledTableCell>
        <StyledTableCell align="right">{row.position}</StyledTableCell>
        <StyledTableCell align="right">{row.userName}</StyledTableCell>
        <StyledTableCell align="right">{row.password}</StyledTableCell>
        <StyledTableCell align="right">
          <div style={{ display: "flex", align: "center", justifyContent: "space-around" }} >
            <InfoIcon color="primary" />
            <EditIcon color='warning' onClick={() => editHandler(row)} style={{ cursor: 'pointer' }} />
            <DeleteIcon color='error' />
          </div>
        </StyledTableCell>

      </StyledTableRow>
    )}
  </TableBody>



</Table>
</TableContainer> */}