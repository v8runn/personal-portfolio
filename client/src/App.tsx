import './styles.css'; 
import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'
import { CssBaseline, createTheme, responsiveFontSizes } from '@material-ui/core';

let theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

theme = responsiveFontSizes(theme);


function App() {
  return (
    <div>
      <CssBaseline>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Footer />
      </CssBaseline>
    </div>
  );
}

export default App;
