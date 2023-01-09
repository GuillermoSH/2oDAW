<?php
class Equipo
{
    private $atributos = ['id' => 0, 'nombre' => "", 'puntos' => 0];


    public function __construct(int $id, string $nombre, int $puntos)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->puntos = $puntos;
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

    public static function arrayEquipo(array $equipo)
    {
        $id = intval($equipo['id']);
        $nombre=$equipo['nombre'];
        return new Equipo($id, $nombre, 0);
    }

    public function __toString()
    {
        return json_encode($this->atributos, JSON_UNESCAPED_UNICODE);
    }
}
