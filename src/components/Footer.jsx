import { Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1b1b1b] text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <img
              src="/src/assets/Recurso 41@300x.png"
              alt="Comuni"
              className="h-10 w-auto mb-4 mx-auto md:mx-0"
            />
            <p className="text-[#b8b8b8] max-w-md">
              Ayudamos a los vecinos de Latinoamérica a ganar viviendo en comunidad
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/comuniapp/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#363636] flex items-center justify-center hover:bg-[#36d68a] transition-all"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.facebook.com/share/17ae89ekpk/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#363636] flex items-center justify-center hover:bg-[#36d68a] transition-all"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.instagram.com/comuni.social?igsh=amx4NzdueTY2emV5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#363636] flex items-center justify-center hover:bg-[#36d68a] transition-all"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#363636] pt-8 text-center text-[#b8b8b8]">
          <p>&copy; 2025 Comuni. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
