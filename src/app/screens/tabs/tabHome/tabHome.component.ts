import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-tabHome',
  templateUrl: 'tabHome.component.html',
  styleUrls: ['tabHome.component.scss'],
})
export class TabHomePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }



}
