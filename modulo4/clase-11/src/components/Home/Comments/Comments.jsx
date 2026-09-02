import { useState } from "react";

const theories = [
  {
    id: 1,
    user: "ShadowSeeker_X",
    avatar: "🕵️",
    time: "hace 2 horas",
    theory: "La IA Oculta de los Gobiernos",
    comment:
      "Los modelos de inteligencia artificial más avanzados no son los que conocemos públicamente. Existen sistemas capaces de predecir comportamientos sociales con 94% de precisión, usados en secreto por al menos 7 gobiernos. GPT-4 es apenas la punta del iceberg.",
    likes: 342,
    replies: 47,
    tag: "Tecnología",
    verified: true,
  },
  {
    id: 2,
    user: "NocturnalTruth",
    avatar: "🌑",
    time: "hace 5 horas",
    theory: "El Gran Reset Financiero de 2025",
    comment:
      "Los bancos centrales llevan 3 años preparando la transición forzada a monedas digitales (CBDC). El colapso del sistema bancario tradicional no fue un accidente: fue la excusa perfecta para implementar dinero programable con fecha de vencimiento.",
    likes: 891,
    replies: 134,
    tag: "Economía",
    verified: false,
  },
  {
    id: 3,
    user: "ArchivistZ",
    avatar: "📡",
    time: "hace 1 día",
    theory: "Señales de Origen Desconocido en el Polo Sur",
    comment:
      "Desde 2023, múltiples estaciones científicas reportan señales de radio de frecuencias no catalogadas provenientes de bajo el hielo antártico. La NASA redirigió dos satélites para monitorear la zona. Los informes fueron clasificados 72 horas después.",
    likes: 2104,
    replies: 289,
    tag: "Astronomía",
    verified: true,
  },
  {
    id: 4,
    user: "D3ep_State_Watch",
    avatar: "🧬",
    time: "hace 2 días",
    theory: "Modificación Genética en el Suministro Alimentario",
    comment:
      "Investigaciones independientes detectaron compuestos no declarados en productos ultraprocesados de marcas globales. Algunos de estos compuestos tienen efectos documentados sobre los receptores de dopamina, creando dependencia equivalente a sustancias controladas.",
    likes: 1567,
    replies: 203,
    tag: "Salud",
    verified: false,
  },
  {
    id: 5,
    user: "VoidWatcher_99",
    avatar: "🌌",
    time: "hace 3 días",
    theory: "El Colapso Temporal de Mandela",
    comment:
      "Investigadores cuánticos de Ginebra documentaron 11 anomalías de memoria colectiva en 2024 que no tienen explicación bajo la física clásica. La teoría del multiverso ya no es ciencia ficción: el CERN podría haber creado micro-bifurcaciones en la línea temporal.",
    likes: 3872,
    replies: 512,
    tag: "Física",
    verified: true,
  },
];

const tagColors = {
  Tecnología: "text-cyan-400 border-cyan-800/50 bg-cyan-900/10",
  Economía: "text-amber-400 border-amber-800/50 bg-amber-900/10",
  Astronomía: "text-violet-400 border-violet-800/50 bg-violet-900/10",
  Salud: "text-emerald-400 border-emerald-800/50 bg-emerald-900/10",
  Física: "text-fuchsia-400 border-fuchsia-800/50 bg-fuchsia-900/10",
};

const CommentCard = ({ data }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(data.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="group relative p-6 rounded-xl border border-violet-900/20 bg-white/[0.02] hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-500">
      {/* Redacted top bar */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-violet-800/40 to-transparent" />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-violet-800/40 bg-black flex items-center justify-center text-xl">
            {data.avatar}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold text-sm">{data.user}</span>
              {data.verified && (
                <span title="Fuente verificada" className="text-violet-400 text-xs">⬡</span>
              )}
            </div>
            <span className="text-gray-600 text-xs">{data.time}</span>
          </div>
        </div>

        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full border tracking-wide ${tagColors[data.tag]}`}
        >
          {data.tag}
        </span>
      </div>

      {/* Theory title */}
      <h4 className="text-violet-300 font-bold text-base mb-2 group-hover:text-violet-200 transition-colors duration-300">
        🔍 {data.theory}
      </h4>

      {/* Comment body */}
      <p className="text-gray-400 text-sm leading-relaxed mb-5 border-l-2 border-violet-800/40 pl-4">
        {data.comment}
      </p>

      {/* Actions */}
      <div className="flex items-center gap-5">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
            liked ? "text-violet-400" : "text-gray-600 hover:text-violet-400"
          }`}
        >
          <span>{liked ? "▲" : "△"}</span>
          <span>{likes.toLocaleString()}</span>
        </button>
        <button className="flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-fuchsia-400 transition-colors duration-200 cursor-pointer">
          <span>💬</span>
          <span>{data.replies} respuestas</span>
        </button>
        <button className="ml-auto text-xs text-gray-700 hover:text-red-400 transition-colors duration-200 cursor-pointer tracking-wide">
          ⚑ Reportar
        </button>
      </div>
    </div>
  );
};

const Comments = () => {
  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-600/40 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block text-fuchsia-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            — Foro clandestino —
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Últimas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-400">
              5 teorías
            </span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            Comentarios filtrados de los foros más oscuros de la red. Léelos
            antes de que desaparezcan.
          </p>
          {/* Warning badge */}
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full border border-red-900/40 bg-red-950/20">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400/80 text-xs tracking-wide">
              Contenido no verificado por fuentes oficiales
            </span>
          </div>
        </div>

        {/* Comment list */}
        <div className="flex flex-col gap-5">
          {theories.map((t) => (
            <CommentCard key={t.id} data={t} />
          ))}
        </div>

        {/* Load more */}
        <div className="mt-10 text-center">
          <button className="px-6 py-3 rounded-lg border border-violet-800/40 text-gray-500 text-xs font-semibold tracking-widest uppercase hover:border-violet-500/60 hover:text-violet-300 transition-all duration-300 cursor-pointer">
            Cargar más expedientes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comments;
