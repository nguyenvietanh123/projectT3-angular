import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  Spring = [
    '/assets/img/slide/slide1-1.jpg',
    '/assets/img/slide/slide1-2.jpg',
    '/assets/img/slide/slide1-3.jpg',
  ];
  Summer = [
    '/assets/img/slide/slide2-1.jpg',
    '/assets/img/slide/slide 2-2.jpg',
    '/assets/img/slide/slide 2-3.jpg',
  ];
  Autumn = [
    '/assets/img/slide/slide 3-1.jpg',
    '/assets/img/slide/slide 3-2.jpg',
    '/assets/img/slide/slide 3-3.jpg',
  ];
  Winter = [
    '/assets/img/slide/slide 4-1.jpg',
    '/assets/img/slide/slide 4.2.jpg',
    '/assets/img/slide/slide 4-3.jpg',
  ];
  ngOnInit(): void {}
}
