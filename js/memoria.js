class juegoMemoria {

    constructor() {
        this.tablero_bloqueado = true;
        this.primera_carta = null;
        this.segunda_carta = null;
    }

    voltearCarta(carta) {
        carta.dataset.estado = "volteada";
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

}