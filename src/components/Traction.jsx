const Traction = () => {
  const stats = [
    {
      number: '10-20',
      label: 'Desarrollos objetivo',
      sublabel: '≥85 unidades cada uno',
    },
    {
      number: '$80-160K',
      label: 'MMR objetivo',
      sublabel: 'MXN en 6 meses',
    },
    {
      number: '+20',
      label: 'Alianzas globales',
      sublabel: 'Red de socios estratégicos',
    },
    {
      number: '139K',
      label: 'Condominios',
      sublabel: 'Mercado potencial en México',
    },
  ];

  const partners = [
    'Gobierno de México',
    'World Economic Forum',
    'BID',
    'GIZ',
    'Citibanamex',
    'Deloitte',
    'IMCO',
    'World SDSN',
    'Urban Campaign',
  ];

  const values = [
    {
      title: 'Impacto Sostenible',
      description:
        'Aumento en cercanía vecino-desarrollador y obtención automática de datos urbanos',
      icon: '🌱',
    },
    {
      title: 'Innovación Integrada',
      description:
        'Implementación adaptable con seguimiento comunitario transparente y cercano',
      icon: '💡',
    },
    {
      title: 'Estándares Globales',
      description: 'Impacta +15 objetivos de 3 agendas globales con red de +20 alianzas',
      icon: '🌍',
    },
  ];

  return (
    <>
      {/* Traction Section */}
      <section className="min-h-screen py-12 md:py-20 bg-white flex items-center">
        <div className="container-custom px-4 md:px-0">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-4">
              Tracción y alianzas
            </h2>
            <p className="text-xl text-[#6d6d6d] max-w-3xl mx-auto">
              Respaldados por organizaciones líderes que confían en nuestra visión
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#d7f7e8] to-white p-8 rounded-xl shadow-lg text-center border border-[#36d68a]/30"
              >
                <div className="text-4xl font-bold text-[#36d68a] mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-[#1b1b1b] mb-1">{stat.label}</div>
                <div className="text-sm text-[#6d6d6d]">{stat.sublabel}</div>
              </div>
            ))}
          </div>

          {/* Trust Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1b1b1b] mb-8">Confían en nosotros</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center justify-center min-h-[100px] border border-[#cfcfcf] hover:border-[#36d68a]"
                >
                  <p className="text-[#363636] font-semibold text-center text-sm">
                    {partner}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="min-h-screen py-12 md:py-20 bg-gradient-to-br from-[#36d68a] to-[#208053] text-white flex items-center">
        <div className="container-custom px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass p-8 rounded-2xl text-center hover:shadow-xl transition-all">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h4 className="text-2xl font-bold mb-3 text-[#1b1b1b]">{value.title}</h4>
                <p className="text-[#1b1b1b]/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Traction;
