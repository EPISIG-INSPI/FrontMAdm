import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { Chart } from 'chart.js/dist';
//import { Label } from 'ng2-charts';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent  {
 // public data = [
  //  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //];
  //public labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  //public chartType = 'bar';

  getPublicationData() {
    return {
      scientificPublications: 30,
      articles: 50,
      generalDocuments: 20,
      reports: 15,
      proformas: 10,
      materialGoods: 25,
      others: 5,
    };
  }
}

