import { Component } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
//import { Label } from 'ng2-charts';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})

export class InicioComponent {
  public data = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public chartType = 'bar';
}
