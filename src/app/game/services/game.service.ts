import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CellCoordinates, GameStateDto } from '../models/game.model';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  readonly API_HOST = 'https://localhost:4001/api/';//TODO spring uri
  
  headers = new HttpHeaders({
    'Content-Type':  'application/json;charset=utf-8',
  });

  constructor(private readonly httpClient: HttpClient) { }

  submit(cellCoordinates: CellCoordinates): Observable<GameStateDto> {
    return this.post('submit', cellCoordinates).pipe(
      catchError(e => {
        return throwError(e);
      }));
  }

  //TODO reset game state??
  private get<T>(url: string, params: any): Observable<T> {
    return this.httpClient.get<T>(`${this.API_HOST}${url}`, {params}).pipe(
      catchError(e => {
        return throwError(e);//TODO error handling
      }));
  }
//TODO post coordinates or whole board?? what to get from there?
  private post(url: string, data: any): Observable<any> {
    return this.httpClient.post(`${this.API_HOST}${url}`, data, {headers: this.headers}).pipe(
      tap(), //on success popup with info win/draw/next player turn?
      catchError(e => {
        return throwError(e);//TODO error handling
      }));
  }
}
