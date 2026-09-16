import { motion } from "motion/react";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero minimalista */}
      <motion.div 
        className="bg-black text-white py-16 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <span className="text-[#e70059] text-sm">✱</span>
              <span className="text-xs tracking-[0.3em]">プライバシーポリシー</span>
              <span className="text-[#e70059] text-sm">✱</span>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="tracking-wider"
            >
              PRIVACY POLICY
            </motion.h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-white/60 text-sm"
            >
              Última actualización: Diciembre 2024
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Contenido */}
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* Introducción */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas a través de este sitio web de portafolio.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nos comprometemos a proteger tu privacidad y a ser transparentes sobre qué datos recopilamos y cómo los utilizamos.
            </p>
          </section>

          {/* Sección 1 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">01</span>
              <h2 className="tracking-wide">INFORMACIÓN QUE RECOPILAMOS</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>Información de contacto:</strong> Cuando utilizas el formulario de contacto, recopilamos tu nombre, correo electrónico y mensaje.</p>
              <p><strong>Datos de navegación:</strong> Información técnica como dirección IP, tipo de navegador, y páginas visitadas mediante cookies y tecnologías similares.</p>
            </div>
          </section>

          {/* Sección 2 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">02</span>
              <h2 className="tracking-wide">USO DE LA INFORMACIÓN</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>Utilizamos la información recopilada para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responder a tus consultas y mensajes</li>
                <li>Mejorar la experiencia de usuario en el sitio web</li>
                <li>Analizar el uso del sitio para mejoras futuras</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </div>
          </section>

          {/* Secci��n 3 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">03</span>
              <h2 className="tracking-wide">PROTECCIÓN DE DATOS</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal contra acceso no autorizado, pérdida, alteración o divulgación. Sin embargo, ningún método de transmisión por Internet es 100% seguro.
            </p>
          </section>

          {/* Sección 4 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">04</span>
              <h2 className="tracking-wide">COMPARTIR INFORMACIÓN</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              No vendemos ni compartimos tu información personal con terceros, excepto en los siguientes casos:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              <li>Cuando sea requerido por ley o por autoridades competentes</li>
              <li>Con proveedores de servicios que nos ayudan a operar el sitio web (bajo acuerdos de confidencialidad)</li>
            </ul>
          </section>

          {/* Sección 5 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">05</span>
              <h2 className="tracking-wide">TUS DERECHOS</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>Tienes derecho a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acceder a tu información personal</li>
                <li>Solicitar la corrección de datos inexactos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos</li>
                <li>Solicitar la portabilidad de tus datos</li>
              </ul>
            </div>
          </section>

          {/* Contacto */}
          <section className="mb-12 bg-gray-50 p-6 border-l-4 border-[#e70059]">
            <h3 className="tracking-wide mb-3">CONTACTO</h3>
            <p className="text-gray-700 leading-relaxed">
              Si tienes preguntas sobre esta Política de Privacidad o deseas ejercer tus derechos, puedes contactarnos a través del formulario de contacto o enviando un correo electrónico a: <span className="text-[#e70059]">tu-email@gmail.com</span>
            </p>
          </section>

          {/* Decoración final */}
          <div className="flex items-center justify-center gap-3 pt-8 border-t border-gray-200">
            <span className="text-[#e70059] text-xs">✱</span>
            <span className="text-xs tracking-[0.3em] text-gray-400">PRIVACY × POLICY</span>
            <span className="text-[#e70059] text-xs">✱</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}