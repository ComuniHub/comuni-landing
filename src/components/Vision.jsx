import backgroundImage from "../assets/back_landing2.webp";
import iconoHand from "../assets/icono-hand.png";
import iconoPlus from "../assets/icono-+.png";
import iconoStats from "../assets/icono-stats.png";

const Vision = () => {
  return (
    <section className="relative min-h-screen py-16 md:py-24 flex items-center overflow-hidden">
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
            Una ciudad capaz de cuidarte.
          </h2>

          {/* Texto explicativo */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed max-w-3xl mx-auto px-4 md:px-0">
            Imaginamos ciudades donde cada barrio es un nodo de inteligencia territorial,
            donde los vecinos toman decisiones juntos y donde cada problema se convierte
            en una oportunidad para construir comunidad.
          </p>
        </div>

        {/* Three info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {/* Card 1 - Para quién es */}
          <div className="glass rounded-2xl p-6 shadow-medium hover:shadow-strong transition-all">
            <div className="flex items-start gap-4">
              <div className="p-2 glass-green rounded-xl flex items-center justify-center flex-shrink-0 w-16 h-16">
                <img src={iconoHand} alt="Icono" className="h-full w-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-black">Para quién es</h3>
                <p className="text-sm text-black leading-relaxed">
                  Vecinos en Latinoamérica que buscan ganar viviendo en comunidad
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Beneficio vecinos */}
          <div className="glass rounded-2xl p-6 shadow-medium hover:shadow-strong transition-all">
            <div className="flex items-start gap-4">
              <div className="p-2 glass-green rounded-xl flex items-center justify-center flex-shrink-0 w-16 h-16">
                <img src={iconoPlus} alt="Icono" className="h-full w-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-black">Enfrenta retos grandes</h3>
                <p className="text-sm text-black leading-relaxed">
                  Comuni ayuda a los vecinos a enfrentar problemas diarios de seguridad y convivencia con un canal claro, cercano y organizado
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Beneficio clientes */}
          <div className="glass rounded-2xl p-6 shadow-medium hover:shadow-strong transition-all">
            <div className="flex items-start gap-4">
              <div className="p-2 glass-green rounded-xl flex items-center justify-center flex-shrink-0 w-16 h-16">
                <img src={iconoStats} alt="Icono" className="h-full w-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-black">Decide con datos reales</h3>
                <p className="text-sm text-black leading-relaxed">
                  Ayuda a desarrolladores y gobiernos a anticipar conflictos, frenar pérdidas y responder a necesidades reales con datos hiperlocales
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
