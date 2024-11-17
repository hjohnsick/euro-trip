import { Box, Typography } from "@mui/material"
import WavyTop from "../components/WavyTop"
import Footer from "../components/Footer"

export const Vienna = () => {
  return (
    <>
      <WavyTop date="Friday December 6th" city="Vienna" />
      <Box className="content">
        <Typography variant="h3" align="center" sx={{ my: 2 }}>
          Train to Vienna
        </Typography>
      </Box>
      <Footer />
    </>
  )
}
