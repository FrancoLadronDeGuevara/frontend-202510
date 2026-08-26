const CardPersonaje = ({ personaje }) => {
  return (
    <div className="p-4 rounded-2xl bg-white shadow-2xl flex flex-col gap-4 items-center w-80 h-100">
      <img
        src={`https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}`}
        alt=""
        className="w-30 border-2 border-gray-100 rounded-4xl shadow"
      />
      <p className="font-bold text-2xl">{personaje.name}</p>
      <p className="text-center">{personaje.occupation}</p>
      <div className="flex gap-4">
        {personaje.edad && (
          <p className="py-2 text-sm px-4 font-bold rounded-3xl border border-gray-200">
            Edad : {personaje.age}
          </p>
        )}
        <p
          className={`py-2 text-sm px-4 font-bold rounded-3xl border border-gray-200 ${
            personaje.status === "Alive"
              ? "text-green-600 bg-green-300"
              : "text-red-600 bg-red-300"
          }`}
        >
          {personaje.status === "Alive" ? "Vivo" : "Muerto"}
        </p>
      </div>
      <p className="italic text-sm text-ellipsis overflow-hidden text-center">
        {personaje.phrases[0]}
      </p>
    </div>
  );
};

export default CardPersonaje;
