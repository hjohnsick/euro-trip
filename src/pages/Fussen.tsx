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
import {
  createData,
  StyledTableCell,
  StyledTableRow,
} from "../shared/tableFunctions"
import { Accommodation } from "../components/Accommodation"
import Schweiger from "../assets/hotel-schweiger.jpg"
import Footer from "../components/Footer"
import SquareImg from "../components/SquareImg"
import Neuschwanstein from "../assets/neuschwanstein.png"
import Marienbrücke from "../assets/marienbrucke.jpg"
import Hohenschwangau from "../assets/Hohenschwangau.jpg"
import Lechfall from "../assets/lechfall.jpg"
import OldTown from "../assets/old-town-fussen.png"
import WavyTop from "../components/WavyTop"

const rows = [
  createData(
    "Munchen Hbf Gl.5-10 7:20AM",
    "Kaufbeuren 8:17AM",
    "DB Regio AG Bayern RE76 (7874)"
  ),
  createData(
    "Kaufbeuren 8:45AM",
    "Fussen 9:39AM",
    "Bayerische Regiobahn Y8 RB77 (62726)"
  ),
]

export const Fussen = () => {
  return (
    <>
      <WavyTop date="Monday December 2nd" city="Füssen" />
      <Box className="content">
        <Typography variant="h3" align="center" sx={{ my: 2 }}>
          Train to Füssen
        </Typography>
        <List sx={{ mx: 2 }}>
          <ListItemText>
            5 minute walk from hotel to Munchen Hbf train station.
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
          name="Aktiv Hotel Schweiger"
          imgLink="https://www.aktiv-hotel-schweiger.de/"
          imgAlt="Outside of Aktiv Hotel Schweiger"
          imgSrc={Schweiger}
          address="Ländeweg 2, 87629 Füssen, Germany"
        />
        <Typography variant="h3" sx={{ my: 2 }}>
          Location:
        </Typography>
        <List sx={{ mx: 2 }}>
          <ListItemText>
            4 minute drive or 14 minute walk to train station.
          </ListItemText>
          <ListItemText>10 minute drive to Neuschwanstein Castle.</ListItemText>
          <ListItemText>7 minute walk to Lechfall.</ListItemText>
          <ListItemText>10 minute walk to Hohes Schloss.</ListItemText>
        </List>
        <Typography variant="h3" sx={{ my: 2 }}>
          Things to do:
        </Typography>
        <SquareImg
          link="https://www.hohenschwangau.de/schloss-neuschwanstein"
          alt="Neuschwanstein Castle"
          src={Neuschwanstein}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Tour Neuschwanstein Castle at 2:15pm. Need to be at the castle an hour
          before tour starts. You cannot drive up to the castle. It is about a
          40 minute walk from the ticket centre.
        </Typography>
        <SquareImg
          link="https://www.hohenschwangau.de/schloss-neuschwanstein"
          alt="Neuschwanstein Castle view from Marienbrücke."
          src={Marienbrücke}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          For the best view of the castle, walk across the Marienbrücke.
        </Typography>
        <SquareImg
          link="https://www.hohenschwangau.de/schloss-hohenschwangau"
          alt="Hohenschwangau Castle"
          src={Hohenschwangau}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          View the Hohenschwangau Castle from the Jugend viewpoint.
        </Typography>
        <SquareImg
          link="https://www.lechweg.com/de/am-weg/highlights/lechfall-in-fuessen/"
          alt="Lechfall in Fussen."
          src={Lechfall}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Walk around Lechfall.
        </Typography>
        <SquareImg
          link="https://www.stadt-fuessen.de/Kultur/Museen-und-Kunst/Galerien-im-Hohen-Schloss"
          alt="Old town Fussen."
          src={OldTown}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Walk around Old Town Füssen and view the Hohes Schloss.
        </Typography>
      </Box>
      <Footer />
    </>
  )
}
