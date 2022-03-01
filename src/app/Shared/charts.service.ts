import { Injectable } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  constructor() { }

  chart_bazsi: Chart | undefined;
  chart_tomi: Chart | undefined;
  chart_gabi: Chart | undefined;

  chartGive(){
    this.chart_bazsi = new Chart('bar_bazsi', {
          type: 'bar',
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false
              },
              title: {
                display: true,
                text: 'Bazsi room'
              },
            }
            
          },
          data: {
            labels: ['jelenlegi hőmérséklet', 'hum'],
            datasets: [
              {
                type: 'bar',
                data: [24, 40],
                backgroundColor: 'brown',
                borderColor: 'rgba(255,0,255,0.4)',
              },
            ]
          }
        });

    this.chart_tomi = new Chart('bar_tomi', {
          type: 'bar',
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Tomi room'
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
                backgroundColor: 'brown',
                borderColor: 'rgba(255,0,255,0.4)',
              },
            ]
          }
        });
    this.chart_gabi = new Chart('bar_gabi', {
          type: 'bar',
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Gabi room'
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
                backgroundColor: 'brown',
                borderColor: 'rgba(255,0,255,0.4)',
              },
            ]
          }
        });
        return [this.chart_bazsi, this.chart_tomi, this.chart_gabi];
  }

  updateChartData(chart: any, data: any, dataSetIndex: any){
    chart.data.datasets[0].data[dataSetIndex] = data;
    chart.update();
  }
}
