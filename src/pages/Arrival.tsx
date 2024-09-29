import {
  Box,
  List,
  ListItemText,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import SquareImg from "../components/SquareImg"
import QuartierBelvedere from "../assets/QuartierBelvedere.jpg"
import Footer from "../components/Footer"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

function createData(departure: string, arrival: string, flight: string) {
  return { departure, arrival, flight }
}

const rows = [
  createData(
    "Detroit 8:35PM 11/29",
    "Toronto 9:50PM 11/29",
    "Air Canada Express #AC8776"
  ),
  createData(
    "Toronto 11:40PM 11/29",
    "London 11:40PM 11/29",
    "Air Canada #AC858"
  ),
  createData(
    "London 2:50PM 11/30",
    "Vienna 6:05PM 11/30",
    "Austrian Airlines #AC6184"
  ),
]

export const Arrival = () => {
  return (
    <>
      <Box className="wavy-top" sx={{ paddingBottom: 8 }}>
        <Typography variant="h1" align="center" sx={{ my: 2 }}>
          Friday November 29th - Saturday November 30th
        </Typography>
        <Typography variant="h2" align="center" sx={{ my: 2 }}>
          Leave for Vienna, Austria
        </Typography>
      </Box>
      <Box className="content">
        <Typography variant="h3" sx={{ my: 2 }}>
          Flight Info:
        </Typography>
        <TableContainer component={Paper}>
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
        <Typography variant="h3" sx={{ my: 2 }}>
          Accommodation:
        </Typography>
        <Typography variant="body1">Quartier Belvedere 16</Typography>
        <SquareImg
          link="https://www.booking.com/hotel/at/the-view-16-01-quartier-belvedere.html"
          alt="Dining area of Quartier Belvedere 16"
          src={QuartierBelvedere}
        />
        <Typography variant="h3" sx={{ my: 2 }}>
          Address:
        </Typography>
        <Typography variant="body1" sx={{ mx: 2 }}>
          ArsenalstraBe, 10. Favoriten, 1100 Vienna, Austria{" "}
        </Typography>
        <Typography variant="h3" sx={{ my: 2 }}>
          Location:
        </Typography>
        <List sx={{ mx: 2 }}>
          <ListItemText>8 minute drive from the airport.</ListItemText>
          <ListItemText>
            4 minute walk to the Vienna Central T station.
          </ListItemText>
        </List>
      </Box>
      <Footer />
    </>
  )
}
