import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { ChartsService } from './charts.service';

const socket = io('http://192.168.1.113:3005');

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  title = 'dashboard';

  constructor(public charts: ChartsService) { }
  
  sendMessage(msg: String){
    socket.emit('message', msg)
  }

  getMessageFromArduinoServer(chart: any){
    socket.on('bazsi_array', (res) => {
      var temp = [res[0][1]];
      var hum = [res[0][2]];
      this.charts.updateChartData(chart, temp, 0);
      this.charts.updateChartData(chart, hum, 1);
    })
  }

  
}