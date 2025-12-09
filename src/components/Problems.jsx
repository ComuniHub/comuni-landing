import { AlertCircle, TrendingDown, Users, AlertTriangle } from "lucide-react";
import { Card } from "../components/ui/card";

const problems = [
  {
    icon: Users,
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
    icon: AlertCircle,
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
    icon: TrendingDown,
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
    icon: AlertTriangle,
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
    <section className="min-h-screen py-24 bg-gray-50 flex items-center">
      <div className="container-custom mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b1b1b]">
            Pierdes al{" "}
            <span className="text-[#ff3d3d]">no avanzar</span>{" "}
            en comunidad
          </h2>
          <p className="text-xl text-[#6d6d6d]">
            La falta de conexión comunitaria genera costos reales para desarrolladores,
            administradores y residentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <problem.icon className="h-6 w-6 text-white" />
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
