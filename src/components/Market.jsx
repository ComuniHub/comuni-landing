import backgroundImage from "../assets/back_landing-07.webp";

const Market = () => {
  return (
    <section className="relative min-h-screen py-12 md:py-20 flex items-center overflow-hidden -mb-px">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          imageRendering: 'auto',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      />

      <div className="container-custom px-4 md:px-0 relative z-10">
        {/* Competitive Advantage Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tu ventaja competitiva
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Tus clientes no solo buscan ubicación, sino orden, bienestar y valor social
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#36d68a] to-[#208053] text-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl font-bold mb-2">7 de cada 10 personas</div>
              <p className="text-lg opacity-90">
                buscan una vida comunitaria como parte de su experiencia inmobiliaria
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-[#d7f7e8] p-6 rounded-xl border border-[#36d68a]/20">
                <div className="text-3xl font-bold text-[#36d68a] mb-1">
                  $41.1 mil millones MXN (TAM)
                </div>
                <p className="text-[#363636]">Mercado residencial MX</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#d7f7e8] p-4 rounded-xl border border-[#36d68a]/20">
                  <div className="text-2xl font-bold text-[#36d68a]">4%</div>
                  <p className="text-sm text-[#363636]">crecimiento anual</p>
                </div>
                <div className="bg-[#d7f7e8] p-4 rounded-xl border border-[#36d68a]/20">
                  <div className="text-2xl font-bold text-[#36d68a]">45%</div>
                  <p className="text-sm text-[#363636]">viviendas en condominio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
