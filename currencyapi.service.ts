import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CurrencyapiService {
  constructor(private http: HttpClient) {}

  getCurrencyAPI(currency2: string) {
    let url = 'https://api.exchangerate.host/latest?base=' + currency2;
    return this.http.get(url);
  }

  getOneCurr() {
    let url =
      'https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=23eb6e7d1a820dc5c529';
    return this.http.get(url);
  }
}
