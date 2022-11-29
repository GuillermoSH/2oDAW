const listaInputs = document.getElementsByTagName("input");
const btnCarrito = document.getElementById("btnAgregar");
const cesta = document.getElementById("cesta");
let sumaTotal = 0;

/* Evento onclick en el boton de agregar al carrito */
btnCarrito.addEventListener("click", () => {
    agregarEnCesta();
    quitarChecks();
});

/**
 * Comprueba si el checkbox está marcado, y si lo está, suma el precio del producto al precio total
 */
function agregarEnCesta() {
    comprobarChecked();
    sumaIgic();
}

/**
 * Comprueba qué casillas de verificación están marcadas, luego obtiene el nombre y el precio del
 * producto, crea un div para cada producto y lo agrega al carrito de compras.
 */
function comprobarChecked() {
    const listaProductos = ["ps5", "tv", "nevera", "lavadora", "xbox"];
    for (let i = 0; i < listaInputs.length; i++) {
        if (listaInputs[i].checked) {
            let nombreProducto = document.getElementById(listaProductos[i]).childNodes[3].textContent;
            let precioProducto = document.getElementById(listaProductos[i]).childNodes[5].textContent;
            let divContainer = document.createElement("div");
            let divNombre = document.createElement("div");
            let divPrecio = document.createElement("div");
            divNombre.appendChild(document.createTextNode(nombreProducto));
            divPrecio.appendChild(document.createTextNode((precioProducto - precioProducto * 0.07).toFixed(2) + " €"));
            divPrecio.style = "text-align: end;";
            divContainer.appendChild(divNombre);
            divContainer.appendChild(divPrecio);
            divContainer.style = "display: flex; justify-content: space-between;"
            cesta.appendChild(divContainer);
            sumaTotal += parseInt(precioProducto); 
        }
    }
}

/**
 * Calcula el importe total de la cesta de la compra, el importe total del IGIC y el importe total de
 * la cesta de la compra con el IGIC
 */
function sumaIgic() {
    let suma = 0;
    for (let i = 1; i < cesta.childNodes.length; i++) {
        suma += parseFloat(cesta.childNodes[i].lastChild.textContent.split(" ")[0]);
    }
    let containerIgic = document.getElementById("totalCesta").children[0].childNodes[1];
    let containerImporteTotal = document.getElementById("totalCesta").children[1].childNodes[1];
    let totalIgic = sumaTotal - suma;
    containerImporteTotal.innerHTML = suma.toFixed(2);
    containerIgic.innerHTML = totalIgic.toFixed(2);
}

/**
 * Recorre la lista de entradas y, si alguna de ellas está marcada, la desmarca.
 */
function quitarChecks() {
    for (let i = 0; i < listaInputs.length; i++) {
        if (listaInputs[i].checked) {
            listaInputs[i].checked = false; 
        }
    }
}