import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export function Header() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed left-0 top-0 z-50 px-4 md:px-8 bg-[#e70059] md:bg-transparent w-full md:w-auto py-5 md:py-0 flex justify-center md:justify-start md:h-screen md:items-center">
      <nav className="flex flex-row md:flex-col gap-5 md:gap-12">
        <Link
          to="/"
          className={`text-xs md:text-lg transition-colors flex items-center gap-1 md:gap-2 group tracking-[0.1em] md:tracking-[0.3em] ${ 
            location.pathname === '/contact' 
              ? 'text-white md:text-black hover:text-white/80 md:hover:text-black/70'
              : 'text-white md:text-[#e70059] hover:text-white/80 md:hover:text-[#b00045]'
          }`}
          style={{ fontFamily: "'GenEi Kiwami Gothic', 'M PLUS 1p', sans-serif", fontWeight: 900 }}
        >
          <motion.span
            className="inline-block"
            whileHover={{
              x: [0, -2, 2, -1, 1, 0],
              y: [0, 1, -1, 2, -2, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 0.1
            }}
          >
            Sobre Mí
          </motion.span>
          {isActive("/") && (
            <span 
              className={`border-transparent border-t-[5px] border-b-[5px] border-r-[8px] md:border-t-[6px] md:border-b-[6px] md:border-r-[10px] arrow-animate ${
                location.pathname === '/contact'
                  ? 'border-r-white md:border-r-black'
                  : 'border-r-white md:border-r-[#e70059]'
              }`}
              style={{
                width: 0,
                height: 0
              }}
            />
          )}
        </Link>
        <Link
          to="/portfolio"
          className={`text-xs md:text-lg transition-colors flex items-center gap-1 md:gap-2 group tracking-[0.1em] md:tracking-[0.3em] ${ 
            location.pathname === '/contact' 
              ? 'text-white md:text-black hover:text-white/80 md:hover:text-black/70'
              : 'text-white md:text-[#e70059] hover:text-white/80 md:hover:text-[#b00045]'
          }`}
          style={{ fontFamily: "'GenEi Kiwami Gothic', 'M PLUS 1p', sans-serif", fontWeight: 900 }}
        >
          <motion.span
            className="inline-block"
            whileHover={{
              x: [0, -2, 2, -1, 1, 0],
              y: [0, 1, -1, 2, -2, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 0.1
            }}
          >
            Portafolio
          </motion.span>
          {isActive("/portfolio") && (
            <span 
              className={`border-transparent border-t-[5px] border-b-[5px] border-r-[8px] md:border-t-[6px] md:border-b-[6px] md:border-r-[10px] arrow-animate ${
                location.pathname === '/contact'
                  ? 'border-r-white md:border-r-black'
                  : 'border-r-white md:border-r-[#e70059]'
              }`}
              style={{
                width: 0,
                height: 0
              }}
            />
          )}
        </Link>
        <Link
          to="/contact"
          className={`text-xs md:text-lg transition-colors flex items-center gap-1 md:gap-2 group tracking-[0.1em] md:tracking-[0.3em] ${
            location.pathname === '/contact' 
              ? 'text-white md:text-black hover:text-white/80 md:hover:text-black/70'
              : 'text-white md:text-[#e70059] hover:text-white/80 md:hover:text-[#b00045]'
          }`}
          style={{ fontFamily: "'GenEi Kiwami Gothic', 'M PLUS 1p', sans-serif", fontWeight: 900 }}
        >
          <motion.span
            className="inline-block"
            whileHover={{
              x: [0, -2, 2, -1, 1, 0],
              y: [0, 1, -1, 2, -2, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 0.1
            }}
          >
            Contacto
          </motion.span>
          {isActive("/contact") && (
            <span 
              className={`border-transparent border-t-[5px] border-b-[5px] border-r-[8px] md:border-t-[6px] md:border-b-[6px] md:border-r-[10px] arrow-animate ${
                location.pathname === '/contact'
                  ? 'border-r-white md:border-r-black'
                  : 'border-r-white md:border-r-[#e70059]'
              }`}
              style={{
                width: 0,
                height: 0
              }}
            />
          )}
        </Link>
      </nav>
    </header>
  );
}