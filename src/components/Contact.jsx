import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const socialLinks = [
    { platform: 'GitHub', icon: <FaGithub />, href: 'https://github.com/bante27' },
    { platform: 'LinkedIn', icon: <FaLinkedin />, href: 'https://linkedin.com/in/bante-mitiku' },
    { platform: 'Telegram', icon: <FaTelegram />, href: 'https://t.me/wubbante' },
  ];

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      detail: 'mitikubantalem@gmail.com',
      href: 'mailto:mitikubantalem@gmail.com',
      color: 'from-[#0A1E3B] to-[#1642A5]',
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      detail: '+251 927 993 894',
      href: 'tel:+251927993894',
      color: 'from-[#1642A5] to-[#2260FF]',
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      detail: 'Debre Berhan University',
      subdetail: 'Ethiopia',
      color: 'from-[#2260FF] to-[#4C84FF]',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Transmission failed');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-[#0A1E3B] overflow-hidden text-white font-sans selection:bg-[#2260FF]/30">
      {/* Keeping Background Waves per original request */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200C200 100 400 500 800 300C1200 100 1500 400 1600 500V800H-100V200Z" fill="#1642A5" opacity="0.2" />
          <path d="M1440 100C1100 50 900 400 500 200C100 0 -200 300 -300 400V800H1440V100Z" fill="#2260FF" opacity="0.1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header - Thinner Typography */}
        <motion.div className="mb-12 md:mb-20 text-center md:text-left" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <span className="text-[9px] tracking-[0.8em] text-[#2260FF] uppercase block mb-3 font-light">Connection Terminal</span>
          <h2 className="text-2xl md:text-3xl font-thin tracking-[0.3em] uppercase">
            Get in <span className="text-white/40 italic font-extralight">Touch</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            {contactInfo.map((info, i) => (
              <a key={i} href={info.href} className="block group">
                <div className="bg-white/[0.02] p-4 rounded-lg border border-white/5 group-hover:border-[#2260FF]/30 transition-all duration-700">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded bg-gradient-to-br ${info.color} flex items-center justify-center text-[14px] opacity-70 group-hover:opacity-100 transition-opacity`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-[9px] uppercase tracking-widest text-[#2260FF] font-light mb-0.5">{info.title}</div>
                      <div className="text-[11px] font-thin tracking-wider text-white/80">{info.detail}</div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-12"> {/* Large vertical gap for "thin" look */}
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                <input
                  required
                  placeholder="FULL NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-transparent border-b border-white/10 py-2 outline-none text-[10px] tracking-[0.2em] font-light focus:border-[#2260FF] transition-all placeholder:text-white/20"
                />
                <input
                  required
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-transparent border-b border-white/10 py-2 outline-none text-[10px] tracking-[0.2em] font-light focus:border-[#2260FF] transition-all placeholder:text-white/20"
                />
              </div>

              <input
                placeholder="PHONE NUMBER"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-transparent border-b border-white/10 py-2 outline-none text-[10px] tracking-[0.2em] font-light focus:border-[#2260FF] transition-all placeholder:text-white/20"
              />

              <textarea
                required
                rows="2"
                placeholder="YOUR MESSAGE"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/10 py-2 outline-none resize-none text-[10px] tracking-[0.2em] font-light focus:border-[#2260FF] transition-all placeholder:text-white/20"
              />

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-white/70 text-[#0A1E3B] px-12 py-3 rounded-full text-[10px] tracking-[0.3em] font-medium uppercase hover:bg-[#2260FF] hover:text-white transition-all duration-500 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? 'SENDING' : isSubmitted ? 'MESSAGE SENT' : 'SEND MESSAGE'}
                  <FiSend className="text-[10px]" />
                </button>

                {/* Social Nodes */}
                <div className="flex gap-8">
                  {socialLinks.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      className="text-white/20 hover:text-[#2260FF] transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <span className="text-sm">{s.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {error && <p className="text-red-400 text-[9px] tracking-widest uppercase font-light text-center md:text-left">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;