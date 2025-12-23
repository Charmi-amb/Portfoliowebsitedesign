import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import logoImg from "figma:asset/72ccaffd7997131d418adc5b4cef37b5525fd3c7.png";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
  client?: string;
  role?: string;
  tools?: string[];
  details?: string;
  galleryImages?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ilustración Digital Abstracta",
    category: "Ilustración",
    image: "https://images.unsplash.com/photo-1545181824-24c265f8fd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaWxsdXN0cmF0aW9uJTIwYXJ0d29ya3xlbnwxfHx8fDE3NjM1NTg3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Proyecto de arte digital con enfoque en formas abstractas y colores vibrantes",
    year: "2024",
    client: "Proyecto Personal",
    role: "Ilustrador Digital",
    tools: ["Adobe Illustrator", "Procreate", "Photoshop"],
    details: "Este proyecto explora la intersección entre lo orgánico y lo digital, utilizando formas abstractas que evocan movimiento y energía. El uso de colores vibrantes crea una experiencia visual dinámica que captura la atención del espectador. La composición juega con el equilibrio entre caos y orden, reflejando la naturaleza dual de la creatividad moderna.",
    galleryImages: [
      "https://images.unsplash.com/photo-1545181824-24c265f8fd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaWxsdXN0cmF0aW9uJTIwYXJ0d29ya3xlbnwxfHx8fDE3NjY1MDM4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMGNvbG9yZnVsfGVufDF8fHx8MTc2NjQ2MTY1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1692530943891-589e88b780a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwcGF0dGVybnxlbnwxfHx8fDE3NjY0ODI5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: 2,
    title: "Diseño de Póster Gráfico",
    category: "Diseño Gráfico",
    image: "https://images.unsplash.com/photo-1654865433650-23e71f161b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc2MzQ2NjkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Serie de pósters promocionales con tipografía creativa y composición dinámica",
    year: "2024",
    client: "Festival de Arte Urbano",
    role: "Diseñador Gráfico",
    tools: ["Adobe InDesign", "Illustrator", "After Effects"],
    details: "Una serie de pósters promocionales diseñados para un festival de arte urbano. La tipografía experimental se combina con elementos visuales dinámicos para crear un impacto inmediato. Cada póster mantiene cohesión visual mientras presenta una personalidad única, reflejando la diversidad del evento.",
    galleryImages: [
      "https://images.unsplash.com/photo-1642067790937-0b5447355470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc2NjQ2MTcxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwZGVzaWdufGVufDF8fHx8MTc2NjUxNzMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1742440710193-3547e0b9d4db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjY0OTg3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: 3,
    title: "Ilustración Creativa",
    category: "Ilustración",
    image: "https://images.unsplash.com/photo-1605007621946-916b7a9b6e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NjM1MzY5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Composición artística con elementos visuales dinámicos y textura digital",
    year: "2024",
    client: "Revista Digital",
    role: "Ilustrador Editorial",
    tools: ["Procreate", "Adobe Photoshop"],
    details: "Ilustración editorial que combina elementos orgánicos con texturas digitales para crear una narrativa visual única. El proceso involucró experimentación con diferentes técnicas de pincel digital para lograr una sensación táctil dentro del medio digital.",
    galleryImages: [
      "https://images.unsplash.com/photo-1605007621946-916b7a9b6e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NjM1MzY5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1763041316817-36ffaa4d2c15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGlsbHVzdHJhdGlvniyMGFydHxlbnwxfHx8fDE3NjY0NjMxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1744686909443-eb72a54de998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY2NTI0NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: 4,
    title: "Artwork Colorido",
    category: "Arte Digital",
    image: "https://images.unsplash.com/photo-1741335661700-13081b67a23b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFydHdvcmslMjBkZXNpZ258ZW58MXx8fHwxNzYzNTU4NzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Exploración de paleta de colores vibrantes y formas orgánicas",
    year: "2023",
    client: "Galería de Arte Digital",
    role: "Artista Digital",
    tools: ["Blender", "Adobe Photoshop", "Cinema 4D"],
    details: "Un experimento visual que explora la relación entre color, forma y emoción. La paleta vibrante fue cuidadosamente seleccionada para evocar sensaciones de energía y optimismo. Las formas orgánicas fluyen naturalmente, creando un ritmo visual que guía al espectador a través de la composición.",
    galleryImages: [
      "https://images.unsplash.com/photo-1741335661700-13081b67a23b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFydHdvcmslMjBkZXNpZ258ZW58MXx8fHwxNzYzNTU4NzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1660583789363-4b95e3c66085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnR3b3JrJTIwZGVzaWdufGVufDF8fHx8MTc2NjUyNDQ4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMGNvbG9yZnVsfGVufDF8fHx8MTc2NjQ2MTY1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: 5,
    title: "Diseño Gráfico Moderno",
    category: "Diseño Gráfico",
    image: "https://images.unsplash.com/photo-1760784016748-79421d6f8e74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmFwaGljJTIwZGVzaWdufGVufDF8fHx8MTc2MzU1Nzg4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Diseño contemporáneo con enfoque minimalista y tipografía bold",
    year: "2023",
    client: "Startup Tecnológica",
    role: "Diseñador Visual",
    tools: ["Figma", "Adobe Illustrator"],
    details: "Diseño minimalista que prioriza la claridad y el impacto visual. La tipografía bold se convierte en el elemento principal, creando jerarquía visual sin elementos decorativos innecesarios. Este enfoque refleja la filosofía moderna de 'menos es más'.",
    galleryImages: [
      "https://images.unsplash.com/photo-1760784016748-79421d6f8e74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmFwaGljJTIwZGVzaWdufGVufDF8fHx8MTc2MzU1Nzg4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1677170044570-d3195958a67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwbGF5b3V0JTIwZGVzaWdufGVufDF8fHx8MTc2NjUyNDQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1642067790937-0b5447355470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc2NjQ2MTcxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: 6,
    title: "Ilustración Abstracta",
    category: "Ilustración",
    image: "https://images.unsplash.com/photo-1513909894411-7d7e04c28ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NjM1MzQ4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Composición abstracta con texturas orgánicas y efectos de luz",
    year: "2023",
    client: "Exposición Colectiva",
    role: "Artista Visual",
    tools: ["Procreate", "Adobe Photoshop", "Lightroom"],
    details: "Una exploración de luz y textura a través del arte abstracto. Las formas orgánicas se entrelazan con efectos de iluminación cuidadosamente diseñados para crear profundidad y dimensión. La pieza invita a la contemplación y permite múltiples interpretaciones.",
    galleryImages: [
      "https://images.unsplash.com/photo-1513909894411-7d7e04c28ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NjM1MzQ4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1692530943891-589e88b780a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwcGF0dGVybnxlbnwxfHx8fDE3NjY0ODI5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1545181824-24c265f8fd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaWxsdXN0cmF0aW9uJTIwYXJ0d29ya3xlbnwxfHx8fDE3NjY1MDM4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: 7,
    title: "Ilustración de Personajes",
    category: "Ilustración",
    image: "https://images.unsplash.com/photo-1741894785509-d87c84bdc275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzYzNTU4NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Desarrollo de personajes originales y concept art detallado",
    year: "2023",
    client: "Estudio de Animación",
    role: "Character Designer",
    tools: ["Procreate", "Adobe Photoshop", "Clip Studio Paint"],
    details: "Diseño de personajes para un proyecto de animación. El proceso incluyó investigación, bocetos exploratorios y desarrollo de hojas de modelo completas. Cada personaje fue diseñado con una personalidad visual distintiva que refleja su rol en la narrativa.",
    galleryImages: [
      "https://images.unsplash.com/photo-1741894785509-d87c84bdc275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzYzNTU4NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1677212004257-103cfa6b59d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBkZXNpZ24lMjBhcnR8ZW58MXx8fHwxNzY2NDIzOTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1744686909443-eb72a54de998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY2NTI0NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: 8,
    title: "Identidad de Marca",
    category: "Diseño Gráfico",
    image: "https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2MzQ4MzY5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Sistema completo de identidad visual corporativa y brand guidelines",
    year: "2024",
    client: "Empresa de Innovación",
    role: "Brand Designer",
    tools: ["Adobe Illustrator", "InDesign", "Figma"],
    details: "Desarrollo completo de identidad de marca incluyendo logotipo, paleta de colores, tipografía y aplicaciones. El sistema fue diseñado para ser flexible y escalable, manteniendo coherencia visual en todos los puntos de contacto con el usuario. Incluye guías de uso detalladas para asegurar implementación consistente.",
    galleryImages: [
      "https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2MzQ4MzY5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1629030386603-84ce2892830e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbG9nb3xlbnwxfHx8fDE3NjY0Njk2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwZGVzaWdufGVufDF8fHx8MTc2NjUxNzMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  }
];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const categories = ["Todos", "Ilustración", "Diseño Gráfico", "Arte Digital"];

  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { amount: 0.3 });

  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { amount: 0.1 });

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Resetear el índice del carrusel cuando cambia el proyecto
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);

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
              <span className="tracking-[0.2em] md:tracking-[0.3em]">ポトフォリオ</span>
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
                  onClick={() => setSelectedProject(project)}
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
                <span className="tracking-[0.15em] md:tracking-[0.2em]">クエイティブ</span>
                <span className="text-[#e70059]">✱</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90" />
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative w-full max-w-[95vw] lg:max-w-[1600px] max-h-[90vh] bg-white border-4 border-[#e70059] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 text-[#e70059] transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <X className="w-8 h-8 md:w-10 md:h-10" strokeWidth={3} />
                </motion.div>
              </button>

              {/* Logo - top left (hidden on mobile) */}
              <div className="hidden md:block absolute top-4 left-4 md:top-6 md:left-6 z-10">
                <img src={logoImg} alt="Charmi Logo" className="h-12 md:h-16 lg:h-20 w-auto" />
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[90vh] overscroll-contain project-modal-scroll">
                {/* Header Section */}
                <div className="relative bg-black text-white p-4 md:p-8 md:pl-32 lg:pl-40">
                  <div className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4 text-xs">
                      <span className="bg-[#e70059] text-white px-2 md:px-3 py-1 tracking-[0.15em] uppercase">
                        {selectedProject.category}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-4 tracking-tight leading-tight" style={{ fontFamily: "'GenEi Kiwami Gothic', -apple-system, sans-serif" }}>
                      {selectedProject.title}
                    </h2>

                    <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                {/* Image Section */}
                <div className="relative aspect-video md:aspect-[21/9] overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details Section */}
                <div className="p-4 md:p-8 bg-white">
                  <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
                    
                    {/* Layout en dos columnas - Info y Tools compactos */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-12">
                      
                      {/* Columna izquierda - Información del proyecto */}
                      <div className="space-y-4">
                        {/* Header decorativo */}
                        <div className="flex items-center gap-3 pb-3 border-b-2 border-black">
                          <div className="bg-[#e70059] w-1 h-6"></div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[#e70059]">✱</span>
                              <span className="tracking-[0.3em] text-xs uppercase">PROJECT INFO</span>
                            </div>
                          </div>
                        </div>

                        {/* Información en badges estilo tools */}
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.client && (
                            <span className="bg-[#e70059] text-white px-3 py-2 text-xs tracking-[0.1em] border-2 border-[#e70059] hover:bg-white hover:text-[#e70059] transition-all">
                              {selectedProject.client}
                            </span>
                          )}
                          <span className="bg-[#e70059] text-white px-3 py-2 text-xs tracking-[0.1em] border-2 border-[#e70059] hover:bg-white hover:text-[#e70059] transition-all">
                            {selectedProject.year}
                          </span>
                        </div>
                      </div>

                      {/* Columna derecha - Herramientas compactas */}
                      <div className="space-y-4">
                        {selectedProject.tools && selectedProject.tools.length > 0 && (
                          <>
                            {/* Header decorativo */}
                            <div className="flex items-center gap-3 pb-3 border-b-2 border-[#e70059]">
                              <div className="bg-black w-1 h-6"></div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[#e70059]">✤</span>
                                  <span className="tracking-[0.3em] text-xs uppercase">TOOLS</span>
                                </div>
                              </div>
                            </div>

                            {/* Tools en grid compacto */}
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.tools.map((tool, index) => (
                                <span
                                  key={index}
                                  className="bg-black text-white px-3 py-2 text-xs tracking-[0.1em] border-2 border-black hover:border-[#e70059] transition-all"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Sección About - Sin marco, con espacio para imágenes */}
                    {selectedProject.details && (
                      <div className="mb-8 md:mb-12">
                        {/* Header tipo título de página */}
                        <div className="mb-4 md:mb-6">
                          <h3 className="text-xl md:text-2xl lg:text-3xl tracking-tight mb-2" style={{ fontFamily: "'GenEi Kiwami Gothic', -apple-system, sans-serif" }}>
                            About Project
                          </h3>
                          <div className="flex items-center gap-2 text-xs">
                            <span className="text-[#e70059]">✱</span>
                            <span className="tracking-[0.2em]">プロジェクトについて</span>
                          </div>
                        </div>

                        {/* Contenido */}
                        <div className="max-w-5xl">
                          <p className="text-sm md:text-base leading-relaxed text-gray-800 mb-6">
                            {selectedProject.details}
                          </p>
                        </div>

                        {/* Galería de imágenes del proyecto - Carrusel */}
                        {selectedProject.galleryImages && selectedProject.galleryImages.length > 0 && (
                          <div className="mt-8">
                            {/* Carrusel */}
                            <div className="relative overflow-hidden bg-gray-100">
                              {/* Contenedor de imágenes */}
                              <motion.div
                                className="flex"
                                animate={{ x: `-${currentImageIndex * 100}%` }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                              >
                                {selectedProject.galleryImages.map((image, index) => (
                                  <div key={index} className="min-w-full aspect-[16/9]">
                                    <ImageWithFallback
                                      src={image}
                                      alt={`${selectedProject.title} - Image ${index + 1}`}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                ))}
                              </motion.div>

                              {/* Barra rosa inferior fija */}
                              <div className="h-2 bg-[#e70059]" />

                              {/* Botón Anterior */}
                              {currentImageIndex > 0 && (
                                <motion.button
                                  onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 text-white p-3 border-2 border-[#e70059] hover:bg-[#e70059] transition-all z-20"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <ChevronLeft className="w-6 h-6" />
                                </motion.button>
                              )}

                              {/* Botón Siguiente */}
                              {currentImageIndex < selectedProject.galleryImages.length - 1 && (
                                <motion.button
                                  onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 text-white p-3 border-2 border-[#e70059] hover:bg-[#e70059] transition-all z-20"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <ChevronRight className="w-6 h-6" />
                                </motion.button>
                              )}

                              {/* Indicador de posición */}
                              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 px-4 py-2 border border-[#e70059] z-20">
                                <span className="text-white text-xs font-mono tracking-wider">
                                  {String(currentImageIndex + 1).padStart(2, '0')} / {String(selectedProject.galleryImages.length).padStart(2, '0')}
                                </span>
                              </div>
                            </div>

                            {/* Decoración japonesa debajo del carrusel */}
                            <div className="flex items-center justify-center gap-3 mt-6 pt-6 border-t border-black/10">
                              <div className="flex items-center gap-2 text-xs">
                                <span className="text-[#e70059]">✱</span>
                                <span className="tracking-[0.2em]">ギャラリー</span>
                                <span className="text-gray-400">×</span>
                                <span className="font-mono">{selectedProject.galleryImages.length}</span>
                                <span className="text-[#e70059]">✱</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Footer decorativo */}
                    <div className="border-t-2 border-black pt-4 md:pt-6">
                      <div className="flex flex-wrap items-center justify-between gap-6">
                        {/* Info izquierda - palabras japonesas relacionadas con diseño */}
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-[#e70059]">✱</span>
                          <span className="tracking-[0.2em]">デザイン</span>
                          <span className="text-[#e70059]">✤</span>
                          <span className="tracking-[0.2em]">創造</span>
                          <span className="text-[#e70059]">✱</span>
                          <span className="tracking-[0.2em]">芸術</span>
                          <span className="text-[#e70059]">✤</span>
                          <span className="tracking-[0.2em]">作品</span>
                        </div>

                        {/* Kanji decorativo grande */}
                        <div className="text-5xl md:text-6xl text-black opacity-30" style={{ fontFamily: "'GenEi Kiwami Gothic', -apple-system, sans-serif" }}>
                          創
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}