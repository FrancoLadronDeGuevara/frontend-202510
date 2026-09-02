const team = [
  {
    handle: "AGENT_V01D",
    role: "Fundador & Oráculo",
    avatar: "🕵️",
    bio: "Desapareció durante 3 años. Volvió con archivos que no deberían existir. Nadie pregunta dónde estuvo.",
    clearance: "ULTRA",
    color: "violet",
  },
  {
    handle: "CIPHER_7X",
    role: "Analista de Patrones",
    avatar: "🧬",
    bio: "Ex-investigadora de organismos que prefieren no ser nombrados. Detecta anomalías donde otros ven normalidad.",
    clearance: "SECRET",
    color: "fuchsia",
  },
  {
    handle: "NULL_ECHO",
    role: "Archivista Digital",
    avatar: "📡",
    bio: "Recopila datos de servidores que oficialmente no existen. Su identidad fue borrada de 4 bases de datos nacionales.",
    clearance: "TOP SECRET",
    color: "cyan",
  },
];

const timeline = [
  { year: "2019", event: "Fundación clandestina del colectivo en una red TOR privada." },
  { year: "2021", event: "Primera filtración masiva: 14.000 documentos sobre vigilancia electromagnética." },
  { year: "2022", event: "Primer intento de cierre por parte de autoridades desconocidas. Fallido." },
  { year: "2023", event: "Migración a infraestructura distribuida e irrastreable." },
  { year: "2024", event: "Más de 500K lectores activos. La verdad no puede ser silenciada." },
  { year: "2025", event: "Apertura al público. Porque todos merecen saber." },
];

const clearanceColors = {
  ULTRA: "text-violet-400 border-violet-700/50 bg-violet-900/20",
  SECRET: "text-fuchsia-400 border-fuchsia-700/50 bg-fuchsia-900/20",
  "TOP SECRET": "text-cyan-400 border-cyan-700/50 bg-cyan-900/20",
};

const About = () => {
  return (
    <div className="bg-black min-h-screen">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.12),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,#7c3aed 39px,#7c3aed 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,#7c3aed 39px,#7c3aed 40px)",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block text-violet-400 text-xs font-semibold tracking-[0.4em] uppercase mb-4 font-mono">
            — Expediente: QUIÉNES SOMOS —
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            La{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              sombra
            </span>{" "}
            detrás de la verdad
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            No somos periodistas. No somos activistas. Somos los que encontraron
            los archivos que otros no buscaron — y decidimos no callar.
          </p>
          {/* Classified badge */}
          <div className="inline-flex items-center gap-3 mt-8 px-5 py-2.5 rounded-full border border-violet-800/40 bg-violet-950/30 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-violet-400/80 text-xs font-mono tracking-widest">
              IDENTIDAD DEL COLECTIVO: CLASIFICADA
            </span>
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 rounded-2xl border border-violet-900/30 bg-white/[0.02]">
            {/* Quote mark */}
            <span className="absolute -top-6 left-8 text-8xl text-violet-800/30 font-serif leading-none select-none">
              "
            </span>
            <p className="text-gray-300 text-xl leading-relaxed italic font-light">
              Vivimos en la era de la información, pero también en la era de la
              desinformación. Nuestro trabajo no es decirte qué creer — es
              entregarte lo que otros esconden y dejar que tú decidas.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-violet-800/40 to-transparent" />
              <span className="text-violet-500/60 text-xs font-mono tracking-widest">
                — MANIFIESTO DEL COLECTIVO, 2019
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-violet-400 text-xs font-semibold tracking-[0.3em] uppercase font-mono">
              — Cronología —
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
              Historia{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                no oficial
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-violet-600/40 via-fuchsia-600/20 to-transparent" />

            <div className="flex flex-col gap-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  {/* Year */}
                  <span className="w-16 shrink-0 text-right text-violet-400 font-mono font-bold text-sm pt-0.5">
                    {item.year}
                  </span>
                  {/* Dot */}
                  <div className="relative shrink-0 mt-1.5">
                    <div className="w-3 h-3 rounded-full border-2 border-violet-500 bg-black group-hover:bg-violet-500 group-hover:shadow-[0_0_12px_rgba(139,92,246,0.8)] transition-all duration-300" />
                  </div>
                  {/* Text */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 pt-0.5">
                    {item.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-fuchsia-400 text-xs font-semibold tracking-[0.3em] uppercase font-mono">
              — Los agentes —
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
              Identidades{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-400">
                redactadas
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-xl border border-violet-900/20 bg-white/[0.02] hover:border-violet-500/40 hover:bg-violet-500/5 hover:shadow-[0_0_30px_rgba(139,92,246,0.08)] transition-all duration-500"
              >
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full border border-violet-800/40 bg-black flex items-center justify-center text-3xl mb-5 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300">
                  {member.avatar}
                </div>

                {/* Clearance badge */}
                <span
                  className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded border tracking-widest mb-3 ${clearanceColors[member.clearance]}`}
                >
                  {member.clearance}
                </span>

                <h3 className="text-white font-bold font-mono text-base mb-1">
                  {member.handle}
                </h3>
                <p className="text-violet-400/70 text-xs tracking-wide mb-4">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────── */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-violet-700/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-700/40 to-transparent" />
        <div className="relative max-w-xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            ¿Tienes información que el mundo necesita saber?
            No preguntes quiénes somos. Pregúntate si confías en nosotros.
          </p>
          <a
            href="/c0nT4ct0"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-sm tracking-wide uppercase hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300"
          >
            Contactar al colectivo →
          </a>
        </div>
      </section>

    </div>
  );
};

export default About;
