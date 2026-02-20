import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download, Loader2 } from 'lucide-react';
import { HERO_DATA } from '@/constants';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import CVTemplate from '@/components/CVTemplate';
import { createRoot } from 'react-dom/client';

const Hero: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    try {
      // 1. Create a temporary container that is visible but absolutely positioned far away.
      // html2canvas sometimes struggles with display: none or completely off-screen DOM nodes if they don't load styling/fonts.
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-10000px';
      tempContainer.style.top = '0px';
      tempContainer.style.width = '210mm'; // A4 width
      tempContainer.style.backgroundColor = 'white'; // ensure background is recorded
      document.body.appendChild(tempContainer);

      // 2. Render the CVTemplate component into the temporary container
      const root = createRoot(tempContainer);

      // We must wait for the React render to finish before capturing.
      await new Promise<void>((resolve) => {
        root.render(<CVTemplate />);
        // Wait 1.5 seconds for fonts to load and the DOM layout to completely settle.
        setTimeout(resolve, 1500);
      });

      // 3. Find the rendered template and capture it
      const element = tempContainer.querySelector('#cv-template') as HTMLElement;
      if (!element) throw new Error("Template not found");

      await document.fonts.ready; // Explicitly ensure fonts are loaded 

      const imgData = await toPng(element, {
        quality: 1,
        pixelRatio: 2,
      });

      const elemWidth = element.offsetWidth;
      const elemHeight = element.offsetHeight;

      const pdf = new jsPDF('p', 'mm', 'a4');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (elemHeight * pdfWidth) / elemWidth;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`CV_${HERO_DATA.name.replace(/\s+/g, '_')}.pdf`);

      // 4. Cleanup
      root.unmount();
      document.body.removeChild(tempContainer);

    } catch (error) {
      console.error('Failed to generate CV', error);
      alert('Terdapat kesalahan saat mengunduh CV. Silakan coba lagi.');
    } finally {
      setIsDownloading(false);
    }
  };


  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
            Hello, I'm {HERO_DATA.name}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            {HERO_DATA.role}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {HERO_DATA.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 md:px-8 md:py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.3)] w-full sm:w-auto"
            >
              View My Work
            </a>

            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className="px-6 py-3 md:px-8 md:py-4 bg-white text-gray-900 rounded-full font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto disabled:opacity-70 disabled:hover:scale-100"
            >
              {isDownloading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Download size={20} />
                  Download CV
                </>
              )}
            </button>

            <a
              href="#contact"
              className="px-6 py-3 md:px-8 md:py-4 bg-transparent border border-gray-700 hover:border-gray-500 text-white rounded-full font-semibold transition-all hover:bg-gray-800 w-full sm:w-auto"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <a
              href={HERO_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/50 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors border border-gray-800"
            >
              <Github size={20} />
            </a>

            <a
              href={HERO_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/50 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors border border-gray-800"
            >
              <Linkedin size={20} />
            </a>
          </div>

        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;