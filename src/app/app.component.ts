import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cálculo Diferencial e Integral I';

  constructor() {

  }

  ngOnInit() {
    $("#guias").click(function(e: any) {
      e.preventDefault();
    });
  }
}
