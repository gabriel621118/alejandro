import { Injectable } from '@angular/core';
import { VentaModel, VentaDetalleModel } from './ventas.model';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  venta: VentaModel[] = [];
  ventaDetalle: VentaDetalleModel[] = [];
  cliente: string;
  selected: string;
  repetido = false;
  categorias: any[] = [{ id: 1, nombre: 'tintoreria' }, { id: 2, nombre: 'lavanderia' }, { id: 3, nombre: 'otro' }];
  constructor() { }

  agregarId(ide: string, cliente: string) {
    this.venta.find(venta => {
      if (venta.id === ide) {
        return this.repetido = true;
      } else {
        this.repetido = false;
      }
    });

    if (this.repetido) {
      return;
    }

    if (this.venta.length === 0) {
      this.selected = ide;
    }

    this.venta.push({ id: ide, cliente });
  }

  agregarTicket(ticket:string,ide:string){
    let i = 0;
    this.venta.find(venta =>{
      if(venta.id === ide){
        this.venta[i].id+=` ( ${ticket} ) `;
        this.selected = this.venta[i].id;
      }      
      i++;
    }) 
  }

  agregarIdDetalle(detalle: VentaDetalleModel) {
    this.ventaDetalle.push(detalle);
  }

  agregarObservacionDetalle(ide:string,observacion:string) {
    let i = 0;
    this.ventaDetalle.find(venta =>{
      if(venta.id === ide){
        this.ventaDetalle[i].observaciones+=` ${observacion} ,`;
      }      
      i++;
    }) 
  }
  clear() {
    this.venta = [];
  }

  deleteId(ide: string) {
    let i = 0;
    let j = 0;
    this.venta.find(venta => {
      if (venta.id === ide) {
        this.venta.splice(i, 1)
      }
      i++;
    })
    console.log(this.venta.toString());
    this.ventaDetalle.find(venta => {
      if (venta.venta_id === ide) {
        this.ventaDetalle.splice(j, 1)
      }
      j++;
    })
    console.log(this.ventaDetalle.toString());

  }

  deleteIdDetalle(ide: string) {
    let i = 0;
    this.ventaDetalle.find(venta => {
      if (venta.id === ide) {
        this.ventaDetalle.splice(i, 1)
      }
      i++;
    })
  }
  changeIdSelected(id: string) {
    this.selected = id;
    console.log(this.selected)
  }
}
