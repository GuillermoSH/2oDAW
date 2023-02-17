<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset= "UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{$css_dir}/styles.css" rel="stylesheet" type="text/css">
    <title>{$empleado->ap1} {$empleado->ap2}, {$empleado->nombre}</title>
</head>
<body class="container container-detalles">
    <div class="header header-bb-orange centered">
        <h1>TAREAS: {$empleado->ap1} {$empleado->ap2}, {$empleado->nombre}</h1>
    </div>
    <div class="main">
        <table>
            <tr>
                <th>Id</th>
                <th>Descripción</th>
                <th>Fecha Límite</th>
                <th>Completada</th>
            </tr>
            {foreach $listaTareas as $tarea}
            <form action="" method="post" enctype="multipart/form-data">
                <tr id='empleado_{$empleado->id}'>
                    <td>{$tarea->id}</td>
                    <td>{$tarea->descripcion}</td>
                    <td>{$tarea->fecha_limite}</td>
                    <td>{$tarea->completada}</td>
                </tr>
            </form>
            {/foreach}
        </table>
        <div class="centered" style="margin-block: 20px">
            <button class="btn btn-solid btn-solid-orange" onclick="history.back()">Volver atras</button>
        </div>
    </div>
    <div class="footer centered">
        <p><strong>Creado por:</strong> GuillermoSH</p>
    </div>
</body>
</html>