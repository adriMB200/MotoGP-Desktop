class Circuito {
    #documento;

    constructor() {
        this.comprobarApiFile(); ç
        this.#documento = null;
        this.leerArchivoHTML();
    }

    comprobarApiFile() {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            return;
        }
        else this.mostrarMensajeNoSoporte();
    }


    mostrarMensajeNoSoporte() {
        const mensaje = document.createElement("p");
        mensaje.textContent = "Tu navegador no soporta la API File. Algunas funcionalidades no estarán disponibles.";
        document.body.appendChild(mensaje);
    }

    leerArchivoHTML() {

    }
}