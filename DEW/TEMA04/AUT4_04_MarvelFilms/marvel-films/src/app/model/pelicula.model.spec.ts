import { Pelicula } from './pelicula.model';

describe('Modelo', () => {
  it('should create an instance', () => {
    expect(new Pelicula(0, "Capitán América", "imagenPosterCA.png")).toBeTruthy();
  });
});
