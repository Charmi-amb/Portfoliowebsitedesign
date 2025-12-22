import logoCharmi from "figma:asset/e40355430d1af86a27144cc251a63b63ea2b6804.png";
import { Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#e70059] text-white py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Contenido principal - Logo y texto en extremos */}
          <div className="flex items-center justify-between mb-4">
            {/* Logo a la izquierda */}
            <div className="flex items-center justify-start">
              <img 
                src={logoCharmi} 
                alt="Charmi Logo" 
                className="h-16 md:h-24 w-auto"
              />
            </div>

            {/* Iconos de redes sociales en el centro */}
            <div className="flex items-center justify-center gap-3 md:gap-6 flex-1">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a 
                href="mailto:tu-email@gmail.com" 
                className="hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>

            {/* Texto a la derecha - Oculto en móvil */}
            <div className="hidden md:flex items-center justify-end gap-2 text-xs text-white/80">
              <span className="font-mono tracking-[0.2em]">デザイナー</span>
              <span className="text-white/50">✕</span>
              <span className="font-mono tracking-[0.2em]">DESIGNER</span>
            </div>
          </div>

          {/* Barra divisoria y Copyright */}
          <div className="border-t border-white/20 pt-3">
            <div className="flex flex-col items-center justify-center gap-3 text-[10px] md:text-xs text-white/70">
              {/* Copyright */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                <span className="font-mono">© {currentYear}</span>
                <span className="hidden md:inline text-white/40">✱</span>
                <span className="font-mono tracking-[0.2em]">ALL RIGHTS RESERVED</span>
              </div>
              
              {/* Enlaces legales */}
              <div className="flex items-center gap-3 md:gap-4">
                <a 
                  href="/privacy-policy" 
                  className="font-mono hover:text-white transition-colors duration-200"
                >
                  PRIVACY POLICY
                </a>
                <span className="text-white/40">✕</span>
                <a 
                  href="/cookies" 
                  className="font-mono hover:text-white transition-colors duration-200"
                >
                  COOKIES
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}