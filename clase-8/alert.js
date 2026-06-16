export function alertaExito(titulo) {
  Swal.fire({
    position: "center-center",
    icon: "success",
    title: titulo,
    showConfirmButton: false,
    timer: 1500,
  });
}
