import logoCharmi from "figma:asset/e40355430d1af86a27144cc251a63b63ea2b6804.png";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="bg-[#e70059] text-white py-6 md:py-8">
      <div className="container mx-auto px-2 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Contenido principal - Logo y texto en extremos */}
          <div className="flex items-center justify-between mb-4 gap-1 md:gap-0">
            {/* Logo a la izquierda */}
            <div className="flex items-center justify-start flex-shrink-0">
              <img 
                src={logoCharmi} 
                alt="Charmi Logo" 
                className="h-14 md:h-24 w-auto"
              />
            </div>

            {/* Iconos de redes sociales en el centro */}
            <div className="flex items-center justify-center gap-2 md:gap-6 flex-shrink-0">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              >
                <Instagram className="w-4 h-4 md:w-6 md:h-6" />
              </a>
              <button
                onClick={() => navigate("/contact?mensaje=true")}
                className="hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              >
                <Mail className="w-4 h-4 md:w-6 md:h-6" />
              </button>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              >
                <Linkedin className="w-4 h-4 md:w-6 md:h-6" />
              </a>
            </div>

            {/* Texto a la derecha */}
            <div className="flex items-center justify-end gap-1 md:gap-2 text-[7px] md:text-xs text-white/80 flex-shrink-0">
              <span className="font-mono tracking-tight md:tracking-[0.2em]">デザイナー</span>
              <span className="text-white/50 hidden sm:inline">✕</span>
              <span className="hidden sm:inline font-mono tracking-tight md:tracking-[0.2em]">DESIGNER</span>
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
                <Link 
                  to="/privacy-policy" 
                  className="font-mono hover:text-white transition-colors duration-200"
                >
                  PRIVACY POLICY
                </Link>
                <span className="text-white/40">✕</span>
                <Link
                  to="/cookies"
                  className="font-mono hover:text-white transition-colors duration-200"
                >
                  COOKIES
                </Link>
                <span className="text-white/40">✕</span>
                <Link
                  to="/legal-notice"
                  className="font-mono hover:text-white transition-colors duration-200"
                >
                  LEGAL NOTICE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}