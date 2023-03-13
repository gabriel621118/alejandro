export class VentaModel {

    id: string ;
    cliente:string;

}

export class VentaDetalleModel {

    id: string ;
    venta_id: string ;
    cantidad:number;
    nombre: string;
    colores: string;
    observaciones:string; 
    precio: number = 1;

}