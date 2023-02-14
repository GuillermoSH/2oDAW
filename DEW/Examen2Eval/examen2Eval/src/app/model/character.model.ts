export class Character {
    public id: number;
    public name: string;
    public status: string;
    public species: string;
    public gender: string;
    public image: string;

    /**
     * La función constructora es una función que se llama cuando se crea una nueva instancia de la
     * clase.
     * @param {number} id - numero - El id del personaje
     * @param {string} name - El nombre del personaje.
     * @param {string} status - Vivo, Muerto, Desconocido
     * @param {string} species - cadena = "";
     * @param {string} gender - cadena = ""
     * @param {string} image - La imagen del personaje
     */
    constructor(id: number, name: string, status: string, species: string, gender: string , image: string) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.species = species;
        this.gender = gender;
        this.image = image;
    }
}