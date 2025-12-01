<?php
require_once "conexion.php";

// Datos recibidos por POST
$profesion = $_POST['profesion'];
$edad = $_POST['edad'];
$genero = $_POST['genero'];
$pericia = $_POST['pericia'];

// Insertar en tusers
$sql = "INSERT INTO tusers (profesion, edad, genero, pericia)
        VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("siss", $profesion, $edad, $genero, $pericia);
$stmt->execute();

$id_usuario = $stmt->insert_id; 

if (isset($_POST['dispositivo'])) {

    $sql = "INSERT INTO tresults 
    (id_usuario, dispositivo, tiempo, completado, comentarios, mejoras, valoracion)
    VALUES (?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param(
        "isisssi",
        $id_usuario,
        $_POST['dispositivo'],
        $_POST['tiempo'],
        $_POST['completado'],
        $_POST['comentarios'],
        $_POST['mejoras'],
        $_POST['valoracion']
    );
    $stmt->execute();
}

if (isset($_POST['comentario_facilitador'])) {

    $sql = "INSERT INTO tcomments (id_usuario, comentario) VALUES (?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("is", $id_usuario, $_POST['comentario_facilitador']);
    $stmt->execute();
}

echo "Datos insertados correctamente. ID usuario: " . $id_usuario;

$conn->close();
?>
