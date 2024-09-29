import { Box } from "@mui/material"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="footer wavy-bottom">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Link to="/arrival" className="footer-link">
            Nov 29th-30th
          </Link>
          <Link to="/munich" className="footer-link">
            Dec 1st Munich
          </Link>
          <Link to="/fussen" className="footer-link">
            Dec 2nd Fussen
          </Link>
          <Link to="/zurich" className="footer-link">
            Dec 3rd Zurich
          </Link>
        </Box>
        <Box>
          <Link to="/innsbruck" className="footer-link">
            Dec 4th Innsbruck
          </Link>
          <Link to="/salzburg" className="footer-link">
            Dec 5th Salzburg
          </Link>
          <Link to="/vienna" className="footer-link">
            Dec 6th Vienna
          </Link>
          <Link to="/departure" className="footer-link">
            Dec 7th
          </Link>
        </Box>
      </Box>
    </footer>
  )
}
