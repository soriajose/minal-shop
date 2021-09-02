import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from 'src/app/interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private importeTotalService = new BehaviorSubject<number>(0);
  private listaPedidoBehavior = new BehaviorSubject<Producto[]>([]);
  $getPedidoBehavierSubject = this.listaPedidoBehavior.asObservable();
  $getTotalBehavierSubject = this.importeTotalService.asObservable();

  constructor() { }


  pedidoCarrito(lista: Producto[], importe: number){
    this.listaPedidoBehavior.next(lista);
    this.importeTotalService.next(importe);
  }

}
