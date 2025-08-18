import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton'
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Maintenance from './components/Maintenance';

export default function App({ section }) {
  const IS_MAINTENANCE_MODE = true;

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [section]);

  if (IS_MAINTENANCE_MODE) return <Maintenance />;

  return (
    <div className="relative bg-black text-white font-sans">
      <Header />

      <CustomCursor />
      
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>

      <ScrollToTopButton />

      <Footer />
    </div>
  );
}