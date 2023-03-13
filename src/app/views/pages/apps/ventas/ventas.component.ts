import { Component, OnInit } from '@angular/core';
import { Person, PeoplesData } from '../../../../core/dummy-datas/peoples.data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { VentasService } from '../../../../services/ventas.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogObservacionComponent } from '../../components/dialog-observacion/dialog-observacion.component';
import { VentaDetalleModel } from '../../../../services/ventas.model';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  // selectedSearchPersonId: string = null;
  people: Person[] = [];
  progreso: number;
  ids: string;
  ticket: string;
  prenda2:boolean = true;
  prenda1:boolean = true;
  animal: string;
  name: string;
  menu:string ='cliente';
  menuColorobservacion: string = 'cliente' ;

  //buscar-prenda
  isCollapsed = true;
  colores: Color[] = [];
  
  //{ name: 'Amarillo', cantidad:0 }, { name: 'Azul',cantidad:0 }, { name: '...', }
 // color: string;

  cantidadColor:number = 1;
 // CantidadColor1:number;

 // colores = '';
  selectedPersonId: string = null;
  selectedColor: any = null;
  selectedObservation: any = null;
  ventaId: string;
  prenda = '';
  cantidad = 1;
  observacion = '';
  ventaDetalle: VentaDetalleModel;
  observaciones: any[] = [{ id: 1, nombre: 'sucio', alias: 'sc', seleccionado: false }, { id: 2, nombre: 'roto', seleccionado: false, alias: 'rt' }, { id: 3, nombre: 'decolorado', seleccionado: false, alias: 'dl' }, { id: 4, nombre: 'descocido', seleccionado: false, alias: 'dc' }]
 //
 colorMenu:string = '';
 colorMenuA:boolean = false;
  constructor(private modalService: NgbModal, private router: Router, public ventasService: VentasService,public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
    this.people = PeoplesData.peoples;

  }

  regresar() {
    this.router.navigate(['/dashboard']);
  }
  openModalPagar(content) {
    this.modalService.open(content,).result.then((result) => {
      console.log('Modal closed' + result);
    }).catch((res) => { });
  }

  openModalPrendasAgregar(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      console.log('Modal closed' + result);
    }).catch((res) => { });
  }

  openLgModal(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      console.log('Modal closed' + result);
    }).catch((res) => { });
  }


  agregarId(ide: string) {
    this.ventasService.agregarId(ide, this.ventasService.cliente);
    this.ids = ''
    console.log('id', ide, this.ventasService.cliente);
  }


  cantidadVentas(ide: string, cantidad: number) {
    this.ventasService.ventaDetalle.find(venta => {
      if (venta.venta_id === ide) {
        if (venta.cantidad === 0 && cantidad < 0) {
          return;
        }
        venta.cantidad += cantidad
      }
    })
  }

  aPrendas(categoriaId) {

    this.router.navigate([`/buscar-p/${categoriaId}/${this.ventasService.selected}`]);
  }

  
  openModalAgregarObservacion(id:string) {
   const modalRef = this.modalService.open(DialogObservacionComponent)
   modalRef.componentInstance.id = id;
  }


  menuCambiar(cambiar:string){
    this.menu = cambiar;
    this.prenda1=true;
  }

  menuColorObervaciones(cambiar:string){
    this.menuColorobservacion = cambiar;
  }
   
   
 menuPrenda(){
  this.prenda2=true;
  this.prenda1=false;
 }

  //buscar prenda

  cambiarCantidad(cantidad: number) {
    if (this.cantidad === 1 && cantidad < 0) {
      return
    }
    this.cantidad += cantidad
  }

  cambiarCantidadColor(cantidad: number) {
    if (this.cantidadColor === 1 && cantidad < 0) {
      return
    }
    this.cantidadColor += cantidad
  }

  agregarPrenda() {
    // let i=0;
    this.ventaId = this.ventasService.selected
    //this.selectedColor.forEach(color => {
      //this.colores += color.name + ' ,'
   // });
   let color = '';
   this.colores.forEach(colorIn =>{
     color += `${colorIn.cantidad} .- ${colorIn.nombre}, `
   })
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
      colores: color,
      observaciones: this.observacion,
      precio: 100
    }

    this.ventasService.agregarIdDetalle(this.ventaDetalle);
    this.ventasService.ventaDetalle.forEach(id => {
      console.log(id);
    })
    this.router.navigate(['/ventas']);
  }

  //change
  agregarNuevoColor(color:string, cantidad:number){
    
    let colorC:Color = {
      nombre:color,
      cantidad:cantidad
    }

    console.log('color'+color)
    console.log('cantidad'+cantidad)
    this.colores.push(colorC)
    
   // this.CantidadColor1 = cantidad;

    this.colorMenu = '';
    this.menuColorobservacion = '';
    this.colorMenuA = false

    this.prenda1=true;
  }
}

interface Color {
  nombre: String;
  cantidad: Number;
}