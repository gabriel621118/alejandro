import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  table:boolean;
  table2:boolean;
  table3:boolean;
  filtrar:boolean = false;
  people: any[] = [{ name: 'alfredo'  }, { name: 'alberto' }, { name: 'Carlos' }];
  selectedPeople: any = null;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  buscar(){
    this.table=true
    this.table2=false
    this.table3=false
  }

  buscar1(){
    this.table2=true
    this.table3=false
    this.table=false
  }
  buscar2(){
    this.table3=true
    this.table2=false
    this.table=false
  }

  verNota(){
    this.router.navigate(['/ver-nota'])
  }

  Filtrar(){
    this.filtrar=!this.filtrar;
  }

}
