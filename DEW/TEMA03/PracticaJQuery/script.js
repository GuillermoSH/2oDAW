let precioTotalIgic = 0;
let descuentoTotalIgic = 0;

$(document).ready(function () {
    $("#container-main").css("display", "none").delay(4000).fadeIn('slow');
    $("#loader-square").removeClass("oculto").delay(3510).fadeOut('slow');

    $.getJSON('./productos.json')
        .done(function (resultado) {
            $.each(resultado, function (clave, valor) {
                $('#articulos')
                    .append($('<div>')
                        .attr("id", clave)
                        .append($('<input>')
                            .attr("type", "checkbox")
                            .attr("id", "in_" + clave.replaceAll(" ", "")))
                        .append($('<div>' + clave + '</div>'))
                        .append($('<div>' + valor.toFixed(2) + ' €</div>')));
            });
        });
});

$("#btnAgregar").click(function () {
    $.each($("input:checked"), function (clave, valor) {
        let divNombre = $(valor).next()[0];
        let nombre = $(divNombre).text();
        let precio = Number($(divNombre).next()[0].textContent.replace(" €", ""))
        let precioIgic = precio - precio * 0.07;

        if ($("#cesta").has($("div#" + nombre.replaceAll(" ", ""))).length) {
            let divCesta = $("div#" + nombre.replaceAll(" ", "")).children();
            let cantidad = Number(divCesta.first()[0].textContent.replace("x", ""));
            let precioAcumulado = Number(divCesta.last()[0].textContent.replace(" €", ""));

            $(divCesta).first().replaceWith("<div class='cantidad' value=" + (cantidad + 1) + ">" + (cantidad + 1) + "x</div>");
            $(divCesta).last().replaceWith("<div>" + (precioAcumulado + precioIgic).toFixed(2) + " €</div>");
        } else {
            $("#cesta")
                .append($('<div>')
                    .attr("id", divNombre.textContent.replaceAll(" ", ""))
                    .append($('<div>1x</div>')
                        .attr("value", "1")
                        .addClass("cantidad"))
                    .append($('<div> ' + divNombre.textContent + '</div>'))
                    .append($('<div>' + precioIgic.toFixed(2) + ' €</div>'))
                )
        }

        precioTotalIgic += precioIgic;
        descuentoTotalIgic += precio * 0.07;

        $()
    });
})