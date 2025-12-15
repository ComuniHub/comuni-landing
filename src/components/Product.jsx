import { Card } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import bgImage from "../assets/B2BG Solución.png";
import iconoEyes from "../assets/icono-eyes.png";
import iconoChecks from "../assets/icono-checks.png";
import iconoFlor from "../assets/icono-flor.png";
import iconoHouse from "../assets/icono-house.png";
import iconoBoard from "../assets/icono-board.png";
import iconoX from "../assets/icono-x.png";
import iconoReloj from "../assets/icono-reloj.png";
import iconoPeace from "../assets/icono-peace.png";

const appFeatures = [
  {
    icon: iconoEyes,
    title: "Comunicación Vecinal",
    description: "Canal estructurado que reemplaza chats dispersos con un espacio confiable para decisiones colectivas",
  },
  {
    icon: iconoChecks,
    title: "Control de Incidencias",
    description: "Reportes geollocalizados y seguimiento transparente de solicitudes y problemas del desarrollo",
  },
  {
    icon: iconoFlor,
    title: "Índice de Calidad de Vida",
    description: "Medición continua del desarrollo comunitario basada en estándares globales",
  },
  {
    icon: iconoHouse,
    title: "Gestión Comunitaria",
    description: "Herramientas para organización vecinal, votaciones y administración de espacios comunes",
  },
];

const dashboardFeatures = [
  {
    text: "Medición de calidad de vida en tiempo real",
    icon: iconoBoard,
  },
  {
    text: "Trazabilidad completa de solicitudes y reportes",
    icon: iconoX,
  },
  {
    text: "Datos hiperlocales listos para análisis",
    icon: iconoReloj,
  },
  {
    text: "Indicadores urbanos y sociales relevantes",
    icon: iconoPeace,
  },
];

const Product = () => {
  return (
    <section className="min-h-screen py-24 bg-gray-50 relative flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${bgImage})`,
          imageRendering: 'auto',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      />

      <div className="container-custom mx-auto relative z-10 px-4 md:px-0">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white px-2 md:px-0">
            La app para{" "}
            <span className="text-[#1b1b1b]">
              transformar
            </span>{" "}
            en comunidad
          </h2>
        </div>

        <Tabs defaultValue="b2c" className="w-full">
          <div className="flex justify-center mb-8 md:mb-12 px-2 md:px-0">
            <TabsList className="grid grid-cols-2 w-full max-w-lg">
              <TabsTrigger value="b2c" className="text-sm md:text-lg text-center px-2 md:px-4 py-2 md:py-3">
                App Vecinal (B2C)
              </TabsTrigger>
              <TabsTrigger value="b2b" className="text-sm md:text-lg text-center px-2 md:px-4 py-2 md:py-3">
                Tablero de Gestión (B2B)
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="b2c" className="space-y-6 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <div className="text-center px-2 md:px-0">
                <h4 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-white w-full md:w-[60%] md:ml-auto">
                  Conecta a tu comunidad con nuestra App
                </h4>
              </div>

              <div className="w-full md:w-[60%] md:ml-auto space-y-3 md:space-y-6">

                <div className="grid gap-3 md:gap-4">
                  {appFeatures.map((feature, index) => (
                    <Card
                      key={index}
                      className="p-3 md:p-4 hover:shadow-medium transition-all"
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-[#36d68a] flex items-center justify-center flex-shrink-0">
                          <img src={feature.icon} alt={feature.title} className="h-6 w-6 md:h-8 md:w-8 object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold mb-1 text-white text-sm md:text-base">{feature.title}</h4>
                          <p className="text-xs md:text-sm text-white/90 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="b2b" className="space-y-6 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <div className="text-center px-2 md:px-0">
                <h4 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-white w-full md:w-[60%] md:ml-auto">
                  Analiza retos locales en tiempo real
                </h4>
              </div>

              <div className="w-full md:w-[60%] md:ml-auto space-y-3 md:space-y-6">

                <div className="grid gap-3 md:gap-4">
                  {dashboardFeatures.map((feature, index) => (
                    <Card
                      key={index}
                      className="p-3 md:p-4 hover:shadow-medium transition-all"
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-[#36d68a] flex items-center justify-center flex-shrink-0">
                          <img src={feature.icon} alt={feature.text} className="h-6 w-6 md:h-8 md:w-8 object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold mb-1 text-white text-sm md:text-base">{feature.text}</h4>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Product;
