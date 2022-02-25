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
  
  constructor(public http: HttpService, public charts: ChartsService, public temps: TempsService ) { }

  sliderOutput = 0;

  ngOnInit(): void {
    setInterval(this.http.keepAlive, 30000);
    this.http.getMessageFromArduinoServerToChart(this.charts.chartGive());
  }

  updateSetting(event: any){
    let value = event.value;
    this.sliderOutput = value;
    let message = "Bazsi,setTemp," + value;
    this.http.sendMessage(message);
  }


}
