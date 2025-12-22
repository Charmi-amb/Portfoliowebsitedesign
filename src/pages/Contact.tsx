import { Mail, Instagram, Linkedin, Twitter, Plus, Circle, Square, MapPin, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Te contactaré pronto.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contacto@tuportafolio.com",
      subtitle: "Respondo en 24-48h",
      kanji: "📧"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Ciudad, País",
      subtitle: "Trabajo remoto",
      kanji: "📍"
    },
    {
      icon: Clock,
      label: "Disponibilidad",
      value: "Abierto a proyectos",
      subtitle: "Inicio: Dic 2025",
      kanji: "⏰"
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", username: "@tuusuario" },
    { icon: Linkedin, label: "LinkedIn", username: "Tu Nombre" },
    { icon: Twitter, label: "Twitter", username: "@tuusuario" }
  ];

  return (
    <div className="bg-black">
      {/* Hero Section - Japanese Poster Style */}
      <section className="min-h-screen flex items-center justify-center bg-[#e70059] text-white relative overflow-hidden">
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

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Header tipo status */}
            <div className="flex items-center justify-center gap-4 mb-8 text-xs">
              <span className="text-white">✱</span>
              <span className="bg-black text-white px-4 py-2 tracking-[0.3em]">CONTACT</span>
              <span className="text-white">✤</span>
              <span className="tracking-[0.3em]">お問い合わせ</span>
              <span className="text-white">✱</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-9xl mb-8 tracking-tighter leading-[0.9] uppercase" 
                style={{ fontFamily: "'GenEi Kiwami Gothic', -apple-system, sans-serif" }}>
              <span className="block">LET'S</span>
              <span className="block text-black">WORK</span>
              <span className="block">TOGETHER</span>
            </h1>

            <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              ¿Tienes un proyecto en mente?<br/>
              Hagámoslo realidad juntos
            </p>

            {/* Decoración inferior */}
            <div className="flex items-center justify-center gap-4 mt-8 text-xs">
              <span className="text-white">✱</span>
              <span className="tracking-[0.2em]">連絡</span>
              <span className="text-white">✕</span>
              <span className="bg-white text-[#e70059] px-3 py-1">2024</span>
              <span className="text-white">✕</span>
              <span className="tracking-[0.2em]">CREATIVE</span>
              <span className="text-white">✱</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 opacity-5">
          <Square size={150} strokeWidth={1} />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form Column */}
              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4 text-xs">
                    <span className="text-[#e70059]">✱</span>
                    <span className="tracking-[0.3em]">FORM</span>
                    <span className="text-[#e70059]">✤</span>
                    <span className="tracking-[0.2em]">フォーム</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl mb-4 tracking-tighter uppercase" 
                      style={{ fontFamily: "'GenEi Kiwami Gothic', -apple-system, sans-serif" }}>
                    ENVÍAME UN <span className="text-[#e70059]">MENSAJE</span>
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm tracking-wider uppercase">
                        Nombre *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Tu nombre"
                        className="border-2 border-black focus:border-[#e70059] rounded-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm tracking-wider uppercase">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu@email.com"
                        className="border-2 border-black focus:border-[#e70059] rounded-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm tracking-wider uppercase">
                      Asunto *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="¿De qué trata tu proyecto?"
                      className="border-2 border-black focus:border-[#e70059] rounded-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm tracking-wider uppercase">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntame sobre tu proyecto, ideas, presupuesto y tiempos..."
                      rows={6}
                      className="border-2 border-black focus:border-[#e70059] rounded-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-black hover:bg-[#e70059] text-white border-2 border-black hover:border-[#e70059] px-8 py-6 text-base tracking-wider uppercase transition-all duration-300"
                  >
                    Enviar Mensaje ✱
                  </Button>
                </form>

                {/* Código de barras decorativo */}
                <div className="flex gap-0.5 mt-8">
                  {[...Array(15)].map((_, i) => {
                    const isPink = i % 3 === 1;
                    return (
                      <div 
                        key={i} 
                        className="w-1 h-16" 
                        style={{ 
                          background: isPink ? '#e70059' : '#000000',
                          opacity: 0.5 + Math.random() * 0.5
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>

              {/* Contact Info Column */}
              <div className="space-y-8">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4 text-xs">
                    <span className="text-[#e70059]">✱</span>
                    <span className="tracking-[0.3em]">INFO</span>
                    <span className="text-[#e70059]">✤</span>
                    <span className="tracking-[0.2em]">情報</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl mb-4 tracking-tighter uppercase" 
                      style={{ fontFamily: "'GenEi Kiwami Gothic', -apple-system, sans-serif" }}>
                    <span className="text-[#e70059]">INFORMACIÓN</span>
                  </h2>
                </div>

                {/* Contact Cards */}
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="group relative border-2 border-black hover:border-[#e70059] transition-all duration-300 p-4 md:p-6"
                    >
                      <div className="absolute top-3 right-3 md:top-4 md:right-4 text-2xl md:text-3xl opacity-20">
                        {info.kanji}
                      </div>
                      
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-black group-hover:bg-[#e70059] transition-colors flex items-center justify-center flex-shrink-0">
                          <Icon className="text-white" size={20} strokeWidth={2} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono">0{index + 1}</span>
                            <span className="text-[#e70059]">✱</span>
                          </div>
                          <h3 className="uppercase tracking-wider mb-1 text-sm md:text-base">{info.label}</h3>
                          <p className="mb-1 text-sm md:text-base break-words">{info.value}</p>
                          <p className="text-xs md:text-sm text-gray-600">{info.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Social Links */}
                <div className="border-2 border-black p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="tracking-wider uppercase">Redes Sociales</span>
                    <span className="text-[#e70059]">✤</span>
                  </div>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href="#"
                          className="flex items-center gap-3 p-3 border border-black hover:bg-black hover:text-white transition-all group"
                        >
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
          </div>
        </div>
      </section>
    </div>
  );
}