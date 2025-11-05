class Cronometro {

    constructor() {
        this.tiempo = 0;
        this.corriendo = null;
        this.inicio = null;
    }

    arrancar() {
        try {
            this.inicio = Temporal.Now.instant();;
        } catch (error) {
            this.inicio = new Date.now();
        }

        this.corriendo = setInterval(this.actualizar.bind(this), 100);
    }

    actualizar() {
        try {
            let ahora = Temporal.Now.instant();
            this.tiempo = ahora.since(this.inicio).total('seconds');
        } catch (error) {
            let ahora = Date.now();
            this.tiempo = (ahora - this.inicio) / 1000;
        }

        this.mostrar();
    }

    parar() {
        clearInterval(this.corriendo);
    }

    mostrar() {
        let ms = this.tiempo * 1000;
        let minutos = parseInt(ms / 60000);
        let segundos = parseInt((ms % 60000) / 1000);
        let decimas = parseInt((ms % 1000) / 100);

        let textoMin = minutos.toString().padStart(2, "0");
        let textoSeg = segundos.toString().padStart(2, "0");

        let cadenaTiempo = `${textoMin}:${textoSeg}.${decimas}`;

        let parrafo = document.querySelector("main p");
        if (parrafo) {
            parrafo.textContent = cadenaTiempo;
        }
    }

    reiniciar() {
        clearInterval(this.corriendo);
        this.tiempo = 0;
        this.mostrar();
    }

}    