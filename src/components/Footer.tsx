import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'contact' | 'machinery' | 'about' | 'career', categoryId?: string) => void;
  onOpenCookieSettings?: () => void;
  onOpenPrivacyPolicy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCookieSettings, onOpenPrivacyPolicy }) => {
  return (
    <footer id="main-footer" className="bg-black text-white pt-10 sm:pt-12 pb-6 overflow-x-clip">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 mb-6 sm:mb-8 items-start">
          {/* Kolonna 1: Logo un apraksts */}
          <div className="col-span-1 lg:col-span-4 xl:col-span-4 lg:pr-6">
            <div className="flex items-center mb-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <svg width="28" height="28" viewBox="0 0 100 100" className="mr-3">
                <path d="M10 80 L30 60 L50 70 L80 30" fill="none" stroke="#2c9db1" strokeWidth="12" strokeLinecap="round" />
                <path d="M60 30 L80 30 L80 50" fill="none" stroke="#2c9db1" strokeWidth="12" strokeLinecap="round" />
              </svg>
              <span className="text-xl font-black tracking-tighter uppercase">
                UP<span className="text-teal-custom">WORX</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4 text-[14px] sm:text-[15px]">
              Premium industriālās tehnikas piegādātājs Baltijā. 
              Mēs nodrošinām pilnu ciklu - no iekārtu izvēles līdz servisa apkopei.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#facebook" 
                aria-label="Facebook"
                className="w-9 h-9 bg-zinc-900 flex items-center justify-center hover:bg-teal-custom transition-colors rounded-sm"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a 
                href="#linkedin" 
                aria-label="LinkedIn"
                className="w-9 h-9 bg-zinc-900 flex items-center justify-center hover:bg-teal-custom transition-colors rounded-sm"
              >
                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.97 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.55c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 12.9h-3.56v-5.61c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.71h-3.56V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28z"/></svg>
              </a>
            </div>
          </div>

          {/* Labā puse ar 3 vienmērīgi izvietotiem stabiņiem: Iekārtas, Navigācija (pa vidu), Kontaktinformācija */}
          <div className="col-span-1 lg:col-span-8 xl:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-8 xl:gap-10">
              {/* Kolonna: IEKĀRTAS */}
              <div>
                <h4 className="text-[14px] sm:text-[15px] font-black uppercase tracking-widest mb-4 border-b border-teal-custom/30 pb-2 inline-block">
                  IEKĀRTAS
                </h4>
                <ul className="space-y-2.5 text-gray-400 text-[14px] sm:text-[15px] font-medium text-left">
                  <li><button onClick={() => onNavigate('machinery', 'metalapstrade')} className="hover:text-teal-custom transition-colors text-left w-full cursor-pointer">Metālapstrāde</button></li>
                  <li><button onClick={() => onNavigate('machinery', 'lazera-griesana')} className="hover:text-teal-custom transition-colors text-left w-full cursor-pointer">Lāzera griešana</button></li>
                  <li><button onClick={() => onNavigate('machinery', 'cnc-iekartas')} className="hover:text-teal-custom transition-colors text-left w-full cursor-pointer">CNC iekārtas</button></li>
                  <li><button onClick={() => onNavigate('machinery', 'automatizacija')} className="hover:text-teal-custom transition-colors text-left w-full cursor-pointer">Automatizācija</button></li>
                </ul>
              </div>

              {/* Kolonna: NAVIGĀCIJA (atrodas tieši pa vidu starp Iekārtas un Kontaktinformācija) */}
              <div>
                <h4 className="text-[14px] sm:text-[15px] font-black uppercase tracking-widest mb-4 border-b border-teal-custom/30 pb-2 inline-block">
                  NAVIGĀCIJA
                </h4>
                <ul className="space-y-2.5 text-gray-400 text-[14px] sm:text-[15px] font-medium text-left">
                  <li><button onClick={() => onNavigate('home')} className="hover:text-teal-custom transition-colors text-left w-full cursor-pointer">Sākums</button></li>
                  <li><button onClick={() => onNavigate('about')} className="hover:text-teal-custom transition-colors text-left w-full cursor-pointer">Par mums</button></li>
                  <li><button onClick={() => onNavigate('machinery')} className="hover:text-teal-custom transition-colors text-left w-full cursor-pointer">Iekārtas</button></li>
                  <li><button onClick={() => onNavigate('career')} className="hover:text-teal-custom transition-colors text-left w-full cursor-pointer">Karjera</button></li>
                  <li><button onClick={() => onNavigate('contact')} className="hover:text-teal-custom transition-colors text-left w-full cursor-pointer">Kontakti</button></li>
                </ul>
              </div>

              {/* Kolonna: KONTAKTINFORMĀCIJA */}
              <div>
                <h4 className="text-[14px] sm:text-[15px] font-black uppercase tracking-widest mb-4 border-b border-teal-custom/30 pb-2 inline-block">
                  KONTAKTINFORMĀCIJA
                </h4>
                <div className="text-gray-400 text-[14px] sm:text-[15px] space-y-2.5 font-medium">
                  <p>
                    SIA Upworx, Reģ.Nr. 50203706491
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-custom shrink-0" />
                    <span className="break-words">Ošu ceļš 11B, Jelgava, LV-3003</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-teal-custom shrink-0" />
                    <a href="tel:+37126474339" className="hover:text-teal-custom transition-colors">
                      +371 26474339
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-teal-custom shrink-0" />
                    <a href="mailto:info@upworx.lv" className="hover:text-teal-custom transition-colors">
                      info@upworx.lv
                    </a>
                  </p>
                  <p className="text-zinc-400">
                    Darba laiks: P-Pk: 08:30 - 17:30
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Apakšējā josla: Kreisajā pusē autortiesības, centrā pa vidu ekrānam Privātuma un Sīkdatņu politika, labajā pusē Izstrādātājs */}
        <div className="border-t border-white/5 pt-5 flex flex-col md:grid md:grid-cols-3 items-center text-[14px] sm:text-[15px] text-gray-400 font-medium gap-3 md:gap-0">
          <p className="text-center md:text-left">© 2026 UPWORX I Visas tiesības aizsargātas</p>

          <div className="flex items-center justify-center gap-5 text-center">
            <button 
              onClick={() => {
                if (onOpenPrivacyPolicy) {
                  onOpenPrivacyPolicy();
                } else {
                  onNavigate('about');
                }
              }} 
              className="hover:text-teal-custom transition-colors cursor-pointer"
            >
              Privātuma politika
            </button>
            <span className="text-zinc-600 select-none">|</span>
            <button 
              onClick={() => {
                if (onOpenCookieSettings) {
                  onOpenCookieSettings();
                } else {
                  onNavigate('about');
                }
              }} 
              className="hover:text-teal-custom transition-colors cursor-pointer"
            >
              Sīkdatņu politika
            </button>
          </div>

          <p className="text-center md:text-right">
            Izstrādātājs:{' '}
            <a 
              href="https://sageonmedia.eu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-teal-custom hover:text-teal-400 hover:underline transition-colors cursor-pointer ml-1 inline-flex items-center"
            >
              Sageon Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
