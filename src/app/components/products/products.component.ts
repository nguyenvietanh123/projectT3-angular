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
      price: '599.000đ',
      img: 'assets/img/phukien/k0c28bx25-5334-1_1_1.webp',
    },
    {
      name: 'URBAS CORLURAY - HIGH TOP - GRASSES',
      originalPrice: '780.000đ',
      promotion: '20%',
      price: '650.000đ',
      img: 'https://ananas.vn/wp-content/uploads/pro_A61092_1_1.jpg',
    },
    {
      name: 'Quần short A0226',
      originalPrice: '',
      promotion: '20%',
      price: '350.000đ',
      img: 'https://fs-07.web4s.vn/uploads/plugin/product_items/24/qu-n-short-nam-aso020s7-quan-short-nam-aristino-aso017s7-large.jpg',
    },
    {
      name: 'Mini Cosy - Ví Gập Đôi Mini.',
      price: '349.000đ',
      img: 'https://cdn.shopify.com/s/files/1/0329/1912/6147/products/LethnicVinganggapdoiminicosynau01_500x.jpg?v=1625333826',
    },
    {
      name: 'Ecko Unltd nam áo thun tay ngắn',
      price: '200.000đ',
      img: 'assets/img/ao/trang.webp',
    },
    {
      name: 'Quần short A0197',
      originalPrice: '250.000đ',
      promotion: '15%',
      price: '212.000đ',
      img: 'https://th.bing.com/th/id/OIP.NSWFAZ5dQ-JVzFfhArm33QHaJ4?w=164&h=219&c=7&r=0&o=5&dpr=1.25&pid=1.7',
    },
    {
      name: 'Superga nón nam/nữ',
      price: '349.000đ',
      img: 'assets/img/phukien/s7127hw-alj-fix1.webp',
    },
    {
      name: 'ECKO UNLTD ÁO CÓ CỔ MEN',
      originalPrice: '400.000đ',
      promotion: '50%',
      price: '200.000đ',
      img: 'assets/img/ao/polo-xanh-navy.webp',
    },
    {
      name: 'Quần short A0195',
      originalPrice: '150.000đ',
      promotion: '10%',
      price: '135.000đ',
      img: 'https://th.bing.com/th/id/OIP.D87E9xx0y4VTm6PrE0-6AwHaJ4?w=151&h=201&c=7&r=0&o=5&dpr=1.25&pid=1.7',
    },
    {
      name: 'Quần short A1979',
      originalPrice: '300.000đ',
      promotion: '20%',
      price: '240.000đ',
      img: 'https://fs-07.web4s.vn/uploads/plugin/product_items/28/qu-n-short-nam-aso024s7-quan-short-nam-aristino-aso020s7-01-large.jpg',
    },
    {
      name: 'Quần short A0997',
      price: '180.000đ',
      img: 'https://th.bing.com/th/id/OIP.ZbUbcm5kiIRBHjhnvfh6NQHaJ4?w=151&h=201&c=7&r=0&o=5&dpr=1.25&pid=1.7',
    },
    {
      name: 'Basas New Familiar - Low Top',
      price: '200.000đ',
      img: 'assets/img/saleoff-items/be.jpg',
    },
    {
      name: 'Áo Thun Cookin',
      originalPrice: '400.000đ',
      promotion: '50%',
      price: '200.000đ',
      img: 'assets/img/ao/ao-xanh.jpg',
    },
    {
      name: 'Vintas Bleached - Low Top',
      originalPrice: '700.000',
      promotion: '',
      price: '599.000đ',
      img: 'assets/img/saleoff-items/den-cam.jpg',
    },
    {
      name: 'Ecko Unltd nam quần Jeans slim fit',
      price: '180.000đ',
      img: 'assets/img/quan/is22-35005-5_1_1.webp',
    },
    {
      name: 'Kappa nam áo thun tay ngắn',
      price: '249.000đ',
      img: 'assets/img/ao/do.webp',
    },
    {
      name: 'Vintas Yesterday - High Top',
      price: '300.000đ',
      img: 'assets/img/saleoff-items/den-vang.jpg',
    },
    {
      name: 'Urbas Bloody - Low Top',
      price: '450.000đ',
      img: 'assets/img/saleoff-items/do.jpg',
    },
    {
      name: 'Basas New Familiar - Low Top',
      price: '400.000đ',
      img: 'assets/img/saleoff-items/do-trang.jpg',
    },
    {
      name: 'Quần Jean DNST 1212 Carrot Fit',
      price: '599.000đ',
      img: 'assets/img/quan/is22-35003-lt._denim_wash-fix1_1_1.webp',
    },
    {
      name: 'Urbas Unsettling - Low Top',
      price: '499.000đ',
      img: 'assets/img/saleoff-items/trang-sua.jpg',
    },
    {
      name: 'Ecko Unltd nam nón',
      price: '249.000đ',
      img: 'assets/img/phukien/tai-beo.webp',
    },
    {
      name: 'Urbas Unsettling - High Top',
      price: '1.499.000đ',
      img: 'assets/img/saleoff-items/xanh.jpg',
    },
    {
      name: 'Basas Simple Life - Low Top',
      price: '1.000.000đ',
      img: 'assets/img/saleoff-items/xanh-vang.jpg',
    },
    {
      name: 'Kappa nam set 3 vớ cổ thấp',
      price: '99.000đ',
      img: 'assets/img/phukien/tat.webp',
    },
    {
      name: 'Ecko Unltd nam nón',
      price: '99.000đ',
      img: 'assets/img/phukien/mu-trang.webp',
    },
  ];
  ngOnInit(): void {}
}
