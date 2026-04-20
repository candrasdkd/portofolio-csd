"use client";

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Send, Loader2, CheckCircle, XCircle,
  MapPin, Linkedin, Github, Phone, MessageSquare,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const CONTACT_ITEMS = [
  {
    icon: Mail,
    titleKey: 'contact.email',
    value: 'projectcsd07@gmail.com',
    href: 'mailto:projectcsd07@gmail.com',
    color: 'text-primary-light',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
    hoverBorder: 'hover:border-primary/50',
  },
  {
    icon: Phone,
    titleKey: 'contact.phone',
    value: '085156775933',
    href: 'tel:085156775933',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    border: 'border-secondary/20',
    hoverBorder: 'hover:border-secondary/50',
  },
  {
    icon: MapPin,
    titleKey: 'contact.location',
    value: 'Depok, Indonesia',
    href: 'https://maps.google.com/?q=Depok,Indonesia',
    color: 'text-accent-light',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
    hoverBorder: 'hover:border-accent/50',
  },
];

const SOCIALS = [
  {
    icon: Github,
    href: 'https://github.com/candrasdkd',
    label: 'GitHub',
    color: 'hover:border-white/30 hover:text-white',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/candrasdk/',
    label: 'LinkedIn',
    color: 'hover:border-[#0A66C2]/60 hover:text-[#0A66C2]',
  },
];

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsLoading(true);
    setStatus('idle');

    emailjs
      .sendForm('service_ap5quuk', 'template_f9tkkne', formRef.current, { publicKey: '6jyFeXZCNSYpqM0f4' })
      .then(() => {
        setStatus('success');
        setIsLoading(false);
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
        console.error('FAILED...', error);
        setStatus('error');
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="relative py-32 px-4 md:px-8 bg-darker overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="orb orb-primary w-[500px] h-[500px] top-0 right-0 opacity-30" />
        <div className="orb orb-secondary w-[400px] h-[400px] bottom-0 left-0 opacity-25" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-6 inline-flex">
            <MessageSquare size={13} />
            {t('contact.title')}
          </span>
          <h2 className="section-heading text-white mt-4 mb-2">
            {t('contact.heading1')} <span className="text-gradient">{t('contact.heading2')}</span>
          </h2>
          <div className="gradient-divider w-32 mx-auto mt-4 mb-4" />
          <p className="text-slate-400 text-base max-w-lg mx-auto">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Contact items */}
            {CONTACT_ITEMS.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-4 p-5 card-premium rounded-2xl border ${item.border} ${item.hoverBorder} transition-all group`}
              >
                <div className={`w-12 h-12 ${item.bg} border ${item.border} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <item.icon size={20} className={item.color} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">{t(item.titleKey)}</p>
                  <p className={`font-semibold text-sm text-slate-200 group-hover:${item.color} transition-colors`}>{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <div className="pt-4">
              <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-4">{t('contact.socials')}</p>
              <div className="flex gap-3">
                {SOCIALS.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`p-3.5 glass-effect rounded-2xl text-slate-400 border border-white/5 transition-all hover:-translate-y-1 ${s.color}`}
                  >
                    <s.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="relative group">
              {/* Animated glow border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 rounded-[2rem] blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative glass-strong p-8 md:p-10 rounded-[2rem] border border-white/8 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-primary/15 border border-primary/25 rounded-xl flex items-center justify-center">
                    <Send size={14} className="text-primary-light" />
                  </div>
                  {t('contact.sendMsg')}
                </h3>

                <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">
                        {t('contact.formName')}
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        required
                        placeholder="John Doe"
                        className="input-premium"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">
                        {t('contact.formEmail')}
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        required
                        placeholder="john@example.com"
                        className="input-premium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">
                      {t('contact.formMessage')}
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      required
                      placeholder="Tell me about your project..."
                      className="input-premium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-4 px-8 font-black rounded-2xl transition-all flex items-center justify-center gap-3 relative overflow-hidden text-sm ${
                      isLoading
                        ? 'bg-slate-800 cursor-not-allowed text-slate-500'
                        : 'btn-primary text-white'
                    }`}
                  >
                    {isLoading ? (
                      <><Loader2 className="animate-spin" size={18} />{t('contact.sending')}</>
                    ) : (
                      <><Send size={16} />{t('contact.sendMsg')}</>
                    )}
                  </button>

                  {/* Status messages */}
                  <div className="min-h-[48px]">
                    <AnimatePresence>
                      {status === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-3 text-sm font-bold text-green-400 bg-green-400/8 p-4 rounded-xl border border-green-400/20"
                        >
                          <CheckCircle size={18} />
                          <span>{t('contact.success')}</span>
                        </motion.div>
                      )}
                      {status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-3 text-sm font-bold text-red-400 bg-red-400/8 p-4 rounded-xl border border-red-400/20"
                        >
                          <XCircle size={18} />
                          <span>{t('contact.error')}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24">
          <div className="gradient-divider mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} <span className="text-white font-bold">CsDev</span>. {t('footer.rights')}
            </p>
            <p className="text-slate-600 text-sm italic">{t('footer.builtWith')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
