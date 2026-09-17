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
              En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), te informamos sobre el tratamiento de tus datos personales.
            </p>
          </section>

          {/* Sección 1 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">01</span>
              <h2 className="tracking-wide">RESPONSABLE DEL TRATAMIENTO</h2>
            </div>
            <div className="space-y-1 text-gray-700">
              <p><strong>Identidad:</strong> Alejandro Molina Barnés</p>
              <p><strong>Email:</strong> <span className="text-[#e70059]">amb.charmi@gmail.com</span></p>
              <p><strong>Sitio web:</strong> https://charmi-amb.es</p>
            </div>
          </section>

          {/* Sección 2 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">02</span>
              <h2 className="tracking-wide">FINALIDAD DEL TRATAMIENTO</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>Los datos que nos facilites a través del formulario de contacto (nombre y email, así como el contenido del mensaje) se utilizan exclusivamente para responder a tus consultas o solicitudes de contacto.</p>
              <p>No se utilizan tus datos con fines publicitarios, ni se elaboran perfiles, ni se toman decisiones automatizadas.</p>
            </div>
          </section>

          {/* Sección 3 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">03</span>
              <h2 className="tracking-wide">LEGITIMACIÓN</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              La base legal para el tratamiento de tus datos es tu consentimiento, que otorgas voluntariamente al rellenar y enviar el formulario de contacto.
            </p>
          </section>

          {/* Sección 4 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">04</span>
              <h2 className="tracking-wide">DESTINATARIOS</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>Para gestionar el envío del formulario de contacto, utilizamos el servicio <strong>EmailJS</strong>. Puede que tus datos se procesen en servidores ubicados fuera del Espacio Económico Europeo; en tal caso, EmailJS aplica las garantías adecuadas conforme al RGPD (como las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea).</p>
              <p>No se ceden datos a ningún otro tercero, salvo obligación legal.</p>
            </div>
          </section>

          {/* Sección 5 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">05</span>
              <h2 className="tracking-wide">PLAZO DE CONSERVACIÓN</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Los datos se conservarán únicamente durante el tiempo necesario para atender tu consulta, y se eliminarán posteriormente salvo que exista una obligación legal de conservación superior.
            </p>
          </section>

          {/* Sección 6 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">06</span>
              <h2 className="tracking-wide">DERECHOS DE LAS PERSONAS INTERESADAS</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>Tienes derecho a acceder a tus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines para los que fueron recogidos.</p>
              <p>En determinadas circunstancias, podrás solicitar la limitación del tratamiento de tus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.</p>
              <p>Por motivos relacionados con tu situación particular, podrás oponerte al tratamiento de tus datos.</p>
              <p>Puedes ejercer estos derechos escribiendo a <span className="text-[#e70059]">amb.charmi@gmail.com</span>, indicando el derecho que deseas ejercer y adjuntando copia de tu DNI o documento equivalente.</p>
            </div>
          </section>

          {/* Sección 7 */}
          <section className="mb-10 border-l-2 border-[#e70059] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e70059] text-xs">07</span>
              <h2 className="tracking-wide">RECLAMACIÓN ANTE LA AUTORIDAD DE CONTROL</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Si consideras que el tratamiento de tus datos personales no se ajusta a la normativa vigente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (<span className="text-[#e70059]">www.aepd.es</span>).
            </p>
          </section>

          {/* Contacto */}
          <section className="mb-12 bg-gray-50 p-6 border-l-4 border-[#e70059]">
            <h3 className="tracking-wide mb-3">CONTACTO</h3>
            <p className="text-gray-700 leading-relaxed">
              Si tienes cualquier duda sobre esta política, puedes escribirnos a: <span className="text-[#e70059]">amb.charmi@gmail.com</span>
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