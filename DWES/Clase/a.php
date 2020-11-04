// 
<?php

echo get_include_path() . "\";

echo 'Soy el a.php\n';
$x = require '.b.php';
var_dump($x);
echo ".b.php devuelve $x\n";