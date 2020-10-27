<?php

$a = 1;

function prueba()
{
    global $a; 
    echo "$a\n";
    $a=5;
}
prueba();
echo "$a\n";
