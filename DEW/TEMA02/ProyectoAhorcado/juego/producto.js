class Producto {
    leerJSON() {
        $.getJSON("./peliculas.json")
            .done(function (resultado) {
                let pelicula = resultado[Math.ceil(Math.random() * resultado.length)];
                sessionStorage.setItem("producto", JSON.stringify(pelicula))
            });
        const infoProducto = JSON.parse(sessionStorage.getItem("producto"));
        this.setInfo([infoProducto.Titulo, infoProducto["Fecha de salida"], infoProducto.Duracion, infoProducto.Genero, infoProducto.Director, infoProducto.Sinopsis, infoProducto.Imagen]);
    }

    /**
     * Toma una matriz como argumento y asigna los valores de la matriz a las propiedades del objeto.
     * 
     * @param array - una matriz de cadenas
     */
    setInfo(array) {
        this.titulo = array[0];
        this.fechaSalida = array[1];
        this.duracion = array[2];
        this.genero = array[3];
        this.director = array[4];
        this.sinopsis = array[5];
        this.imagen = array[6];
    }

    /**
     * Devuelve el valor de la variable titulo.
     * @returns El titulo de la película o serie.
     */
    getTitulo() {
        return this.titulo;
    }

    /**
     * Devuelve el valor de la variable fechaSalida.
     * @returns El valor de la variable fechaSalida.
     */
    getFechaSalida() {
        return this.fechaSalida;
    }

    /**
     * Devuelve el valor de la variable duración.
     * @returns La duración de la pelicula o serie.
     */
    getDuracion() {
        return this.duracion;
    }

    /**
     * Devuelve el valor de la variable genero.
     * @returns El valor de la variable genero.
     */
    getGenero() {
        return this.genero;
    }

    /**
     * Devuelve el valor de la variable director.
     * @returns El valor de la variable director.
     */
    getDirector() {
        return this.director;
    }

    /**
     * Devuelve el valor de la propiedad sinopsis del objeto del que la función es un método.
     * @returns La sinopsis de la película.
     */
    getSinopsis() {
        return this.sinopsis;
    }

    /**
     * Devuelve el valor de la variable imagen.
     * @returns La imagen.
     */
    getImagen() {
        return this.imagen;
    }
}