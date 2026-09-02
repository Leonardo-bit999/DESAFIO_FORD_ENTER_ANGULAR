import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  nome = '';
  senha = '';

  constructor(private router: Router, private authService: Auth) {}

  login() {
    const dados = { nome: this.nome, senha: this.senha };
    this.authService.fazerLogin(dados).subscribe({
      next: (resposta) => {
        localStorage.setItem('usuarioLogado', 'true');
        this.router.navigate(['/home']);
      },
      error: (erro) => {
        alert(erro.error.message || 'Falha na comunicação com o servidor!');
      }
    });
  }
}