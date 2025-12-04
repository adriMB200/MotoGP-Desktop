<?php
session_start();
class Clasificacion{

    private $documento;
    private &informacion;

    public function __construct(){
        $this->documento = "xml/circuitoEsquema.xml";
    }

    public function consultar(){
        $informacion = simplexml_load_file($this->documento);
    }

    public function 

}

if (!isset($_SESSION["cronometro"])) {
    $_SESSION["cronometro"] = new Cronometro();
}

$miCronometro = $_SESSION["cronometro"];
$mensaje = "";

if (count($_POST) > 0)
{
    if (isset($_POST['arrancar'])) {
        $miCronometro->arrancar();
    }

    if (isset($_POST['parar'])) {
        $miCronometro->parar();
    }

    if (isset($_POST['mostrar'])) {
        $mensaje = "Tiempo transcurrido: " . $miCronometro->mostrar();
    }
}

echo '
<!DOCTYPE HTML>

<html lang="es">

<head>
    <!-- Datos que describen el documento -->
    <meta charset="UTF-8" />
    <meta name="author" content="Adrian" />
    <meta name="description" content="Clasificaciones del proyecto MotoGP-Desktop" />
    <meta name="keywords" content="MotoGP, motos, carreras" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="icon" href="multimedia/favicon.ico" />

    <title>MotoGP-Clasificaciones</title>

    <link rel="stylesheet" type="text/css" href="estilo/estilo.css" />

</head>

<body>
    <header>
        <!-- Datos con el contenidos que aparece en el navegador -->
        <h1><a href="index.html" title="Pagina principal">MotoGP Desktop</a></h1>

        <nav>
            <a href="index.html" title="Pagina principal">Inicio</a>
            <a href="piloto.html" title="Informacion del piloto">Piloto</a>
            <a href="circuito.html" title="Informacion del circuito">Circuito</a>
            <a href="metereologia.html" title="Informacion de la metereologia">Meteorología</a>
            <a class="active" href="clasificaciones.php" title="Informacion de las clasificaciones">Clasificaciones</a>
            <a href="juegos.html" title="Informacion de los juegos">Juegos</a>
            <a href="ayuda.html" title="Sistema de ayuda">Ayuda</a>
        </nav>
    </header>

    <p>Estás en: <a href="index.html">Inicio</a> >> <strong>Clasificaciones</strong></p>

    <p>en desarrollo</p>
    <h2>Clasificaciones de MotoGP-Desktop</h2>
</body>

</html>
';
?>