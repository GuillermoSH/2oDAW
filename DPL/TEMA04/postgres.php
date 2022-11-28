<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PostgreSQL</title>
</head>

<body>
    <?php
    $connection = pg_connect("host=alu7486.arkania.es dbname=travelroad user=travelroad_user password=dpl0000");
    $result = pg_query($connection, "SELECT * FROM places");

    while (($row = pg_fetch_assoc($result)) != null) {
        echo "<div>$row</div>";
    }
    ?>
</body>

</html>
