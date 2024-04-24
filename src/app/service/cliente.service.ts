import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Cliente } from '../cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private cliente!: Cliente;
  private baseUrl: string = 'http://localhost:8083/clients';
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',          //la richiesta la posso mandare a chiunque
      'Access-Control-Allow-Method': 'GET,POST,PUT,DELETE,OPTIONS',      //richieste accettate
      'Content-Type': 'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  getClienti(): Observable<any> {
    return this._http.get(this.baseUrl + "/get", this.httpOptions).pipe(
      map((response => response)),
      catchError(this.errorHandler<any>('getClienti()')));
  }

  getCliente(id: string): Observable<any> {
    return this._http.get(this.baseUrl + '/contatto/' + id, this.httpOptions).pipe(
      map((response => response)),
      catchError(this.errorHandler<any>('getClienti()')));
  }

  createCliente(cliente: Cliente): Observable<any> {
    return this._http.post(this.baseUrl + '/add', cliente, this.httpOptions).pipe(
      map((response => response)),
      catchError(this.errorHandler<any>('createClienti(cliente: Cliente)')));
  }

  updateCliente(cliente: Cliente): Observable<any> {
    return this._http.put(this.baseUrl + '/update', cliente, this.httpOptions).pipe(
      map((response => response)),
      catchError(this.errorHandler<any>('updateClienti(cliente: Cliente)')));
  }

  deleteCliente(id: string): Observable<any> {
    return this._http.delete(this.baseUrl + '/delete/' + id, this.httpOptions).pipe(
      map((response => response)),
      catchError(this.errorHandler<any>('deleteClienti(id: number)')));
  }

  private errorHandler<T>(operation = 'Operazione', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation}) failed: ${error.message}`);
      return of(result as T);
    };
  }

  setter(cliente: Cliente) {
    this.cliente = cliente;
  }

  getter() {
    return this.cliente;
  }
}
