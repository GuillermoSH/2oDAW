<?php
    /**
     * Ejercicio 7 - Implementar un formulario múltiple que permita o bien subir un fichero o pegarlo en 
     * formato csv y que lo muestre como una tabla HTML.
     */
    if ($_POST) {
        $fichero = $_FILES['input'];
        $destination = "/var/www/phpdata/".$fichero['name'];
        if (file_exists($destination)) {
            echo "El fichero ".$fichero['name']." ya existe. ";
        } else {
            move_uploaded_file($fichero['tmp_name'], $destination);
            $archivo = fopen($destination, "r");
            $pointer = 0;
            echo "<table>";
            
            do {
                $linea = fgets($archivo);
                $pointer += count($linea);
                $lineaArray = preg_split("/;/", $linea);
                echo "<tr>";
                for ($i=0; $i<count($lineaArray); $i++) { 
                    echo "<td>";
                    echo "$lineaArray[$i]";
                    echo "</td>";
                }
                echo "</tr>";

                fseek($archivo, $pointer+1);

            } while ($linea);

            echo "</table>";

        }
    }
?>