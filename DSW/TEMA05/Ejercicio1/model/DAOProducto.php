<?php
require_once("BaseDAO.php");
require_once("Producto.php");

class DAOProducto
{
    /**
     * Elimina un producto de la base de datos.
     * 
     * @param int id El id del producto que se va a eliminar.
     * 
     * @return bool El retorno es un valor booleano.
     */
    public static function borrarProducto(int $id):bool
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
    public static function modificarProducto(Producto $producto):bool
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
    public static function insertarProducto(Producto $producto):bool
    {
        if ($producto->id==0) {
            $id = "null";
        } else {
            $id = $producto->id;
        }
        $sql = "INSERT INTO producto VALUES ('$id','$producto->descripcion','$producto->nombre',
        $producto->precio,$producto->imagen)";
        return BaseDAO::consulta($sql);
    }

    public static function getPaginaProducto($numPag,$tamPag=10) {
        
    }
}
