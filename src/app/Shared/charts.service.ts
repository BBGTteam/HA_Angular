import { Injectable } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import jsonData from '../../../../../HomeAutomation/data/db.json';

Chart.register(...registerables);

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  constructor() { }

  chart_bazsi: Chart | undefined;
  chart_tomi: Chart | undefined;
  chart_gabi: Chart | undefined;

  tempBazsiMin = jsonData.Bazsi.tempMin;

  
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

  tempBazsi = {
      chart: {
        // caption: "Bazsi szoba",
        lowerlimit: "18",
        upperlimit: "28",
        showvalue: "1",
        numbersuffix: "°C",
        theme: "umber"
      },
      colorrange: {
        color: [
          {
            minvalue: "18",
            maxvalue: "22",
            code: "#3633ff"
          },
          {
            minvalue: "22",
            maxvalue: "24",
            code: "#55ff33"
          },
          {
            minvalue: "24",
            maxvalue: "28",
            code: "#c40a0a"
          }
        ]
      },
      dials: {
        dial: [
          {
            value: 23,
            tooltext: "<b>9%</b> lesser that target"
          }
        ]
      },
      trendpoints: {
        point: [
          {
            startvalue: this.tempBazsiMin,
            displayvalue: "Beállított hőmérséklet",
            thickness: "2",
            color: "#E15A26",
            usemarker: "1",
            markerbordercolor: "#E15A26",
            markertooltext: this.tempBazsiMin
          }
        ]
      }
    };


}
