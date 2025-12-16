class Noticias {
    #busqueda;
    #url;
    #token;

    constructor() {
        this.#busqueda = "MotoGP";
        this.#url = "https://api.thenewsapi.com/v1/news/all";
        this.#token = "XOGihOTkR5iLdmqghkaPP5I6RqNJoszFq2BPUtH6";
    }

    buscar() {
        const urlCompleta = `${this.#url}?api_token=${this.#token}&search=${this.#busqueda}&language=es&limit=5`;

        fetch(urlCompleta)
            .then(respuesta => {
                return respuesta.json();
            })
            .then(datos => this.procesarInformacion(datos))
            .catch(error => console.error("Error:", error));
    }

    procesarInformacion(datos) {
        let section = $("<section>").attr("id", "noticias");
        section.append("<h2>Últimas noticias de MotoGP</h2>");

        datos.data.forEach(noticia => {
            let article = $("<article>");

            article.append(`<h3>${noticia.title}</h3>`);

            if (noticia.description) {
                article.append(`<p>${noticia.description}</p>`);
            }

            article.append(
                `<p>
                    <a href="${noticia.url}">Leer noticia completa</a>
                    <br><small>Fuente: ${noticia.source}</small>
                </p>`
            );
            section.append(article);
        });

        $("body").append(section);
    }
}