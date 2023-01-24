<?php
require_once("DAOProducto.php");

class Producto
{
    private $atributos = ['codigo' => "", 'descripcion' => "", 'pcompra' => 0.0, 'pventa' => 0.0, 'stock' => 0];

    /**
     * Esta función es un constructor que toma una cadena, una cadena, un flotante, un flotante y un int y
     * establece los valores de las propiedades del objeto a los valores de los parámetros.
     * 
     * @param string codigo El código del producto.
     * @param string descripcion La descripción del producto.
     * @param float precioCompra El precio del producto cuando fue comprado.
     * @param float precioVenta El precio del producto.
     * @param int stock La cantidad de stock que tienes del producto.
     */
    public function __construct(string $codigo, string $descripcion, float $precioCompra, float $precioVenta, int $stock)
    {
        $this->codigo = $codigo;
        $this->descripcion = $descripcion;
        $this->pcompra = $precioCompra;
        $this->pventa = $precioVenta;
        $this->stock = $stock;
    }

    /**
     * La función __set() es un método mágico que se llama cuando intenta establecer un valor para una
     * propiedad que no existe
     * 
     * @param string atributo El nombre del atributo que desea establecer.
     * @param mixed valor El valor para establecer el atributo.
     */
    public function __set(string $atributo, mixed $valor)
    {
        $this->atributos[$atributo] = $valor;
    }

    /**
     * Devuelve el valor del atributo.
     * 
     * @param string atributo El nombre del atributo que desea obtener.
     * 
     * @return mixed El valor del atributo.
     */
    public function &__get(string $atributo)
    {
        return $this->atributos[$atributo];
    }

    /**
     * Toma una matriz de datos y devuelve un nuevo objeto Producto
     * 
     * @param datosProducto una matriz con las siguientes claves:
     * 
     * @return Producto Una nueva instancia de la clase Producto.
     */
    public static function crearProducto($datosProducto)
    {
        $codigo = $datosProducto['codigo'];
        $descripcion = $datosProducto['descripcion'];
        $pcompra = floatval($datosProducto['pcompra']);
        $pventa = floatval($datosProducto['pventa']);
        $stock = intval($datosProducto['stock']);
        return new Producto($codigo, $descripcion, $pcompra, $pventa, $stock);
    }

    /**
     * La función `__toString()` es un método mágico que se llama cuando el objeto se usa en un
     * contexto de cadena
     * 
     * @return json La representación JSON del objeto.
     */
    public function __toString()
    {
        return json_encode($this->atributos, JSON_UNESCAPED_UNICODE);
    }
}