import { Typography } from "@mui/material"

export default function Counter() {
  let countDownDate = new Date("Dec 1, 2024").getTime()
  let todaysDate = new Date().getTime()
  let distance = countDownDate - todaysDate
  let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  return (
    <Typography variant="subtitle2" align="center" sx={{ my: 2 }}>
      {days} days until Europe!
    </Typography>
  )
}
