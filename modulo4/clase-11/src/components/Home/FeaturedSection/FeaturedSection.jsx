const topics = [
  {
    icon: "🌑",
    tag: "Astronomía",
    title: "Los secretos del lado oscuro de la Luna",
    desc: "Documentos desclasificados sugieren estructuras artificiales en el hemisferio oculto de nuestro satélite.",
  },
  {
    icon: "🧬",
    tag: "Genética",
    title: "ADN extraterrestre en el genoma humano",
    desc: "Un 8% del ADN humano proviene de virus extintos. ¿O de algo más?",
  },
  {
    icon: "🌐",
    tag: "Control",
    title: "La red invisible de vigilancia global",
    desc: "Cinco ojos, PRISM y los algoritmos que predicen el comportamiento humano.",
  },
];

const FeaturedSection = () => {
  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-600/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="inline-block text-violet-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            — Expedientes —
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Temas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              clasificados
            </span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Archivos que algunos no quieren que veas. Explora los temas más
            oscuros que rodean nuestra realidad.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topics.map((t, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-xl border border-violet-900/30 bg-white/[0.02] backdrop-blur-sm hover:border-violet-500/50 hover:bg-violet-500/5 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-500 cursor-pointer"
            >
              {/* Index */}
              <span className="absolute top-5 right-5 text-violet-900/60 text-4xl font-black select-none">
                0{i + 1}
              </span>

              <div className="text-4xl mb-4">{t.icon}</div>

              <span className="inline-block text-violet-400/70 text-xs font-semibold tracking-widest uppercase mb-2">
                {t.tag}
              </span>

              <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-violet-200 transition-colors duration-300">
                {t.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>

              {/* Bottom accent */}
              <div className="mt-5 flex items-center gap-2 text-violet-500 text-xs font-semibold tracking-wide uppercase">
                <span>Leer más</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
