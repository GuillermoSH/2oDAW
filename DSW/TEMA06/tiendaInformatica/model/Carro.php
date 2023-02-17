<?php
    declare(strict_types = 1);
    
    class Carro
    {
        private $listaProductos = [];

        /**
         * Función que añade un artículo a la cesta
         */
        public function aniadir(Ordenador | Producto $p, int $cantidad = 1)
        {
            // si esta en el carro, se incrementa en 1, si no pues se añade
            if (isset($this -> listaProductos[$p -> cod])) {
                // Incrementar la cantidad del que teniamos guardado en la lista
                $productoBuscado = $this -> listaProductos[$p -> cod];
                $productoBuscado -> cantidad += $cantidad;
            } else {
                // se añade
                $p -> cantidad = $cantidad;
                $this -> listaProductos[$p -> cod] = $p;
            }
        }

        /**
         * Función que borra un artículo de la cesta
         */
        public function borrar(Ordenador | Producto $p) : bool
        {
            // como minimo habria una cantidad de ese producto
            if (isset($this-> listaProductos[$p -> cod])) {
                unset($this -> listaProductos[$p -> cod]);
                return true;
            }
            return false;
        }

        /**
         * Función que resta un artículo de la cesta
         */
        public function restar(Ordenador | Producto $p, $cantidad) : bool
        {
            // si el producto estaba ya en el carro
            if (isset($this-> listaProductos[$p -> cod])) {
                // referencia al producto
                $producto = $this-> listaProductos[$p -> cod];
                // si la cantidad es mayor o igual que la cantidad del producto
                if ($cantidad >= $producto ->  cantidad) {
                    $this -> borrar($p);
                } else { // la cantidad es menor que la cantidad del producto
                    $producto -> cantidad -= $cantidad;
                }
                return true;
            }
            return false;
        }

        /**
         * Función que obtiene el coste total de la cesta
         */
        public function getCosteTotal() : float
        {
            $total = 0;
            // Recorro cada producto del carro
            foreach ($this -> listaProductos as $cod => $producto) {
                $total += $producto -> PVP * $producto -> cantidad;
            }
            return $total;
        }

        /**
         * Función que devuelve la lista de productos
         */
        public function getListaProductos()
        {
            return $this->listaProductos;
        }

        public function __toString()
        {
            return json_encode($this->listaProductos, JSON_UNESCAPED_UNICODE);
        }
    }

