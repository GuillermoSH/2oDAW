<?php
class Partido
{
    private $atributos = ['id' => 0, 'local' => 0, 'visitante' => 0, 'resultado' => ""];

    public function __construct(int $id, int $local, int $visitante, string $resultado)
    {
        $this->id = $id;
        $this->local = $local;
        $this->visitante = $visitante;
        $this->resultado = $resultado;
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

    public static function arrayPartido(array $partido)
    {
        $id = intval($partido['id']);
        $local=intval($partido['local']);
        $visitante=intval($partido['visitante']);
        $resultado=$partido['resultado'];
        return new Partido($id, $local, $visitante, $resultado);
    }

    public function __toString()
    {
        return json_encode($this->atributos, JSON_UNESCAPED_UNICODE);
    }
}
