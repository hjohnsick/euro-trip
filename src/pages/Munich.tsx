import { Box, Typography } from "@mui/material"
import Footer from "../components/Footer"

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
      <Box className="content"></Box>
      <Footer />
    </>
  )
}
74
