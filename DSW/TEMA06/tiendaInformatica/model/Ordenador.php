<?php
require_once("../model/Producto.php");
class Ordenador extends Producto
{
    // Esta clase tendria de producto el get el set y demás

    // Construct que contiene todos los de producto y los propios de ordenador
    function __construct(
        string $cod = null,
        string $nombre = '',
        string $nombre_corto = '',
        string $descripcion = '',
        string | float $PVP = 0,
        string $familia = '',
        string $procesador = '',
        string | int $RAM = 0,
        string $disco = '',
        string $grafica = '',
        string $unidadoptica = '',
        string $SO = '',
        string $otros = ''
    ) {
        if ($cod != null) {
            // Le paso al constructor del padre los valores
            parent::__construct($cod, $nombre, $nombre_corto, $descripcion, $PVP, $familia);

            // El resto los inicializo
            $this->procesador = $procesador;
            $this->RAM = (int)$RAM;
            $this->disco = $disco;
            $this->grafica = $grafica;
            $this->unidadoptica = $unidadoptica;
            $this->SO = $SO;
            $this->otros = $otros;
        }
    }

    public static function getProdFromAssoc(array $datosOrdenador): Ordenador
    {
        $p = new Ordenador();
        foreach ($datosOrdenador as $atributo => $valor) {
            $p->$atributo = $valor;
        }
        return $p;
    }

    public static function getProdFromStd(stdClass $p): Ordenador
    {
        $o = new Ordenador();
        foreach ($p as $atributo => $valor) {
            $o->$atributo = $valor;
        }
        return $o;
    }
}
