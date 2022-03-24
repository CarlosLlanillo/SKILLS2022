import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';

import { Animal } from './animal.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
    }),
  }
  apiUrl = environment.apiUrl + 'animales/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(this.apiUrl)
      .pipe(catchError(this.errorHandler));
  }

  slice(offset: number, length: number): Observable<Animal[]> {
    let httpParams = new HttpParams().set('offset', offset).set('length', length);
    let httpOptions = { headers: this.httpOptions.headers, params: httpParams };
    return this.httpClient.get<Animal[]>(this.apiUrl, httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  create(animal: Animal): Observable<Animal> {
    return this.httpClient.post<Animal>(this.apiUrl, animal, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  findId(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(this.apiUrl + id)
      .pipe(catchError(this.errorHandler))
  }
  findSlug(slug: string): Observable<Animal> {
    return this.httpClient.get<Animal>(this.apiUrl + slug)
      .pipe(catchError(this.errorHandler))
  }

  update(animal: Animal): Observable<Animal> {
    return this.httpClient.put<Animal>(this.apiUrl + animal.id, animal, this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }

  delete(id: number): Observable<Animal> {
    return this.httpClient.delete<Animal>(this.apiUrl + id, this.httpOptions)
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

    const req = new HttpRequest('POST', this.apiUrl + animal.id + '/imagen', formData, options);
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
