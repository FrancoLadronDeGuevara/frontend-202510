export function alertaExito(titulo, icono) {
  Swal.fire({
    position: "center-center",
    icon: icono,
    title: titulo,
    showConfirmButton: false,
    timer: 1500,
  });
}
