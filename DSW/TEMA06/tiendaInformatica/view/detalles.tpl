<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalles</title>
    <link href="{$css_dir}/details.css" rel="stylesheet" type="text/css">
</head>
<body class="container">
    <div class="navbar">
        <h1 class="navbar-title">Lista de productos</h1>
        <div class="login-container centered">
            <div>
                ¡Bienvenido <span style="color: #f66b0e">{$usuario}</span>!
            </div>
            <button class="btn btn-rounded btn-solid btn-solid-orange centered" type="submit" onclick="location.href='Logout.php'">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
            </button>
        </div>
    </div>
    <div class="main">
        <div class="main-title">Detalles del producto: {$codProducto}</div>
        <div class="row">
            <table class="table">
            {foreach $detallesProducto as $detalles}
                <tr>
                    <td class="cell-title"><strong>Nombre</strong></td>
                    <td>{$detalles->nombre_corto}</td>
                </tr>
                <tr>
                    <td class="cell-title"><strong>Código</strong></td>
                    <td>{$detalles->cod}</td>
                </tr>
                <tr>
                    <td class="cell-title"><strong>Procesador</strong></td>
                    <td>{$detalles->procesador}</td>
                </tr>
                <tr>
                    <td class="cell-title"><strong>RAM</strong></td>
                    <td>{$detalles->RAM} GB</td>
                </tr>
                <tr>
                    <td class="cell-title"><strong>Tarjeta gráfica</strong></td>
                    <td>{$detalles->grafica}</td>
                </tr>
                <tr>
                    <td class="cell-title"><strong>Unidad óptica</strong></td>
                    <td>{$detalles->unidadoptica}</td>
                </tr>
                <tr>
                    <td class="cell-title"><strong>Sistema Operativo</strong></td>
                    <td>{$detalles->SO}</td>
                </tr>
                <tr>
                    <td class="cell-title"><strong>Otros</strong></td>
                    <td>{$detalles->otros}</td>
                </tr>
                <tr>
                    <td class="cell-title"><strong>PVP</strong></td>
                    <td>{$detalles->PVP} €</td>
                </tr>
                <tr>
                    <td class="cell-title"><strong>Descripción</strong></td>
                    <td>{$detalles->descripcion}</td>
                </tr>
            {/foreach}
            </table>
            <div class="centered" style="margin-top: 10px;">
                <button class="btn btn-solid btn-solid-orange centered" onclick="history.back();">Volver atrás</button>
            </div>
        </div>
    </div>

    
</body>
</html>