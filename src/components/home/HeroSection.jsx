import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Flame, Droplet, Wind, Sparkles, Settings2 } from 'lucide-react';
import heroBgImage from '../../assets/home/herosection.jpg';
import simulateurImage from '../../assets/home/SimulateurAPP.webp';

const HeroSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const iconsRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current || !titleRef.current || !cardRef.current || !iconsRef.current) return;

    // Particle animation
    gsap.to(".particle", {
      y: -20,
      x: "random(-20, 20)",
      duration: "random(10, 20)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Main animation timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        toggleActions: "play none none none"
      }
    });

    tl.from(titleRef.current, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "back.out(1.7)"
    })
      .from(".hero-gradient-text", {
        opacity: 0,
        scale: 1.5,
        duration: 1,
        ease: "elastic.out(1, 0.5)"
      }, "-=0.7")
      .from(cardRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        rotateX: 15
      }, "-=0.5")
      .from(iconsRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "back.out(2)"
      }, "-=0.8");
  }, []);

  return (
    <section className="relative py-16 px-6 pt-32 md:pt-16 md:py-24 lg:py-32 text-black overflow-hidden" ref={containerRef}>
      {/* ========== FUTURISTIC BACKGROUND ========== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Hydrogen Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-[#55AAE4]"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1
            }}
          />
        ))}

        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] to-[#0f2c56]" />

        {/* Liquid Hydrogen Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#55AAE4]/30 to-transparent opacity-40">
          <div className="absolute top-0 left-0 right-0 h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxwYXRoIGZpbGw9IiM1NUFBRTQiIGQ9Ik0wLDM0LjVDMTUwLDYwIDMwMCwxNSA0NTAsMzQuNUM2MDAsNTQgNzUwLDkgOTAwLDM0LjVDMTA1MCw2MCAxMjAwLDE1IDEyMDAsMzQuNVYxMjBIMHoiLz48L3N2Zz4=')] bg-[length:1200px_20px] opacity-70 animate-wave-slow" />
        </div>

        {/* Background Image (Subtle) */}
        <img
          src={heroBgImage}
          alt="Hydrogen Tech Background"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
        />

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#55AAE4] blur-[80px] opacity-10 animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-[#3ac6b8] blur-[100px] opacity-10 animate-pulse-slow" />
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-10" ref={titleRef}>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                <span className="text-white/90">L'hydrogène </span>
                <span className="hero-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-[#55AAE4] via-[#3ac6b8] to-[#2bd3c6] animate-gradient">
                  THD*
                </span>
                <span className="block text-white/90">pulsé par I.A</span>
              </h2>

              <div className="pl-2 border-l-4 border-[#55AAE4]">
                <h3 className="text-xl md:text-2xl font-light text-white/90 leading-relaxed">
                  pour décarboner les moteurs thermiques maritimes et terrestres
                </h3>
                <p className="text-sm italic text-white/70 mt-2">*Très Haut Débit : Dispositif breveté</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="relative overflow-hidden group bg-transparent border-2 border-[#55AAE4] text-white px-8 py-3 rounded-full font-medium transition-all duration-500 hover:shadow-[0_0_20px_5px_rgba(85,170,228,0.3)]">
                <span className="relative z-10 flex items-center gap-2">
                  <span>Découvrir la technologie</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#55AAE4_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </button>

              <button className="flex items-center gap-2 text-white/90 group transition-all">
                <div className="relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#55AAE4]/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#55AAE4]">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <span className="group-hover:text-white underline-offset-4 group-hover:underline">Voir la vidéo</span>
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: "+85%", label: "Efficacité", color: "from-[#55AAE4]/80 to-[#55AAE4]/40" },
                { value: "-60%", label: "Émissions CO2", color: "from-[#3ac6b8]/80 to-[#3ac6b8]/40" },
                { value: "24/7", label: "Monitoring", color: "from-[#2bd3c6]/80 to-[#2bd3c6]/40" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden p-4 rounded-xl backdrop-blur-md border border-white/10 hover:border-[#55AAE4]/50 transition-all duration-300 group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-30 -z-10 group-hover:opacity-50 transition-opacity`} />
                  <p className="text-2xl font-bold text-white drop-shadow-md">{stat.value}</p>
                  <p className="text-xs text-white/80 mt-1">{stat.label}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (3D Card) */}
          <div className="w-full lg:w-1/2" ref={cardRef}>
            <div className="relative h-[500px] group perspective-1000">
              <div className="relative h-full w-full transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-white/5 to-white/20 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#55AAE4_0%,#3ac6b8_50%,#55AAE4_100%)] opacity-10 -z-10 animate-spin-slow [animation-duration:10s]" />

                  <div className="relative z-10 h-full flex flex-col">
                    <div className="relative overflow-hidden rounded-xl border border-white/20 mb-6 h-48">
                      <img
                        src={simulateurImage}
                        alt="Simulateur"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white font-medium">
                        Simulation en temps réel
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      Vos économies calculées en <span className="text-[#55AAE4]">2 min !</span>
                    </h3>

                    <p className="text-white/90 mb-6 leading-relaxed">
                      Estimez votre consommation et les gains réalisés grâce à notre
                      générateur <strong className="text-white">HybridOgen®</strong>.
                    </p>

                    <div className="mt-auto flex justify-between items-center">
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <div className="w-3 h-3 rounded-full bg-[#55AAE4] animate-pulse" />
                        <span>Simulation active</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50 group-hover:text-[#55AAE4] transition-colors">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden bg-[url('../../assets/home/card-back.jpg')] bg-cover border border-white/20 rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center rotate-y-180">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f]/90 to-[#0f2c56]/90 -z-10" />
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-[#55AAE4]/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#55AAE4]">
                      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5"></path>
                    </svg>
                  </div>

                  <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-white mb-3">Simulateur d'économies</h4>
                    <p className="text-white/90 max-w-md mx-auto">
                      Calculez vos économies réalisées avant et après notre intervention.
                    </p>
                  </div>

                  <button className="relative overflow-hidden group bg-gradient-to-r from-[#55AAE4] to-[#3ac6b8] text-white px-8 py-4 rounded-full font-medium transition-all duration-500 hover:shadow-[0_0_25px_5px_rgba(85,170,228,0.4)]">
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Lancer le simulateur</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)] opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Boxes */}
        <div className="mt-24 lg:mt-32 space-y-12" ref={iconsRef}>
          <h3 className="text-3xl font-semibold text-center text-white">
            Nos <span className="text-[#55AAE4]">5</span> champs d'actions
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: <Flame size={28} />, title: "Allumage", bg: "action-1.jpg" },
              { icon: <Droplet size={28} />, title: "Injection", bg: "action-2.jpg" },
              { icon: <Wind size={28} />, title: "Admission", bg: "action-3.jpg" },
              { icon: <Sparkles size={28} />, title: "Échappement", bg: "action-4.jpg" },
              { icon: <Settings2 size={28} />, title: "Traitement du carburant par nanotechnologie", bg: "action-5.jpg" }
            ].map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden group flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#55AAE4]/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_10px_25px_-5px_rgba(85,170,228,0.3)] min-h-[180px]"
              >
                <div className="absolute inset-0 bg-[url('../../assets/home/${item.bg}')] bg-cover opacity-20 -z-10" />
                <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,#55AAE4_60deg,transparent_120deg)] opacity-0 group-hover:opacity-30 -z-10 transition-opacity duration-700" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="text-[#55AAE4] mb-4 p-4 bg-white/10 rounded-xl group-hover:bg-white/20 transition-all duration-500 group-hover:rotate-[15deg]">
                    {item.icon}
                  </div>
                  <p className="font-medium text-white text-sm md:text-base leading-tight">{item.title}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#55AAE4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;