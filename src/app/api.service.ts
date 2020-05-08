import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Cars } from './cars';
import { Simulations } from './simulations';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
	
	getCars(): Observable<Cars[]> {
	    return this.http.get<Cars[]>(`/api/catalog/displaycar`)
	      .pipe(
	        tap(car => console.log('fetched cars')),
	        catchError(this.handleError('getCars', []))
	      );
	  }

	  getCarById(id: string): Observable<Cars> {
		  const url1='/api/catalog/car';
	    const url = `${url1}/${id}`;
	    return this.http.get<Cars>(url).pipe(
	      tap(_ => console.log(`fetched cases id=${id}`)),
	      catchError(this.handleError<Cars>(`getCasesById id=${id}`))
	    );
	  }

	  addCars(cars: Cars): Observable<Cars> {
	    return this.http.post<Cars>(apiUrl, cars, httpOptions).pipe(
	      tap((c: Cars) => console.log(`added product w/ id=${c._id}`)),
	      catchError(this.handleError<Cars>('addCars'))
	    );
	  }

	  updateCars(id: string, cars: Cars): Observable<any> {
	    const url = `${apiUrl}/${id}`;
	    return this.http.put(url, cars, httpOptions).pipe(
	      tap(_ => console.log(`updated cars id=${id}`)),
	      catchError(this.handleError<any>('updateCars'))
	    );
	  }

	  deleteCars(id: string): Observable<Cars> {
	    const url = `${apiUrl}/${id}`;
	    return this.http.delete<Cars>(url, httpOptions).pipe(
	      tap(_ => console.log(`deleted cars id=${id}`)),
	      catchError(this.handleError<Cars>('deleteCars'))
	    );
	  }

	  getSimilations(): Observable<Simulations[]> {
	    return this.http.get<Simulations[]>(`/api/catalog/displaycar`)
	      .pipe(
	        tap(simulations => console.log('fetched simulations')),
	        catchError(this.handleError('getSimulations', []))
	      );
	  }
}
