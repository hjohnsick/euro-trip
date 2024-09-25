import { Box } from "@mui/material"
import { Link } from "react-router-dom"

interface CircleImgProps {
  link: string
  alt: string
  src: string
  date: string
}

export default function CircleImg(props: CircleImgProps) {
  return (
    <Box
      sx={{ height: 300, width: 300 }}
      className="circle-img-container permanent-marker-regular"
    >
      <Link to={props.link}>
        <Box
          component="img"
          alt={props.alt}
          src={props.src}
          className="circle-img"
        ></Box>
      </Link>
      <Box className="circle-img-text">{props.date}</Box>
    </Box>
  )
}
