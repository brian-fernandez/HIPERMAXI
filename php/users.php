<?php





include_once 'db.php';

class Pelicula extends DB{

    function obtenerPersonas(){
        $query = $this->connect()->query('SELECT * FROM usuarios');
        return $query;
    }

    function obtenerPersona($id){
        $query = $this->connect()->prepare('SELECT * FROM usuarios WHERE id = :id');
        $query->execute(['id' => $id]);
        return $query;
    }

}




?>
