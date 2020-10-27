<?php

require "Isograma.php";

class IsogramaTest extends PHPUnit\Framework\TestCase
{
    public function testIsograma()
    {
        $this->assertTrue(esIsograma('duplicates'));
    }

    public function testNoIsograma()
    {
        $this->assertFalse(esIsograma('eleven'));
    }

    public function testIsogramaMedioLargo()
    {
        $this->assertTrue(esIsograma('subdermatoglyphic'));
    }

    public function testInsensibleAlCaso()
    {
        $this->assertFalse(esIsograma('Alphabet'));
    }

    public function testIsogramaConGuiones()
    {
        $this->assertTrue(esIsograma('thumbscrew-japingly'));
    }

    public function testIgnoraVariosGuiones()
    {
        $this->assertTrue(esIsograma('Hjelmqvist-Gryb-Zock-Pfund-Wax'));
    }

    public function testFuncionaConLetrasAlemanas()
    {
        $this->assertTrue(esIsograma('Heizölrückstoßabdämpfung'));
    }

    public function testIgnoraEspacios()
    {
        $this->assertFalse(esIsograma('the quick brown fox'));
    }

    public function testIgnoraMasEspacios()
    {
        $this->assertTrue(esIsograma('Emily Jung Schwartzkopf'));
    }

    public function testVocalesAcentuadasDuplicadas()
    {
        $this->assertFalse(esIsograma('éléphant'));
    }
}

