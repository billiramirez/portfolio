import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

function App({ data }) {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...data.heroData });
    setAbout({ ...data.aboutData });
    setProjects([...data.projectsData]);
    setContact({ ...data.contactData });
    setFooter({ ...data.footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

App.propTypes = {
  data: PropTypes.shape({
    heroData: PropTypes.object,
    aboutData: PropTypes.object,
    projectsData: PropTypes.object,
    contactData: PropTypes.object,
    footerData: PropTypes.object,
  }),
};

export default App;
