import { Palette, Sparkles, Layers, Award, Coffee, Heart, Plus, Circle, Square, Globe, Zap, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ValueCarousel } from "../components/ValueCarousel";
import heroImage from "figma:asset/e60d2b83fd6a8e4022f566e8943fc69bfa26c445.png";

export function Home() {
  const skills = [
    {
      icon: Palette,
      title: "Ilustración Digital",
      description: "Creación de ilustraciones únicas y personalizadas usando las últimas herramientas digitales",
      number: "01",
      tag: "DIGITAL"
    },
    {
      icon: Sparkles,
      title: "Diseño Gráfico",
      description: "Diseños visuales impactantes para marcas, publicidad y comunicación efectiva",
      number: "02",
      tag: "VISUAL"
    },
    {
      icon: Layers,
      title: "Identidad Visual",
      description: "Desarrollo de sistemas de identidad coherentes y memorables para empresas",
      number: "03",
      tag: "BRAND"
    }
  ];

  const stats = [
    { number: "5+", label: "Años de Experiencia" },
    { number: "100+", label: "Proyectos Completados" },
    { number: "50+", label: "Clientes Felices" }
  ];

  const values = [
    {
      icon: Award,
      title: "Calidad",
      description: "Cada proyecto recibe mi máxima atención al detalle",
      kanji: "質"
    },
    {
      icon: Coffee,
      title: "Pasión",
      description: "Amo lo que hago y se refleja en mi trabajo",
      kanji: "情"
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Dedicado a superar las expectativas de cada cliente",
      kanji: "誠"
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <div className="bg-white">
      {/* Hero Section - MANTENER INTACTO */}
      <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
        <div className="w-full h-screen relative flex items-center justify-center">
          <img
            src={heroImage}
            alt="Artwork destacado"
            className="w-full h-full object-contain scale-[2.5] md:scale-100 translate-x-2 md:translate-x-0"
          />
          
          {/* Elementos decorativos - Copiados de PageTransition */}
          {/* Esquina superior izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-20 left-4 md:top-8 md:left-8 text-black font-mono text-xs md:text-sm"
          >
            <motion.div 
              className="mb-1"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              // PORTFOLIO
            </motion.div>
            <motion.div 
              className="text-sm md:text-base"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              チャルミ
            </motion.div>
          </motion.div>

          {/* Esquina superior derecha */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{ 
              delay: 0.3,
              rotate: { 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear" 
              }
            }}
            className="absolute top-20 right-4 md:top-8 md:right-8 text-[#e70059] text-2xl md:text-4xl"
          >
            ✱
          </motion.div>

          {/* Lateral derecho - Ocultar en móvil */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              y: [0, -5, 0] 
            }}
            transition={{ 
              delay: 0.4,
              y: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
            className="hidden md:block absolute right-12 top-1/2 -translate-y-1/2 rotate-90 font-mono text-sm text-black tracking-widest"
          >
            クリエイティブ
          </motion.div>

          {/* Esquina inferior izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              delay: 0.5,
              scale: { 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
            className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-[#e70059] text-2xl md:text-3xl"
          >
            ×
          </motion.div>

          {/* Esquina inferior derecha */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-4 right-4 md:bottom-8 md:right-8 text-black font-mono text-xs md:text-sm text-right"
          >
            <motion.div 
              className="text-sm md:text-base"
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              2025
            </motion.div>
            <motion.div 
              className="mt-1 text-sm md:text-base"
              animate={{ x: [0, -3, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              準備中
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section - Poster Style */}
      <section 
        ref={ref}
        className="py-16 md:py-24 pb-0 bg-white relative overflow-hidden"
      >
        {/* Barras animadas de revelado - dirección contraria*/} 
        <motion.div
          className="absolute inset-0 bg-[#e70059] z-30 origin-right"
          animate={{ scaleX: isInView ? 0 : 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.div
          className="absolute inset-0 bg-black z-20 origin-right"
          animate={{ scaleX: isInView ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
        />
        
        {/* Header tipo tech/status bar */}
        <div className="border-b border-black/10 py-3 px-4 md:px-8 lg:pl-32 relative z-0">
          <div className="flex items-center justify-between text-[10px] md:text-xs gap-2">
            <div className="flex items-center gap-2 md:gap-4 md:ml-4 lg:ml-28">
              <span className="font-mono hidden sm:inline">™, ®</span>
              <span className="font-mono">2024</span>
              <div className="w-8 md:w-16 h-2 bg-black rounded-full"></div>
              <span className="font-mono hidden sm:inline">06.25</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <span className="font-mono text-[9px] md:text-xs">WWW.XXIV</span>
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:pl-32 pt-12 pb-0">
          <div className="max-w-7xl mx-auto">
            {/* Título gigante estilo póster */}
            <motion.div 
              className="mb-12 relative"
              initial={{ opacity: 0, x: 150, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            >
              <h2 className="text-[12vw] md:text-[10vw] lg:text-[8rem] tracking-tighter leading-[0.85] uppercase mb-6" 
                  style={{ fontFamily: "'GenEi Kiwami Gothic', -apple-system, sans-serif" }}>
                <span className="block text-black">わたしは</span>
                <span className="block text-[#e70059] relative">
                  Alejandro
                  {/* Símbolos decorativos insertados */}
                  <span className="inline-block mx-2 text-[#e70059] align-middle">✱</span>
                </span>
              </h2>
              
              {/* Badges y elementos decorativos */}
              <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-8 text-xs md:text-sm">
                <span className="bg-black text-white px-3 md:px-4 py-1.5 tracking-[0.15em] md:tracking-[0.3em]">DESIGNER</span>
                <span className="text-[#e70059]">✱</span>
                <span className="tracking-[0.1em] md:tracking-[0.2em]">ポートフォリオ</span>
                <span className="text-[#e70059]">✕</span>
                <span className="tracking-[0.1em] md:tracking-[0.2em]">PORTFOLIO</span>
                <span className="text-[#e70059]">✱</span>
                <span className="bg-[#e70059] text-white px-3 md:px-4 py-1.5 tracking-[0.1em] md:tracking-[0.2em]">2024</span>
                <span className="text-[#e70059]">✕</span>
                <span className="tracking-[0.1em] md:tracking-[0.2em]">デザイン</span>
              </div>
            </motion.div>

            {/* Grid principal con imagen y texto */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              {/* Columna izquierda - Texto */}
              <motion.div
                initial={{ opacity: 0, x: 150, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4,
                  ease: [0.34, 1.56, 0.64, 1],
                  scale: {
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }
                }}
              >
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl mb-4 tracking-tight">Embracing Comfort with Style</h3>
                  
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p className="text-gray-800">
                      Desde pequeño, el arte y el diseño han sido mi forma de expresión. Lo que comenzó como 
                      un pasatiempo se convirtió en mi carrera y pasión. Me especializo en crear piezas visuales 
                      que no solo captan la atención, sino que comunican mensajes poderosos.
                    </p>
                    <p className="text-gray-800">
                      Con más de 5 años de experiencia, he tenido el privilegio de trabajar con clientes increíbles, 
                      desde emprendedores soñadores hasta empresas consolidadas.
                    </p>
                  </div>
                </div>
                
                {/* Códigos de barras decorativos */}
                <div className="flex items-center gap-4">
                  <div className="flex gap-0.5">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="w-1 h-12 bg-black" style={{ opacity: Math.random() }}></div>
                    ))}
                  </div>
                  <span className="text-[#e70059]">✤</span>
                </div>
              </motion.div>

              {/* Columna derecha - Imagen */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -150, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5,
                  ease: [0.34, 1.56, 0.64, 1],
                  scale: {
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }
                }}
              >
                {/* Glitch effect para la imagen */}
                <motion.div
                  className="absolute -top-4 -right-4 w-full h-full border-4 border-[#e70059] z-0"
                  initial={{ opacity: 0, x: -8, y: -8 }}
                  whileInView={{ opacity: [0, 0.7, 0], x: [-8, 8, -8], y: [-8, 8, -8] }}
                  viewport={{ once: false }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.7,
                    times: [0, 0.5, 1]
                  }}
                />
                <div className="absolute -top-4 -right-4 w-full h-full border-4 border-black z-0"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1642609026456-834be953090e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwcG9ydHJhaXQlMjB0cmFuc3BhcmVudHxlbnwxfHx8fDE3NjM1NjU0NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Designer"
                  className="w-full relative z-10"
                />
              </motion.div>
            </div>

            {/* Título japonés grande */}
            <div className="text-center mb-12">
            </div>

            {/* Elementos decorativos */}
            <div className="space-y-16 py-12">
              {/* Línea decorativa con texto */}

              {/* Texto japonés grande centrado */}
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-6xl lg:text-8xl tracking-tight opacity-10">
                  クエイティブ
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-[10px] md:text-xs">
                  <span className="text-[#e70059]">✱</span>
                  <span className="tracking-[0.15em] md:tracking-[0.2em]">CREATIVE DESIGN</span>
                  <span className="text-[#e70059]">✱</span>
                  <span className="tracking-[0.15em] md:tracking-[0.2em]">ポートフォリオ</span>
                  <span className="text-[#e70059]">✱</span>
                </div>
              </div>

              {/* Grid de elementos decorativos */}

              {/* Badges finales */}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Dark Poster Style */}
      <motion.section 
        className="min-h-screen py-20 md:py-32 pb-64 md:pb-96 bg-black text-white relative overflow-hidden flex items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.3 }}
      >
        {/* Barras animadas de revelado*/} 
        <motion.div
          className="absolute inset-0 bg-[#e70059] z-20 origin-left"
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.div
          className="absolute inset-0 bg-white z-10 origin-left"
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
        />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6 text-xs">
                <span className="text-[#e70059]">✱</span>
                <span className="tracking-[0.3em]">VALUES</span>
                <span className="px-3 py-1 bg-white text-black">2024</span>
                <span className="tracking-[0.3em]">価値観</span>
                <span className="text-[#e70059]">✱</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl lg:text-8xl mb-4 tracking-tighter uppercase" 
                  style={{ fontFamily: "'GenEi Kiwami Gothic', -apple-system, sans-serif" }}>
                MY <span className="text-[#e70059]">SKILLS</span>
              </h2>
            </div>

            {/* Carrusel centrado */}
            <ValueCarousel values={values} />
          </div>
        </div>
      </motion.section>

      {/* Footer placeholder - Footer component will be shown */}
    </div>
  );
}