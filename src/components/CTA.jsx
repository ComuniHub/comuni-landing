import backgroundImage from "../assets/bck7.svg";

const CTA = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="comenzar" className="relative py-12 text-white overflow-hidden flex items-center" style={{ marginTop: '-1px' }}>
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          style={{
            imageRendering: 'auto',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        />
      </div>
      
      <div className="container-custom px-4 md:px-0 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Vuélvete un héroe local
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-white/90">
            Transforma tu desarrollo en una comunidad próspera
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-12">
            <a
              href="https://www.jotform.com/form/252836456956068"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-[#00a86b] shadow-lg hover:bg-[#e7e7e7] transition-all hover:scale-105"
            >
              Quiero un Demo
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white/20 text-white border-2 border-white hover:bg-white/30 transition-all hover:scale-105"
            >
              Conocer más
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
