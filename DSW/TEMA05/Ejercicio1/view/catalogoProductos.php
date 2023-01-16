<?php

declare(strict_types=1);
require_once("../model/DAOProducto.php");
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Ejercicio 1</title>
    <script>
        function modificarGuardarProducto(idProducto) {
            let tr = document.getElementById("producto_" + idProducto);
            let btn = tr.cells[tr.cells.length - 1].firstChild;

            if (btn.textContent == "Modificar") {
                for (let i = 1; i < tr.cells.length - 2; i++) {
                    tr.cells[i].firstChild.readOnly = false;
                    tr.cells[i].firstChild.style.backgroundColor = "lightblue";
                }
                btn.textContent = "Guardar";
            } else {
                let form = document.createElement("form");
                const nombreCampos = ['id', 'descripcion', 'nombre', 'precio', 'imagen'];

                form.setAttribute("action", "../controller/productos/modificacion.php");
                form.setAttribute("method", "post");
                form.setAttribute("enctype", "multipart/form-data");

                for (let i = 1; i < tr.cells.length - 2; i++) {
                    let valor = tr.cells[i].firstChild.value;
                    let input = document.createElement("input");
                    input.setAttribute("name", nombreCampos[i]);
                    input.setAttribute("value", valor);
                    form.appendChild(input);
                    tr.cells[i].firstChild.readOnly = true;
                    tr.cells[i].firstChild.style.backgroundColor = "white";
                }
                btn.textContent = "Modificar";

                fetch(form.action, {
                    body: new FormData(form),
                    method: "post"
                }).then((respuesta) => respuesta.text()).then(
                    respText => {
                        try {
                            let resultado = JSON.parse(respText).resultado;
                        } catch (e) {
                            console.log("Error en cadena JSON: " + respText);
                        }
                        if (resultado == true) {
                            alert("Datos modificados correctamente");
                        } else {
                            alert("Error actualizando los datos");
                        }
                    }
                );
            }

        }

        function eliminarProducto(id) {
            let confirmar = confirm("¿Estás seguro de que quieres eliminar el producto: " + id + "?")
            if (confirmar) {
                let form = document.createElement("form");
                form.setAttribute("action", "../controller/productos/eliminar.php");
                form.setAttribute("method", "post");
                form.setAttribute("enctype", "multipart/form-data");
                let input = document.createElement("input");
                input.name = "id";
                input.value = id;
                form.appendChild(input);
            }
            fetch(form.action, {
                body: new FormData(form),
                method: "post"
            }).then((respuesta) => respuesta.text()).then(
                respText => {
                    try {
                        let resultado = JSON.parse(respText).resultado;
                    } catch (e) {
                        console.log("Error en cadena JSON: " + respText);
                    }
                    if (resultado == true) {
                        alert("Producto eliminado correctamente");
                    } else {
                        alert("Error eliminando el producto");
                    }
                }
            );
            window.location.reload();
        }

        function recargarPagina() {
            let pag = document.querySelector("#pag").value;
            let tamPag = document.querySelector("#tamPag").value;
            document.location = "?pag=" + pag + "&tamPag=" + tamPag;
        }
    </script>
</head>

<body>
    <h1>Catálogo de Productos - Imprenta S.A.</h1>
    <div id="controlPag">
        <label for="pag">Pág:</label>
        <select onchange="recargarPagina()" id="pag" name="pag" value="<?= $pag; ?>">
            <?php
            for ($i = 1; $i <= $numPaginas; $i++) {
                if ($i == $pag) {
                    echo "<option selected>$i</option>";
                } else {
                    echo "<option>$i</option>";
                }
            }
            ?>
        </select>
        <label for="tamPag">Tamaño de la página:</label>
        <select onchange="recargarPagina()" id="tamPag" name="tamPag" value="">
            <?php
            for ($i = 10; $i <= 50; $i += 5) {
                if ($i == $tamPag) {
                    echo "<option selected>$i</option>";
                } else {
                    echo "<option>$i</option>";
                }
            }
            ?>
        </select>
    </div>
    <table>
        <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
        </tr>
        <?php
        foreach ($paginaProductos as $producto) {
            echo "<tr id='producto_$producto->id'>
                    <td><input type='text' value='$producto->id' maxlength='6' size='6' readonly='readonly'/></td>
                    <td><input type='text' value='$producto->descripcion' maxlength='512' size='50' readonly='readonly'/></td>
                    <td><input type='text' value='$producto->nombre' maxlength='40' size='30' readonly='readonly'/></td>
                    <td><input type='number' value='$producto->precio' maxlength='11' size='10' readonly='readonly' step='0.01'/></td>
                    <td><input type='text' value='$producto->imagen' maxlength='40' size='20' readonly='readonly'/></td>
                    <td><button onclick='eliminarProducto(\"$producto->id\")'>Eliminar</button></td>
                    <td><button onclick='modificarGuardarProducto(\"$producto->id\")'>Modificar</button></td>
                </tr>";
        }
        ?>
        <form action="productos/insertar.php" method="post" enctype="multipart/form-data">
            <tr>
                <td><input type='text' name="id" maxlength='6' size='6' readonly='readonly' value="<?= $siguienteProducto;?>"/></td>
                <td><input type='text' name="descripcion" maxlength='512' size='50' /></td>
                <td><input type='text' name="nombre" maxlength='40' size='30' /></td>
                <td><input type='number' name="precio" maxlength='11' size='10' step='0.01'/></td>
                <td><input type='text' name="imagen" maxlength='40' size='20' /></td>
                <td><button type='submit'>Nuevo Producto</button></td>
            </tr>
        </form>
    </table>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>

</html>