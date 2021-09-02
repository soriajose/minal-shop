import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { CarritoService } from '../../services/carrito.service';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  listaCarrito: Producto[] = [];

  importeTotal = 0;

  constructor(private carritoService: CarritoService, private pedidoService: PedidoService) { }

  ngOnInit() {
    this.carritoService.$getCarritoBehavierSubject.subscribe(
      respuesta => {
        this.listaCarrito = respuesta;
      }
    );

    this.carritoService.$getSumaBehavierSubject.subscribe(
      respuesta => {
        this.importeTotal = respuesta;
      }
    );

  }


  quitarProducto(producto: Producto){
    this.carritoService.eliminarProductoCarrito(producto);
  }

  completarDatos(){
    this.pedidoService.pedidoCarrito(this.listaCarrito, this.importeTotal);
  }

}
