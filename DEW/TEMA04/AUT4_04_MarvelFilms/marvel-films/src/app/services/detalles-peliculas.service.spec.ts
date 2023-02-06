import { TestBed } from '@angular/core/testing';

import { DetallesPeliculasService } from './detalles-peliculas.service';

describe('DetallesPeliculasService', () => {
  let service: DetallesPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
