<?php
    require_once("Producto.php");

    class Carrito
    {
        private $productos=[];

        /**
         * Si el producto ya está en el carrito, aumente la cantidad, de lo contrario, agréguelo al
         * carrito.
         * @param Producto producto El producto a añadir al carrito.
         * @param int cantidad La cantidad del producto a añadir al carrito.
         */
        public function aniadir(Producto $producto, int $cantidad=1)
        {
            if (isset($this->productos[$producto->id])) {
                // incrementar la cantidad del que teníamos guardado en la lista
                $productoBuscado = $this->productos[$producto->id];
                $productoBuscado->cantidad += $cantidad;
            } else {
                $producto->cantidad=$cantidad;
                $this->productos[$producto->id]=$producto;
            }
        }

        /**
         * Elimina el producto del array.
         * @param Producto producto El producto a eliminar.
         */
        public function borrar(Producto $producto):bool
        {
            if (isset($this->productos[$producto->id])) {
                unset($this->productos[$producto->id]);
                return true;
            }
            return false;
        }

        /**
         * Decrementa la cantidad de un producto en el carrito.
         * @param Producto producto El producto a añadir al carrito.
         * @param int cantidad La cantidad de producto a agregar.
         */
        public function decrementarProducto(Producto $producto, int $cantidad):bool
        {
            if (isset($this->productos[$producto->id])) {
                $productoBuscado = $this->productos[$producto->id];
                if ($cantidad >= $productoBuscado->cantidad) {
                    $this->borrar($producto);
                } else {
                    $productoBuscado->cantidad -= $cantidad;
                }
                return true;
            }
            return false;
        }

        /**
         * Devuelve el coste total de todos los productos del carrito
         * @return int El costo total de todos los productos en el carrito.
         */
        public function getCosteTotal()
        {
            $total = 0;
            foreach ($this->productos as $producto) {
                $total += $producto->precio*$producto->cantidad;
            }
            return $total;
        }
    }
