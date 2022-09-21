<?php declare(strict_types=1);?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
        $n1=$_POST['n1'];
        $n2=$_POST['n2'];
        $suma=0;

        for ($i=$n1;$i<=$n2;$i++) {
            $suma+=$i;
        }

        $media=$suma/($i-1);

        echo "La suma es: $suma.\n<br/>";
        echo "La media vale: $media";
    ?>
</body>

</html>