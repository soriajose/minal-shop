import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  pedido = {
    nombre: "",
    apellido: "",
    metodoPago: "",
    modoEntrega: "",
    direccion: ""
  }

  mensaje = "";
  total = 0;
  importeTotal = "";

  productosFinal: Producto[] = [];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.pedidoService.$getPedidoBehavierSubject.subscribe(
      respuesta => {
        this.productosFinal = respuesta;
      }
    );

    this.pedidoService.$getTotalBehavierSubject.subscribe(
      respuesta => {
        this.total = respuesta;
      }
    );
     
  }


  finalizarPedido(){
    
    this.mensaje = "Hola, mi nombre es " + this.pedido.nombre + " y quiero realizar la compra de estos productos:\n\n"

    for(var i = 0; i < this.productosFinal.length; ++i){
      this.mensaje +=  JSON.stringify("Producto: " + this.productosFinal[i].titulo + " - Precio: $" + this.productosFinal[i].precio.toFixed(0)) + "\n";
   }
    
   this.mensaje += "\n\n\nTotal: $" + this.total;

   this.mensaje += "\n\n\nMis datos de entrega son: \n\nApellido: " + this.pedido.apellido + "\nNombre: " + this.pedido.nombre + "\nMétodo de Pago: " + this.pedido.metodoPago +
   "\nModo de Entrega: " + this.pedido.modoEntrega + "\nDireccion: " + this.pedido.direccion + "\n\nMuchas gracias!";


   window.open(`https://wa.me/+5493825520391?text=${encodeURIComponent(this.mensaje)}`);

   console.log('Mensaje', this.mensaje);

  }

}
