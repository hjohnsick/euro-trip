import { Box, Typography } from "@mui/material"
import WavyTop from "../components/WavyTop"
import Footer from "../components/Footer"

export const Salzburg = () => {
  return (
    <>
      <WavyTop date="Thursday December 5th" city="Salzburg" />
      <Box className="content">
        <Typography variant="h3" align="center" sx={{ my: 2 }}>
          Train to Salzburg
        </Typography>
      </Box>
      <Footer />
    </>
  )
}
