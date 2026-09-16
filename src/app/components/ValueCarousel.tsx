import { motion } from "framer-motion";

interface Value {
  icon: React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;
  title: string;
  description: string;
  kanji: string;
}

interface ValueCarouselProps {
  values: Value[];
}

export function ValueCarousel({ values }: ValueCarouselProps) {
  const programs = [
    { name: "PHOTOSHOP", level: 90, kanji: "絵" },
    { name: "ILLUSTRATOR", level: 90, kanji: "図" },
    { name: "INDESIGN", level: 95, kanji: "版" },
    { name: "CLIPSTUDIO", level: 100, kanji: "画" },
    { name: "FIGMA", level: 90, kanji: "界" },
    { name: "BLENDER", level: 95, kanji: "形" }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Lista compacta de programas */}
      <div className="space-y-4">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-30px" }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.08,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            className="group relative"
          >
            {/* Glitch effect sutil */}
            <motion.div
              className="absolute inset-0 border border-[#e70059] pointer-events-none"
              initial={{ opacity: 0, x: -2, y: -2 }}
              whileInView={{ opacity: [0, 0.3, 0], x: [-2, 2, -2], y: [-2, 2, -2] }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.3, 
                delay: 0.2 + (index * 0.08),
                times: [0, 0.5, 1]
              }}
            />

            <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-black/10 group-hover:bg-black/20 transition-all duration-300">
              {/* Kanji + Número */}
              <div className="flex items-center gap-3 w-16 md:w-20">
                <span className="text-2xl md:text-3xl opacity-20 group-hover:opacity-40 transition-opacity">
                  {program.kanji}
                </span>
                <span className="font-mono text-xs text-white/30">0{index + 1}</span>
              </div>

              {/* Nombre del programa */}
              <div className="w-32 md:w-40">
                <h3 className="text-sm md:text-base tracking-wider group-hover:text-[#e70059] transition-colors">
                  {program.name}
                </h3>
              </div>

              {/* Barra de progreso */}
              <div className="flex-1 relative h-2 bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${program.level}%` }}
                  viewport={{ once: false }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.3 + (index * 0.08),
                    ease: "easeOut"
                  }}
                  className="absolute inset-y-0 left-0 bg-[#e70059]"
                />
              </div>

              {/* Porcentaje */}
              <div className="w-16 md:w-20 text-right">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: 1 + (index * 0.08) }}
                  className="font-mono text-sm md:text-base text-[#e70059]"
                >
                  {program.level}%
                </motion.span>
              </div>

              {/* Decoración lateral */}
              <span className="text-[#e70059] text-xs opacity-0 group-hover:opacity-100 transition-opacity">✱</span>
            </div>

            {/* Glitch effect en hover */}
            <motion.div
              className="absolute inset-0 border border-[#e70059] pointer-events-none opacity-0 group-hover:opacity-100"
              animate={{
                x: [0, -2, 2, -1, 1, 0],
                y: [0, 1, -1, 2, -2, 0],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 0.1
              }}
            />
            <motion.div
              className="absolute inset-0 bg-[#e70059]/5 pointer-events-none opacity-0 group-hover:opacity-100"
              animate={{
                x: [0, 3, -3, 2, -2, 0],
                opacity: [0, 0.1, 0, 0.1, 0],
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                repeatDelay: 0.2
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Idiomas */}
      <div className="mt-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
          {/* Título LANG */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex items-center gap-4 flex-shrink-0"
          >
            <div className="flex gap-0.5">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-1 h-16 bg-white/20" style={{ opacity: Math.random() * 0.5 + 0.5 }} />
              ))}
            </div>
            <div>
              <h3 className="font-mono text-3xl md:text-4xl tracking-widest text-white/90">LANG</h3>
              <span className="font-mono text-xs text-white/40 tracking-widest">言葉</span>
            </div>
            <div className="w-px h-16 bg-[#e70059]" />
          </motion.div>

          {/* Idiomas */}
          <div className="flex flex-wrap items-center justify-between gap-3 md:gap-4 flex-1">
            {[
              { name: "ESPAÑOL", kanji: "語", level: 100, native: true },
              { name: "ENGLISH", kanji: "英", level: "B1", native: false },
            ].map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                className="group relative flex-shrink-0"
              >
                <div className="flex items-center gap-2 px-4 md:px-5 py-2.5 border-2 border-white/20 group-hover:border-[#e70059] transition-all duration-300 bg-black/20">
                  <span className="text-2xl md:text-3xl opacity-30 group-hover:opacity-50 transition-opacity">{lang.kanji}</span>
                  <div className="flex flex-col">
                    <span className="font-mono text-sm md:text-base tracking-widest group-hover:text-[#e70059] transition-colors">{lang.name}</span>
                    <span className="font-mono text-[10px] text-white/30 tracking-wider">{lang.native ? "NATIVO" : `Lvl. ${lang.level}`}</span>
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 border-2 border-[#e70059] pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 0.3, 0], x: [-2, 2, -2], y: [-2, 2, -2] }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.2, delay: 0.5 + index * 0.1, times: [0, 0.5, 1] }}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-[#e70059] pointer-events-none opacity-0 group-hover:opacity-100"
                  animate={{ x: [0, -3, 3, -2, 2, 0], y: [0, 2, -2, 3, -3, 0] }}
                  transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.1 }}
                />
              </motion.div>
            ))}

            {/* Japonés — coming soon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative flex-shrink-0"
            >
              <div className="flex items-center gap-2 px-4 md:px-5 py-2.5 border-2 border-dashed border-white/10 bg-black/10 opacity-50">
                <span className="text-2xl md:text-3xl opacity-20">日</span>
                <div className="flex flex-col">
                  <span className="font-mono text-sm md:text-base tracking-widest text-white/40">日本語</span>
                  <motion.span
                    className="font-mono text-[10px] text-[#e70059]/60 tracking-wider"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    // PRÓXIMAMENTE
                  </motion.span>
                </div>
              </div>
            </motion.div>

            <div className="flex gap-0.5 flex-shrink-0">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-1 h-12 bg-[#e70059]" style={{ opacity: Math.random() * 0.6 + 0.4 }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lenguajes de programación */}
      <div className="mt-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
          {/* Título CODE grande */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex items-center gap-4 flex-shrink-0"
          >
            {/* Código de barras izquierdo */}
            <div className="flex gap-0.5">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 h-16 bg-white/20" 
                  style={{ opacity: Math.random() * 0.5 + 0.5 }}
                ></div>
              ))}
            </div>

            <div>
              <h3 className="font-mono text-3xl md:text-4xl tracking-widest text-white/90">
                CODE
              </h3>
              <span className="font-mono text-xs text-white/40 tracking-widest">言語</span>
            </div>

            <div className="w-px h-16 bg-[#e70059]"></div>
          </motion.div>

          {/* Lenguajes */}
          <div className="flex flex-wrap items-center justify-between gap-3 md:gap-4 flex-1">
            {[
              { name: "HTML", kanji: "骨" },
              { name: "CSS", kanji: "装" },
              { name: "JS", kanji: "動" },
              { name: "C#", kanji: "鋭" }
            ].map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.3 + (index * 0.1),
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="group relative flex-shrink-0"
              >
                <div className="flex items-center gap-2 px-4 md:px-5 py-2.5 border-2 border-white/20 group-hover:border-[#e70059] transition-all duration-300 bg-black/20">
                  <span className="text-2xl md:text-3xl opacity-30 group-hover:opacity-50 transition-opacity">
                    {lang.kanji}
                  </span>
                  <span className="font-mono text-sm md:text-base tracking-widest group-hover:text-[#e70059] transition-colors">
                    {lang.name}
                  </span>
                </div>
                
                {/* Efecto glitch sutil */}
                <motion.div
                  className="absolute inset-0 border-2 border-[#e70059] pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 0.3, 0], x: [-2, 2, -2], y: [-2, 2, -2] }}
                  viewport={{ once: false }}
                  transition={{ 
                    duration: 0.2, 
                    delay: 0.5 + (index * 0.1),
                    times: [0, 0.5, 1]
                  }}
                />

                {/* Glitch effect en hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-[#e70059] pointer-events-none opacity-0 group-hover:opacity-100"
                  animate={{
                    x: [0, -3, 3, -2, 2, 0],
                    y: [0, 2, -2, 3, -3, 0],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    repeatDelay: 0.1
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-[#e70059]/10 pointer-events-none opacity-0 group-hover:opacity-100"
                  animate={{
                    x: [0, 4, -4, 3, -3, 0],
                    opacity: [0, 0.15, 0, 0.15, 0],
                  }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    repeatDelay: 0.15
                  }}
                />
              </motion.div>
            ))}

            {/* Código de barras derecho */}
            <div className="flex gap-0.5 flex-shrink-0">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 h-12 bg-[#e70059]" 
                  style={{ opacity: Math.random() * 0.6 + 0.4 }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}