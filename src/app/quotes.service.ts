import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Url } from 'url';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private _http: Http) { }

  private url:string='./assets/js/quotes.json';


  getQuotes() {
    return this._http.get(this.url)
      .map((response: Response) => response.json());
  }

  private handleError(error: Response) {
    console.log(error);
    return error.json().error;
  }

}
