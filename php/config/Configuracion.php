<?php
$host = "localhost";
$user = "DBUSER2025"; 
$pass = "DBPSWD2025";
$db   = "uo289369_db";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Error conectando a la BD: " . $conn->connect_error);
}

$conn->set_charset("utf8");
?>
