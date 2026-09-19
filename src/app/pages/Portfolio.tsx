import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import logoImg from "figma:asset/72ccaffd7997131d418adc5b4cef37b5525fd3c7.png";
import diaYNocheImg from "figma:asset/e9c086efa5625e4baf2b69ba5b8fddeddb5504c5.png";
import fenrirBlancoImg from "figma:asset/f8db5c9f6ad44c22a0d6b7bbe9790b40dbaa6477.png";
import skollAmarilloImg from "figma:asset/25e686294a17ae0f6c16f59346905362c7c44af5.png";
import hatiMoradoImg from "figma:asset/7d2f28dc1bcaf770265424b9c1de12d6b660ea59.png";
import fenrirDiaYNocheImg from "figma:asset/0450e7e82ce880510632e21ac1bd528842757f1a.png";
import sudImg from "figma:asset/fc8e1110c0bb3ed208bf99075c734b2c7574b842.png";
import sud2Img from "figma:asset/d3ca16fada163a0f798f3c87cf4eea03d8671cf2.png";
import sud3Img from "figma:asset/ad557f2c8a9e2ed129d898c9577638bb6632bf7a.png";
import sud4Img from "figma:asset/db85484b4474c0306fb0657d0223f6b5091d624d.png";
import sud5Img from "figma:asset/e4888efa33b4843c6d88081783f117c359882e21.png";
import musicaIndieImg from "figma:asset/d95abf12918b817b29ec10e4eb7f8a5662d43eb0.png";
import nidoImg from "figma:asset/50f34cc5f8ed97c10d222c92f2ccfbd0052bc1e9.png";
import nido2Img from "figma:asset/242c82caac37a80cf53428f0ca8df28c23a127f9.png";
import nido3Img from "figma:asset/4865bfecc9c249ad9f82385c91692d082b826074.png";
import insectaImg from "figma:asset/789e24a42106b5d36754426189d6c17ff2205ba1.png";
import insecta2Img from "figma:asset/1a4109c5ae98fb10803454055bf81d6ce276b4c3.png";
import insecta3Img from "figma:asset/7a66921506eff633fe08dd28a660f2b1b62eb83d.png";
import insecta4Img from "figma:asset/c84ec57f5c29774fe948ace621d1e2772027f439.png";
import insecta5Img from "figma:asset/b5cc34266777cf3bdb732addce3dcaafa24aebe9.png";
import insecta6Img from "figma:asset/15f1c6ff87ff2282306ddf631c4dc8ea95919c18.png";
import insecta7Img from "figma:asset/7e0e57d002a717f711eeb05f2ee903a7a9b55cf9.png";
import insecta8Img from "figma:asset/783a3bc789f93a961527a3e23940509cfe73cd6a.png";
import emunaImg from "figma:asset/0b0850d797b0550e8dda0f4bb1827369ab9d3e7a.png";
import emuna2Img from "figma:asset/c17214ea96aad6b5a4d8da39176a2023a5380298.png";
import emuna3Img from "figma:asset/29b9f95e72bb8b24c612a04a7e53dd456f12d2e1.png";
import emuna4Img from "figma:asset/8091152e91a29569f5c469bc9db76aa7a42f6c49.png";
import arteGuerraImg from "figma:asset/07bf057f081c9d232abae517a1c9e80d8b57680d.png";
import arteGuerra2Img from "figma:asset/1699603c5b9c3122fe687802883d56d00dee9e25.png";
import arteGuerra3Img from "figma:asset/9e73a7d38d8f49a5941e9717b6e1ae7c45839cc4.png";
import arteGuerra4Img from "figma:asset/76f17730a8dbe88fdda0a115eb4eef86eb42af1c.png";
import arteGuerra5Img from "figma:asset/8d40e122bc4733454c7a6d54e3fbcd91151ecc8f.png";
import arteGuerra6Img from "figma:asset/f5f10b59a6e48c3a9c3ec8f5917f5e5e0dd7fdba.png";
import poemarioMonoImg from "figma:asset/7bbbcce2601070034843007c648e099b47748032.png";
import poemarioMono2Img from "figma:asset/8c3cc6cb7adeae66d8c165f968481f3bf6653045.png";
import poemarioMono3Img from "figma:asset/acf91474ded58ca443a2fc655580d997a7d287d6.png";
import poemarioMono4Img from "figma:asset/9a3a3687c3bc9c4961ce7174633306d45030d02a.png";
import poemarioMono5Img from "figma:asset/abca3aa9d95680aafe44b839d7c0ea328e9d8792.png";
import poemarioMono6Img from "figma:asset/914148889af6304e4962cd2c393814a756832eaa.png";
import poemarioMono7Img from "figma:asset/283bc08d9c9af7700498ec68f4a13ad452a456cd.png";
import alkawnImg from "figma:asset/cee84f3073def667d7ce94cd22780e326a998747.png";
import alkawn2Img from "figma:asset/b935c558a7060308f14497a1ab43574f39eebd4e.png";
import alkawn3Img from "figma:asset/5c9f5e35ed9517e2b7b22e7bfba2929d102610a8.png";
import alkawn4Img from "figma:asset/f1f9ab05e5de6f022b3d947a79e8e16a0d960214.png";
import alkawn5Img from "figma:asset/491558a66ba4d1a3bf64d2007080c7e0d25c25b9.png";
import alkawn6Img from "figma:asset/396082992c9e80c806c080f0af1d0905066dc63a.png";
import erGatoImg from "../../imports/ErGato_shadowless.png";
import lockedEstanteriaImg from "../../imports/Mesa_de_trabajo_1Estanteria.jpg";
import lockedPuertaImg from "../../imports/Puerta_base___tintas_planas___textura.jpg";
import lockedEjemploImg from "../../imports/Ejemplo_objeto_en_pared_escritorio.jpg";
import lockedCamaImg from "../../imports/Mesa_de_trabajo_3camaa.jpg";
import omnimonImg from "../../imports/Omnimon.jpg";
import disenos3dPokeballImg from "../../imports/Pokeball.jpg";
import disenos3dDragonImg from "../../imports/Metal_Dragon.jpg";
import disenos3dCeramicImg from "../../imports/ceramic.jpg";
import disenos3dChainChompImg from "../../imports/Chain_Chomp.jpg";
import disenos3dChainsawImg from "../../imports/Chainsaw.jpg";
import disenos3dGalaxyImg from "../../imports/Galaxy_Star.jpg";
import disenos3dIsoRoomImg from "../../imports/IsoRoom.jpg";
import disenos3dScizorImg from "../../imports/Scizor.jpg";
import ilustStellaImg from "../../imports/STELLA.jpg";
import ilustLaminas1Img from "../../imports/Laminas_1.jpg";
import ilustLaminas2Img from "../../imports/Laminas_2.jpg";
import ilustLaminas3Img from "../../imports/Laminas_3.jpg";
import ilustMadaleneImg from "../../imports/Madalene.jpg";
import ilustMortimerImg from "../../imports/Mortimer.jpg";
import ilustSilu1Img from "../../imports/Silu_1.png";
import ilustSilu2Img from "../../imports/Silu_2.jpg";
import ilustSilu5Img from "../../imports/Silu_5.jpg";
import alkawn7Img from "figma:asset/177f2d3fad8121cee5d9b92cf896ab4219366141.png";
import alkawn8Img from "figma:asset/3831ad25f6e4c15e8aeb94ec99701998af102737.png";
import alkawnResultImg from "figma:asset/238084d6c14943c4c883d649846830d34bf2310b.png";
import alkawnResult2Img from "figma:asset/90e009f4326a122062555d5addde695d9a31ef93.png";
import alkawnResult3Img from "figma:asset/5345b9c65907c80a277d8ad55e0b034ce9400104.png";
import alkawnResult4Img from "figma:asset/71ea0a5854dd4e7f75d299c9d925877f59bff223.png";
import alkawnResult5Img from "figma:asset/3924d753603bc82adac0d8408f9a602cf77b6ee2.png";
import safarImg from "figma:asset/ebbf9307248573d793807bedb5f08231488447fb.png";
import safar2Img from "figma:asset/af314f76a6c35821d4c18efd097582ff0132dc87.png";
import safar3Img from "figma:asset/ed7bc74512f37177b7d71bb4c004e53c1d15432a.png";
import safar4Img from "figma:asset/82fc200c5b62619489ec92b1e6ebf0d7b4bbc745.png";
import safar5Img from "figma:asset/c77b1428b23447ec00ffe2cac1481a45f024da21.png";
import safar6Img from "figma:asset/aa6bd75487079bd0d61f88817f0fa76bf546eed6.png";
import safar7Img from "figma:asset/4ad7ab92c922e6acc4314f1faf09d3e36fcc3a64.png";
// Imagen horizontal interior - REBAJAS a la izquierda, persona a la derecha
import generalGaleriasInteriorImg from "figma:asset/60531b3b7486a73229b17e01b9a4ede1c4b36f59.png";
// Imagen cuadrada exterior - persona con globo + logo Nevada Shopping
import generalGaleriasImg from "figma:asset/7cec0950a2b8f6b52a13ea58613a31a1cf95733a.png";
// Imágenes adicionales carrusel General de Galerías
import generalGalerias2Img from "figma:asset/066a749f428a2dd7e5a85c23c20ee957dccb9411.png";
import generalGalerias3Img from "figma:asset/98ce8dce1778ccb0b898be9b7be2731dcb8c4b70.png";
import generalGalerias4Img from "figma:asset/7d6257d38a10ca39761b73c6b1e85a84ae54804f.png";
import generalGalerias5Img from "figma:asset/0a359f8d6b6388f18dca5c07503ab4b112233407.png";
import generalGalerias6Img from "figma:asset/8f91682aa0ff56dcb2ca6b2c802d3650ab88e971.png";
import generalGalerias7Img from "figma:asset/3befa0112740705e23a5639a62e4f78c52fb60f6.png";
import lockedImg from "figma:asset/631d441ffea40c7cf98218e05443d47e93469285.png";

