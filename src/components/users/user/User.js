import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
// context
import { UserModalContext } from "../../../context/ModalContextProvider"
// table mui
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { tableCellClasses } from '@mui/material/TableCell';
// icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';


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
  { id: 1, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 2, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 3, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 4, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 5, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 6, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 7, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 8, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 9, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 10, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 11, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 12, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 13, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 14, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 15, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 16, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 17, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 18, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 19, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 20, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 21, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 22, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 23, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 24, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 25, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 26, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 27, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 28, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 29, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 30, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 31, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 32, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 33, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 34, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 35, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 36, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 37, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 38, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 39, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 40, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 41, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 42, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 43, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
  { id: 44, firstName: 'مهدی', lastName: 'رزاقی', image: "", position: "ادمین", userName: "Mr-mahdi", password: "123456", email: "razzaghi_mahdi@yahoo.com", number: "09920801032", birthDay: "1380/8/6" },
]





const showItem = 15;
export default function User({ pageActive }) {

  const showData = [...rows].slice(((showItem * pageActive) - showItem), (showItem * pageActive))


  const [userModal, setUserModal] = useContext(UserModalContext)

  
  const editHandler = (data) => {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    setUserModal({ show: true, type: 'update', data });
  }

  return (
    <TableContainer component={Paper}>
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
    </TableContainer>

  );
}