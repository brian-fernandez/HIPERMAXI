<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$endato=file_get_contents('php://input');

$dato = json_decode($endato);
require("conexion.php");

$con = retornarconexion();

$mostrardatos = mysqli_query($con,"INSERT INTO usuarios (email,password) VALUES ('$dato->email','$dato->password')");

class Result {}

$responce = new Result();
$responce -> $resultado = 'OK';
$responce -> $mensaje = 'datos guardados';





header("Content-Type: application/json; charset=UTF-8");
echo json_encode($responce);

?>
