<?php
use DAOProducto as GlobalDAOProducto;

require_once(__DIR__."/BaseDAO.php");
require_once(__DIR__."/Producto.php");

class DAOProducto
{
    /**
     * Elimina un producto de la base de datos.
     * 
     * @param int id El id del producto que se va a eliminar.
     * 
     * @return bool El retorno es un valor booleano.
     */
    public static function borrarProducto(int $id): bool
    {
        $sql = "DELETE FROM producto WHERE id = '$id'";
        return BaseDAO::consulta($sql);
    }

    /**
     * Actualiza el producto en la base de datos.
     * 
     * @param Producto producto
     * 
     * @return bool La consulta está siendo devuelta.
     */
    public static function modificarProducto(Producto $producto): bool
    {
        $sql = "UPDATE producto SET descripcion = '$producto->descripcion',nombre = '$producto->nombre',
        precio = $producto->precio,imagen = '$producto->imagen' WHERE id = $producto->id";
        return BaseDAO::consulta($sql);
    }

    /**
     * Esta función inserta un producto en la base de datos.
     * 
     * @param Producto producto es el nombre de la mesa
     * 
     * @return bool El resultado de la consulta.
     */
    public static function insertarProducto(Producto $producto): bool
    {
        if ($producto->id == 0) {
            $id = "null";
        } else {
            $id = $producto->id;
        }
        $sql = "INSERT INTO producto VALUES ('$id','$producto->descripcion','$producto->nombre',
        $producto->precio,$producto->imagen)";
        return BaseDAO::consulta($sql);
    }

    /**
     * Devuelve un objeto Producto si el id existe en la base de datos, de lo contrario devuelve nulo
     * 
     * @param int id El id del producto que desea buscar.
     */
    public static function buscarProducto(int $id): ?Producto
    {
        $resultado = BaseDAO::consulta("SELECT * FROM producto WHERE id='$id'");
        if ($resultado->num_rows == 0) {
            return null;
        }
        return Producto::getProducto($resultado->fetch_assoc());
    }

    
    /**
     * Devuelve un objeto de producto si el producto existe en la base de datos; de lo contrario,
     * devuelve nulo
     * 
     * @param string nombre El nombre del producto.
     */
    public static function buscarProductoNombre(string $nombre): ?Producto
    {
        $resultado = BaseDAO::consulta("SELECT * FROM producto WHERE nombre='$nombre'");
        if ($resultado->num_rows == 0) {
            return null;
        }
        return Producto::getProducto($resultado->fetch_assoc());
    }

    /**
     * Devuelve una matriz de objetos Producto, cada uno de los cuales se crea a partir de una fila en
     * la base de datos.
     * 
     * @param numPag El número de página que desea obtener.
     * @param tamPag El número de elementos por página.
     */
    public static function getPaginaProducto($numPag, $tamPag = 10): array
    {
        $listaProductos = [];
        $indice = $tamPag * ($numPag - 1);
        $sql = "SELECT * FROM producto LIMIT $indice,$tamPag";
        $resultado = BaseDAO::consulta($sql);


        while (($producto = $resultado->fetch_assoc()) != null) {
            $listaProductos[$producto['id']] = Producto::getProducto($producto);
        }

        return  $listaProductos;
    }

    /**
     * Devuelve el número de productos en la base de datos.
     * 
     * @return int El número de productos en la base de datos.
     */
    public static function numProductos(): int
    {
        $resultado = BaseDAO::consulta("SELECT COUNT(*) AS numProductos FROM producto");
        return intval($resultado->fetch_assoc()['numProductos']);
    }

    /**
     * Devuelve el número de páginas que se necesitarán para mostrar todos los productos.
     * 
     * @param int tamPag el número de productos por página
     * 
     * @return int El número de páginas que se necesitarán para mostrar todos los productos.
     */
    public static function numPags(int $tamPag): int
    {
        return ceil(DAOProducto::numProductos() / $tamPag);
    }

    public static function maxNumProducto(): int
    {
        
    }
}
