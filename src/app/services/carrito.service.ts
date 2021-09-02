import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from 'src/app/interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  listaCarrito: Producto[] = [];
  sumaService = 0;

  private listaCarritoBehavior = new BehaviorSubject<Producto[]>([]);
  private sumaServiceCarrito = new BehaviorSubject<number>(0);
  $getCarritoBehavierSubject = this.listaCarritoBehavior.asObservable();
  $getSumaBehavierSubject = this.sumaServiceCarrito.asObservable();

  constructor() { }



  agregarProductoBehavier(producto: Producto){

    this.listaCarrito.push(producto)
    console.log('Se agrego un producto al carrito')
    this.sumaService += producto.precio;
    this.sumaServiceCarrito.next(this.sumaService);
    this.listaCarritoBehavior.next(this.listaCarrito);
  }


  eliminarProductoCarrito(producto: Producto){
    
    let indice = 0;
    let contador = 0;

    for(var i = 0; i < this.listaCarrito.length; ++i){
        if(this.listaCarrito[i].id === producto.id){
          indice = contador;
          this.sumaService -= producto.precio;
          this.sumaServiceCarrito.next(this.sumaService);
          break;
        }
        contador++;
    }

    this.listaCarrito.splice(indice, 1);
    console.log('Se elimino el producto del carrito');
  }

}
