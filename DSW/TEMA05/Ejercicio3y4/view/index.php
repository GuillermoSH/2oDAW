<?php
require_once("../model/DAOProducto.php")
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./css/styles.css" rel="stylesheet">
    <title>Gestisimal</title>
    <script defer>
        function modificarGuardarProducto(idProducto) {
            let tr = document.getElementById("producto_" + idProducto);
            let btn = tr.cells[tr.cells.length - 3].firstChild;

            if (btn.textContent == "Modificar") {
                for (let i = 1; i < tr.cells.length - 4; i++) {
                    tr.cells[i].firstChild.readOnly = false;
                    tr.cells[i].firstChild.style.backgroundColor = "lightblue";
                    console.log(tr.cells[i].firstChild.value);
                }
                btn.textContent = "Guardar";
            } else {
                const valorCampos = [];
                for (let i = 1; i < tr.cells.length - 4; i++) {
                    valorCampos.push(tr.cells[i].firstChild.value);
                }
                btn.textContent = "Modificar";
                window.location.href = "../controller/modificacion.php?codigo=" + valorCampos[0] + "&descripcion=" + valorCampos[1] + "&pcompra=" + valorCampos[2] + "&pventa=" + valorCampos[3] + "&stock=" + valorCampos[4];
            }

        }

        function eliminarProducto(id) {
            let confirmar = confirm("¿Estás seguro de que quieres eliminar el producto: " + id + "?")
            if (confirmar) {
                window.location.href = "../controller/eliminar.php?codigo=" + id;
            }
            window.location.reload();
        }

        function movimientoProducto(idProducto, flag) {
            let cantidad;
            if (flag) {
                cantidad = prompt("¿Cuánto stock va a añadir?")
            } else {
                cantidad = prompt("¿Cuánto stock va a retirar?")
            }
            window.location.href = "../controller/modificarStock.php?codigo=" + idProducto + "&flag=" + flag + "&cantidad=" + cantidad;
        }
    </script>
</head>

<body>
    <h1>Gestisimal</h1>
    <div class="controlPag">
        <label for="pag">Pág:</label>
        <select name="pag" id="pag" selected="<?=$pag; ?>">
            <?php
            for ($i=1; $i < $paginaProductos; $i++) { 
                if ($i==$pag) {
                    echo "<option selected>$i</option>";
                    } else {
                    echo "<option>$i</option>";
                }
            }
            ?>
        </select>
        <label for="tamPag"> Tamaño de página: </label>
        <select name="tamPag" id="tamPag" selected="<?=$tamPag; ?>">
            <?php
            for ($i=1; $i < $numPaginas; $i++) { 
                if ($i==$tamPag) {
                echo "<option selected>$i</option>";
                } else {
                echo "<option>$i</option>";
            }
            }
            ?>
        </select>
    </div>
    <table class="form-productList">
        <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio Compra</th>
            <th>Precio Venta</th>
            <th>Stock</th>
        </tr>
        <?php
        DAOProducto::generarListaProducto();
        ?>
    </table>
    <table class="form-newProduct">
        <form name="productoAlta" action="../controller/crearProducto.php" method="post" enctype="multipart/form-data">
            <tr>
                <th>Código</th>
                <th>Descripción</th>
                <th>Precio Compra</th>
                <th>Precio Venta</th>
                <th>Stock</th>
            </tr>
            <tr>
                <td><input type="text" name="newCodigo" /></td>
                <td><input type="text" name="newDescripcion" /></td>
                <td><input type="number" name="newPcompra" /></td>
                <td><input type="number" name="newPventa" /></td>
                <td><input type="number" name="newStock" /></td>
                <td><button type="submit">Crear Producto</button></td>
            </tr>
        </form>
    </table>
</body>

</html>