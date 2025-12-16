
class Carrusel {
    #busqueda;
    #actual;
    #maximo;
    #fotografias;

    constructor() {
        this.#busqueda = "Qatar, Moto GP, Lusail";
        this.#actual = 0;
        this.#maximo = 5;
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
        });

    }

    procesarJSONFotografias(datos) {
        this.#fotografias = [];

        for (let i = 0; i < this.#maximo; i++) {
            this.#fotografias.push(datos.items[i].media.m.replace("_m.", "_z."));
        }

        this.#actual = 0;
    }

    mostrarFotografias() {
        let article = $("<article>");
        let h2 = $("<h2>").text("Imágenes del circuito de Lusail International Circuit");
        let img = $("<img>")
            .attr("src", this.#fotografias[this.#actual])
            .attr("id", "fotoCarrusel");

        article.append(h2);
        article.append(img);

        $("body").append(article);

        setInterval(this.cambiarFotografia.bind(this), 3000);
    }

    cambiarFotografia() {
        if (this.#actual < this.#maximo - 1) {
            this.#actual++;
        } else {
            this.#actual = 0;
        }
        $("#fotoCarrusel").attr("src", this.#fotografias[this.#actual]);
    }

}