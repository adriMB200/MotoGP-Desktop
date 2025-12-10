<?php
session_start();
class Cronometro{

    private $tiempo;
    private $inicio;
    private $fin;

    public function __construct(){
        $this->tiempo = 0;
        $this->inicio = null;
        $this->fin = null;
    }

    public function arrancar(){
        $this->inicio = time();
    }

    public function parar(){
        $this->fin = time();
        $this->tiempo += $this->fin - $this->inicio;
    }

    public function mostrar(){
        $total = $this->tiempo;

        $min = floor($total / 60);
        $seg = $total - ($min * 60);

        return sprintf("%02d:%04.1f", $min, $seg);
    }

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
    <link rel="icon" href="multimedia/favicon.ico" />
    <title>MotoGP-Juegos</title>
    <link rel="stylesheet" type="text/css" href="estilo/estilo.css" />
</head>

<body>
<header>
    <h1><a href="index.html" title="Pagina principal">MotoGP Desktop</a></h1>

    <nav>
        <a href="index.html">Inicio</a>
        <a href="piloto.html">Piloto</a>
        <a href="circuito.html">Circuito</a>
        <a href="metereologia.html">Meteorología</a>
        <a href="clasificaciones.php">Clasificaciones</a>
        <a class="active" href="juegos.html">Juegos</a>
        <a href="ayuda.html">Ayuda</a>
    </nav>
</header>

<p>Estás en: <a href="index.html">Inicio</a> >> <a href="juegos.html">Juegos</a> >> <strong>Cronómetro</strong></p>

<h3>Controles del cronómetro</h3>

<form action="#" method="post" name="cronometro">
    <main>
        <p><?= $mensaje ?></p>
        <button type="submit" name="arrancar">Arrancar</button>
        <button type="submit" name="parar">Parar</button>
        <button type="submit" name="mostrar">Mostrar</button>
    </main>
</form>

<h3>Resultado</h3>
<p>'.$mensaje.'</p>

</body>
';
?>