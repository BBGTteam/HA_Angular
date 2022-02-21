import { Injectable } from '@angular/core';
import { Chart, registerables } from 'chart.js';



Chart.register(...registerables);

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  constructor() { }

  chart: Chart | undefined;
  
  chartGive(){
    this.chart = new Chart('bar', {
          type: 'bar',
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Combo Bar and line Chart'
              },
            }
            
          },
          data: {
            labels: ['temp', 'hum'],
            datasets: [
              {
                type: 'bar',
                label: 'Temperature',
                data: [24, 40],
                backgroundColor: 'rgba(255,0,255,0.8)',
                borderColor: 'rgba(255,0,255,0.4)',
              },
            ]
          }
        });
        return this.chart;
  }

  updateChartData(chart: any, data: any, dataSetIndex: any){
    chart.data.datasets[0].data[dataSetIndex] = data;
    chart.update();
  }

}
