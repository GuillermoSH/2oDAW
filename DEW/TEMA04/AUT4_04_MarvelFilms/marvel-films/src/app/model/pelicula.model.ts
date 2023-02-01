export class Pelicula {
    public id: number;
    public name: string;
    public poster: string;
    public releaseDate: string;
    public description: string;

    constructor(id: number, name: string, poster: string, releaseDate: string = "", description: string = "") {
        this.id = id;
        this.name = name;
        this.poster = poster;
        this.releaseDate = releaseDate;
        this.description = description;
    }
}
