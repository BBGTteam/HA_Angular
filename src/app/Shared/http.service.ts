import { Injectable } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import io from 'socket.io-client';

const socket = io('http://192.168.1.113:3005');

Chart.register(...registerables);

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  test = "test value";
  title = 'dashboard';
  chart: Chart | undefined;
  constructor() { }

  sendMessage(msg: String){
    socket.emit('message', msg)
  }

  getMessageFromArduinoServer(){
    socket.on('bazsi_array', (res) => {
      var temp = [res[0][1]];
      var hum = [res[0][2]];
      this.updateChartData(this.chart, temp, 0);
      this.updateChartData(this.chart, hum, 1);
    })

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
  }
  
  updateChartData(chart: any, data: any, dataSetIndex: any){
    chart.data.datasets[0].data[dataSetIndex] = data;
    chart.update();
  }
}