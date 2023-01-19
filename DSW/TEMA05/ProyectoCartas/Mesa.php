<?php
require_once("Carta.php");

class Mesa
{
    private static function generarMesa(int $numParejas): array
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
        return $cartas;
    }

    public static function imprimirMesa(int $numParejas)
    {
        $cartas = [];
        if ($_COOKIE['mesa']!="") {
            $cartas = unserialize($_COOKIE['mesa'], ["allowed_classes" => false]);
        } else {
            $cartas = self::generarMesa($numParejas);
            setcookie('mesa', serialize($cartas));
        }
        $i = 0;
        foreach ($cartas as $carta) {
            //echo "<div><img src='./barajaEspa/" . $carta[0] . "/" . implode($carta) . ".png'/></div>";
            echo "<div>
            <button name='carta$i' value='$carta'>
                <img src='./barajaEspa/bocaabajo.png'/>
            </button>
            </div>";
            $i++;
        }
    }
}
