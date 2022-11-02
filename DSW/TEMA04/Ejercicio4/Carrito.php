<?php
    require_once("Producto.php");
    class Carrito
    {
        private $productos=[];

        public function __construct($productos)
        {
            $this->productos=$productos;
        }

        public function aniadir(Producto $producto)
        {
            if (in_array($producto, $this->productos)) {
                $producto["cantidad"]++;
            } else {
                $producto->cantidad=1;
                array_push($this->productos,$producto);
            }
        }
    }