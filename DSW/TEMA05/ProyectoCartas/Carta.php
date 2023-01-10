<?php
class Carta {
    private $palos = ["oros", "bastos", "espadas", "copas"];
    private $valores = [1,2,3,4,5,6,7,8,9,10,11,12];

    public static function generarCarta() {
        return [$this->palos[random_int(0, count($this->palos))], $this->valores[random_int(0, count($this->valores))]];
    }
}