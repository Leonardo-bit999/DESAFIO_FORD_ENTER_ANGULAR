import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    {path:'login', component: Login, title:'Login - Ford'},
    {path:'home', component: Home, title:'Home - Ford'},
    {path:'dashboard', component: Dashboard, title:'Dashboard - Ford'},
    {path:'', redirectTo:'/login', pathMatch:'full'}
];
