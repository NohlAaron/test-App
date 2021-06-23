import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-rps',
  templateUrl: './rps.component.html',
  styleUrls: ['./rps.component.css']
})
export class RpsComponent{
  public computerChoice: string;
  public userChoice: string;
  public winChoice: string;
  public displayChoice: string;
  http: HttpClient;
  baseUrl: string;
  
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.computerChoice = "";
    this.userChoice ="BLANK";
    this.winChoice ="BLANK";
    this.displayChoice = "BLANK";

    this.http = http;
    this.baseUrl = baseUrl;
    this.http.get(this.baseUrl + 'api/rps').subscribe(result => { 
      console.log(result);
      this.computerChoice = result[0];
    }, error => console.error(error));
  }
 getComputerChoice(){
  this.http.get(this.baseUrl + 'api/rps').subscribe(result => { 
    console.log(result);
    this.computerChoice = result[0];
  }, error => console.error(error));
 }
  rock(){
    this.userChoice = "Rock";
    if(this.computerChoice == "Scissors"){
      this.winChoice = "WON";
      this.displayChoice = "Scissors"
    }
    else if(this.computerChoice == "Paper"){
      this.winChoice = "LOSE";
      this.displayChoice = "Paper"
    }
    else{
      this.winChoice = "TIE";
      this.displayChoice = "Rock"
    } 
    this.getComputerChoice();
  } 
  paper(){
    this.userChoice = "Paper";
    if(this.computerChoice == "Rock"){
      this.winChoice = "WON";
      this.displayChoice = "Rock"
    }
    else if(this.computerChoice == "Scissors"){
      this.winChoice = "LOSE";
      this.displayChoice = "Scissors"
    }
    else{
      this.winChoice = "TIE";
      this.displayChoice = "Paper"
    } 
    this.getComputerChoice();
  } 
  scissor(){
    this.userChoice = "Scissors";
    if(this.computerChoice == "Paper"){
      this.winChoice = "WON";
      this.displayChoice = "Paper"
    }
    else if(this.computerChoice == "Rock"){
      this.winChoice = "LOSE";
      this.displayChoice = "Rock"
    }
    else{
      this.winChoice = "TIE";
      this.displayChoice = "Scissors"
    } 
    this.getComputerChoice();
  } 
}