interface Project {
  id: number;
  title: string;
  category: string;
  categories?: string[];
  image: string;
  year: string;
  client?: string;
  role?: string;
  tools?: string[];
  details?: string;
  galleryImages?: string[];
  resultsImages?: string[];
  barcodeColors?: string[];
  videoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "El Día y la Noche",
    category: "Ilustración",
    categories: ["Ilustración", "Cartelería"],
    image: diaYNocheImg,
    year: "2021",
    client: "Proyecto Profesional",
    role: "Ilustrador Digital",
    tools: ["Clip Studio Paint", "Adobe Photoshop", "Adobe Illustrator"],
    details: "Diseño de cartelería para el Design Event, Valhalla; celebrado en Mae West Granada en 2021 por ESADA. Es una tríada basada en Fenrir y sus hijos Sköll y Hati, provenientes de la mitología nórdica en la que el proyecto se centraba.",
    galleryImages: [
      diaYNocheImg,
      fenrirBlancoImg,
      skollAmarilloImg,
      hatiMoradoImg,
      fenrirDiaYNocheImg
    ],
    barcodeColors: ["#f4d03f", "#f39c12", "#e74c3c", "#8e44ad", "#3498db"]
  },
  {
    id: 2,
    title: "Sud",
    category: "Diseño Gráfico",
    categories: ["Tipografía", "Cartelería"],
    image: sudImg,
    year: "2022",
    client: "Proyecto Profesional",
    role: "Diseñador Gráfico",
    tools: ["Adobe Illustrator"],
    details: "Cartelería tipográfica creada originalmente para publicitar una etiqueta de vino, destinada al concurso Etiquetas News. Su referente principal es el Brutalismo y el nombre del proyecto es también usado para la bebida que publicita.",
    galleryImages: [
      sudImg,
      sud2Img,
      sud3Img,
      sud4Img,
      sud5Img
    ],
    barcodeColors: ["#000000", "#2c2c2c", "#4a4a4a", "#ffffff", "#e8e8e8"]
  },
  {
    id: 3,
    title: "Música Indie",
    category: "Diseño Gráfico",
    categories: ["Diseño de la Información"],
    image: musicaIndieImg,
    year: "2022",
    client: "Proyecto Profesional",
    role: "Diseñador Gráfico",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    details: "Infografía que data las características más relevantes del Indie español en el año 2021.",
    galleryImages: [
      musicaIndieImg
    ],
    barcodeColors: ["#e74c3c", "#e67e22", "#f39c12", "#f4d03f", "#ecf0f1"]
  },
  {
    id: 4,
    title: "Nido",
    category: "Diseño Gráfico",
    categories: ["Diseño Editorial"],
    image: nidoImg,
    year: "2023",
    client: "Proyecto Profesional",
    role: "Diseñador Gráfico",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    details: "Trabajo en grupo para el diseño del anuario de ESADA, curso 21/22. Se diseñó con una gama de color fija que también se usó como tratamiento en las fotografías, además de una estética basada en los garabatos y anotaciones a mano.",
    galleryImages: [
      nidoImg,
      nido2Img,
      nido3Img
    ],
    barcodeColors: ["#9b59b6", "#8e44ad", "#e67e22", "#f39c12", "#ecf0f1"]
  },
  {
    id: 5,
    title: "Insecta",
    category: "Diseño Gráfico",
    categories: ["Diseño Editorial", "Ilustración"],
    image: insectaImg,
    year: "2023",
    client: "Proyecto Profesional",
    role: "Diseñador Gráfico e Ilustrador",
    tools: ["Adobe InDesign", "Clip Studio Paint"],
    details: "Diseño de agenda para el año 2024, centrada en la ilustración de insectos. Cada mes representa a un tipo de insecto diferente, representado por medio de una ilustración de sus características más llamativas. La técnica imita las acuarelas en formato digital.",
    galleryImages: [
      insectaImg,
      insecta2Img,
      insecta3Img,
      insecta4Img,
      insecta5Img,
      insecta6Img,
      insecta7Img,
      insecta8Img
    ],
    barcodeColors: ["#4fc3f7", "#81c784", "#ffb74d", "#e57373", "#ba68c8"]
  },
  {
    id: 6,
    title: "Emuna",
    category: "Diseño Gráfico",
    categories: ["Ilustración", "Diseño de Packaging"],
    image: emuna4Img,
    year: "2024",
    client: "Proyecto Profesional",
    role: "Diseñador Gráfico e Ilustrador",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Clip Studio Paint"],
    details: "Baraja ilustrada del tarot de arcanos mayores realizada en grupo. En ella se añaden nuevas cartas personalizadas, todas diseñadas con una paleta reducida. Todas ellas forman una gran ilustración, ya que el referente principal fue El Jardín de las Delicias (El Bosco). También se diseñó como acompañamiento dos packagings, una funda para las cartas que se abre en forma de abanico y una caja general que contiene todos los demás accesorios de la baraja.",
    galleryImages: [
      emuna4Img,
      emunaImg,
      emuna2Img,
      emuna3Img
    ],
    barcodeColors: ["#4fc3f7", "#f39c12", "#81c784", "#e67e22", "#ecf0f1"]
  },
  {
    id: 7,
    title: "El Arte de la Guerra",
    category: "Diseño Gráfico",
    categories: ["Cartelería", "Diseño Editorial", "Logotipo"],
    image: arteGuerraImg,
    year: "2024",
    client: "Proyecto Profesional",
    role: "Diseñador Gráfico",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    details: "Rediseño de la portada del libro El Arte de la Guerra (Sun Tzu) y campaña publicitaria de editorial ficticia. Se realizaron varios carteles de libros  que muestran citas de los mismos y están tratados con rasgados en el papel. Además, se realizó un logo para una editorial ficticia y un rediseño con esta misma estética a la portada del libro central del proyecto.",
    galleryImages: [
      arteGuerraImg,
      arteGuerra2Img,
      arteGuerra3Img,
      arteGuerra4Img,
      arteGuerra5Img,
      arteGuerra6Img
    ],
    barcodeColors: ["#e70059", "#000000", "#ffffff", "#2c2c2c", "#d32f2f"]
  },
  {
    id: 8,
    title: "Chiaroscuro",
    category: "Ilustración",
    categories: ["Ilustración", "Animación"],
    image: "https://images.unsplash.com/photo-1647575211406-ae6c9d4d2553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwaG9ycm9yJTIwYW5pbWF0aW9ufGVufDF8fHx8MTc2ODI2MzUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    videoUrl: "https://drive.google.com/file/d/1ExBAXlWRj1ScKF1PMn5pj_7JxsVoMp6P/preview",
    year: "2025",
    client: "Proyecto Profesional",
    role: "Ilustrador y Animador",
    tools: ["Clip Studio Paint", "Adobe Premiere"],
    details: "Animación creada para un parque de atracciones ficticio de terror, con referente en las animaciones clásicas de Disney y el terror analógico. El personaje antagonista es un diseño que representa todos los valores contrarios a Mickey Mouse, llamándose Mortimer Cat.",
    galleryImages: [
      "https://images.unsplash.com/photo-1647575211406-ae6c9d4d2553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwaG9ycm9yJTIwYW5pbWF0aW9ufGVufDF8fHx8MTc2ODI2MzUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    barcodeColors: ["#1a1a1a", "#000000", "#8b0000", "#4a0000", "#2c0000"]
  },
  {
    id: 9,
    title: "Poemario de Moño",
    category: "Ilustración",
    categories: ["Ilustración", "Diseño Editorial"],
    image: poemarioMonoImg,
    year: "2025",
    client: "Proyecto Profesional",
    role: "Ilustrador y Diseñador Gráfico",
    tools: ["Clip Studio Paint", "Adobe InDesign"],
    details: "Poemario digital con temática desenfadada que centra las ilustraciones en las situaciones literales de los poemas de Ajo. El personaje principal se llama Moño. La técnica de ilustración se ha llevado a lo más simple y absurda posible.",
    galleryImages: [
      poemarioMonoImg,
      poemarioMono2Img,
      poemarioMono3Img,
      poemarioMono4Img,
      poemarioMono5Img,
      poemarioMono6Img,
      poemarioMono7Img
    ],
    barcodeColors: ["#3d3d8e", "#5858a8", "#ff8b94", "#ffa8b0", "#f5f5f5"]
  },
  {
    id: 10,
    title: "Alkawn: La Llamada",
    category: "Ilustración",
    categories: ["Ilustración"],
    image: alkawnImg,
    year: "2025",
    client: "Proyecto Profesional",
    role: "Ilustrador y Diseñador Gráfico",
    tools: ["Clip Studio Paint", "Adobe Photoshop", "Adobe Illustrator"],
    details: "Proyecto de trabajo de fin de grado, en el que se creó un diseño prototipo muy avanzado de un juego de mesa inspirado en el universo de H.P. Lovecraft. Funciona solo por medio de cartas, las cuales te van ofrreciendo situaciones y te dan a elegir varias opciones para continuar la partida, siendo el objetivo encontrar uno de los varios finales que tiene el juego. Las ilustraciones están tratadas con una paleta de color reducida, tomando de referencia los seres de los relatos de este autor del terror a lo desconocido.",
    galleryImages: [
      alkawnImg,
      alkawn2Img,
      alkawn3Img,
      alkawn4Img,
      alkawn5Img,
      alkawn6Img,
      alkawn7Img,
      alkawn8Img
    ],
    resultsImages: [
      alkawnResultImg,
      alkawnResult2Img,
      alkawnResult3Img,
      alkawnResult4Img,
      alkawnResult5Img
    ],
    barcodeColors: ["#1a1a1a", "#ef4d3d", "#2c2c2c", "#f5f5f5", "#8b0000"]
  },
  {
    id: 11,
    title: "Safar",
    category: "Cartelería",
    categories: ["Cartelería", "Diseño 3D"],
    image: safarImg,
    year: "2022",
    client: "Proyecto Profesional",
    role: "Diseñador Gráfico",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Blender"],
    details: "Propuesta de cartelería en grupo para exposición ficticia sobre los Reyes Magos en la historia. Se realizó una tríada de carteles que contenían las coronas de los Reyes hechas en 3D, que más tarde se trataron para integrarlas en la composición.",
    galleryImages: [
      safarImg,
      safar2Img,
      safar3Img,
      safar4Img,
      safar5Img,
      safar6Img,
      safar7Img
    ],
    barcodeColors: ["#4a7ba7", "#2c5f8d", "#1e4d7a", "#f5f5f5", "#ffffff"]
  },
  {
    id: 12,
    title: "Prácticas: General de Galerías",
    category: "Publicaciones y RRSS",
    categories: ["Publicaciones y RRSS"],
    image: generalGaleriasImg,
    year: "2023",
    client: "Prácticas Extracurriculares",
    role: "Diseñador Gráfico",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    details: "Publicaciones para las redes sociales de los centros comerciales de General de Galerías en mi periodo de prácticas extracurriculares. Los posts son de la campaña de rebajas del verano 2023 y algunas otras publicaciones llamativas de un día clave.",
    galleryImages: [
      generalGalerias2Img,
      generalGalerias3Img,
      generalGalerias4Img,
      generalGalerias5Img,
      generalGalerias6Img,
      generalGalerias7Img
    ],
    barcodeColors: ["#e70059", "#ff6b9d", "#f0f0f0", "#d5d5d5", "#8b8b8b"]
  },
  {
    id: 13,
    title: "Locked",
    category: "Ilustración",
    categories: ["Ilustración", "Diseño de Videojuegos"],
    image: lockedImg,
    year: "2024",
    client: "Proyecto Profesional",
    role: "Diseñador de Videojuegos",
    tools: ["Clip Studio Paint", "Adobe Photoshop", "Game Maker"],
    details: "Concepto y desarrollo de una demo técnica de un videojuego corto. Es tipo point and click, con estética 2D y puzles, parecido a un escape room con alguna que otra mecánica extra.",
    galleryImages: [
      lockedImg,
      lockedEstanteriaImg,
      lockedPuertaImg,
      lockedEjemploImg,
      lockedCamaImg
    ],
    barcodeColors: ["#2c3e50", "#34495e", "#7f8c8d", "#95a5a6", "#bdc3c7"]
  },
  {
    id: 14,
    title: "Ilustraciones",
    category: "Ilustración",
    categories: ["Ilustración"],
    image: ilustSilu1Img,
    year: "2020/2026",
    client: "Proyecto Personal",
    role: "Diseñador Gráfico",
    tools: ["Clip Studio Paint"],
    details: "Ilustraciones más relevantes y llamativas personales a lo largo de mis estudios y mi tiempo libre.",
    galleryImages: [
      ilustMortimerImg,
      ilustLaminas1Img,
      ilustLaminas2Img,
      ilustLaminas3Img,
      ilustMadaleneImg,
      ilustStellaImg,
      ilustSilu1Img,
      ilustSilu2Img,
      ilustSilu5Img
    ],
    barcodeColors: ["#2c3e50", "#34495e", "#7f8c8d", "#95a5a6", "#bdc3c7"]
  },
  {
    id: 15,
    title: "Diseños 3D",
    category: "Diseño 3D",
    categories: ["Diseño 3D"],
    image: disenos3dPokeballImg,
    year: "2020/2022",
    client: "Proyecto Personal",
    role: "Diseñador Gráfico",
    tools: ["Blender"],
    details: "Modelos personales más relevantes construídos en Blender a lo largo de mis estudios en la materia de diseño 3D y mi tiempo libre.",
    galleryImages: [
      disenos3dPokeballImg,
      disenos3dDragonImg,
      disenos3dCeramicImg,
      disenos3dChainChompImg,
      disenos3dChainsawImg,
      disenos3dGalaxyImg,
      disenos3dIsoRoomImg,
      disenos3dScizorImg
    ],
    barcodeColors: ["#2c3e50", "#34495e", "#7f8c8d", "#95a5a6", "#bdc3c7"]
  },
  {
    id: 16,
    title: "Omnimon",
    category: "Diseño 3D",
    categories: ["Diseño 3D"],
    image: omnimonImg,
    year: "2023",
    client: "Proyecto Personal",
    role: "Diseñador Gráfico",
    tools: ["Blender"],
    details: "Modelo 3D del digimón Omnimon. Trabajo personal construído en Blender con blocking.",
    galleryImages: [
      omnimonImg
    ],
    barcodeColors: ["#2c3e50", "#34495e", "#7f8c8d", "#95a5a6", "#bdc3c7"]
  },
  {
    id: 17,
    title: "Ilustraciones para Portfolio Web",
    category: "Ilustración",
    categories: ["Ilustración"],
    image: lockedImg,
    year: "2026",
    client: "Proyecto Personal",
    role: "Diseñador Gráfico",
    tools: ["Clip Studio Paint"],
    details: "Ilustraciones creadas para esta misma página.",
    galleryImages: [
      lockedImg
    ],
    barcodeColors: ["#2c3e50", "#34495e", "#7f8c8d", "#95a5a6", "#bdc3c7"]
  }
];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentResultsIndex, setCurrentResultsIndex] = useState<number>(0);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"recent" | "oldest">("recent");
  const categories = [
    "Todos",
    "Ilustración",
    "Cartelería",
    "Diseño Editorial",
    "Diseño 3D",
    "Publicaciones y RRSS",
    "Diseño de Packaging",
    "Tipografía",
    "Logotipo",
    "Animación",
    "Diseño de Videojuegos",
    "Diseño de la Información"
  ];

  const filteredProjects = (selectedCategory === "Todos"
    ? projects
    : projects.filter(p => {
        // Si el proyecto tiene múltiples categorías, verificar si alguna coincide
        if (p.categories && p.categories.length > 0) {
          return p.categories.includes(selectedCategory);
        }
        // Si no, usar la categoría simple
        return p.category === selectedCategory;
      })
  ).sort((a, b) => {
    const yearA = parseInt(a.year);
    const yearB = parseInt(b.year);
    return sortOrder === "recent" ? yearB - yearA : yearA - yearB;
  });

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { amount: 0.3 });

  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, amount: 0.01 });

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (selectedProject || enlargedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, enlargedImage]);

  // Resetear el índice del carrusel cuando cambia el proyecto
  useEffect(() => {
    setCurrentImageIndex(0);
    setCurrentResultsIndex(0);
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
              className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12 md:mb-8 text-sm md:text-xs"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-[#e70059] text-lg md:text-base">✱</span>
              <span className="bg-white text-black px-5 md:px-4 py-2.5 md:py-2 tracking-[0.25em] md:tracking-[0.3em]">PORTFOLIO</span>
              <span className="text-[#e70059] text-lg md:text-base">✤</span>
              <span className="tracking-[0.25em] md:tracking-[0.3em]">ポトフォリオ</span>
              <span className="text-[#e70059] text-lg md:text-base">✱</span>
            </motion.div>

            <div className="relative mb-52 md:mb-40">
              <motion.h1
                className="text-[16vw] md:text-7xl lg:text-9xl mb-6 md:mb-8 tracking-tight md:tracking-tighter leading-[0.9] md:leading-[0.9] uppercase"
                style={{ fontFamily: "'GenEi Kiwami Gothic', 'M PLUS 1p', sans-serif", fontWeight: 900 }}
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

              {/* Imagen del gato centrada y superpuesta */}
              <div className="absolute left-[58%] md:left-[57%] top-[85%] md:top-[75%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 scale-[1.5] md:scale-100">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.5,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                >
                  <img
                    src={erGatoImg}
                    alt="Er Gato"
                    className="w-[45vw] md:w-[380px] lg:w-[450px] h-auto"
                    style={{ filter: 'drop-shadow(0 0 30px rgba(231, 0, 89, 0.4))' }}
                    loading="eager"
                  />
                </motion.div>
              </div>
            </div>

            {/* Decoración inferior */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs md:text-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-[#e70059] text-base md:text-sm"></span>
              <span className="tracking-[0.2em] md:tracking-[0.2em]">作品集</span>
              <span className="text-[#e70059] text-base md:text-sm">✕</span>
              <span className="bg-[#e70059] text-white px-4 md:px-3 py-1.5 md:py-1">2024</span>
              <span className="text-[#e70059] text-base md:text-sm">✕</span>
              <span className="tracking-[0.2em] md:tracking-[0.2em]">CREATIVE</span>
              <span className="text-[#e70059] text-base md:text-sm">✱</span>
            </motion.div>

            {/* Código de barras decorativo */}
            <motion.div
              className="flex gap-0.5 md:gap-0.5 justify-center mt-16 md:mt-12"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {[...Array(20)].map((_, i) => {
                const isPink = i % 4 === 1 || i % 4 === 2;
                return (
                  <div
                    key={i}
                    className="w-1.5 md:w-1 h-20 md:h-16"
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
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="flex items-center gap-2 md:gap-3 text-xs">
                  <span className="text-[#e70059]">✱</span>
                  <span className="tracking-[0.2em] md:tracking-[0.3em]">FILTER</span>
                  <span className="text-[#e70059]">✤</span>
                  <span className="tracking-[0.15em] md:tracking-[0.2em]">フィルター</span>
                </div>

                {/* Ordenar por año */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[#e70059]">✱</span>
                  <span className="tracking-[0.15em] md:tracking-[0.2em]">ORDENAR</span>
                  <motion.button
                    onClick={() => setSortOrder(sortOrder === "recent" ? "oldest" : "recent")}
                    className="px-3 md:px-4 py-1.5 md:py-2 text-xs border-2 border-[#e70059] bg-[#e70059] text-white hover:bg-white hover:text-[#e70059] transition-all tracking-[0.1em] uppercase"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {sortOrder === "recent" ? "↓ Reciente" : "↑ Antiguo"}
                  </motion.button>
                </div>
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
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer overflow-hidden border-2 border-black hover:border-[#e70059] transition-all bg-white relative"
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
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
                    
                    {project.videoUrl ? (
                      <div className="w-full h-full bg-black relative overflow-hidden">
                        <iframe
                          src={project.videoUrl}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78%] h-full"
                          allow="autoplay"
                          title={project.title}
                          style={{ border: 'none' }}
                        />
                      </div>
                    ) : (
                      <div className={`img-protect-wrap w-full h-full ${project.id === 10 ? 'bg-[#020000] flex items-center justify-center' : project.id === 14 ? 'bg-white flex items-center justify-center' : ''}`}>
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className={`protected ${project.id === 10 ? 'w-[60%] h-auto object-contain' : project.id === 14 ? 'max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-110 transition-transform duration-700' : 'w-full h-full object-cover'} group-hover:scale-110 transition-transform duration-700`}
                          style={project.id === 5 ? { objectPosition: 'left center' } : undefined}
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 md:p-6 bg-white border-t-2 border-black group-hover:border-[#e70059] transition-colors">
                    {/* Título con tipografía importante */}
                    <h3 className="text-2xl md:text-3xl mb-4 group-hover:text-[#e70059] transition-colors tracking-tight leading-tight" style={{ fontFamily: "'GenEi Kiwami Gothic', 'M PLUS 1p', sans-serif", fontWeight: 900 }}>
                      {project.title}
                    </h3>

                    {/* Etiquetas y año */}
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {project.categories ? (
                          project.categories.map((cat, idx) => (
                            <span key={idx} className="bg-black text-white px-2 md:px-3 py-1 text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.15em] uppercase">
                              {cat}
                            </span>
                          ))
                        ) : (
                          <span className="bg-black text-white px-2 md:px-3 py-1 text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.15em] uppercase">
                            {project.category}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[#e70059]">✱</span>
                        <span className="font-mono">{project.year}</span>
                      </div>
                    </div>

                    {/* Código de barras pequeño con colores del proyecto */}
                    <div className="flex gap-0.5 mt-4">
                      {[...Array(8)].map((_, i) => {
                        const colors = project.barcodeColors || ["#e70059", "#000000"];
                        const colorIndex = i % colors.length;
                        return (
                          <div 
                            key={i} 
                            className="w-1 h-8" 
                            style={{ 
                              background: colors[colorIndex],
                              opacity: 0.6 + Math.random() * 0.4
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
                作品
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
                      {selectedProject.categories ? (
                        selectedProject.categories.map((cat, idx) => (
                          <span key={idx} className="bg-[#e70059] text-white px-2 md:px-3 py-1 tracking-[0.15em] uppercase">
                            {cat}
                          </span>
                        ))
                      ) : (
                        <span className="bg-[#e70059] text-white px-2 md:px-3 py-1 tracking-[0.15em] uppercase">
                          {selectedProject.category}
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-4 tracking-tight leading-tight" style={{ fontFamily: "'GenEi Kiwami Gothic', 'M PLUS 1p', sans-serif", fontWeight: 900 }}>
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                {/* Image Section */}
                <div className={`relative overflow-hidden ${
                  selectedProject.id === 10
                    ? 'aspect-auto py-12 md:py-16 bg-[#020000] flex items-center justify-center'
                    : selectedProject.id === 12
                    ? 'aspect-auto pb-8 md:pb-12 bg-white'
                    : selectedProject.id === 14
                    ? 'aspect-video md:aspect-[21/9] bg-white flex items-center justify-center'
                    : selectedProject.galleryImages && selectedProject.galleryImages.length === 1
                    ? 'aspect-auto pb-8 md:pb-12 bg-white'
                    : selectedProject.id === 4
                    ? 'aspect-auto bg-gray-100'
                    : selectedProject.id === 5
                    ? 'aspect-auto bg-gray-100'
                    : selectedProject.id === 6
                    ? 'aspect-auto bg-gray-100'
                    : selectedProject.id === 8
                    ? 'bg-black'
                    : selectedProject.id === 9
                    ? 'aspect-auto pb-8 md:pb-12 bg-white'
                    : 'aspect-video md:aspect-[21/9] bg-gray-100'
                }`}>
                  {selectedProject.videoUrl ? (
                    <div className="w-full flex items-center justify-center py-8 md:py-12">
                      <iframe
                        src={selectedProject.videoUrl}
                        className="w-full max-w-5xl aspect-video"
                        allow="autoplay; fullscreen"
                        title={selectedProject.title}
                        style={{ border: 'none', minHeight: '60vh' }}
                      />
                    </div>
                  ) : (
                    <div className="img-protect-wrap w-full h-full flex items-center justify-center">
                      <ImageWithFallback
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className={
                          'protected ' + (selectedProject.id === 10
                            ? 'w-full max-w-[40%] h-auto object-contain'
                            : selectedProject.id === 12
                            ? 'w-full h-auto object-contain'
                            : selectedProject.id === 14
                            ? 'w-full h-full object-contain'
                            : selectedProject.galleryImages && selectedProject.galleryImages.length === 1 && selectedProject.id !== 5
                            ? 'w-full h-auto object-contain'
                            : selectedProject.id === 4
                            ? 'w-full h-auto object-contain'
                            : selectedProject.id === 5
                            ? 'w-full h-auto object-contain'
                            : selectedProject.id === 6
                            ? 'w-full h-auto object-contain'
                            : selectedProject.id === 9
                            ? 'w-full h-auto object-contain'
                            : 'w-full h-full object-cover')
                        }
                      />
                    </div>
                  )}
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

                        {/* Informacin en badges estilo tools */}
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
                          <h3 className="text-xl md:text-2xl lg:text-3xl tracking-tight mb-2" style={{ fontFamily: "'GenEi Kiwami Gothic', 'M PLUS 1p', sans-serif", fontWeight: 900 }}>
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

                        {/* Galería de imágenes del proyecto - Solo para proyectos con múltiples imágenes */}
                        {selectedProject.galleryImages && selectedProject.galleryImages.length > 1 && (
                          <div className="mt-8">
                            {/* Proyecto 10: Dos carruseles separados */}
                            {selectedProject.id === 10 ? (
                              <div className="grid md:grid-cols-2 gap-8">
                                {/* Carrusel 1: Galería de ilustraciones */}
                                <div className="space-y-4">
                                  {/* Título del carrusel */}
                                  <div className="mb-4">
                                    <h4 className="text-lg md:text-xl tracking-tight mb-2" style={{ fontFamily: "'GenEi Kiwami Gothic', 'M PLUS 1p', sans-serif", fontWeight: 900 }}>
                                      Galería de ilustraciones
                                    </h4>
                                    <div className="flex items-center gap-2 text-xs">
                                      <span className="text-[#e70059]">✱</span>
                                      <span className="tracking-[0.2em]">イラスト</span>
                                    </div>
                                  </div>

                                  {/* Carrusel */}
                                  <div className="relative overflow-hidden bg-[#020000] border-2 border-black">
                                    {/* Contenedor de imágenes */}
                                    <motion.div
                                      className="flex"
                                      animate={{ x: `-${currentImageIndex * 100}%` }}
                                      transition={{ duration: 0.5, ease: "easeInOut" }}
                                    >
                                      {selectedProject.galleryImages.map((image, index) => (
                                        <div
                                          key={index}
                                          className="min-w-full h-[400px] md:h-[600px] flex items-center justify-center p-4 md:p-8 bg-[#020000] md:cursor-default cursor-pointer"
                                          onClick={() => window.innerWidth < 768 && setEnlargedImage(image)}
                                        >
                                          <ImageWithFallback
                                            src={image}
                                            alt={`${selectedProject.title} - Ilustración ${index + 1}`}
                                            className="protected max-w-[85%] max-h-full h-auto object-contain"
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
                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/80 text-white p-3 md:p-2 border-2 border-[#e70059] hover:bg-[#e70059] transition-all z-20"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                      >
                                        <ChevronLeft className="w-6 h-6 md:w-5 md:h-5" />
                                      </motion.button>
                                    )}

                                    {/* Botón Siguiente */}
                                    {currentImageIndex < selectedProject.galleryImages.length - 1 && (
                                      <motion.button
                                        onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/80 text-white p-3 md:p-2 border-2 border-[#e70059] hover:bg-[#e70059] transition-all z-20"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                      >
                                        <ChevronRight className="w-6 h-6 md:w-5 md:h-5" />
                                      </motion.button>
                                    )}

                                    {/* Indicador de posición */}
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 px-3 py-1.5 border border-[#e70059] z-20">
                                      <span className="text-white text-[10px] font-mono tracking-wider">
                                        {String(currentImageIndex + 1).padStart(2, '0')} / {String(selectedProject.galleryImages.length).padStart(2, '0')}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                {/* Carrusel 2: Ejemplo de resultados */}
                                <div className="space-y-4">
                                  {/* Título del carrusel */}
                                  <div className="mb-4">
                                    <h4 className="text-lg md:text-xl tracking-tight mb-2" style={{ fontFamily: "'GenEi Kiwami Gothic', 'M PLUS 1p', sans-serif", fontWeight: 900 }}>
                                      Ejemplo de resultados
                                    </h4>
                                    <div className="flex items-center gap-2 text-xs">
                                      <span className="text-[#e70059]">✱</span>
                                      <span className="tracking-[0.2em]">結果</span>
                                    </div>
                                  </div>

                                  {/* Carrusel de resultados */}
                                  <div className="relative overflow-hidden bg-[#020000] border-2 border-black">
                                    {selectedProject.resultsImages && selectedProject.resultsImages.length > 0 ? (
                                      <>
                                        {/* Contenedor de imágenes de resultados */}
                                        <motion.div
                                          className="flex"
                                          animate={{ x: `-${currentResultsIndex * 100}%` }}
                                          transition={{ duration: 0.5, ease: "easeInOut" }}
                                        >
                                          {selectedProject.resultsImages.map((image, index) => (
                                            <div
                                              key={index}
                                              className="min-w-full h-[400px] md:h-[600px] flex items-center justify-center p-4 md:p-8 bg-[#020000] md:cursor-default cursor-pointer"
                                              onClick={() => window.innerWidth < 768 && setEnlargedImage(image)}
                                            >
                                              <ImageWithFallback
                                                src={image}
                                                alt={`${selectedProject.title} - Resultado ${index + 1}`}
                                                className="protected w-full max-h-full h-auto object-contain"
                                              />
                                            </div>
                                          ))}
                                        </motion.div>

                                        {/* Barra rosa inferior fija */}
                                        <div className="h-2 bg-[#e70059]" />

                                        {/* Botón Anterior - solo si hay más de una imagen */}
                                        {selectedProject.resultsImages.length > 1 && currentResultsIndex > 0 && (
                                          <motion.button
                                            onClick={() => setCurrentResultsIndex(currentResultsIndex - 1)}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/80 text-white p-3 md:p-2 border-2 border-[#e70059] hover:bg-[#e70059] transition-all z-20"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                          >
                                            <ChevronLeft className="w-6 h-6 md:w-5 md:h-5" />
                                          </motion.button>
                                        )}

                                        {/* Botón Siguiente - solo si hay más de una imagen */}
                                        {selectedProject.resultsImages.length > 1 && currentResultsIndex < selectedProject.resultsImages.length - 1 && (
                                          <motion.button
                                            onClick={() => setCurrentResultsIndex(currentResultsIndex + 1)}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/80 text-white p-3 md:p-2 border-2 border-[#e70059] hover:bg-[#e70059] transition-all z-20"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                          >
                                            <ChevronRight className="w-6 h-6 md:w-5 md:h-5" />
                                          </motion.button>
                                        )}

                                        {/* Indicador de posición - solo si hay más de una imagen */}
                                        {selectedProject.resultsImages.length > 1 && (
                                          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 px-3 py-1.5 border border-[#e70059] z-20">
                                            <span className="text-white text-[10px] font-mono tracking-wider">
                                              {String(currentResultsIndex + 1).padStart(2, '0')} / {String(selectedProject.resultsImages.length).padStart(2, '0')}
                                            </span>
                                          </div>
                                        )}
                                      </>
                                    ) : (
                                      <>
                                        {/* Contenido placeholder */}
                                        <div className="h-[600px] flex items-center justify-center p-8 bg-[#020000]">
                                          <div className="text-center space-y-4">
                                            <div className="text-4xl text-[#e70059] opacity-50">✱</div>
                                            <p className="text-white/50 text-sm tracking-wider">Próximamente...</p>
                                          </div>
                                        </div>

                                        {/* Barra rosa inferior fija */}
                                        <div className="h-2 bg-[#e70059]" />
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              /* Carrusel normal para otros proyectos */
                              <div>
                                <div className="relative overflow-hidden bg-white">
                                  {/* Contenedor de imágenes */}
                                  <motion.div
                                    className="flex"
                                    animate={{ x: `-${currentImageIndex * 100}%` }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                  >
                                    {selectedProject.galleryImages.map((image, index) => (
                                      <div
                                        key={index}
                                        className="min-w-full flex items-center justify-center p-8 md:p-12 md:cursor-default cursor-pointer"
                                        onClick={() => window.innerWidth < 768 && setEnlargedImage(image)}
                                      >
                                        <ImageWithFallback
                                          src={image}
                                          alt={`${selectedProject.title} - Image ${index + 1}`}
                                          className={
                                            selectedProject.id === 9
                                              ? 'protected w-full h-auto object-contain'
                                              : 'protected max-w-full max-h-[70vh] object-contain'
                                          }
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
                      </div>
                    )}

                    {/* Footer decorativo */}
                    <div className="border-t-2 border-black pt-4 md:pt-6">
                      <div className="flex flex-wrap items-center justify-between gap-6">
                        {/* Info izquierda - palabras japonesas relacionadas con diseño */}
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-[#e70059]">✱</span>
                          <span className="tracking-[0.2em]">デイン</span>
                          <span className="text-[#e70059]">✤</span>
                          <span className="tracking-[0.2em]">創造</span>
                          <span className="text-[#e70059]">✱</span>
                          <span className="tracking-[0.2em]">芸術</span>
                          <span className="text-[#e70059]">✤</span>
                          <span className="tracking-[0.2em]">作品</span>
                        </div>

                        {/* Kanji decorativo grande */}
                        <div className="text-5xl md:text-6xl text-black opacity-30" style={{ fontFamily: "'GenEi Kiwami Gothic', 'M PLUS 1p', sans-serif", fontWeight: 900 }}>
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

      {/* Modal de imagen ampliada para móvil */}
      <AnimatePresence>
        {enlargedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/95 md:hidden"
            onClick={() => setEnlargedImage(null)}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute top-4 right-4 z-10 text-[#e70059]"
            >
              <X className="w-8 h-8" strokeWidth={3} />
            </button>

            {/* Imagen ampliada */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              className="w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={enlargedImage}
                alt="Imagen ampliada"
                className="protected max-w-full max-h-full object-contain"
                style={{ filter: 'drop-shadow(0 0 20px rgba(231, 0, 89, 0.3))' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}