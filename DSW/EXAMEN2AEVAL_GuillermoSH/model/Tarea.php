<?php
    declare(strict_types=1);
    class Tarea
    {
        private $atributos = ['id' => 0, 'descripcion' => '', 'fecha_limite' => '', 'completada' => 0];
        
        public function __construct(int $id = 0, string $descripcion = "", string $fecha_limite = "", int $completada = 0)
        {
            if ($id != null) {
                $this->id = $id;
                $this->descripcion = $descripcion;
                $this->fecha_limite = $fecha_limite;
                $this->completada = $completada;
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
        public static function getTareaFromAssoc(array $datosTarea) : Tarea
        {
            $tarea = new Tarea();
            foreach ($datosTarea as $atributo => $valor) {
            // haciendo esto llamo al __set entonces asi puedo asignar
                $tarea->$atributo = $valor;
            }
            return $tarea;
        }

        public static function getTareaFromStd(stdClass $tarea) : Tarea
        {
            return new Tarea($tarea->id, $tarea->descripcion, $tarea->fecha_limite, $tarea->completada);
        }

        public function __toString()
        {
            return json_encode($this->atributos, JSON_UNESCAPED_UNICODE);
        }
    }
