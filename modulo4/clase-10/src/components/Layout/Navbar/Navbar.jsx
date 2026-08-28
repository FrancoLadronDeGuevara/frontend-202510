const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-gray-800 flex justify-between items-center text-white p-4">
      <img
        alt="Your Company"
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
        className="h-8 w-auto"
      />
      <ul className="flex gap-6">
        <li className="font-bold">INICIO</li>
        <li className="font-bold">ACERCA DE</li>
        <li className="font-bold">SOBRE NOSOTRAS</li>
      </ul>
      <button className="px-4 py-2 bg-green-500 rounded hover:bg-green-700 cursor-pointer">
        Iniciar Sesión
      </button>
    </nav>
  );
};

export default Navbar;
