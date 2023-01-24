<?php
class Producto
{
    private $atributos = ["id" => 0, "nombre" => "", "precio" => 0.0, "descripcion" => "", "imagen" => ""];

    /**
     * La función __construct() es una función constructora que toma 5 parámetros y los asigna a las
     * variables de clase
     * 
     * @param int id La identificación del producto.
     * @param string descripcion La descripción del producto.
     * @param string nombre El nombre del producto.
     * @param float precio El precio del producto.
     * @param string imagen La imagen del producto.
     */
    public function __construct(int $id, string $descripcion, string $nombre, float $precio, string $imagen)
    {
        $this->id = $id;
        $this->descripcion = $descripcion;
        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->imagen = $imagen;
    }

    /**
     * Devuelve el valor del atributo que se pasa como parámetro.
     * 
     * @param string propiedad El nombre de la propiedad a la que intenta acceder.
     * 
     * @return El valor de la propiedad.
     */
    public function __get(string $propiedad)
    {
        return $this->atributos[$propiedad];
    }

    /**
     * La función __set() se ejecuta al escribir datos en propiedades inaccesibles
     * 
     * @param propiedad El nombre de la propiedad que está intentando establecer.
     * @param valor El valor para establecer la propiedad.
     */
    public function __set($propiedad, $valor)
    {
        if ($propiedad == "id" && $valor < 0) {  // Lo cambiamos a cero, y si lo ponemos asi significa que yo le pongo numero que quiero
            throw new Exception("Error, valor no válido para el ID.");
        }
        $this->atributos[$propiedad] = $valor;
    }

    /**
     * Toma una matriz de datos y devuelve un nuevo objeto Producto
     * 
     * @param datosProd una matriz con las siguientes claves:
     * 
     * @return Una nueva instancia de la clase Producto.
     */
    public static function getProducto($datosProd)
    {
        $id = intval($datosProd['id']);
        $descripcion = $datosProd['descripcion'];
        $nombre = $datosProd['nombre'];
        $precio = floatval($datosProd['precio']);
        $imagen = $datosProd['imagen'];
        return new Producto($id, $descripcion, $nombre, $precio, $imagen);
    }

    /**
     * Convierte el objeto en una cadena.
     * 
     * @return La representación JSON del objeto.
     */
    public function __toString()
    {
        return json_encode($this->atributos, JSON_UNESCAPED_UNICODE);
    }
}
