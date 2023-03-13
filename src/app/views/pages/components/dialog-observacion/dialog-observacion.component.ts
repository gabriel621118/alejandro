import { Component,Inject,Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VentasService } from '../../../../services/ventas.service';
@Component({
  selector: 'app-dialog-observacion',
  templateUrl: './dialog-observacion.component.html',
  styleUrls: ['./dialog-observacion.component.scss']
})
export class DialogObservacionComponent {

  @Input() id;
  observacion:string = '';
  constructor(public activeModal: NgbActiveModal,public ventasService: VentasService) {
   }

}
