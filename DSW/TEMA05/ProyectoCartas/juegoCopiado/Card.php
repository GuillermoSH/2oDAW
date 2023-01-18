<?php
class Card
{

	private $palos = ["oros", "bastos", "copas", "espadas"];
	private $valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	private $randPalo;
	private $randValor;
	private $image;

	/**
	 * @param mixed $image
	 */
	public function setImage($image)
	{
		$this->image = $image;
	}

	/**
	 * @return mixed
	 */
	public function getImage()
	{
		return $this->image;
	}

	public function getPalo()
	{
		return $this->randPalo;
	}

	public function getValor()
	{
		return $this->randValor;
	}

	public function __construct()
	{
		$this->randPalo = $this->palos[random_int(0, count($this->palos) - 1)];
		$this->randValor = $this->valores[random_int(0, count($this->valores) - 1)];
		$this->image = $this->randPalo . strval($this->randValor) . ".png";
	}
}
