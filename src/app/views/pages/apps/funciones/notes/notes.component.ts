import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  table: boolean = false;
  constructor(private router:Router,private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  buscar(){
    this.table=true;
  }

  verNota(){
    this.router.navigate(['/ver-nota'])
  }

  

}
