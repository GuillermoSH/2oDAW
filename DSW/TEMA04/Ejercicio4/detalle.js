function mostrarOcultarDetalle(id) {
    let btnDetalles = document.getElementById("btn_detalle" + id);
    let divDetalles = document.getElementById("detalles" + id);

    if (btnDetalles.textContent == "Detalles") {
        btnDetalles.textContent = "Ocultar";
        divDetalles.classList.remove("oculto");
    } else {
        btnDetalles.textContent = "Detalles";
        divDetalles.classList.add("oculto");
    }
}