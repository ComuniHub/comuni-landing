import { useState, useEffect } from 'react';
import backgroundImage from "../assets/bck-2.webp";
import iconoHand from "../assets/icono-hand.webp";
import iconoPlus from "../assets/icono-+.webp";
import iconoStats from "../assets/icono-stats.webp";

const Vision = () => {
  const [currentPill, setCurrentPill] = useState(0);
  const pills = [
    "la inseguridad",
    "la mala convivencia",
    "la desinformación",
    "el caos vecinal",
    "una colonia descuidada"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPill((prev) => (prev + 1) % pills.length);
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen py-16 md:py-24 flex items-center overflow-hidden" style={{ marginTop: '-2px' }}>
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          imageRendering: 'auto',
          transform: 'translateZ(0)', // Forzar aceleración por hardware
          backfaceVisibility: 'hidden', // Optimizar rendering
          WebkitBackfaceVisibility: 'hidden',
        }}
      />

      <div className="container-custom mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          {/* Título principal */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-6 md:mb-8">
            Tu colonia tiene retos sin fin.
          </h2>

          {/* Texto explicativo */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed max-w-3xl mx-auto px-4 md:px-0">
            Desde que sales de casa{" "}
            <span className="inline-block bg-[#00a86b] text-white px-3 py-1 rounded-full text-base sm:text-lg md:text-xl font-semibold transition-all duration-500">
              {pills[currentPill]}
            </span>{" "}
            afecta tu vida, puedes ganarle todos los días con apoyo.
          </p>
        </div>

        {/* Three info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="glass rounded-2xl p-6 shadow-medium hover:shadow-strong transition-all">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center flex-shrink-0">
                <img src={iconoHand} alt="Icono" className="h-16 w-16 object-contain" loading="lazy" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-black">No se apagan</h3>
                <p className="text-sm text-black leading-relaxed">
                  Los problemas siguen, aunque tú estés ocupado.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass rounded-2xl p-6 shadow-medium hover:shadow-strong transition-all">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center flex-shrink-0">
                <img src={iconoPlus} alt="Icono" className="h-16 w-16 object-contain" loading="lazy" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-black">Solo no alcanza</h3>
                <p className="text-sm text-black leading-relaxed">
                  Sin apoyo colectivo, todo avance se pierde.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass rounded-2xl p-6 shadow-medium hover:shadow-strong transition-all">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center flex-shrink-0">
                <img src={iconoStats} alt="Icono" className="h-16 w-16 object-contain" loading="lazy" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-black">Faltan herramientas</h3>
                <p className="text-sm text-black leading-relaxed">
                  Sin un sistema, reaccionar es riesgoso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
