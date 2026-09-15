import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Menu } from '../../components/menu/menu';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Veiculo } from '../../models/veiculo.model';
import { Vehicle } from '../../services/vehicle';
import { Telemetria } from '../../models/telemetria.model';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, CommonModule, FormsModule, Menu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  veiculos: Veiculo[] = [];
  veiculoSelecionado: Veiculo | null = null;

  vinBusca: string = '';
  dadosTelemetria: Telemetria | null = null;
  mensagemErroVin: string | null = null;

  private vinDigitado = new Subject<string>();

  constructor(private vehicle: Vehicle) {}

  ngOnInit(): void {
    this.vehicle.getVehicles().subscribe((veiculos) => {
      this.veiculos = veiculos;
    });

    this.vinDigitado
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((vin) => vin.trim().length > 0),
        switchMap((vin) => this.vehicle.getVehicleData(vin))
      )
      .subscribe({
        next: (telemetria) => {
          this.dadosTelemetria = telemetria;
          this.mensagemErroVin = null;
        },
        error: () => {
          this.dadosTelemetria = null;
          this.mensagemErroVin = 'Código VIN não encontrado!';
        },
      });
  }

  veiculoEscolhido(event: Event): void {
    const idSelecionado = (event.target as HTMLSelectElement).value;

    if (idSelecionado) {
      this.veiculoSelecionado = this.veiculos.find((v) => v.id == Number(idSelecionado)) || null;
    } else {
      this.veiculoSelecionado = null;
    }
  }

  buscarTelemetria(vin: string): void {
    this.vinDigitado.next(vin);
  }
}
