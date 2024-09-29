import { Box, Typography } from "@mui/material"
import Marienplatz from "../assets/marienplatz.png"
import Neuschwanstein from "../assets/neuschwanstein.png"
import Lindt from "../assets/lindt.jpg"
import Innsbruck from "../assets/innsbruck.jpg"
import Salzburg from "../assets/salzburg.png"
import Vienna from "../assets/vienna.jpg"
import Arrival from "../assets/austrian-airplane.jpg"
import Departure from "../assets/air-canada.jpg"
import CircleImg from "../components/CircleImg"
import HomepageFooter from "../components/HomepageFooter"

export const Homepage = () => {
  return (
    <>
      <Box className="content">
        <Box className="wavy-top">
          <Typography variant="h1" align="center" sx={{ my: 2 }}>
            European Christmas Markets 2024
          </Typography>
        </Box>
        <CircleImg
          link="/arrival"
          alt="Austrian airplane taking off."
          src={Arrival}
          date="Nov 29th - 30th"
        />
        <CircleImg
          link="/munich"
          alt="Munich Christmas Market at Marienplatz"
          src={Marienplatz}
          date="Dec 1st"
        />
        <CircleImg
          link="/fussen"
          alt="Neuschwanstein Castle in winter."
          src={Neuschwanstein}
          date="Dec 2nd"
        />
        <CircleImg
          link="/zurich"
          alt="Lindt Chocolate Museum."
          src={Lindt}
          date="Dec 3rd"
        />
        <CircleImg
          link="/innsbruck"
          alt="The city of Innsbruck, Austria."
          src={Innsbruck}
          date="Dec 4th"
        />
        <CircleImg
          link="/salzburg"
          alt="The city of Salzburg, Austria."
          src={Salzburg}
          date="Dec 5th"
        />
        <CircleImg
          link="/vienna"
          alt="The main entrance to the Christkindlmarkt in front of Rathaus city hall in Vienna, Austria."
          src={Vienna}
          date="Dec 6th"
        />
        <CircleImg
          link="/departure"
          alt="Air Canada plane flying."
          src={Departure}
          date="Dec 7th"
        />
      </Box>
      <HomepageFooter />
    </>
  )
}
