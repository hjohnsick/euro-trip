import { Typography } from "@mui/material"
import SquareImg from "./SquareImg"

interface AccommodationProps {
  name: string
  imgLink: string
  imgAlt: string
  imgSrc: string
  address: string
}

export const Accommodation = (props: AccommodationProps) => {
  return (
    <>
      <Typography variant="h3" sx={{ my: 2 }}>
        Accommodation:
      </Typography>
      <Typography variant="body1">{props.name}</Typography>
      <SquareImg link={props.imgLink} alt={props.imgAlt} src={props.imgSrc} />
      <Typography variant="h3" sx={{ my: 2 }}>
        Address:
      </Typography>
      <Typography variant="body1" sx={{ mx: 2 }}>
        {props.address}
      </Typography>
    </>
  )
}
