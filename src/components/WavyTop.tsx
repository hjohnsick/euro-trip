import { Box, Typography } from "@mui/material"

interface WavyTopProps {
  date: string
  city: string
}

export default function WavyTop(props: WavyTopProps) {
  return (
    <Box className="wavy-top" sx={{ paddingBottom: 8 }}>
      <Typography variant="h1" align="center" sx={{ m: 2 }}>
        {props.date}
      </Typography>
      <Typography variant="h2" align="center" sx={{ m: 2 }}>
        {props.city}
      </Typography>
    </Box>
  )
}
