import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../Shared/charts.service';
import { HttpService } from '../Shared/http.service';
import { TempsService } from '../Shared/temps.service';
import jsonData from '../../../../../HomeAutomation/data/db.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  tempBazsiMin = jsonData.Bazsi.tempMin;
  constructor(public http: HttpService, public charts: ChartsService, public temps: TempsService ) { }

  ngOnInit(): void {
    setInterval(this.http.keepAlive, 30000);
    this.http.getMessageFromArduinoServerToChart(this.charts.chartGive());
  }

  updateSetting(event: any){
    let value = event.value;
    let message = "Bazsi,setTemp," + value;
    this.http.sendMessage(message);
  }


}
