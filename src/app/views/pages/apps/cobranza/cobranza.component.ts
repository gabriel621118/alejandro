import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cobranza',
  templateUrl: './cobranza.component.html',
  styleUrls: ['./cobranza.component.scss']
})
export class CobranzaComponent implements OnInit {

  table:boolean;
  people:any[]=[{name:'jorge'},{name:'alberto'},{name:'Alfredo'}]
  selectedPeople:any;
  constructor() { }

  ngOnInit(): void {
  }

}
