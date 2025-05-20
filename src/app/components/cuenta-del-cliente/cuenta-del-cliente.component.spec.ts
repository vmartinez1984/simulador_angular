import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaDelClienteComponent } from './cuenta-del-cliente.component';

describe('CuentaDelClienteComponent', () => {
  let component: CuentaDelClienteComponent;
  let fixture: ComponentFixture<CuentaDelClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuentaDelClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentaDelClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
