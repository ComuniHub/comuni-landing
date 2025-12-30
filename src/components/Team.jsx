import { useState } from 'react';
import { Linkedin, Twitter, Github, Globe } from 'lucide-react';
import backgroundImage from "../assets/bck6.webp";

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
    <section id="equipo" className="relative min-h-screen py-16 md:py-24 flex items-center overflow-hidden" style={{ marginTop: '-2px' }}>
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
          imageRendering: 'auto',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          top: '-1px',
          height: 'calc(100% + 2px)',
        }}
      />

      <div className="mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Conócenos
          </h2>
          <p className="text-lg md:text-xl text-white px-4 md:px-0">
            Equipo con experiencia comprobada en desarrollo urbano, tecnología y participación comunitaria
          </p>
        </div>

        {/* Team Grid - 4 bloques verticales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-[95%] mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-[500px] w-full"
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
                className={`absolute inset-0 glass p-8 flex flex-col justify-between transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#1b1b1b]">
                    {member.name}
                  </h3>
                  <p className="text-lg md:text-xl font-semibold text-[#36d68a] mb-6">
                    {member.role}
                  </p>
                  <p className="text-base md:text-lg text-[#1b1b1b] leading-relaxed">
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
