import { Component } from '@angular/core';
import { CurrencyapiService } from './currencyapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'firstProjectAngular';
  currjson: any = [];
  onecurrjson: any = [];

  curr1 = 'USD';
  curr2 = 'USD';
  result: number = 1;
  res: any;

  changeBase1(a: string) {
    this.curr1 = a;
    // console.log(this.curr1);
  }

  changeBase2(b: string) {
    this.curr2 = b;
    // console.log(this.curr2);
  }

  constructor(private currency: CurrencyapiService) {}

  onChange() {
    // console.log(this.curr1);
    // console.log(this.curr2);

    this.currency.getCurrencyAPI(this.curr1).subscribe((data) => {
      // console.log(data);
      this.currjson = JSON.stringify(data);
      // console.log(this.currjson);
      this.currjson = JSON.parse(this.currjson);
      console.log(this.currjson);

      if (this.curr2 == 'USD') {
        this.result = this.currjson.rates.USD.toFixed(2);
        // console.log(this.result);
        // console.log(this.result.toFixed(2));
      }
      if (this.curr2 == 'UAH') {
        this.result = this.currjson.rates.UAH.toFixed(2);

        console.log(this.result);
      }
      if (this.curr2 == 'EUR') {
        this.result = this.currjson.rates.EUR.toFixed(2);
        // console.log(this.result);
      }
    });
  }

  oneCurr() {
    this.currency.getOneCurr().subscribe((res) => {
      console.log(res);
      this.onecurrjson = JSON.stringify(res);
      this.onecurrjson = JSON.parse(this.onecurrjson);
      console.log(this.onecurrjson);
    });
  }
}
