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
import WavyTop from "../components/WavyTop"
import Footer from "../components/Footer"
import {
  createData,
  StyledTableCell,
  StyledTableRow,
} from "../shared/tableFunctions"
import { Accommodation } from "../components/Accommodation"
import HotelHofwirt from "../assets/HotelHofwirt.jpg"
import SquareImg from "../components/SquareImg"
import Fortress from "../assets/fortress.jpg"
import SalzburgWinter from "../assets/salzburg.png"
import Krampus from "../assets/krampus.jpg"

const rows = [
  createData("Innsbruck Hbf 9:14AM", "Salzburg Hbf 11:02AM", "ÖBB | RJX 863"),
]

export const Salzburg = () => {
  return (
    <>
      <WavyTop date="Thursday December 5th" city="Salzburg" />
      <Box className="content">
        <Typography variant="h3" align="center" sx={{ my: 2 }}>
          Train to Salzburg
        </Typography>
        <List sx={{ mx: 2 }}>
          <ListItemText>
            6 minute walk to hotel from Innsbruck train station.
          </ListItemText>
          <ListItemText>
            6 minute drive from Salzburg train station to hotel or 18 minute
            walk.
          </ListItemText>
        </List>
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
                  Train
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
          name="Altstadt Hotel Hofwirt Salzburg"
          imgLink="https://hofwirt-salzburg.at/en/"
          imgAlt="Exterior of HotelHofwirt"
          imgSrc={HotelHofwirt}
          address="Schallmooser Hauptstraße 1, 5020 Salzburg, Austria"
        />
        <Typography variant="h3" sx={{ my: 2 }}>
          Location:
        </Typography>
        <List sx={{ mx: 2 }}>
          <ListItemText>
            Hohensalzburg Fortress - 20 minute walk or 10 minute drive.
          </ListItemText>
          <ListItemText>
            Basteiweg Stadtmauer - 20 minute walk or 6 minute drive.
          </ListItemText>
          <ListItemText>Altstadt, Alter Markt - 10 minute walk.</ListItemText>
        </List>
        <Typography variant="h3" sx={{ my: 2 }}>
          Things to do:
        </Typography>
        <Typography variant="h4" sx={{ mt: 2 }}>
          View the Hohensalzburg Fortress from the Basteiweg Stadtmauer and take
          a tour.
        </Typography>
        <SquareImg
          link="https://www.salzburg.info/en/sights/top10/hohensalzburg-fortress"
          alt="View of the Hohensalzburg Fortress in the snow."
          src={Fortress}
        />
        <Typography variant="h4" sx={{ mt: 2 }}>
          Walk around Old Town Salzburg.
        </Typography>
        <SquareImg
          link="https://www.salzburg.info/en/sights/top10/getreidegasse"
          alt="Christmas market in Salzburg."
          src={SalzburgWinter}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Points of Interest: Mozart's birthplace & Cafe-Konditorei Fürst
        </Typography>
        <SquareImg
          link="https://www.salzburg-altstadt.at/en/eventcalendar/krampus-run-christkindlmarkt_e_47241"
          alt="Krampus running thru Salzburg."
          src={Krampus}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Krampus run begins at 5:30PM at Altstadt, Alter Markt.
        </Typography>
      </Box>
      <Footer />
    </>
  )
}
