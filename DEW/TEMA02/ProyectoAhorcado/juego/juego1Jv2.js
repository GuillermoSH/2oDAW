window.addEventListener("load", () => {
    ahorcado.dibujoInicial();
    generarProducto();
});

function generarProducto() {
    $("#container").css("display", "none").delay(4000).fadeIn('slow');
    $("#loader-square").css("display", "flex").delay(3400).fadeOut('slow');

    $.getJSON('./productos.json')
        .done(function (resultado) {
            let pelicula = resultado[Math.ceil(Math.random() * resultado.length)];
            $("#infoPelicula").append(pelicula)
        });
}