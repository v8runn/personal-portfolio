import './styles.css'; 
import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'
import { CssBaseline } from '@material-ui/core';



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
