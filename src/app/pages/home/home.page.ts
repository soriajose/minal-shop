import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Producto } from 'src/app/interfaces/producto';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  listaProductos: Producto[] = [];
  cantidadProductos = 0;
  
  constructor(private productoService: ProductoService, private carritoService: CarritoService, private toastController: ToastController) { }

  ngOnInit() {
    this.listaProductos = this.productoService.getProductos();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  agregarProductoAlCarrito(producto: Producto){
    
    this.carritoService.agregarProductoBehavier(producto);
    this.presentToast('Se agrego al carrito');
    this.cantidadProductos = this.carritoService.listaCarrito.length;
    //this.cantidadProductos = this.carritoService.listaCarrito.length;

  }
}
