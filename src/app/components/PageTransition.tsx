import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Bloquear scroll cuando está cargando
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            {/* Elementos decorativos en bordes */}
            {/* Esquina superior izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-8 left-8 text-white/20 font-mono text-xs"
            >
              <div className="mb-1">// PORTFOLIO</div>
              <div>アート</div>
            </motion.div>

            {/* Esquina superior derecha */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-8 right-8 text-[#e70059]/30 text-2xl"
            >
              ✱
            </motion.div>

            {/* Lateral izquierdo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden md:block absolute left-12 top-1/2 -translate-y-1/2 -rotate-90 font-mono text-xs text-white/20 tracking-widest"
            >
              DESIGN × ILLUSTRATION
            </motion.div>

            {/* Lateral derecho */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden md:block absolute right-12 top-1/2 -translate-y-1/2 rotate-90 font-mono text-xs text-white/20 tracking-widest"
            >
              クリエイティブ
            </motion.div>

            {/* Esquina inferior izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-8 text-[#e70059]/30 text-xl"
            >
              ×
            </motion.div>

            {/* Esquina inferior derecha */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 right-8 text-white/20 font-mono text-xs text-right"
            >
              <div>2025</div>
              <div className="mt-1">準備中</div>
            </motion.div>

            {/* Abrazo kawaii central */}
            <div className="text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="flex gap-1 justify-center text-[#e70059] mb-8"
              >
                {['(', 'づ', '｡', '◕', '‿', '‿', '◕', '｡', ')', 'づ'].map((symbol, i) => (
                  <motion.div
                    key={i}
                    className="text-4xl"
                    animate={{
                      opacity: [0.2, 0.8, 0.2],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {symbol}
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-mono text-base text-white/60 flex items-center justify-center gap-1"
              >
                <span className="text-lg text-white/30">読</span>
                <span>×</span>
                <span className="tracking-[0.3em]">LOADING</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}