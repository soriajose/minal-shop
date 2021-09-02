import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[] = [
    {
      id: 1,
      titulo: "Campera Adidas",
      descripcion: "Este producto es...",
      img: "assets/img/campera1.jpg",
      precio: 2500
    },
    {
      id: 2,
      titulo: "Campera",
      descripcion: "Este producto es...",
      img: "assets/img/campera2.jpg",
      precio: 2000
    },
    {
      id: 3,
      titulo: "Buzo Adidas",
      descripcion: "Este producto es...",
      img: "assets/img/buzo1.jpg",
      precio: 1800
    },
    {
      id: 4,
      titulo: "Remera Adidas",
      descripcion: "Este producto es...",
      img: "assets/img/remera1.jpg",
      precio: 1200
    },
    {
      id: 5,
      titulo: "Top Adidas 1",
      descripcion: "Este producto es...",
      img: "assets/img/top1.jpg",
      precio: 800
    },
    {
      id: 6,
      titulo: "Top Adidas 2",
      descripcion: "Este producto es...",
      img: "assets/img/Top2.jpg",
      precio: 900
    },
    {
      id: 7,
      titulo: "Pantalon Adidas",
      descripcion: "Este producto es...",
      img: "assets/img/Pantalon1.jpg",
      precio: 2000
    },
    {
      id: 8,
      titulo: "Short de Baño Nike",
      descripcion: "Este producto es...",
      img: "assets/img/short1.jpg",
      precio: 950
    },
    {
      id: 9,
      titulo: "Short de Baño Lacoste",
      descripcion: "Este producto es...",
      img: "assets/img/short2.jpg",
      precio: 1200
    },
    {
      id: 10,
      titulo: "Mochila Adidas",
      descripcion: "Este producto es...",
      img: "assets/img/mochilas.jpg",
      precio: 1500
    },
    {
      id: 11,
      titulo: "Mochila Nike",
      descripcion: "Este producto es...",
      img: "assets/img/mochila3.jpg",
      precio: 1500
    },
    {
      id: 12,
      titulo: "Bolso Nike",
      descripcion: "Este producto es...",
      img: "assets/img/mochila2.jpg",
      precio: 2500
    },
  ];


  constructor() { }

  getProductos(){
    return this.productos;
  }
  
}
