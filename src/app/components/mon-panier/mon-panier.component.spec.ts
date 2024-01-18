import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonPanierComponent } from './mon-panier.component';

describe('MonPanierComponent', () => {
  let component: MonPanierComponent;
  let fixture: ComponentFixture<MonPanierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonPanierComponent]
    });
    fixture = TestBed.createComponent(MonPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
