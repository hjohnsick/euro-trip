import {
  Box,
  List,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import QuartierBelvedere from "../assets/QuartierBelvedere.jpg"
import Footer from "../components/Footer"
import {
  createData,
  StyledTableCell,
  StyledTableRow,
} from "../shared/tableFunctions"
import { Accommodation } from "../components/Accommodation"

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
        <Accommodation
          name="Quartier Belvedere 16"
          imgLink="https://www.booking.com/hotel/at/the-view-16-01-quartier-belvedere.html"
          imgAlt="Dining area of Quartier Belvedere 16"
          imgSrc={QuartierBelvedere}
          address="ArsenalstraBe, 10. Favoriten, 1100 Vienna, Austria"
        />
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
