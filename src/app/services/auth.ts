import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = 'http://localhost:3001';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login(usuario: Pick<Usuario, 'nome' | 'senha'>): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, usuario).pipe(
      tap((resposta) => {
        sessionStorage.setItem('USER_KEY', JSON.stringify(resposta));
      }),
    );
  }

  estaLogado(): boolean {
    const usuarioLogado = sessionStorage.getItem('USER_KEY');
    return usuarioLogado ? true : false;
  }

  logout(){
    sessionStorage.removeItem('USER_KEY');
    this.router.navigate(['/login']);
  }
}
