import React from 'react';
import { Menu, X, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <About />
        <Skills />
        <Projects />
        <Services />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;