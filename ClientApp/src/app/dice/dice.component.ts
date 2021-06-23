import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
    public dicerolls: number[];
    //public diceHighestValue: number;
    
    http: HttpClient;
    baseUrl: string;
    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
      this.dicerolls = [0,0];
      //this.diceHighestValue = 6;
      
      this.http = http;
      this.baseUrl = baseUrl;
      // the quotes should later be filled with "api/dice?diceHighestValue="
      http.get<number[]>(baseUrl + 'api/dice').subscribe(result => { 
        this.dicerolls = result;
        console.log(this.dicerolls);
      }, error => console.error(error));
    }
    rerollDice(){
      this.http.get<number[]>(this.baseUrl + 'api/dice').subscribe(result => {
        this.dicerolls = result;
        console.log(this.dicerolls);
      }, error => console.error(error));
    }
  }
