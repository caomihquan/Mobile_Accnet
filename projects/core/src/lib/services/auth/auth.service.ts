import { Router } from '@angular/router';
import { AuthStore } from './auth.store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIHttpService } from '../API/apiHttpService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api:APIHttpService,
    private router: Router,
    private authStore: AuthStore) { }


  // login(data: any): Observable<any> {
  //   return this.api.post('core/authentication/login', '', data)
  // }

  logout(url?: string) {
    this.authStore.remove();
    localStorage.clear();
    this.router.navigate(['/auth'], { queryParams: { returnUrl: url } });
  }

  checkLogin(): Observable<boolean> {
    return new Observable((obs) => {
      let userValue = this.authStore.get();
      if (userValue == null) {
        this.logout();
        return obs.next(false)
      }
      return obs.next(true)
    })
  }

  checkUserStatus() {
    let userValue = this.authStore.get();
    return userValue != null;
  }
}
