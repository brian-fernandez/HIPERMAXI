<?php
  function retornarconexion()
  {
    $con = mysqli_connect("localhost","root","","datos");
    return $con;
  }


?>
