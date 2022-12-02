$(document).ready(function () {
    $("#container-main").addClass("oculto").delay(4000).fadeIn('slow');
    $("#loader-square").removeClass("oculto").delay(3510).fadeOut('slow');

    $.getJSON('./productos.json')
        .done(function (resultado) {
            $.each(resultado, function (clave, valor) {
                $('#articulos')
                    .append($('<div>' + clave)
                        .attr("id", clave)
                    .append($('<input>')
                        .attr("type", "checkbox")
                        .attr("id", "in_" + clave.replaceAll(" ", "")))
                    .append($('<div>' + clave + '</div>'))
                    .append($('<div>' + valor.toFixed(2) + '</div>')));
            });
        });
});