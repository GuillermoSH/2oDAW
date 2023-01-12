<?php
class Carta
{
    private static $palos = ["oros","bastos","copas","espadas"];
    private static $valores = [1,2,3,4,5,6,7,8,9,10,11,12];
    
    public static function generarCarta(): array
    {
        $randPalo = self::$palos[random_int(0, count(self::$palos)-1)];
        $randValor = self::$valores[random_int(0, count(self::$valores)-1)];
        return [$randPalo, $randValor];
    }
}
