import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  constructor (private router: Router){}
  
  sair(){
    localStorage.removeItem('usuarioLogado');
    this.router.navigate(['/login']);
  }
}
