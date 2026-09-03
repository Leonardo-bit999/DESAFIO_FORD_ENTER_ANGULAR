import { inject } from "@angular/core";
import { Router } from "@angular/router";



export const authGuard = () => {
    const router = inject(Router);

    const loginSalvo = localStorage.getItem('usuarioLogado');

    if(loginSalvo === 'true'){
        return true;
    }else{
        router.navigate(['/login']);
        return false;
    }
}