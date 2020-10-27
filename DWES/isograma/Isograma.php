<?php



/**
 * esIsograma
 *
 * @param  mixed $s
 * @return void
 */
function esIsograma($s)
{

    
    $s = mb_str_split(mb_ereg_replace('[- ]', '', mb_strtolower($s)));
    return array_unique($s) === $s;
    }
