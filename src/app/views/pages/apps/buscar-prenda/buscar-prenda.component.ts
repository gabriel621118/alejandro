import { Component, OnInit } from '@angular/core';
import { Person, PeoplesData } from '../../../../core/dummy-datas/peoples.data';
import { VentasService } from '../../../../services/ventas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VentaDetalleModel } from '../../../../services/ventas.model';

@Component({
  selector: 'app-buscar-prenda',
  templateUrl: './buscar-prenda.component.html',
  styleUrls: ['./buscar-prenda.component.scss']
})
export class BuscarPrendaComponent implements OnInit {

  isCollapsed = true;
  people: any[] = [{ name: 'Amarillo' , cantidad:0 }, { name: 'Azul', cantidad:0 }, { name: '...', cantidad:0 }];
  colores = '';
  selectedPersonId: string = null;
  selectedPeople: any = null;
  selectedObservation: any = null;
  ventaId: string;
  prenda = '';
  cantidad = 1;
  observacion = '';
  ventaDetalle: VentaDetalleModel;
  observaciones: any[] = [{ id: 1, nombre: 'sucio', alias: 'sc', seleccionado: false }, { id: 2, nombre: 'roto', seleccionado: false, alias: 'rt' }, { id: 3, nombre: 'decolorado', seleccionado: false, alias: 'dl' }, { id: 4, nombre: 'descocido', seleccionado: false, alias: 'dc' }]

  constructor(public ventasService: VentasService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe(data => {
      this.ventaId = data.id;
    });
  }
  ngOnInit(): void {

  }

  cambiarCantidad(cantidad: number) {
    if (this.cantidad === 1 && cantidad < 0) {
      return
    }
    this.cantidad += cantidad
  }

  agregarPrenda() {
    // let i=0;

    this.selectedPeople.forEach(color => {
      this.colores += color.name + ' ,'
    });
    // Concatenar observaciones
    this.observaciones.forEach(observa => {
      if (observa.seleccionado) {
        this.observacion += ' ' + observa.alias + ','
      }
    })

    const date = new Date();
    this.ventaDetalle = {
      id: `${date.getTime()}`,
      venta_id: this.ventaId,
      cantidad: this.cantidad,
      nombre: this.prenda,
      colores: this.colores,
      observaciones: this.observacion,
      precio: 100
    }

    this.ventasService.agregarIdDetalle(this.ventaDetalle);

    console.log('fhfk');
    this.ventasService.ventaDetalle.forEach(id => {
      console.log(id);
    })
    this.router.navigate(['/ventas']);
  }

  sig(){
    console.log('this', this.selectedPeople)
  }
}
