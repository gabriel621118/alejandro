import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas-pendientes',
  templateUrl: './notas-pendientes.component.html',
  styleUrls: ['./notas-pendientes.component.scss']
})
export class NotasPendientesComponent implements OnInit {
  table: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  buscar() {
    this.table = true;
  }


}
