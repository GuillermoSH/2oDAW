/* Una clase es un modelo para un objeto Pelicula. */
export class Pelicula {
    public id: number;
    public name: string;
    public poster: string;
    public releaseDate: string;
    public description: string;

    /**
     * La función constructora es una función que se llama cuando se crea un objeto a partir de una
     * clase.
     * 
     * @param {number} id - La identificación de la película.
     * @param {string} name - El nombre de la película.
     * @param {string} poster - La URL del cartel de la película.
     * @param {string} [releaseDate] - cadena = ""
     * @param {string} [description] - cadena = ""
     */
    constructor(id: number, name: string, poster: string, releaseDate: string = "", description: string = "") {
        this.id = id;
        this.name = name;
        this.poster = poster;
        this.releaseDate = releaseDate;
        this.description = description;
    }
}
