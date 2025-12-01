<?php

$host = "localhost";
$user = "DBUSER2025"; 
$pass = "DBPSWD2025";

// Conexión sin seleccionar BD
$conn = new mysqli($host, $user, $pass);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Crear BD
$sql = "CREATE DATABASE IF NOT EXISTS uo289369_db";
if (!$conn->query($sql)) {
    die("Error creando la base de datos: " . $conn->error);
}

// Seleccionar BD
$conn->select_db("uo289369_db");

// Crear tablas
$sql = "
CREATE TABLE IF NOT EXISTS tusers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profesion VARCHAR(100),
    edad INT,
    genero ENUM('H','M','Otro'),
    pericia ENUM('baja','media','alta')
);

CREATE TABLE IF NOT EXISTS tresults (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    dispositivo ENUM('ordenador','tablet','telefono'),
    tiempo INT,
    completado BOOLEAN,
    comentarios TEXT,
    mejoras TEXT,
    valoracion INT,
    FOREIGN KEY (id_usuario) REFERENCES tusers(id)
);

CREATE TABLE IF NOT EXISTS tcomments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    comentario TEXT,
    FOREIGN KEY (id_usuario) REFERENCES tusers(id)
);
";

if ($conn->multi_query($sql)) {
    echo "Base de datos y tablas creadas correctamente.";
} else {
    echo "Error creando tablas: " . $conn->error;
}

$conn->close();
?>
