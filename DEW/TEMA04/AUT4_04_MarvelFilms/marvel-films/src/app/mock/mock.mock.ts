import { Pelicula } from "../model/pelicula.model";

export class Mock {
  private mock: Pelicula[] = [];

  constructor() {}

  getMock() {
    return this.mock;
  }

  setMock(info: any) {
    this.mock = info;
  }
}