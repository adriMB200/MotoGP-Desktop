class juegoMemoria {

    constructor() {
        this.tablero_bloqueado = true;
        this.primera_carta = null;
        this.segunda_carta = null;
    }

    voltearCarta(carta) {
        if (!this.tablero_bloqueado) return;
        carta.dataset.estado = "volteada";

        if (!this.primera_carta) {
            this.primera_carta = carta;
            return;
        }

        this.segunda_carta = carta;
        this.compararCartas();
    }

    compararCartas() {
        const img1 = this.primera_carta.querySelector("img").src;
        const img2 = this.segunda_carta.querySelector("img").src;

        img1 === img2 ? this.deshabilitarCartas() : this.cubrirCartas();
    }

    barajarCartas() {
        const main = document.querySelector("main");
        let cartas = Array.from(main.querySelectorAll("article"));

        for (let i = cartas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
        }

        cartas.forEach(carta => main.appendChild(carta));
    }

    reiniciarAtributos() {
        this.tablero_bloqueado = true;
        this.primera_carta = null;
        this.segunda_carta = null;
    }

    deshabilitarCartas() {
        this.primera_carta.dataset.estado = "revelada";
        this.segunda_carta.dataset.estado = "revelada";
        this.comprobarJuego();
        this.reiniciarAtributos();
    }

    comprobarJuego() {
        const cartas_reveladas = document.querySelectorAll('main article');

        const todasReveladas = Array.from(cartas).every(carta => carta.dataset.estado === "revelada");

        mensaje.textContent = "🎉 ¡Has completado el juego! 🎉";
        main.appendChild(mensaje);
    }

}