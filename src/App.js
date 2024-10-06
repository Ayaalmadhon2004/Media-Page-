import Navbar from './navbar/Navbar';
import "./index.css";
import Header from './header/Header';
import About from './about/About';
import Services from './services/Services';
import Slider from './slider/Slider';
import Projects from './projects/Projects';
import Blog from './blog/Blog';
import Contact from './contactUs/Contact';
import Footer from './footer/Footer';

function App() {
  return (
  <>
   <Navbar/>
   <Header/>
   <About/>
   <Services/>
   <Slider/>
   <Projects/>
   <Blog/>
   <Contact/>
   <Footer/>
  </>
  );
}

export default App;
