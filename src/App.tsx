import { Outlet } from "react-router"
import "./App.css"
import { ThemeProvider, createTheme } from "@mui/material"
import Footer from "./components/Footer"

const theme = createTheme({
  typography: {
    fontFamily: ["LXGW WenKai Mono TC", "monospace"].join(","),
  },
})

theme.typography.h1 = {
  fontSize: "1.5rem",
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
