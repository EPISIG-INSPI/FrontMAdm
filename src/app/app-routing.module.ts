import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './componentes/inicio/inicio.component';




const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'login'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'login'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'home',
    loadChildren: () => import('./componentes/home-router/home-router.module').then(m => m.HomeRouterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: false, onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
