import { motion } from "motion/react";

export function LegalNotice() {
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
              <span className="text-xs tracking-[0.3em]">法的通知</span>
              <span className="text-[#e70059] text-sm">✱</span>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="tracking-wider"
            >
              LEGAL NOTICE
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
          {/* Introducción */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilita la siguiente información:
            </p>
          </section>

          {/* Sección 1 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">01</span>
              <h2 className="tracking-wide">DATOS IDENTIFICATIVOS</h2>
            </div>
            <div className="space-y-1 text-gray-700">
              <p><strong>Titular:</strong> Alejandro Molina Barnés</p>
              <p><strong>NIF/DNI:</strong> 78112511A</p>
              <p><strong>Domicilio:</strong> Granada, Andalucía, España</p>
              <p><strong>Email de contacto:</strong> <span className="text-[#e70059]">amb.charmi@gmail.com</span></p>
              <p><strong>Sitio web:</strong> https://charmi-amb.es</p>
            </div>
          </section>

          {/* Sección 2 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">02</span>
              <h2 className="tracking-wide">OBJETO</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Este sitio web tiene como finalidad mostrar un portfolio personal/profesional y facilitar un canal de contacto con el titular. El acceso al sitio web es gratuito, salvo el coste de la conexión a internet proporcionada por el proveedor de acceso contratado por los usuarios.
            </p>
          </section>

          {/* Sección 3 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">03</span>
              <h2 className="tracking-wide">CONDICIONES DE USO</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              El acceso y/o uso de esta web atribuye la condición de usuario, y acepta, desde dicho acceso y/o uso, las condiciones generales de uso aquí reflejadas. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que se ofrecen a través del sitio web y a no emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe y al ordenamiento legal vigente.
            </p>
          </section>

          {/* Sección 4 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">04</span>
              <h2 className="tracking-wide">PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Todos los contenidos del sitio web (textos, imágenes, diseño gráfico, código fuente, logotipos, etc.) son propiedad de Alejandro Molina Barnés o cuentan con la correspondiente autorización de uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o comunicación pública total o parcial sin autorización expresa del titular.
            </p>
          </section>

          {/* Sección 5 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">05</span>
              <h2 className="tracking-wide">EXCLUSIÓN DE RESPONSABILIDAD</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              El titular no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse de la falta de disponibilidad o continuidad del funcionamiento del sitio web, ni de la existencia de virus u otros elementos lesivos en los contenidos.
            </p>
          </section>

          {/* Sección 6 */}
          <section className="mb-12 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">06</span>
              <h2 className="tracking-wide">LEGISLACIÓN APLICABLE</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia serán competentes los Juzgados y Tribunales del domicilio del usuario, sin perjuicio de las disposiciones legales aplicables en materia de consumidores.
            </p>
          </section>

          {/* Decoración final */}
          <div className="flex items-center justify-center gap-3 pt-8 border-t border-gray-200">
            <span className="text-[#e70059] text-xs">✱</span>
            <span className="text-xs tracking-[0.3em] text-gray-400">AVISO × LEGAL</span>
            <span className="text-[#e70059] text-xs">✱</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
