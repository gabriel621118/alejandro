import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corte',
  templateUrl: './corte.component.html',
  styleUrls: ['./corte.component.scss']
})
export class CorteComponent implements OnInit {

  table:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  corte(){
    this.table = true
  }
}
