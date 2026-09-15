import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-menu',
  imports: [RouterModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  constructor(private auth: Auth) {}

  sair() {
    const confirmar = confirm('Deseja realmente sair?');
    if (confirmar) {
      this.auth.logout();
    }
  }
}
