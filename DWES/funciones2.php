<?php

function hola($nombre, $apellidos = '' , $dni = 5)
{
    $ret = $nombre;

    if ($apellidos != ''){
        $ret .= "$apellidos";
    }
    return "Hola, $ret!\n";
}
echo hola("Ricardo", " Martinez", 10);

function hola2($args)
{
    extract($args);
    
    $ret = $nombre;

    if ($apellidos!='') {
        $ret .= " $apellidos";
        
    }
    if ($dni!='') {
        $ret .="($dni)";     
    }
    return "Hola, $ret !\n";
}
echo hola2([
    'dni'=> 123,
    'apellidos'=> 'Perez',
    'nombre'=> 'Ricardo',

]);