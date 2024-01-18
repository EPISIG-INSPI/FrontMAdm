import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { InicioDataService } from '../../inicio-data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('chartContainer') chartContainer!: ElementRef;

  publicationData: any = {};

  constructor(private inicioDataService: InicioDataService) {}

  ngOnInit(): void {
    this.publicationData = this.inicioDataService.getPublicationData();
  }

  ngAfterViewInit(): void {
    this.createDoughnutChart();
  }

  private createDoughnutChart(): void {
    const ctx = (this.chartContainer.nativeElement as HTMLCanvasElement).getContext('2d');
    //MI NUMERO CODIGO SACADO 
  }
}
