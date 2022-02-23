import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../Shared/charts.service';
import { HttpService } from '../Shared/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public http: HttpService, public charts: ChartsService ) { }

  ngOnInit(): void {
    setInterval(this.http.keepAlive, 30000);
    this.http.getMessageFromArduinoServer(this.charts.chartGive());
  }
}
