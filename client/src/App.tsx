import './styles.css'; 
import Navbar from './Navbar'
import About from './About'
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
      </CssBaseline>
    </div>
  );
}

export default App;
