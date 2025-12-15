import { Button } from "../components/ui/button";
import { Users, Shield, TrendingUp } from "lucide-react";
import heroImage from "../assets/hero-main.png";

const Hero = () => {
  const scrollToNextSection = () => {
    const heroSection = document.querySelector('#hero');
    const nextSection = heroSection?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Vecinos usando Comuni"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero content */}
        <div className="container-custom relative z-10 mx-auto py-16 md:py-24 lg:py-32 px-4 md:px-0">
          {/* Badge */}
          <div className="inline-block mb-4 md:mb-6">
            <span className="bg-[#00dd8d] text-white px-4 py-2 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
              La App vecinal #1
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6">
            <span className="text-white block">Resuelve tu vida vecinal,</span>
            <span className="text-[#36d68a] block">y crea el futuro en comunidad</span>
          </h1>

          {/* Descriptive text */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-8 md:mb-10">
            Comuni conecta a vecinos para resolver problemas diarios y decidir en comunidad,
            mientras transforma esa actividad en datos hiperlocales para diseñar mejores ciudades.
          </p>

          {/* CTA Buttons - centrados */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a
              href="https://www.jotform.com/form/252836456956068"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-[#36d68a] text-white shadow-glow hover:shadow-strong transition-all hover:scale-105"
            >
              Quiero un Demo
            </a>
            <button
              onClick={scrollToNextSection}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white/65 text-black hover:bg-white/80 transition-all hover:scale-105"
            >
              Conocer más
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
