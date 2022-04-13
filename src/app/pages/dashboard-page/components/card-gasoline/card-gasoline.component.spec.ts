import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGasolineComponent } from './card-gasoline.component';

describe('CardGasolineComponent', () => {
  let component: CardGasolineComponent;
  let fixture: ComponentFixture<CardGasolineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGasolineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGasolineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
