<?php
    if ($_POST) {
        $fichero = $_FILES['input'];
        $destination = "/var/www/phpdata/".$fichero['name'];
        if (file_exists($destination)) {
            echo "El fichero ".$fichero['name']." ya existe. ";
        } else {
            move_uploaded_file($fichero['tmp_name'], $destination);
            $base64= base64_encode(file_get_contents($fichero));
            echo '<img src="data: '.mime_content_type($fichero).';base64,'.$base64.'">';
        }
    }
?>