import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-ver-nota',
  templateUrl: './ver-nota.component.html',
  styleUrls: ['./ver-nota.component.scss']
})
export class VerNotaComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModalPagar(content) {
    this.modalService.open(content,).result.then((result) => {
      console.log('Modal closed' + result);
    }).catch((res) => { });
  }

}
