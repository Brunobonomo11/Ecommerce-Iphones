Swal.fire({
    title: "Queres continuar comprando en nuestra tienda?",
    showDenyButton: true,
    showCancelButton: "ELIMINAR",
    confirmButtonText: "CONTINUAR",
    denyButtonText: `SALIR`
}).then((result) =>{
    if(result.isConfirmed) {
        Swal.fire("MUCHAS GRCIAS", "", "success");
    } else if (result.isDenied) {
        Swal.fire("Los cambios no fueron guardados", "", "info");
    }
});