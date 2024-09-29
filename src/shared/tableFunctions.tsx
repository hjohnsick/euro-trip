import styled from "@emotion/styled"
import { TableCell, tableCellClasses, TableRow } from "@mui/material"

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#d2042d",
    color: "#fff",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

export const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f1f5f3",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

export function createData(departure: string, arrival: string, flight: string) {
  return { departure, arrival, flight }
}
