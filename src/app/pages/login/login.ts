import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuario = {
    nome: '',
    senha: '',
  }

  mensagemErro: string | null = null;
 
  constructor(private router: Router, private auth: Auth) {}

  login() {
    this.auth.login({ nome: this.usuario.nome, senha: this.usuario.senha }).subscribe({
      next: (resposta) => {
        this.router.navigate(['/home']);
      },
      error: (erro) => {
        this.mensagemErro = erro.error.message || 'Usuário ou senha inválidos!';
      }
    });
  }
}