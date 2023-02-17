<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de productos</title>
    <link href="{$css_dir}/styles.css" rel="stylesheet" type="text/css">

    <script>
    {literal}
        function recargarPagina() {
            let pag = document.querySelector("#pag").value;
            let tamPag = document.querySelector("#tamPag").value;
            document.location="?pag="+pag+"&tamPag="+tamPag;
        }
        function filtrarFamilia() {
            let seleccion = document.getElementById("familia").value;
            document.location="?familia="+seleccion;
        }
    {/literal}
    </script>
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
        <div class="search-menu">
            <div class="family-filter">
                <label for="familia">Filtrar por familia</label>
                <select class="form-select" name="familia" id="familia" onchange="filtrarFamilia()">
                    <option selected value=''>Mostrar todas</option>
                    {foreach $listadoFamilias as $familia}
                        {if $familia@key == $familiaSeleccionada}
                            <option selected='selected' value="{$familia@key}">{$familia}</option>
                        {else}
                            <option value="{$familia@key}">{$familia}</option>
                        {/if}
                    {/foreach}
                </select>
            </div>
            <div class="page-filter centered">
                <div>
                    <label for='tamPag'>Tamaño de página:</label>
                    <select onchange="recargarPagina()" name="tamPag" id="tamPag" value="">
                        {for $i=10 to 50 step 5} 
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
        </div>
        <div class="products-table">
            <table>
                <tr>
                    <th>Acción</th>
                    <th>Producto</th>
                    <th>Precio</th>
                </tr>
                {foreach $paginaProductos as $producto}
                    <form action="" method="post" enctype="multipart/form-data">
                    {if $producto->familia == "ORDENA"}
                        <tr id='producto_{$producto->cod}'>
                            <td>
                                <button type='submit' class="btn btn-outline btn-outline-orange btn-rounded-special" name="aniadir" value="{$producto->cod}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                    </svg>
                                </button>
                            </td>
                            <td><span><a href="Detalles.php?cod={$producto->cod}" >{$producto->nombre_corto}</a></td>
                            <td><span>{number_format($producto->PVP, 2, '.', '')} €</td>
                        </tr>
                    {else}
                        <tr id='producto_{$producto->cod}'>
                            <td>
                                <button type='submit' class="btn btn-outline btn-outline-orange btn-rounded-special" name="aniadir" value="{$producto->cod}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                    </svg>
                                </button>
                            </td>
                            <td><span>{$producto->nombre_corto}</td>
                            <td><span>{number_format($producto->PVP, 2, '.', '')} €</td>
                        </tr>
                    {/if}
                    </form>
                {/foreach}
            </table>
        </div>
    </div>
    <div class="cart-menu">
        <h1 class="cart-title">Cesta</h1>
        {foreach $carro -> getListaProductos() as $articuloCarro}
            <form class="product-info" action="" method="post" enctype="multipart/form-data">
                <div class="action-btns">
                    <p class="product-title">{$articuloCarro->nombre_corto}</p>
                    <button type="submit" class="btn btn-rounded btn-solid btn-solid-orange centered" name="aniadir" value="{$articuloCarro->cod}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </button>
                    <button type="submit" class="btn btn-rounded btn-solid btn-solid-orange centered" name="restar" value="{$articuloCarro->cod}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </button>
                    <button type="submit" class="btn btn-rounded btn-solid btn-solid-orange centered" name="eliminar" value="{$articuloCarro->cod}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </button>
                </div>
                <div>
                    <p>
                        <strong>Cantidad: </strong>
                        {$articuloCarro->cantidad}
                    </p>
                    <p>
                        <strong>Precio: </strong>
                        {number_format($articuloCarro->PVP, 2, '.', '')} €
                    </p>
                </div>
            </form>
        {/foreach}
        {* imprimimos el total del carrito *}
        <p class="h5 text-end"><strong style="color: #f66b0e">TOTAL:</strong> {number_format($carro->getCosteTotal(), 2, '.', '')} €</p>
    </div>
</body>
</html>