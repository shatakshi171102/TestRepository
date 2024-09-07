// import { Component, OnInit } from '@angular/core';
// // import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// // import { Label } from 'ng2-charts';

// @Component({
//   selector: 'app-policy-chart',
//   templateUrl: './policy-chart.component.html',
//   styleUrls: ['./policy-chart.component.css']
// })
// export class PolicyChartComponent implements OnInit {
//   public lineChartOptions: ChartOptions = {
//     responsive: true,
//   };
//   public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   public lineChartType: ChartType = 'line';
//   public lineChartLegend = true;
//   public lineChartPlugins = [];

//   public lineChartData: ChartDataSets[] = [
//     { data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 70, 75, 90], label: 'Policies Sold' }
//   ];

//   constructor() { }

//   ngOnInit(): void {
//   }

//   chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
//     console.log(event, active);
//   }

//   chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
//     console.log(event, active);
//   }
// }
