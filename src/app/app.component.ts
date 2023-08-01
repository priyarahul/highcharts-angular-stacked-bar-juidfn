import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HighchartsService } from './highcharts.service.ts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('charts') public chartEl: ElementRef;
  constructor(private highcharts: HighchartsService) {}
  ngOnInit() {
    this.highcharts.createChart(this.chartEl.nativeElement, this.myOptions);
  }
  myOptions = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Stacked bar chart',
    },
    xAxis: {
      categories: ['Dev1', 'Dev2', 'Dev3', 'Dev4', 'Dev5', 'Dev6'],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Days Allocation',
      },
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: 'normal',
      },
    },
    series: [
      {
        name: 'Project3',
        data: [5, 10, 15, 10, 14,0],
      },
      {
        name: 'Project2',
        data: [10, 8, 5, 2, 6], 
      },
      {
        name: 'Project1',
        data: [ 7, 5, 13, 5],
      },
    ],
  };
}
