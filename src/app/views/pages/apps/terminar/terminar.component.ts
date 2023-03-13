import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminar',
  templateUrl: './terminar.component.html',
  styleUrls: ['./terminar.component.scss']
})
export class TerminarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cambiarEstatus(){
    this.router.navigate(['/cambiarEstatus'])
  }

}
