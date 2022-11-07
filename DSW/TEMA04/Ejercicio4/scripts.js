function detalles(id) {
    const divDetalles = document.getElementById("detalles"+id);

    if (divDetalles.style.display === "none") {
        divDetalles.style.display = "block";
    } else {
        divDetalles.style.display = "none";
    }
}