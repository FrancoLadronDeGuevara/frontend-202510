import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
  };

  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-600/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-600/30 to-transparent" />

      {/* Glows */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-violet-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-violet-700/50 bg-violet-900/20 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(139,92,246,0.2)]">
          📬
        </div>

        <span className="text-violet-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">
          — Acceso confidencial —
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
          Recibe los archivos{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
            clasificados
          </span>
        </h2>

        <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md mx-auto">
          Suscríbete para recibir las teorías más recientes antes de que sean
          censuradas. Sin spam. Solo la verdad.
        </p>

        {sent ? (
          <div className="flex items-center justify-center gap-3 p-5 rounded-xl border border-violet-500/40 bg-violet-900/20 text-violet-300">
            <span className="text-2xl">✓</span>
            <span className="font-semibold tracking-wide">
              Archivo registrado. Te contactaremos pronto.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="flex-1 px-5 py-3 rounded-lg bg-white/5 border border-violet-800/40 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-violet-500 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-sm tracking-wide uppercase cursor-pointer hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Suscribirme
            </button>
          </form>
        )}

        <p className="text-gray-700 text-xs mt-4">
          Sin spam. Puedes darte de baja en cualquier momento. Tus datos{" "}
          <span className="text-violet-700">nunca</span> serán vendidos (o eso
          dicen todos).
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
