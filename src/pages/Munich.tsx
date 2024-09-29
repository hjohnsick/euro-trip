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
import Footer from "../components/Footer"
import {
  createData,
  StyledTableCell,
  StyledTableRow,
} from "../shared/tableFunctions"
import { Accommodation } from "../components/Accommodation"
import AdvaStay from "../assets/AdvaStay.jpg"
import SquareImg from "../components/SquareImg"
import Glockenspiel from "../assets/Glockenspiel.jpg"
import Marienplatz from "../assets/marienplatz.png"
import StPeters from "../assets/st-peters-church.jpg"
import Surfers from "../assets/surfers.jpg"
import Frauenkirche from "../assets/frauenkirche.png"
import MunichResidenz from "../assets/Munich-Residenz.jpg"
import Hofbrauhaus from "../assets/hofbrauhaus.png"
import Pool from "../assets/volksbad-pool.jpg"

const rows = [
  createData(
    "Vienna Central T (Platform 8) 6:28AM",
    "Munchen Hbf 10:33AM",
    "OBB RJX 260"
  ),
]

export const Munich = () => {
  return (
    <>
      <Box className="wavy-top" sx={{ paddingBottom: 8 }}>
        <Typography variant="h1" align="center" sx={{ my: 2 }}>
          Sunday December 1st
        </Typography>
        <Typography variant="h2" align="center" sx={{ my: 2 }}>
          Munich
        </Typography>
      </Box>
      <Box className="content">
        <Typography variant="h3" align="center" sx={{ my: 2 }}>
          Train to Munich
        </Typography>
        <List sx={{ mx: 2 }}>
          <ListItemText>
            4 minute walk to the Vienna Central T station.
          </ListItemText>
          <ListItemText>
            5 minute walk from Munchen Hbf train station to the hotel.
          </ListItemText>
        </List>
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
          name="AdvaStay by KING'S"
          imgLink="https://www.kingshotels.de/en/apartment-hotel-munich-advastay/"
          imgAlt="AdvaStay by KING's room"
          imgSrc={AdvaStay}
          address="Dachauer Str. 13, 80335 München, Germany"
        />
        <Typography variant="h3" sx={{ my: 2 }}>
          Location:
        </Typography>
        <List sx={{ mx: 2 }}>
          <ListItemText>
            5 minute walk to Munchen Hbf train station.
          </ListItemText>
          <ListItemText>20 minute walk to Marienplatz.</ListItemText>
          <ListItemText>22 minute walk to Munich Residenz.</ListItemText>
          <ListItemText>24 minute walk to Hofbrauhaus.</ListItemText>
          <ListItemText>19 minute walk to Frauenkirche.</ListItemText>
        </List>
        <Typography variant="h3" sx={{ my: 2 }}>
          Things to do:
        </Typography>
        <Typography variant="h4" sx={{ my: 2 }}>
          Marienplatz
        </Typography>
        <SquareImg
          link="https://themunichguide.de/tourist-attractions/glockenspiel-munich-marienplatz/"
          alt="Marienplatz Glockenspiel"
          src={Glockenspiel}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Watch the Glockenspiel performance at 12pm on the Clock Tower of the
          New Town Hall.
        </Typography>
        <SquareImg
          link="https://www.christkindlmarkt-muenchen.de/en/home"
          alt="Marienplatz Christmas Market"
          src={Marienplatz}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Eat and walk around the Christmas Market.
        </Typography>
        <SquareImg
          link="https://www.muenchen.de/en/sights/alter-peter-info-and-entrance-fees-church-st-peter-lookout-tower"
          alt="View of Marienplatz from St. Peter's Church"
          src={StPeters}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Climb the 300 steps in the tower of St. Peter&apos;s Church for the
          best view of the city. (Entrance fee of 5 euros)
        </Typography>
        <SquareImg
          link="https://www.munich.travel/en/pois/urban-districts/frauenkirche"
          alt="Frauenkirche Church, Munich"
          src={Frauenkirche}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Tour the Frauenkirche, Munich&apos;s most famous landmark. Hours
          11:30pm - 4pm.
        </Typography>
        <SquareImg
          link="https://www.munich.travel/en/pois/sports-leisure/eisbachwelle"
          alt="Surfers at Eisbachwelle, Munich."
          src={Surfers}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Watch the surfers at E2 Kleine Eisbachwelle. A 8 minute drive from
          Marienplatz or a 30 minute walk.
        </Typography>
        <SquareImg
          link="https://www.residenz-muenchen.de/englisch/tourist/index.htm"
          alt="Interior of the Munich Residence"
          src={MunichResidenz}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Visit the Munich Residence. If time allows take a tour. Last entry is
          at 4pm, closes at 5pm. There is a Christmas Market in the courtyard.
        </Typography>
        <SquareImg
          link="https://www.hofbraeuhaus.de/"
          alt="Interior of the Hofbrauhaus"
          src={Hofbrauhaus}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Visit the most famous pub in the world, Hofbrauhaus.
        </Typography>
        <SquareImg
          link="https://www.swm.de/baeder/muellersches-volksbad"
          alt="müllersches volksbad pool"
          src={Pool}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          If we&apos;re not too tired, go for a swim at Müllersches Volksbad.
          Open until 11pm.
        </Typography>
      </Box>
      <Footer />
    </>
  )
}
74
