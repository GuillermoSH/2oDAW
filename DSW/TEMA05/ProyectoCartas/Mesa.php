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
        if ($_SESSION['mesa'] != null) {
            $cartas = $_SESSION['mesa'];
        } else {
            $cartas = self::generarMesa($numParejas);
            $_SESSION['mesa'] = $cartas;
        }
        $i = 0;
        foreach ($cartas as $carta) {
            //echo "<div><img src='./barajaEspa/" . $carta[0] . "/" . implode($carta) . ".png'/></div>";
            
            if (in_array("carta".$i, $_SESSION['mesaAciertos'])) {
                echo "<div>
                <button disabled name='carta$i' value='" . implode("", $carta) . "'>";
                echo "<img src='./barajaEspa/" . $carta[0] . "/" . implode($carta) . ".png'/>";
            } else {
                echo "<div>
                <button name='carta$i' value='" . implode("", $carta) . "'>";
                echo "<img src='./barajaEspa/bocaabajo.png'/>";
            }

            echo "</button>
            </div>";
            $i++;
        }
    }
}
