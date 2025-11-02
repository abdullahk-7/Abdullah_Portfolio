import React, { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
// import GitHub from './components/GitHub';
import Experience from './components/Experience';
// import Services from './components/Services';
// import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      {/* <GitHub /> */}
      <Experience />
      {/* <Services /> */}
      {/* <Gallery /> */}
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;