import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';

import { Animal } from './animal.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(environment.apiUrl)
      .pipe(catchError(this.errorHandler))
  }

  create(animal: Animal): Observable<Animal> {
    return this.httpClient.post<Animal>(environment.apiUrl, animal, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  find(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(environment.apiUrl + id)
      .pipe(catchError(this.errorHandler))
  }

  update(animal: Animal): Observable<Animal> {
    return this.httpClient.put<Animal>(environment.apiUrl + animal.id, animal, this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }

  delete(id: number): Observable<Animal> {
    return this.httpClient.delete<Animal>(environment.apiUrl + id, this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }

  imagen(animal: Animal): Observable<HttpEvent<any>> {
    let formData = new FormData();
    formData.append('imagen', animal.imagen);

    let params = new HttpParams();

    const options = {
      params: params,
      reportProgress: true,
    };

    const req = new HttpRequest('POST', environment.apiUrl + animal.id + '/imagen', formData, options);
    return this.httpClient.request(req);
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
