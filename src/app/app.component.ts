import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngcompasso';
  obj: any;
  ano: number;
  linkDinamico = 'nulo';
  constructor(  ) {
    this.ano = 2019;
    this.title = 'ppp';
  }
  mudaAno(): void{
    this.ano++;
  }
  mudaLink(): void{
    this.linkDinamico = Math.random().toString();
  }
}
