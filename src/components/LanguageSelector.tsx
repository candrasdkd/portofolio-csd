import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    // We are supporting English (en) and Indonesian (id)
    const languages = [
        { code: 'en', label: 'English' },
        { code: 'id', label: 'Bahasa Indonesia' },
    ];

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 p-2 rounded-full lg:rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium"
                aria-label="Select Language"
            >
                <Globe size={18} />
                <span className="hidden lg:inline">{currentLang.code.toUpperCase()}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-40 bg-card border border-gray-800 rounded-xl shadow-2xl overflow-hidden z-50 py-2"
                    >
                        {languages.map((lng) => (
                            <button
                                key={lng.code}
                                onClick={() => changeLanguage(lng.code)}
                                className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-white/5 ${i18n.language === lng.code ? 'text-primary font-semibold bg-white/5' : 'text-gray-300'
                                    }`}
                            >
                                {lng.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSelector;
