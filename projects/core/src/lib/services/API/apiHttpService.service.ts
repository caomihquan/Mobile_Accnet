import { AuthStore } from './../auth/auth.store';
import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root',
})
export class APIHttpService {
  Lang = {};
  constructor(
    private http: HttpClient,
    private authStore: AuthStore,
    private router: Router,
  ) {}

  post(url:String, funcID?:String, datas?:any) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
    const _headers = {
      "HRM-Api-Url": url,
      "HRM-Function-ID": funcID,
      "HRM-Request-Url": "HrmMobileApp",
      "HRM-Api-Type": "HrmMobileApp",
      "HRM-Application-ID": "HrmMobileApp",
    };
    // const loginInfo = this.authStore.get();
    // if (loginInfo) {
    //   _headers["HRM-Session-ID"] = loginInfo.SessionID;
    //   _headers["HRM-Token-ID"] = loginInfo.TokenID;
    //   _headers["HRM-JWT-ID"] = loginInfo.Jwt;
    // }
    let _payload = datas;
    let urlencoded = "headers=" + window.encodeURIComponent(JSON.stringify(_headers));
    if (_payload) {
      urlencoded += "&payload=" + window.encodeURIComponent(JSON.stringify(_payload));
    }
    // return this.http.post<any>(IPConfig.IP + 'ApiHandler/Call', urlencoded, { headers: headers }).pipe(map((res) => {
    //   if (res && !res.ErrorCode && !res.ErrorLogin && !res.Error) {
    //     res.Data = JSON.parse(res?.Data)
    //     return res;
    //   }
    //   else{
    //     const error = res ? res.ErrorCode || res.ErrorLogin || res.Error : "Error";
    //     const objError = this.CommonHandler.GetErrorMessage(error);
    //     res.IsError = true;
    //     res.Error = objError.message;
    //     this.InitValidateAlert(objError);
    //   }
    // }));
  }
  // async InitValidateAlert(error){
  //   const Lang = await this.languageService.getLanguage();
  //   const { message, isTranslate } = error;
  //   if (typeof message === 'string' && message.includes("405 (Method Not Allowed)")){
  //     this.authStore.remove();
  //     this.router.navigate(['/auth/login']);
  //     return;
  //   }
  //   if (isTranslate) {
  //     this.notification.alert(Lang['COMMON'].Error,message);
  //   }
  // }
}

