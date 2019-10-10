import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { LoginModel } from '../../dtos/login.model';

type EntityArrayResponseType = HttpResponse<LoginModel[]>;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER_ADDRESS: string = 'http://172.18.1.147/sibica/Login';
  authSubject = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) { }

  login(usuario,password): Observable<EntityArrayResponseType> {
    return this.httpClient.get<LoginModel[]>(`${this.AUTH_SERVER_ADDRESS}/loguearMobileExt?mail=${usuario}&pass=${password}`, { observe: 'response' });
  }
}
