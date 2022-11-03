<?php
    class Producto
    {
        // private $id, $nombre, $precio, $descripcion, $urlImagen, $stock;
        private $atributos = ["id"=>0,"nombre"=>"","precio"=>0,"descripcion"=>"",
        "urlImagen"=>"","stock"=>0];

        public function __construct(int $id, string $nombre, float $precio,
        string $descripcion="", string $urlImagen="", int $stock=0)
        {
            $this->id=$id;
            $this->nombre=$nombre;
            $this->precio=$precio;
            $this->descripcion=$descripcion;
            $this->urlImagen=$urlImagen;
            $this->stock=$stock;
        }

        public function __set($propiedad, $valor)
        {
            if ($propiedad=="id" && $valor<1) {
                throw new InvalidArgumentException("El id no es válido");
            }
            $this->atributos[$propiedad]=$valor;
        }

        public function __get($propiedad)
        {
            return $this->atributos[$propiedad];
        }

        public function __toString()
        {
            return "Producto: ".json_encode($this->atributos, JSON_UNESCAPED_UNICODE);
        }
    }
