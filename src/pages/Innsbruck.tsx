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
import Mariott from "../assets/mariott.jpg"
import SquareImg from "../components/SquareImg"
import TopOfInnsbruck from "../assets/topOfInnsbruck.jpg"
import ColorfulHouses from "../assets/ColorfulHouses.jpg"
import TriumphalArch from "../assets/triumphalArch.jpg"
import GoldenRoof from "../assets/GoldenRoof.jpg"
import StAnnesColumn from "../assets/StAnnesColumn.jpg"
import Bergisel from "../assets/Bergisel.jpg"
import CityTower from "../assets/CityTower.jpg"
import Swarovski from "../assets/Swarovski.jpg"

const rows = [
  createData("Zurich HB 6:40AM", "Innsbruck 10:11AM", "ÖBB RJX 161"),
]

export const Innsbruck = () => {
  return (
    <>
      <WavyTop date="Wednesday December 4th" city="Innsbruck" />
      <Box className="content">
        <Typography variant="h3" align="center" sx={{ my: 2 }}>
          Train to Innsbruck
        </Typography>
        <List sx={{ mx: 2 }}>
          <ListItemText>
            4 minute walk from hotel to Zurich HB train station.
          </ListItemText>
          <ListItemText>
            6 minute walk to hotel from Innsbruck train station.
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
          name="AC Hotel by Marriott "
          imgLink="https://www.marriott.com/en-us/hotels/innac-ac-hotel-innsbruck/overview/"
          imgAlt="Exterior of AC Hotel by Marriott."
          imgSrc={Mariott}
          address="Salurner Str. 15, 6020 Innsbruck, Austria"
        />
        <Typography variant="h3" sx={{ m: 2 }}>
          Location:
        </Typography>
        <List sx={{ mx: 2 }}>
          <ListItemText>
            6 minute walk to the Innsbruck train station.
          </ListItemText>
          <ListItemText>11 minute walk to the Golden Roof.</ListItemText>
          <ListItemText>
            2 minute walk to the Triumphal Arch Innsbruck.
          </ListItemText>
          <ListItemText>6 minute walk to St Annes Column.</ListItemText>
          <ListItemText>
            15 minute walk to Innsbrucker Nordkettenbahnen - Top of Innsbruck
          </ListItemText>
          <ListItemText>
            16 minute walk to Mariahilfstraße - The Colorful Houses of Innsbruck
          </ListItemText>
          <ListItemText>
            30 minute walk or 6 minute drive to Bergisel Ski Jump
          </ListItemText>
        </List>
        <Typography variant="h3" sx={{ m: 2 }}>
          Things to do:
        </Typography>
        <Typography variant="h4" sx={{ m: 2 }}>
          Take the cable car to the top of Innsbruck.
        </Typography>
        <SquareImg
          link="https://nordkette.com/en/top-of-innsbruck/"
          alt="View from the top of Innsbruck."
          src={TopOfInnsbruck}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Address: Innsbruck Nordkettenbahnen - Congress Rennweg 3 A-6020
          Innsbruck
        </Typography>
        <Typography variant="h4" sx={{ m: 2 }}>
          Walk around Innsbruck
        </Typography>
        <SquareImg
          link="https://theworldpursuit.com/things-to-do-in-innsbruck/"
          alt="Colorful houses in Innsbruck."
          src={ColorfulHouses}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          The Colorful Houses of Innsbruck.
        </Typography>
        <SquareImg
          link="https://theworldpursuit.com/things-to-do-in-innsbruck/"
          alt="Triumphal Arch in Innsbruck."
          src={TriumphalArch}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Triumphal Arch
        </Typography>
        <SquareImg
          link="https://www.tyrol.tl/en/highlights/museums-and-exhibitions/golden-roof-museum/"
          alt="The Golden Roof."
          src={GoldenRoof}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Golden Roof
        </Typography>
        <SquareImg
          link="https://www.innsbruck.info/en/sightseeing/sightseeing/historical-buildings/detail/infrastruktur/city-tower-innsbruck.html"
          alt="City Tower Innsbruck"
          src={CityTower}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Climb to the top of the City Tower for views of Innsbruck. Closes at
          5pm.
        </Typography>
        <SquareImg
          link="https://www.innsbruck.info/en/sightseeing/sightseeing/historical-buildings/detail/infrastruktur/st-annes-column-innsbruck.html"
          alt="St Anne's Column"
          src={StAnnesColumn}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          St. Anne's Column
        </Typography>
        <SquareImg
          link="https://www.bergisel.info/at/"
          alt="Bergisel Stadium & Ski Jump"
          src={Bergisel}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Take cable car to Bergisel Stadium & Ski Jump. Closes at 4:30pm.
        </Typography>
        <SquareImg
          link="https://www.innsbruck.info/en/sightseeing/sightseeing/museums/detail/infrastruktur/swarovski-crystal-worlds-innsbruck.html"
          alt="Swarovski Crystal Worlds waterfall."
          src={Swarovski}
        />
        <Typography variant="body1" sx={{ m: 2 }}>
          Visit Swarovski Crystal Worlds. Take the Crystal Worlds Shuttle
          (Kristallweltenshuttle) from Innsbruck Main Railway Station to Wattens
          via Museumstraße and Löwenhaus/ORF. Guests holding a valid Innsbruck
          Card can use the shuttle for free and also enjoy free entry to the
          Crystal Worlds Museum. Closes at 7pm.
        </Typography>
      </Box>
      <Footer />
    </>
  )
}
