import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';

import { Animal } from './animal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(environment.apiUrl)
      .pipe(catchError(this.errorHandler))
  }

  create(animal: Animal): Observable<Animal> {
    console.log(animal);
    
    return this.httpClient.post<Animal>(environment.apiUrl, JSON.stringify(animal), this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }

  find(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(environment.apiUrl + id)
      .pipe(catchError(this.errorHandler))
  }

  update(id:number, animal:Animal): Observable<Animal> {
    console.log(animal);
    
    return this.httpClient.put<Animal>(environment.apiUrl + id, JSON.stringify(animal), this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }

  delete(id:number): Observable<Animal> {
    return this.httpClient.delete<Animal>(environment.apiUrl + id, this.httpOptions)
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
