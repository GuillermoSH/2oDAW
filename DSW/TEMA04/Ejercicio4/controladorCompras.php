<?php
    declare(strict_types=1);
    require_once("Carrito.php");
    session_start();
    require_once("../../../config.php");
    require_once("DAOProductos.php");

    if(isset($_SESSION['carro'])){
        $carro=$_SESSION['carro'];
    }else{
        $carro=new Carrito(); 
    }

    $listaProductos=getListaProductos();
    
    if(isset($_POST['idProd'])){
        $producto=null;
        $idProd=$_POST['idProd'];
        foreach($listaProductos as $prod){
            if($prod->id ==$idProd){
                $producto=$prod;
                break;
            }
        }
        if($producto!=null){
            $operacion=$_POST['operacion'];
            if($operacion=='comprar'){
                $carro->aniadirProducto($producto);
            }
            if($operacion=='eliminar'){
                $carro->borrarProducto($producto);
            }
        }
    }

    $listaProductosCarro=$carro->getListaProductos();
    $coteTotalCarro=$carro->totalCarro();

    require_once("vistaCompras.php"); 

    $_SESSION['carro']=$carro;

    //require_once("vistaCarrito.php"); 
?>