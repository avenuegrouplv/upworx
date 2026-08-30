import React from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'contact' | 'machinery' | 'about', categoryId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="main-footer" className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-8 cursor-pointer" onClick={() => onNavigate('home')}>
              <svg width="30" height="30" viewBox="0 0 100 100" className="mr-3">
                <path d="M10 80 L30 60 L50 70 L80 30" fill="none" stroke="#2c9db1" strokeWidth="12" strokeLinecap="round" />
                <path d="M60 30 L80 30 L80 50" fill="none" stroke="#2c9db1" strokeWidth="12" strokeLinecap="round" />
              </svg>
              <span className="text-xl font-black tracking-tighter uppercase">
                UP<span className="text-teal-custom">WORX</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
              Premium industriālās tehnikas piegādātājs Baltijā. 
              Mēs nodrošinām pilnu ciklu - no iekārtu izvēles līdz servisa apkopei.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#facebook" 
                aria-label="Facebook"
                className="w-10 h-10 bg-zinc-900 flex items-center justify-center hover:bg-teal-custom transition-colors rounded-sm"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a 
                href="#linkedin" 
                aria-label="LinkedIn"
                className="w-10 h-10 bg-zinc-900 flex items-center justify-center hover:bg-teal-custom transition-colors rounded-sm"
              >
                 <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.97 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.55c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 12.9h-3.56v-5.61c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.71h-3.56V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[15px] font-black uppercase tracking-widest mb-8 border-b border-teal-custom/30 pb-4 inline-block">IEKĀRTAS</h4>
            <ul className="space-y-4 text-gray-400 text-[15px] font-medium text-left">
              <li><button onClick={() => onNavigate('machinery', 'metalapstrade')} className="hover:text-teal-custom transition-colors text-left w-full cursor-pointer">Metālapstrāde</button></li>
              <li><button onClick={() => onNavigate('machinery', 'lazera-griesana')} className="hover:text-teal-custom transition-colors text-left w-full cursor-pointer">Lāzera griešana</button></li>
              <li><button onClick={() => onNavigate('machinery', 'cnc-iekartas')} className="hover:text-teal-custom transition-colors text-left w-full cursor-pointer">CNC iekārtas</button></li>
              <li><button onClick={() => onNavigate('machinery', 'automatizacija')} className="hover:text-teal-custom transition-colors text-left w-full cursor-pointer">Automatizācija</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[15px] font-black uppercase tracking-widest mb-8 border-b border-teal-custom/30 pb-4 inline-block">SVARĪGI</h4>
            <ul className="space-y-4 text-gray-400 text-[15px] font-medium text-left">
              <li><button onClick={() => onNavigate('about')} className="hover:text-teal-custom transition-colors text-left w-full cursor-pointer">Par mums</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-teal-custom transition-colors text-left w-full cursor-pointer">Kontakti</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-teal-custom transition-colors text-left w-full cursor-pointer">Pieteikt atzvanu</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-teal-custom transition-colors text-left w-full cursor-pointer">Privātuma politika</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-teal-custom transition-colors text-left w-full cursor-pointer">Sīkdatņu politika</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[15px] font-black uppercase tracking-widest mb-8 border-b border-teal-custom/30 pb-4 inline-block">BIROJS</h4>
            <div className="text-gray-400 text-[15px] space-y-4 font-medium">
              <p>Rūpniecības iela 102,<br />Rīga, LV-1010, Latvija</p>
              <p>Darba laiks:<br />P-Pk: 08:30 - 17:30</p>
              <div className="pt-4">
                 <button 
                  onClick={() => onNavigate('contact')}
                  className="bg-zinc-900 border border-white/10 px-6 py-3 text-[11px] font-bold uppercase tracking-widest hover:border-teal-custom hover:text-teal-custom transition-all cursor-pointer"
                 >
                   Skatīt kartē
                 </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-400 font-heading tracking-wide">
          <p>© 2026 UPWORX I Visas tiesības aizsargātas</p>
          <p className="mt-4 md:mt-0">
            Izstrādātājs:{' '}
            <a 
              href="https://sageonmedia.eu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-teal-custom hover:text-teal-400 font-bold hover:underline transition-colors cursor-pointer ml-1 inline-flex items-center"
            >
              Sageon Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
