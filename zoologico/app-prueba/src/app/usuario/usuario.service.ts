import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient, private cookies: CookieService) { }

  login(usuario: any): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'login', usuario, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  register(usuario: any): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'register', usuario, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  setToken(token: string) {
    return localStorage.setItem('token', token) //this.cookies.set('token', token);
  }

  get getToken() {
    return localStorage.getItem('token'); // this.cookies.get('token');
  }

  removeToken() {
    const httpOptions = {
      headers: this.httpOptions.headers.append('Authorization', `Bearer ${this.getToken}`)
    };
    localStorage.clear();
    return this.httpClient.post(environment.apiUrl + 'logout', null, httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent)
      errorMessage = error.error.message;
    else
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    return throwError(() => new Error(errorMessage));
  }
}
