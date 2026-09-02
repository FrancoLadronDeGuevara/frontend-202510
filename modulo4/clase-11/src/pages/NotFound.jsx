import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ── Glitch text hook ─────────────────────────────────── */
const GLITCH_CHARS = "!@#$%^&*<>?/\\|█▓░╬╫╪▲▼◆●";

const useGlitch = (text, interval = 80) => {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let frame = 0;
    const maxFrames = text.length * 3;
    const id = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < frame / 3) return char;
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join("")
      );
      frame++;
      if (frame > maxFrames) frame = 0;
    }, interval);
    return () => clearInterval(id);
  }, [text, interval]);

  return display;
};

/* ── Scanline canvas ──────────────────────────────────── */
const ScanlineCanvas = () => {
  const canvasRef = useRef(null);

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

    let offset = 0;
    let animId;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Scanlines
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.fillStyle = "rgba(0,0,0,0.18)";
        ctx.fillRect(0, y, canvas.width, 1);
      }

      // Moving scan beam
      const beamY = offset % canvas.height;
      const grad = ctx.createLinearGradient(0, beamY - 40, 0, beamY + 40);
      grad.addColorStop(0, "rgba(139,92,246,0)");
      grad.addColorStop(0.5, "rgba(139,92,246,0.06)");
      grad.addColorStop(1, "rgba(139,92,246,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, beamY - 40, canvas.width, 80);

      // Noise pixels
      for (let n = 0; n < 30; n++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.fillStyle = `rgba(167,139,250,${Math.random() * 0.08})`;
        ctx.fillRect(x, y, Math.random() * 3, 1);
      }

      offset += 1.5;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

/* ── Countdown timer ──────────────────────────────────── */
const useCountdown = (seconds) => {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    if (left <= 0) return;
    const id = setTimeout(() => setLeft((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [left]);
  return left;
};

/* ── Main component ───────────────────────────────────── */
const NotFound = () => {
  const navigate = useNavigate();
  const glitched = useGlitch("404");
  const countdown = useCountdown(15);
  const [redacted, setRedacted] = useState(false);

  // Auto-redirect
  useEffect(() => {
    if (countdown === 0) navigate("/");
  }, [countdown, navigate]);

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden select-none">
      {/* Canvas overlay */}
      <ScanlineCanvas />

      {/* Radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-700/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] rounded-full bg-fuchsia-800/6 blur-2xl pointer-events-none" />

      {/* Corner brackets */}
      {[
        "top-6 left-6 border-t border-l",
        "top-6 right-6 border-t border-r",
        "bottom-6 left-6 border-b border-l",
        "bottom-6 right-6 border-b border-r",
      ].map((cls, i) => (
        <div key={i} className={`absolute w-8 h-8 border-violet-700/50 ${cls}`} />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">

        {/* Status badge */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span className="text-red-500/80 text-xs font-mono tracking-[0.3em] uppercase">
            Sistema Comprometido
          </span>
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
        </div>

        {/* Giant glitch 404 */}
        <div className="relative">
          <h1
            className="text-[10rem] md:text-[16rem] font-black leading-none font-mono text-transparent bg-clip-text bg-gradient-to-b from-violet-300 via-fuchsia-400 to-violet-700 drop-shadow-[0_0_40px_rgba(139,92,246,0.4)]"
            style={{ letterSpacing: "-0.05em" }}
          >
            {glitched}
          </h1>
          {/* Chromatic aberration ghost copies */}
          <h1
            className="absolute inset-0 text-[10rem] md:text-[16rem] font-black leading-none font-mono text-red-500/10 blur-[2px] translate-x-1"
            style={{ letterSpacing: "-0.05em" }}
            aria-hidden
          >
            404
          </h1>
          <h1
            className="absolute inset-0 text-[10rem] md:text-[16rem] font-black leading-none font-mono text-cyan-400/10 blur-[2px] -translate-x-1"
            style={{ letterSpacing: "-0.05em" }}
            aria-hidden
          >
            404
          </h1>
        </div>

        {/* Classification stamp — click to reveal */}
        <div
          className="border-2 border-red-700/60 px-6 py-2 rotate-[-2deg] cursor-pointer hover:rotate-0 transition-transform duration-300"
          onClick={() => setRedacted(!redacted)}
          title="Haz click para revelar"
        >
          <span className="text-red-600/80 text-xs font-bold tracking-[0.4em] uppercase font-mono">
            {redacted
              ? "Página eliminada por agentes desconocidos"
              : "████████ CLASIFICADO ████████"}
          </span>
        </div>

        {/* Message */}
        <div className="max-w-lg space-y-3 font-mono text-sm">
          <p className="text-gray-400">
            La página que buscas{" "}
            <span className="text-violet-400">no existe</span>... o fue
            eliminada antes de que pudieras acceder a ella.
          </p>
          <p className="text-gray-600 text-xs leading-relaxed">
            Nuestros registros indican que esta URL fue visitada por{" "}
            <span className="text-fuchsia-500/70">3 agentes</span> antes que
            tú. Ninguno reportó lo que encontró.
          </p>
        </div>

        {/* Terminal log */}
        <div className="w-full max-w-md bg-black/60 border border-violet-900/40 rounded-lg p-4 text-left font-mono text-xs space-y-1">
          <p className="text-green-500/70">$ system.locate(route)</p>
          <p className="text-red-400/80">ERROR: Route not found in manifest</p>
          <p className="text-gray-600">$ checking_backups...</p>
          <p className="text-red-400/80">ERROR: Backups corrupted or removed</p>
          <p className="text-violet-400/80">
            $ redirect_to_safety() in {countdown}s
          </p>
          <p className="text-gray-700 flex items-center gap-1">
            <span className="inline-block w-2 h-3 bg-violet-500/70 animate-pulse" />
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="group relative px-7 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-sm tracking-wide uppercase cursor-pointer overflow-hidden hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-105 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">← Volver al inicio</span>
          </button>
          <span className="text-gray-700 text-xs font-mono">
            o espera{" "}
            <span
              className={`font-bold tabular-nums ${
                countdown <= 5 ? "text-red-400 animate-pulse" : "text-violet-400"
              }`}
            >
              {countdown}s
            </span>
          </span>
        </div>
      </div>

      {/* Bottom morse code decoration */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 opacity-20">
        {[1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0].map((dot, i) => (
          <div
            key={i}
            className={`bg-violet-500 rounded-full h-1 ${dot ? "w-4" : "w-1.5"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFound;
