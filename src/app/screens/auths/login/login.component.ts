import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginPage  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

}
