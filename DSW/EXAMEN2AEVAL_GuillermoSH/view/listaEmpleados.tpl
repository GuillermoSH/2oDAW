<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{$css_dir}/styles.css" rel="stylesheet" type="text/css">
    <title>Listado Empleados</title>
    <script>
        {literal}
            function recargarPagina() {
                let pag = document.querySelector("#pag").value;
                let tamPag = document.querySelector("#tamPag").value;
                document.location="?pag="+pag+"&tamPag="+tamPag;
            }
        {/literal}
        </script>
</head>

<body class="container container-principal">
    <div class="header centered">
        <h1>Listado Empleados Atareados</h1>
    </div>
    <div class="header-filter centered">
        <div>
            <label for='tamPag'>Tamaño de página:</label>
            <select onchange="recargarPagina()" name="tamPag" id="tamPag" value="">
                {for $i=10 to 25 step 5}
                {if $i == $tamPag}
                <option selected='selected'>{$i}</option>
                {else}
                <option>{$i}</option>
                {/if}
                {/for}
            </select>
        </div>
        <div>
            <label for='pag'>Pág:</label>
            <select onchange="recargarPagina()" name="pag" id="pag">
                {for $i = 1 to $numPaginas}
                {if $i == $pag}
                <option selected='selected'>{$i}</option>
                {else}
                <option>{$i}</option>
                {/if}
                {/for}
            </select>
            de {$numPaginas}
        </div>
    </div>
    <div class="main">
        <table>
            <tr>
                <th>Id</th>
                <th>Nombre y Apellidos del Empleado</th>
                <th>Email</th>
            </tr>
            {foreach $paginaEmpleados as $empleado}
            <form action="" method="post" enctype="multipart/form-data">
                <tr id='empleado_{$empleado->id}'>
                    <td>{$empleado->id}</td>
                    <td><a href="listaTareasPorEmpleado.php?id={$empleado->id}">{$empleado->ap1} {$empleado->ap2}, {$empleado->nombre}</a></td>
                    <td>{$empleado->email}</td>
                </tr>
            </form>
            {/foreach}
        </table>
        <div class="centered" style="margin-block: 20px">
            <button class="btn btn-solid btn-solid-orange" onclick="document.location = '../index.php'">Volver al menu</button>
        </div>
    </div>
    <div class="footer centered">
        <p><strong>Creado por:</strong> GuillermoSH</p>
    </div>
</body>

</html>