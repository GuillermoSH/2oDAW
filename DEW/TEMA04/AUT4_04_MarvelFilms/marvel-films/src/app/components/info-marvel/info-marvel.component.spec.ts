import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMarvelComponent } from './info-marvel.component';

describe('InfoMarvelComponent', () => {
  let component: InfoMarvelComponent;
  let fixture: ComponentFixture<InfoMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMarvelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
