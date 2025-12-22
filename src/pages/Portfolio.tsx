import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ilustración Digital Abstracta",
    category: "Ilustración",
    image: "https://images.unsplash.com/photo-1545181824-24c265f8fd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaWxsdXN0cmF0aW9uJTIwYXJ0d29ya3xlbnwxfHx8fDE3NjM1NTg3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Proyecto de arte digital con enfoque en formas abstractas y colores vibrantes",
    year: "2024"
  },
  {
    id: 2,
    title: "Diseño de Póster Gráfico",
    category: "Diseño Gráfico",
    image: "https://images.unsplash.com/photo-1654865433650-23e71f161b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc2MzQ2NjkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Serie de pósters promocionales con tipografía creativa y composición dinámica",
    year: "2024"
  },
  {
    id: 3,
    title: "Ilustración Creativa",
    category: "Ilustración",
    image: "https://images.unsplash.com/photo-1605007621946-916b7a9b6e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NjM1MzY5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Composición artística con elementos visuales dinámicos y textura digital",
    year: "2024"
  },
  {
    id: 4,
    title: "Artwork Colorido",
    category: "Arte Digital",
    image: "https://images.unsplash.com/photo-1741335661700-13081b67a23b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFydHdvcmslMjBkZXNpZ258ZW58MXx8fHwxNzYzNTU4NzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Exploración de paleta de colores vibrantes y formas orgánicas",
    year: "2023"
  },
  {
    id: 5,
    title: "Diseño Gráfico Moderno",
    category: "Diseño Gráfico",
    image: "https://images.unsplash.com/photo-1760784016748-79421d6f8e74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmFwaGljJTIwZGVzaWdufGVufDF8fHx8MTc2MzU1Nzg4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Diseño contemporáneo con enfoque minimalista y tipografía bold",
    year: "2023"
  },
  {
    id: 6,
    title: "Ilustración Abstracta",
    category: "Ilustración",
    image: "https://images.unsplash.com/photo-1513909894411-7d7e04c28ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NjM1MzQ4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Composición abstracta con texturas orgánicas y efectos de luz",
    year: "2023"
  },
  {
    id: 7,
    title: "Ilustración de Personajes",
    category: "Ilustración",
    image: "https://images.unsplash.com/photo-1741894785509-d87c84bdc275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzYzNTU4NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Desarrollo de personajes originales y concept art detallado",
    year: "2023"
  },
  {
    id: 8,
    title: "Identidad de Marca",
    category: "Diseño Gráfico",
    image: "https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2MzQ4MzY5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Sistema completo de identidad visual corporativa y brand guidelines",
    year: "2024"
  }
];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const categories = ["Todos", "Ilustración", "Diseño Gráfico", "Arte Digital"];

  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { amount: 0.3 });

  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { amount: 0.1 });

  return (
    <div className="bg-white">
      {/* Hero Section - Japanese Poster Style */}
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden"
      >
        {/* Barras animadas de revelado */}
        <motion.div
          className="absolute inset-0 bg-[#e70059] z-30 origin-left"
          animate={{ scaleX: isHeroInView ? 0 : 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.div
          className="absolute inset-0 bg-white z-20 origin-left"
          animate={{ scaleX: isHeroInView ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
        />

        {/* Elementos decorativos de fondo */}
        <motion.div 
          className="absolute top-24 md:top-16 left-8 md:left-16 text-4xl md:text-6xl text-[#e70059] opacity-20"
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          ✱
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 md:bottom-16 right-8 md:right-16 text-4xl md:text-6xl text-[#e70059] opacity-20"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          ✕
        </motion.div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Header tipo status */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-8 text-[10px] md:text-xs"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-[#e70059]">✱</span>
              <span className="bg-white text-black px-3 md:px-4 py-1.5 md:py-2 tracking-[0.2em] md:tracking-[0.3em]">PORTFOLIO</span>
              <span className="text-[#e70059]">✤</span>
              <span className="tracking-[0.2em] md:tracking-[0.3em]">ポートフォリオ</span>
              <span className="text-[#e70059]">✱</span>
            </motion.div>

            <motion.h1 
              className="text-[14vw] md:text-7xl lg:text-9xl mb-6 md:mb-8 tracking-tighter leading-[0.85] md:leading-[0.9] uppercase" 
              style={{ fontFamily: "'GenEi Kiwami Gothic', -apple-system, sans-serif" }}
              initial={{ opacity: 0, x: -150, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            >
              <span className="block">MY</span>
              <span className="block text-[#e70059]">CREATIVE</span>
              <span className="block">WORK</span>
            </motion.h1>

            <motion.p 
              className="text-base md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed mb-8 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Una colección curada de proyectos en ilustración digital, diseño gráfico 
              e identidad visual
            </motion.p>

            {/* Decoración inferior */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-[9px] md:text-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-[#e70059]">✱</span>
              <span className="tracking-[0.15em] md:tracking-[0.2em]">作品集</span>
              <span className="text-[#e70059]">✕</span>
              <span className="bg-[#e70059] text-white px-2 md:px-3 py-1">2024</span>
              <span className="text-[#e70059]">✕</span>
              <span className="tracking-[0.15em] md:tracking-[0.2em]">CREATIVE</span>
              <span className="text-[#e70059]">✱</span>
            </motion.div>

            {/* Código de barras decorativo - oculto en móvil */}
            <motion.div 
              className="hidden md:flex gap-0.5 justify-center mt-12"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {[...Array(20)].map((_, i) => {
                const isPink = i % 4 === 1 || i % 4 === 2;
                return (
                  <div 
                    key={i} 
                    className="w-1 h-16" 
                    style={{ 
                      background: isPink ? '#e70059' : '#ffffff',
                      opacity: 0.5 + Math.random() * 0.5
                    }}
                  ></div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section 
        ref={gridRef}
        className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden"
      >
        {/* Barras animadas de revelado */}
        <motion.div
          className="absolute inset-0 bg-black z-30 origin-right"
          animate={{ scaleX: isGridInView ? 0 : 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.div
          className="absolute inset-0 bg-[#e70059] z-20 origin-right"
          animate={{ scaleX: isGridInView ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
        />

        {/* Header tipo tech/status bar */}
        <div className="border-b border-black/10 py-3 px-4 md:px-8 lg:pl-32 relative z-0">
          <div className="flex items-center justify-between text-[10px] md:text-xs gap-2">
            <div className="flex items-center gap-2 md:gap-4 md:ml-4 lg:ml-28">
              <span className="font-mono hidden sm:inline">™, ®</span>
              <span className="font-mono">2024</span>
              <div className="w-8 md:w-16 h-2 bg-black rounded-full"></div>
              <span className="font-mono hidden sm:inline">WORK</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <span className="font-mono text-[9px] md:text-xs">PORTFOLIO.XII</span>
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:pl-32 pt-8 md:pt-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <motion.div 
              className="mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 md:gap-3 mb-6 text-xs">
                <span className="text-[#e70059]">✱</span>
                <span className="tracking-[0.2em] md:tracking-[0.3em]">FILTER</span>
                <span className="text-[#e70059]">✤</span>
                <span className="tracking-[0.15em] md:tracking-[0.2em]">フィルター</span>
              </div>
              
              <div className="flex flex-wrap gap-2 md:gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm tracking-[0.1em] md:tracking-[0.15em] uppercase border-2 transition-all ${
                      selectedCategory === category
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-black hover:bg-[#e70059] hover:text-white hover:border-[#e70059]"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Portfolio Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
              layout
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                  className="group cursor-pointer overflow-hidden border-2 border-black hover:border-[#e70059] transition-all bg-white relative"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Número decorativo */}
                  <div className="absolute top-4 left-4 z-20 bg-black text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center font-mono text-xs md:text-sm">
                    {String(project.id).padStart(2, '0')}
                  </div>

                  {/* Símbolo decorativo */}
                  <motion.div 
                    className="absolute top-4 right-4 z-20 text-[#e70059] text-xl md:text-2xl"
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  >
                    ✱
                  </motion.div>

                  <div className="aspect-square overflow-hidden bg-gray-100 relative">
                    {/* Glitch effect border */}
                    <motion.div
                      className="absolute inset-0 border-4 border-[#e70059] z-10 opacity-0 group-hover:opacity-70"
                      initial={{ x: 0, y: 0 }}
                      whileHover={{ 
                        x: [0, -4, 4, -4, 0], 
                        y: [0, 4, -4, 4, 0],
                        transition: { duration: 0.4 }
                      }}
                    />
                    
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-4 md:p-6 bg-white border-t-2 border-black group-hover:border-[#e70059] transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-black text-white px-2 md:px-3 py-1 text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.15em] uppercase">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[#e70059]">✱</span>
                        <span className="font-mono">{project.year}</span>
                      </div>
                    </div>
                    <h3 className="mb-2 md:mb-3 group-hover:text-[#e70059] transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Código de barras pequeño */}
                    <div className="flex gap-0.5 mt-4">
                      {[...Array(8)].map((_, i) => {
                        const isPink = i % 3 === 1;
                        return (
                          <div 
                            key={i} 
                            className="w-1 h-8" 
                            style={{ 
                              background: isPink ? '#e70059' : '#000000',
                              opacity: 0.4 + Math.random() * 0.4
                            }}
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Texto japonés grande centrado */}
            <div className="text-center space-y-4 py-8 md:py-12">
              <div className="text-4xl md:text-6xl lg:text-8xl tracking-tight opacity-10">
                作品集
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-[10px] md:text-xs">
                <span className="text-[#e70059]">✱</span>
                <span className="tracking-[0.15em] md:tracking-[0.2em]">CREATIVE PORTFOLIO</span>
                <span className="text-[#e70059]">✱</span>
                <span className="tracking-[0.15em] md:tracking-[0.2em]">クリエイティブ</span>
                <span className="text-[#e70059]">✱</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}