class juegoMemoria {

    constructor() {
        this.tablero_bloqueado = true;
        this.primera_carta = null;
        this.segunda_carta = null;
    }

    voltearCarta(carta) {
        if (this.tablero_bloqueado || carta.dataset.estado === "revelada") return;
        carta.dataset.estado = "volteada";

        if (!this.primera_carta) {
            this.primera_carta = carta;
            return;
        }

        this.segunda_carta = carta;
        this.compararCartas();
    }
    cubrirCartas() {
        if (this.primera_carta.dataset.estado === "volteada"
            && this.segunda_carta.dataset.estado === "volteada") {

            this.primera_carta.removeAttribute("data-estado");
            this.segunda_carta.removeAttribute("data-estado");

            this.reiniciarAtributos();
        }
    }


    compararCartas() {
        this.tablero_bloqueado = true;
        const img1 = this.primera_carta.children[1].getAttribute("src");
        const img2 = this.segunda_carta.children[1].getAttribute("src");

        setTimeout(() => {
            img1 === img2 ? this.deshabilitarCartas() : this.cubrirCartas();
        }, 1500);
    }

    barajarCartas() {
        const main = document.querySelector("main");
        let cartas = Array.from(main.querySelectorAll("article"));

        for (let i = cartas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
        }

        cartas.forEach(carta => main.appendChild(carta));

        this.tablero_bloqueado = false;
    }

    reiniciarAtributos() {
        this.tablero_bloqueado = false;
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
        const main = document.querySelector("main");
        let cartas = Array.from(main.querySelectorAll("article"));

        for (let i = cartas.length - 1; i > 0; i--) {
            if (cartas[i].dataset.estado !== "revelada") return;
        }

        const mensaje = document.createElement("p");
        mensaje.textContent = "🎉 ¡Has completado el juego! 🎉";
        main.appendChild(mensaje);
    }

}