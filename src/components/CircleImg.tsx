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
    <Box sx={{ marginTop: 5 }}>
      <Link to={props.link}>
        <Box
          sx={{ height: 300, width: 300 }}
          className="circle-img-container permanent-marker-regular"
        >
          <Box
            component="img"
            alt={props.alt}
            src={props.src}
            className="circle-img"
          ></Box>

          <Box className="circle-img-text">{props.date}</Box>
        </Box>
      </Link>
    </Box>
  )
}
