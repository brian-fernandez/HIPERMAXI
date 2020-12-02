<?php

header('Acceso-Control-Allow-Origin: *');
header('Acceso-Control-Allow-Header: Origin, X-Requested-With, Content-Type, Accept');
header('Acceso-Control-Allow-User: *');

$datJson= file_get_contents('php://input');

$datos6 = json_decode($datJson);

require("conexion.php");
$con = getConexion($con, "INSERT INTO usuarios (email,password,cargo) values ('$datos6 ->email','$datos6->password','$datos6->encargo')");



mysqli_query($con,"");

header('Content-type: application/json');
class Resultado{}

$respuesta = new Resultado();
$respuesta->Resultado = 'OK';
$respuesta->mensaje = 'Se guardo de forma satisfactoria';

?>

