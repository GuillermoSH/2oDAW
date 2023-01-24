<?php 
    declare(strict_types = 1); 
    //LA VISTA NO PUEDE ACCEDER AL MODELO
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Juan Diego Mesa Alvarez">
    <title>Mantenimiento de Productos</title>
    <script>
        function modificarGuardarProducto(idProd) {
            var tr = document.getElementById("producto_" + idProd);
            var btn = tr.cells[tr.cells.length - 1].firstChild;
            if (btn.textContent == "Modificar") {
                btn.textContent = "Guardar";
                for(var i = 1; i < tr.cells.length - 2; i++) {
                    tr.cells[i].firstChild.readOnly = false;
                    tr.cells[i].firstChild.style.backgroundColor = "lightblue";
                }
            } else {
                var form = document.createElement("form");
                const nombreCampos = ['id', 'descripcion', 'nombre', 'precio', 'imagen'];
                form.setAttribute("action", "../Controlador/Productos/modificacion.php");
                form.setAttribute("method", "post");
                form.setAttribute("enctype", "multipart/form-data");
                for(var i = 0; i < tr.cells.length - 2; i++) {
                    let valor = tr.cells[i].firstChild.value;
                    let input = document.createElement("input");
                    input.setAttribute("name", nombreCampos[i]);
                    input.setAttribute("value", valor);
                    form.appendChild(input);
                    tr.cells[i].firstChild.readOnly = true;
                    tr.cells[i].firstChild.style.backgroundColor = "white";
                }

                btn.textContent = "Modificar";
                // Enviamos datos al servidor
                fetch(form.action, {
                    // en el body habia que crear un formdata
                        body: new FormData(form),
                        method: "post"
                        // obtenemos respuesta dle servidor 
                    }).then(respuesta => respuesta.text()).then(
                        // y con la respuesta un jsonparse
                        respTxt => {
                            try {
                                var resultado = JSON.parse(respTxt).resultado
                            } catch (e) {
                                console.log("Error en cadena JSON: " +respTxt);
                            }
                            if (resultado == true) {
                                alert("Datos modificados correctamente.");
                            } else {
                                alert("Error actualizando los datos");
                            }
                        }
                    )
            }
        }

        function eliminarProducto(id) {
            var confirmar = confirm("¿Estás seguro de que quieres eliminar el producto " + id + "?");
            if (confirmar) {
                // Lanzamos un fetch pero le enviamos por post el id producto
                var form = document.createElement("form");
                form.setAttribute("action", "../Controlador/Productos/eliminar.php");
                form.setAttribute("method", "post");
                form.setAttribute("enctype", "multipart/form-data");
                let input = document.createElement("input");
                input.setAttribute("name", "id");
                input.setAttribute("value", id);
                form.appendChild(input);

                fetch(form.action, {
                    // en el body habia que crear un formdata
                        body: new FormData(form),
                        method: "post"
                        // obtenemos respuesta dle servidor 
                    }).then(respuesta => respuesta.text()).then(
                        // y con la respuesta un jsonparse
                        respTxt => {
                            try {
                                var resultado = JSON.parse(respTxt).resultado;
                                // { "resultado" : true } accedo a este valor
                            } catch (e) {
                                console.log("Error en cadena JSON: " +respTxt);
                            }
                            if (resultado == true) {
                                alert("Producto " + id + " eliminado correctamente.");
                            } else {
                                alert("Error eliminando producto " + id + ".");
                            }
                        }
                    )
                // recargo la pagina
                window.location.reload();
            }
        }

        function recargarPagina() {
            var pag = document.querySelector("#pag").value;
            var tamPag = document.querySelector("#tamPag").value;
            document.location="?pag="+pag+"&tamPag="+tamPag;
        }
    </script>
</head>
<body>
    <h1>Catálogo de productos - Impresa S.A.</h1>
    <div id='controlPag'>
        <label for='pag'>Pág:</label>
        <select onchange="recargarPagina()" name="pag" id="pag" value="<?= $pag; ?>"> <!-- uso la variable del mantenimientoproductos $pag -->
            <?php
                for ($i=1; $i <= $numPaginas; $i++) { 
                    if ($i == $pag) {
                    echo "<option selected='selected'>$i</option>";
                    } else {
                        echo "<option>$i</option>";
                    }
                }
            ?>
        </select>
        de <?= $numPaginas ?>.
        <label for='tamPag'>Tamaño de página:</label>
        <select onchange="recargarPagina()" name="tamPag" id="tamPag" value="">
            <?php
                for ($i=10; $i <= 50; $i+=5) { 
                    if ($i == $tamPag) {
                        echo "<option selected='selected'>$i</option>";
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
            <th>Descripcion</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
        </tr>
        <?php
            foreach($paginaProductos as $producto) {
                echo "<tr id='producto_$producto->id'>
                    <td><input type='text' size='6' maxlength='6' readonly='readonly' value='$producto->id'/></td>
                    <td><input type='text' size='40' maxlength='512' readonly='readonly' value='$producto->descripcion'/></td>
                    <td><input type='text' size='40' maxlength='40' readonly='readonly' value='$producto->nombre'/></td>
                    <td><input type='number' size='11' maxlength='11' readonly='readonly' value='$producto->precio'/></td>
                    <td><input type='text' size='40' maxlength='40' readonly='readonly' value='$producto->imagen'/></td>
                    <td><button type='button' onclick='eliminarProducto(\"$producto->id\");'>Eliminar</button></td>
                    <td><button type='button' onclick='modificarGuardarProducto(\"$producto->id\");'>Modificar</button></td>
                </tr>";
                
            }
        ?>

    </table>
    <table>
        <hr>
        <tr>
            <th>Descripcion</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
        </tr>
        <!-- ./Productos/insertar.php porque estamos cargando la vista desde mantenimientoproductos.php -->
        <form action="./Productos/insertar.php" method="post" enctype="multipart/form-data">
            <tr>
                <!-- <td><input name="id" type='text' size='6' maxlength='6' readonly='readonly' value='<?= $siguienteProducto ?>'/></td> -->
                <td><input required='required' name="descripcion" type='text' size='40' maxlength='512' value=''/></td>
                <td><input required='required' name="nombre" type='text' size='40' maxlength='40' value=''/></td>
                <td><input required='required' name="precio" type='number' size='11' maxlength='11' value=''/></td>
                <td><input required='required' name="imagen" type='text' size='40' maxlength='40' value=''/></td>
                <td><button type='submit'>Nuevo producto</button></td>
            </tr>
        </form>
    </table>
</body>
</html>