import { Component, OnInit } from '@angular/core';
import { RouterModule} from "@angular/router";
import { Menu } from "../../components/menu/menu";
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule,CommonModule, FormsModule, Menu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  veiculos: any[] = [];
  veiculoSelecionado: any = null;

  vinBusca: string = '';
  dadosTelemetria: any = null;

  

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getVehicles().subscribe({
      next: (resposta: any) => {
        this.veiculos = resposta.vehicles;
      },
      error: (erro: any) => console.error('Erro ao buscar veículos: ', erro)
    });
  }

  selecionarVeiculo(event: any): void {
    const idEscolhido = event.target.value;
    this.veiculoSelecionado = this.veiculos.find(v => v.id == idEscolhido);
  }

  buscarTelemetria(): void {
    if (!this.vinBusca) return; 

    this.dashboardService.getVehicleData(this.vinBusca).subscribe({
      next: (resposta: any) => {
        this.dadosTelemetria = resposta;
      },
      error: (erro: any) => {
        console.error('Erro ao buscar VIN: ', erro);
        alert('Código VIN não encontrado!');
        this.dadosTelemetria = null;
      }
    });
  }

  
}
