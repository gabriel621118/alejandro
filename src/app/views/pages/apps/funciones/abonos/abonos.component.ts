import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abonos',
  templateUrl: './abonos.component.html',
  styleUrls: ['./abonos.component.scss']
})
export class AbonosComponent implements OnInit {

  table = false;
  constructor() { }

  ngOnInit(): void {
  }

  agregar() {
    this.table = true;
  }
}
