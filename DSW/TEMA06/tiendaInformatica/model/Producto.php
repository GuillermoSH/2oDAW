<?php
    declare(strict_types=1);
    class Producto {
        private $atributos = ['cod' => '', 'nombre' => '', 'nombre_corto' => '', 'descripcion' => '', 'PVP' => 0, 'familia' => ''];
        
        function __construct(string $cod = null, ?string $nombre = '', string $nombre_corto = '', 
                            string $descripcion = '', float | string $PVP = 0, string $familia = '')
        {
            if ($cod != null) {
                $this->cod = $cod;
                $this->nombre = $nombre;
                $this->nombre_corto = $nombre_corto;
                $this->descripcion = $descripcion;
                $this->PVP = floatval($PVP);
                $this->familia = $familia;
            }
        }

        public function __set(string $atributo, string | float | null $valor)
        {
            $this->atributos[$atributo] = $valor;
        }

        public function __get(string $atributo)
        {
            return $this->atributos[$atributo];
        }

        // Metodos factory, por si llamamos a fetch_assoc o fetch
        public static function getProdFromAssoc(array $datosProd) : Producto
        {
            $p = new Producto();
            foreach ($datosProd as $atributo => $valor) {
            // haciendo esto llamo al __set entonces asi puedo asignar
                $p->$atributo = $valor;
            }
            return $p;
        }

        public static function getProdFromStd(stdClass $p) : Producto
        {
            return new Producto($p->cod, $p->nombre, $p->nombre_corto, $p->descripcion, $p->PVP, $p->familia);
        }

        public function __toString()
        {
            return json_encode($this->atributos, JSON_UNESCAPED_UNICODE);
        }
    }
