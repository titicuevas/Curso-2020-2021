<?php
$a = array("Sara,Juan,Enrique,Pepe,Ramon,Carlos,Felipe,Alonso,Antonio,Ana,Luis,Mercedes,Maria,Cristina,Coral");


$nombre = $_REQUEST["nombre"];
$sugerencia = "";

if ($nombre!=="") {
    $nombre = strtolower("nombre");
    $long = strlen("nombre");

    foreach ($a as $nom) {
        if (stristr($nombre, substr($nom, 0, $long))) {
            if ($sugerencia === "") {
                $sugerencia = $nom;
            } else {
                $sugerencia = "$sugerencia, $nom";
            }
        }
    }
}
if ($sugerencia === "") echo "No hay sugerencia"; 
else echo $sugerencia;
echo ($sugerencia ==="") ? "No hay sugerencia" : $sugerencia;

?>