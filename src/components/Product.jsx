import { Smartphone, LayoutDashboard, TrendingUp, Shield } from "lucide-react";
import { Card } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import bgImage from "../assets/B2BG Solución.png";

const appFeatures = [
  {
    icon: Smartphone,
    title: "Comunicación Vecinal",
    description: "Canal estructurado que reemplaza chats dispersos con un espacio confiable para decisiones colectivas",
  },
  {
    icon: Shield,
    title: "Control de Incidencias",
    description: "Reportes geollocalizados y seguimiento transparente de solicitudes y problemas del desarrollo",
  },
  {
    icon: TrendingUp,
    title: "Índice de Calidad de Vida",
    description: "Medición continua del desarrollo comunitario basada en estándares globales",
  },
  {
    icon: LayoutDashboard,
    title: "Gestión Comunitaria",
    description: "Herramientas para organización vecinal, votaciones y administración de espacios comunes",
  },
];

const dashboardFeatures = [
  "Medición de calidad de vida en tiempo real",
  "Trazabilidad completa de solicitudes y reportes",
  "Datos hiperlocales listos para análisis",
  "Indicadores urbanos y sociales relevantes",
];

const Product = () => {
  return (
    <section className="min-h-screen py-24 bg-gray-50 relative flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            La app para{" "}
            <span className="text-[#1b1b1b]">
              transformar
            </span>{" "}
            en comunidad
          </h2>
        </div>

        <Tabs defaultValue="b2c" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-2 max-w-lg">
              <TabsTrigger value="b2c" className="text-lg text-center">
                App Vecinal (B2C)
              </TabsTrigger>
              <TabsTrigger value="b2b" className="text-lg text-center">
                Tablero de Gestión (B2B)
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="b2c" className="space-y-12">
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="text-3xl font-bold mb-6 text-white w-[60%] ml-auto space-y-6" style={{ marginBottom: '40px' }}>
                  Conecta a tu comunidad con nuestra App
                </h4>
              </div>

              <div className="w-[60%] ml-auto space-y-6">

                <div className="grid gap-4">
                  {appFeatures.map((feature, index) => (
                    <Card
                      key={index}
                      className="p-4 hover:shadow-medium transition-all"
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#36d68a] flex items-center justify-center flex-shrink-0">
                          <feature.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1 text-white">{feature.title}</h4>
                          <p className="text-sm text-white/90">{feature.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="b2b" className="space-y-12">
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="text-3xl font-bold mb-4 text-white w-[60%] ml-auto space-y-6" style={{ marginBottom: '40px' }}>
                  Analiza retos locales en tiempo real
                </h4>
              </div>

              <div className="w-[60%] ml-auto space-y-6">

                <div className="grid gap-4">
                  {dashboardFeatures.map((feature, index) => (
                    <Card
                      key={index}
                      className="p-4 hover:shadow-medium transition-all"
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#36d68a] flex items-center justify-center flex-shrink-0">
                          <LayoutDashboard className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1 text-white">{feature}</h4>
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
