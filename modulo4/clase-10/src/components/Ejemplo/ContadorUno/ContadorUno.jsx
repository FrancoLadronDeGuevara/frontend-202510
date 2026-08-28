const ContadorUno = ({ contador, cambiarContador }) => {
  //DENTRO DE contador SE ENCUENTRA count (EL ESTADO DEL PADRE Ejemplo.jsx)
  //DENTRO DE cambiarContador SE ENCUENTRA setCount (LA FUNCION PARA CAMBIAR EL VALOR DE count)

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-100 border border-amber-300 rounded p-4">
      <h4 className="text-center font-bold">Contador 1</h4>
      <div className="flex gap-4">
        <button
          onClick={() => cambiarContador(contador - 1)}
          className="text-white px-4 py-2 bg-green-500 rounded hover:bg-green-700 cursor-pointer"
        >
          -
        </button>
        <span className="text-6xl font-bold">{contador}</span>
        <button
          onClick={() => cambiarContador(contador + 1)}
          className="text-white px-4 py-2 bg-green-500 rounded hover:bg-green-700 cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ContadorUno;
