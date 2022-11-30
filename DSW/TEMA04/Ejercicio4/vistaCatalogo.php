<script>
    function mostrarOcultarDetalle(idProd){
        let btnDetalle=document.getElementById("btn_"+idProd);
        let capaDetalle=document.getElementById("prod_"+idProd);
        if(btnDetalle.textContent=='Detalle'){
            btnDetalle.textContent='Ocultar';
            capaDetalle.classList.remove('oculto'); 
        }else{
            btnDetalle.textContent='Detalle';
            capaDetalle.classList.add('oculto'); 
        }
    }
</script>
<style>
    .oculto{
        display: none;
    }
 
</style>
<?php
    
    require_once("./controladorCompras.php");
    
    foreach($listaProductos as $producto){
        $ruta=ROOT_PATH."/DSW/Temas/Recursos/Imagenes/imgEstilografica/".$producto->imagen;
        echo "
            <div class='producto'> 
                <p>$producto->nombre</p><br/>
                <img src='$ruta'/><br/>
                <p>Precio: ",$producto->precio,"€</p><br/>
                <div class='oculto' id='prod_$producto->id'>
                    <p>$producto->descripcion</p>
                </div>
                <form action='' method='post' enctype='multipart/form-data'>
                    <input type='hidden' id='idProd_$producto->id' name='idProd' value='$producto->id'/>
                    <input type='hidden' name='operacion' value='comprar'/>
                    <button type='submit'>Comprar</button>
                    <button type='button' id='btn_$producto->id' onclick='mostrarOcultarDetalle($producto->id)'>Detalle</button>
                </form>
            </div>
            <hr/>
            ";
    }
?>