import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  products = [
    {
      name: 'TANK TOP NAM - BEAT THE HEAT',
      originalPrice: '330.000đ',
      promotion: '10%',
      price: '300.000đ',
      img: 'https://traffic-edge48.cdn.vncdn.io/nvn/ncdn/store/7136/ps/20220711/IMG_9207.jpg',
    },
    {
      name: 'Quần short A15896',
      originalPrice: '320.000đ',
      promotion: '30%',
      price: '210.000đ',
      img: 'https://fs-07.web4s.vn/uploads/plugin/product_items/27/qu-n-short-nam-aso027s7-quan-short-nam-aristino-aso027s7-large.jpg',
    },
    {
      name: 'SƠMI NAM - SLAY YOUR DAY',
      originalPrice: '400.000đ',
      promotion: '50%',
      price: '200.000đ',
      img: 'https://traffic-edge40.cdn.vncdn.io/nvn/ncdn/store/7136/ps/20220607/07062022100620_Web_Dai_dien.jpg',
    },
    {
      name: 'Kappa túi nữ',
      originalPrice: '',
      promotion: '',
      price: '599.000đ',
      img: 'assets/img/phukien/k0c28bx25-5334-1_1_1.webp',
    },
  ];

  ngOnInit(): void {}
}
