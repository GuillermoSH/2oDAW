<?php
// CRUD

class Productos
{
    private $listaProductos = [];

    public function __construct($id = "", $nombre = "", $descripcion = "", $precio = "", $imagen = "")
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
        $this->precio = $precio;
        $this->imagen = $imagen;
    }

    public function getListaProductos()
    {
        $conexion = new MySQLi('localhost', 'productos', 'productos2021', 'productos');
        $resultado = $conexion->query('SELECT * FROM producto');

        if ($conexion->connect_errno != null) {
            echo "Error conectando a la base de datos de productos: ", $conexion->connect_error;
            exit();
        }

        while ($producto = $resultado->fetch_assoc()) {
            $this->listaProductos = $producto;
        }

        return $this->listaProductos;
    }

    public function aniadirProducto($producto)
    {
        $conexion = new MySQLi('localhost', 'productos', 'productos2021', 'productos');
        $conexion->query('INSERT INTO producto VALUES (' . $producto->id . ',' . $producto->nombre . ',' . $producto->descripcion . ',' . $producto->precio . ',' . $producto->imagen . ')');

        if ($conexion->connect_errno != null) {
            echo "Error conectando a la base de datos de productos: ", $conexion->connect_error;
            return false;
        }
        return true;
    }

    public function modificarProducto($producto)
    {
        $conexion = new MySQLi('localhost', 'productos', 'productos2021', 'productos');
        $conexion->query('UPDATE producto SET nombre = ' . $producto->nombre . ', descripcion = ' . $producto->descripcion . ', precio = ' . $producto->precio . ', imagen = ' . $producto->imagen . ' WHERE id = ' . $producto->id);

        if ($conexion->connect_errno != null) {
            echo "Error conectando a la base de datos de productos: ", $conexion->connect_error;
            return false;
        }
        return true;
    }

    public function borrarProducto($producto)
    {
        $conexion = new MySQLi('localhost', 'productos', 'productos2021', 'productos');
        $conexion->query('DELETE FROM producto WHERE id = ' . $producto->id);

        if ($conexion->connect_errno != null) {
            echo "Error conectando a la base de datos de productos: ", $conexion->connect_error;
            return false;
        }
        return true;
    }
}
