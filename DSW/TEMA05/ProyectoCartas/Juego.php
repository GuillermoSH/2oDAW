<?php
require_once("Carta.php");

class Juego
{
    private static function generarMesa(int $numParejas)
    {
        $cartas = [];
        while (count($cartas) < $numParejas) {
            $newCarta = new Carta();
            $newCarta = $newCarta::generarCarta();
            if (!in_array($newCarta, $cartas)) {
                array_push($cartas, $newCarta);
            }
        }
        $cartas = array_merge($cartas, $cartas);
        shuffle($cartas);
        $_SESSION['mesa'] = $cartas;
    }

    public static function imprimirMesa(int $numParejas)
    {
        self::generarMesa($numParejas);
        $i = 0;
        foreach ($_SESSION['mesa'] as $carta) {
            //echo "<div><img src='./barajaEspa/" . $carta[0] . "/" . implode($carta) . ".png'/></div>";
            echo "<div><button name='carta' value='$i'><img src='./barajaEspa/bocaabajo.png'/></button></div>";
            $i++;
        }
    }
}
