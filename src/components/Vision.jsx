import { Users, Shield, TrendingUp } from "lucide-react";

const Vision = () => {
  return (
    <section className="min-h-screen py-24 bg-gradient-to-br from-[#d7f7e8] to-white flex items-center">
      <div className="container-custom mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Título principal */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1b1b1b] mb-8">
            Una ciudad capaz de cuidarte.
          </h2>

          {/* Texto explicativo */}
          <p className="text-xl md:text-2xl text-[#6d6d6d] leading-relaxed max-w-3xl mx-auto">
            Imaginamos ciudades donde cada barrio es un nodo de inteligencia territorial,
            donde los vecinos toman decisiones juntos y donde cada problema se convierte
            en una oportunidad para construir comunidad.
          </p>
        </div>

        {/* Three info cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 - Para quién es */}
          <div className="glass rounded-2xl p-6 shadow-medium hover:shadow-strong transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 glass-green rounded-xl">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#1b1b1b]">Para quién es</h3>
                <p className="text-sm text-[#6d6d6d] leading-relaxed">
                  Vecinos en Latinoamérica que buscan ganar viviendo en comunidad
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Beneficio vecinos */}
          <div className="glass rounded-2xl p-6 shadow-medium hover:shadow-strong transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 glass-green rounded-xl">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#1b1b1b]">Enfrenta retos grandes</h3>
                <p className="text-sm text-[#6d6d6d] leading-relaxed">
                  Comuni ayuda a los vecinos a enfrentar problemas diarios de seguridad y convivencia con un canal claro, cercano y organizado
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Beneficio clientes */}
          <div className="glass rounded-2xl p-6 shadow-medium hover:shadow-strong transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 glass-green rounded-xl">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#1b1b1b]">Decide con datos reales</h3>
                <p className="text-sm text-[#6d6d6d] leading-relaxed">
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
