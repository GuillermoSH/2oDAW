<?php
require_once("DAOProducto.php");

class Producto
{
    private $atributos = ['id' => 0, 'descripcion' => "", 'nombre' => "", 'precio' => 0.0, 'imagen' => ""];

    public function __construct(int $id, string $nombre, string $descripcion, float $precio, string $imagen)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->atributos['descripcion'] = $descripcion;
        $this->precio = $precio;
        $this->imagen = $imagen;
    }

    public function __set(string $atributo, mixed $valor)
    {
        if ($atributo=="id" && $valor<0) {
            throw new InvalidArgumentException("Error valor no válido para el id");
        }
        $this->atributos[$atributo]=$valor;
    }

    public function __get(string $atributo)
    {
        return $this->atributos[$atributo];
    }
}
