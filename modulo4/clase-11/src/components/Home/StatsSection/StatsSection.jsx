import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1947, suffix: "", label: "Año del incidente de Roswell" },
  { value: 528, suffix: "K+", label: "Documentos desclasificados" },
  { value: 63, suffix: "%", label: "No cree en la versión oficial" },
  { value: 12, suffix: "", label: "Agencias de inteligencia globales" },
];

const useCounter = (target, duration = 1800, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const StatCard = ({ value, suffix, label, delay, active }) => {
  const count = useCounter(value, 1800 + delay, active);
  return (
    <div className="text-center group">
      <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-violet-300 to-fuchsia-500 mb-2 tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-gray-500 text-sm tracking-wide">{label}</div>
      <div className="mx-auto mt-3 w-8 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-black py-20 px-6 overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, #7c3aed 39px, #7c3aed 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #7c3aed 39px, #7c3aed 40px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <p className="text-center text-violet-400/60 text-xs tracking-[0.4em] uppercase mb-12">
          — Datos que no aparecen en los medios —
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} delay={i * 150} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
