import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../Shared/charts.service';
import { HttpService } from '../Shared/http.service';
import { TempsService } from '../Shared/temps.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(public http: HttpService, public charts: ChartsService, public temps: TempsService) { }
  
  
  width = "350";
  height = "200";
  type = "angulargauge";
  dataFormat = "json";
  dataSourceBazsi = this.temps.tempBazsi;
  dataSourceTomi = this.temps.tempTomi;
  dataSourceGabi = this.temps.tempGabi;
  

  ngOnInit(): void {
    setInterval(this.http.keepAlive, 30000);
    // this.http.getMessageFromArduinoServerToChart(this.charts.chartGive());
    this.http.getMessageToTemp();
  }

  updateSetting(event: any){
    let value = event.value;
    let message = "Bazsi,setTemp," + value;
    this.http.sendMessage(message);
  }


}
