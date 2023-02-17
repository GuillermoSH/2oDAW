<?php
    declare(strict_types=1);
    class Empleado
    {
        private $atributos = ['id' => 0, 'nombre' => '', 'ap1' => '', 'ap2' => '', 'email' => ''];
        
        public function __construct(int $id = 0, string $nombre = "", string $ap1 = "", string $ap2 = "", string $email = "")
        {
            if ($id != null) {
                $this->id = $id;
                $this->nombre = $nombre;
                $this->ap1 = $ap1;
                $this->ap2 = $ap2;
                $this->email = $email;
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
        public static function getEmpleFromAssoc(array $datosEmple) : Empleado
        {
            $empleado = new Empleado();
            foreach ($datosEmple as $atributo => $valor) {
            // haciendo esto llamo al __set entonces asi puedo asignar
                $empleado->$atributo = $valor;
            }
            return $empleado;
        }

        public static function getEmpleFromStd(stdClass $empleado) : Empleado
        {
            return new Empleado($empleado->id, $empleado->nombre, $empleado->ap1, $empleado->ap2, $empleado->email);
        }

        public function __toString()
        {
            return json_encode($this->atributos, JSON_UNESCAPED_UNICODE);
        }
    }
