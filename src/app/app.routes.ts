import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:'login', component: Login, title:'Login - Ford'},
    {path:'home', component: Home, title:'Home - Ford', canActivate:[authGuard]},
    {path:'dashboard', component: Dashboard, title:'Dashboard - Ford', canActivate:[authGuard]},
    {path:'', redirectTo:'/login', pathMatch:'full'}
];
