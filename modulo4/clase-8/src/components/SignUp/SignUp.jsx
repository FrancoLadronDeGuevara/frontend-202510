import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSignUp(e) {
    e.preventDefault();

    if (!password || !confirmPassword || !email) {
      setErrors(["Todos los campos son obligatorios"]);
      return;
    }

    if (password !== confirmPassword) {
      setErrors([...errors, "Las contraseñas no coinciden"]);
      return;
    }

    if (!terms) {
      setErrors([...errors, "Debes aceptar los terminos y condiciones"]);
      return;
    }

    setErrors([]);
    alert("Registro exitoso");

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setTerms(false);
  }

  return (
    <form
      onSubmit={handleSignUp}
      className="flex flex-col gap-12 border-blue-950 border rounded shadow-xl p-12"
    >
      <h2 className="text-2xl font-bold text-center">Registro</h2>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          className="block min-w-0 grow py-1.5 pl-1 text-base text-gray-900 placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 rounded mt-2"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="correo@correo.com"
          required
        />
      </div>
      <div className="flex flex-col relative">
        <label htmlFor="password">Contraseña</label>
        <input
          className="min-w-0 grow py-1.5 pl-1 text-base text-gray-900 placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 rounded mt-2"
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="********"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        {showPassword ? (
          <IoEyeOffOutline
            onClick={() => setShowPassword(false)}
            className="absolute right-4 top-10 cursor-pointer text-blue-900 text-xl"
          />
        ) : (
          <IoEyeOutline
            onClick={() => setShowPassword(true)}
            className="absolute right-4 top-10 cursor-pointer text-blue-900 text-xl"
          />
        )}
      </div>
      <div className="flex flex-col relative">
        <label htmlFor="repeat-password">Repetir Contraseña</label>
        <input
          className="min-w-0 grow py-1.5 pl-1 text-base text-gray-900 placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 rounded mt-2"
          type={repeatPassword ? "text" : "password"}
          id="repeat-password"
          placeholder="********"
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {repeatPassword ? (
          <IoEyeOffOutline
            onClick={() => setRepeatPassword(false)}
            className="absolute right-4 top-10 cursor-pointer text-blue-900 text-xl"
          />
        ) : (
          <IoEyeOutline
            onClick={() => setRepeatPassword(true)}
            className="absolute right-4 top-10 cursor-pointer text-blue-900 text-xl"
          />
        )}
      </div>
      <div className="flex items-center gap-2">
        <input
          onChange={(e) => setTerms(e.target.checked)}
          checked={terms}
          type="checkbox"
        />
        <span>
          He leído y acepto los{" "}
          <a className="text-blue-500" href="#">
            Terminos y Condiciones
          </a>{" "}
          de la plataforma
        </span>
      </div>
      {errors.length > 0 && (
        <ul className="p-4 bg-red-400 text-white rounded list-disc">
          {errors.map((error, index) => (
            <li className="ml-4" key={index}>
              {error}
            </li>
          ))}
        </ul>
      )}
      <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 cursor-pointer">
        Registrarse
      </button>
    </form>
  );
};

export default SignUp;
