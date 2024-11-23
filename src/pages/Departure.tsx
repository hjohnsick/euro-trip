import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import {
  createData,
  StyledTableCell,
  StyledTableRow,
} from "../shared/tableFunctions"
import Footer from "../components/Footer"

const rows = [
  createData(
    "Vienna 10:25AM 12/7",
    "Toronto 2:35PM 12/7",
    "Air Canada Express #AC887"
  ),
  createData(
    "Toronto 6:30PM 12/7",
    "Detroit 7:51PM 12/7",
    "Air Canada #AC8775"
  ),
]

export const Departure = () => {
  return (
    <>
      <Box className="wavy-top" sx={{ paddingBottom: 8 }}>
        <Typography variant="h1" align="center" sx={{ my: 2 }}>
          Saturday December 7th
        </Typography>
        <Typography variant="h2" align="center" sx={{ my: 2 }}>
          Travel home
        </Typography>
      </Box>
      <Box className="content">
        <Typography variant="h3" sx={{ my: 2 }}>
          Flight Info:
        </Typography>
        <TableContainer component={Paper} className="tableContainer">
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell sx={{ fontWeight: "bold" }}>
                  Departure
                </StyledTableCell>
                <StyledTableCell align="right" sx={{ fontWeight: "bold" }}>
                  Arrival
                </StyledTableCell>
                <StyledTableCell align="right" sx={{ fontWeight: "bold" }}>
                  Flight
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.flight}>
                  <StyledTableCell component="th" scope="row">
                    {row.departure}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.arrival}</StyledTableCell>
                  <StyledTableCell align="right">{row.flight}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Footer />
    </>
  )
}
