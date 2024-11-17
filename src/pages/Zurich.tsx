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
import {
  createData,
  StyledTableCell,
  StyledTableRow,
} from "../shared/tableFunctions"
import { Accommodation } from "../components/Accommodation"
import HotelBristol from "../assets/hotel-bristol.jpg"
import SquareImg from "../components/SquareImg"
import Lindt from "../assets/lindt-store.jpg"
import Footer from "../components/Footer"
import ZurichTrainStation from "../assets/zurich-train-station.jpg"
import SingingChristmasTree from "../assets/Singing-Christmas-Tree-Zurich.jpg"
import Weihnachtsdorf from "../assets/weihnachtsdorf.jpg"
import Chasalp from "../assets/chasalp.jpg"

const rows = [
  createData(
    "Fussen (Platform 3) 5:50AM",
    "Buchloe 7:01AM",
    "Bayerische Regiobahn BRB RB77 (62729)"
  ),
  createData(
    "Buchloe 7:36AM",
    "10:27AM Zurich HB",
    "Bayerische Regiobahn BRB RB77 (62729)"
  ),
]

export const Zurich = () => {
  return (
    <>
      <WavyTop date="Tuesday December 3rd" city="Zurich" />
      <Box className="content">
        <Typography variant="h3" align="center" sx={{ my: 2 }}>
          Train to Zurich
        </Typography>
        <List sx={{ mx: 2 }}>
          <ListItemText>10 minute drive to Fussen traion station.</ListItemText>
          <ListItemText>
            4 minute walk from the Zurich HB train station to the hotel.
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
          name="Hotel Bristol"
          imgLink="https://bristol8035.besthotelszurich.com/en/"
          imgAlt="Hotel employee standing outside Hotel Bristol."
          imgSrc={HotelBristol}
          address="Stampfenbachstrasse 34, 8006 Zürich, Switzerland"
        />
        <Typography variant="h3" sx={{ my: 2 }}>
          Location:
        </Typography>
        <List sx={{ mx: 2 }}>
          <ListItemText>
            4 minute walk from the Zurich HB train station.
          </ListItemText>
          <ListItemText>
            Shopping street Bahnhofstrasse - 10 minute walk.
          </ListItemText>
          <ListItemText>
            20 minute drive to Lindt Home of Chocolate.
          </ListItemText>
          <ListItemText>11 minute walk to singing Christmas tree.</ListItemText>
        </List>
        <Typography variant="h3" sx={{ my: 2 }}>
          Things to do:
        </Typography>
        <Typography variant="h4" sx={{ mt: 2 }}>
          Lunch at Chasalp
        </Typography>
        <SquareImg
          link="https://www.chaesalp.ch/en/copy-of-sommer-auf-der-alp546dc9f9"
          alt="Outside seating area at Chasalp."
          src={Chasalp}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Address: Tobelhofstrasse 236, 8044 Zürich, Switzerland <br></br> We
          have a 11:30AM lunch reservation. It is a 10 minute drive from the
          hotel. After lunch we need to head directly to Lindt. It is a half
          hour drive from the restaurant. We will need to leave by 12:45PM.
        </Typography>
        <Typography variant="h4" sx={{ mt: 2 }}>
          Lindt Chocolate Museum
        </Typography>
        <SquareImg
          link="https://www.lindt-home-of-chocolate.com/en/"
          alt="Lindt store Zurich."
          src={Lindt}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Champagne Truffles Magic at 1:30pm. Chocolate tour at 2:30pm.
        </Typography>
        <Typography variant="h4" sx={{ mt: 2 }}>
          Christkindli Markt at the Zurich Train Station
        </Typography>
        <SquareImg
          link="https://christkindlimarkt.ch/en/home-en/"
          alt="Christmas market at the Zurich train statin."
          src={ZurichTrainStation}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          140 stalls inside the Zurich Train Station and a 10 metre high
          Christmas tree decorated in Swarovski crystals.
        </Typography>
        <Typography variant="h4" sx={{ mt: 2 }}>
          The Singing Christmas Tree and Christmas Market
        </Typography>
        <SquareImg
          link="https://www.singingchristmastree.ch/"
          alt="Singing Christmas Tree Zurich."
          src={SingingChristmasTree}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Located at Werdmühlepl., 8001 Zürich, Switzerland
        </Typography>
        <Typography variant="h4" sx={{ mt: 2 }}>
          Weihnachtsdorf Christmas Market
        </Typography>
        <SquareImg
          link="https://www.wienachtsdorf.ch/"
          alt="Weihnachtsdort Christmas Market."
          src={Weihnachtsdorf}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Located near Zurich's lakeshore in front of the Opera House. This
          Christmas Market features a Fondue-Chalet.
        </Typography>
      </Box>
      <Footer />
    </>
  )
}
