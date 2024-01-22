import { Component, AfterViewInit } from '@angular/core';
import { InicioDataService } from '../../inicio-data.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  public dataPubli:any;
  public dataCient:any;
  activeTabGen:string="publicaciones";

  constructor(private inicioDataService: InicioDataService) {}

  ngAfterViewInit(): void {
    this.createDoughnutChart();
  }

  private createDoughnutChart(): void {
    this.dataPubli=this.inicioDataService.getPublicationData();
    this.dataCient=this.inicioDataService.getCientificData();
    // console.log(this.datasets);
    
    //MI NUMERO CODIGO SACADO 

  }
}