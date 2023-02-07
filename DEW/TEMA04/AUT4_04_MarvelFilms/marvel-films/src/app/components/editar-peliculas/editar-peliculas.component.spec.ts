import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPeliculasComponent } from './editar-peliculas.component';

describe('EditarPeliculasComponent', () => {
  let component: EditarPeliculasComponent;
  let fixture: ComponentFixture<EditarPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPeliculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
