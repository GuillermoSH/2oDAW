<?php
require_once('./Game.php');

$game = new Game();

?>
<!DOCTYPE html>
<html>

<head>
	<title>Memory Game</title>
	<link href="styles.css" rel="stylesheet">
</head>

<body>
	<?php //var_dump($game); 
	?>
	<div id="board">
		<?php
		$board = $game->getBoard();
		foreach ($board as $card) {
			echo "<div class='card'><img src='./barajaEspa/" . $card->getPalo() . "/" . $card->getImage() . "'</div>";
		}
		?>
	</div>
</body>

</html>