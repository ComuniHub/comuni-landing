import { Card } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import bgImage from "../assets/bck4.webp";
import iconoEyes from "../assets/icono-eyes.webp";
import iconoChecks from "../assets/icono-checks.webp";
import iconoFlor from "../assets/icono-flor.webp";
import iconoHouse from "../assets/icono-house.webp";
import iconoBoard from "../assets/icono-board.webp";
import iconoX from "../assets/icono-x.webp";
import iconoReloj from "../assets/icono-reloj.webp";
import iconoPeace from "../assets/icono-peace.webp";

const appFeatures = [
  {
    icon: iconoEyes,
    title: "Canal vecinal",
    description: "Un espacio privado y estructurado para tomar las decisiones que importan.",
  },
  {
    icon: iconoChecks,
    title: "Reportes y alarmas",
    description: "Recibe apoyo cuando más lo necesites y da seguimiento a solicitudes.",
  },
  {
    icon: iconoFlor,
    title: "Medidor de desarrollo",
    description: "Mide el progreso y anticipa los problemas todos los días.",
  },
  {
    icon: iconoHouse,
    title: "Gestor comunitario",
    description: "facilita las votaciones y la administración de espacios comunes.",
  },
];

const dashboardFeatures = [
  {
    title: "Radar de incidencias",
    text: "Mide la calidad de vida en todo momento.",
    icon: iconoBoard,
  },
  {
    title: "Gestor digital",
    text: "Resuelve solicitudes y reportes vecinales en un solo lugar.",
    icon: iconoX,
  },
  {
    title: "Análisis avanzado",
    text: "Identifica oportunidades con datos hiperlocales.",
    icon: iconoReloj,
  },
  {
    title: "Medidor de progreso",
    text: "Compara la calidad de vida y sustenta la plusvalía.",
    icon: iconoPeace,
  },
];

const Product = () => {
  return (
    <section className="min-h-screen py-8 md:py-24 bg-gray-50 relative flex items-center overflow-hidden" style={{ marginTop: '-2px', marginBottom: '-2px' }}>
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
        <div className="text-center mb-4 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 text-white px-1 md:px-0 leading-tight md:leading-normal">
            Gana viviendo en comunidad.
          </h2>
        </div>

        <Tabs defaultValue="b2c" className="w-full">
          <div className="flex justify-center mb-4 md:mb-12 px-2 md:px-0">
            <TabsList className="grid grid-cols-2 w-full max-w-lg">
              <TabsTrigger value="b2c" className="text-xs md:text-lg text-center px-1 md:px-4 py-2 md:py-3">
                App Vecinal (B2C)
              </TabsTrigger>
              <TabsTrigger value="b2b" className="text-xs md:text-lg text-center px-1 md:px-4 py-2 md:py-3">
                Tablero de Gestión (B2B)
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="b2c" className="space-y-4 md:space-y-12">
            <div className="space-y-3 md:space-y-6">
              <div className="text-center px-2 md:px-0">
                <h4 className="text-base md:text-2xl lg:text-3xl font-bold mb-3 md:mb-6 text-white w-full md:w-[60%] md:ml-auto leading-tight md:leading-normal">
                  Adiós a los chats inútiles.
                </h4>
              </div>

              <div className="w-full md:w-[60%] md:ml-auto space-y-2 md:space-y-6">

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
                        <div className="flex items-center justify-center flex-shrink-0">
                          <img src={feature.icon} alt={feature.title} className="h-12 w-12 md:h-14 md:w-14 object-contain" loading="lazy" />
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

          <TabsContent value="b2b" className="space-y-4 md:space-y-12">
            <div className="space-y-3 md:space-y-6">
              <div className="text-center px-2 md:px-0">
                <h4 className="text-base md:text-2xl lg:text-3xl font-bold mb-3 md:mb-6 text-white w-full md:w-[60%] md:ml-auto leading-tight md:leading-normal">
                  Anticipa y resuelve retos reales.
                </h4>
              </div>

              <div className="w-full md:w-[60%] md:ml-auto space-y-2 md:space-y-6">

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
                        <div className="flex items-center justify-center flex-shrink-0">
                          <img src={feature.icon} alt={feature.title} className="h-12 w-12 md:h-14 md:w-14 object-contain" loading="lazy" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold mb-1 text-white text-sm md:text-base">{feature.title}</h4>
                          <p className="text-xs md:text-sm text-white/90 leading-relaxed">{feature.text}</p>
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
