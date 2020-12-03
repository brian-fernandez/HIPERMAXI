<?php
  function retornarconexion()
  {
    $con = mysqli_connect("localhost","root","","usuarios");
    return $con;
  }


?>
