$(document).ready(function () {
    $.getJSON('./productos.json', function (resultado) {
        $.each(resultado, function (clave, valor) {
            $('#articulos').append($('div#' + clave)).append($('<div>' + clave + '</div>')).append($('<div>' + valor.toFixed(2) + '</div>'));
        });
    });
});