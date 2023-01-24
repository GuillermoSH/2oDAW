import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFrutasComponent } from './card-frutas.component';

describe('CardFrutasComponent', () => {
  let component: CardFrutasComponent;
  let fixture: ComponentFixture<CardFrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFrutasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
