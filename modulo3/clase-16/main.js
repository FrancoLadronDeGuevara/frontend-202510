/****************** ELEMENTOS DEL DOM ********************/
const $listaPersonajes = document.getElementById("personajes");
const $botonAnterior = document.querySelector(".anterior");
const $botonSiguiente = document.querySelector(".siguiente");
const $botonPagina = document.querySelector(".pagina");
const $busqueda = document.getElementById("busqueda");
const $filtroGenero = document.getElementById("filtro-genero");
const $filtroAlignment = document.getElementById("filtro-alignment");
const $filtroEditorial = document.getElementById("filtro-editorial");
const $botonLimpiar = document.getElementById("btn-limpiar");

/****************** ESTADO GLOBAL ********************/
let todosLosHeroes = []; //AQUÍ SE VAN A GUARDAR LOS 563 HEROES
let heroesFiltrados = [];
let paginaActual = 1;
const tamanioPagina = 20;

async function cargarHeroes() {
  $listaPersonajes.innerHTML = `
    <div class="loader">
      <div class="loader-spinner"></div>
      <p>Cargando héroes...</p>
    </div>
  `;

  const respuesta = await fetch(
    "https://akabab.github.io/superhero-api/api/all.json"
  );

  todosLosHeroes = await respuesta.json();
  heroesFiltrados = [...todosLosHeroes];

  poblarEditorial();
  mostrarHeroes();
}

function mostrarHeroes() {
  const total = heroesFiltrados.length;
  const totalPaginas = Math.ceil(total / tamanioPagina) || 1;

  if (paginaActual > totalPaginas) paginaActual = totalPaginas;

  const empieza = (paginaActual - 1) * tamanioPagina;
  const termina = empieza + tamanioPagina;
  const lista = heroesFiltrados.slice(empieza, termina);

  $botonAnterior.disabled = paginaActual === 1;
  $botonSiguiente.disabled = paginaActual === totalPaginas;
  $botonPagina.textContent = `${paginaActual} / ${totalPaginas}`;

  if (lista.length === 0) {
    $listaPersonajes.innerHTML = `
      <div class="sin-resultados">
        <span class="sin-resultados-icon">🦸</span>
        <p>No se encontraron héroes con esos filtros.</p>
      </div>
    `;
    return;
  }

  $listaPersonajes.innerHTML = lista
    .map(
      (personaje) =>
        `
    <div class="tarjeta">
      <span>${
        personaje.biography.alignment === "good"
          ? "😇"
          : personaje.biography.alignment === "bad"
          ? "😈"
          : "😐"
      }</span>
      <img
        src=${personaje.images.sm}
        alt=""
      />
      <div class="overlay"></div>
      <p>${personaje.name}</p>
    </div>
  
  `
    )
    .join("");
}

/************ POBLAR SELECT DE EDITORIALES **************/
function poblarEditorial() {
  const editoriales = [
    ...new Set(
      todosLosHeroes
        .map((heroe) => heroe.biography.publisher)
        .filter((publisher) => publisher && publisher !== "-")
    ),
  ].sort();

  editoriales.forEach((editorial) => {
    const option = document.createElement("option");
    option.value = editorial;
    option.textContent = editorial;
    $filtroEditorial.appendChild(option);
  });
}

function filtrarHeroes() {
  const textoBusqueda = $busqueda.value.toLowerCase().trim();
  const genero = $filtroGenero.value;
  const alignment = $filtroAlignment.value;
  const editorial = $filtroEditorial.value;

  heroesFiltrados = todosLosHeroes.filter((heroe) => {
    const coincideBusqueda = heroe.name.toLowerCase().includes(textoBusqueda);
    const coincideGenero = genero === "" || heroe.appearance.gender === genero;
    const coincideAlignment =
      alignment === "" || heroe.biography.alignment === alignment;
    const coincideEditorial =
      editorial === "" || heroe.biography.publisher === editorial;

    return (
      coincideBusqueda &&
      coincideGenero &&
      coincideAlignment &&
      coincideEditorial
    );
  });

  paginaActual = 1;
  mostrarHeroes();
}

/*********** LIMPIAR FILTROS *************/
function limpiarFiltros() {
  $busqueda.value = "";
  $filtroGenero.value = "";
  $filtroAlignment.value = "";
  $filtroEditorial.value = "";
  heroesFiltrados = [...todosLosHeroes];
  paginaActual = 1;
  mostrarHeroes();
}
/*********** FIN LIMPIAR FILTROS *************/

$botonSiguiente.onclick = () => {
  const totalPaginas = Math.ceil(heroesFiltrados.length / tamanioPagina);

  if (paginaActual < totalPaginas) {
    paginaActual++;
    mostrarHeroes();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

$botonAnterior.onclick = () => {
  if (paginaActual > 1) {
    paginaActual--;
    mostrarHeroes();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

let debounceTimer;
$busqueda.oninput = () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(filtrarHeroes, 500);
};

$filtroGenero.onchange = () => {
  filtrarHeroes();
};
$filtroAlignment.onchange = () => {
  filtrarHeroes();
};
$filtroEditorial.onchange = () => {
  filtrarHeroes();
};

$botonLimpiar.onclick = () => {
  limpiarFiltros();
};

cargarHeroes();
