import { Card } from "../components/ui/card";
import backgroundImage from "../assets/back_landing-05.webp";
import iconoCandado from "../assets/icono-candado.png";
import iconoRayo from "../assets/icono-rayo.png";
import iconoMoney from "../assets/icono-money.png";
import iconoDislike from "../assets/icono-dislike.png";

const problems = [
  {
    icon: iconoCandado,
    title: "Desconexión",
    stat: "70%",
    description: "de la vida urbana ocurre en los barrios",
    consequences: [
      "Inseguridad vecinal percibida",
      "Garantías sin cierre",
      "-12% valor de inmueble",
    ],
  },
  {
    icon: iconoRayo,
    title: "Información Fragmentada",
    stat: "7%",
    description: "de vecinos apoyando un cambio",
    consequences: [
      "Comunicación dispersa",
      "Decisiones caóticas",
      "Abandono de espacios",
    ],
  },
  {
    icon: iconoMoney,
    title: "Retrasos y Sobrecostos",
    stat: "95%",
    description: "condominios sin administración formal",
    consequences: [
      "Operación ciega",
      "Erosión de márgenes",
      "Freno en plusvalía y ventas",
    ],
  },
  {
    icon: iconoDislike,
    title: "Marca en Riesgo",
    stat: "$13.2B",
    description: "MXN mercado desatendido (SOM)",
    consequences: [
      "Desconfianza vecinal",
      "Reputación en riesgo",
      "Pérdida de oportunidades",
    ],
  },
];

const Problems = () => {
  return (
    <section className="relative min-h-screen py-16 md:py-24 flex items-center overflow-hidden">
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

      <div className="container-custom mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
            Pierdes al{" "}
            <span className="text-[#ff3d3d]">no avanzar</span>{" "}
            en comunidad
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white">
            La falta de conexión comunitaria genera costos reales para desarrolladores,
            administradores y residentes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(250, 83, 83, 1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(250, 83, 83, 0.2)'
              }}
            >
              <div className="mb-4">
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <img src={problem.icon} alt={problem.title} className="h-10 w-10 object-contain" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{problem.title}</h3>
              </div>

              <div className="mb-4">
                <p className="text-3xl font-bold text-white mb-1">{problem.stat}</p>
                <p className="text-sm text-white/90">{problem.description}</p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-white">Consecuencias:</p>
                <ul className="space-y-1.5">
                  {problem.consequences.map((consequence, idx) => (
                    <li key={idx} className="text-sm text-white/90 flex items-start">
                      <span className="mr-2 text-white">•</span>
                      {consequence}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
