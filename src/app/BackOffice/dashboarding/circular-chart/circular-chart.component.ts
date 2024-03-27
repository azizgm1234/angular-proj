import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-circular-chart',
  templateUrl: './circular-chart.component.html',
  styleUrls: ['./circular-chart.component.css']
})
export class CircularChartComponent implements OnInit {
  @Input() percentage: number = 0;
  // @Input() number: number = 0;
  @Input() type: number = 0;

  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  };
  public doughnutChartLabels: Label[] = ["available", "not available"];
  public doughnutChartData: SingleDataSet = [this.percentage, 100 - this.percentage];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColor: Color[] = [
    { backgroundColor: ['#f68059', '#ffbf3a', '#4e3dc8'] },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
