
class Carrusel {
    #busqueda;
    #actual;
    #maximo;

    constructor() {
        this.#busqueda = "";
        this.#actual = 0;
        this.#maximo = 4;
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
            success: this.#procesarRespuesta.bind(this),
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("Error al obtener las fotografías:", textStatus, errorThrown);
            }
        });

    }

    #procesarRespuesta(datos) {
        console.log("Fotografías obtenidas:", datos);
    }

}