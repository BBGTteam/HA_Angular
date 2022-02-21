import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpService } from '../Shared/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public http: HttpService, public app: AppComponent) { }

  ngOnInit(): void {
    console.log(this.http.test)
    this.http.getMessageFromArduinoServer();
  }

  // sendMessage(msg: String){
  //   this.app.appSocket.emit('message', msg)
    
  // }

}
