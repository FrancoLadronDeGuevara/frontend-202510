import { useState } from "react";

const CHANNELS = [
  {
    icon: "📡",
    title: "Canal Seguro",
    desc: "Comunicación encriptada end-to-end. Solo para filtraciones urgentes.",
    label: "darkstudio@protonmail.com",
    color: "violet",
  },
  {
    icon: "🌐",
    title: "Red Tor",
    desc: "Acceso desde la red oscura para máximo anonimato.",
    label: "ds7x3k2...onion",
    color: "fuchsia",
  },
  {
    icon: "📻",
    title: "Frecuencia Cifrada",
    desc: "Transmisión de datos de emergencia. Solo si sabes cómo.",
    label: "47.235 MHz — banda corta",
    color: "cyan",
  },
];

const chanColors = {
  violet: "border-violet-800/40 hover:border-violet-500/60 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]",
  fuchsia: "border-fuchsia-800/40 hover:border-fuchsia-500/60 hover:shadow-[0_0_20px_rgba(217,70,239,0.15)]",
  cyan: "border-cyan-800/40 hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]",
};

const iconColors = {
  violet: "text-violet-400",
  fuchsia: "text-fuchsia-400",
  cyan: "text-cyan-400",
};

const Contact = () => {
  const [form, setForm] = useState({ handle: "", subject: "", message: "", clearance: "civil" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1800);
  };

  return (
    <div className="bg-black min-h-screen">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative py-28 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.1),transparent_65%)]" />

        {/* Floating glitch lines */}
        <div className="absolute top-20 left-0 right-0 flex flex-col gap-12 opacity-5 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"
              style={{ transform: `scaleX(${0.4 + i * 0.1})` }}
            />
          ))}
        </div>

        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block text-violet-400 text-xs font-semibold tracking-[0.4em] uppercase mb-4 font-mono">
            — Transmisión entrante —
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Abre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              un canal
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Todas las transmisiones son monitoreadas. Por eso usamos protocolos
            de encriptación de nivel militar. Tu anonimato es nuestra prioridad.
          </p>
        </div>
      </section>

      {/* ── CHANNELS ─────────────────────────────────────── */}
      <section className="py-4 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {CHANNELS.map((ch, i) => (
            <div
              key={i}
              className={`p-5 rounded-xl border bg-white/[0.02] transition-all duration-400 cursor-default ${chanColors[ch.color]}`}
            >
              <span className={`text-3xl block mb-3`}>{ch.icon}</span>
              <h3 className={`font-bold text-sm mb-1 ${iconColors[ch.color]}`}>
                {ch.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">
                {ch.desc}
              </p>
              <code className="text-gray-600 text-xs font-mono">{ch.label}</code>
            </div>
          ))}
        </div>
      </section>

      {/* ── FORM ─────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="relative p-8 md:p-10 rounded-2xl border border-violet-900/30 bg-white/[0.015] backdrop-blur-sm">

            {/* Corner brackets */}
            {["top-3 left-3 border-t border-l", "top-3 right-3 border-t border-r",
              "bottom-3 left-3 border-b border-l", "bottom-3 right-3 border-b border-r"].map((cls, i) => (
              <div key={i} className={`absolute w-5 h-5 border-violet-700/40 ${cls}`} />
            ))}

            <div className="mb-8">
              <span className="text-fuchsia-400 text-xs font-mono tracking-[0.3em] uppercase">
                — Formulario de transmisión cifrada —
              </span>
              <h2 className="text-2xl font-black text-white mt-2">
                Envía tu mensaje
              </h2>
            </div>

            {status === "sent" ? (
              /* Success state */
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <div className="w-16 h-16 rounded-full border border-violet-500/50 bg-violet-900/20 flex items-center justify-center text-3xl animate-pulse">
                  ✓
                </div>
                <h3 className="text-violet-300 font-bold text-lg font-mono">
                  Transmisión recibida
                </h3>
                <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                  Tu mensaje ha sido encriptado y redirigido a través de 7
                  servidores intermedios. Un agente se pondrá en contacto contigo.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ handle: "", subject: "", message: "", clearance: "civil" }); }}
                  className="mt-2 text-xs text-violet-500 hover:text-violet-300 font-mono tracking-wide underline cursor-pointer transition-colors duration-200"
                >
                  Enviar otra transmisión
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                {/* Handle */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 text-xs font-mono tracking-widest uppercase">
                    Identificador / Handle
                  </label>
                  <input
                    name="handle"
                    value={form.handle}
                    onChange={handleChange}
                    required
                    placeholder="AGENT_ANON o email"
                    className="w-full px-4 py-3 rounded-lg bg-black/60 border border-violet-900/40 text-white text-sm font-mono placeholder-gray-700 focus:outline-none focus:border-violet-500 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300"
                  />
                </div>

                {/* Clearance level */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 text-xs font-mono tracking-widest uppercase">
                    Nivel de clasificación
                  </label>
                  <select
                    name="clearance"
                    value={form.clearance}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-black/60 border border-violet-900/40 text-gray-300 text-sm font-mono focus:outline-none focus:border-violet-500 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300 cursor-pointer appearance-none"
                  >
                    <option value="civil">Civil — información pública</option>
                    <option value="restricted">Restringido — datos sensibles</option>
                    <option value="secret">Secreto — filtración de alto nivel</option>
                    <option value="ultra">Ultra — no preguntes cómo lo obtuvo</option>
                  </select>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 text-xs font-mono tracking-widest uppercase">
                    Asunto de la transmisión
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Sé específico. El tiempo es escaso."
                    className="w-full px-4 py-3 rounded-lg bg-black/60 border border-violet-900/40 text-white text-sm font-mono placeholder-gray-700 focus:outline-none focus:border-violet-500 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 text-xs font-mono tracking-widest uppercase">
                    Cuerpo del mensaje
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Detalla tu información. No omitas nada. Los detalles importan."
                    className="w-full px-4 py-3 rounded-lg bg-black/60 border border-violet-900/40 text-white text-sm font-mono placeholder-gray-700 focus:outline-none focus:border-violet-500 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300 resize-none"
                  />
                </div>

                {/* Warning */}
                <div className="flex items-start gap-3 p-3 rounded-lg border border-amber-900/30 bg-amber-950/10">
                  <span className="text-amber-500/60 text-xs mt-0.5">⚠</span>
                  <p className="text-amber-600/60 text-xs leading-relaxed font-mono">
                    Al enviar, aceptas que esta comunicación puede ser interceptada
                    por terceros. Usar TOR o VPN es altamente recomendado.
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="relative group w-full py-3.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-sm tracking-[0.15em] uppercase cursor-pointer overflow-hidden hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-[1.02] disabled:opacity-60 disabled:cursor-wait transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative font-mono">
                    {status === "sending" ? "Cifrando transmisión..." : "⬡ Enviar transmisión cifrada"}
                  </span>
                </button>

              </form>
            )}
          </div>

          {/* Footer note */}
          <p className="text-center text-gray-700 text-xs font-mono mt-6 leading-relaxed">
            Encriptación AES-256 · No logs · No rastro ·{" "}
            <span className="text-violet-800">Tu seguridad es nuestra misión</span>
          </p>
        </div>
      </section>

    </div>
  );
};

export default Contact;
