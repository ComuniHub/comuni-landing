import { useState, useEffect } from 'react';
import logoBlanco from '../assets/Recurso 41@300x.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detectar si el navbar ha pasado la sección hero
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        setHasScrolled(scrollPosition > heroBottom - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        background: hasScrolled ? 'rgba(0, 221, 141, 0.8)' : 'rgba(0, 221, 141, 0)',
        backdropFilter: hasScrolled ? 'blur(2px)' : 'blur(10px)',
        WebkitBackdropFilter: hasScrolled ? 'blur(2px)' : 'blur(10px)',
      }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Izquierda (40% más pequeño: h-12 -> h-7.2 ≈ h-7) */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" onClick={() => scrollToSection('hero')}>
              <img
                src={logoBlanco}
                alt="Comuni"
                className="h-7 w-auto"
              />
            </a>
          </div>

          {/* Desktop Menu - Centro */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <button
                onClick={() => scrollToSection('producto')}
                className="text-white hover:text-white/80 transition font-semibold"
              >
                Plataforma
              </button>
              <button
                onClick={() => scrollToSection('equipo')}
                className="text-white hover:text-white/80 transition font-semibold"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-white hover:text-white/80 transition font-semibold"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Botón CTA - Derecha */}
          <div className="hidden md:block">
            <a
              href="https://www.jotform.com/form/252836456956068"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white px-6 py-3 rounded-lg transition font-semibold ${
                hasScrolled
                  ? 'bg-[#0f1110] hover:bg-[#000000]'
                  : 'bg-[#00dd8d] hover:bg-[#00c47d]'
              }`}
            >
              Conoce la App
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/80 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('producto')}
                className="text-white hover:text-white/80 transition text-left font-semibold"
              >
                Plataforma
              </button>
              <button
                onClick={() => scrollToSection('equipo')}
                className="text-white hover:text-white/80 transition text-left font-semibold"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-white hover:text-white/80 transition text-left font-semibold"
              >
                Contacto
              </button>
              <a
                href="https://www.jotform.com/form/252836456956068"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white px-6 py-3 rounded-lg transition text-center font-semibold ${
                  hasScrolled
                    ? 'bg-[#1b1b1b] hover:bg-[#000000]'
                    : 'bg-[#00dd8d] hover:bg-[#00c47d]'
                }`}
              >
                Conoce la App
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
