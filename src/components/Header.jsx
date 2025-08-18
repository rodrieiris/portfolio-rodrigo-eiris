import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const location = useLocation();
  const [active, setActive] = useState('/');
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    setActive(location.pathname);
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY === 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(v => !v);

  // Clases de fondo y texto según posición
  const containerClass = isAtTop
    ? 'bg-black bg-opacity-80 text-white'
    : 'bg-black border-b border-gray-700 text-white';

  // Logo claro u oscuro
  //const logoSrc = isAtTop
  //  ? '/assets/images/logo-blanco.png'
  //  : '/assets/images/logo-negro.png';
  // Logo siempre blanco
  const logoSrc = '/assets/images/logo-blanco.png';



  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 backdrop-blur-md
        transition-colors duration-300 ${containerClass}
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center"
        >
          <img src={logoSrc} alt="Logo" className="h-10 w-[6.5em]" />
        </Link>

        {/* Escritorio */}
        {!isMobile ? (
          <ul className="flex gap-6 text-sm md:text-base">
            {[
              { to: '/sobre-mi', label: 'Sobre mí' },
              { to: '/proyectos', label: 'Proyectos' },
              { to: '/contacto', label: 'Contacto' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`
                    transition-colors duration-200
                    ${active === to ? 'text-accent' : 'hover:text-accent'}
                  `}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <button
            onClick={toggleMenu}
            className="text-2xl bg-transparent border-none outline-none"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </nav>

      {/* Menú móvil fijo justo bajo el header */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 bg-[#1f1f1f]/90 z-40 px-6 py-6 shadow-md"
          >
            <nav className="flex flex-col items-center gap-6 text-xl">
              {[
                { to: '/sobre-mi', label: 'Sobre mí' },
                { to: '/proyectos', label: 'Proyectos' },
                { to: '/contacto', label: 'Contacto' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={toggleMenu}
                  className="text-white transition-colors duration-200 hover:text-accent"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}