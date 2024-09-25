import { Box, Typography } from "@mui/material"
import Marienplatz from "../assets/marienplatz.png"
import CircleImg from "../components/CircleImg"

export const Homepage = () => {
  return (
    <>
      <Box className="content">
        <Typography variant="h1" align="center" sx={{ my: 2 }}>
          European Christmas Markets 2024
        </Typography>
        <CircleImg
          link="/munich"
          alt="Munich Christmas Market at Marienplatz"
          src={Marienplatz}
          date="Dec 1st"
        />
      </Box>
    </>
  )
}
