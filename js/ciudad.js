"use strict";
class Ciudad {
    constructor(nombre, pais, gentilicio) {
        this.nombre = nombre;
        this.pais = pais;
        this.gentilicio = gentilicio;
    }

    inicializarDatos(poblacion, latitud, longitud) {
        this.poblacion = poblacion;
        this.coordenadas = { latitud, longitud };
    }


    getNombre() {
        return `Ciudad: ${this.nombre} `;
    }


    getPais() {
        return ` País: ${this.pais}`;
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

    getMetereologiaCarrera() {
        $.ajax({
            dataType: "json",
            url: "https://archive-api.open-meteo.com/v1/archive?",
            data: {
                latitude: this.coordenadas.latitud,
                longitude: this.coordenadas.longitud,
                start_date: "2024-03-10",
                end_date: "2024-03-10",
                hourly: "temperature_2m,apparent_temperature,precipitation,relative_humidity_2m,wind_speed_10m,wind_direction_10m",
                daily: "sunrise,sunset",
                timezone: "auto"
            },
            success: this.procesarJSONcarrera.bind(this),
        });
    }

    procesarJSONcarrera(datos) {
        this.meteorologiaCarrera = {
            horas: datos.hourly.time,
            temperatura: datos.hourly.temperature_2m,
            sensacionTermica: datos.hourly.apparent_temperature,
            lluvia: datos.hourly.precipitation,
            humedad: datos.hourly.relative_humidity_2m,
            vientoVelocidad: datos.hourly.wind_speed_10m,
            vientoDireccion: datos.hourly.wind_direction_10m,
            amanecer: datos.daily.sunrise[0],
            atardecer: datos.daily.sunset[0]
        };
    }

    getMetereologiaEntregos() {
        $.ajax({
            dataType: "json",
            url: "https://archive-api.open-meteo.com/v1/archive?",
            data: {
                latitude: this.coordenadas.latitud,
                longitude: this.coordenadas.longitud,
                start_date: "2024-03-6",
                end_date: "2024-03-9",
                hourly: "temperature_2m,apparent_temperature,precipitation,relative_humidity_2m,wind_speed_10m,wind_direction_10m",
                daily: "sunrise,sunset",
                timezone: "auto"
            },
            success: this.procesarJSONentrenos.bind(this),
        });
    }

    procesarJSONentrenos(datos) {
        this.meteorologiaEntrenos = {
            horas: datos.hourly.time,
            temperatura: datos.hourly.temperature_2m,
            sensacionTermica: datos.hourly.apparent_temperature,
            lluvia: datos.hourly.precipitation,
            humedad: datos.hourly.relative_humidity_2m,
            vientoVelocidad: datos.hourly.wind_speed_10m,
            vientoDireccion: datos.hourly.wind_direction_10m,
            amanecer: datos.daily.sunrise[0],
            atardecer: datos.daily.sunset[0]
        };
    }

    mostrarMeteorologiaCarrera() {
        let section = $("<section>").attr("id", "meteorologiaCarrera");
        section.append("<h2>Meteorología día de la carrera</h2>");

        section.append(`<p><strong>Amanecer:</strong> ${this.meteorologiaCarrera.amanecer}</p>`);
        section.append(`<p><strong>Atardecer:</strong> ${this.meteorologiaCarrera.atardecer}</p>`);

        let tabla = $("<table>");

        let thead = $("<thead>");
        thead.append("<tr>" +
            "<th>Hora</th>" +
            "<th>Temp (°C)</th>" +
            "<th>Sensación (°C)</th>" +
            "<th>Lluvia (mm)</th>" +
            "<th>Humedad (%)</th>" +
            "<th>Viento (m/s)</th>" +
            "<th>Dir. Viento (°)</th>" +
            "</tr>");
        tabla.append(thead);

        let tbody = $("<tbody>");
        let datos = this.meteorologiaCarrera;
        for (let i = 0; i < datos.horas.length; i++) {
            let fila = $("<tr>");
            fila.append(`<td>${datos.horas[i]}</td>`);
            fila.append(`<td>${datos.temperatura[i]}</td>`);
            fila.append(`<td>${datos.sensacionTermica[i]}</td>`);
            fila.append(`<td>${datos.lluvia[i]}</td>`);
            fila.append(`<td>${datos.humedad[i]}</td>`);
            fila.append(`<td>${datos.vientoVelocidad[i]}</td>`);
            fila.append(`<td>${datos.vientoDireccion[i]}</td>`);
            tbody.append(fila);
        }
        tabla.append(tbody);
        section.append(tabla);
        $("body").append(section);
    }

    mostrarMeteorologiaEntrenos() {
        let section = $("<section>").attr("id", "meteorologiaEntrenos");
        section.append("<h2>Meteorología día de la carrera</h2>");

        section.append(`<p><strong>Amanecer:</strong> ${this.meteorologiaEntrenos.amanecer}</p>`);
        section.append(`<p><strong>Atardecer:</strong> ${this.meteorologiaEntrenos.atardecer}</p>`);
        let tabla = $("<table>");

        let thead = $("<thead>");
        thead.append("<tr>" +
            "<th>Hora</th>" +
            "<th>Temp (°C)</th>" +
            "<th>Sensación (°C)</th>" +
            "<th>Lluvia (mm)</th>" +
            "<th>Humedad (%)</th>" +
            "<th>Viento (m/s)</th>" +
            "<th>Dir. Viento (°)</th>" +
            "</tr>");
        tabla.append(thead);

        let tbody = $("<tbody>");
        let datos = this.meteorologiaCarrera;
        for (let i = 0; i < datos.horas.length; i++) {
            let fila = $("<tr>");
            fila.append(`<td>${datos.horas[i]}</td>`);
            fila.append(`<td>${datos.temperatura[i]}</td>`);
            fila.append(`<td>${datos.sensacionTermica[i]}</td>`);
            fila.append(`<td>${datos.lluvia[i]}</td>`);
            fila.append(`<td>${datos.humedad[i]}</td>`);
            fila.append(`<td>${datos.vientoVelocidad[i]}</td>`);
            fila.append(`<td>${datos.vientoDireccion[i]}</td>`);
            tbody.append(fila);
        }
        tabla.append(tbody);
        section.append(tabla);
        $("body").append(section);
    }


}