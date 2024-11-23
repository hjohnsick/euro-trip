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
import Levante from "../assets/Levante.jpg"
import SquareImg from "../components/SquareImg"
import Demel from "../assets/demel.jpg"
import Hofburg from "../assets/hofburg.jpg"
import Library from "../assets/library.jpg"
import Bow from "../assets/bow.jpg"
import StStephens from "../assets/st-stephens.jpeg"
import FerrisWheel from "../assets/ferris-wheel.jpg"
import Maria from "../assets/maria-theresien-platz.jpg"
import Rathausplatz from "../assets/Rathausplatz.jpg"

const rows = [
  createData("Salzburg Hbf 7:07AM", "Vienna Hbf 9:59AM", "ÖBB | RJX 269"),
]

export const Vienna = () => {
  return (
    <>
      <WavyTop date="Friday December 6th" city="Vienna" />
      <Box className="content">
        <Typography variant="h3" align="center" sx={{ my: 2 }}>
          Train to Vienna
        </Typography>
        <List sx={{ mx: 2 }}>
          <ListItemText>
            6 minute drive from Salzburg train station to hotel or 18 minute
            walk.
          </ListItemText>
          <ListItemText>
            11 minute drive from Vienna Hbf train station to hotel.
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
          name="The Levante Rathaus Apartments"
          imgLink="https://www.thelevante-rathaus.com/en/"
          imgAlt="Exterior of The Levante Rathaus Apartments"
          imgSrc={Levante}
          address="Laudongasse 8, 1080 Wien, Austria"
        />
        <Typography variant="h3" sx={{ my: 2 }}>
          Location:
        </Typography>
        <List sx={{ mx: 2 }}>
          <ListItemText>
            Christkindlmarkt, Rathausplatz - 11 minute walk
          </ListItemText>
          <ListItemText>Maria-Theresien-Platz - 18 minute walk</ListItemText>
          <ListItemText>Hofburg - 18 minute walk</ListItemText>
          <ListItemText>
            Austrian National Library - 24 minute walk
          </ListItemText>
          <ListItemText>St. Stephen's Cathedral - 27 minute walk</ListItemText>
          <ListItemText>
            Popp & Kretschmer (Christmas Bow) - 30 minute walk
          </ListItemText>
        </List>
        <Typography variant="h3" sx={{ my: 2 }}>
          Things to do:
        </Typography>
        <Typography variant="h4" sx={{ m: 2 }}>
          Breakfast at Demel.
        </Typography>
        <SquareImg
          link="https://www.demel.com/pages/cafe"
          alt="KAISERSCHMARRN"
          src={Demel}
        />
        <Typography variant="h4" sx={{ m: 2 }}>
          Tour Hofburg.
        </Typography>
        <SquareImg
          link="https://www.wien.info/en/art-culture/imperial-sights/hofburg-vienna"
          alt="Exterior of the Hofburg."
          src={Hofburg}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Marie Antoinette was born here. March 15th, 1938 Adolf Hitler
          proclaimed the Anschluss with Germany from the balcony.
        </Typography>
        <Typography variant="h4" sx={{ m: 2 }}>
          Check out the Austrian National Library.
        </Typography>
        <SquareImg
          link="https://www.onb.ac.at/"
          alt="Inside the Austrian National Library."
          src={Library}
        />
        <Typography variant="h4" sx={{ m: 2 }}>
          Look at the Christmas decorations at Popp & Kretschmer.
        </Typography>
        <SquareImg
          link="https://popp-kretschmer.com/en/"
          alt="Christmas bow around store front."
          src={Bow}
        />
        <Typography variant="h4" sx={{ m: 2 }}>
          St. Stephen's Cathedral
        </Typography>
        <SquareImg
          link="https://www.stephanskirche.at/"
          alt="St. Stephens Cathedral at Christmas time."
          src={StStephens}
        />
        <Typography variant="h4" sx={{ m: 2 }}>
          Take a ride on the Viennese Giant Ferris Wheel.
        </Typography>
        <SquareImg
          link="https://wienerriesenrad.com/en/home-2/"
          alt="Ferris wheel lit up at night time."
          src={FerrisWheel}
        />
        <Typography variant="h4" sx={{ m: 2 }}>
          Explore the Christmas market at Maria-Theresien-Platz
        </Typography>
        <SquareImg
          link="https://www.visitingvienna.com/sights/christmasmarkets/weihnachstdorf-maria-theresien-platz/"
          alt="Christmas market stalls outside the Maria-Theresien-Platz."
          src={Maria}
        />
        <Typography variant="h4" sx={{ m: 2 }}>
          Explore the Christkindlmarkt am Rathausplatz.
        </Typography>
        <SquareImg
          link="https://www.visitingvienna.com/sights/christmasmarkets/rathausplatz/"
          alt="Wiener Christkindlemarkt."
          src={Rathausplatz}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Vienna's most famous Christmas market in front of the town hall.
        </Typography>
      </Box>
      <Footer />
    </>
  )
}
