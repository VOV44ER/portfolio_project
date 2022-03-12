import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#24242d',
    },
    secondary: {
      main: '#e4e4e4',
    },
  },

  components: {
    MuiInput: {
      styleOverrides: {
          color: '#e4e4e4',
        },
      },
    },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Nav />
        <About />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
