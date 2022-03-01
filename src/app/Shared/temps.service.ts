import { Injectable } from '@angular/core';
import jsonData from '../../../../../HomeAutomation/data/db.json';

@Injectable({
  providedIn: 'root'
})
export class TempsService {
  
  constructor() { }

  tempBazsiMin = jsonData.Bazsi.tempMin;
  tempTomiMin = jsonData.Tomi.tempMin;
  tempGabiMin = jsonData.Gabi.tempMin;

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
          value: 22,
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

  tempTomi = {
    chart: {
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
          startvalue: this.tempTomiMin,
          displayvalue: "Beállított hőmérséklet",
          thickness: "2",
          color: "#E15A26",
          usemarker: "1",
          markerbordercolor: "#E15A26",
          markertooltext: this.tempTomiMin
        }
      ]
    }
  };

  tempGabi = {
    chart: {
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
          startvalue: this.tempGabiMin,
          displayvalue: "Beállított hőmérséklet",
          thickness: "2",
          color: "#E15A26",
          usemarker: "1",
          markerbordercolor: "#E15A26",
          markertooltext: this.tempGabiMin
        }
      ]
    }
  };

}
