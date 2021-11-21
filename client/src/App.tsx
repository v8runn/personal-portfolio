import './styles.css'; 
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Footer from './Footer'
import { CssBaseline, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

function App() {
  const classes= useStyles();
  return (
    <Box className={classes.root}>
      <CssBaseline>
      <Navbar />
      <About />
      <Projects />
      <Footer />
      </CssBaseline>
    </Box>
  );
}

export default App;
