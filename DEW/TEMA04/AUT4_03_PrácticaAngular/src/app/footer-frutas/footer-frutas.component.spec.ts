import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFrutasComponent } from './footer-frutas.component';

describe('FooterFrutasComponent', () => {
  let component: FooterFrutasComponent;
  let fixture: ComponentFixture<FooterFrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterFrutasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterFrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
