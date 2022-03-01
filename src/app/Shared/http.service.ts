import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { ChartsService } from './charts.service';
import { TempsService } from '../Shared/temps.service';
import { MainComponent } from '../main/main.component';

const socket = io('http://192.168.1.113:3000');

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(public charts: ChartsService, public temps: TempsService) { }
  
  sendMessage(msg: String){
    socket.emit('message', msg)
  }
  
  keepAlive(){
    socket.emit('message', "keep alive")
  }

  getMessageFromArduinoServerToChart(chart: any){
    socket.on('bazsi_array', (res) => {
      var temp = [res[0][1]];
      var hum = [res[0][2]];
      // var tempBazsiCurrent = temp[0];
      // console.log(tempBazsiCurrent);
      this.charts.updateChartData(chart[0], temp, 0);
      this.charts.updateChartData(chart[0], hum, 2);
    })
    
    socket.on('tomi_array', (res) => {
      var temp = [res[0][1]];
      var hum = [res[0][2]];
      this.charts.updateChartData(chart[1], temp, 0);
      this.charts.updateChartData(chart[1], hum, 1);
    })

    socket.on('gabi_array', (res) => {
      var temp = [res[0][1]];
      var hum = [res[0][2]];
      this.charts.updateChartData(chart[2], temp, 0);
      this.charts.updateChartData(chart[2], hum, 1);
    })
  }
  
  getMessageToTemp(){
    socket.on('bazsi_array', (res) => {
      var temp = res[0][1];
      this.temps.tempBazsi.dials.dial[0].value = temp;
    })
    
    socket.on('tomi_array', (res) => {
      var temp = res[0][1];
      this.temps.tempTomi.dials.dial[0].value = temp;
    })
    
    socket.on('gabi_array', (res) => {
      var temp = res[0][1];
      this.temps.tempGabi.dials.dial[0].value = temp;
    })

  }
}