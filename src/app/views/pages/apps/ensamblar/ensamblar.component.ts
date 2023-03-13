import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ensamblar',
  templateUrl: './ensamblar.component.html',
  styleUrls: ['./ensamblar.component.scss']
})
export class EnsamblarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cambiarEstatus(){
    this.router.navigate(['/cambiarEstatus'])
  }


}
