import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imulador',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './imulador.component.html',
  styleUrl: './imulador.component.css',
})
export class ImuladorComponent {
limpiar() {
  this.depositoIdepro = 1000;
  this.tasaDeCambioPanamerican = 6.92;
  this.tasaDeCambioBeyondFI = this.tasaDeCambioPanamerican + 0.5;
  this.porcentajeDeComicion = 2.5;
  this.usdcClienteCalculados = 0;
  this.usdcCliente = 0;
  this.comision = 0;
  this.bolivianosDespuesDeComision = 0;
  this.bolivianos = 0;
  this.walletPanamerican = 100000;
  this.walletBeyondFi = 0;
  this.wallerCliente = 0;
  this.usdSpread = 0;
  this.usdComision = 0;
  this.usdcAComprar = 0;
  this.usdComisionBeyonFIDepro = 0;
  this.usdComisionPanamerican = 0;
}
  comprar() {
    let bolivianos =
      this.formGroupCalculo.value.bolivianos == undefined ||
      this.formGroupCalculo.value.bolivianos == ''
        ? 0
        : Number(this.formGroupCalculo.value.bolivianos);
    this.comision = (bolivianos * this.porcentajeDeComicion) / 100;
    this.usdComision = this.comision / this.tasaDeCambioPanamerican;
    this.usdComisionBeyonFIDepro = (this.usdComision * 2) / 3;
    this.usdComisionPanamerican = (this.usdComision * 1) / 2;
    this.bolivianosDespuesDeComision = bolivianos - this.comision;
    this.usdcCliente = bolivianos / this.tasaDeCambioBeyondFI;
    this.usdcCliente = this.usdcCliente - this.usdComision;
    this.usdcAComprar = bolivianos / this.tasaDeCambioPanamerican;
    this.usdSpread = this.usdcAComprar - this.usdcCliente;
    this.wallerCliente =
      this.wallerCliente + this.usdcCliente + this.usdComision;
    this.walletBeyondFi =
      this.usdSpread + this.usdComisionBeyonFIDepro + this.walletBeyondFi;
    this.walletPanamerican = this.walletPanamerican - this.usdcCliente + this.usdComisionPanamerican
  }

  calcular() {
    let bolivianos =
      this.formGroupCalculo.value.bolivianos == undefined ||
      this.formGroupCalculo.value.bolivianos == ''
        ? 0
        : Number(this.formGroupCalculo.value.bolivianos);
    this.comision = (bolivianos * this.porcentajeDeComicion) / 100;
    this.bolivianosDespuesDeComision = bolivianos - this.comision;
    this.usdcClienteCalculados = bolivianos / this.tasaDeCambioBeyondFI;
  }

  colocarTasasDeCambio() {
    this.tasaDeCambioBeyondFI = this.formGroup.value.tasaDeCambioBeyondFI;
    this.tasaDeCambioPanamerican = this.formGroup.value.tasaDeCambioPanamerican;
  }

  depositoIdepro = 1000;
  tasaDeCambioPanamerican = 6.92;
  tasaDeCambioBeyondFI = this.tasaDeCambioPanamerican + 0.5;
  porcentajeDeComicion = 2.5;
  usdcClienteCalculados = 0;
  usdcCliente = 0;
  comision = 0;
  bolivianosDespuesDeComision = 0;
  bolivianos = 0;
  walletPanamerican = 100000;
  walletBeyondFi = 0;
  wallerCliente = 0;
  usdSpread = 0;
  usdComision = 0;
  usdcAComprar = 0;
  usdComisionBeyonFIDepro = 0;
  usdComisionPanamerican = 0;

  formGroup: FormGroup;
  formGroupCalculo: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      tasaDeCambioBeyondFI: [this.tasaDeCambioBeyondFI, Validators.required],
      tasaDeCambioPanamerican: [
        this.tasaDeCambioPanamerican,
        Validators.required,
      ],
      porcentajeDeComision: [
        this.porcentajeDeComicion,
        [Validators.required, Validators.min(0), Validators.max(16)],
      ],
    });
    this.formGroupCalculo = this.formBuilder.group({
      bolivianos: [
        0,
        [
          Validators.required,
          Validators.max(this.depositoIdepro),
          Validators.min(-1),
        ],
      ],
    });
  }

  ngOnChanges() {
    console.log(this.formGroupCalculo.value);
  }
}
