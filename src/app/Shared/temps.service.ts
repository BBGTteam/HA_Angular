import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TempsService {

  constructor() { }

  tempBazsi: number | undefined;

  tempGive(){
    this.tempBazsi = 20;
    return this.tempBazsi;
  }

  updateTempData(value: number, data: number){
    value = data;
  }

}
