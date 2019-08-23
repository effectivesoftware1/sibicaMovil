import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import { Storage } from '@ionic/storage';
import { User } from './user';
import { AuthResponse } from './auth-response';
import { AuthResponsePrueba} from './auth-response-prueba';

type EntityArrayResponseType = HttpResponse<AuthResponsePrueba[]>;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER_ADDRESS: string = 'https://www.sibica.grupcadaya.com/ApiRest';
  authSubject = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient, private storage: Storage) { }

 
  // login(user: User): Observable<AuthResponse> {
  //   return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/login`, user).pipe(
  //     tap(async (res: AuthResponse) => {

  //       if (res.user) {
  //         await this.storage.set("ACCESS_TOKEN", res.user.access_token);
  //         await this.storage.set("EXPIRES_IN", res.user.expires_in);
  //         this.authSubject.next(true);
  //       }
  //     })
  //   );
  // }

  
  getUsuarios(): Observable<EntityArrayResponseType> {
    return this.httpClient.get<AuthResponsePrueba[]>(`${this.AUTH_SERVER_ADDRESS}/get_one`, { observe: 'response' });
  }

  login(Idusuario: string, password:string) {
    return this.httpClient.get<any>(this.AUTH_SERVER_ADDRESS+'usuarioByMail?mail='+Idusuario+'&pass='+password);
    //return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/get_one?codigo=${Idusuario}`).pipe(
     // tap(async (res: AuthResponsePrueba) => {

       
   //  })
    //);
  }

  async logout() {
    await this.storage.remove("ACCESS_TOKEN");
    await this.storage.remove("EXPIRES_IN");
    this.authSubject.next(false);
  }

  isLoggedIn() {
    return this.authSubject.asObservable();
  }
}
