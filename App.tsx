
import React, { useState, useEffect, useRef } from 'react';
import { SplitFlapText } from './components/SplitFlapText';
import { PROJECTS, NAV_ITEMS } from './constants';

const Reveal = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.1 });
    
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, []);

  return (
    <div ref={domRef} className={`reveal-view ${isVisible ? 'opacity-100 transform-none blur-0' : 'reveal-hidden'}`}>
      {children}
    </div>
  );
};

const ServiceManifest = () => {
  const careerLogs = [
    { 
      date: '2024 - 2025', 
      company: 'ONTARIO GOVERNMENT', 
      role: 'SOFTWARE DEVELOPER', 
      msg: 'Collaborated in an AGILE team to develop an internal AI-powered workflow tool using Python and Flask, integrating LLMs and RAG through LangChain and Azure databases. Built CI/CD pipelines with GitHub Actions and Docker for automated testing and deployment, managed data processing for 1,000+ documents across SQL and NoSQL databases, and automated intake for 300+ projects with Power Automate to improve efficiency for solution architects.' 
    },
    { 
      date: '2025 - 2025', 
      company: 'TORONTO METROPOLITAN UNIVERSITY', 
      role: 'RESEARCH ASSISTANT', 
      msg: 'Developed an ESP32-based physical controller in C++ (PlatformIO) to navigate GIS data visualizations, integrating real-time interaction between hardware, Python backend services, and Mapbox front-end using WebSockets.' 
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto bg-[#F5E7C6] border-4 border-[#222222] shadow-[12px_12px_0px_#222222] relative overflow-hidden">
      {/* Manifest Header */}
      <div className="bg-[#222222] text-[#FAF3E1] p-6 flex justify-between items-center border-b-4 border-[#222222]">
        <div className="flex flex-col">
          <span className="mono text-[10px] font-black tracking-[0.3em] text-[#FA8112]">OFFICIAL SERVICE RECORD</span>
          <h3 className="text-xl font-black tracking-tight uppercase">Personnel History // 03-Nagashima</h3>
        </div>
        <div className="hidden md:flex flex-col items-end opacity-40">
          <span className="mono text-[9px] font-bold">FORM_ID: CTA-094-B</span>
          <span className="mono text-[9px] font-bold">STATUS: ARCHIVED_RECORDS</span>
        </div>
      </div>

      {/* Manifest Content */}
      <div className="p-0">
        {careerLogs.map((log, i) => (
          <div key={i} className="group border-b-2 border-[#222222]/10 hover:bg-[#FA8112]/5 transition-colors flex flex-col md:flex-row">
            {/* Timeline Column */}
            <div className="w-full md:w-48 p-8 border-r-2 border-[#222222]/10 flex flex-col justify-center items-center bg-[#222222]/5">
              <span className="mono text-sm font-black text-[#222222]">{log.date}</span>
              <div className="h-0.5 w-8 bg-[#FA8112] my-2"></div>
              <span className="mono text-[9px] font-bold opacity-40 uppercase">Duration</span>
            </div>

            {/* Experience Column */}
            <div className="flex-1 p-8 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="mono text-[10px] font-black text-[#FA8112] uppercase tracking-widest mb-1">Station / Company</h4>
                  <p className="text-2xl font-black text-[#222222] tracking-tighter uppercase">{log.company}</p>
                </div>
                <div className="md:text-right">
                  <h4 className="mono text-[10px] font-black text-[#FA8112] uppercase tracking-widest mb-1">Assigned Duty</h4>
                  <p className="text-lg font-bold text-[#222222] uppercase">{log.role}</p>
                </div>
              </div>

              <div className="py-6 border-t border-[#222222]/10">
                <p className="text-sm font-bold text-[#222222]/80 leading-relaxed uppercase max-w-3xl">
                  {log.msg}
                </p>
              </div>
            </div>
            
            {/* Stamp Column */}
            <div className="hidden lg:flex w-24 border-l-2 border-[#222222]/10 items-center justify-center relative">
               <div className="rotate-90 mono text-[9px] font-black opacity-10 tracking-[1em] whitespace-nowrap">
                 VERIFIED_SYSTEMS_CHECK
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Punch Holes Effect */}
      <div className="h-12 bg-[#FAF3E1] flex items-center justify-around px-8 opacity-20 border-t-2 border-[#222222]/10">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-3 h-3 rounded-full bg-[#222222]"></div>
        ))}
      </div>
    </div>
  );
};

const AcademicManifest = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-[#222222] border-2 border-[#222222] shadow-[8px_8px_0px_#FA8112] text-[#FAF3E1]">
      <div className="p-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex flex-col items-center justify-center border-r-2 border-white/10 pr-8">
          <span className="mono text-3xl font-black text-[#FA8112]">2021 - TODAY</span>
          <span className="mono text-[8px] font-bold opacity-40 uppercase">ENROLLED</span>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <div className="mono text-[9px] font-black text-[#FA8112] uppercase tracking-[0.2em] mb-1">Institution // UNIVERSITY OF TORONTO</div>
          <p className="text-xl font-black tracking-tight uppercase">BACHELORS IN SCIENCE BSC</p>
          <p className="text-[10px] font-bold opacity-50 uppercase mt-1">MAJOR IN COMPUTER SCIENCE, MINOR IN MATHEMATICS AND GEOGRAPHIC INFORMATION STUDIES.</p>
        </div>

        <div className="hidden lg:block">
          <div className="w-12 h-12 border-2 border-white/5 rounded-full flex items-center justify-center opacity-20">
            <span className="mono text-[8px] font-black">NIT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollY(winScroll);
      setScrollProgress((winScroll / height) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pb-20 selection:bg-[#FA8112] selection:text-white relative">
      
      {/* Scroll Rail Track Progress Indicator */}
      <div className="fixed left-4 top-0 h-screen w-8 z-[100] hidden lg:flex flex-col items-center">
        <div className="h-full w-px bg-[#222222]/10 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 flex flex-col gap-4 py-4">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="h-px w-full bg-[#222222]/20"></div>
            ))}
          </div>
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-[#FA8112] shadow-[0_0_15px_#FA8112]"
            style={{ height: `${scrollProgress}%` }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FA8112] rounded-sm rotate-45 border-2 border-[#222222]"></div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-[#FAF3E1]/95 backdrop-blur-md border-b border-[#222222]/10 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[9px] mono font-bold opacity-40 uppercase tracking-widest">Master Station Clock</span>
            <div className="scale-[0.6] origin-left -mt-1">
              <SplitFlapText text={currentTime} length={8} size="sm" />
            </div>
          </div>

          <nav className="hidden lg:flex gap-12">
            {NAV_ITEMS.map((item) => (
              <button 
                key={item.targetId}
                onClick={() => scrollToSection(item.targetId)}
                className="mono font-bold text-[10px] uppercase hover:text-[#FA8112] transition-all hover:tracking-[0.4em] tracking-[0.2em] relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FA8112] transition-all group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="flex flex-col items-end text-right">
            <span className="text-[9px] mono font-bold opacity-40 uppercase">Platform Connection</span>
            <span className="text-[10px] mono font-bold text-[#FA8112] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA8112] animate-pulse"></span>
              EST. LINK 03A
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-12 mt-32 space-y-64">
        
        {/* TITLE SECTION */}
        <section id="title" className="flex flex-col items-center text-center space-y-16 py-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 opacity-[0.03] pointer-events-none select-none">
             <h1 className="text-[300px] font-black leading-none">STATION</h1>
          </div>
          
          <div className="space-y-4" style={{ transform: `translateY(${scrollY * -0.1}px)` }}>
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
                <SplitFlapText text="NAO" length={3} size="lg" />
                <SplitFlapText text="NAGASHIMA" length={9} size="lg" />
              </div>
              <div className="h-px w-32 bg-[#FA8112] my-4 shadow-[0_0_15px_#FA8112]"></div>
              <div className="scale-110 flex flex-wrap justify-center items-center gap-x-2 gap-y-6">
                <SplitFlapText text="SOFTWARE" length={8} size="md" />
                <SplitFlapText text="ENGINEER" length={8} size="md" />
              </div>
            </div>
            <p className="text-2xl font-black tracking-tight text-[#222222] max-w-2xl mx-auto mt-12 leading-relaxed uppercase">
              Full-stack developer passionate about <span className="text-[#FA8112]">backend development</span> and modern technologies.
            </p>
          </div>
          
          <Reveal>
            <button 
              onClick={() => scrollToSection('about')}
              className="group relative bg-[#222222] text-[#FAF3E1] px-16 py-7 font-black mono text-sm uppercase tracking-[0.5em] hover:bg-[#FA8112] hover:text-[#222222] transition-all active:scale-95 shadow-[8px_8px_0px_#FA8112] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              Initialize Transit
            </button>
          </Reveal>
        </section>

        {/* ABOUT ME */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <Reveal>
            <div className="space-y-12">
              <div className="scale-110 origin-left">
                <SplitFlapText text="PROFILE" length={7} size="md" />
              </div>
              <div className="space-y-8 text-xl leading-relaxed font-bold border-l-8 border-[#FA8112] pl-8">
                <p className="uppercase">
                  I’m a computer science student from the University of Toronto who enjoys building backend systems and understanding how software works under the hood.
                </p>
                <p className="opacity-70 uppercase text-lg">
                  I value simplicity, reliability, and continuous learning, and I enjoy turning ideas into thoughtful, well-structured projects. I love breaking down large programming systems from delivering large scale backend web applications to understanding low level programming concepts like memory, distributed systems, operating systems and parallelism.
                </p>
              </div>
            </div>
          </Reveal>
          
          <div className="relative group" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
            <div className="bg-[#222222] p-16 aspect-square flex flex-col justify-center items-center gap-10 shadow-2xl">
              <div className="absolute -top-10 -right-10 w-40 h-40 border-8 border-[#FA8112] -z-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500"></div>
              <div className="text-[#FA8112] mono text-xs uppercase tracking-[0.5em] opacity-60">System Core Profile</div>
              <div className="h-48 w-48 border-4 border-[#FA8112]/30 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-[#FA8112]/10 to-transparent"></div>
                <div className="w-12 h-1 bg-[#FA8112] absolute top-0 left-0"></div>
                <div className="w-1 h-12 bg-[#FA8112] absolute top-0 left-0"></div>
                <div className="w-12 h-1 bg-[#FA8112] absolute bottom-0 right-0"></div>
                <div className="w-1 h-12 bg-[#FA8112] absolute bottom-0 right-0"></div>
                <span className="mono text-[80px] font-black text-[#FA8112]/20">03</span>
              </div>
              <div className="mono text-xs text-[#FAF3E1]/80 text-center uppercase space-y-2 font-black">
                <div>ID // 03-NAG-CORE</div>
                <div>SEC // TERMINAL-ALPHA</div>
                <div className="text-[#FA8112]">ST // ACTIVE_LOAD</div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="space-y-24">
          <Reveal>
            <div className="scale-110 origin-left">
              <SplitFlapText text="ACADEMIC" length={8} size="md" />
            </div>
          </Reveal>
          <AcademicManifest />
        </section>  
        
        {/* PROJECTS */}
        <section id="projects" className="space-y-24">
          <Reveal>
            <div className="flex flex-col md:flex-row items-baseline justify-between border-b-2 border-[#222222]/10 pb-8">
              <div className="scale-110 origin-left">
                <SplitFlapText text="PROJECTS" length={8} size="md" />
              </div>
              <span className="mono text-xs font-black opacity-40 uppercase tracking-[0.4em]">Active Shipments // V2.0</span>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PROJECTS.map((p, idx) => (
              <Reveal key={p.id}>
                <div 
                  className="bg-[#F5E7C6] border-2 border-[#222222]/5 p-12 space-y-8 hover:bg-white hover:border-[#FA8112] transition-all duration-500 group shadow-lg hover:shadow-2xl hover:-translate-y-4"
                >
                  <div className="flex justify-between items-center">
                    <span className="mono text-[10px] font-black bg-[#222222] text-[#FAF3E1] px-3 py-1.5 shadow-md">{p.time}</span>
                    <span className="mono text-[11px] text-[#FA8112] font-black tracking-widest">PLAT-{p.platform}</span>
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter group-hover:text-[#FA8112] transition-colors uppercase leading-none">{p.destination}</h3>
                  <div className="w-12 h-1 bg-[#222222] group-hover:w-full transition-all duration-500"></div>
                  <p className="text-sm opacity-80 leading-relaxed font-bold uppercase">{p.description}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-[#222222]/10">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-[#FA8112] animate-pulse"></div>
                      <span className="mono text-[10px] font-black uppercase tracking-widest">{p.status}</span>
                    </div>
                    <span className="mono text-[9px] opacity-30">REF.1029</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CAREER HISTORY*/}
        <section id="experience" className="space-y-24">
          <Reveal>
            <div className="scale-110 origin-left">
              <SplitFlapText text="EXPERIANCE" length={10} size="md" />
            </div>
          </Reveal>
          <ServiceManifest />
        </section>

        {/* SKILLS */}
        <section id="skills" className="space-y-24">
          <Reveal>
            <div className="scale-110 origin-left">
              <SplitFlapText text="SKILLS" length={6} size="md" />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {[
              { cat: 'LANGUAGES', items: ['JAVA', 'PYTHON', 'C / CPP', 'ASSEMBLY (RISCV)', 'HTML, JAVASCRIPT, CSS', 'R', 'BASH', 'PHP'] },
              { cat: 'WEB FRAMEWORKS', items: ['SPRING BOOT', 'NEXT', 'EXPRESS', 'FLASK', 'REACT'] },
              { cat: 'AI AND DATA', items: ['LANGCHAIN', 'RAG', 'PYTORCH', 'SCIKIT-LEARN','PANDAS','NUMPY', 'POSTGRESQL','MONGODB'] },
              { cat: 'TOOLS AND DEVOPS', items: ['DOCKER', 'GITHUB ACTIONS', 'POWER AUTOMATE', 'AZURE'] }
            ].map((skill, idx) => (
              <Reveal key={idx}>
                <div className="bg-[#222222] text-[#FAF3E1] p-10 hover:bg-[#FA8112] hover:text-[#222222] transition-all duration-300 border border-[#FAF3E1]/5 h-full group">
                  <div className="mono text-[10px] font-black opacity-30 mb-6 uppercase tracking-[0.3em] group-hover:opacity-100 transition-opacity">{skill.cat}</div>
                  <div className="space-y-2">
                    {skill.items.map(item => (
                      <div key={item} className="mono text-sm font-black uppercase block">{item}</div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="pb-64">
          <Reveal>
            <div className="scale-110 origin-left mb-24">
              <SplitFlapText text="CONTACT" length={7} size="md" />
            </div>
          </Reveal>
          <div className="relative">
            <div 
              className="absolute -top-32 -left-32 text-[20vw] font-black text-[#222222]/5 pointer-events-none select-none"
              style={{ transform: `translateX(${scrollY * 0.1}px)` }}
            >
              CONTACT
            </div>
            
            <div className="max-w-5xl mx-auto bg-[#222222] text-[#FAF3E1] p-16 md:p-32 shadow-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-2 bg-[#FA8112] shadow-[0_0_20px_#FA8112]"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-24 relative z-10">
                <div className="lg:col-span-2 space-y-16">
                  <div className="space-y-4">
                    <h4 className="mono text-[11px] font-black text-[#FA8112] uppercase tracking-[0.5em]">Direct Frequency</h4>
                    <p className="mono text-xl uppercase font-black underline decoration-2 underline-offset-8">naonagashima@outlook.com</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="mono text-[11px] font-black text-[#FA8112] uppercase tracking-[0.5em]">Relay Points</h4>
                    <div className="flex flex-col gap-6">
                      <a href="https://www.github.com/NaoNagashima " className="mono text-sm uppercase opacity-50 hover:opacity-100 transition-all hover:translate-x-4 flex items-center gap-4">
                        <span className="w-8 h-px bg-[#FA8112]"></span> GITHUB // NAO-NAGASHIMA
                      </a>
                      <a href="https://www.linkedin.com/in/nao-nagashima" className="mono text-sm uppercase opacity-50 hover:opacity-100 transition-all hover:translate-x-4 flex items-center gap-4">
                        <span className="w-8 h-px bg-[#FA8112]"></span> LINKEDIN // NAONAGASHIMA
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <footer className="mt-64 text-center space-y-8">
             <div className="h-px w-48 bg-[#222222]/10 mx-auto"></div>
             <p className="mono text-[10px] uppercase tracking-[0.8em] font-black opacity-40">End of Line // Station Portfolio V2.0 // Safe Travels</p>
          </footer>
        </section>

      </main>
    </div>
  );
};

export default App;
