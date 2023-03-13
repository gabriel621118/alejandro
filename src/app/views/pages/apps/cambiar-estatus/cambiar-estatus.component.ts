import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambiar-estatus',
  templateUrl: './cambiar-estatus.component.html',
  styleUrls: ['./cambiar-estatus.component.scss']
})
export class CambiarEstatusComponent implements OnInit {

  terminar : boolean = false;
  pendiente: boolean = false;

  btn1:boolean = false;
  btn2:boolean = false;

  dejar:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  terminarPrenda(){
    this.terminar = true
    this.pendiente = false
  }

  prendaPendiente(){
    this.pendiente = true
    this.terminar = false
  }

  cambiarColor(){
    this.btn1 = true
  }

  cambiarColor2(){
    this.btn2 = true
  }

  dejarPendiente(){
    this.dejar = true
  }

}
