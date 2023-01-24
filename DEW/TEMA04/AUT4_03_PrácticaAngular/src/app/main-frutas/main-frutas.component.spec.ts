import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFrutasComponent } from './main-frutas.component';

describe('MainFrutasComponent', () => {
  let component: MainFrutasComponent;
  let fixture: ComponentFixture<MainFrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFrutasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
