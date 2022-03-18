import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  apiUrl = '127.0.0.1:8000/';

  constructor(private httpClient: HttpClient, private cookies: CookieService) { }

  login(usuario: any): Observable<any> {
    let x: any;
    this.httpClient.get(this.apiUrl + 'sanctum/csrf-cookie').subscribe(res => {
      x = this.httpClient.post(environment.apiUrl + 'login', usuario, this.httpOptions);
    });
    return x;
  }

  register(usuario: any): Observable<any> {
    return this.httpClient.post(environment.apiUrl, usuario, this.httpOptions);
  }

  setToken(token: string) {
    return this.cookies.set('token', token);
  }

  getToken(token: string) {
    return this.cookies.get('token');
  }
}
