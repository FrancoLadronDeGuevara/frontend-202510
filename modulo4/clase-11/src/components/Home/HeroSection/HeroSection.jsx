import { useEffect, useRef } from "react";

const HeroSection = () => {
  const canvasRef = useRef(null);

  // Animated particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.1,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167,139,250,${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

      {/* Purple radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-fuchsia-800/10 rounded-full blur-2xl pointer-events-none" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow label */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="h-px w-8 bg-violet-500" />
          <span className="text-violet-400 text-xs font-semibold tracking-[0.3em] uppercase">
            Bienvenido al misterio
          </span>
          <span className="h-px w-8 bg-violet-500" />
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6">
          Donde las{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              sombras
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-60" />
          </span>{" "}
          cobran vida
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Sumérgete en una experiencia visual que desafía lo ordinario. Aquí la
          oscuridad es el lienzo y tú eres el protagonista.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="relative group px-8 py-3.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-sm tracking-wide uppercase cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-105">
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Explorar ahora</span>
          </button>
          <button className="px-8 py-3.5 rounded-lg border border-violet-500/40 text-violet-300 font-semibold text-sm tracking-wide uppercase cursor-pointer hover:border-violet-400 hover:text-white hover:bg-violet-500/10 transition-all duration-300">
            Ver más
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-[-160px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-gray-500 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-violet-500 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
