import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFrutasComponent } from './header-frutas.component';

describe('HeaderFrutasComponent', () => {
  let component: HeaderFrutasComponent;
  let fixture: ComponentFixture<HeaderFrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFrutasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
