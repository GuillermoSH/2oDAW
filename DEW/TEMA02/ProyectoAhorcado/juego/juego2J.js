const btnVolverInicio = document.getElementById("btnVolverInicio");
btnVolverInicio.addEventListener("click", () => {
    window.location.replace("../index.html");
    sessionStorage.removeItem("J2");
});