import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from '../personal/personal.component';
import { InicioComponent } from '../inicio/inicio.component';

const routes: Routes = [
  {
    path: 'personal',
    component: PersonalComponent,
    title: 'personal'
  },
  {
    path: 'personal2',
    component: PersonalComponent,
    title: 'personal2'
  },
  {
    path: 'inicio',
    component: InicioComponent,
    title: 'inicio'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouterRoutingModule { }
