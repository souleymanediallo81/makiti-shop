import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesCommendeComponent } from './mes-commende.component';

describe('MesCommendeComponent', () => {
  let component: MesCommendeComponent;
  let fixture: ComponentFixture<MesCommendeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesCommendeComponent]
    });
    fixture = TestBed.createComponent(MesCommendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
