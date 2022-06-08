import ImageOne from '../components/ImageOne';
import ImageTwo from '../components/ImageTwo';
import ImageThree from '../components/ImageThree';
import AboutMe from '../components/AboutMeTextBox';
import Languages from '../components/LanguagesTextBox';
import Projects from '../components/ProjectsTextBox';
import React from 'react';

function Dashboard() {
    return (
        <div>
          <ImageOne />
          <AboutMe />
          <ImageTwo />
          <Languages />
          <ImageThree />
          <Projects />
        </div>  
    )
}

export default Dashboard;
