import { Box } from "@mui/material"
import { Link } from "react-router-dom"

interface SquareImgProps {
  link: string
  alt: string
  src: string
}

export default function SquareImg(props: SquareImgProps) {
  return (
    <Box sx={{ marginTop: 5 }}>
      <Link to={props.link}>
        <Box sx={{ height: 300, width: 300 }}>
          <Box
            component="img"
            alt={props.alt}
            src={props.src}
            className="square-img"
          ></Box>
        </Box>
      </Link>
    </Box>
  )
}
