import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Loader2, CheckCircle, XCircle, MapPin, Linkedin, Github, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);
    setStatus('idle');

    emailjs
      .sendForm(
        'service_ap5quuk',
        'template_f9tkkne',
        formRef.current,
        { publicKey: '6jyFeXZCNSYpqM0f4' }
      )
      .then(
        () => {
          setStatus('success');
          setIsLoading(false);
          formRef.current?.reset();
          setTimeout(() => setStatus('idle'), 5000);
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('error');
          setIsLoading(false);
        },
      );
  };

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 bg-[#0f1115] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[20%] w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Column: Contact Info & Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:pt-10"
          >
            <div>
              <h2 className="text-sm font-semibold text-blue-400 tracking-wider uppercase mb-2">
                Contact
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's discuss your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  next big project.
                </span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Interested in working together? Fill out the form or reach out via email. I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email Me</h4>
                  <p className="text-gray-400 text-sm">projectcsd07@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-purple-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-400 text-sm">Depok, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Social Proof / Links */}
            <div className="pt-8 border-t border-white/10">
              <h4 className="text-gray-400 text-sm mb-4">Connect on Socials</h4>
              <div className="flex gap-4">
                {/* Github */}
                <a
                  href="https://github.com/candrasdkd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors border border-white/5"
                >
                  <Github size={20} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/candrasdk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors border border-white/5"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
          >
            <form ref={formRef} className="space-y-6" onSubmit={sendEmail}>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#0a0a0a]/50 p-4 rounded-xl border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none text-white transition-all placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-[#0a0a0a]/50 p-4 rounded-xl border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none text-white transition-all placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    className="w-full bg-[#0a0a0a]/50 p-4 rounded-xl border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none text-white resize-none transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-6 font-bold rounded-xl transition-all flex items-center justify-center gap-2 group
                  ${isLoading
                    ? 'bg-gray-800 cursor-not-allowed text-gray-500'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/25'}
                `}
              >
                {isLoading ? (
                  <>Sending... <Loader2 className="animate-spin" size={18} /></>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              <div className="h-10"> {/* Fixed height to prevent layout shift */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-green-400 bg-green-400/10 p-3 rounded-lg border border-green-400/20"
                  >
                    <CheckCircle size={16} /> <span>Message sent successfully!</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20"
                  >
                    <XCircle size={16} /> <span>Failed to send. Please try again.</span>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>

        <div className="mt-20 border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} CsDev. Built with React & Tailwind.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;