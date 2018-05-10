import { Component, OnInit } from '@angular/core';
import { QuotesService } from './quotes.service'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  errorMessage: string;

  constructor(private _quotesService: QuotesService) { }
  quotes=[];
  query = {}
  queryBy = '$'
  ngOnInit() {
    this._quotesService.getQuotes().subscribe(responseQuotes=>this.quotes=responseQuotes);
  }
}
