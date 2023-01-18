<?php
require_once("Carta.php");

class Juego
{
    private static $mesa;
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
        self::$mesa = $cartas;
    }

    public static function imprimirMesa(int $numParejas)
    {
        $cartas = [];
        if ($_GET['numParejas']) {
            self::generarMesa($numParejas);
            $cartas = self::$mesa;
        } else {
            $cartas = $_SESSION['mesa'];
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
