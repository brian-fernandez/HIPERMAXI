<?php

include_once 'users.php';

class ApiPeliculas{

    function getAll(){
        $pelicula = new Pelicula();
        $peliculas = array();
        $peliculas["items"] = array();

        $res = $pelicula->obtenerPersonas();

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){

                $item=array(
                    "cod_id" => $row['cod_id'],
                    "email" => $row['email'],
                    "password" => $row['password'],
                    "cargo" => $row['cargo'],
                );
                array_push($peliculas["items"], $item);
            }

            $this->printJSON($peliculas);
        }else{
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
    }

    function getById($id){
        $pelicula = new Pelicula();
        $peliculas = array();
        $peliculas["items"] = array();

        $res = $pelicula->obtenerPersona($id);

        if($res->rowCount() == 1){
            $row = $res->fetch();

            $item=array(
                "cod_id" => $row['cod_id'],
                "email" => $row['email'],
                "password" => $row['password'],
                "cargo" => $row['cargo'],
            );
            array_push($peliculas["items"], $item);
            $this->printJSON($peliculas);
        }else{
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
    }


    function error($mensaje){
        echo json_encode(array('mensaje' => $mensaje));
    }

    function printJSON($array){
        echo '<code>'.json_encode($array).'</code>';
    }
}

?>
