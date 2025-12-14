
class Carrusel {
    #busqueda;
    #actual;
    #maximo;
    #fotografias;

    constructor() {
        this.#busqueda = "";
        this.#actual = 0;
        this.#maximo = 4;
        this.#fotografias = [];
    }

    getFotografias() {
        $.ajax({
            dataType: "json",
            url: "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
            data: {
                tags: this.#busqueda,
                tagmode: "all",
                format: "json"
            },
            success: this.procesarJSONFotografias.bind(this),
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("Error al obtener las fotografías:", textStatus, errorThrown);
            }
        });

    }

    procesarJSONFotografias() {
        console.log("Fotografías obtenidas:", datos);
    }

    mostrarFotografias() {
        return this.#fotografias[0];
    }

    cambiarFotografia() {
        if (this.#actual < this.#maximo - 1) {
            this.#actual++;
        } else {
            this.#actual = 0;
        }
    }

}