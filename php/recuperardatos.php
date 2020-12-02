<?php

header('Acceso-Control-Allow-Origin: *');
header('Acceso-Control-Allow-Header: Origin, X-Requested-With, Content-Type, Accept');
header('Acceso-Control-Allow-User: *');

require("conexion.php");
$con = getConexion();
$registro = mysqli_query($con,"SELECT email,password,cargo FROM usuarios");

$dat = [];

while($reg = mysqli_fetch_array($registro))
{
$dat = $reg;
}
$cod = json_decode($dat);
echo $cod;
header('Content-type: application/json');

?>;
