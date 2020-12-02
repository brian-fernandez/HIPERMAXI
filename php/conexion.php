<?php
  function getConexion()
  {
    $con = mysqli_connect("localhost","root","","usuarios");
    return $con;
  }


?>
