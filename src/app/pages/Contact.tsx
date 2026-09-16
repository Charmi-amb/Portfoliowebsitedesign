import { Mail, Instagram, Linkedin, Phone, Plus, Circle, Square, MapPin, Clock, Send, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import emailjs from "@emailjs/browser";
import monoYLuna from "../../imports/Mo_o_yLuna.png";

// ─── Configura EmailJS en https://emailjs.com ───────────────────────────────
// 1. Crea una cuenta gratuita y conecta tu Gmail
// 2. Crea un Email Service y copia el Service ID
// 3. Crea un Email Template con variables {{from_email}}, {{subject}}, {{message}}
// 4. Copia el Template ID y tu Public Key
const EMAILJS_SERVICE_ID  = "service_yjqsm5e";
const EMAILJS_TEMPLATE_ID = "template_sydqjm5";
const EMAILJS_PUBLIC_KEY  = "i5pejOVuudXLxyFvE";
// ────────────────────────────────────────────────────────────────────────────

export function Contact() {
  const [emailOpen, setEmailOpen] = useState(false);
  const [form, setForm] = useState({ senderEmail: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchParams.get("mensaje") === "true") {
      setTimeout(() => {
        infoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        setEmailOpen(true);
      }, 300);
    }
  }, [searchParams]);

  const handleSend = async () => {
    if (!form.senderEmail || !form.subject || !form.message) {
      setError("Por favor rellena todos los campos.");
      return;
    }
    setSending(true);
    setError("");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_email: form.senderEmail,
          subject: form.subject,
          message: form.message,
          to_email: "amb.charmi@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      setForm({ senderEmail: "", subject: "", message: "" });
    } catch {
      setError("Error al enviar. Inténtalo de nuevo.");
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "amb.charmi@gmail.com",
      subtitle: null,
      kanji: "文"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Granada, Andalucía, España",
      subtitle: null,
      kanji: "地"
    },
    {
      icon: Clock,
      label: "Disponibilidad",
      value: "Dispuesto a trabajar y empezar nuevos proyectos",
      subtitle: null,
      kanji: "時"
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", username: "@charmi_amb", href: "https://www.instagram.com/charmi_amb/" },
    { icon: Linkedin, label: "LinkedIn", username: "Alejandro Molina Barnés", href: "https://www.linkedin.com/in/alejandro-molina-barn%C3%A9s-5b64b542b/" },
    { icon: Phone, label: "WhatsApp", username: "+34 671 706 293", href: "https://wa.me/34671706293" },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section - Japanese Poster Style */}
      <section className="md:min-h-screen flex items-start md:items-center justify-center bg-[#e70059] text-white relative overflow-hidden pb-16 md:pb-0">
        {/* Mono y Luna - esquina superior derecha */}
        <img
          src={monoYLuna}
          alt=""
          loading="eager"
          className="absolute top-0 right-0 w-[90vw] md:w-[55vw] lg:w-[48vw] pointer-events-none select-none z-20"
        />

        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Plus size={100} strokeWidth={2} />
          </div>
          <div className="absolute bottom-20 right-20 text-6xl">
            ★
          </div>
          <div className="absolute top-1/2 left-1/4">
            <Circle size={80} strokeWidth={2} />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-[68vw] md:pt-0">
          <div className="max-w-5xl text-left pl-[5vw] md:pl-24 lg:pl-32">
            {/* Badge — solo desktop, encima del título */}
            <div className="hidden md:flex items-center gap-4 mb-8 text-xs">
              <span className="text-white">✱</span>
              <span className="bg-black text-white px-4 py-2 tracking-[0.3em]">CONTACT</span>
              <span className="text-white">✤</span>
              <span className="tracking-[0.3em]">お問い合わせ</span>
              <span className="text-white">✱</span>
            </div>

            <h1 className="text-[13vw] md:text-[10rem] lg:text-[13rem] tracking-tighter leading-[0.85] uppercase"
                style={{ fontFamily: "'GenEi Kiwami Gothic', 'M PLUS 1p', sans-serif", fontWeight: 900 }}>
              <span className="block">LET'S</span>
              <span className="block text-black">WORK</span>
              <span className="block">TOGETHER</span>
            </h1>

            {/* Badge — solo móvil, debajo del título */}
            <div className="flex md:hidden items-center gap-3 mt-6 text-xs">
              <span className="text-white">✱</span>
              <span className="bg-black text-white px-3 py-1.5 tracking-[0.3em]">CONTACT</span>
              <span className="text-white">✤</span>
              <span className="tracking-[0.2em]">お問い合わせ</span>
              <span className="text-white">✱</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={infoRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 opacity-5">
          <Square size={150} strokeWidth={1} />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4 text-xs">
                <span className="text-[#e70059]">✱</span>
                <span className="tracking-[0.3em]">INFO</span>
                <span className="text-[#e70059]">✤</span>
                <span className="tracking-[0.2em]">情報</span>
              </div>
              <h2 className="text-4xl md:text-6xl tracking-tighter uppercase"
                  style={{ fontFamily: "'GenEi Kiwami Gothic', 'M PLUS 1p', sans-serif", fontWeight: 900 }}>
                <span className="text-[#e70059]">INFORMACIÓN</span>
              </h2>
            </div>

            {/* Contact Cards — grid en desktop */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const isEmail = info.label === "Email";
                return (
                  <div
                    key={index}
                    className="group relative border-2 border-black hover:border-[#e70059] transition-all duration-300 p-6"
                  >
                    <motion.div
                      className="absolute inset-0 border-4 border-[#e70059] z-10 opacity-0 group-hover:opacity-70 pointer-events-none"
                      initial={{ x: 0, y: 0 }}
                      whileHover={{ x: [0, -4, 4, -4, 0], y: [0, 4, -4, 4, 0], transition: { duration: 0.4 } }}
                    />
                    <div className="absolute top-3 right-4 text-5xl text-gray-400 opacity-20 select-none">{info.kanji}</div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-black group-hover:bg-[#e70059] transition-colors flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white" size={20} strokeWidth={2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono">0{index + 1}</span>
                          <span className="text-[#e70059]">✱</span>
                        </div>
                        <h3 className="uppercase tracking-wider mb-1">{info.label}</h3>
                        <p className="mb-1 break-words text-sm">{info.value}</p>
                        {info.subtitle && <p className="text-sm text-gray-600">{info.subtitle}</p>}
                        {isEmail && (
                          <button
                            onClick={() => setEmailOpen(true)}
                            className="mt-3 flex items-center gap-2 px-3 py-1.5 bg-black hover:bg-[#e70059] text-white text-xs tracking-widest uppercase transition-colors duration-200"
                          >
                            <Send size={12} />
                            Enviar mensaje
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dialog popup email */}
            <Dialog.Root open={emailOpen} onOpenChange={setEmailOpen}>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/70 z-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white w-full max-w-lg p-8 focus:outline-none">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1 text-xs">
                        <span className="text-[#e70059]">✱</span>
                        <span className="tracking-[0.3em]">MENSAJE</span>
                        <span className="text-[#e70059]">✤</span>
                        <span className="tracking-[0.2em]">メッセージ</span>
                      </div>
                      <Dialog.Title
                        className="text-2xl tracking-tighter uppercase"
                        style={{ fontFamily: "'GenEi Kiwami Gothic', 'M PLUS 1p', sans-serif", fontWeight: 900 }}
                      >
                        Enviar <span className="text-[#e70059]">mensaje</span>
                      </Dialog.Title>
                    </div>
                    <Dialog.Close className="p-1 hover:text-[#e70059] transition-colors">
                      <X size={20} />
                    </Dialog.Close>
                  </div>

                  {sent ? (
                    <div className="text-center py-8">
                      <div className="text-4xl mb-3">✱</div>
                      <p className="text-lg tracking-wider uppercase" style={{ fontFamily: "'GenEi Kiwami Gothic', 'M PLUS 1p', sans-serif", fontWeight: 900 }}>¡Mensaje enviado!</p>
                      <p className="text-sm text-gray-500 mt-2">Te responderé lo antes posible.</p>
                      <button onClick={() => { setSent(false); setEmailOpen(false); }} className="mt-6 px-6 py-2 bg-black hover:bg-[#e70059] text-white text-xs tracking-widest uppercase transition-colors">
                        Cerrar
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs tracking-widest uppercase mb-1">Tu email</label>
                        <input
                          type="email"
                          value={form.senderEmail}
                          onChange={e => setForm({ ...form, senderEmail: e.target.value })}
                          placeholder="tu@email.com"
                          className="w-full border-2 border-black focus:border-[#e70059] outline-none px-3 py-2 text-sm transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest uppercase mb-1">Asunto</label>
                        <input
                          type="text"
                          value={form.subject}
                          onChange={e => setForm({ ...form, subject: e.target.value })}
                          placeholder="Asunto del mensaje"
                          className="w-full border-2 border-black focus:border-[#e70059] outline-none px-3 py-2 text-sm transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest uppercase mb-1">Mensaje</label>
                        <textarea
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          placeholder="Contacta conmigo..."
                          rows={5}
                          className="w-full border-2 border-black focus:border-[#e70059] outline-none px-3 py-2 text-sm transition-colors resize-none"
                        />
                      </div>
                      {error && <p className="text-[#e70059] text-xs tracking-wide">{error}</p>}
                      <button
                        onClick={handleSend}
                        disabled={sending}
                        className="w-full flex items-center justify-center gap-2 bg-black hover:bg-[#e70059] disabled:opacity-50 text-white py-3 text-sm tracking-widest uppercase transition-colors duration-200"
                      >
                        <Send size={14} />
                        {sending ? "Enviando..." : "Enviar mensaje"}
                      </button>
                    </div>
                  )}
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>

            {/* Social Links — ancho completo */}
            <div className="border-2 border-black p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="tracking-wider uppercase">Redes Sociales</span>
                <span className="text-[#e70059]">✤</span>
              </div>
              <div className="grid md:grid-cols-3 gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center gap-3 p-3 border border-black hover:bg-black hover:text-white transition-all group overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 border-4 border-[#e70059] z-10 opacity-0 group-hover:opacity-70 pointer-events-none"
                        initial={{ x: 0, y: 0 }}
                        whileHover={{ x: [0, -4, 4, -4, 0], y: [0, 4, -4, 4, 0], transition: { duration: 0.4 } }}
                      />
                      <Icon size={20} strokeWidth={2} />
                      <div className="flex-1">
                        <p className="text-sm uppercase tracking-wider">{social.label}</p>
                        <p className="text-xs opacity-60">{social.username}</p>
                      </div>
                      <span className="text-[#e70059] group-hover:text-white">→</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}