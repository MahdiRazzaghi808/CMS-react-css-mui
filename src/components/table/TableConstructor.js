import React, { useContext } from 'react'
// style
import styles from './tableConstructor.module.css'
// table mui
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { tableCellClasses } from '@mui/material/TableCell';
// icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
// delete
import { deleteData } from '../../api/deleteData';
import { getData } from '../../api/getData';
// context
import { GetDataContext } from '../../context/GetDataContextProvider'
import { InputsContext } from '../../context/InputsContextProvider'

//  style table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.header,
    color: theme.palette.common.text,
    textAlign: 'center',

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.common.text,
    textAlign: 'center',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor:theme.palette.common.odd,

  },
  '&:nth-of-type(even)': {
    backgroundColor:theme.palette.common.even,

  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



function TableConstructor({ data }) {

  const { type, rowsDetails, showData } = data;
  console.log('table', type);
  const [state, setState] = useContext(GetDataContext)

  const deleteHandler = async (data) => {
    const flag = await deleteData(type, data);

    if (flag) {
      const value = await getData(type);
      setState(prev => ({ ...prev, [type]: { load: true, data: value } }));
      // test 
      state[type].data.shift();
    }

  }

  const [inputsState, setInputsState] = useContext(InputsContext)

  const editHandler = (type, data) => {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    setInputsState(prev => ({ ...prev, [type]: { type: 'update', data: data, show: true } }))
    data.off && (data.showOff = true);
  }


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">

        <TableHead>
          <TableRow>

            {
              rowsDetails.map(item => <StyledTableCell align="right" key={item.main}>{item.main}</StyledTableCell>
              )
            }

          </TableRow>
        </TableHead>

        <TableBody>
          {
            showData.map((data) =>
              <StyledTableRow key={data.id}>

                {
                  rowsDetails.map(item => {
                    if (item.data === 'access') {
                      return (
                        <StyledTableCell align="right" key={item.main}>
                          <div className={styles.accessIcons}  >
                            <InfoIcon color="primary" />
                            <EditIcon color='warning' onClick={() => editHandler(type, data)} />
                            <DeleteIcon color='error' onClick={() => deleteHandler(data)} />
                          </div>
                        </StyledTableCell>)

                    } else if (item.data === 'image') {
                      return (<StyledTableCell align="right" className={styles[type]} key={item.main}>
                        <img src={data.image} alt={type} className={styles.img} />
                      </StyledTableCell>)

                    } else if (item.data[0] === 'firstName') {
                      return (<StyledTableCell align="right" key={item.main}>{data.firstName} {data.lastName}</StyledTableCell>)
                    } else if (item.data === 'price') {

                      if (data.off) {
                        return (<StyledTableCell align="right" key={item.main}>
                          <span>{data.priceAfterOff}</span>
                          <p className={styles.originalPrice}>{data.price}</p>
                        </StyledTableCell>)
                      } else {
                        return (<StyledTableCell align="right" key={item.main}> {data.price}  </StyledTableCell>)
                      }

                    } else {
                      return (<StyledTableCell align="right" key={item.main}>{data[item.data] ? data[item.data] : <span className={styles.noExists}>NO</span>}</StyledTableCell>)
                    }
                  })
                }




              </StyledTableRow>
            )}
        </TableBody>


      </Table>
    </TableContainer>
  )
}

export default TableConstructor