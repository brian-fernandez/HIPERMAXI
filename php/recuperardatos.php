<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("conexion.php");

$con = retornarconexion();
$mostrardatos = mysqli_query($con,"SELECT cod_id,email,password FROM usuarios");

$da = [];

while($reg = mysqli_fetch_array($mostrardatos))
{
  $da=$reg;
}
$cad = json_encode($da);

echo($cad);



header("Content-Type: application/json; charset=UTF-8");

?>
