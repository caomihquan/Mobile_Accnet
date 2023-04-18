import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';
import { AESCryptoService } from '../aescrypto/aescrypto.service';
import { UserModel } from '../../models/user.model';
import { AppConfig } from 'src/app/config/AppConfig';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  // public fields
  private key: string = AppConfig.CONSTANT_KEY;
  public userLogin: Subject<UserModel | null> = new Subject();
  constructor(
    private aesCrypto: AESCryptoService
  ) { }

  // private methods
  set(user: UserModel) {
    if (user) {
      let us = JSON.stringify(user);
      us = this.aesCrypto.encode(us);
      this.userLogin.next(user);
      localStorage.setItem(this.key, us);
    }
  }

  get(): UserModel | null {
    if (!this.key) return null;
    try {
      let sUs = localStorage.getItem(this.key);
      if (!sUs) { return null; }
      sUs = this.aesCrypto.decode(sUs);
      if(!!sUs){
        return JSON.parse(sUs);
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  remove() {
    localStorage.removeItem(this.key);
    this.userLogin.next(null);
  }

  SetLanguage(lang: string){
    // if(lang)
    //   HrmStorage.setData('Language', lang);
    // else
    // HrmStorage.setData('Language', 'vn');
  }
  getLanguage(){
      // if(HrmStorage.getData('Language')){
      //   return HrmStorage.getData('Language')
      // }
      // else
      //   return 'vn';
  }
}
