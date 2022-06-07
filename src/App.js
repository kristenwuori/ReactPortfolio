
import './App.css';
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import ImageThree from './components/ImageThree';
import AboutMe from './components/AboutMeTextBox';
import Languages from './components/LanguagesTextBox';
import Projects from './components/ProjectsTextBox';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      <ImageOne />
      <AboutMe />
      <ImageTwo />
      <Languages />
      <ImageThree />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
