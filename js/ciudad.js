"use strict";
//Ciudad usada Doha en Catar 
class Ciudad {
    constructor(nombre, pais, gentilicio, poblacion, coordenadas) {
        this.nombre = nombre;
        this.pais = pais;
        this.gentilicio = gentilicio;
        this.poblacion = poblacion;
        this.coordenadas = coordenadas; // 25.28678563337303, 51.53384774116898
    }

    inicializarDatos(poblacion, latitud, longitud) {
        this.poblacion = poblacion;
        this.coordenadas = { latitud, longitud };
    }


    getNombre() {
        return `Ciudad: ${this.nombre}`;
    }


    getPais() {
        return `País: ${this.pais}`;
    }


    getInfoSecundaria() {
        return `<ul>
        <li>Gentilicio: ${this.gentilicio}</li>
        <li>Población: ${this.poblacion.toLocaleString()} habitantes</li>
        </ul>`;
    }


    escribirCoordenadas() {
        document.write(
            `<p>Coordenadas de ${this.nombre}: 
      Latitud ${this.coordenadas.latitud}, 
      Longitud ${this.coordenadas.longitud}</p>`
        );
    }


}