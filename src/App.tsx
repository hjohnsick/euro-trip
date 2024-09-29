import { Outlet } from "react-router"
import "./App.css"
import { ThemeProvider, createTheme } from "@mui/material"

const theme = createTheme({
  typography: {
    fontFamily: ["LXGW WenKai Mono TC", "monospace"].join(","),
  },
  palette: {
    secondary: {
      main: "#D2042D",
    },
  },
})

theme.typography.h1 = {
  fontSize: "1.5rem",
}

theme.typography.h2 = {
  fontSize: "1.25rem",
}

theme.typography.h3 = {
  fontSize: "1.125rem",
}

theme.typography.h4 = {
  fontSize: "1rem",
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Outlet />
      </ThemeProvider>
    </>
  )
}

export default App
