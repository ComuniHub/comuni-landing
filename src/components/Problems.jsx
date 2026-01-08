import { Card } from "../components/ui/card";
import backgroundImage from "../assets/bck3.webp";
import iconoCandado from "../assets/icono-candado.webp";
import iconoRayo from "../assets/icono-rayo.webp";
import iconoMoney from "../assets/icono-money.webp";
import iconoDislike from "../assets/icono-dislike.webp";

const problems = [
  {
    icon: iconoCandado,
    title: "Inseguridad",
    stat: "",
    description: "Poniendo en riesgo la vida de familias a falta de un canal de apoyo.",
    consequences: [
      "Creando 5 veces más violencia vecinal",
      "Decisiones caóticas",
      "Desconfianza",
    ],
  },
  {
    icon: iconoRayo,
    title: "Conflictos",
    stat: "",
    description: "Creando 5 veces más violencia vecinal, decisiones caóticas y desconfianza.",
    consequences: [
      "Comunicación dispersa",
      "Decisiones caóticas",
      "Abandono de espacios",
    ],
  },
  {
    icon: iconoMoney,
    title: "Sobrecostos",
    stat: "",
    description: "Sacrificando ahorros y márgenes por gestionar espacios comunes a ciegas.",
    consequences: [
      "Operación ciega",
      "Erosión de márgenes",
      "Freno en plusvalía y ventas",
    ],
  },
  {
    icon: iconoDislike,
    title: "Mala reputación",
    stat: "",
    description: "Frenando rentas, ventas, y devaluando hasta un -12% tu patrimonio.",
    consequences: [
      "Desconfianza vecinal",
      "Reputación en riesgo",
      "Pérdida de oportunidades",
    ],
  },
];

const Problems = () => {
  return (
    <section className="relative min-h-screen py-16 md:py-24 flex items-center overflow-hidden" style={{ marginTop: '-2px', marginBottom: '-2px' }}>
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
            Pierdes al no avanzar en comunidad.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white">
            9 de 10 personas sufren los costos reales de la desconexión vecinal:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(200, 40, 40, 1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(200, 40, 40, 0.2)'
              }}
            >
              <div className="mb-4">
                <div className="flex items-center justify-start mb-4">
                  <img src={problem.icon} alt={problem.title} className="h-16 w-16 object-contain" loading="lazy" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{problem.title}</h3>
              </div>

              <div className="mb-4">
                <p className="text-3xl font-bold text-white mb-1">{problem.stat}</p>
                <p className="text-sm text-white/90">{problem.description}</p>
              </div>

              {/* <div className="space-y-2">
                <p className="text-sm font-semibold text-white">Consecuencias:</p>
                <ul className="space-y-1.5">
                  {problem.consequences.map((consequence, idx) => (
                    <li key={idx} className="text-sm text-white/90 flex items-start">
                      <span className="mr-2 text-white">•</span>
                      {consequence}
                    </li>
                  ))}
                </ul>
              </div> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
