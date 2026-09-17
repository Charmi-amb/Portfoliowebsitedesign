import { motion } from "motion/react";

export function Cookies() {
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
              <span className="text-xs tracking-[0.3em]">クッキーポリシー</span>
              <span className="text-[#e70059] text-sm">✱</span>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="tracking-wider"
            >
              COOKIES POLICY
            </motion.h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-white/60 text-sm"
            >
              Última actualización: Septiembre 2026
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
          {/* Sección 1 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">01</span>
              <h2 className="tracking-wide">¿QUÉ SON LAS COOKIES?</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Las cookies son pequeños archivos que un sitio web puede instalar en tu ordenador o dispositivo móvil al navegar por él. Permiten, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario.
            </p>
          </section>

          {/* Sección 2 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">02</span>
              <h2 className="tracking-wide">¿QUÉ COOKIES UTILIZA ESTA WEB?</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Este sitio web <strong>(charmi-amb.es)</strong> es una web de portfolio personal y no utiliza cookies de análisis, publicidad o seguimiento de terceros.</p>
              <p>No instalamos cookies propias que requieran tu consentimiento previo.</p>
              <p>Es posible que se carguen recursos externos (como tipografías de Google Fonts) necesarios para el correcto funcionamiento visual de la web. Estos servicios pueden recibir tu dirección IP como parte del funcionamiento técnico habitual de internet, pero no instalan cookies de seguimiento.</p>
            </div>
          </section>

          {/* Sección 3 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">03</span>
              <h2 className="tracking-wide">FORMULARIO DE CONTACTO</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Si utilizas el formulario de contacto de esta web, los datos que introduzcas (nombre, email, mensaje) se envían a través del servicio <strong>EmailJS</strong> para poder responderte, y no se almacenan con fines de publicidad ni se comparten con terceros ajenos a este propósito.
            </p>
          </section>

          {/* Sección 4 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">04</span>
              <h2 className="tracking-wide">CÓMO DESACTIVAR LAS COOKIES</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>Aunque esta web no instala cookies de seguimiento, puedes configurar tu navegador para bloquear o eliminar cualquier cookie en general:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies</li>
                <li><strong>Firefox:</strong> Ajustes &gt; Privacidad y seguridad</li>
                <li><strong>Safari:</strong> Preferencias &gt; Privacidad</li>
                <li><strong>Edge:</strong> Configuración &gt; Cookies y permisos del sitio</li>
              </ul>
            </div>
          </section>

          {/* Sección 5 — Contacto */}
          <section className="mb-12 bg-gray-50 p-6 border-l-4 border-[#e70059]">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#e70059] text-xs">05</span>
              <h3 className="tracking-wide">CONTACTO</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Si tienes cualquier duda sobre esta política, puedes escribirnos a: <span className="text-[#e70059]">amb.charmi@gmail.com</span>
            </p>
          </section>

          {/* Decoración final */}
          <div className="flex items-center justify-center gap-3 pt-8 border-t border-gray-200">
            <span className="text-[#e70059] text-xs">✱</span>
            <span className="text-xs tracking-[0.3em] text-gray-400">COOKIES × POLICY</span>
            <span className="text-[#e70059] text-xs">✱</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
