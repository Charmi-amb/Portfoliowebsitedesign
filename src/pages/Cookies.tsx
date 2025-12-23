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
              Esta Política de Cookies explica qué son las cookies, cómo las utilizamos en este sitio web, y cómo puedes gestionarlas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Al utilizar nuestro sitio web, aceptas el uso de cookies de acuerdo con esta política.
            </p>
          </section>

          {/* Sección 1 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">01</span>
              <h2 className="tracking-wide">¿QUÉ SON LAS COOKIES?</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan para hacer que los sitios web funcionen de manera más eficiente, mejorar la experiencia del usuario y proporcionar información a los propietarios del sitio.
            </p>
          </section>

          {/* Sección 2 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">02</span>
              <h2 className="tracking-wide">TIPOS DE COOKIES QUE UTILIZAMOS</h2>
            </div>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold mb-2 text-black">Cookies Estrictamente Necesarias</h3>
                <p>Son esenciales para que el sitio web funcione correctamente. Permiten la navegación básica y el acceso a áreas seguras. Sin estas cookies, el sitio no puede funcionar adecuadamente.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black">Cookies de Rendimiento</h3>
                <p>Recopilan información sobre cómo los visitantes utilizan el sitio web, como qué páginas son las más visitadas. Toda la información que recopilan estas cookies es anónima y se utiliza solo para mejorar el funcionamiento del sitio.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black">Cookies de Funcionalidad</h3>
                <p>Permiten que el sitio web recuerde las elecciones que haces (como tu idioma o región) y proporcionan características mejoradas y más personales.</p>
              </div>
            </div>
          </section>

          {/* Sección 3 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">03</span>
              <h2 className="tracking-wide">COOKIES DE TERCEROS</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              Algunos servicios externos que utilizamos pueden establecer sus propias cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              <li><strong>Google Analytics:</strong> Para analizar el uso del sitio web y mejorar la experiencia del usuario</li>
              <li><strong>Servicios de redes sociales:</strong> Si compartes contenido en redes sociales</li>
            </ul>
          </section>

          {/* Sección 4 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">04</span>
              <h2 className="tracking-wide">CÓMO GESTIONAR LAS COOKIES</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies que ya están en tu dispositivo y puedes configurar la mayoría de los navegadores para evitar que se coloquen.</p>
              <p className="mt-4"><strong>Configuración por navegador:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies</li>
                <li><strong>Firefox:</strong> Opciones &gt; Privacidad y seguridad</li>
                <li><strong>Safari:</strong> Preferencias &gt; Privacidad</li>
                <li><strong>Edge:</strong> Configuración &gt; Privacidad, búsqueda y servicios</li>
              </ul>
              <p className="mt-4 text-sm italic">
                Ten en cuenta que si decides bloquear las cookies, algunas funciones del sitio web pueden no funcionar correctamente.
              </p>
            </div>
          </section>

          {/* Sección 5 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">05</span>
              <h2 className="tracking-wide">DURACIÓN DE LAS COOKIES</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>Cookies de sesión:</strong> Se eliminan automáticamente cuando cierras el navegador.</p>
              <p><strong>Cookies persistentes:</strong> Permanecen en tu dispositivo durante un período de tiempo específico o hasta que las elimines manualmente.</p>
            </div>
          </section>

          {/* Sección 6 */}
          <section className="mb-12 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">06</span>
              <h2 className="tracking-wide">ACTUALIZACIONES DE ESTA POLÍTICA</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios en nuestras prácticas o por otras razones operativas, legales o reglamentarias. Te recomendamos revisar esta página regularmente para estar informado sobre cómo utilizamos las cookies.
            </p>
          </section>

          {/* Contacto */}
          <section className="mb-12 bg-gray-50 p-6 border-l-4 border-[#e70059]">
            <h3 className="tracking-wide mb-3">CONTACTO</h3>
            <p className="text-gray-700 leading-relaxed">
              Si tienes preguntas sobre nuestra Política de Cookies, puedes contactarnos a través del formulario de contacto o enviando un correo electrónico a: <span className="text-[#e70059]">tu-email@gmail.com</span>
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
