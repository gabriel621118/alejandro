import { Component, OnInit, AfterViewInit,ElementRef, HostListener, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Person, PeoplesData } from '../../../../core/dummy-datas/peoples.data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2' 

//Canvas

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.scss']
})

//Ropa pendiente de entrega (amarilla o verde )
export class EntregasComponent implements OnInit, AfterViewInit {  

  cuenta:any[] = [{id:'587', nNOta:'5670',nTicket:'(128) (129)'},
                  {id:'587', nNOta:'5671',nTicket:'(123) (122)'},
                  {id:'587', nNOta:'5672',nTicket:'(168) (134)'}];
  detalle:any[] = [{id:'234', cuenta_id:'587', nombre:'pantolones', cantidad:'3', status:'4', colores:'rojo verde azul'},
                   {id:'235', cuenta_id:'587', nombre:'camisetas', cantidad:'3', status:'2', colores:'rojo verde azul'},
                   {id:'236', cuenta_id:'587', nombre:'short', cantidad:'3', status:'2', colores:'rojo verde azul'}];
  rows = [];
  loadingIndicator = true;
  reorderable = true;
  ColumnMode = ColumnMode;
  table = false;
  tableF = false;
  menuEntregas:string;
  selectedSearchPersonId: string = null;
  people: Person[] = [];

  bNota= false;
  menu:string;

  //Canvas

  @ViewChild('canvasRef', { static: false }) canvasRef: ElementRef;

  public width: number = 250;
  public height: number = 225;

  private cx: CanvasRenderingContext2D;

  private points: Array<any> = [];

  public isAvailabe: boolean = false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove = (e: any) => {
    if (e.target.id === 'canvasId' && (this.isAvailabe)) {
      this.write(e);
    }
  }

  @HostListener('click', ['$event'])
  onClick = (e: any) => {
    if (e.target.id === 'canvasId') {
      this.isAvailabe = !this.isAvailabe;
    }
  }

  //pantalla tactiles
  @HostListener('document:touchmove', ['$event'])
  touchmove = (e: any) => {
    if (e.target.id === 'canvasId' && (this.isAvailabe)) {
      this.write(e);
    }
  }

  @HostListener('touchstart', ['$event'])
  touchstart = (e: any) => {
    if (e.target.id === 'canvasId') {
      this.isAvailabe = !this.isAvailabe;
    }
  }

  constructor(private router: Router, private modalService: NgbModal) {
    this.fetch(data => {
      this.rows = data;
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 1500);
    });
  }

  ngOnInit(): void {
    this.people = PeoplesData.peoples;
    
  }

  ngAfterViewInit(): void {
    this.render();
  }


  regresar() {
    this.router.navigate(['/dashboard']);
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

 menuEntregasF(opcion: string){
   if (this.menuEntregas === opcion){
    this.menuEntregas = '';
   }else{
    this.menuEntregas=opcion
   }
    
 }

 menuF(opcion: string){
  if (this.menu === opcion){
   this.menu = '';
  }else{
   this.menu=opcion
  }
   
}

  openModalPagar(content) {
    this.modalService.open(content,).result.then((result) => {
      console.log('Modal closed' + result);
    }).catch((res) => { });
  }

  buscarNotaDia(){
    this.bNota=!this.bNota
    if (this.bNota) {
      Swal.fire({
        icon: 'info',
        title: 'Observaciones',
        text: ' SE QUEDA PENDIENTE PANTALON DE ID 5670 (128) POR PROCESO '
      });
    }    
  }

  buscarNotaTerminada(){
    this.bNota=!this.bNota 
  }

  //Canvas

  private render() {
    const canvasEl = this.canvasRef.nativeElement;
    this.cx = canvasEl.getContext('2d');
    canvasEl.width = this.width;
    canvasEl.height = this.height;

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';
  }
  private write(res) {
    const canvasEl = this.canvasRef.nativeElement;
    const rect = canvasEl.getBoundingClientRect();
    const prevPos = {
      x: res.clientX - rect.left,
      y: res.clientY - rect.top,
    }
    this.writeSingle(prevPos);
  }

  private writeSingle(prevPos, emit: boolean = true) {
    this.points.push(prevPos);
    if (this.points.length > 3) {
      const prevPost = this.points[this.points.length - 1];
      const currentPost = this.points[this.points.length - 2];

      this.drawOnCanvas(prevPost, currentPost);
     // if (emit) {
       // this.socketWebService.emitEvent({ prevPost })
     // }

    }
  }

  private drawOnCanvas(prevPos: any, currentPost: any) {
    if (!this.cx) return;
    this.cx.beginPath();

    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y);
      this.cx.lineTo(currentPost.x, currentPost.y);
      this.cx.stroke();
    }
  }


  public clearZone = () => {
    this.points = [];
    this.cx.clearRect(0, 0, this.width, this.height);
  }

}

