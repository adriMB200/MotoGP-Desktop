<?php
session_start();
class Clasificacion{

    private $documento;
    private $datos;
    private $informacion;

    public function __construct(){
        $this->documento = "xml/circuitoEsquema.xml";
    }

    public function consultar(){
        $this->datos = file_get_contents($this->documento);
        $this->informacion = new SimpleXMLElement($this->datos);
    }

    public function getInformacion() {
        return $this->informacion;
    }

}

$clasificacion = new Clasificacion();
$clasificacion->consultar();
$xml = $clasificacion->getInformacion();
?>


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

    <h2>Ganador de la carrera</h2>

<p><strong>Vencedor:</strong> <?= $xml->resultado->vencedor->nombrePiloto ?></p>
<p><strong>Tiempo empleado:</strong> <?= $xml->resultado->tiempo ?></p>

<h2>Clasificación del Mundial tras la carrera</h2>

<table>
    <thead>
        <tr>
            <th>Posición</th>
            <th>Piloto</th>
            <th>Puntos</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($xml->clasificacionMundial->piloto as $piloto): ?>
            <tr>
                <td><?= $piloto->posicion ?></td>
                <td><?= $piloto->nombre ?></td>
                <td><?= $piloto->puntos ?></td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>
</body>

</html>