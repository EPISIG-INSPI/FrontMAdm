import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isOpen = false;
  //desplegar
  isInicioOpen: boolean = false;
  isEstadisticasOpen: boolean = false;
  isPerfilOpen: boolean = false;
  isConfiguracionOpen: boolean = false;

  toggle(section: string): void{
    this.isOpen = !this.isOpen;
    //desplegar
    switch (section) {
      case 'Inicio':
        this.isInicioOpen = !this.isInicioOpen;
        break;
      case 'Estadisticas':
        this.isEstadisticasOpen = !this.isEstadisticasOpen;
        break;
      case 'Perfil':
        this.isPerfilOpen = !this.isPerfilOpen;
        break;
      case 'Configuracion':
        this.isConfiguracionOpen = !this.isConfiguracionOpen;
        break;
    }
  }
}
