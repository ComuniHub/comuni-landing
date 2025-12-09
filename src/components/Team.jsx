import { useState } from 'react';
import { Linkedin, Twitter, Github, Globe } from 'lucide-react';

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const teamMembers = [
    {
      name: 'Andrés Chama',
      role: 'CEO',
      description:
        'Emprendedor serial con +7 años de experiencia en desarrollo urbano en sectores multilateral y gubernamental. City Changer y Experto ODS.',
      image: '/src/assets/ChatGPT Image Dec 8, 2025, 10_14_43 PM.png', // placeholder
    },
    {
      name: 'Antonio R. Argueta',
      role: 'COO',
      description:
        'Experto en Participación Comunitaria. Urbanista con +6 años impulsando proyectos de desarrollo comunitario y planeación urbana. Líder juvenil de participación, Global Shaper.',
      image: '/src/assets/ChatGPT Image Dec 8, 2025, 10_14_43 PM.png', // placeholder
    },
    {
      name: 'Rodrigo Caballero',
      role: 'CTO',
      description:
        'Experto en tecnología con amplia experiencia en desarrollo de software y arquitectura de sistemas.',
      image: '/src/assets/ChatGPT Image Dec 8, 2025, 10_14_43 PM.png', // placeholder
    },
    {
      name: 'Karina Torres',
      role: 'Lead Engineer',
      description:
        'Ingeniera líder especializada en desarrollo full-stack y experiencia de usuario.',
      image: '/src/assets/ChatGPT Image Dec 8, 2025, 10_14_43 PM.png', // placeholder
    },
  ];

  return (
    <section id="equipo" className="min-h-screen py-24 bg-gradient-to-br from-white to-[#d7f7e8] flex items-center">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-4">
            Conócenos
          </h2>
          <p className="text-xl text-[#6d6d6d]">
            Equipo con experiencia comprobada en desarrollo urbano, tecnología y participación comunitaria
          </p>
        </div>

        {/* Team Grid - 4 bloques verticales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-[3/5]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0">
                <div className="w-full h-full bg-gradient-to-br from-[#36d68a] to-[#208053]">
                  {/* Placeholder - Aquí irá la foto real */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white text-6xl font-bold opacity-30">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Vista normal - Nombre y cargo en esquina inferior izquierda */}
              <div
                className={`absolute inset-0 flex items-end p-6 transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-1 drop-shadow-lg">
                    {member.name}
                  </h3>
                  <p className="text-lg font-semibold drop-shadow-md">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Vista hover - Información completa con glassmorphism */}
              <div
                className={`absolute inset-0 glass p-6 flex flex-col justify-between transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[#1b1b1b]">
                    {member.name}
                  </h3>
                  <p className="text-lg font-semibold text-[#36d68a] mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-[#1b1b1b] leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Iconos genéricos (logos placeholder) */}
                <div className="space-y-2">
                  <div className="flex gap-3 justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#36d68a]/20 flex items-center justify-center">
                      <Linkedin className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#36d68a]/20 flex items-center justify-center">
                      <Twitter className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#36d68a]/20 flex items-center justify-center">
                      <Github className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#36d68a]/20 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex gap-3 justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#36d68a]/20 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#36d68a]/20 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#36d68a]/20 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#36d68a]/20 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
