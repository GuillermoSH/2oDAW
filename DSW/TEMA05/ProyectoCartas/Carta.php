<?php
class Carta
{
    private $palos = ["oros","bastos","copas","espadas"];
    private $valores = [1,2,3,4,5,6,7,8,9,10,11,12];
    
    private function generarCarta(): array
    {
        $randPalo = $this->palos[random_int(0, count($this->palos))];
        $randValor = $this->valores[random_int(0, count($this->valores))];
        return [$randPalo, $randValor];
    }

    public static function getCarta(): array
    {
        return self::generarCarta();
    }
}
