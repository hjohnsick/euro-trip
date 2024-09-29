import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="footer wavy-bottom">
      <Link to="/arrival">Nov 29th-30th</Link>
      <Link to="/munich">Dec 1st Munich</Link>
      <Link to="/fussen">Dec 2nd Fussen</Link>
      <Link to="/zurich">Dec 3rd Zurich</Link>
      <Link to="/innsbruck">Dec 4th Innsbruck</Link>
      <Link to="/salzburg">Dec 5th Salzburg</Link>
      <Link to="/vienna">Dec 6th Vienna</Link>
      <Link to="/departure">Dec 7th</Link>
    </footer>
  )
}
