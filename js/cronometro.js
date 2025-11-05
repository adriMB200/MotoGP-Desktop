class Cronometro {

    constructor() {
        this.tiempo = 0;
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
    }

    detener() {
        this.actualizar();
        clearInterval(this.corriendo);
    }

}    