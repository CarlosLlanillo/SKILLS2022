import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';

import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private apiURL = 'http://127.0.0.1:8000/api/animales/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(this.apiURL)
      .pipe(catchError(this.errorHandler))
  }

  create(animal: Animal): Observable<Animal> {
    return this.httpClient.post<Animal>(this.apiURL, JSON.stringify(animal), this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }

  find(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(this.apiURL + id)
      .pipe(catchError(this.errorHandler))
  }

  update(id:number, animal:Animal): Observable<Animal> {
    return this.httpClient.put<Animal>(this.apiURL + id, JSON.stringify(animal), this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }

  delete(id:number): Observable<Animal> {
    return this.httpClient.delete<Animal>(this.apiURL + id, this.httpOptions)
      .pipe(catchError(this.errorHandler))
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
